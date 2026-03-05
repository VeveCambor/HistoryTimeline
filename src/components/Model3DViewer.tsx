import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PerspectiveCamera as ThreePerspectiveCamera } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Model3DConfig } from '../types'
import styled from 'styled-components'
import * as THREE from 'three'
import SketchfabViewer from './SketchfabViewer'

interface Model3DViewerProps {
  modelConfig: Model3DConfig
  color?: string
}

function Model3DViewer({ modelConfig, color }: Model3DViewerProps) {
  // Pokud je to Sketchfab model, použij Sketchfab viewer
  if (modelConfig.type === 'sketchfab' && modelConfig.sketchfabId) {
    return <SketchfabViewer sketchfabId={modelConfig.sketchfabId} title="3D Model" />
  }

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <ViewerContainer>
        <LoadingMessage>Načítání 3D modelu...</LoadingMessage>
      </ViewerContainer>
    )
  }

  return (
    <ViewerContainer>
      <Canvas shadows gl={{ antialias: true }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <CameraSetup />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={<LoadingMessage>Načítání modelu...</LoadingMessage>}>
          <GLTFModel modelConfig={modelConfig} />
        </Suspense>
        <OrbitControlsWrapper />
      </Canvas>
      <ControlsHint>
        <p>🖱️ Rotace: táhni myší | 🔍 Zoom: kolečko | 📐 Posun: Shift + táhni</p>
      </ControlsHint>
    </ViewerContainer>
  )
}

// Pomocná komponenta pro nastavení kamery
function CameraSetup() {
  const { camera } = useThree()
  useEffect(() => {
    if (camera instanceof ThreePerspectiveCamera) {
      camera.position.set(0, 0, 5)
      camera.lookAt(0, 0, 0)
    }
  }, [camera])
  return null
}

// OrbitControls wrapper používající přímo Three.js
function OrbitControlsWrapper() {
  const { camera, gl } = useThree()
  const controlsRef = useRef<ThreeOrbitControls | null>(null)

  useEffect(() => {
    if (camera && gl.domElement) {
      controlsRef.current = new ThreeOrbitControls(camera, gl.domElement)
      controlsRef.current.enablePan = true
      controlsRef.current.enableZoom = true
      controlsRef.current.enableRotate = true
      controlsRef.current.minDistance = 1
      controlsRef.current.maxDistance = 20

      return () => {
        if (controlsRef.current) {
          controlsRef.current.dispose()
        }
      }
    }
  }, [camera, gl])

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update()
    }
  })

  return null
}

// Komponenta pro načítání GLTF modelů
function GLTFModel({ modelConfig }: { modelConfig: Model3DConfig }) {
  const [model, setModel] = useState<THREE.Group | null>(null)
  const [error, setError] = useState<string | null>(null)
  const loaderRef = useRef<GLTFLoader | null>(null)

  useEffect(() => {
    if (!loaderRef.current) {
      loaderRef.current = new GLTFLoader()
      
      // Nastavit DRACO loader pro komprimované modely (volitelné)
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
      loaderRef.current.setDRACOLoader(dracoLoader)
    }

    setModel(null)
    setError(null)

    loaderRef.current.load(
      modelConfig.url,
      (gltf) => {
        const loadedModel = gltf.scene
        
        // Aplikovat transformace
        if (modelConfig.scale) {
          loadedModel.scale.set(modelConfig.scale, modelConfig.scale, modelConfig.scale)
        }
        
        if (modelConfig.position) {
          loadedModel.position.set(...modelConfig.position)
        }
        
        if (modelConfig.rotation) {
          loadedModel.rotation.set(...modelConfig.rotation)
        }

        // Vypočítat bounding box pro automatické vycentrování
        const box = new THREE.Box3().setFromObject(loadedModel)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        // Vycentrovat model
        loadedModel.position.sub(center)
        
        // Nastavit stíny
        loadedModel.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        setModel(loadedModel)
      },
      (progress) => {
        // Progress callback - můžeme použít pro progress bar
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
      },
      (error) => {
        console.error('Chyba při načítání 3D modelu:', error)
        setError('Nepodařilo se načíst 3D model. Zkontrolujte URL nebo zkuste později.')
      }
    )
  }, [modelConfig.url])

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    )
  }

  if (!model) {
    return null
  }

  return <primitive object={model} />
}

const ViewerContainer = styled.div`
  width: 100%;
  height: 600px;
  min-height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin: 0;

  @media (max-width: 768px) {
    height: 400px;
    min-height: 400px;
  }
`

const ControlsHint = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  z-index: 10;
  pointer-events: none;

  p {
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
`

const LoadingMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`

export default Model3DViewer

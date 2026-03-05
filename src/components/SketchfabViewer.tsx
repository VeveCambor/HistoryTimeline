import { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface SketchfabViewerProps {
  sketchfabId: string
  title?: string
}

function SketchfabViewer({ sketchfabId, title }: SketchfabViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Načíst Sketchfab embed script
    const script = document.createElement('script')
    script.src = 'https://embed.sketchfab.com/api/viewer.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const embedUrl = `https://sketchfab.com/models/${sketchfabId}/embed?autostart=0&transparent=0&ui_controls=1&ui_infos=1&ui_watermark=1&ui_help=0`

  return (
    <SketchfabContainer>
      <iframe
        ref={iframeRef}
        title={title || '3D Model'}
        src={embedUrl}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        frameBorder="0"
      />
    </SketchfabContainer>
  )
}

const SketchfabContainer = styled.div`
  width: 100%;
  height: 600px;
  min-height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  margin: 0;
  background: #000;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 400px;
    min-height: 400px;
  }
`

export default SketchfabViewer

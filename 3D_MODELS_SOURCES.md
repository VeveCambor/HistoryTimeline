# Zdroje 3D modelů pro historické artefakty

Tento dokument obsahuje odkazy na zdroje volně dostupných 3D modelů historických artefaktů, staveb a předmětů.

## Hlavní zdroje

### 1. Sketchfab
- **URL**: https://sketchfab.com/3d-models
- **Vyhledávání**: Použijte filtry "Downloadable" a "CC Attribution" nebo "CC0" pro volně použitelné modely
- **Příklady vyhledávání**:
  - `ancient pottery`
  - `egyptian pyramid`
  - `roman colosseum`
  - `ancient wheel`
  - `greek parthenon`
- **Jak získat URL**: Po otevření modelu → Download → GLTF/GLB formát

### 2. Smithsonian 3D
- **URL**: https://3d.si.edu/
- **Popis**: Volně dostupné 3D modely z muzeí Smithsonian
- **Formát**: GLTF/GLB
- **Licence**: Volně použitelné pro vzdělávací účely

### 3. Poly Haven
- **URL**: https://polyhaven.com/models
- **Popis**: Volně dostupné 3D modely (CC0 licence)
- **Formát**: GLTF/GLB

### 4. Google Arts & Culture
- **URL**: https://artsandculture.google.com/
- **Popis**: Některé modely mají 3D zobrazení
- **Poznámka**: Může vyžadovat extrakci URL

### 5. glTF Sample Models
- **URL**: https://github.com/KhronosGroup/glTF-Sample-Models
- **Popis**: Testovací modely v GLTF formátu
- **Použití**: Pro testování, ne pro produkci

## Jak přidat model do aplikace

1. Najděte model na jednom z výše uvedených zdrojů
2. Stáhněte GLTF nebo GLB soubor
3. Nahrajte soubor na vlastní server nebo použijte CDN
4. Přidejte URL do `events.ts`:

```typescript
model3D: {
  url: 'https://vase-server.com/models/pyramid.glb',
  scale: 2,              // Volitelné: měřítko modelu
  position: [0, -1, 0],  // Volitelné: pozice [x, y, z]
  rotation: [0, 0, 0]    // Volitelné: rotace [x, y, z] v radiánech
}
```

## Tipy pro optimalizaci

- Použijte GLB formát (binární, menší velikost)
- Komprimujte modely pomocí DRACO (podporováno)
- Optimalizujte textury (max 2048x2048 px)
- Omezte počet polygonů (max 50k pro web)

## Příklady konkrétních modelů

### Pyramida v Gíze
- Sketchfab: Hledej "Great Pyramid of Giza"
- Smithsonian: Možná dostupné v 3D sbírce

### Antická keramika
- Sketchfab: "ancient greek pottery", "roman amphora"
- Smithsonian: Archeologické artefakty

### Antické kolo
- Sketchfab: "ancient wheel", "chariot wheel"
- Poly Haven: Možné najít v sekci historických modelů

### Koloseum
- Sketchfab: "Colosseum Rome"
- Možné najít na různých 3D platformách

### Parthenon
- Sketchfab: "Parthenon Athens"
- Google Arts & Culture: Možné 3D zobrazení

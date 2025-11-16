# Historická časová osa

React aplikace pro zobrazení významných historických událostí na interaktivní mapě světa a časové ose.

## Funkce

- 🗺️ **Interaktivní mapa světa** - zobrazuje umístění historických událostí
- ⏱️ **Časová osa** - vizuální zobrazení událostí v chronologickém pořadí
- 📖 **Detailní stránky** - podrobné informace o každé události včetně obrázků
- 🎨 **Moderní UI** - responzivní design s pěkným uživatelským rozhraním

## Technologie

- **React 18** - UI framework
- **Vite** - build tool a dev server
- **React Router** - routing
- **Leaflet** - interaktivní mapy
- **React Leaflet** - React wrapper pro Leaflet

## Instalace

1. Nainstalujte závislosti:
```bash
npm install
```

2. Spusťte vývojový server:
```bash
npm run dev
```

3. Otevřete aplikaci v prohlížeči na adrese, kterou Vite zobrazí (obvykle `http://localhost:5173`)

## Build pro produkci

```bash
npm run build
```

Vytvořené soubory budou v adresáři `dist`.

## Struktura projektu

```
src/
├── components/       # React komponenty
│   ├── WorldMap.jsx  # Komponenta pro mapu světa
│   └── Timeline.jsx  # Komponenta pro časovou osu
├── pages/            # Stránky aplikace
│   ├── HomePage.jsx  # Hlavní stránka s mapou a časovou osou
│   └── EventDetail.jsx # Detailní stránka události
├── data/             # Data
│   └── events.js     # Seznam historických událostí
├── App.jsx           # Hlavní komponenta s routingem
└── main.jsx          # Vstupní bod aplikace
```

## Přidávání nových událostí

Události můžete přidat do souboru `src/data/events.js`. Každá událost by měla obsahovat:

- `id` - unikátní identifikátor
- `year` - rok události
- `title` - název události
- `location` - místo události
- `coordinates` - GPS souřadnice `{ lat, lng }`
- `description` - krátký popis
- `details` - podrobnější informace
- `tags` - pole štítků
- `image` - URL obrázku (volitelné)

## Budoucí vylepšení

- Filtrování událostí podle období nebo kategorie
- Vyhledávání událostí
- Přidání více obrázků pro každou událost
- Animace a přechody
- Export dat
- Více jazykových verzí


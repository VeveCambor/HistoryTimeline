import { HistoricalEvent } from '../types'
import { getPeriodForYear } from '../types/periods'

// Ukázková data historických událostí
export const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    year: -3000,
    title: 'Vznik písma v Mezopotámii',
    location: 'Mezopotámie',
    coordinates: { lat: 33.0, lng: 44.0 },
    description: 'Vznik klínového písma v Sumeru, které se stalo základem pro další písemné systémy.',
    details: 'Klínové písmo bylo nejstarším známým systémem psaní. Používalo se pro zaznamenávání obchodních transakcí, zákonů a literárních děl. Tento vynález umožnil uchování a předávání znalostí napříč generacemi.',
    tags: ['Písmo', 'Mezopotámie', 'Civilizace'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-3000)
  },
  {
    id: 2,
    year: -776,
    title: 'První olympijské hry',
    location: 'Olympie, Řecko',
    coordinates: { lat: 37.6383, lng: 21.6300 },
    description: 'První zaznamenané olympijské hry v antickém Řecku, které se konaly na počest boha Dia.',
    details: 'Olympijské hry byly nejvýznamnější sportovní událostí antického světa. Konaly se každé čtyři roky a přitahovaly sportovce a diváky z celého řeckého světa. Hry byly tak důležité, že během jejich konání se zastavovaly války.',
    tags: ['Sport', 'Řecko', 'Antika'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    period: getPeriodForYear(-776)
  },
  {
    id: 3,
    year: -44,
    title: 'Atentát na Julia Caesara',
    location: 'Řím, Itálie',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Julius Caesar byl zavražděn skupinou římských senátorů včetně Bruta a Cassia.',
    details: 'Atentát na Julia Caesara 15. března 44 př. n. l. byl klíčovým momentem v historii Římské říše. Caesarova smrt vedla k občanské válce a nakonec k pádu Římské republiky a vzniku Římského císařství.',
    tags: ['Řím', 'Politika', 'Antika'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    historicalBoundaries: [
      {
        name: 'Římská říše (cca 44 př. n. l.)',
        color: '#8B4513',
        coordinates: [[
          // Zjednodušené hranice Římské říše kolem roku 44 př. n. l.
          { lat: 36.0, lng: -10.0 }, // Španělsko - západ
          { lat: 43.0, lng: -10.0 }, // Galie - západ
          { lat: 51.0, lng: 2.0 },   // Británie - jih
          { lat: 51.0, lng: 8.0 },   // Germánie - západ
          { lat: 50.0, lng: 15.0 },  // Střední Evropa
          { lat: 45.0, lng: 20.0 },  // Balkán
          { lat: 40.0, lng: 28.0 },  // Konstantinopol
          { lat: 36.0, lng: 36.0 },  // Sýrie
          { lat: 32.0, lng: 35.0 },  // Palestina
          { lat: 30.0, lng: 32.0 },  // Egypt
          { lat: 33.0, lng: 10.0 },  // Severní Afrika - východ
          { lat: 36.0, lng: 5.0 },   // Severní Afrika - střed
          { lat: 36.0, lng: -10.0 }, // Španělsko - západ (uzavření)
        ]]
      }
    ],
    period: getPeriodForYear(-44)
  },
  {
    id: 4,
    year: 476,
    title: 'Pád Západořímské říše',
    location: 'Řím, Itálie',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Poslední západořímský císař Romulus Augustulus byl sesazen germánským vůdcem Odoakerem.',
    details: 'Tato událost je tradičně považována za konec starověku a začátek středověku. Pád Římské říše měl dalekosáhlé důsledky pro Evropu a celý svět.',
    tags: ['Řím', 'Středověk', 'Historie'],
    image: 'https://images.unsplash.com/photo-1529360269321-4c0a0c0b5b5e?w=800',
    historicalBoundaries: [
      {
        name: 'Západořímská říše (476 n. l.)',
        color: '#8B4513',
        coordinates: [[
          // Zjednodušené hranice Západořímské říše v době pádu
          { lat: 36.0, lng: -10.0 }, // Španělsko - západ
          { lat: 43.0, lng: -10.0 }, // Galie - západ
          { lat: 50.0, lng: 2.0 },   // Severní Galie
          { lat: 47.0, lng: 8.0 },   // Alpy
          { lat: 45.0, lng: 12.0 },  // Severní Itálie
          { lat: 41.0, lng: 15.0 },  // Střední Itálie
          { lat: 36.0, lng: 15.0 },  // Jižní Itálie
          { lat: 36.0, lng: 5.0 },   // Severní Afrika
          { lat: 36.0, lng: -10.0 }, // Španělsko - západ (uzavření)
        ]]
      },
      {
        name: 'Východořímská říše (476 n. l.)',
        color: '#4169E1',
        coordinates: [[
          // Zjednodušené hranice Východořímské říše
          { lat: 40.0, lng: 15.0 },  // Balkán - západ
          { lat: 45.0, lng: 20.0 },  // Balkán - sever
          { lat: 40.0, lng: 28.0 },  // Konstantinopol
          { lat: 36.0, lng: 36.0 },  // Sýrie
          { lat: 32.0, lng: 35.0 },  // Palestina
          { lat: 30.0, lng: 32.0 },  // Egypt
          { lat: 32.0, lng: 20.0 },  // Kyrenaika
          { lat: 40.0, lng: 15.0 },  // Balkán - západ (uzavření)
        ]]
      }
    ],
    period: getPeriodForYear(476)
  },
  {
    id: 5,
    year: 1066,
    title: 'Bitva u Hastingsu',
    location: 'Hastings, Anglie',
    coordinates: { lat: 50.8544, lng: 0.5858 },
    description: 'Vilém Dobyvatel porazil anglického krále Harolda II. a získal anglický trůn.',
    details: 'Bitva u Hastingsu byla rozhodující bitvou normanského dobytí Anglie. Vilém Dobyvatel se stal anglickým králem a zavedl normanskou vládu, která změnila anglickou společnost, jazyk a kulturu.',
    tags: ['Anglie', 'Válka', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1066)
  },
  {
    id: 6,
    year: 1492,
    title: 'Kolumbus objevuje Ameriku',
    location: 'Bahamy',
    coordinates: { lat: 25.0, lng: -77.0 },
    description: 'Kryštof Kolumbus přistál na Bahamách, čímž zahájil evropskou kolonizaci Ameriky.',
    details: 'Kolumbova plavba otevřela novou éru v historii. Jeho objev vedl k masivní migraci Evropanů do Nového světa a k výměně zboží, rostlin, zvířat a nemocí mezi kontinenty, což mělo trvalý dopad na celý svět.',
    tags: ['Objevy', 'Amerika', 'Kolonizace'],
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
    period: getPeriodForYear(1492)
  },
  {
    id: 7,
    year: 1789,
    title: 'Francouzská revoluce',
    location: 'Paříž, Francie',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description: 'Začátek Francouzské revoluce, která svrhla monarchii a zavedla republiku.',
    details: 'Francouzská revoluce byla jedním z nejvýznamnějších politických převratů v historii. Přinesla myšlenky svobody, rovnosti a bratrství, které ovlivnily celý svět a vedly k moderním demokratickým státům.',
    tags: ['Francie', 'Revoluce', 'Politika'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    period: getPeriodForYear(1789)
  },
  {
    id: 8,
    year: 1969,
    title: 'První přistání na Měsíci',
    location: 'Měsíc',
    coordinates: { lat: 0.6875, lng: 23.4333 },
    description: 'Apollo 11 úspěšně přistálo na Měsíci, Neil Armstrong se stal prvním člověkem, který vstoupil na měsíční povrch.',
    details: 'Tato událost byla vrcholem vesmírného závodu mezi USA a SSSR. Armstrongův krok na Měsíci byl sledován stovkami milionů lidí po celém světě a představoval jeden z největších úspěchů lidstva.',
    tags: ['Vesmír', 'USA', 'Věda'],
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800',
    period: getPeriodForYear(1969)
  }
]


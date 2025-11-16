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
  },
  // Pravěk
  {
    id: 9,
    year: -10000,
    title: 'Začátek neolitické revoluce',
    location: 'Úrodný půlměsíc',
    coordinates: { lat: 33.0, lng: 44.0 },
    description: 'Lidé začali pěstovat plodiny a chovat zvířata, což vedlo k usedlému způsobu života.',
    details: 'Neolitická revoluce byla přechod od lovu a sběru k zemědělství. Tato změna umožnila vznik prvních osad, specializaci práce a růst populace. Byla to jedna z nejdůležitějších změn v historii lidstva.',
    tags: ['Zemědělství', 'Pravěk', 'Civilizace'],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213722d?w=800',
    period: getPeriodForYear(-10000)
  },
  {
    id: 10,
    year: -2560,
    title: 'Dokončení Velké pyramidy v Gíze',
    location: 'Gíza, Egypt',
    coordinates: { lat: 29.9792, lng: 31.1342 },
    description: 'Dokončení pyramidy faraona Chufua (Cheopse), jedné ze sedmi divů světa.',
    details: 'Velká pyramida v Gíze je nejstarším a jediným dochovaným divem starověkého světa. Byla nejvyšší stavbou na světě po více než 3800 let a představuje vrchol egyptského stavebního umění.',
    tags: ['Egypt', 'Architektura', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
    period: getPeriodForYear(-2560)
  },
  // Starověk
  {
    id: 11,
    year: -480,
    title: 'Bitva u Thermopyl',
    location: 'Thermopyly, Řecko',
    coordinates: { lat: 38.7965, lng: 22.5364 },
    description: 'Spartský král Leonidas a jeho 300 bojovníků bránili průsmyk proti perské armádě.',
    details: 'Bitva u Thermopyl byla jednou z nejslavnějších bitev v historii. Ačkoli Řekové prohráli, jejich hrdinný odpor inspiroval celé Řecko k dalšímu boji proti perské invazi.',
    tags: ['Řecko', 'Válka', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-480)
  },
  {
    id: 12,
    year: -221,
    title: 'Sjednocení Číny pod dynastií Čchin',
    location: 'Čína',
    coordinates: { lat: 35.0, lng: 105.0 },
    description: 'První císař Čchin Š\'-chuang-ti sjednotil Čínu a založil první centralizovanou čínskou říši.',
    details: 'Sjednocení Číny pod dynastií Čchin ukončilo období válčících států. První císař zavedl jednotnou měnu, písmo a měřicí systémy. Začala se stavět Velká čínská zeď.',
    tags: ['Čína', 'Politika', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(-221)
  },
  {
    id: 13,
    year: -27,
    title: 'Založení Římského císařství',
    location: 'Řím, Itálie',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Octavianus přijal titul Augustus a stal se prvním římským císařem.',
    details: 'Konec Římské republiky a začátek Římského císařství. Augustus zavedl Pax Romana, období míru a stability, které trvalo více než 200 let.',
    tags: ['Řím', 'Politika', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    period: getPeriodForYear(-27)
  },
  {
    id: 14,
    year: 313,
    title: 'Edikt milánský',
    location: 'Milán, Itálie',
    coordinates: { lat: 45.4642, lng: 9.1900 },
    description: 'Císař Konstantin I. legalizoval křesťanství v Římské říši.',
    details: 'Edikt milánský ukončil pronásledování křesťanů a umožnil svobodu náboženského vyznání. Tato událost měla zásadní vliv na šíření křesťanství po celé Evropě.',
    tags: ['Řím', 'Náboženství', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1529360269321-4c0a0c0b5b5e?w=800',
    period: getPeriodForYear(313)
  },
  // Středověk
  {
    id: 15,
    year: 622,
    title: 'Hidžra - začátek islámského kalendáře',
    location: 'Medína, Saúdská Arábie',
    coordinates: { lat: 24.5247, lng: 39.5692 },
    description: 'Prorok Mohamed uprchl z Mekky do Medíny, což označuje začátek islámské éry.',
    details: 'Hidžra je jedním z nejdůležitějších momentů v historii islámu. Z Medíny se islám začal šířit po celém Arabském poloostrově a později do celého světa.',
    tags: ['Islám', 'Náboženství', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(622)
  },
  {
    id: 16,
    year: 800,
    title: 'Korunovace Karla Velikého',
    location: 'Řím, Itálie',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Karel Veliký byl korunován císařem Svaté říše římské papežem Lvem III.',
    details: 'Korunovace Karla Velikého obnovila ideu římského císařství na Západě. Karel Veliký sjednotil velkou část západní Evropy a podporoval renesanci vzdělání a kultury.',
    tags: ['Evropa', 'Politika', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1529360269321-4c0a0c0b5b5e?w=800',
    period: getPeriodForYear(800)
  },
  {
    id: 17,
    year: 1096,
    title: 'První křížová výprava',
    location: 'Jeruzalém',
    coordinates: { lat: 31.7683, lng: 35.2137 },
    description: 'Začátek první křížové výpravy na výzvu papeže Urbana II. k osvobození Svaté země.',
    details: 'První křížová výprava byla první z řady vojenských tažení evropských křesťanů do Svaté země. Výprava vedla k dobytí Jeruzaléma a založení křižáckých států.',
    tags: ['Válka', 'Náboženství', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1096)
  },
  {
    id: 18,
    year: 1215,
    title: 'Magna Charta Libertatum',
    location: 'Runnymede, Anglie',
    coordinates: { lat: 51.4444, lng: -0.5611 },
    description: 'Anglický král Jan Bezzemek podepsal Magnu Chartu, která omezila královskou moc.',
    details: 'Magna Charta byla jedním z prvních dokumentů, které omezily moc panovníka a zavedly principy právního státu. Stala se základem pro moderní ústavní právo.',
    tags: ['Anglie', 'Politika', 'Právo'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1215)
  },
  {
    id: 19,
    year: 1347,
    title: 'Začátek černé smrti v Evropě',
    location: 'Sicílie, Itálie',
    coordinates: { lat: 37.5, lng: 14.0 },
    description: 'Morová epidemie dorazila do Evropy a způsobila smrt třetiny až poloviny populace.',
    details: 'Černá smrt byla jednou z nejničivějších pandemií v historii lidstva. Zabila odhadem 75-200 milionů lidí v Evropě a Asii a měla hluboký dopad na společnost, ekonomiku a kulturu.',
    tags: ['Epidemie', 'Evropa', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1347)
  },
  {
    id: 20,
    year: 1453,
    title: 'Pád Konstantinopole',
    location: 'Konstantinopol (Istanbul), Turecko',
    coordinates: { lat: 41.0082, lng: 28.9784 },
    description: 'Osmanská říše dobyla Konstantinopol, čímž skončila Byzantská říše.',
    details: 'Pád Konstantinopole ukončil více než tisíciletou existenci Byzantské říše. Tato událost je často považována za konec středověku a začátek novověku.',
    tags: ['Turecko', 'Válka', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    period: getPeriodForYear(1453)
  },
  {
    id: 21,
    year: 1455,
    title: 'Gutenbergova tiskařská revoluce',
    location: 'Mohuč, Německo',
    coordinates: { lat: 50.0, lng: 8.2667 },
    description: 'Johannes Gutenberg vytiskl první knihu pomocí pohyblivých liter.',
    details: 'Gutenbergův vynález knihtisku způsobil revoluci v šíření informací. Umožnil masovou produkci knih, což vedlo k šíření vzdělání, vědy a myšlenek po celé Evropě.',
    tags: ['Technologie', 'Vzdělání', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?w=800',
    period: getPeriodForYear(1455)
  },
  // Novověk
  {
    id: 22,
    year: 1517,
    title: 'Lutherovy 95 tezí',
    location: 'Wittenberg, Německo',
    coordinates: { lat: 51.8667, lng: 12.6333 },
    description: 'Martin Luther zveřejnil 95 tezí, čímž zahájil protestantskou reformaci.',
    details: 'Lutherovy teze kritizovaly praktiky katolické církve a vedly k náboženské reformaci, která rozdělila západní křesťanství a změnila politickou mapu Evropy.',
    tags: ['Náboženství', 'Reformace', 'Novověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1517)
  },
  {
    id: 23,
    year: 1618,
    title: 'Začátek třicetileté války',
    location: 'Praha, Čechy',
    coordinates: { lat: 50.0755, lng: 14.4378 },
    description: 'Pražská defenestrace zahájila třicetiletou válku, jeden z nejničivějších konfliktů v evropské historii.',
    details: 'Třicetiletá válka byla konfliktem mezi katolickými a protestantskými státy. Způsobila obrovské utrpení a změnila politickou strukturu Evropy. Ukončila ji Vestfálská mírová smlouva v roce 1648.',
    tags: ['Válka', 'Evropa', 'Novověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1618)
  },
  {
    id: 24,
    year: 1687,
    title: 'Newtonovy Principia',
    location: 'Londýn, Anglie',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    description: 'Isaac Newton publikoval "Philosophiæ Naturalis Principia Mathematica", základní dílo moderní fyziky.',
    details: 'Newtonovy Principia popisují zákony pohybu a gravitace. Toto dílo položilo základy moderní fyziky a vědecké revoluce, která změnila způsob, jakým lidé chápou svět.',
    tags: ['Věda', 'Fyzika', 'Novověk'],
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800',
    period: getPeriodForYear(1687)
  },
  // Moderní doba
  {
    id: 25,
    year: 1776,
    title: 'Americká deklarace nezávislosti',
    location: 'Filadelfie, USA',
    coordinates: { lat: 39.9526, lng: -75.1652 },
    description: 'Třináct amerických kolonií vyhlásilo nezávislost na Velké Británii.',
    details: 'Deklarace nezávislosti založila Spojené státy americké a vyjádřila principy lidských práv a demokracie. Inspirovala revoluční hnutí po celém světě.',
    tags: ['USA', 'Politika', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    period: getPeriodForYear(1776)
  },
  {
    id: 26,
    year: 1804,
    title: 'Napoleon se stává císařem',
    location: 'Paříž, Francie',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description: 'Napoleon Bonaparte se korunoval císařem Francouzů.',
    details: 'Napoleonova korunovace symbolizovala vrchol jeho moci. Jeho vojenské kampaně změnily mapu Evropy a šířily revoluční ideály, i když také vedly k rozsáhlým válkám.',
    tags: ['Francie', 'Politika', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    period: getPeriodForYear(1804)
  },
  {
    id: 27,
    year: 1815,
    title: 'Bitva u Waterloo',
    location: 'Waterloo, Belgie',
    coordinates: { lat: 50.7147, lng: 4.3992 },
    description: 'Napoleonova definitivní porážka spojenými armádami pod vedením vévody z Wellingtonu.',
    details: 'Bitva u Waterloo ukončila napoleonské války a Napoleonovu kariéru. Tato porážka vedla k obnově monarchií v Evropě a novému uspořádání kontinentu.',
    tags: ['Válka', 'Evropa', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1815)
  },
  {
    id: 28,
    year: 1865,
    title: 'Konec americké občanské války',
    location: 'Appomattox, USA',
    coordinates: { lat: 37.3842, lng: -78.8256 },
    description: 'Generál Lee se vzdal generálu Grantovi, čímž skončila občanská válka a otroctví bylo zrušeno.',
    details: 'Konec občanské války sjednotil Spojené státy a vedl ke zrušení otroctví. Byla to nejkrvavější válka v americké historii a měla hluboký dopad na americkou společnost.',
    tags: ['USA', 'Válka', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    period: getPeriodForYear(1865)
  },
  {
    id: 29,
    year: 1914,
    title: 'Začátek první světové války',
    location: 'Sarajevo, Bosna',
    coordinates: { lat: 43.8563, lng: 18.4131 },
    description: 'Atentát na arcivévodu Františka Ferdinanda d\'Este vyvolal první světovou válku.',
    details: 'První světová válka byla jedním z nejničivějších konfliktů v historii. Způsobila smrt milionů lidí a vedla k pádu čtyř velkých říší. Změnila politickou mapu Evropy a světa.',
    tags: ['Válka', 'Evropa', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1914)
  },
  {
    id: 30,
    year: 1917,
    title: 'Ruská revoluce',
    location: 'Petrohrad, Rusko',
    coordinates: { lat: 59.9343, lng: 30.3351 },
    description: 'Bolševická revoluce svrhla carský režim a zavedla komunistickou vládu.',
    details: 'Ruská revoluce vedla k pádu Ruské říše a vzniku Sovětského svazu. Měla zásadní vliv na světovou politiku 20. století a vedla ke studené válce.',
    tags: ['Rusko', 'Revoluce', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1917)
  },
  {
    id: 31,
    year: 1945,
    title: 'Konec druhé světové války',
    location: 'Berlín, Německo',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: 'Kapitulace Německa a Japonska ukončila nejničivější válku v historii.',
    details: 'Druhá světová válka způsobila smrt více než 60 milionů lidí. Její konec vedl k novému světovému uspořádání, vzniku OSN a začátku studené války mezi USA a SSSR.',
    tags: ['Válka', 'Evropa', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1945)
  },
  {
    id: 32,
    year: 1989,
    title: 'Pád Berlínské zdi',
    location: 'Berlín, Německo',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: 'Pád Berlínské zdi symbolizoval konec studené války a sjednocení Německa.',
    details: 'Pád Berlínské zdi byl jedním z nejvýznamnějších momentů konce studené války. Symbolizoval konec rozdělení Evropy a vedl k demokratickým změnám ve východní Evropě.',
    tags: ['Německo', 'Politika', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1989)
  },
  {
    id: 33,
    year: 2001,
    title: 'Útoky na Světové obchodní centrum',
    location: 'New York, USA',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description: 'Teroristické útoky na Světové obchodní centrum změnily světovou bezpečnostní politiku.',
    details: 'Útoky z 11. září 2001 byly nejničivějším teroristickým útokem v historii USA. Měly zásadní dopad na mezinárodní vztahy, bezpečnostní politiku a vedly k válkám v Afghánistánu a Iráku.',
    tags: ['USA', 'Terorismus', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    period: getPeriodForYear(2001)
  }
]


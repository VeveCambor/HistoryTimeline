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
    location: 'Kennedy Space Center, Florida, USA',
    coordinates: { lat: 28.5721, lng: -80.6480 },
    description: 'Apollo 11 úspěšně přistálo na Měsíci, Neil Armstrong se stal prvním člověkem, který vstoupil na měsíční povrch.',
    details: 'Tato událost byla vrcholem vesmírného závodu mezi USA a SSSR. Armstrongův krok na Měsíci byl sledován stovkami milionů lidí po celém světě a představoval jeden z největších úspěchů lidstva. Mise startovala z Kennedy Space Center na Floridě.',
    tags: ['Vesmír', 'USA', 'Věda'],
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800',
    period: getPeriodForYear(1969)
  },
  // Pravěk
  {
    id: 9,
    year: -40000,
    title: 'První jeskynní malby',
    location: 'Chauvet, Francie',
    coordinates: { lat: 44.3833, lng: 4.4167 },
    description: 'Vznik prvních známých jeskynních maleb v Chauvetově jeskyni, zobrazujících zvířata a abstraktní symboly.',
    details: 'Jeskynní malby v Chauvetově jeskyni jsou jedny z nejstarších známých uměleckých děl lidstva, datované do období před 30 000 až 40 000 lety. Jeskyně byla objevena v roce 1994 a obsahuje více než 400 maleb zvířat včetně lvů, medvědů, nosorožců a koní. Malby jsou vytvořené pomocí uhlíku a okru a vykazují pokročilé umělecké techniky jako perspektiva a stínování. Tyto malby představují důležitý milník v kulturním vývoji člověka a ukazují schopnost abstraktního myšlení, uměleckého vyjádření a možná i náboženských nebo rituálních praktik. Jeskyně byla pravděpodobně používána pro rituální účely a malby mohly sloužit jako forma komunikace nebo záznamu důležitých událostí. Objev těchto maleb změnil naše chápání pravěkého umění a ukázal, že lidé měli rozvinutou kulturu již v době paleolitu.',
    tags: ['Umění', 'Pravěk', 'Kultura'],
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
    period: getPeriodForYear(-40000)
  },
  {
    id: 34,
    year: -25000,
    title: 'Vznik šamanismu',
    location: 'Sibiř, Rusko',
    coordinates: { lat: 60.0, lng: 100.0 },
    description: 'Vznik prvních šamanských praktik a náboženských rituálů v pravěkých společnostech.',
    details: 'Šamanismus byl jedním z prvních náboženských systémů lidstva, který vznikl pravděpodobně v období před 25 000 lety. Šamani sloužili jako prostředníci mezi lidským a duchovním světem, léčitelé, věštci a duchovní vůdci svých komunit. Šamanské praktiky zahrnovaly rituální tance, bubnování, užívání halucinogenních látek a transové stavy, během kterých šamani komunikovali s duchy a zvířaty. Šamanismus byl zvláště rozšířen v severních oblastech Eurasie a Severní Ameriky, kde přežívá dodnes u některých domorodých kultur. Tento náboženský systém měl hluboký vliv na pravěké společnosti - šamani pomáhali při lovu, léčení nemocí, předpovídání počasí a řešení konfliktů. Šamanismus také ovlivnil pozdější náboženské systémy a některé jeho prvky lze nalézt v mnoha světových náboženstvích. Archeologické nálezy z této doby, jako jsou rituální předměty a jeskynní malby, naznačují existenci šamanských praktik již v paleolitu.',
    tags: ['Náboženství', 'Pravěk', 'Kultura'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    period: getPeriodForYear(-25000)
  },
  {
    id: 35,
    year: -12000,
    title: 'Domestikace psa',
    location: 'Střední Asie',
    coordinates: { lat: 45.0, lng: 80.0 },
    description: 'Lidé začali domestikovat vlky, což vedlo k vzniku psa jako prvního domestikovaného zvířete.',
    details: 'Domestikace psa byla prvním a nejdůležitějším krokem k domestikaci zvířat. Proces začal před přibližně 15 000 až 12 000 lety, kdy se vlci začali přibližovat k lidským táborům, pravděpodobně kvůli zbytkům jídla. Postupně se vyvinul vzájemný vztah - lidé poskytovali vlkům potravu a úkryt, zatímco vlci pomáhali při lovu, hlídání tábora a varování před nebezpečím. Tento proces vedl k genetickým změnám - domestikovaní psi se lišili od vlků menší velikostí, kratšími čenichy a přátelštějším chováním. Psi se stali nepostradatelnými společníky pravěkých lidí - pomáhali při lovu velkých zvířat, hlídali osady, pomáhali při pastevectví a poskytovali teplo v chladných nocích. Tento vztah mezi člověkem a psem trvá dodnes a psi zůstávají jedním z nejvěrnějších společníků lidstva. Domestikace psa také otevřela cestu k domestikaci dalších zvířat, což bylo klíčové pro rozvoj zemědělství a usedlých společností.',
    tags: ['Domestikace', 'Pravěk', 'Zvířata'],
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80',
    period: getPeriodForYear(-12000)
  },
  {
    id: 36,
    year: -10000,
    title: 'Začátek neolitické revoluce',
    location: 'Úrodný půlměsíc',
    coordinates: { lat: 33.0, lng: 44.0 },
    description: 'Lidé začali pěstovat plodiny a chovat zvířata, což vedlo k usedlému způsobu života.',
    details: 'Neolitická revoluce, která začala před přibližně 12 000 lety v oblasti Úrodného půlměsíce (Mezopotámie, Levanta, Anatolie), byla jednou z nejdůležitějších změn v historii lidstva. Tento přechod od lovu a sběru k zemědělství a chovu zvířat způsobil revoluční změny v lidské společnosti. Lidé začali pěstovat pšenici, ječmen, čočku a hrách a domestikovali ovce, kozy, prasata a skot. Tato změna umožnila usedlý způsob života - místo neustálého putování za potravou mohli lidé zůstat na jednom místě a budovat trvalé osady. Zemědělství vedlo k růstu populace, protože dokázalo uživit více lidí na menší ploše. Vznikla specializace práce - někteří lidé se stali zemědělci, jiní řemeslníky, obchodníky nebo kněžími. To vedlo k rozvoji technologií, obchodu, sociální hierarchie a nakonec k vzniku prvních měst a civilizací. Neolitická revoluce se postupně šířila z Úrodného půlměsíce do Evropy, Asie a Afriky, transformovala lidskou společnost a položila základy pro moderní svět.',
    tags: ['Zemědělství', 'Pravěk', 'Civilizace'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    period: getPeriodForYear(-10000)
  },
  {
    id: 37,
    year: -9000,
    title: 'První trvalé osady',
    location: 'Jericho, Palestina',
    coordinates: { lat: 31.8553, lng: 35.4627 },
    description: 'Vznik prvních trvalých osad v Jerichu, jednoho z nejstarších měst na světě.',
    details: 'Jericho, ležící v údolí Jordánu, je považováno za jedno z nejstarších trvale obydlených měst na světě s historií sahající až do doby před 11 000 lety. Vzniklo díky neolitické revoluci a zemědělství, které umožnilo usedlý způsob života. Rané Jericho mělo kamenné zdi vysoké až 4 metry a kamennou věž vysokou 8,5 metru, což naznačuje pokročilé stavební techniky a potřebu obrany. Město mělo pravděpodobně několik set až tisíc obyvatel, kteří se živili zemědělstvím - pěstovali pšenici, ječmen, čočku a fíky a chovali kozy a ovce. Jericho bylo strategicky umístěno u pramene vody a na křižovatce obchodních cest, což přispělo k jeho dlouhodobému osídlení. Archeologické nálezy z Jericha zahrnují keramiku, kamenné nástroje, sošky a dokonce i lebky pokryté sádrou, což naznačuje rozvinutou kulturu a možná i náboženské praktiky. Jericho představuje přechod od nomádského způsobu života k usedlým městským společnostem a je považováno za kolébku městské civilizace.',
    tags: ['Osady', 'Pravěk', 'Civilizace'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80',
    period: getPeriodForYear(-9000)
  },
  {
    id: 38,
    year: -7000,
    title: 'Vznik keramiky',
    location: 'Mezopotámie',
    coordinates: { lat: 33.0, lng: 44.0 },
    description: 'Lidé začali vyrábět keramické nádoby pro skladování a vaření.',
    details: 'Vynález keramiky před přibližně 9 000 lety byl jedním z nejdůležitějších technologických pokroků v pravěku. Keramika se vyráběla z hlíny, která se tvarovala a pak vypalovala v ohni, čímž se stala tvrdou a vodotěsnou. První keramické nádoby byly jednoduché, ale postupně se technika zdokonalovala - lidé začali používat hrnčířský kruh, zdobit nádoby vzory a barvit je. Keramické nádoby měly zásadní význam pro usedlé společnosti - umožnily skladování obilí, vody a dalších potravin po delší dobu, což bylo klíčové pro přežití během suchých období. Keramika také umožnila vaření potravin, což zlepšilo stravitelnost a nutriční hodnotu jídla. Kromě praktického použití se keramika stala také uměleckým médiem - nádoby byly zdobeny složitými vzory, které nám dnes poskytují cenné informace o kultuře a umění pravěkých společností. Keramika také umožnila rozvoj obchodu, protože nádoby se staly cenným zbožím. Tento vynález přispěl k rozvoji usedlých společností a byl předzvěstí dalších technologických pokroků.',
    tags: ['Technologie', 'Pravěk', 'Řemesla'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    period: getPeriodForYear(-7000)
  },
  {
    id: 39,
    year: -5000,
    title: 'Domestikace koně',
    location: 'Střední Asie',
    coordinates: { lat: 45.0, lng: 80.0 },
    description: 'Lidé začali domestikovat koně, což změnilo dopravu a válčení.',
    details: 'Domestikace koně před přibližně 6 000 lety v stepích střední Asie měla revoluční dopad na lidskou společnost. Koně byli původně loveni pro maso, ale postupně se lidé naučili je chovat a využívat k jízdě a tahu. První domestikovaní koně byli menší než moderní koně, ale jejich síla a rychlost změnily způsob života lidí. Koně umožnili rychlejší dopravu na dlouhé vzdálenosti, což vedlo k rozvoji obchodu a komunikace mezi vzdálenými komunitami. Byli klíčoví pro rozvoj nomádských kultur stepí, které mohly migrovat se svými stády a rychle se přesouvat. Koně také změnili způsob válčení - jízda na koni poskytovala vojákům mobilitu a výhodu v boji. Později se koně stali symbolem moci a bohatství. Domestikace koně také umožnila rozvoj pastevectví - pastevci mohli efektivněji spravovat velká stáda dobytka. Tento vynález měl zásadní vliv na historii - kočovné národy na koních, jako byli Hunové a Mongolové, později změnily mapu Evropy a Asie. Kůň zůstal hlavním dopravním prostředkem až do vynálezu parního stroje a automobilu.',
    tags: ['Domestikace', 'Pravěk', 'Zvířata'],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80',
    period: getPeriodForYear(-5000)
  },
  {
    id: 40,
    year: -3500,
    title: 'Vznik kola',
    location: 'Mezopotámie',
    coordinates: { lat: 33.0, lng: 44.0 },
    description: 'Vynález kola, jeden z nejdůležitějších vynálezů v historii lidstva.',
    details: 'Vynález kola před přibližně 5 500 lety v Mezopotámii je považován za jeden z nejdůležitějších vynálezů v historii lidstva. První kola byla pravděpodobně použita pro hrnčířský kruh, ale brzy se začala používat pro dopravu. První vozíky a vozy s koly byly taženy lidmi nebo zvířaty a umožnily přepravu těžkých nákladů na dlouhé vzdálenosti. Kolo způsobilo revoluci v dopravě - místo nošení břemen na zádech nebo tažení saní mohli lidé používat vozy, což výrazně zvýšilo efektivitu přepravy. To mělo zásadní dopad na obchod, protože umožnilo přepravu většího množství zboží na větší vzdálenosti. Kolo také změnilo válčení - válečné vozy se staly důležitou zbraní starověkých armád. V průběhu historie se kolo stalo základem pro mnoho dalších vynálezů - od mlýnských kol přes hodinové mechanismy až po moderní automobily a letadla. Zajímavé je, že kolo bylo vynalezeno nezávisle na několika místech, ale v Americe se kolo prakticky nepoužívalo až do příchodu Evropanů, i když bylo známé. Kolo zůstává jedním z nejdůležitějších vynálezů lidstva dodnes.',
    tags: ['Technologie', 'Pravěk', 'Vynálezy'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    period: getPeriodForYear(-3500)
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
    id: 41,
    year: -3100,
    title: 'Sjednocení Egypta',
    location: 'Egypt',
    coordinates: { lat: 26.0, lng: 31.0 },
    description: 'Král Menes (Narmer) sjednotil Horní a Dolní Egypt a založil první egyptskou dynastii.',
    details: 'Sjednocení Egypta pod vládou faraona Menese položilo základy pro více než 3000 let trvající egyptskou civilizaci. Tato událost je považována za začátek egyptské historie.',
    tags: ['Egypt', 'Politika', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
    period: getPeriodForYear(-3100)
  },
  {
    id: 42,
    year: -2700,
    title: 'Vznik egyptských hieroglyfů',
    location: 'Egypt',
    coordinates: { lat: 26.0, lng: 31.0 },
    description: 'Vznik egyptského hieroglyfického písma, jednoho z prvních písemných systémů.',
    details: 'Egyptské hieroglyfy byly složitým písmem používaným pro náboženské a oficiální texty. Byly klíčové pro rozvoj egyptské kultury a umožnily zaznamenávání historie a literatury.',
    tags: ['Egypt', 'Písmo', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
    period: getPeriodForYear(-2700)
  },
  {
    id: 43,
    year: -2000,
    title: 'Vznik harappské civilizace',
    location: 'Indus Valley, Pákistán',
    coordinates: { lat: 30.0, lng: 72.0 },
    description: 'Rozkvět harappské civilizace v údolí řeky Indus, jedné z prvních městských civilizací.',
    details: 'Harappská civilizace byla jednou z nejvyspělejších starověkých civilizací. Měla pokročilé městské plánování, kanalizaci a obchodní sítě. Její písmo dosud nebylo rozluštěno.',
    tags: ['Indie', 'Civilizace', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(-2000)
  },
  {
    id: 44,
    year: -1750,
    title: 'Chammurapiho zákoník',
    location: 'Babylon, Mezopotámie',
    coordinates: { lat: 32.5433, lng: 44.4208 },
    description: 'Babylonský král Chammurapi vydal jeden z prvních psaných zákoníků v historii.',
    details: 'Chammurapiho zákoník obsahoval 282 zákonů a zásadu "oko za oko, zub za zub". Byl vytesán do kamenné stély a představoval jeden z prvních pokusů o kodifikaci práva.',
    tags: ['Mezopotámie', 'Právo', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-1750)
  },
  {
    id: 45,
    year: -1200,
    title: 'Trojan War',
    location: 'Troy, Turecko',
    coordinates: { lat: 39.9575, lng: 26.2389 },
    description: 'Legendární válka mezi Řeky a Trójany, popsaná v Homérově Iliadě.',
    details: 'Trojan War, ačkoli je z velké části legendární, pravděpodobně měla historický základ. Homérova Iliada a Odyssea jsou jedny z nejvýznamnějších literárních děl západní civilizace.',
    tags: ['Řecko', 'Válka', 'Literatura'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-1200)
  },
  {
    id: 46,
    year: -753,
    title: 'Založení Říma',
    location: 'Řím, Itálie',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Podle legendy založili Romulus a Remus město Řím.',
    details: 'Založení Říma podle tradice proběhlo 21. dubna 753 př. n. l. Romulus se stal prvním římským králem. Toto město se později stalo centrem největší říše starověku.',
    tags: ['Řím', 'Politika', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    period: getPeriodForYear(-753)
  },
  {
    id: 47,
    year: -612,
    title: 'Pád Ninive',
    location: 'Ninive, Mezopotámie',
    coordinates: { lat: 36.3667, lng: 43.1500 },
    description: 'Pád asyrské říše po dobytí Ninive spojenými silami Babyloňanů a Médů.',
    details: 'Pád Ninive ukončil existenci asyrské říše, která byla jednou z nejmocnějších říší starověku. Tato událost změnila politickou mapu Blízkého východu.',
    tags: ['Mezopotámie', 'Válka', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-612)
  },
  {
    id: 48,
    year: -563,
    title: 'Narození Buddhy',
    location: 'Lumbini, Nepál',
    coordinates: { lat: 27.4833, lng: 83.2833 },
    description: 'Narození Siddhárthy Gautamy, zakladatele buddhismu.',
    details: 'Buddha, známý také jako Siddhártha Gautama, založil jedno z nejvlivnějších náboženských a filozofických hnutí v historii. Buddhismus se rozšířil po celé Asii a ovlivnil miliony lidí.',
    tags: ['Náboženství', 'Indie', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(-563)
  },
  {
    id: 49,
    year: -551,
    title: 'Narození Konfucia',
    location: 'Čína',
    coordinates: { lat: 35.0, lng: 105.0 },
    description: 'Narození Konfucia, zakladatele konfucianismu.',
    details: 'Konfucius byl čínský filozof, jehož učení ovlivnilo čínskou kulturu a společnost po více než 2000 let. Konfucianismus se stal základem čínské etiky a politické filozofie.',
    tags: ['Filozofie', 'Čína', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(-551)
  },
  {
    id: 50,
    year: -490,
    title: 'Bitva u Marathonu',
    location: 'Marathon, Řecko',
    coordinates: { lat: 38.1556, lng: 23.9633 },
    description: 'Řekové porazili perskou armádu v rozhodující bitvě řecko-perských válek.',
    details: 'Bitva u Marathonu byla prvním velkým vítězstvím Řeků nad Peršany. Legenda o běžci, který běžel z Marathonu do Athén, inspirovala moderní maratonský běh.',
    tags: ['Řecko', 'Válka', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-490)
  },
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
    id: 51,
    year: -431,
    title: 'Začátek peloponéské války',
    location: 'Řecko',
    coordinates: { lat: 38.0, lng: 23.0 },
    description: 'Začátek dlouhé války mezi Athénami a Spartou, která zničila řeckou moc.',
    details: 'Peloponéská válka trvala 27 let a byla jednou z nejničivějších konfliktů starověkého Řecka. Válka oslabila řecké městské státy a připravila půdu pro makedonskou nadvládu.',
    tags: ['Řecko', 'Válka', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-431)
  },
  {
    id: 52,
    year: -336,
    title: 'Alexandr Veliký se stává králem',
    location: 'Makedonie',
    coordinates: { lat: 40.5, lng: 21.5 },
    description: 'Alexandr Veliký nastoupil na makedonský trůn a začal svou dobyvačnou kampaň.',
    details: 'Alexandr Veliký vytvořil jednu z největších říší starověku, která sahala od Řecka po Indii. Jeho dobyvačné kampaně šířily řeckou kulturu po celém známém světě.',
    tags: ['Řecko', 'Politika', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-336)
  },
  {
    id: 53,
    year: -323,
    title: 'Smrt Alexandra Velikého',
    location: 'Babylon, Mezopotámie',
    coordinates: { lat: 32.5433, lng: 44.4208 },
    description: 'Alexandr Veliký zemřel ve věku 32 let, jeho říše se rozpadla.',
    details: 'Smrt Alexandra Velikého vedla k rozdělení jeho říše mezi jeho generály (diadochy). Toto období známé jako helénistické období pokračovalo v šíření řecké kultury.',
    tags: ['Řecko', 'Politika', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(-323)
  },
  {
    id: 54,
    year: -264,
    title: 'Začátek punských válek',
    location: 'Sicílie, Itálie',
    coordinates: { lat: 37.5, lng: 14.0 },
    description: 'Začátek série válek mezi Římem a Kartágem o nadvládu ve Středomoří.',
    details: 'Punské války byly tři konflikty mezi Římskou republikou a Kartágem. Třetí punská válka skončila úplným zničením Kartága a upevnila římskou nadvládu ve Středomoří.',
    tags: ['Řím', 'Válka', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    period: getPeriodForYear(-264)
  },
  {
    id: 55,
    year: -146,
    title: 'Zničení Kartága',
    location: 'Kartágo, Tunis',
    coordinates: { lat: 36.8528, lng: 10.3231 },
    description: 'Řím úplně zničil Kartágo po třetí punské válce.',
    details: 'Zničení Kartága ukončilo dlouholetý konflikt mezi Římem a Kartágem. Řím se stal dominantní mocností ve Středomoří. Legenda říká, že Římané zasypali město solí.',
    tags: ['Řím', 'Válka', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    period: getPeriodForYear(-146)
  },
  {
    id: 56,
    year: -100,
    title: 'Vznik hedvábné stezky',
    location: 'Čína',
    coordinates: { lat: 35.0, lng: 105.0 },
    description: 'Začátek obchodní sítě spojující Čínu se Středním východem a Evropou.',
    details: 'Hedvábná stezka byla sítí obchodních cest, která umožnila výměnu zboží, myšlenek a technologií mezi Východem a Západem. Hrála klíčovou roli v rozvoji civilizací.',
    tags: ['Obchod', 'Čína', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(-100)
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
  },
  // Afrika
  {
    id: 57,
    year: -3000,
    title: 'Vznik starověkého Egypta',
    location: 'Egypt',
    coordinates: { lat: 26.0, lng: 31.0 },
    description: 'Začátek egyptské civilizace sjednocením Horního a Dolního Egypta.',
    details: 'Starověký Egypt byl jednou z nejvyspělejších civilizací starověku. Vznikl podél řeky Nil a přinesl významné objevy v architektuře, matematice, medicíně a písmu.',
    tags: ['Egypt', 'Afrika', 'Civilizace', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800',
    period: getPeriodForYear(-3000)
  },
  {
    id: 58,
    year: -814,
    title: 'Založení Kartága',
    location: 'Kartágo, Tunis',
    coordinates: { lat: 36.8528, lng: 10.3231 },
    description: 'Féničané založili město Kartágo, které se stalo mocnou obchodní říší.',
    details: 'Kartágo bylo založeno fénickými kolonisty z Tyru. Stalo se jednou z nejmocnějších obchodních říší ve Středomoří a hlavním rivalem Říma.',
    tags: ['Afrika', 'Obchod', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800',
    period: getPeriodForYear(-814)
  },
  {
    id: 59,
    year: 330,
    title: 'Založení Aksumské říše',
    location: 'Etiopie',
    coordinates: { lat: 14.0, lng: 38.5 },
    description: 'Vznik Aksumské říše, jedné z nejmocnějších afrických říší starověku.',
    details: 'Aksumská říše byla významnou obchodní mocností, která kontrolovala obchod mezi Afrikou, Arábií a Indií. Byla jednou z prvních říší, které přijaly křesťanství.',
    tags: ['Afrika', 'Etiopie', 'Obchod', 'Starověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(330)
  },
  {
    id: 60,
    year: 1076,
    title: 'Pád Ghanské říše',
    location: 'Ghana',
    coordinates: { lat: 8.0, lng: -2.0 },
    description: 'Konec Ghanské říše, první velké západoafrické říše.',
    details: 'Ghanská říše byla první významnou říší v západní Africe. Kontrolovala obchod se zlatem a solí a byla známá svým bohatstvím. Její pád otevřel cestu pro další západoafrické říše.',
    tags: ['Afrika', 'Ghana', 'Obchod', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1076)
  },
  {
    id: 61,
    year: 1324,
    title: 'Pouť Mansa Musy do Mekky',
    location: 'Mali',
    coordinates: { lat: 17.0, lng: -4.0 },
    description: 'Mansa Musa, král Mali, podnikl legendární pouť do Mekky s obrovským bohatstvím.',
    details: 'Mansa Musa byl jedním z nejbohatších lidí v historii. Jeho pouť do Mekky s karavanou nesoucí obrovské množství zlata způsobila inflaci v celém Středomoří a upoutala pozornost celého světa k bohatství Mali.',
    tags: ['Afrika', 'Mali', 'Náboženství', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1324)
  },
  {
    id: 62,
    year: 1885,
    title: 'Berlínská konference',
    location: 'Berlín, Německo',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: 'Evropské mocnosti rozdělily Afriku na kolonie bez ohledu na africké národy.',
    details: 'Berlínská konference rozdělila Afriku mezi evropské koloniální mocnosti. Toto rozdělení ignorovalo etnické a kulturní hranice a mělo trvalé negativní dopady na africké národy.',
    tags: ['Afrika', 'Kolonizace', 'Politika', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1885)
  },
  {
    id: 63,
    year: 1994,
    title: 'Konec apartheidu v Jižní Africe',
    location: 'Jižní Afrika',
    coordinates: { lat: -25.7, lng: 28.2 },
    description: 'Nelson Mandela se stal prvním černošským prezidentem Jižní Afriky.',
    details: 'Konec apartheidu a zvolení Nelsona Mandely prezidentem ukončilo desetiletí rasové segregace v Jižní Africe. Mandela se stal symbolem boje za svobodu a usmíření.',
    tags: ['Afrika', 'Politika', 'Lidská práva', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    period: getPeriodForYear(1994)
  },
  // Jižní Amerika
  {
    id: 64,
    year: -3000,
    title: 'Začátek andské civilizace',
    location: 'Peru',
    coordinates: { lat: -9.0, lng: -75.0 },
    description: 'Vznik prvních usedlých společností v Andách.',
    details: 'Andské civilizace začaly vznikat před přibližně 5 000 lety podél pobřeží a v horách Jižní Ameriky, zejména v oblasti dnešního Peru. Tyto rané společnosti se přizpůsobily náročnému horskému prostředí And a vyvinuly unikátní zemědělské techniky. Vytvořily terasovitá pole (andenes) na strmých svazích, která umožnila pěstování plodin v nadmořské výšce přes 3 000 metrů. Pěstovali brambory, kukuřici, quinoa a další plodiny odolné vůči vysoké nadmořské výšce. Andské společnosti také domestikovaly lamy a alpaky, které poskytovaly vlnu, maso a sloužily jako soumaři. Vyvinuly pokročilé textilní techniky a vytvářely složité tkané látky. Architektura těchto raných společností zahrnovala kamenné stavby a chrámy, které ukazují pokročilé stavební techniky. Andské civilizace také vytvořily rozsáhlé sítě cest a mostů, které spojovaly vzdálené oblasti. Tyto rané společnosti položily základy pro pozdější velké andské civilizace, jako byly Inkové.',
    tags: ['Jižní Amerika', 'Peru', 'Civilizace', 'Pravěk'],
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
    period: getPeriodForYear(-3000)
  },
  {
    id: 65,
    year: -1200,
    title: 'Vznik Chavínské kultury',
    location: 'Peru',
    coordinates: { lat: -9.6, lng: -77.2 },
    description: 'Začátek Chavínské kultury, první významné andské civilizace.',
    details: 'Chavínská kultura, která vzkvétala mezi lety 900 a 200 př. n. l., byla první velkou andskou civilizací a je považována za "matku andských kultur". Centrum této kultury bylo v Chavín de Huántar, posvátném místě v peruánských Andách. Chavínská kultura vytvořila rozsáhlou obchodní síť, která spojovala pobřežní a horská údolí a umožnila výměnu zboží, myšlenek a technologií. Chavínci vyvinuli charakteristický umělecký styl s náboženskými motivy - jejich umění zobrazovalo hybridní bytosti kombinující lidské a zvířecí rysy, často s kočkovitými šelmami, hady a dravými ptáky. Tyto motivy byly vyřezávány do kamene, tkané do textilií a vytvářeny v keramice. Chavínská architektura zahrnovala složité chrámy s podzemními chodbami a komorami, kde se pravděpodobně konaly rituály. Chavínci také vyvinuli pokročilé inženýrské techniky, včetně akvaduktů a odvodňovacích systémů. Tato kultura měla zásadní vliv na pozdější andské civilizace a její umělecký styl a náboženské praktiky ovlivnily celou andskou oblast po staletí.',
    tags: ['Jižní Amerika', 'Peru', 'Civilizace', 'Pravěk'],
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80',
    period: getPeriodForYear(-1200)
  },
  {
    id: 66,
    year: 1438,
    title: 'Vznik Incké říše',
    location: 'Peru',
    coordinates: { lat: -13.2, lng: -72.5 },
    description: 'Inkové začali budovat svou říši v Andách.',
    details: 'Incká říše byla největší říší v předkolumbovské Americe. Rozkládala se podél celého západního pobřeží Jižní Ameriky a měla pokročilý systém silnic, zemědělství a administrativy.',
    tags: ['Jižní Amerika', 'Peru', 'Civilizace', 'Středověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(1438)
  },
  {
    id: 67,
    year: 1532,
    title: 'Dobytí Incké říše',
    location: 'Peru',
    coordinates: { lat: -13.2, lng: -72.5 },
    description: 'Francisco Pizarro dobyl Inckou říši pro Španělsko.',
    details: 'Dobytí Incké říše Španěly vedenými Pizarrem ukončilo existenci největší předkolumbovské říše v Americe. Tato událost změnila historii Jižní Ameriky a vedla k evropské kolonizaci.',
    tags: ['Jižní Amerika', 'Peru', 'Kolonizace', 'Novověk'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(1532)
  },
  {
    id: 68,
    year: 1822,
    title: 'Nezávislost Brazílie',
    location: 'Brazílie',
    coordinates: { lat: -15.8, lng: -47.9 },
    description: 'Brazílie vyhlásila nezávislost na Portugalsku.',
    details: 'Brazílie získala nezávislost mírovou cestou pod vedením Dom Pedra I. Stala se největším nezávislým státem v Jižní Americe a jedinou portugalsky mluvící zemí na kontinentu.',
    tags: ['Jižní Amerika', 'Brazílie', 'Politika', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(1822)
  },
  {
    id: 69,
    year: 1914,
    title: 'Otevření Panamského průplavu',
    location: 'Panama',
    coordinates: { lat: 9.0, lng: -79.5 },
    description: 'Panamský průplav byl otevřen, čímž propojil Atlantik a Pacifik.',
    details: 'Otevření Panamského průplavu zkrátilo námořní cestu mezi Atlantikem a Pacifikem o tisíce kilometrů. Mělo zásadní dopad na světový obchod a změnilo geopolitickou situaci.',
    tags: ['Jižní Amerika', 'Panama', 'Technologie', 'Moderní doba'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
    period: getPeriodForYear(1914)
  }
]


import { HistoricalEvent } from '../types'
import { getPeriodForYear } from '../types/periods'


// Obrázky: cesty relativní ke složce gallery – lazy loading viz utils/getEventImage.ts

// Ukázková data historických událostí
export const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    year: -3000,
    title: 'Vznik písma v Mezopotámii',
    location: 'Mezopotámie',
    coordinates: { lat: 33.0, lng: 44.0 },
    description: 'Vznik klínového písma v Sumeru, které se stalo základem pro další písemné systémy.',
    details: 'Klínové písmo bylo nejstarším známým systémem psaní, vynalezeným Sumery v Mezopotámii před přibližně 5000 lety. Původně se používalo pro zaznamenávání obchodních transakcí - hliněné tabulky s otisky klínových znaků sloužily jako účetní záznamy. Postupně se rozšířilo na zákony, literární díla, mýty a historické záznamy. Klínové písmo se psalo pomocí rákosového pera (stylus) do měkké hlíny, která se pak vypalovala, čímž se záznamy staly trvalými. Tento systém používalo více než 3000 let několik civilizací včetně Akkadů, Babyloňanů a Asyřanů. Nejslavnějším příkladem je Chammurapiho zákoník, vytesaný do kamenné stély. Klínové písmo bylo rozluštěno až v 19. století díky práci Henryho Rawlinsona na Behistunské skále. Tento vynález umožnil uchování a předávání znalostí napříč generacemi a byl klíčový pro rozvoj civilizace.',
    tags: ['Písmo', 'Mezopotámie', 'Civilizace'],
    image: 'pravek/vznik-pisma.jpg',
    period: getPeriodForYear(-3000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Kl%C3%ADnov%C3%A9_p%C3%ADsmo'
  },
  {
    id: 2,
    year: -776,
    title: 'První olympijské hry',
    location: 'Olympie, Řecko',
    coordinates: { lat: 37.6383, lng: 21.6300 },
    description: 'První zaznamenané olympijské hry v antickém Řecku, které se konaly na počest boha Dia.',
    details: 'První olympijské hry se konaly v roce 776 př. n. l. v posvátném okrsku Olympie na Peloponésu. Původně to byla jednodenní událost s jediným závodem - během na délku stadionu (asi 192 metrů). Postupně se hry rozrostly na pětidenní festival s více než 20 disciplínami včetně běhu, skoku do dálky, vrhu diskem, oštěpem, zápasu, boxu a vozatajství. Vítězové získávali pouze olivový věnec, ale doma byli oslavováni jako hrdinové a často dostávali doživotní rentu. Hry byly tak posvátné, že během jejich konání se vyhlašoval "posvátný mír" (ekecheiria), který zastavoval všechny války mezi řeckými městskými státy. Ženy nesměly hry sledovat ani se jich účastnit - dokonce i divačky riskovaly trest smrti. Antické olympijské hry se konaly více než 1000 let, až do roku 393 n. l., kdy je zakázal římský císař Theodosius I. jako pohanský rituál. Moderní olympijské hry byly obnoveny v roce 1896 v Athénách.',
    tags: ['Sport', 'Řecko', 'Antika'],
    image: 'starovek/prvni-olypijske-hry.jpg',
    period: getPeriodForYear(-776),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Olympijsk%C3%A9_hry'
    // model3D: {
    //   // Najdi model na: https://sketchfab.com/3d-models?q=ancient+greek+temple+olympia
    //   type: 'sketchfab',
    //   sketchfabId: 'ID_Z_URL',
    //   url: 'https://sketchfab.com/3d-models/...'
    // }
  },
  {
    id: 3,
    year: -44,
    title: 'Atentát na Julia Caesara',
    location: 'Řím, Itálie',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Julius Caesar byl zavražděn skupinou římských senátorů včetně Bruta a Cassia.',
    details: 'Atentát na Julia Caesara se odehrál 15. března 44 př. n. l. (Idy březnové) v divadle Pompeia v Římě. Spiklenci, vedení Marcem Juniem Brutem a Gaiem Cassiem Longinem, se obávali Caesarova rostoucího vlivu a možnosti, že se prohlásí králem. Celkem 60 senátorů se zapojilo do spiknutí, ale pouze 23 z nich skutečně provedlo útok. Caesar byl napaden dýkami a podle legendy řekl řecky "Kai su, teknon?" (I ty, synu?) poté, co uviděl Bruta mezi útočníky - Brutus byl totiž možná Caesarův nemanželský syn. Caesar utrpěl 23 ran dýkou, z nichž pouze jedna byla smrtelná. Jeho smrt vyvolala chaos v Římě a vedla k občanské válce mezi Caesarovými stoupenci (vedenými Markem Antoniem a Octavianem) a vrahy. Tato válka skončila pádem Římské republiky a vznikem Římského císařství pod vládou Octaviana (Augusta).',
    tags: ['Řím', 'Politika', 'Antika'],
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Atent%C3%A1t_na_Julia_Caesara',
    image: 'starovek/atentat-na-julia-cezara.jpeg',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '2f9cb1fbc2eb470686eb8ba596b059cb',
      url: 'https://sketchfab.com/3d-models/massive-scale-model-of-ancient-rome-2f9cb1fbc2eb470686eb8ba596b059cb'
    },
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
    details: 'Pád Západořímské říše v roce 476 n. l. je tradičně považován za konec starověku a začátek středověku. Poslední císař Romulus Augustulus (malý Augustus) byl pouhým chlapcem, když ho jeho otec Orestes dosadil na trůn. Odoaker, germánský vůdce, který sloužil v římské armádě, sesadil Romula, ale místo aby ho zabil, poslal ho do exilu do Kampánie s roční rentou. Odoaker pak poslal římské císařské insignie do Konstantinopole císaři Zenovi s tím, že Západ už nepotřebuje vlastního císaře. Zajímavostí je, že Romulus Augustulus nebyl technicky posledním západořímským císařem - v Galii vládl ještě Julius Nepos až do roku 480. Pád Říma byl výsledkem dlouhodobého úpadku způsobeného ekonomickými problémy, barbarskými invazemi, politickou nestabilitou a rozdělením říše. Tato událost symbolicky ukončila více než tisíciletou existenci Římské říše na Západě a otevřela cestu pro vznik středověkých království.',
    tags: ['Řím', 'Středověk', 'Historie'],
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/P%C3%A1d_Z%C3%A1pado%C5%99%C3%ADmsk%C3%A9_%C5%99%C3%AD%C5%A1e',
    image: 'stredovek/pad zapado rimskej rise.webp',
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
    details: 'Bitva u Hastingsu se odehrála 14. října 1066 a byla rozhodující bitvou normanského dobytí Anglie. Anglický král Harold II. musel čelit dvěma invazím současně - norské invazi na severu a normanské na jihu. Po vítězství nad Nory u Stamford Bridge musel Harold rychle přesunout svou armádu na jih, kde čelil Vilémovi Normandskému. Bitva trvala celý den a byla velmi krvavá. Haroldova armáda zaujala výhodnou pozici na kopci, ale Vilém použil taktiku předstíraného ústupu, která rozbila anglické řady. Podle legendy byl Harold zabit šípem do oka, ačkoli to není historicky doloženo. Vilém Dobyvatel se stal anglickým králem a zavedl normanskou vládu, která změnila anglickou společnost, jazyk a kulturu. Normanská invaze přinesla do Anglie francouzštinu, která se smísila se starou angličtinou a vytvořila moderní angličtinu. Vilém také nechal sepsat Domesday Book, první velký průzkum anglického majetku a obyvatelstva, který sloužil jako základ pro daně.',
    tags: ['Anglie', 'Válka', 'Středověk'],
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Bitva_u_Hastingsu',
    image: 'stredovek/bitva u hastigsu.jpg',
    period: getPeriodForYear(1066)
  },
  {
    id: 6,
    year: 1492,
    title: 'Kolumbus objevuje Ameriku',
    location: 'Bahamy',
    coordinates: { lat: 25.0, lng: -77.0 },
    description: 'Kryštof Kolumbus přistál na Bahamách, čímž zahájil evropskou kolonizaci Ameriky.',
    details: 'Kryštof Kolumbus přistál na Bahamách 12. října 1492 po 70 dnech plavby přes Atlantik. Jeho tři lodě - Santa María, Pinta a Niña - vypluly z Palos de la Frontera ve Španělsku 3. srpna. Kolumbus si myslel, že dosáhl Asie (Indie), proto nazval domorodce "Indiány". Ve skutečnosti přistál na ostrově, který nazval San Salvador (dnešní Watling Island nebo Samana Cay). Kolumbova plavba otevřela novou éru v historii známou jako "Kolumbovská výměna" - masivní výměna zboží, rostlin, zvířat a nemocí mezi Starým a Novým světem. Z Ameriky se do Evropy dostaly brambory, kukuřice, rajčata, kakao a tabák, zatímco Evropané přivezli koně, dobytek, pšenici a bohužel i nemoci jako neštovice a spalničky, které způsobily masivní úmrtí domorodého obyvatelstva. Kolumbus podnikl celkem čtyři plavby do Ameriky, ale nikdy si neuvědomil, že objevil nový kontinent. Jeho objev vedl k masivní migraci Evropanů do Nového světa a k vytvoření koloniálních říší, což mělo trvalý dopad na celý svět.',
    tags: ['Objevy', 'Amerika', 'Kolonizace'],
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Kry%C5%A1tof_Kolumbus',
    image: 'novovek/kolumbus objavuje ameriku.jpg',
    period: getPeriodForYear(1492)
  },
  {
    id: 7,
    year: 1789,
    title: 'Francouzská revoluce',
    location: 'Paříž, Francie',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description: 'Začátek Francouzské revoluce, která svrhla monarchii a zavedla republiku.',
    details: 'Francouzská revoluce začala 14. července 1789 dobytím Bastily, vězení v Paříži, které symbolizovalo královskou tyranii. Revoluce byla výsledkem dlouhodobé nespokojenosti s absolutistickou monarchií, ekonomickými problémy a sociální nerovností. Třetí stav (běžní občané) se vzbouřil proti privilegované šlechtě a duchovenstvu. Revoluce přinesla heslo "Svoboda, rovnost, bratrství" a Deklaraci práv člověka a občana. Během revoluce došlo k popravě krále Ludvíka XVI. a královny Marie Antoinetty gilotinou, která se stala symbolem "teroru". Revoluce vedla k napoleonským válkám a šíření revolučních ideálů po celé Evropě. Byla jedním z nejvýznamnějších politických převratů v historii a inspirovala další revoluční hnutí po celém světě. Její odkaz ovlivnil moderní demokratické státy a myšlenky lidských práv.',
    tags: ['Francie', 'Revoluce', 'Politika'],
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Francouzsk%C3%A1_revoluce',
    image: 'modernidoba/Francouzska revoluce.jpg',
    period: getPeriodForYear(1789)
  },
  {
    id: 8,
    year: 1969,
    title: 'První přistání na Měsíci',
    location: 'Kennedy Space Center, Florida, USA',
    coordinates: { lat: 28.5721, lng: -80.6480 },
    description: 'Apollo 11 úspěšně přistálo na Měsíci, Neil Armstrong se stal prvním člověkem, který vstoupil na měsíční povrch.',
    details: 'Apollo 11 odstartovalo 16. července 1969 z Kennedy Space Center na Floridě. Posádku tvořili Neil Armstrong (velitel), Buzz Aldrin (pilot lunárního modulu) a Michael Collins (pilot velitelského modulu). Po čtyřech dnech cesty přistál lunární modul "Eagle" 20. července v Moři klidu. Když Armstrong vystoupil na povrch Měsíce, řekl slavnou větu: "To je malý krok pro člověka, ale velký skok pro lidstvo." Armstrong a Aldrin strávili na Měsíci 21,5 hodiny, během kterých nasbírali 21,5 kg měsíčních vzorků a vztyčili americkou vlajku. Mise byla sledována více než 600 miliony lidí po celém světě - největší televizní přenos v historii. Tato událost byla vrcholem vesmírného závodu mezi USA a SSSR a představovala jeden z největších úspěchů lidstva. Celkem 12 astronautů chodilo po Měsíci během šesti misí Apollo (1969-1972).',
    tags: ['Vesmír', 'USA', 'Věda'],
    image: 'modernidoba/prvni pristani na mesice.webp',
    period: getPeriodForYear(1969),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Apollo_11'
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
    image: 'pravek/jeskynnemalby.jpg',
    period: getPeriodForYear(-40000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Chauvetova_jeskyn%C4%9B'
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
    image: 'pravek/samanismus.jpg',
    period: getPeriodForYear(-25000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C5%A0amanismus'
  },
  {
    id: 35,
    year: -12000,
    title: 'Domestikace psa',
    location: 'Střední Asie',
    coordinates: { lat: 47.0, lng: 85.0 },
    description: 'Lidé začali domestikovat vlky, což vedlo k vzniku psa jako prvního domestikovaného zvířete.',
    details: 'Domestikace psa byla prvním a nejdůležitějším krokem k domestikaci zvířat. Proces začal před přibližně 15 000 až 12 000 lety, kdy se vlci začali přibližovat k lidským táborům, pravděpodobně kvůli zbytkům jídla. Postupně se vyvinul vzájemný vztah - lidé poskytovali vlkům potravu a úkryt, zatímco vlci pomáhali při lovu, hlídání tábora a varování před nebezpečím. Tento proces vedl k genetickým změnám - domestikovaní psi se lišili od vlků menší velikostí, kratšími čenichy a přátelštějším chováním. Psi se stali nepostradatelnými společníky pravěkých lidí - pomáhali při lovu velkých zvířat, hlídali osady, pomáhali při pastevectví a poskytovali teplo v chladných nocích. Tento vztah mezi člověkem a psem trvá dodnes a psi zůstávají jedním z nejvěrnějších společníků lidstva. Domestikace psa také otevřela cestu k domestikaci dalších zvířat, což bylo klíčové pro rozvoj zemědělství a usedlých společností.',
    tags: ['Domestikace', 'Pravěk', 'Zvířata'],
    image: 'pravek/domestikacepsa.jpg',
    period: getPeriodForYear(-12000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Domestikace_psa'
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
    image: 'pravek/zemedelstvi.jpg',
    period: getPeriodForYear(-10000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Neolitick%C3%A1_revoluce'
  },
  {
    id: 70,
    year: -3000,
    title: 'Výstavba Stonehenge',
    location: 'Wiltshire, Anglie',
    coordinates: { lat: 51.1789, lng: -1.8262 },
    description: 'Začátek výstavby megalitického kamenného kruhu Stonehenge, jednoho z nejznámějších pravěkých monumentů.',
    details: 'Stonehenge je prehistorický kamenný monument postavený v několika fázích mezi lety 3000 a 2000 př. n. l. v jižní Anglii. Skládá se z kruhu stojících kamenů, z nichž každý váží kolem 25 tun. Kameny byly přepravovány z lomů vzdálených až 240 km. Účel Stonehenge zůstává záhadou - mohl sloužit jako observatoř, náboženské místo, pohřebiště nebo místo léčení. Je zarovnán s východem slunce při letním slunovratu, což naznačuje astronomický význam. Stonehenge je součástí většího komplexu pravěkých památek včetně Avebury a dalších menhirů. Je to jedna z nejznámějších pravěkých památek na světě a je zapsána na seznamu UNESCO.',
    tags: ['Pravěk', 'Architektura', 'Anglie'],
    image: 'pravek/stonehenge.png',
    period: getPeriodForYear(-3000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Stonehenge',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '23cf1bcb2b974eb2ac935ee885b22f14',
      url: 'https://sketchfab.com/3d-models/stonehenge-23cf1bcb2b974eb2ac935ee885b22f14'
    }
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
    image: 'pravek/prvni-osidlene-osady.jpg',
    period: getPeriodForYear(-9000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Jericho'
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
    image: 'pravek/keramika.jpg',
    period: getPeriodForYear(-7000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Keramika',
    // model3D: {
    //   // Najděte model na: https://sketchfab.com/3d-models?q=ancient+pottery+amphora
    //   type: 'sketchfab',
    //   sketchfabId: 'ID_MODELU',
    //   url: 'https://sketchfab.com/3d-models/...'
    // }
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
    image: 'pravek/domestikace-kone.jpeg',
    period: getPeriodForYear(-5000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Domestikace_kon%C4%9B'
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
    image: 'pravek/kolo.jpeg',
    period: getPeriodForYear(-3500),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Kolo',
    // model3D: {
    //   // Najděte model na: https://sketchfab.com/3d-models?q=ancient+wheel+chariot
    //   type: 'sketchfab',
    //   sketchfabId: 'ID_MODELU',
    //   url: 'https://sketchfab.com/3d-models/...'
    // }
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
    image: 'pravek/egyptske-pyramidy.jpeg',
    period: getPeriodForYear(-2560),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Velk%C3%A1_pyramida',
    model3D: {
      type: 'sketchfab',
      sketchfabId: 'df4b6e9a25474ae9927fdb01f33ba561',
      url: 'https://sketchfab.com/3d-models/egyptian-pyramids-giza-cairo-egypt-df4b6e9a25474ae9927fdb01f33ba561'
    }
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
    image: 'pravek/sjednoceni-egypta.jpeg',
    period: getPeriodForYear(-3100),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Sjednocen%C3%AD_Egypta',
    model3D: {
      type: 'sketchfab',
      sketchfabId: 'd149daf5b3ea4e138e6b0b4d71387bc7',
      url: 'https://sketchfab.com/3d-models/luxor-sfinga-draft-d149daf5b3ea4e138e6b0b4d71387bc7'
    }
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
    image: 'pravek/hieroglyfy.jpeg',
    period: getPeriodForYear(-2700),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Hieroglyf'
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
    image: 'pravek/harappska-civilizace.jpeg',
    period: getPeriodForYear(-2000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Harappsk%C3%A1_civilizace'
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
    image: 'pravek/chamurapiho-zakonik.jpeg',
    period: getPeriodForYear(-1750),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Chammurapiho_z%C3%A1kon%C3%ADk',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '39851042e5c74fbf924503c590356237',
      url: 'https://sketchfab.com/3d-models/ishtar-gate-babylon-v03-39851042e5c74fbf924503c590356237'
    }
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
    image: 'pravek/trojan-war.webp',
    period: getPeriodForYear(-1200),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Trojsk%C3%A1_v%C3%A1lka'
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
    image: 'starovek/zalozeni rima.jpg',
    period: getPeriodForYear(-753),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Zalo%C5%BEen%C3%AD_%C5%98%C3%ADma'
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
    image: 'starovek/pad ninvie.jpg',
    period: getPeriodForYear(-612),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Ninive'
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
    image: 'starovek/narozeni-buddhy.jpeg',
    period: getPeriodForYear(-563),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Buddha'
  },
  {
    id: 49,
    year: -551,
    title: 'Narození Konfucia',
    location: 'Čína',
    coordinates: { lat: 35.0, lng: 105.0 },
    description: 'Narození Konfucia, zakladatele konfucianismu.',
    details: 'Konfucius (Kǒng Fūzǐ) se narodil 28. září 551 př. n. l. ve státě Lu (dnešní provincie Šan-tung) v městě Qufu. Pocházel z urozené, ale zchudlé rodiny - jeho otec zemřel, když byl ještě dítětem, a byl vychováván matkou. Navzdory skromným poměrům získal vynikající vzdělání a založil soukromou školu, kde vyučoval šestero umění: čtení a psaní, počty, vozatajství, lukostřelbu, etiketu a hudbu. Jeho učení kladlo důraz na pět základních ctností: lidskost (rén), spravedlnost (yì), slušnost (lǐ), moudrost (zhì) a věrnost (xìn). Konfucius věřil, že harmonická společnost vyžaduje správné mezilidské vztahy - mezi rodiči a dětmi, pánem a sluhou, mužem a ženou. Po jeho smrti v roce 479 př. n. l. jeho následovníci shromáždili jeho výroky do díla "Analekty" (Lunyu). Konfucianismus se stal základem čínské etiky, politické filozofie a státní ideologie na více než 2000 let. Jeho myšlenky ovlivnily nejen Čínu, ale i Koreu, Japonsko a Vietnam. Zajímavostí je, že Konfuciův rodokmen je jedním z nejdelších na světě - v roce 2009 bylo zaznamenáno přibližně dva miliony jeho potomků. Každoročně se 28. září slaví Konfuciovy narozeniny jako významný svátek.',
    tags: ['Filozofie', 'Čína', 'Starověk'],
    image: 'starovek/narozeni konfucia.jpg',
    period: getPeriodForYear(-551),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Konfucius'
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
    image: 'starovek/bitva-u-marathonu.jpg',
    period: getPeriodForYear(-490),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Bitva_u_Marathonu'
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
    image: 'starovek/bitva-Thermopyl.jpg',
    period: getPeriodForYear(-480),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Bitva_u_Thermopyl'
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
    image: 'starovek/zacatek-peloponeske-valky.jpg',
    period: getPeriodForYear(-431),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Pelopon%C3%A9sk%C3%A1_v%C3%A1lka'
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
    image: 'starovek/alexander-se-stal-kralem.png',
    period: getPeriodForYear(-336),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Alexandr_Velik%C3%BD'
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
    image: 'starovek/smrt-Alexanda-Velkeho.jpg',
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
    image: 'starovek/zacatek-punskych-valek.jpg',
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
    image: 'starovek/zniceni-kartaga.jpg',
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
    image: 'starovek/vznik-hedvabne-stezky.png',
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
    image: 'starovek/sjednoceni-ciny-pred-dynastii.jpg',
    period: getPeriodForYear(-221),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Dynastie_%C4%8Cchin',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '3d085397bf904e649ce97eb6c4bd9c7a',
      url: 'https://sketchfab.com/3d-models/the-great-wall-of-china-3d085397bf904e649ce97eb6c4bd9c7a'
    }
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
    image: 'starovek/zalozeni-rimskeho-cisarstvi.webp',
    period: getPeriodForYear(-27),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C5%98%C3%ADmsk%C3%A9_c%C3%ADsa%C5%99stv%C3%AD',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '544c64b6445e4899a17350c949b7766a',
      url: 'https://sketchfab.com/3d-models/coliseo-de-roma-roman-colosseum-544c64b6445e4899a17350c949b7766a'
    }
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
    image: 'starovek/edikt-milansky.jpg',
    period: getPeriodForYear(313),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Edikt_mil%C3%A1nsk%C3%BD'
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
    image: 'stredovek/hidzara zacatek islamskeho kalendare.jpg',
    period: getPeriodForYear(622),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Hid%C5%BEra'
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
    image: 'stredovek/korunovace karla velkeho.jpg',
    period: getPeriodForYear(800),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Karel_Velik%C3%BD'
  },
  {
    id: 17,
    year: 1096,
    title: 'První křížová výprava',
    location: 'Jeruzalém',
    coordinates: { lat: 31.7683, lng: 35.2137 },
    description: 'Začátek první křížové výpravy na výzvu papeže Urbana II. k osvobození Svaté země.',
    details: 'První křížová výprava byla vyhlášena papežem Urbanem II. v roce 1095 na koncilu v Clermontu. Výprava začala v roce 1096 a byla první z řady vojenských tažení evropských křesťanů do Svaté země. Motivy křižáků byly smíšené - náboženské (osvobození Jeruzaléma z rukou muslimů), ekonomické (získání bohatství) a politické (rozšíření moci). Výprava vedla k dobytí Jeruzaléma v roce 1099 po krvavém obléhání, během kterého křižáci zmasakrovali většinu muslimského a židovského obyvatelstva města. Bylo založeno několik křižáckých států v Levantě, včetně Jeruzalémského království, které existovalo téměř 200 let. První křížová výprava byla jedinou úspěšnou - další výpravy většinou selhaly nebo dosáhly jen omezených úspěchů. Křížové výpravy měly hluboký dopad na vztahy mezi křesťanstvím a islámem a ovlivnily evropskou kulturu, architekturu a obchod.',
    tags: ['Válka', 'Náboženství', 'Středověk'],
    image: 'stredovek/prvni krizova viprava.jpg',
    period: getPeriodForYear(1096),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Prvn%C3%AD_k%C5%99%C3%AD%C5%BEov%C3%A1_v%C3%BDprava',
    model3D: {
      type: 'sketchfab',
      sketchfabId: 'a44d1cde49d842e7a63fe3ccead1c9b5',
      url: 'https://sketchfab.com/3d-models/knight-a44d1cde49d842e7a63fe3ccead1c9b5'
    }
  },
  {
    id: 18,
    year: 1215,
    title: 'Magna Charta Libertatum',
    location: 'Runnymede, Anglie',
    coordinates: { lat: 51.4444, lng: -0.5611 },
    description: 'Anglický král Jan Bezzemek podepsal Magnu Chartu, která omezila královskou moc.',
    details: 'Magna Charta Libertatum (Velká listina svobod) byla podepsána 15. června 1215 anglickým králem Janem Bezzemkem pod nátlakem vzpurných baronů. Dokument obsahoval 63 článků, které omezovaly královskou moc a zavazovaly krále respektovat práva šlechty, církve a svobodných občanů. Magna Charta zavedla princip, že král není nad zákonem, a zaručila právo na spravedlivý proces. I když byla původně zamýšlena jako řešení konkrétních problémů mezi králem a barony, stala se základem anglického ústavního práva a inspirovala pozdější dokumenty o lidských právech, včetně americké Deklarace nezávislosti a Listiny práv. Magna Charta byla několikrát potvrzena a upravena a její principy ovlivnily vývoj demokracie po celém světě. Originální dokumenty se dochovaly v několika kopiích a jsou považovány za jeden z nejdůležitějších právních dokumentů v historii.',
    tags: ['Anglie', 'Politika', 'Právo'],
    image: 'stredovek/magna charta liberatum.jpg',
    period: getPeriodForYear(1215),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Magna_Charta'
  },
  {
    id: 19,
    year: 1347,
    title: 'Začátek černé smrti v Evropě',
    location: 'Sicílie, Itálie',
    coordinates: { lat: 37.5, lng: 14.0 },
    description: 'Morová epidemie dorazila do Evropy a způsobila smrt třetiny až poloviny populace.',
    details: 'Černá smrt (mor) byla jednou z nejničivějších pandemií v historii lidstva. Původně se objevila v Asii a do Evropy dorazila v roce 1347 přes obchodní cesty. Bakterie Yersinia pestis se šířila krysami a blechami, které cestovaly na obchodních lodích. Pandemie zabila odhadem 75-200 milionů lidí, což představovalo 30-60% evropské populace. Některé regiony byly zcela vylidněny. Mor měl hluboký dopad na společnost - způsobil nedostatek pracovní síly, což vedlo ke zvýšení mezd a oslabení feudálního systému. Lidé hledali viníky a často obviňovali Židy, což vedlo k pogromům. Umění a literatura té doby odrážely smrt a pomíjivost života. Pandemie se vracela v několika vlnách po dalších 300 let. Černá smrt změnila ekonomickou strukturu Evropy, přispěla k úpadku středověkého systému a připravila půdu pro renesanci a novověk.',
    tags: ['Epidemie', 'Evropa', 'Středověk'],
    image: 'stredovek/zacatek cerne smrti.png',
    period: getPeriodForYear(1347),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Cern%C3%A1_smrt'
  },
  {
    id: 20,
    year: 1453,
    title: 'Pád Konstantinopole',
    location: 'Konstantinopol (Istanbul), Turecko',
    coordinates: { lat: 41.0082, lng: 28.9784 },
    description: 'Osmanská říše dobyla Konstantinopol, čímž skončila Byzantská říše.',
    details: 'Pád Konstantinopole 29. května 1453 ukončil více než tisíciletou existenci Byzantské říše. Město bylo obléháno osmanskou armádou pod vedením 21letého sultána Mehmeda II. po 53 dní. Byzantinci měli pouze 7 000 obránců proti 80 000 osmanským vojákům. Mehmed použil obří děla, včetně slavného děla "Basilica", které dokázalo prorazit byzantské hradby. Když se Osmané dostali do města, došlo k třídennímu plenění - tisíce obyvatel byly zabity nebo zotročeny. Poslední byzantský císař Konstantin XI. padl v boji. Pád Konstantinopole měl zásadní dopad - uzavřel obchodní cesty mezi Evropou a Asií, což přimělo Evropany hledat nové námořní trasy a přispělo k věku objevů. Mnoho byzantských učenců uprchlo do Itálie a přineslo s sebou znalosti, které pomohly nastartovat renesanci. Tato událost je často považována za konec středověku a začátek novověku.',
    tags: ['Turecko', 'Válka', 'Středověk'],
    image: 'stredovek/pad konstantinopole.jpg',
    period: getPeriodForYear(1453),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/P%C3%A1d_Konstantinopole'
  },
  {
    id: 21,
    year: 1455,
    title: 'Gutenbergova tiskařská revoluce',
    location: 'Mohuč, Německo',
    coordinates: { lat: 50.0, lng: 8.2667 },
    description: 'Johannes Gutenberg vytiskl první knihu pomocí pohyblivých liter.',
    details: 'Johannes Gutenberg z Mohuče vynalezl knihtisk s pohyblivými literami kolem roku 1450. Jeho nejslavnějším dílem byla Gutenbergova bible, vytištěná v letech 1454-1455, která byla první knihou vytištěnou pomocí pohyblivých liter v Evropě. Gutenbergův vynález kombinoval několik technologií - pohyblivé kovové litery, tiskařský lis (upravený z vinařského lisu) a tiskařskou barvu. Tento systém umožnil rychlou a levnou produkci knih - místo ručního přepisování mohlo být vytištěno stovky kopií za den. Knihtisk způsobil revoluci v šíření informací - cena knih klesla o 80%, což je učinilo dostupnými pro širší vrstvy společnosti. To vedlo k šíření vzdělání, vědeckých poznatků a myšlenek po celé Evropě. Knihtisk hrál klíčovou roli v reformaci - Lutherovy spisy se mohly rychle šířit. Gutenbergův vynález je považován za jeden z nejdůležitějších v historii lidstva a položil základy pro moderní informační společnost.',
    tags: ['Technologie', 'Vzdělání', 'Středověk'],
    image: 'stredovek/gutrnbargova tiskarska revoluce.jpg',
    period: getPeriodForYear(1455),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Johannes_Gutenberg'
  },
  // Novověk
  {
    id: 22,
    year: 1517,
    title: 'Lutherovy 95 tezí',
    location: 'Wittenberg, Německo',
    coordinates: { lat: 51.8667, lng: 12.6333 },
    description: 'Martin Luther zveřejnil 95 tezí, čímž zahájil protestantskou reformaci.',
    details: 'Martin Luther, augustiniánský mnich a profesor teologie, přibil 31. října 1517 svých 95 tezí na dveře kostela ve Wittenbergu. Teze kritizovaly prodej odpustků a další praktiky katolické církve. Luther původně zamýšlel akademickou diskusi, ale díky knihtisku se jeho myšlenky rychle rozšířily po celé Evropě. Luther kritizoval autoritu papeže, učení o očistci a prodej odpustků. Jeho hlavní myšlenkou bylo, že spása přichází pouze skrze víru, ne skrze dobré skutky nebo peníze. Papež Lev X. exkomunikoval Luthera v roce 1521, ale němečtí knížata ho ochránili. Reformace vedla k náboženským válkám, rozdělení západního křesťanství na katolíky a protestanty a změnila politickou mapu Evropy. Vznikly nové protestantské církve - luteránství, kalvinismus a anglikánství. Reformace také přispěla k rozvoji národních jazyků, protože Bible byla překládána z latiny do místních jazyků. Tato událost měla hluboký dopad na evropskou kulturu, politiku a společnost.',
    tags: ['Náboženství', 'Reformace', 'Novověk'],
    image: 'novovek/lutherovy 95 tezi.webp',
    period: getPeriodForYear(1517),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Martin_Luther'
  },
  {
    id: 23,
    year: 1618,
    title: 'Začátek třicetileté války',
    location: 'Praha, Čechy',
    coordinates: { lat: 50.0755, lng: 14.4378 },
    description: 'Pražská defenestrace zahájila třicetiletou válku, jeden z nejničivějších konfliktů v evropské historii.',
    details: 'Třicetiletá válka začala 23. května 1618 pražskou defenestrací, kdy protestantští šlechtici vyhodili z oken Pražského hradu dva katolické místodržící. Válka byla komplexním konfliktem, který kombinoval náboženské, politické a dynastické spory. Zúčastnily se jí téměř všechny evropské mocnosti - Svatá říše římská, Španělsko, Francie, Švédsko, Dánsko a další. Válka probíhala ve čtyřech fázích: česká (1618-1625), dánská (1625-1629), švédská (1630-1635) a francouzská (1635-1648). Byla to jedna z nejničivějších válek v evropské historii - zabila přibližně 8 milionů lidí, což představovalo 20-40% populace v postižených oblastech. Německo bylo obzvlášť zdevastované - některé regiony ztratily až 50% obyvatelstva. Válka skončila Vestfálským mírem v roce 1648, který ukončil náboženské války v Evropě, posílil suverenitu států a změnil politickou strukturu kontinentu. Mír také ukončil dominanci Habsburků a připravil půdu pro vzestup Francie jako hlavní evropské mocnosti.',
    tags: ['Válka', 'Evropa', 'Novověk'],
    image: 'novovek/zacatek 30. valky.webp',
    period: getPeriodForYear(1618),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/T%C5%99icetilet%C3%A1_v%C3%A1lka'
  },
  {
    id: 24,
    year: 1687,
    title: 'Newtonovy Principia',
    location: 'Londýn, Anglie',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    description: 'Isaac Newton publikoval "Philosophiæ Naturalis Principia Mathematica", základní dílo moderní fyziky.',
    details: 'Isaac Newton publikoval "Philosophiæ Naturalis Principia Mathematica" (Matematické principy přírodní filozofie) v roce 1687. Toto třídílné dílo obsahuje tři zákony pohybu a zákon univerzální gravitace. První zákon (setrvačnost) říká, že těleso v klidu zůstane v klidu, pokud na něj nepůsobí síla. Druhý zákon definuje vztah mezi silou, hmotností a zrychlením (F=ma). Třetí zákon stanoví, že každá akce má stejnou a opačnou reakci. Zákon gravitace vysvětluje, že každá dvě tělesa se přitahují silou úměrnou jejich hmotnostem a nepřímo úměrnou druhé mocnině jejich vzdálenosti. Principia položila základy klasické mechaniky a ukázala, že stejné zákony platí pro pohyb na Zemi i ve vesmíru. Newton také vyvinul diferenciální a integrální počet (nezávisle na Leibnizovi). Toto dílo je považováno za jedno z nejvlivnějších vědeckých děl v historii a změnilo způsob, jakým lidé chápou vesmír. Newtonova fyzika zůstala dominantní až do 20. století, kdy ji nahradila Einsteinova teorie relativity.',
    tags: ['Věda', 'Fyzika', 'Novověk'],
    image: 'novovek/newtonovy pricip.webp',
    period: getPeriodForYear(1687),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica'
  },
  // Moderní doba
  {
    id: 25,
    year: 1776,
    title: 'Americká deklarace nezávislosti',
    location: 'Filadelfie, USA',
    coordinates: { lat: 39.9526, lng: -75.1652 },
    description: 'Třináct amerických kolonií vyhlásilo nezávislost na Velké Británii.',
    details: 'Americká deklarace nezávislosti byla přijata Kontinentálním kongresem 4. července 1776 ve Filadelfii. Dokument, který sepsal převážně Thomas Jefferson, vyhlásil nezávislost třinácti amerických kolonií na Velké Británii. Deklarace obsahuje slavnou větu: "Považujeme za samozřejmé pravdy, že všichni lidé jsou stvořeni sobě rovni, že jsou obdařeni svým Stvořitelem určitými nezcizitelnými právy, mezi něž patří právo na život, svobodu a sledování štěstí." Dokument vyjmenovává stížnosti proti králi Jiřímu III. a ospravedlňuje revoluci. Byla to první oficiální deklarace nezávislosti v moderní historii. Signatáři riskovali svůj život - kdyby válka skončila porážkou, byli by popraveni jako zrádci. Deklarace inspirovala revoluční hnutí po celém světě, včetně francouzské revoluce a latinskoamerických bojů za nezávislost. 4. červenec se stal americkým národním svátkem - Dnem nezávislosti. Originální dokument je uložen v Národním archivu ve Washingtonu D.C.',
    tags: ['USA', 'Politika', 'Moderní doba'],
    image: 'novovek/americka delegrace nezavislosti.webp',
    period: getPeriodForYear(1776),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Americk%C3%A1_deklarace_nez%C3%A1vislosti'
  },
  {
    id: 26,
    year: 1804,
    title: 'Napoleon se stává císařem',
    location: 'Paříž, Francie',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description: 'Napoleon Bonaparte se korunoval císařem Francouzů.',
    details: 'Napoleon Bonaparte se korunoval císařem Francouzů 2. prosince 1804 v katedrále Notre-Dame v Paříži. Při korunovaci vzal korunu z rukou papeže Pia VII. a sám si ji nasadil na hlavu, čímž symbolicky ukázal, že jeho moc nepochází od církve, ale od lidu. Napoleonova korunovace byla vrcholem jeho moci - byl prvním císařem Francie od pádu Římské říše. Během své vlády Napoleon reformoval francouzský právní systém (Code Napoléon), který ovlivnil právní systémy po celém světě. Jeho vojenské kampaně změnily mapu Evropy - dobyl většinu kontinentu a založil satelitní státy. Napoleon šířil revoluční ideály (rovnost, svoboda, bratrství) po celé Evropě, ale také vedl rozsáhlé války, které způsobily smrt milionů lidí. Jeho invaze do Ruska v roce 1812 skončila katastrofou a vedla k jeho pádu. Napoleon byl vyhoštěn na Elbu v roce 1814, uprchl v roce 1815, ale byl definitivně poražen u Waterloo a zemřel ve vyhnanství na Svaté Heleně v roce 1821.',
    tags: ['Francie', 'Politika', 'Moderní doba'],
    image: 'modernidoba/napoelon se stava cezarom.jpg',
    period: getPeriodForYear(1804),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Napoleon_Bonaparte'
  },
  {
    id: 27,
    year: 1815,
    title: 'Bitva u Waterloo',
    location: 'Waterloo, Belgie',
    coordinates: { lat: 50.7147, lng: 4.3992 },
    description: 'Napoleonova definitivní porážka spojenými armádami pod vedením vévody z Wellingtonu.',
    details: 'Bitva u Waterloo se odehrála 18. června 1815 v Belgii a byla Napoleonovou definitivní porážkou. Po útěku z Elby a návratu k moci musel Napoleon čelit spojeným armádám pod vedením vévody z Wellingtonu (Britové) a generála Blüchera (Prusové). Bitva trvala celý den a byla velmi krvavá - zúčastnilo se jí přibližně 200 000 vojáků. Napoleonův útok na britské pozice byl zpočátku úspěšný, ale příchod pruských posil rozhodl bitvu ve prospěch spojenců. Napoleon ztratil přibližně 25 000 mužů, spojenci 22 000. Tato porážka ukončila napoleonské války a Napoleonovu kariéru. Byl vyhoštěn na odlehlý ostrov Svatá Helena v jižním Atlantiku, kde zemřel v roce 1821. Bitva vedla k obnově monarchií v Evropě a novému uspořádání kontinentu na Vídeňském kongresu. Slovo "Waterloo" se stalo synonymem pro definitivní porážku. Bitva je považována za jeden z nejdůležitějších vojenských střetů v historii a každoročně se u Waterloo konají rekonstrukce bitvy.',
    tags: ['Válka', 'Evropa', 'Moderní doba'],
    image: 'modernidoba/bitva u waterloo.png',
    period: getPeriodForYear(1815),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Bitva_u_Waterloo'
  },
  {
    id: 28,
    year: 1865,
    title: 'Konec americké občanské války',
    location: 'Appomattox, USA',
    coordinates: { lat: 37.3842, lng: -78.8256 },
    description: 'Generál Lee se vzdal generálu Grantovi, čímž skončila občanská válka a otroctví bylo zrušeno.',
    details: 'Americká občanská válka (1861-1865) skončila 9. dubna 1865 kapitulací generála Roberta E. Leea v Appomattox Court House ve Virginii. Byla to nejkrvavější válka v americké historii - zabila přibližně 620 000 vojáků (více než všechny ostatní americké války dohromady). Válka vypukla kvůli sporu o otroctví a práva států. Jih (Konfederace) se pokusil odtrhnout od Unie, ale Sever (Unie) pod vedením prezidenta Abrahama Lincolna bojoval za zachování unie a zrušení otroctví. Válka zahrnovala první použití železnic, telegrafu a dalších moderních technologií ve válčení. Bitva u Gettysburgu v roce 1863 byla nejkrvavější bitvou války a obratem ve prospěch Unie. Konec války vedl ke zrušení otroctví (13. dodatek ústavy) a sjednocení Spojených států. Válka měla hluboký dopad na americkou společnost - zanechala hořkost mezi Severem a Jihem, která trvala desítky let. Rekonstrukce Jihu byla dlouhý a bolestivý proces, který formoval moderní Ameriku.',
    tags: ['USA', 'Válka', 'Moderní doba'],
    image: 'modernidoba/konec americke obcanske valky.jpg',
    period: getPeriodForYear(1865),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Americk%C3%A1_ob%C4%8Dansk%C3%A1_v%C3%A1lka'
  },
  {
    id: 29,
    year: 1914,
    title: 'Začátek první světové války',
    location: 'Sarajevo, Bosna',
    coordinates: { lat: 43.8563, lng: 18.4131 },
    description: 'Atentát na arcivévodu Františka Ferdinanda d\'Este vyvolal první světovou válku.',
    details: 'První světová válka začala 28. července 1914 po atentátu na rakousko-uherského následníka trůnu arcivévodu Františka Ferdinanda d\'Este v Sarajevu. Válka trvala do 11. listopadu 1918 a byla jedním z nejničivějších konfliktů v historii. Zúčastnilo se jí více než 70 milionů vojáků z 30 zemí. Válka byla charakterizována zákopovou válkou, která vedla k obrovským ztrátám na životech při minimálních územních ziscích. Bylo poprvé použito chemických zbraní, tanků a letadel. Celkem zahynulo přibližně 16-20 milionů lidí (vojáci i civilisté). Válka vedla k pádu čtyř velkých říší - Ruské, Německé, Rakousko-Uherské a Osmanské. Versailleská mírová smlouva ukončila válku, ale její tvrdé podmínky přispěly k vzestupu nacismu v Německu a druhé světové válce. První světová válka změnila politickou mapu Evropy a světa, vedla k vzniku nových států a položila základy pro moderní mezinárodní systém.',
    tags: ['Válka', 'Evropa', 'Moderní doba'],
    image: 'modernidoba/zacatek 1 svetove valky.jpg',
    period: getPeriodForYear(1914),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Prvn%C3%AD_sv%C4%9Btov%C3%A1_v%C3%A1lka',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '14fc482da7a94997ae7bc8ad81274e45',
      url: 'https://sketchfab.com/3d-models/versailles-france-14fc482da7a94997ae7bc8ad81274e45'
    }
  },
  {
    id: 30,
    year: 1917,
    title: 'Ruská revoluce',
    location: 'Petrohrad, Rusko',
    coordinates: { lat: 59.9343, lng: 30.3351 },
    description: 'Bolševická revoluce svrhla carský režim a zavedla komunistickou vládu.',
    details: 'Ruská revoluce proběhla ve dvou fázích v roce 1917. Únorová revoluce (podle juliánského kalendáře, březen podle gregoriánského) svrhla cara Mikuláše II. a ukončila více než 300 let trvající vládu Romanovců. Vznikla Prozatímní vláda, ale ta nedokázala řešit válečné a ekonomické problémy. V říjnu (listopadu) 1917 provedli bolševici pod vedením Vladimira Lenina úspěšný převrat - dobyli Zimní palác v Petrohradě a převzali moc. Bolševická revoluce vedla k pádu Ruské říše a vzniku Sovětského svazu, prvního komunistického státu na světě. Revoluce měla zásadní vliv na světovou politiku 20. století - inspirovala komunistická hnutí po celém světě a vedla ke studené válce mezi USA a SSSR. Ruská občanská válka (1917-1923) následovala po revoluci a způsobila smrt milionů lidí. Revoluce změnila mapu Evropy a světa a její důsledky jsou patrné dodnes.',
    tags: ['Rusko', 'Revoluce', 'Moderní doba'],
    image: 'modernidoba/ruska revoluce.jpg',
    period: getPeriodForYear(1917),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C5%98%C3%ADjnov%C3%A1_revoluce'
  },
  {
    id: 31,
    year: 1945,
    title: 'Konec druhé světové války',
    location: 'Berlín, Německo',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: 'Kapitulace Německa a Japonska ukončila nejničivější válku v historii.',
    details: 'Druhá světová válka (1939-1945) byla nejničivějším konfliktem v historii lidstva. Zúčastnilo se jí více než 100 milionů vojáků z více než 30 zemí. Válka skončila kapitulací Německa 8. května 1945 a kapitulací Japonska 2. září 1945 po svržení atomových bomb na Hirošimu a Nagasaki. Celkem zahynulo přibližně 60-85 milionů lidí, z toho více než polovina byli civilisté. Holocaust způsobil smrt 6 milionů Židů a milionů dalších obětí nacistického režimu. Válka vedla k novému světovému uspořádání - vzniku Organizace spojených národů (OSN) v roce 1945, rozdělení Evropy na východní a západní blok a začátku studené války mezi USA a SSSR. Německo bylo rozděleno na východní a západní část, stejně jako Berlín. Válka změnila politickou mapu světa - zanikly koloniální říše, vznikly nové státy a USA a SSSR se staly supervelmocemi. Válečné zločiny byly souzeny v Norimberském procesu, který stanovil mezinárodní právo.',
    tags: ['Válka', 'Evropa', 'Moderní doba'],
    image: 'modernidoba/konec druhe svetove valky.jpg',
    period: getPeriodForYear(1945),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Druh%C3%A1_sv%C4%9Btov%C3%A1_v%C3%A1lka',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '6718a21b8e15463c997206857ebd2a3c',
      url: 'https://sketchfab.com/3d-models/world-war-2-spitfire-6718a21b8e15463c997206857ebd2a3c'
    }
  },
  {
    id: 32,
    year: 1989,
    title: 'Pád Berlínské zdi',
    location: 'Berlín, Německo',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: 'Pád Berlínské zdi symbolizoval konec studené války a sjednocení Německa.',
    details: 'Berlínská zeď, která rozdělovala východní a západní Berlín, padla 9. listopadu 1989 po 28 letech existence. Zeď byla postavena v roce 1961, aby zabránila útěkům z východního Německa na Západ. Byla dlouhá 155 km a vysoká 3,6 metru, s ostnatým drátem, strážními věžemi a "pásmem smrti". Při pokusech o útěk přes zeď zahynulo nejméně 140 lidí. Pád zdi začal, když východoněmecký mluvčí Günter Schabowski na tiskové konferenci omylem oznámil, že hranice jsou okamžitě otevřené. Tisíce Východních Berlíňanů se shromáždily u zdi a pohraničníci, zmatení nejasnými rozkazy, otevřeli hraniční přechody. Lidé začali demolovat zeď kladivy a majzlíky. Pád zdi symbolizoval konec studené války a vedl k znovusjednocení Německa 3. října 1990. Tato událost inspirovala demokratické změny ve východní Evropě a přispěla k pádu komunistických režimů. Fragmenty zdi se staly sběratelskými předměty a památníky po celém světě.',
    tags: ['Německo', 'Politika', 'Moderní doba'],
    image: 'modernidoba/pad berlinske zdi.jpeg',
    period: getPeriodForYear(1989),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Berl%C3%ADnsk%C3%A1_ze%C4%8F'
  },
  {
    id: 33,
    year: 2001,
    title: 'Útoky na Světové obchodní centrum',
    location: 'New York, USA',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description: 'Teroristické útoky na Světové obchodní centrum změnily světovou bezpečnostní politiku.',
    details: 'Útoky z 11. září 2001 byly sérií čtyř koordinovaných teroristických útoků provedených islámskými teroristy z al-Káidy. Dva letadla narazila do dvojčat Světového obchodního centra v New Yorku, jedno do Pentagonu ve Virginii a čtvrté se zřítilo v Pensylvánii poté, co cestující převzali kontrolu. Útoky způsobily smrt 2 977 lidí (kromě 19 únosců) a zranění více než 6 000 dalších. Dvojčata se zhroutila během několika hodin, což způsobilo masivní destrukci v dolním Manhattanu. Útoky byly nejničivějším teroristickým útokem v historii USA a největším útokem na americkou půdu od Pearl Harboru. Měly zásadní dopad na mezinárodní vztahy a bezpečnostní politiku - USA zahájily "válku proti teroru", invazi do Afghánistánu (2001) a Iráku (2003). Byla vytvořena nová bezpečnostní opatření, včetně Ministerstva vnitřní bezpečnosti a rozšířených pravomocí zpravodajských služeb. Útoky změnily způsob, jakým svět vnímal terorismus a bezpečnost.',
    tags: ['USA', 'Terorismus', 'Moderní doba'],
    image: 'modernidoba/utoky na svetove obchodni centrum.jpg',
    period: getPeriodForYear(2001),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C3%9Atoky_11._z%C3%A1%C5%99%C3%AD',
    model3D: {
      type: 'sketchfab',
      sketchfabId: '7750351736404beab6ae1581a0b20e9d',
      url: 'https://sketchfab.com/3d-models/911-scene-twin-towers-plane-crash-7750351736404beab6ae1581a0b20e9d'
    }
  },
  // Afrika
  {
    id: 57,
    year: -3000,
    title: 'Vznik starověkého Egypta',
    location: 'Egypt',
    coordinates: { lat: 26.0, lng: 31.0 },
    description: 'Začátek egyptské civilizace sjednocením Horního a Dolního Egypta.',
    details: 'Starověký Egypt vznikl kolem roku 3100 př. n. l. sjednocením Horního a Dolního Egypta pod vládou faraona Menese (Narmera). Egyptská civilizace trvala více než 3000 let a byla jednou z nejvyspělejších civilizací starověku. Egypt vznikl podél řeky Nil, která poskytovala úrodnou půdu, vodu a dopravní cestu. Nilské záplavy každoročně obnovovaly půdu, což umožnilo rozvoj zemědělství a podporovalo velkou populaci. Egypťané dosáhli významných objevů v architektuře (pyramidy, chrámy), matematice (geometrie pro měření polí), medicíně (chirurgie, anatomie), astronomii (kalendář) a písmu (hieroglyfy). Vytvořili složitý náboženský systém s mnoha bohy a vírou v posmrtný život, což vedlo k mumifikaci a stavbě hrobek. Egyptská společnost byla hierarchická s faraonem na vrcholu, následovaným kněžími, úředníky, vojáky, řemeslníky a rolníky. Egyptská kultura a umění ovlivnily pozdější civilizace a dodnes fascinují svět.',
    tags: ['Egypt', 'Afrika', 'Civilizace', 'Starověk'],
    image: 'pravek/sjednoceni-egypta.jpeg',
    period: getPeriodForYear(-3000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Starov%C4%9Bk%C3%BD_Egypt'
  },
  {
    id: 58,
    year: -814,
    title: 'Založení Kartága',
    location: 'Kartágo, Tunis',
    coordinates: { lat: 36.8528, lng: 10.3231 },
    description: 'Féničané založili město Kartágo, které se stalo mocnou obchodní říší.',
    details: 'Kartágo bylo založeno v roce 814 př. n. l. fénickými osadníky z Tyru na území dnešního Tuniska. Podle legendy město založila fénická princezna Dídó (Elissa), která uprchla z Tyru po vraždě svého manžela. Město se rychle rozvinulo v mocné obchodní a námořní centrum Středomoří díky své strategické poloze. Kartágo mělo impozantní hradby, dva velké přístavy schopné kotvit stovkám lodí, a rozsáhlé obchodní sítě sahající od severní Afriky přes Středomoří až do Británie a západní Afriky. Kartáginci byli vynikající mořeplavci a obchodníci, kteří obchodovali s cínem, stříbrem, slonovinou a otroky. Město bylo známé svými pokročilými námořními technologiemi a silnou flotilou. Jeho rivalita s Římem vedla k sérii konfliktů známých jako punské války (264-146 př. n. l.), které nakonec vyústily v úplné zničení Kartága v roce 146 př. n. l. Římané údajně zasypali město solí, aby zajistili, že už nikdy nevyroste. Později bylo město znovu vybudováno a stalo se důležitým centrem římské Afriky.',
    tags: ['Afrika', 'Obchod', 'Starověk'],
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Kart%C3%A1go',
    image: 'pravek/kartago.jpeg',
    period: getPeriodForYear(-814)
  },
  {
    id: 59,
    year: 330,
    title: 'Založení Aksumské říše',
    location: 'Etiopie',
    coordinates: { lat: 14.0, lng: 38.5 },
    description: 'Vznik Aksumské říše, jedné z nejmocnějších afrických říší starověku.',
    details: 'Aksumská říše vzkvétala v oblasti dnešní Etiopie a Eritreje od 1. do 8. století n. l. Byla významnou obchodní mocností, která kontrolovala obchod mezi Afrikou, Arábií a Indií. Aksum měl vlastní měnu, pokročilé stavební techniky (včetně obelisků) a vlastní písmo (ge\'ez). Říše byla jednou z prvních, které přijaly křesťanství - král Ezana přijal křesťanství kolem roku 330 n. l., což z Etiopie učinilo jeden z prvních křesťanských států na světě. Aksum obchodoval se zlatem, slonovinou, želvovinou a otroky. Město Aksum bylo hlavním městem a náboženským centrem říše. Aksumští králové si nárokovali původ od krále Šalomouna a královny ze Sáby. Říše upadla v 7. století kvůli islámské expanzi, která přerušila obchodní cesty, a změnám klimatu. Aksumská kultura a křesťanství však přežily v Etiopii dodnes.',
    tags: ['Afrika', 'Etiopie', 'Obchod', 'Starověk'],
    image: 'starovek/zalozeni-aksumske-rise.jpg',
    period: getPeriodForYear(330),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Aksumsk%C3%A1_%C5%99%C3%AD%C5%A1e'
  },
  {
    id: 60,
    year: 1076,
    title: 'Pád Ghanské říše',
    location: 'Ghana',
    coordinates: { lat: 8.0, lng: -2.0 },
    description: 'Konec Ghanské říše, první velké západoafrické říše.',
    details: 'Ghanská říše vzkvétala v západní Africe od 6. do 13. století n. l. a byla první významnou říší v této oblasti. Říše kontrolovala obchodní cesty mezi severní a západní Afrikou, zejména obchod se zlatem a solí. Zlato z Ghany bylo klíčové pro středověký obchod a říše byla známá svým obrovským bohatstvím. Ghanská říše měla silnou armádu a efektivní administrativní systém. Hlavní město Kumbi Saleh bylo významným obchodním centrem s tisíci obyvateli. Říše upadla v 11. století kvůli kombinaci faktorů - invaze Almoravidů ze severu, vnitřní konflikty a změny obchodních tras. Pád Ghanské říše otevřel cestu pro vzestup Mali říše, která se stala ještě mocnější. Ghanská říše zanechala dědictví v západoafrické kultuře a obchodních praktikách. Moderní stát Ghana si vybral své jméno na počest této starověké říše, i když se geograficky nachází jinde.',
    tags: ['Afrika', 'Ghana', 'Obchod', 'Středověk'],
    image: 'stredovek/pad ghanske rise.webp',
    period: getPeriodForYear(1076),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Ghansk%C3%A1_%C5%99%C3%AD%C5%A1e'
  },
  {
    id: 61,
    year: 1324,
    title: 'Pouť Mansa Musy do Mekky',
    location: 'Mali',
    coordinates: { lat: 17.0, lng: -4.0 },
    description: 'Mansa Musa, král Mali, podnikl legendární pouť do Mekky s obrovským bohatstvím.',
    details: 'Mansa Musa (vládl 1312-1337) byl desátým králem Mali říše a je považován za jednoho z nejbohatších lidí v historii. V roce 1324 podnikl legendární pouť (hadždž) do Mekky, která trvala rok a prošla přes Egypt. Jeho karavana čítala 60 000 lidí, včetně 12 000 otroků, a nesla obrovské množství zlata - podle některých zdrojů až 18 tun. Mansa Musa rozdával zlato tak štědře po cestě, že způsobil masivní inflaci v Egyptě a celém Středomoří - cena zlata klesla a trvalo 12 let, než se trh zotavil. V Káhiře utratil tolik zlata, že zlomil místní ekonomiku. Jeho štědrost a bohatství upoutaly pozornost celého světa - jeho jméno a Mali se objevily na evropských mapách. Mansa Musa také investoval do vzdělání a architektury - založil univerzity a mešity, včetně slavné mešity v Timbuktu. Jeho vláda představovala vrchol Mali říše, která byla jednou z největších a nejbohatších říší v africké historii.',
    tags: ['Afrika', 'Mali', 'Náboženství', 'Středověk'],
    image: 'stredovek/pout mansa musy do mekky.jpg',
    period: getPeriodForYear(1324),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Mansa_Musa'
  },
  {
    id: 62,
    year: 1885,
    title: 'Berlínská konference',
    location: 'Berlín, Německo',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    description: 'Evropské mocnosti rozdělily Afriku na kolonie bez ohledu na africké národy.',
    details: 'Berlínská konference (1884-1885) byla svolána německým kancléřem Otto von Bismarckem a zúčastnilo se jí 14 evropských zemí a USA. Konference měla "regulovat" kolonizaci Afriky, ale ve skutečnosti rozdělila kontinent mezi evropské mocnosti bez jakékoli účasti afrických představitelů. Hlavní zásadou bylo "efektivní okupace" - země musela prokázat, že skutečně kontroluje území, které si nárokuje. Konference ignorovala etnické, kulturní a historické hranice - uměle vytvořené hranice rozdělily etnické skupiny a spojily nepřátelské národy. Toto rozdělení mělo trvalé negativní dopady - vedlo k etnickým konfliktům, občanským válkám a nestabilitě, které trvají dodnes. Konference také legalizovala obchod s otroky a stanovila pravidla pro "civilizaci" afrických národů. Do roku 1914 bylo 90% Afriky pod evropskou kontrolou. Berlínská konference je považována za jeden z nejhanebnějších momentů v koloniální historii a symbolizuje evropský imperialismus v Africe.',
    tags: ['Afrika', 'Kolonizace', 'Politika', 'Moderní doba'],
    image: 'modernidoba/Berlinska-konference.jpg',
    period: getPeriodForYear(1885),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Berl%C3%ADnsk%C3%A1_konference'
  },
  {
    id: 63,
    year: 1994,
    title: 'Konec apartheidu v Jižní Africe',
    location: 'Jižní Afrika',
    coordinates: { lat: -25.7, lng: 28.2 },
    description: 'Nelson Mandela se stal prvním černošským prezidentem Jižní Afriky.',
    details: 'Apartheid (rasová segregace) v Jižní Africe trval od roku 1948 do roku 1994. Systém odděloval bílé, černé, barevné a asijské obyvatelstvo a omezoval práva nebělochů. Nelson Mandela strávil 27 let ve vězení za boj proti apartheidu. V roce 1990 byl propuštěn z vězení prezidentem F.W. de Klerkem, který zahájil proces ukončení apartheidu. První demokratické volby s univerzálním volebním právem se konaly 27. dubna 1994. Nelson Mandela byl zvolen prvním černošským prezidentem Jižní Afriky a sloužil do roku 1999. Konec apartheidu ukončil desetiletí rasové segregace a diskriminace. Mandela se stal symbolem boje za svobodu, usmíření a odpuštění - místo pomsty prosazoval jednotu a smíření mezi rasami. Založil Komisi pravdy a usmíření, která vyšetřovala zločiny apartheidu. Mandela získal Nobelovu cenu míru v roce 1993 spolu s de Klerkem. Konec apartheidu inspiroval bojovníky za lidská práva po celém světě a ukázal, že změna je možná i v nejtěžších podmínkách.',
    tags: ['Afrika', 'Politika', 'Lidská práva', 'Moderní doba'],
    image: 'modernidoba/konec zpartheidu v jizni americe.jpg',
    period: getPeriodForYear(1994),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Apartheid'
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
    image: 'pravek/zacatek-andske-civilizace.jpeg',
    period: getPeriodForYear(-3000),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Andsk%C3%A9_civilizace'
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
    image: 'pravek/chavinska-kutua.jpeg',
    period: getPeriodForYear(-1200),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Chav%C3%ADnsk%C3%A1_kultura'
  },
  {
    id: 66,
    year: 1438,
    title: 'Vznik Incké říše',
    location: 'Peru',
    coordinates: { lat: -13.2, lng: -72.5 },
    description: 'Inkové začali budovat svou říši v Andách.',
    details: 'Incká říše (Tawantinsuyu) byla největší říší v předkolumbovské Americe, rozkládající se podél celého západního pobřeží Jižní Ameriky od dnešního Ekvádoru po Chile. Říše začala vznikat kolem roku 1438 pod vládou Pachacutiho, který přeměnil malé království v obrovskou říši. Inkové měli pokročilý systém silnic (Qhapaq Ñan) dlouhý přes 40 000 km, který spojoval všechny části říše. Používali systém uzlů zvaný kipu pro vedení záznamů a komunikaci. Incká společnost byla hierarchická s Inkou (císařem) na vrcholu, považovaným za syna Slunce. Inkové vyvinuli pokročilé zemědělské techniky včetně terasovitých polí, zavlažovacích systémů a skladování potravin. Jejich architektura byla pozoruhodná - kamenné bloky byly opracovány tak přesně, že mezi ně neprošel ani list papíru. Inkové neměli písmo, ale měli bohatou ústní tradici a složité náboženské rituály. Machu Picchu je jedním z nejslavnějších příkladů incké architektury. Říše dosáhla vrcholu za vlády Huayna Capaca, ale byla oslabena občanskou válkou a pak dobyta Španěly.',
    tags: ['Jižní Amerika', 'Peru', 'Civilizace', 'Středověk'],
    image: 'stredovek/vznik incke rise.png',
    period: getPeriodForYear(1438),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Inck%C3%A1_%C5%99%C3%AD%C5%A1e'
  },
  {
    id: 67,
    year: 1532,
    title: 'Dobytí Incké říše',
    location: 'Peru',
    coordinates: { lat: -13.2, lng: -72.5 },
    description: 'Francisco Pizarro dobyl Inckou říši pro Španělsko.',
    details: 'Dobytí Incké říše začalo v roce 1532, kdy Francisco Pizarro s pouhými 168 muži přistál v Peru. Incká říše byla oslabena občanskou válkou mezi bratry Atahualpou a Huáscarem a také evropskými nemocemi (neštovice), které zabily velkou část populace. Pizarro pozval Inku Atahualpu na setkání v Cajamarce, ale místo toho ho zajal a požadoval obrovské výkupné - místnost plnou zlata a stříbra. I když bylo výkupné zaplaceno, Pizarro Atahualpu popravil. Španělé využili technologické převahy (koně, ocelové zbraně, střelné zbraně) a rozdělení mezi Inky k rychlému dobytí říše. Dobytí bylo brutální - tisíce Inků byly zabity, jejich kultura zničena a poklady rozkradeny. Poslední Inka, Túpac Amaru, byl popraven v roce 1572. Dobytí ukončilo existenci největší předkolumbovské říše v Americe a změnilo historii Jižní Ameriky. Vedlo k evropské kolonizaci, zavedení křesťanství a zničení incké kultury. Miliony Inků zemřely na nemoci, nucenou práci a války. Dědictví Inků však přežívá v peruánské kultuře, jazyce (kečuánština) a tradicích dodnes.',
    tags: ['Jižní Amerika', 'Peru', 'Kolonizace', 'Novověk'],
    image: 'novovek/dobiti incke rise.webp',
    period: getPeriodForYear(1532),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Dobyt%C3%AD_Inck%C3%A9_%C5%99%C3%AD%C5%A1e'
  },
  {
    id: 68,
    year: 1822,
    title: 'Nezávislost Brazílie',
    location: 'Brazílie',
    coordinates: { lat: -15.8, lng: -47.9 },
    description: 'Brazílie vyhlásila nezávislost na Portugalsku.',
    details: 'Brazílie vyhlásila nezávislost na Portugalsku 7. září 1822 pod vedením Dom Pedra I., syna portugalského krále. Na rozdíl od většiny latinskoamerických zemí získala Brazílie nezávislost relativně mírovou cestou - bez rozsáhlé války. Dom Pedro I. odmítl vrátit se do Portugalska a místo toho vyhlásil nezávislost s heslem "Nezávislost nebo smrt!" (Independência ou Morte!). Brazílie se stala nezávislým císařstvím s Dom Pedrem I. jako císařem. Stala se největším nezávislým státem v Jižní Americe a jedinou portugalsky mluvící zemí na kontinentu. Nezávislost byla uznána Portugalskem v roce 1825. Brazílie zůstala monarchií až do roku 1889, kdy byla vyhlášena republika. Nezávislost Brazílie byla součástí širšího hnutí za nezávislost v Latinské Americe, ale byla jedinečná svou mírovou povahou a zachováním monarchie. Brazílie si zachovala silné vazby s Portugalskem a evropskou kulturou, což ovlivnilo její vývoj. Dnes je Brazílie největší a nejlidnatější zemí Jižní Ameriky.',
    tags: ['Jižní Amerika', 'Brazílie', 'Politika', 'Moderní doba'],
    image: 'modernidoba/nezavislost brazilie.jpg',
    period: getPeriodForYear(1822),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Nez%C3%A1vislost_Braz%C3%ADlie'
  },
  {
    id: 69,
    year: 1914,
    title: 'Otevření Panamského průplavu',
    location: 'Panama',
    coordinates: { lat: 9.0, lng: -79.5 },
    description: 'Panamský průplav byl otevřen, čímž propojil Atlantik a Pacifik.',
    details: 'Panamský průplav byl otevřen 15. srpna 1914 po 10 letech stavby pod vedením USA. Průplav je dlouhý 82 km a spojuje Atlantský a Tichý oceán, čímž zkracuje námořní cestu mezi východním a západním pobřežím USA o více než 13 000 km. První pokus o stavbu provedli Francouzi v letech 1881-1894, ale projekt selhal kvůli nemocem (malárie, žlutá zimnice), technickým problémům a bankrotu. USA převzaly projekt v roce 1904 a dokončily ho za 10 let. Stavba si vyžádala životy přibližně 27 000 dělníků. Průplav používá systém zdymadel, která zvedají lodě na úroveň Gatúnského jezera (26 metrů nad mořem). Otevření průplavu mělo zásadní dopad na světový obchod - umožnilo rychlejší a levnější přepravu zboží mezi oceány. Průplav změnil geopolitickou situaci - USA získaly strategickou kontrolu nad důležitou obchodní cestou. V roce 1999 přešel průplav pod kontrolu Panamy. Dnes projede průplavem přibližně 14 000 lodí ročně, což představuje 5% světového obchodu. Průplav je považován za jeden z největších inženýrských úspěchů 20. století.',
    tags: ['Jižní Amerika', 'Panama', 'Technologie', 'Moderní doba'],
    image: 'modernidoba/otevreni panamskeho prulivu.webp',
    period: getPeriodForYear(1914),
    wikipediaUrl: 'https://cs.wikipedia.org/wiki/Panamsk%C3%BD_pr%C5%AFplav'
  }
]


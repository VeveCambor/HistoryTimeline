export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

// Kvízové otázky pro jednotlivé události
export const eventQuizQuestions: Record<number, QuizQuestion[]> = {
  // Domestikace psa
  35: [
    {
      question: 'Kdy přibližně začala domestikace psa?',
      options: [
        'Před 5 000 lety',
        'Před 10 000 lety',
        'Před 15 000 až 12 000 lety',
        'Před 20 000 lety'
      ],
      correctAnswer: 2,
      explanation: 'Domestikace psa začala před přibližně 15 000 až 12 000 lety, kdy se vlci začali přibližovat k lidským táborům.'
    },
    {
      question: 'Kde se domestikace psa pravděpodobně odehrála?',
      options: [
        'V Evropě',
        'V Severní Americe',
        'Ve Střední Asii',
        'V Africe'
      ],
      correctAnswer: 2,
      explanation: 'Domestikace psa se pravděpodobně odehrála ve Střední Asii, kde se vlci začali přibližovat k lidským táborům.'
    },
    {
      question: 'Jaký byl hlavní důvod, proč se vlci přibližovali k lidským táborům?',
      options: [
        'Hledali vodu',
        'Hledali úkryt před predátory',
        'Hledali zbytky jídla',
        'Hledali společnost'
      ],
      correctAnswer: 2,
      explanation: 'Vlci se přibližovali k lidským táborům pravděpodobně kvůli zbytkům jídla, což vedlo k vzájemnému vztahu.'
    }
  ],

  // První jeskynní malby
  9: [
    {
      question: 'Kde byly objeveny jedny z nejstarších jeskynních maleb?',
      options: [
        'V Lascaux, Francie',
        'V Altamiře, Španělsko',
        'V Chauvetově jeskyni, Francie',
        'V Niaux, Francie'
      ],
      correctAnswer: 2,
      explanation: 'Chauvetova jeskyně ve Francii obsahuje jedny z nejstarších známých jeskynních maleb, datované do období před 30 000 až 40 000 lety.'
    },
    {
      question: 'Jaké techniky používali pravěcí umělci při vytváření jeskynních maleb?',
      options: [
        'Pouze uhlík',
        'Pouze okr',
        'Uhlík a okr',
        'Barvy z rostlin'
      ],
      correctAnswer: 2,
      explanation: 'Pravěcí umělci používali uhlík a okr k vytváření maleb, které vykazovaly pokročilé techniky jako perspektiva a stínování.'
    },
    {
      question: 'Kolik zvířat je zobrazeno v Chauvetově jeskyni?',
      options: [
        'Méně než 100',
        'Přes 200',
        'Přes 400',
        'Přes 600'
      ],
      correctAnswer: 2,
      explanation: 'Chauvetova jeskyně obsahuje více než 400 maleb zvířat včetně lvů, medvědů, nosorožců a koní.'
    }
  ],

  // Vznik písma v Mezopotámii
  1: [
    {
      question: 'Jaký typ písma vznikl v Mezopotámii?',
      options: [
        'Hieroglyfy',
        'Klínové písmo',
        'Alfabetické písmo',
        'Obrázkové písmo'
      ],
      correctAnswer: 1,
      explanation: 'V Mezopotámii vznikl klínové písmo, které bylo nejstarším známým systémem psaní.'
    },
    {
      question: 'K čemu se klínové písmo původně používalo?',
      options: [
        'Pro literární díla',
        'Pro náboženské texty',
        'Pro zaznamenávání obchodních transakcí',
        'Pro historické záznamy'
      ],
      correctAnswer: 2,
      explanation: 'Klínové písmo se původně používalo pro zaznamenávání obchodních transakcí, později se rozšířilo i na zákony a literární díla.'
    },
    {
      question: 'Která civilizace vytvořila klínové písmo?',
      options: [
        'Babyloňané',
        'Asyřané',
        'Sumerové',
        'Akkadové'
      ],
      correctAnswer: 2,
      explanation: 'Klínové písmo vytvořili Sumerové v Mezopotámii před přibližně 5 000 lety.'
    }
  ],

  // Sjednocení Egypta
  41: [
    {
      question: 'Kdo sjednotil Horní a Dolní Egypt?',
      options: [
        'Ramesse II.',
        'Tutanchamon',
        'Menes (Narmer)',
        'Cheops'
      ],
      correctAnswer: 2,
      explanation: 'Král Menes (také známý jako Narmer) sjednotil Horní a Dolní Egypt a založil první egyptskou dynastii.'
    },
    {
      question: 'Kdy přibližně došlo ke sjednocení Egypta?',
      options: [
        'Před 2000 lety',
        'Před 3000 lety',
        'Před 4000 lety',
        'Před 5000 lety'
      ],
      correctAnswer: 3,
      explanation: 'Sjednocení Egypta proběhlo před přibližně 5100 lety (kolem roku 3100 př. n. l.).'
    }
  ],

  // Velká pyramida v Gíze
  10: [
    {
      question: 'Který faraon nechal postavit Velkou pyramidu v Gíze?',
      options: [
        'Ramesse II.',
        'Tutanchamon',
        'Chufu (Cheops)',
        'Amenhotep III.'
      ],
      correctAnswer: 2,
      explanation: 'Velkou pyramidu v Gíze nechal postavit faraon Chufu (také známý jako Cheops).'
    },
    {
      question: 'Jak dlouho byla Velká pyramida nejvyšší stavbou na světě?',
      options: [
        'Přes 1000 let',
        'Přes 2000 let',
        'Přes 3000 let',
        'Přes 3800 let'
      ],
      correctAnswer: 3,
      explanation: 'Velká pyramida byla nejvyšší stavbou na světě po více než 3800 let, až do dokončení Lincolnské katedrály v Anglii v roce 1311.'
    }
  ],

  // Chammurapiho zákoník
  44: [
    {
      question: 'Kolik zákonů obsahoval Chammurapiho zákoník?',
      options: [
        '100 zákonů',
        '200 zákonů',
        '282 zákonů',
        '350 zákonů'
      ],
      correctAnswer: 2,
      explanation: 'Chammurapiho zákoník obsahoval 282 zákonů a byl vytesán do kamenné stély.'
    },
    {
      question: 'Jaká byla hlavní zásada Chammurapiho zákoníku?',
      options: [
        'Oko za oko, zub za zub',
        'Všichni jsou si rovni',
        'Mír především',
        'Spravedlnost pro všechny'
      ],
      correctAnswer: 0,
      explanation: 'Chammurapiho zákoník obsahoval zásadu "oko za oko, zub za zub", což znamenalo, že trest měl odpovídat zločinu.'
    }
  ],

  // Trojan War
  45: [
    {
      question: 'Kdo popsal Trojan War v epické básni?',
      options: [
        'Sofokles',
        'Euripides',
        'Homér',
        'Vergilius'
      ],
      correctAnswer: 2,
      explanation: 'Trojan War byla popsána v Homérově Iliadě a Odyssee, které jsou jedny z nejvýznamnějších literárních děl západní civilizace.'
    },
    {
      question: 'Kde se podle legendy odehrála Trojan War?',
      options: [
        'V Řecku',
        'V Tróji (dnešní Turecko)',
        'V Itálii',
        'V Malé Asii'
      ],
      correctAnswer: 1,
      explanation: 'Trojan War se podle legendy odehrála v Tróji, která se nachází v dnešním Turecku.'
    }
  ],

  // Začátek neolitické revoluce
  36: [
    {
      question: 'Kde začala neolitická revoluce?',
      options: [
        'V Evropě',
        'V Asii',
        'V Úrodném půlměsíci',
        'V Africe'
      ],
      correctAnswer: 2,
      explanation: 'Neolitická revoluce začala v oblasti Úrodného půlměsíce (Mezopotámie, Levanta, Anatolie) před přibližně 12 000 lety.'
    },
    {
      question: 'Co bylo hlavním důsledkem neolitické revoluce?',
      options: [
        'Vznik měst',
        'Přechod od lovu a sběru k zemědělství',
        'Vznik písma',
        'Vznik kovů'
      ],
      correctAnswer: 1,
      explanation: 'Neolitická revoluce znamenala přechod od lovu a sběru k zemědělství a chovu zvířat, což umožnilo usedlý způsob života.'
    }
  ],

  // První trvalé osady
  37: [
    {
      question: 'Které město je považováno za jedno z nejstarších trvale obydlených měst?',
      options: [
        'Babylon',
        'Jericho',
        'Atény',
        'Memphis'
      ],
      correctAnswer: 1,
      explanation: 'Jericho v údolí Jordánu je považováno za jedno z nejstarších trvale obydlených měst na světě s historií sahající až do doby před 11 000 lety.'
    },
    {
      question: 'Jaké byly hlavní charakteristiky raného Jericha?',
      options: [
        'Dřevěné domy',
        'Kamenné zdi a věž',
        'Hliněné chatrče',
        'Přírodní jeskyně'
      ],
      correctAnswer: 1,
      explanation: 'Rané Jericho mělo kamenné zdi vysoké až 4 metry a kamennou věž vysokou 8,5 metru, což naznačuje pokročilé stavební techniky.'
    }
  ],

  // Vznik keramiky
  38: [
    {
      question: 'Kdy přibližně vznikl vynález keramiky?',
      options: [
        'Před 5 000 lety',
        'Před 7 000 lety',
        'Před 9 000 lety',
        'Před 12 000 lety'
      ],
      correctAnswer: 2,
      explanation: 'Vynález keramiky se datuje do doby před přibližně 9 000 lety v Mezopotámii.'
    },
    {
      question: 'Jaký byl hlavní význam keramických nádob pro pravěké společnosti?',
      options: [
        'Ozdoba',
        'Skladování potravin a vody',
        'Náboženské účely',
        'Obchod'
      ],
      correctAnswer: 1,
      explanation: 'Keramické nádoby umožnily skladování obilí, vody a dalších potravin po delší dobu, což bylo klíčové pro přežití během suchých období.'
    }
  ],

  // Domestikace koně
  39: [
    {
      question: 'Kde se domestikace koně pravděpodobně odehrála?',
      options: [
        'V Evropě',
        'Ve Střední Asii',
        'V Severní Americe',
        'V Africe'
      ],
      correctAnswer: 1,
      explanation: 'Domestikace koně proběhla před přibližně 6 000 lety v stepích střední Asie.'
    },
    {
      question: 'Jaký dopad měla domestikace koně na lidskou společnost?',
      options: [
        'Pouze pro maso',
        'Rychlejší doprava a změna válčení',
        'Pouze pro zemědělství',
        'Pouze pro zábavu'
      ],
      correctAnswer: 1,
      explanation: 'Koně umožnili rychlejší dopravu na dlouhé vzdálenosti, což vedlo k rozvoji obchodu a komunikace. Také změnili způsob válčení.'
    }
  ],

  // Vznik kola
  40: [
    {
      question: 'Kde byl vynalezeno kolo?',
      options: [
        'V Číně',
        'V Mezopotámii',
        'V Egyptě',
        'V Indii'
      ],
      correctAnswer: 1,
      explanation: 'Vynález kola se datuje do doby před přibližně 5 500 lety v Mezopotámii.'
    },
    {
      question: 'K čemu se kolo původně používalo?',
      options: [
        'Pro dopravu',
        'Pro hrnčířský kruh',
        'Pro mlýny',
        'Pro hodiny'
      ],
      correctAnswer: 1,
      explanation: 'První kola byla pravděpodobně použita pro hrnčířský kruh, ale brzy se začala používat pro dopravu.'
    }
  ],

  // Vznik egyptských hieroglyfů
  42: [
    {
      question: 'Kdy přibližně vznikly egyptské hieroglyfy?',
      options: [
        'Před 2000 lety',
        'Před 3000 lety',
        'Před 4000 lety',
        'Před 5000 lety'
      ],
      correctAnswer: 3,
      explanation: 'Egyptské hieroglyfy vznikly před přibližně 4700 lety (kolem roku 2700 př. n. l.).'
    },
    {
      question: 'K čemu se egyptské hieroglyfy používaly?',
      options: [
        'Pouze pro obchod',
        'Pro náboženské a oficiální texty',
        'Pouze pro literaturu',
        'Pro každodenní komunikaci'
      ],
      correctAnswer: 1,
      explanation: 'Egyptské hieroglyfy byly složitým písmem používaným pro náboženské a oficiální texty.'
    }
  ],

  // Vznik harappské civilizace
  43: [
    {
      question: 'Kde se nacházela harappská civilizace?',
      options: [
        'V Číně',
        'V údolí řeky Indus',
        'V Mezopotámii',
        'V Egyptě'
      ],
      correctAnswer: 1,
      explanation: 'Harappská civilizace vzkvétala v údolí řeky Indus v oblasti dnešního Pákistánu a severozápadní Indie.'
    },
    {
      question: 'Co bylo charakteristické pro harappskou civilizaci?',
      options: [
        'Pokročilé městské plánování a kanalizace',
        'Válečné dobyvatelství',
        'Nomádský způsob života',
        'Jednoduché osady'
      ],
      correctAnswer: 0,
      explanation: 'Harappská civilizace měla pokročilé městské plánování, kanalizaci a obchodní sítě.'
    }
  ],

  // Pád Západořímské říše
  4: [
    {
      question: 'Kdy došlo k pádu Západořímské říše?',
      options: [
        '476 n. l.',
        '410 n. l.',
        '395 n. l.',
        '455 n. l.'
      ],
      correctAnswer: 0,
      explanation: 'Pád Západořímské říše se tradičně datuje do roku 476 n. l., kdy byl sesazen poslední císař Romulus Augustulus.'
    },
    {
      question: 'Kdo sesadil posledního západořímského císaře?',
      options: [
        'Vizigóti',
        'Vandali',
        'Odoaker',
        'Attila'
      ],
      correctAnswer: 2,
      explanation: 'Posledního západořímského císaře Romula Augustula sesadil germánský vůdce Odoaker.'
    }
  ],

  // Bitva u Hastingsu
  5: [
    {
      question: 'Kdy se odehrála bitva u Hastingsu?',
      options: [
        '1066',
        '1067',
        '1065',
        '1068'
      ],
      correctAnswer: 0,
      explanation: 'Bitva u Hastingsu se odehrála 14. října 1066 a byla klíčovou bitvou v historii Anglie.'
    },
    {
      question: 'Kdo zvítězil v bitvě u Hastingsu?',
      options: [
        'Harold II.',
        'Vilém Dobyvatel',
        'Harald Hardrada',
        'Edgar Aetheling'
      ],
      correctAnswer: 1,
      explanation: 'V bitvě u Hastingsu zvítězil Vilém Dobyvatel (William the Conqueror), který se stal anglickým králem.'
    }
  ],


  // První olympijské hry
  2: [
    {
      question: 'Kdy se konaly první zaznamenané olympijské hry?',
      options: [
        '776 př. n. l.',
        '776 n. l.',
        '776 př. n. l. nebo dříve',
        '500 př. n. l.'
      ],
      correctAnswer: 0,
      explanation: 'První zaznamenané olympijské hry se konaly v roce 776 př. n. l. v Olympii v Řecku.'
    },
    {
      question: 'Jak často se konaly antické olympijské hry?',
      options: [
        'Každý rok',
        'Každé dva roky',
        'Každé čtyři roky',
        'Každé pět let'
      ],
      correctAnswer: 2,
      explanation: 'Antické olympijské hry se konaly každé čtyři roky a přitahovaly sportovce a diváky z celého řeckého světa.'
    }
  ],

  // Atentát na Julia Caesara
  3: [
    {
      question: 'Kdy byl zavražděn Julius Caesar?',
      options: [
        '15. března 44 př. n. l.',
        '15. března 45 př. n. l.',
        '15. března 43 př. n. l.',
        '15. března 46 př. n. l.'
      ],
      correctAnswer: 0,
      explanation: 'Julius Caesar byl zavražděn 15. března 44 př. n. l. skupinou římských senátorů.'
    },
    {
      question: 'Kdo byl mezi vrahy Julia Caesara?',
      options: [
        'Pouze Brutus',
        'Brutus a Cassius',
        'Pouze Cassius',
        'Markus Antonius'
      ],
      correctAnswer: 1,
      explanation: 'Julius Caesar byl zavražděn skupinou římských senátorů včetně Bruta a Cassia.'
    }
  ],

  // Kolumbus objevuje Ameriku
  6: [
    {
      question: 'Kdy Kryštof Kolumbus objevil Ameriku?',
      options: [
        '1491',
        '1492',
        '1493',
        '1494'
      ],
      correctAnswer: 1,
      explanation: 'Kryštof Kolumbus přistál na Bahamách v roce 1492, čímž zahájil evropskou kolonizaci Ameriky.'
    },
    {
      question: 'Kde Kolumbus poprvé přistál?',
      options: [
        'V Severní Americe',
        'Na Bahamách',
        'V Jižní Americe',
        'V Mexiku'
      ],
      correctAnswer: 1,
      explanation: 'Kolumbus poprvé přistál na Bahamách, i když si myslel, že dosáhl Asie.'
    }
  ],



  // Vznik šamanismu
  34: [
    {
      question: 'Kde vznikl šamanismus?',
      options: [
        'V Evropě',
        'V severních oblastech Eurasie a Severní Ameriky',
        'V Africe',
        'V Jižní Americe'
      ],
      correctAnswer: 1,
      explanation: 'Šamanismus vznikl v severních oblastech Eurasie a Severní Ameriky před přibližně 25 000 lety.'
    },
    {
      question: 'Jakou roli měli šamani v pravěkých společnostech?',
      options: [
        'Pouze léčitelé',
        'Prostředníci mezi lidským a duchovním světem, léčitelé, věštci',
        'Pouze vůdci',
        'Pouze válečníci'
      ],
      correctAnswer: 1,
      explanation: 'Šamani sloužili jako prostředníci mezi lidským a duchovním světem, léčitelé, věštci a duchovní vůdci svých komunit.'
    }
  ],

  // Založení Říma
  46: [
    {
      question: 'Kdy bylo podle legendy založeno město Řím?',
      options: [
        '753 př. n. l.',
        '754 př. n. l.',
        '752 př. n. l.',
        '755 př. n. l.'
      ],
      correctAnswer: 0,
      explanation: 'Založení Říma podle tradice proběhlo 21. dubna 753 př. n. l.'
    },
    {
      question: 'Kdo podle legendy založil Řím?',
      options: [
        'Romulus',
        'Romulus a Remus',
        'Remus',
        'Aeneas'
      ],
      correctAnswer: 1,
      explanation: 'Podle legendy založili Romulus a Remus město Řím. Romulus se stal prvním římským králem.'
    }
  ],

  // Narození Buddhy
  48: [
    {
      question: 'Kde se narodil Buddha?',
      options: [
        'V Indii',
        'V Lumbini, Nepál',
        'V Tibetu',
        'V Číně'
      ],
      correctAnswer: 1,
      explanation: 'Buddha (Siddhártha Gautama) se narodil v Lumbini v dnešním Nepálu.'
    },
    {
      question: 'Jaké náboženství založil Buddha?',
      options: [
        'Hinduismus',
        'Buddhismus',
        'Džinismus',
        'Sikhismus'
      ],
      correctAnswer: 1,
      explanation: 'Buddha založil buddhismus, jedno z nejvlivnějších náboženských a filozofických hnutí v historii.'
    }
  ],

  // Narození Konfucia
  49: [
    {
      question: 'Kde se narodil Konfucius?',
      options: [
        'V Japonsku',
        'V Koreji',
        'V Číně',
        'V Indii'
      ],
      correctAnswer: 2,
      explanation: 'Konfucius se narodil v Číně a jeho učení ovlivnilo čínskou kulturu po více než 2000 let.'
    },
    {
      question: 'Co je konfucianismus?',
      options: [
        'Náboženství',
        'Filozofie a etický systém',
        'Politická strana',
        'Válečná doktrína'
      ],
      correctAnswer: 1,
      explanation: 'Konfucianismus je filozofie a etický systém, který se stal základem čínské etiky a politické filozofie.'
    }
  ],

  // Bitva u Marathonu
  50: [
    {
      question: 'Kdo zvítězil v bitvě u Marathonu?',
      options: [
        'Peršané',
        'Řekové',
        'Remíza',
        'Neví se'
      ],
      correctAnswer: 1,
      explanation: 'Řekové porazili perskou armádu v bitvě u Marathonu, což bylo prvním velkým vítězstvím v řecko-perských válkách.'
    },
    {
      question: 'Co inspirovala legenda o běžci z Marathonu?',
      options: [
        'Sprint',
        'Maratonský běh',
        'Běh na dlouhé tratě',
        'Běh přes překážky'
      ],
      correctAnswer: 1,
      explanation: 'Legenda o běžci, který běžel z Marathonu do Athén, inspirovala moderní maratonský běh.'
    }
  ],

  // Bitva u Thermopyl
  11: [
    {
      question: 'Kolik spartských bojovníků bránilo průsmyk u Thermopyl?',
      options: [
        '100',
        '300',
        '500',
        '1000'
      ],
      correctAnswer: 1,
      explanation: 'Spartský král Leonidas a jeho 300 bojovníků bránili průsmyk proti perské armádě.'
    },
    {
      question: 'Kdo vedl řeckou obranu u Thermopyl?',
      options: [
        'Perikles',
        'Leonidas',
        'Themistokles',
        'Miltiades'
      ],
      correctAnswer: 1,
      explanation: 'Spartský král Leonidas vedl obranu průsmyku u Thermopyl proti perské armádě.'
    }
  ],

  // Peloponéská válka
  51: [
    {
      question: 'Mezi kterými městy se odehrála peloponéská válka?',
      options: [
        'Athény a Théby',
        'Athény a Sparta',
        'Sparta a Korint',
        'Athény a Korint'
      ],
      correctAnswer: 1,
      explanation: 'Peloponéská válka byla dlouhou válkou mezi Athénami a Spartou, která trvala 27 let.'
    },
    {
      question: 'Jak dlouho trvala peloponéská válka?',
      options: [
        '10 let',
        '20 let',
        '27 let',
        '30 let'
      ],
      correctAnswer: 2,
      explanation: 'Peloponéská válka trvala 27 let a byla jednou z nejničivějších konfliktů starověkého Řecka.'
    }
  ],

  // Alexandr Veliký
  52: [
    {
      question: 'Kde se narodil Alexandr Veliký?',
      options: [
        'V Athénách',
        'V Makedonii',
        'V Persii',
        'V Egyptě'
      ],
      correctAnswer: 1,
      explanation: 'Alexandr Veliký se narodil v Makedonii a nastoupil na trůn v roce 336 př. n. l.'
    },
    {
      question: 'Jak daleko sahala Alexandrova říše?',
      options: [
        'Pouze Řecko',
        'Řecko a Malá Asie',
        'Od Řecka až po Indii',
        'Pouze Evropa'
      ],
      correctAnswer: 2,
      explanation: 'Alexandr Veliký vytvořil obrovskou říši sahající od Řecka až po Indii.'
    }
  ],

  // Pád Ninive
  47: [
    {
      question: 'Kdo dobyl Ninive?',
      options: [
        'Řekové',
        'Babyloňané a Médové',
        'Egypťané',
        'Peršané'
      ],
      correctAnswer: 1,
      explanation: 'Pád Ninive nastal po dobytí spojenými silami Babyloňanů a Médů.'
    },
    {
      question: 'Co znamenal pád Ninive?',
      options: [
        'Konec asyrské říše',
        'Začátek nové říše',
        'Mír v regionu',
        'Rozkvět obchodu'
      ],
      correctAnswer: 0,
      explanation: 'Pád Ninive ukončil existenci asyrské říše, která byla jednou z nejmocnějších říší starověku.'
    }
  ],



  // Sjednocení Číny pod dynastií Čchin
  12: [
    {
      question: 'Kdo sjednotil Čínu pod dynastií Čchin?',
      options: [
        'Konfucius',
        'Čchin Š\'-chuang-ti',
        'Wu-ti',
        'Kao-cu'
      ],
      correctAnswer: 1,
      explanation: 'První císař Čchin Š\'-chuang-ti sjednotil Čínu a založil první centralizovanou čínskou říši.'
    },
    {
      question: 'Co začalo být stavěno za dynastie Čchin?',
      options: [
        'Velká čínská zeď',
        'Velký kanál',
        'Terakotová armáda',
        'Zakázané město'
      ],
      correctAnswer: 0,
      explanation: 'Za dynastie Čchin začala stavba Velké čínské zdi.'
    }
  ],

  // Založení Římského císařství
  13: [
    {
      question: 'Kdo se stal prvním římským císařem?',
      options: [
        'Julius Caesar',
        'Augustus (Octavianus)',
        'Nero',
        'Traianus'
      ],
      correctAnswer: 1,
      explanation: 'Octavianus přijal titul Augustus a stal se prvním římským císařem.'
    },
    {
      question: 'Jaké období zavedl Augustus?',
      options: [
        'Pax Romana',
        'Pax Augusta',
        'Pax Imperium',
        'Pax Mundi'
      ],
      correctAnswer: 0,
      explanation: 'Augustus zavedl Pax Romana, období míru a stability, které trvalo více než 200 let.'
    }
  ],

  // Edikt milánský
  14: [
    {
      question: 'Kdo vydal Edikt milánský?',
      options: [
        'Konstantin I.',
        'Dioklecián',
        'Theodosius',
        'Justinián'
      ],
      correctAnswer: 0,
      explanation: 'Císař Konstantin I. legalizoval křesťanství v Římské říši ediktem milánským.'
    },
    {
      question: 'Co umožnil Edikt milánský?',
      options: [
        'Svobodu náboženského vyznání',
        'Zrušení otroctví',
        'Založení nového města',
        'Konec války'
      ],
      correctAnswer: 0,
      explanation: 'Edikt milánský ukončil pronásledování křesťanů a umožnil svobodu náboženského vyznání.'
    }
  ],

  // Hidžra
  15: [
    {
      question: 'Co znamená Hidžra?',
      options: [
        'Válka',
        'Uprchnutí Proroka Mohameda z Mekky do Medíny',
        'Modlitba',
        'Pouť'
      ],
      correctAnswer: 1,
      explanation: 'Hidžra označuje uprchnutí Proroka Mohameda z Mekky do Medíny, což je začátek islámské éry.'
    },
    {
      question: 'Kdy začal islámský kalendář?',
      options: [
        '622 n. l.',
        '630 n. l.',
        '632 n. l.',
        '600 n. l.'
      ],
      correctAnswer: 0,
      explanation: 'Islámský kalendář začíná rokem 622 n. l., kdy proběhla Hidžra.'
    }
  ],

  // Korunovace Karla Velikého
  16: [
    {
      question: 'Kdo korunoval Karla Velikého císařem?',
      options: [
        'Papež Lev III.',
        'Papež Řehoř I.',
        'Papež Inocenc III.',
        'Papež Urban II.'
      ],
      correctAnswer: 0,
      explanation: 'Karel Veliký byl korunován císařem Svaté říše římské papežem Lvem III.'
    },
    {
      question: 'Co obnovila korunovace Karla Velikého?',
      options: [
        'Římskou republiku',
        'Ideu římského císařství na Západě',
        'Byzantskou říši',
        'Řeckou demokracii'
      ],
      correctAnswer: 1,
      explanation: 'Korunovace Karla Velikého obnovila ideu římského císařství na Západě.'
    }
  ],

  // První křížová výprava (id 17)
  17: [
    {
      question: 'Kdo vyzval k první křížové výpravě?',
      options: [
        'Papež Řehoř VII.',
        'Papež Urban II.',
        'Papež Inocenc III.',
        'Papež Lev III.'
      ],
      correctAnswer: 1,
      explanation: 'Papež Urban II. vyzval k první křížové výpravě k osvobození Svaté země.'
    },
    {
      question: 'Jaký byl hlavní cíl první křížové výpravy?',
      options: [
        'Dobytí Konstantinopole',
        'Osvobození Jeruzaléma',
        'Dobytí Bagdádu',
        'Osvobození Říma'
      ],
      correctAnswer: 1,
      explanation: 'Hlavním cílem první křížové výpravy bylo osvobození Jeruzaléma z rukou muslimů.'
    }
  ],

  // Magna Charta (id 18)
  18: [
    {
      question: 'Kdo podepsal Magnu Chartu?',
      options: [
        'Richard Lví srdce',
        'Jan Bezzemek',
        'Jindřich II.',
        'Vilém Dobyvatel'
      ],
      correctAnswer: 1,
      explanation: 'Anglický král Jan Bezzemek podepsal Magnu Chartu v roce 1215.'
    },
    {
      question: 'Co omezila Magna Charta?',
      options: [
        'Moc šlechty',
        'Moc krále',
        'Moc církve',
        'Moc parlamentu'
      ],
      correctAnswer: 1,
      explanation: 'Magna Charta omezila moc anglického krále a zavedla principy právního státu.'
    }
  ],

  // Černá smrt
  19: [
    {
      question: 'Kdy dorazila černá smrt do Evropy?',
      options: [
        '1346',
        '1347',
        '1348',
        '1349'
      ],
      correctAnswer: 1,
      explanation: 'Morová epidemie dorazila do Evropy v roce 1347 a způsobila smrt třetiny až poloviny populace.'
    },
    {
      question: 'Kolik lidí zabila černá smrt?',
      options: [
        '10-50 milionů',
        '75-200 milionů',
        '200-300 milionů',
        '300-500 milionů'
      ],
      correctAnswer: 1,
      explanation: 'Černá smrt zabila odhadem 75-200 milionů lidí v Evropě a Asii.'
    }
  ],

  // Pád Konstantinopole
  20: [
    {
      question: 'Kdo dobyl Konstantinopol v roce 1453?',
      options: [
        'Byzantská říše',
        'Osmanská říše',
        'Benátská republika',
        'Svatá říše římská'
      ],
      correctAnswer: 1,
      explanation: 'Osmanská říše dobyla Konstantinopol v roce 1453, čímž skončila Byzantská říše.'
    },
    {
      question: 'Co znamenal pád Konstantinopole?',
      options: [
        'Konec středověku',
        'Začátek novověku',
        'Konec Byzantské říše',
        'Všechny výše uvedené'
      ],
      correctAnswer: 3,
      explanation: 'Pád Konstantinopole ukončil Byzantskou říši a je často považován za konec středověku a začátek novověku.'
    }
  ],

  // Gutenbergova tiskařská revoluce
  21: [
    {
      question: 'Kdo vynalezl knihtisk s pohyblivými literami?',
      options: [
        'Leonardo da Vinci',
        'Johannes Gutenberg',
        'Galileo Galilei',
        'Isaac Newton'
      ],
      correctAnswer: 1,
      explanation: 'Johannes Gutenberg vytiskl první knihu pomocí pohyblivých liter v Mohuči.'
    },
    {
      question: 'Jaký dopad měl knihtisk?',
      options: [
        'Revoluce v šíření informací',
        'Masová produkce knih',
        'Šíření vzdělání a vědy',
        'Všechny výše uvedené'
      ],
      correctAnswer: 3,
      explanation: 'Gutenbergův vynález knihtisku způsobil revoluci v šíření informací a umožnil masovou produkci knih.'
    }
  ],

  // Lutherovy 95 tezí
  22: [
    {
      question: 'Kdo zveřejnil 95 tezí?',
      options: [
        'Jan Kalvín',
        'Martin Luther',
        'Jan Hus',
        'Ulrich Zwingli'
      ],
      correctAnswer: 1,
      explanation: 'Martin Luther zveřejnil 95 tezí ve Wittenbergu, čímž zahájil protestantskou reformaci.'
    },
    {
      question: 'Co kritizovaly Lutherovy teze?',
      options: [
        'Praktiky katolické církve',
        'Papežství',
        'Prodej odpustků',
        'Všechny výše uvedené'
      ],
      correctAnswer: 3,
      explanation: 'Lutherovy teze kritizovaly praktiky katolické církve, včetně prodeje odpustků.'
    }
  ],

  // Třicetiletá válka
  23: [
    {
      question: 'Co zahájilo třicetiletou válku?',
      options: [
        'Pražská defenestrace',
        'Bitva u Bílé hory',
        'Vestfálský mír',
        'Korunovace Ferdinanda II.'
      ],
      correctAnswer: 0,
      explanation: 'Pražská defenestrace v roce 1618 zahájila třicetiletou válku.'
    },
    {
      question: 'Kdy skončila třicetiletá válka?',
      options: [
        '1645',
        '1648',
        '1650',
        '1652'
      ],
      correctAnswer: 1,
      explanation: 'Třicetiletá válka skončila Vestfálskou mírovou smlouvou v roce 1648.'
    }
  ],

  // Newtonovy Principia
  24: [
    {
      question: 'Kdo publikoval "Philosophiæ Naturalis Principia Mathematica"?',
      options: [
        'Galileo Galilei',
        'Isaac Newton',
        'René Descartes',
        'Johannes Kepler'
      ],
      correctAnswer: 1,
      explanation: 'Isaac Newton publikoval Principia v roce 1687, základní dílo moderní fyziky.'
    },
    {
      question: 'Co popisují Newtonovy Principia?',
      options: [
        'Zákony pohybu',
        'Zákon gravitace',
        'Základy moderní fyziky',
        'Všechny výše uvedené'
      ],
      correctAnswer: 3,
      explanation: 'Newtonovy Principia popisují zákony pohybu a gravitace a položily základy moderní fyziky.'
    }
  ],

  // Americká deklarace nezávislosti
  25: [
    {
      question: 'Kdy byla vyhlášena americká deklarace nezávislosti?',
      options: [
        '1775',
        '1776',
        '1777',
        '1778'
      ],
      correctAnswer: 1,
      explanation: 'Třináct amerických kolonií vyhlásilo nezávislost na Velké Británii v roce 1776.'
    },
    {
      question: 'Kde byla podepsána deklarace nezávislosti?',
      options: [
        'New York',
        'Filadelfie',
        'Boston',
        'Washington'
      ],
      correctAnswer: 1,
      explanation: 'Deklarace nezávislosti byla podepsána ve Filadelfii.'
    }
  ],

  // Napoleon se stává císařem
  26: [
    {
      question: 'Kdy se Napoleon stal císařem?',
      options: [
        '1802',
        '1804',
        '1806',
        '1808'
      ],
      correctAnswer: 1,
      explanation: 'Napoleon Bonaparte se korunoval císařem Francouzů v roce 1804.'
    },
    {
      question: 'Kde se Napoleon korunoval?',
      options: [
        'V Paříži',
        'V Lyonu',
        'V Marseille',
        'V Nice'
      ],
      correctAnswer: 0,
      explanation: 'Napoleon se korunoval císařem v Paříži.'
    }
  ],

  // Bitva u Waterloo
  27: [
    {
      question: 'Kdy proběhla bitva u Waterloo?',
      options: [
        '1813',
        '1814',
        '1815',
        '1816'
      ],
      correctAnswer: 2,
      explanation: 'Bitva u Waterloo proběhla v roce 1815 a ukončila napoleonské války.'
    },
    {
      question: 'Kdo vedl spojené armády proti Napoleonovi?',
      options: [
        'Vévoda z Wellingtonu',
        'Blücher',
        'Schwarzenberg',
        'Všechny výše uvedené'
      ],
      correctAnswer: 3,
      explanation: 'Napoleonova definitivní porážka byla způsobena spojenými armádami pod vedením vévody z Wellingtonu.'
    }
  ],

  // Konec americké občanské války
  28: [
    {
      question: 'Kdy skončila americká občanská válka?',
      options: [
        '1863',
        '1864',
        '1865',
        '1866'
      ],
      correctAnswer: 2,
      explanation: 'Generál Lee se vzdal generálu Grantovi v roce 1865, čímž skončila občanská válka.'
    },
    {
      question: 'Co vedlo konec občanské války?',
      options: [
        'Sjednocení Spojených států',
        'Zrušení otroctví',
        'Konec války',
        'Všechny výše uvedené'
      ],
      correctAnswer: 3,
      explanation: 'Konec občanské války sjednotil Spojené státy a vedl ke zrušení otroctví.'
    }
  ],

  // Začátek první světové války
  29: [
    {
      question: 'Kdy začala první světová válka?',
      options: [
        '1913',
        '1914',
        '1915',
        '1916'
      ],
      correctAnswer: 1,
      explanation: 'První světová válka začala v roce 1914 po atentátu na arcivévodu Františka Ferdinanda.'
    },
    {
      question: 'Kde byl zavražděn arcivévoda František Ferdinand?',
      options: [
        'V Praze',
        'V Sarajevu',
        'V Bělehradu',
        'V Záhřebu'
      ],
      correctAnswer: 1,
      explanation: 'Atentát na arcivévodu Františka Ferdinanda v Sarajevu spustil první světovou válku.'
    }
  ],

  // Založení Kartága
  58: [
    {
      question: 'Kdo založil Kartágo?',
      options: [
        'Římané',
        'Féničané',
        'Řekové',
        'Egypťané'
      ],
      correctAnswer: 1,
      explanation: 'Kartágo bylo založeno fénickými kolonisty z Tyru.'
    },
    {
      question: 'Kde se nacházelo Kartágo?',
      options: [
        'V Itálii',
        'V dnešním Tunisu',
        'V Španělsku',
        'V Řecku'
      ],
      correctAnswer: 1,
      explanation: 'Kartágo se nacházelo v dnešním Tunisu a stalo se jednou z nejmocnějších obchodních říší ve Středomoří.'
    }
  ],

  // Francouzská revoluce (id 7)
  7: [
    {
      question: 'Kdy začala Francouzská revoluce?',
      options: [
        '1788',
        '1789',
        '1790',
        '1791'
      ],
      correctAnswer: 1,
      explanation: 'Francouzská revoluce začala v roce 1789 a svrhla monarchii, čímž zavedla republiku.'
    },
    {
      question: 'Jaké byly hlavní myšlenky Francouzské revoluce?',
      options: [
        'Svoboda, rovnost, bratrství',
        'Mír, láska, harmonie',
        'Moc, sláva, bohatství',
        'Tradice, řád, hierarchie'
      ],
      correctAnswer: 0,
      explanation: 'Francouzská revoluce přinesla myšlenky svobody, rovnosti a bratrství, které ovlivnily celý svět.'
    }
  ],

  // První přistání na Měsíci (id 8)
  8: [
    {
      question: 'Kdy proběhlo první přistání na Měsíci?',
      options: [
        '1968',
        '1969',
        '1970',
        '1971'
      ],
      correctAnswer: 1,
      explanation: 'Apollo 11 úspěšně přistálo na Měsíci v roce 1969.'
    },
    {
      question: 'Kdo byl prvním člověkem, který vstoupil na Měsíc?',
      options: [
        'Buzz Aldrin',
        'Neil Armstrong',
        'Michael Collins',
        'John Glenn'
      ],
      correctAnswer: 1,
      explanation: 'Neil Armstrong se stal prvním člověkem, který vstoupil na měsíční povrch.'
    }
  ]
}


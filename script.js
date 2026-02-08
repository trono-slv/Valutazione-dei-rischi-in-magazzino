
/* ========================================
   DATABASE COMPLETO - 8 CATEGORIE, 43 RISCHI
   ======================================== */

const categorieRischi = [

    /* ============================
       CAT 1 - MECCANICI (7 rischi)
       ============================ */
    {
        id: "meccanici",
        icon: "⚙️",
        nome: "Rischi Meccanici",
        desc: "Rischi derivanti da movimentazione merci, uso di attrezzature e contatto con macchinari in magazzino",
        rischi: [
            {
                titolo: "1.1 Distorsioni e stiramenti articolari",
                cause: [
                    "Movimenti bruschi durante sollevamento o spostamento carichi",
                    "Pavimentazione irregolare, bagnata o con dislivelli",
                    "Calzature non idonee prive di supporto alla caviglia",
                    "Fretta operativa e mancato riscaldamento muscolare"
                ],
                danni: [
                    "Distorsioni a caviglia, ginocchio e polso",
                    "Stiramenti muscolari a schiena e arti superiori",
                    "Micro-lacerazioni dei legamenti con gonfiore e dolore",
                    "Assenze lavorative ricorrenti per recidive"
                ],
                prevenzioni: [
                    "Scarpe antinfortunistiche con supporto caviglia e suola antiscivolo",
                    "Mantenere pavimentazione pulita, asciutta e senza ostacoli",
                    "Formazione sulle tecniche corrette di movimentazione",
                    "Riscaldamento muscolare a inizio turno (stretching 5 minuti)"
                ]
            },
            {
                titolo: "1.2 Schiacciamento arti da caduta merci",
                cause: [
                    "Stoccaggio instabile su scaffalature senza reggiatura",
                    "Sovraccarico delle scaffalature oltre il limite indicato",
                    "Urti accidentali con carrello elevatore contro le scaffalature",
                    "Mancanza di ferma-pallet e reti anti-caduta"
                ],
                danni: [
                    "Fratture a piedi, mani e arti superiori",
                    "Contusioni gravi e ematomi profondi",
                    "Amputazioni parziali delle dita nei casi gravi",
                    "Trauma cranico se colpiti alla testa"
                ],
                prevenzioni: [
                    "Reti anti-caduta e ferma-pallet su tutti i livelli di scaffalatura",
                    "Rispetto rigoroso dei limiti di carico indicati su ogni campata",
                    "Scarpe antinfortunistiche con puntale in acciaio obbligatorie",
                    "Ispezione mensile scaffalature con check-list documentata"
                ]
            },
            {
                titolo: "1.3 Sindrome del tunnel carpale",
                cause: [
                    "Movimenti ripetitivi del polso: scansione barcode, confezionamento",
                    "Uso continuativo di taglierini, cutter e nastratrice manuale",
                    "Presa di forza prolungata su oggetti di piccole dimensioni",
                    "Assenza di pause durante attività ripetitive"
                ],
                danni: [
                    "Formicolio e intorpidimento a pollice, indice e medio",
                    "Dolore notturno al polso con risvegli frequenti",
                    "Perdita progressiva di forza nella presa",
                    "Necessità di intervento chirurgico nei casi avanzati"
                ],
                prevenzioni: [
                    "Rotazione delle mansioni ogni 2 ore tra attività diverse",
                    "Pause attive di 10 minuti ogni ora per esercizi al polso",
                    "Strumenti ergonomici: scanner ad anello, nastratrice automatica",
                    "Polsiera ergonomica durante le attività ripetitive"
                ]
            },
            {
                titolo: "1.4 Tagli e ferite da imballaggio",
                cause: [
                    "Uso improprio di cutter e taglierini senza lama retrattile",
                    "Apertura colli con le mani o con oggetti improvvisati",
                    "Reggette metalliche sotto tensione che si spezzano",
                    "Frammenti di legno scheggiato dai pallet rotti"
                ],
                danni: [
                    "Tagli superficiali e profondi a mani e avambracci",
                    "Ferite da punta con rischio di infezione",
                    "Lesioni oculari da schegge di reggetta metallica",
                    "Ferite da schegge di legno con rischio tetano"
                ],
                prevenzioni: [
                    "Cutter di sicurezza con lama auto-retrattile obbligatorio",
                    "Guanti antitaglio certificati EN 388 livello minimo 3",
                    "Occhiali protettivi durante il taglio di reggette metalliche",
                    "Formazione specifica sull'uso corretto degli utensili da taglio"
                ]
            },
            {
                titolo: "1.5 Cesoiamento da macchinari",
                cause: [
                    "Parti mobili non protette su nastri trasportatori e rulliere",
                    "Manutenzione effettuata senza blocco macchina (lockout-tagout)",
                    "Indumenti larghi, capelli sciolti o gioielli impigliati",
                    "Rimozione delle protezioni di sicurezza per velocizzare il lavoro"
                ],
                danni: [
                    "Amputazione parziale o totale di dita e mani",
                    "Schiacciamento degli arti tra organi in movimento",
                    "Fratture esposte con lesioni vascolari gravi",
                    "Ustioni da attrito su nastri trasportatori in movimento"
                ],
                prevenzioni: [
                    "Carter e protezioni fisse su tutti gli organi in movimento",
                    "Procedura lockout-tagout obbligatoria prima di ogni manutenzione",
                    "Divieto assoluto di indossare anelli, bracciali e indumenti larghi",
                    "Pulsante di arresto di emergenza accessibile entro 2 metri"
                ]
            },
            {
                titolo: "1.6 Proiezione di oggetti e materiali",
                cause: [
                    "Scoppio di reggette sotto tensione durante il taglio",
                    "Film estensibile che si strappa rilasciando energia elastica",
                    "Caduta di oggetti da scaffalature alte durante il prelievo",
                    "Uso improprio di utensili pneumatici e sparachiodi"
                ],
                danni: [
                    "Lesioni oculari da corpo estraneo anche gravi",
                    "Ferite al viso e alle mani da frammenti proiettati",
                    "Contusioni da oggetti caduti dall'alto",
                    "Perforazione cutanea da chiodi o punti metallici"
                ],
                prevenzioni: [
                    "Occhiali di protezione obbligatori nelle aree a rischio proiezione",
                    "Taglio reggette con tronchesina e protezione del punto di taglio",
                    "Elmetto obbligatorio nelle zone di carico/scarico e sotto scaffali alti",
                    "Formazione sull'uso corretto di utensili pneumatici"
                ]
            },
            {
                titolo: "1.7 Scivolamento e caduta in piano",
                cause: [
                    "Pavimento bagnato da pioggia trascinata, condensa o perdite",
                    "Residui di film estensibile, reggette o materiale a terra",
                    "Illuminazione insufficiente nelle aree di transito",
                    "Calzature con suola liscia consumata"
                ],
                danni: [
                    "Fratture del polso e del femore per caduta",
                    "Trauma cranico per impatto al suolo",
                    "Contusioni e abrasioni multiple",
                    "Lesioni alla colonna vertebrale da caduta all'indietro"
                ],
                prevenzioni: [
                    "Pulizia immediata di qualsiasi liquido o residuo a terra",
                    "Scarpe antinfortunistiche con suola antiscivolo certificata SRC",
                    "Illuminazione minima 150 lux in tutte le aree di transito",
                    "Segnaletica a terra per zone scivolose e percorsi pedonali"
                ]
            }
        ]
    },

    /* ============================
       CAT 2 - TRAUMATICI (6 rischi)
       ============================ */
    {
        id: "traumatici",
        icon: "🩹",
        nome: "Rischi Traumatici",
        desc: "Rischi di infortuni traumatici da cadute dall'alto, collisioni e incidenti con mezzi in movimento",
        rischi: [
            {
                titolo: "2.1 Caduta dall'alto da scala o soppalco",
                cause: [
                    "Uso di scale non conformi, danneggiate o posizionate male",
                    "Assenza di parapetti su soppalchi e zone sopraelevate",
                    "Sporgersi oltre il baricentro dalla scala per raggiungere oggetti",
                    "Salire sulle scaffalature invece di usare mezzi adeguati"
                ],
                danni: [
                    "Fratture vertebrali e lesioni al midollo spinale",
                    "Fratture multiple di arti inferiori e bacino",
                    "Trauma cranico grave anche con esiti fatali",
                    "Lesioni interne da impatto addominale"
                ],
                prevenzioni: [
                    "Scale conformi EN 131 con piedini antiscivolo e trattenuta",
                    "Parapetti alti almeno 100 cm con corrente intermedio e fermapiede",
                    "Divieto assoluto di arrampicarsi su scaffalature",
                    "Per altezze superiori a 2 metri: imbracatura anticaduta obbligatoria"
                ]
            },
            {
                titolo: "2.2 Investimento da carrello elevatore",
                cause: [
                    "Mancanza di percorsi separati per pedoni e mezzi",
                    "Visibilità ridotta con carico voluminoso sulle forche",
                    "Velocità eccessiva nei corridoi e agli incroci",
                    "Uso di smartphone o cuffie da parte dei pedoni"
                ],
                danni: [
                    "Schiacciamento degli arti inferiori sotto le ruote",
                    "Fratture costali e lesioni toraciche da urto",
                    "Lesioni craniche e politrauma da impatto frontale",
                    "Decesso nei casi di schiacciamento completo"
                ],
                prevenzioni: [
                    "Percorsi pedonali separati e delimitati con strisce gialle",
                    "Specchi convessi e semafori a tutti gli incroci ciechi",
                    "Lampeggiante e cicalino di retromarcia obbligatori sul carrello",
                    "Limite velocità 5 km/h nei corridoi con segnaletica visibile"
                ]
            },
            {
                titolo: "2.3 Collisione tra mezzi in movimento",
                cause: [
                    "Corridoi troppo stretti per incrocio di due carrelli",
                    "Mancanza di specchi e segnaletica agli incroci",
                    "Operatori non formati alla guida in spazi ristretti",
                    "Fretta operativa durante picchi di lavoro"
                ],
                danni: [
                    "Ribaltamento del carrello con schiacciamento operatore",
                    "Danni strutturali a scaffalature con rischio crollo a catena",
                    "Contusioni e fratture da impatto per entrambi gli operatori",
                    "Danni ingenti alla merce con perdite economiche"
                ],
                prevenzioni: [
                    "Corridoi larghi almeno 3,5 metri per transito bidirezionale",
                    "Sensi unici con segnaletica orizzontale e verticale",
                    "Precedenza codificata: chi ha carico ha la precedenza",
                    "Clacson obbligatorio prima di ogni incrocio cieco"
                ]
            },
            {
                titolo: "2.4 Caduta nel vuoto da banchina di carico",
                cause: [
                    "Banchine di carico senza barriere laterali di protezione",
                    "Mezzo che si sposta durante le operazioni di carico/scarico",
                    "Illuminazione insufficiente nella zona della banchina",
                    "Distrazione dell'operatore durante la movimentazione"
                ],
                danni: [
                    "Caduta da altezza di 1-1,5 metri con fratture arti inferiori",
                    "Trauma cranico per caduta all'indietro dal bordo",
                    "Schiacciamento tra mezzo e banchina durante l'avvicinamento",
                    "Lesioni alla schiena per caduta su superficie dura"
                ],
                prevenzioni: [
                    "Barriere mobili e catene di sicurezza sui bordi della banchina",
                    "Cunei bloccaruote obbligatori prima di ogni operazione",
                    "Illuminazione minima 200 lux nella zona banchina",
                    "Segnaletica a terra con fascia giallo-nera sul bordo"
                ]
            },
            {
                titolo: "2.5 Urto contro ostacoli fissi",
                cause: [
                    "Corridoi ingombri da pallet, merci o attrezzature abbandonate",
                    "Sporgenze non segnalate di scaffalature o strutture",
                    "Illuminazione scarsa nelle aree di transito laterali",
                    "Fretta durante la preparazione ordini con percorsi non lineari"
                ],
                danni: [
                    "Contusioni e lividi a ginocchia, anche e spalle",
                    "Trauma cranico da urto contro traversi di scaffalature",
                    "Ferite da sporgenze metalliche non protette",
                    "Lesioni oculari da oggetti sporgenti all'altezza del viso"
                ],
                prevenzioni: [
                    "Corridoi sempre liberi da ostacoli (regola del 5S)",
                    "Protezioni in gomma su tutte le sporgenze ad altezza persona",
                    "Illuminazione uniforme minima 150 lux in tutte le aree",
                    "Segnaletica fosforescente sugli ostacoli fissi a bassa altezza"
                ]
            },
            {
                titolo: "2.6 Crollo scaffalature",
                cause: [
                    "Sovraccarico delle scaffalature oltre il limite strutturale",
                    "Urti ripetuti del carrello contro i montanti non protetti",
                    "Mancata manutenzione e ispezione periodica delle strutture",
                    "Ancoraggio insufficiente delle scaffalature al pavimento"
                ],
                danni: [
                    "Seppellimento sotto tonnellate di merce con esito fatale",
                    "Crollo a catena di file di scaffalature adiacenti (effetto domino)",
                    "Fratture multiple e lesioni da schiacciamento",
                    "Blocco completo dell'attività con danni economici enormi"
                ],
                prevenzioni: [
                    "Ispezione trimestrale con check-list UNI EN 15635",
                    "Protezioni para-colpi alla base di ogni montante",
                    "Cartelli con portata massima visibili su ogni campata",
                    "Ancoraggio a pavimento con tasselli chimici certificati"
                ]
            }
        ]
    },

    /* ============================
       CAT 3 - POSTURALI (3 rischi)
       ============================ */
    {
        id: "posturali",
        icon: "🦴",
        nome: "Rischi Posturali ed Ergonomici",
        desc: "Rischi legati a posture scorrette, movimenti ripetitivi e postazioni di lavoro non ergonomiche",
        rischi: [
            {
                titolo: "3.1 Lombalgia da movimentazione manuale carichi",
                cause: [
                    "Sollevamento di carichi con schiena curva invece che con le gambe",
                    "Pesi superiori a 25 kg sollevati senza ausili meccanici",
                    "Torsione del busto durante il sollevamento del carico",
                    "Frequenza elevata di sollevamenti durante il turno"
                ],
                danni: [
                    "Lombalgia acuta con blocco funzionale della schiena",
                    "Ernia del disco lombare con compressione nervosa",
                    "Sciatalgia cronica con dolore irradiato all'arto inferiore",
                    "Patologia cronica con invalidità permanente"
                ],
                prevenzioni: [
                    "Tecnica corretta: piegare le ginocchia, schiena dritta, carico vicino al corpo",
                    "Ausili meccanici obbligatori per pesi superiori a 25 kg",
                    "Valutazione del rischio con metodo NIOSH per ogni mansione",
                    "Sorveglianza sanitaria con visita ortopedica annuale"
                ]
            },
            {
                titolo: "3.2 Disturbi muscoloscheletrici da postura statica",
                cause: [
                    "Stazione eretta prolungata su superficie dura senza tappetino",
                    "Postazioni di confezionamento ad altezza non regolabile",
                    "Assenza di sedute per pause durante il turno",
                    "Postura forzata in flessione per picking a livello basso"
                ],
                danni: [
                    "Dolore cervicale cronico e cefalea tensiva",
                    "Gonfiore e dolore agli arti inferiori e piedi",
                    "Insufficienza venosa e comparsa di varici",
                    "Tendiniti e borsiti alle spalle e ai gomiti"
                ],
                prevenzioni: [
                    "Tappetini anti-fatica nelle postazioni di lavoro stazionario",
                    "Postazioni regolabili in altezza per adattarsi all'operatore",
                    "Pause posturali di 10 minuti ogni 2 ore con cambio posizione",
                    "Formazione su posture corrette e auto-valutazione del dolore"
                ]
            },
            {
                titolo: "3.3 Disturbi arti superiori da picking ripetitivo",
                cause: [
                    "Prelievo ad alta frequenza con movimenti ripetitivi del braccio",
                    "Reaching continuo verso scaffali alti o profondi",
                    "Presa di precisione ripetuta su piccoli oggetti",
                    "Assenza di rotazione mansioni durante il turno"
                ],
                danni: [
                    "Epicondilite (gomito del tennista) con dolore al gomito",
                    "Tendinite alla cuffia dei rotatori della spalla",
                    "Sindrome da conflitto sub-acromiale alla spalla",
                    "Riduzione della capacità lavorativa e assenze prolungate"
                ],
                prevenzioni: [
                    "Organizzazione dei prodotti ad alta rotazione tra 70 e 150 cm di altezza",
                    "Rotazione mansioni ogni 2 ore tra picking, packing e altre attività",
                    "Ausili meccanici per prelievi da livelli alti (scalette, pick-to-light)",
                    "Esercizi di stretching specifici per spalle e braccia a inizio turno"
                ]
            }
        ]
    },

    /* ============================
       CAT 4 - CHIMICI (6 rischi)
       ============================ */
    {
        id: "chimici",
        icon: "☣️",
        nome: "Rischi Chimici e Biologici",
        desc: "Rischi da esposizione a sostanze chimiche pericolose, polveri, agenti biologici presenti in magazzino",
        rischi: [
            {
                titolo: "4.1 Inalazione polveri da cartone e imballaggio",
                cause: [
                    "Apertura massiva di colli in cartone in ambienti poco ventilati",
                    "Accumulo di polvere di cartone su scaffalature e pavimenti",
                    "Assenza di aspirazione localizzata nelle zone di confezionamento",
                    "Pulizia a secco con scopa che solleva particolato"
                ],
                danni: [
                    "Irritazione cronica delle vie respiratorie superiori",
                    "Rinite allergica professionale e sinusite",
                    "Asma bronchiale allergica da polvere organica",
                    "Bronchite cronica nei lavoratori esposti a lungo termine"
                ],
                prevenzioni: [
                    "Aspirazione localizzata nelle postazioni di apertura colli",
                    "Pulizia con aspirapolvere industriale (mai scopa a secco)",
                    "Mascherina FFP2 obbligatoria durante apertura massiva colli",
                    "Ventilazione meccanica con ricambio aria minimo 4 volumi/ora"
                ]
            },
            {
                titolo: "4.2 Contatto con sostanze chimiche pericolose",
                cause: [
                    "Rottura o perdita di contenitori con prodotti chimici stoccati",
                    "Assenza di bacini di contenimento per liquidi pericolosi",
                    "Mancata lettura delle schede di sicurezza (SDS) dei prodotti",
                    "Miscelazione accidentale di prodotti chimici incompatibili"
                ],
                danni: [
                    "Ustioni chimiche alla pelle e alle mucose",
                    "Intossicazione acuta per inalazione di vapori tossici",
                    "Dermatite da contatto irritativa o allergica",
                    "Danni oculari gravi da schizzi di sostanze corrosive"
                ],
                prevenzioni: [
                    "Bacini di contenimento per tutti i liquidi pericolosi stoccati",
                    "Schede di sicurezza SDS disponibili e aggiornate per ogni prodotto",
                    "Kit anti-sversamento completo disponibile in ogni area di stoccaggio",
                    "DPI specifici: guanti chimici, occhiali, grembiule in area chimica"
                ]
            },
            {
                titolo: "4.3 Esposizione a gas di scarico dei mezzi",
                cause: [
                    "Carrelli a motore endotermico (diesel/GPL) usati in spazi chiusi",
                    "Ventilazione insufficiente nelle aree di carico/scarico",
                    "Riscaldamento del motore in ambienti chiusi",
                    "Accumulo di monossido di carbonio in zone basse del magazzino"
                ],
                danni: [
                    "Cefalea, nausea e vertigini da inalazione di CO",
                    "Intossicazione acuta da monossido di carbonio potenzialmente fatale",
                    "Irritazione cronica delle vie respiratorie da particolato diesel",
                    "Aumento del rischio oncologico per esposizione cronica ai gas diesel"
                ],
                prevenzioni: [
                    "Carrelli elettrici obbligatori per uso interno al magazzino",
                    "Se motore termico necessario: ventilazione forzata continua",
                    "Rilevatori di CO con allarme sonoro nelle aree a rischio",
                    "Monitoraggio periodico della qualità dell'aria con misurazioni"
                ]
            },
            {
                titolo: "4.4 Rischio biologico da merci contaminate",
                cause: [
                    "Merci provenienti da aree con infestazioni di roditori o insetti",
                    "Condensa e umidità su pallet con formazione di muffe",
                    "Contatto con liquidi biologici da rottura di prodotti alimentari",
                    "Punture di insetti presenti nei container dall'estero"
                ],
                danni: [
                    "Reazioni allergiche a muffe, acari e insetti",
                    "Infezioni cutanee da contatto con materiale contaminato",
                    "Leptospirosi da contatto con urina di topi su superfici",
                    "Reazioni anafilattiche da punture di insetti esotici"
                ],
                prevenzioni: [
                    "Ispezione visiva delle merci in ingresso prima dello stoccaggio",
                    "Derattizzazione e disinfestazione periodica del magazzino",
                    "Guanti obbligatori durante la manipolazione di merci sospette",
                    "Protocollo di segnalazione e quarantena per merci contaminate"
                ]
            },
            {
                titolo: "4.5 Esposizione a batterie al piombo dei carrelli",
                cause: [
                    "Ricarica batterie al piombo in locale non ventilato",
                    "Manipolazione dell'elettrolita acido senza DPI adeguati",
                    "Sostituzione batterie senza formazione specifica",
                    "Sviluppo di idrogeno durante la carica con rischio esplosione"
                ],
                danni: [
                    "Ustioni chimiche da acido solforico sulla pelle e negli occhi",
                    "Inalazione di vapori acidi con irritazione delle vie respiratorie",
                    "Esplosione della batteria con proiezione di acido e frammenti",
                    "Intossicazione cronica da piombo (saturnismo) per esposizioni ripetute"
                ],
                prevenzioni: [
                    "Locale ricarica batterie con ventilazione antideflagrante dedicata",
                    "DPI obbligatori in area ricarica: guanti acido, occhiali, grembiule",
                    "Lavaocchi di emergenza a meno di 10 secondi di cammino",
                    "Formazione specifica per tutti gli operatori addetti alla ricarica"
                ]
            },
            {
                titolo: "4.6 Dermatite da contatto professionale",
                cause: [
                    "Contatto prolungato con cartone, adesivi e inchiostri di stampa",
                    "Uso di guanti in lattice con sviluppo di allergia",
                    "Esposizione a solventi e sgrassanti durante la pulizia",
                    "Mani bagnate frequentemente senza adeguata asciugatura"
                ],
                danni: [
                    "Dermatite irritativa con arrossamento, screpolatura e prurito",
                    "Dermatite allergica da contatto con sensibilizzazione permanente",
                    "Ragadi dolorose alle mani con rischio di infezione secondaria",
                    "Orticaria da contatto con possibile evoluzione sistemica"
                ],
                prevenzioni: [
                    "Guanti in nitrile al posto del lattice per prevenire allergie",
                    "Creme barriera protettive applicate prima del turno di lavoro",
                    "Rotazione dei materiali di contatto quando possibile",
                    "Sorveglianza dermatologica per operatori con sintomi ricorrenti"
                ]
            }
        ]
    },

    /* ============================
       CAT 5 - AMBIENTALI (6 rischi)
       ============================ */
    {
        id: "ambientali",
        icon: "🌡️",
        nome: "Rischi Ambientali e Microclimatici",
        desc: "Rischi legati a temperatura, rumore, illuminazione e condizioni ambientali del magazzino",
        rischi: [
            {
                titolo: "5.1 Esposizione a temperature estreme (caldo)",
                cause: [
                    "Magazzino con copertura in lamiera senza coibentazione",
                    "Lavoro fisico intenso in estate con temperature oltre 35°C",
                    "Assenza di ventilazione adeguata e ricircolo dell'aria",
                    "Idratazione insufficiente durante il turno di lavoro"
                ],
                danni: [
                    "Colpo di calore con ipertermia e possibile collasso",
                    "Sincope da calore con perdita di coscienza improvvisa",
                    "Crampi muscolari da perdita di sali minerali",
                    "Calo di concentrazione con aumento rischio di infortuni"
                ],
                prevenzioni: [
                    "Distribuzione gratuita di acqua fresca (almeno 1 litro/ora per operatore)",
                    "Ventilatori industriali e destratificatori in ogni area operativa",
                    "Pause climatiche obbligatorie di 15 minuti ogni 2 ore in area fresca",
                    "Monitoraggio temperatura e sospensione attività pesanti sopra 35°C percepiti"
                ]
            },
            {
                titolo: "5.2 Esposizione a temperature estreme (freddo)",
                cause: [
                    "Lavoro in celle frigorifere a temperature sotto 0°C",
                    "Banchine di carico aperte durante i mesi invernali",
                    "Correnti d'aria fredda da portoni aperti frequentemente",
                    "Abbigliamento termico inadeguato o usurato"
                ],
                danni: [
                    "Ipotermia con rallentamento delle funzioni vitali",
                    "Congelamento alle estremità: dita, orecchie, naso",
                    "Sindrome di Raynaud con pallore e dolore alle dita",
                    "Bronchite cronica e patologie respiratorie da freddo"
                ],
                prevenzioni: [
                    "Abbigliamento termico a strati fornito dall'azienda e certificato",
                    "Turni ridotti in cella frigorifera: massimo 60 minuti consecutivi",
                    "Zona di riscaldamento con bevande calde accessibile tra i turni",
                    "Portoni rapidi ad apertura/chiusura veloce per limitare correnti"
                ]
            },
            {
                titolo: "5.3 Esposizione al rumore",
                cause: [
                    "Funzionamento contemporaneo di più carrelli e macchinari",
                    "Nastri trasportatori e rulliere metalliche rumorose",
                    "Operazioni di carico/scarico con impatto di pallet e merci",
                    "Impianti di ventilazione e condizionamento obsoleti e rumorosi"
                ],
                danni: [
                    "Ipoacusia professionale progressiva irreversibile",
                    "Acufeni permanenti (fischi e ronzii nell'orecchio)",
                    "Difficoltà di comunicazione con aumento rischio infortuni",
                    "Stress cronico, disturbi del sonno e irritabilità"
                ],
                prevenzioni: [
                    "Valutazione fonometrica annuale di tutte le aree di lavoro",
                    "Otoprotettori obbligatori sopra 85 dB(A) e consigliati sopra 80",
                    "Manutenzione e lubrificazione regolare di macchinari e rulliere",
                    "Audiometria annuale per tutti i lavoratori esposti"
                ]
            },
            {
                titolo: "5.4 Illuminazione inadeguata",
                cause: [
                    "Lampade guaste non sostituite tempestivamente",
                    "Aree del magazzino con illuminazione naturale insufficiente",
                    "Abbagliamento da luce solare diretta attraverso lucernari",
                    "Contrasto eccessivo tra zone molto illuminate e zone buie"
                ],
                danni: [
                    "Affaticamento visivo con cefalea e bruciore oculare",
                    "Errori nella lettura codici a barre e documenti",
                    "Inciampi e urti contro ostacoli per scarsa visibilità",
                    "Aumento generale del rischio di infortuni in tutte le attività"
                ],
                prevenzioni: [
                    "Illuminamento minimo 150 lux nelle aree di transito, 300 lux per attività di precisione",
                    "Sostituzione immediata di lampade guaste (entro 24 ore)",
                    "LED con temperatura colore 4000-5000K per illuminazione uniforme",
                    "Schermatura lucernari e finestre per evitare abbagliamento"
                ]
            },
            {
                titolo: "5.5 Esposizione a vibrazioni (corpo intero)",
                cause: [
                    "Guida prolungata di carrello elevatore su pavimento sconnesso",
                    "Sedile del carrello senza ammortizzazione o regolazione",
                    "Pavimentazione con giunti, buche e rattoppi non livellati",
                    "Turni di guida superiori a 4 ore consecutive"
                ],
                danni: [
                    "Lombalgia cronica e patologia degenerativa della colonna",
                    "Ernia del disco accelerata dalle vibrazioni continue",
                    "Disturbi gastrointestinali da vibrazione trasmessa all'addome",
                    "Disturbi circolatori agli arti inferiori"
                ],
                prevenzioni: [
                    "Sedile ergonomico ammortizzato e regolabile su tutti i carrelli",
                    "Manutenzione pavimentazione per eliminare buche e dislivelli",
                    "Limite di 4 ore di guida al giorno con pause ogni 60 minuti",
                    "Monitoraggio vibrazioni con accelerometro secondo D.Lgs. 81/08"
                ]
            },
            {
                titolo: "5.6 Qualità dell'aria interna",
                cause: [
                    "Ricambio aria insufficiente nel magazzino chiuso",
                    "Accumulo di CO2 in ambienti affollati e con molti mezzi in funzione",
                    "Condensa e umidità elevata che favorisce muffe e batteri",
                    "Filtri dell'impianto di condizionamento non manutenuti"
                ],
                danni: [
                    "Sindrome dell'edificio malato: cefalea, stanchezza, irritazione mucose",
                    "Aumento delle infezioni respiratorie tra i lavoratori",
                    "Allergie respiratorie da muffe e batteri nell'impianto HVAC",
                    "Calo della produttività e aumento dell'assenteismo"
                ],
                prevenzioni: [
                    "Ricambio aria minimo 4 volumi/ora con impianto VMC",
                    "Manutenzione filtri HVAC ogni 3 mesi con registro documentato",
                    "Monitoraggio CO2 con sensori: allarme sopra 1000 ppm",
                    "Umidità relativa controllata tra 40% e 60% tutto l'anno"
                ]
            }
        ]
    },

    /* ============================
       CAT 6 - ELETTRICI E INCENDIO (5 rischi)
       ============================ */
    {
        id: "elettrici",
        icon: "⚡",
        nome: "Rischi Elettrici e Incendio",
        desc: "Rischi da impianti elettrici, apparecchiature sotto tensione, incendio ed esplosione in magazzino",
        rischi: [
            {
                titolo: "6.1 Elettrocuzione da impianti e attrezzature",
                cause: [
                    "Cavi elettrici danneggiati, scoperti o con isolamento deteriorato",
                    "Prese multiple sovraccariche e ciabatte non conformi",
                    "Contatto con parti sotto tensione durante operazioni improprie",
                    "Impianto elettrico non adeguato al carico effettivo del magazzino"
                ],
                danni: [
                    "Arresto cardiaco da fibrillazione ventricolare",
                    "Ustioni elettriche profonde nel punto di contatto e uscita",
                    "Tetania muscolare con impossibilità di staccarsi dalla fonte",
                    "Caduta secondaria per contrazione involontaria dei muscoli"
                ],
                prevenzioni: [
                    "Verifica biennale dell'impianto elettrico da tecnico abilitato",
                    "Interruttori differenziali (salvavita) da 30 mA su tutti i circuiti",
                    "Divieto assoluto di riparazioni elettriche fai-da-te",
                    "Segnalazione immediata di cavi danneggiati con messa fuori servizio"
                ]
            },
            {
                titolo: "6.2 Incendio da materiali combustibili",
                cause: [
                    "Accumulo di cartone, plastica, legno e film estensibile",
                    "Mancato rispetto del divieto di fumo nelle aree di stoccaggio",
                    "Cortocircuito in impianti elettrici obsoleti o sovraccaricati",
                    "Stoccaggio improprio di prodotti infiammabili vicino a fonti di calore"
                ],
                danni: [
                    "Ustioni di primo, secondo e terzo grado",
                    "Intossicazione da fumi con insufficienza respiratoria acuta",
                    "Decesso per asfissia o ustioni estese",
                    "Distruzione totale del magazzino e della merce stoccata"
                ],
                prevenzioni: [
                    "Estintori a polvere ABC ogni 200 mq con manutenzione semestrale",
                    "Impianto di rilevazione fumi con centralina e allarme sonoro",
                    "Divieto di fumo rigoroso con segnaletica e sanzioni",
                    "Piano di emergenza con prove di evacuazione semestrali"
                ]
            },
            {
                titolo: "6.3 Esplosione da accumulo di gas o polveri",
                cause: [
                    "Perdita di GPL da carrelli con impianto a gas non manutenuto",
                    "Accumulo di idrogeno nella sala ricarica batterie",
                    "Polveri combustibili in concentrazione esplosiva (polvere di cartone, farina)",
                    "Assenza di ventilazione in locali con potenziale accumulo di gas"
                ],
                danni: [
                    "Deflagrazione con onda d'urto e proiezione di frammenti",
                    "Ustioni estese su tutto il corpo",
                    "Crollo strutturale del magazzino per sovrapressione",
                    "Decesso multiplo in caso di esplosione confinata"
                ],
                prevenzioni: [
                    "Rilevatori di gas GPL e idrogeno con soglia di allarme al 20% del LEL",
                    "Ventilazione antideflagrante nella sala ricarica batterie",
                    "Classificazione ATEX delle aree a rischio e attrezzature conformi",
                    "Manutenzione semestrale degli impianti GPL dei carrelli"
                ]
            },
            {
                titolo: "6.4 Arco elettrico da quadri elettrici",
                cause: [
                    "Apertura di quadri elettrici sotto tensione da personale non qualificato",
                    "Cortocircuito interno per accumulo di polvere e umidità nei quadri",
                    "Mancata manutenzione dei contatti e dei dispositivi di protezione",
                    "Roditori che danneggiano i cavi all'interno dei quadri elettrici"
                ],
                danni: [
                    "Ustioni gravissime al viso e alle mani da temperatura dell'arco (fino a 19000°C)",
                    "Cecità temporanea o permanente per flash luminoso intenso",
                    "Onda di pressione con proiezione dell'operatore e trauma da impatto",
                    "Inalazione di gas tossici prodotti dalla vaporizzazione dei metalli"
                ],
                prevenzioni: [
                    "Quadri elettrici accessibili solo a personale PES/PAV certificato",
                    "Lucchetti e cartelli di blocco su tutti i quadri con procedura lockout",
                    "Pulizia e ispezione annuale interna dei quadri da elettricista abilitato",
                    "DPI specifici per rischio arco elettrico: visiera, guanti isolanti classe 00"
                ]
            },
            {
                titolo: "6.5 Scariche elettrostatiche",
                cause: [
                    "Movimentazione di film plastico, polistirolo e materiali sintetici",
                    "Umidità ambientale molto bassa (inferiore al 30%)",
                    "Pavimentazione non conduttiva che accumula cariche statiche",
                    "Abbigliamento sintetico degli operatori"
                ],
                danni: [
                    "Innesco di incendio o esplosione in presenza di vapori infiammabili",
                    "Scariche fastidiose e dolorose ripetute durante la manipolazione",
                    "Danneggiamento di componenti elettronici sensibili stoccati",
                    "Reazione di spavento con caduta o urto secondario"
                ],
                prevenzioni: [
                    "Pavimentazione antistatica o tappetini conduttivi nelle aree a rischio",
                    "Umidità relativa mantenuta sopra il 40% con umidificatori",
                    "Braccialetti e calzature antistatiche per operatori in aree ESD",
                    "Messa a terra di tutte le attrezzature metalliche e scaffalature"
                ]
            }
        ]
    },

    /* ============================
       CAT 7 - ORGANIZZATIVI (5 rischi)
       ============================ */
    {
        id: "organizzativi",
        icon: "📋",
        nome: "Rischi Organizzativi e Psicosociali",
        desc: "Rischi legati all'organizzazione del lavoro, turni, stress, comunicazione e fattori psicosociali",
        rischi: [
            {
                titolo: "7.1 Stress lavoro-correlato",
                cause: [
                    "Picchi di lavoro stagionali con carichi insostenibili",
                    "Obiettivi di produttività irrealistici con monitoraggio costante",
                    "Mancanza di autonomia decisionale sulle modalità di lavoro",
                    "Clima aziendale conflittuale con scarso supporto dei superiori"
                ],
                danni: [
                    "Disturbi d'ansia generalizzata e attacchi di panico",
                    "Sindrome da burnout con esaurimento emotivo e cinismo",
                    "Disturbi del sonno cronici con insonnia e risvegli notturni",
                    "Aumento del rischio cardiovascolare (ipertensione, infarto)"
                ],
                prevenzioni: [
                    "Valutazione stress lavoro-correlato obbligatoria (art. 28 D.Lgs. 81/08)",
                    "Distribuzione equa dei carichi con pianificazione realistica",
                    "Sportello di ascolto psicologico accessibile a tutti i lavoratori",
                    "Coinvolgimento dei lavoratori nelle decisioni organizzative"
                ]
            },
            {
                titolo: "7.2 Lavoro a turni e notturno",
                cause: [
                    "Turni notturni frequenti con rotazione irregolare",
                    "Orari di lavoro superiori a 8 ore giornaliere in periodi di picco",
                    "Mancanza di pause adeguate durante i turni prolungati",
                    "Difficoltà di conciliazione tra vita lavorativa e familiare"
                ],
                danni: [
                    "Alterazione del ritmo circadiano con disturbi del sonno cronici",
                    "Disturbi gastrointestinali: gastrite, reflusso, sindrome del colon irritabile",
                    "Aumento del rischio di infortuni per calo di attenzione nelle ore notturne",
                    "Isolamento sociale e deterioramento delle relazioni familiari"
                ],
                prevenzioni: [
                    "Rotazione dei turni in senso orario (mattina-pomeriggio-notte)",
                    "Pause obbligatorie di 30 minuti ogni 6 ore di lavoro continuativo",
                    "Sorveglianza sanitaria specifica per lavoratori notturni",
                    "Almeno 11 ore di riposo consecutivo tra un turno e l'altro"
                ]
            },
            {
                titolo: "7.3 Lavoro isolato",
                cause: [
                    "Operatore solo in aree remote del magazzino durante turni ridotti",
                    "Attività in celle frigorifere o soppalchi senza colleghi in prossimità",
                    "Turni notturni o festivi con organico minimo di una persona",
                    "Assenza di sistemi di comunicazione e allarme individuale"
                ],
                danni: [
                    "Impossibilità di ricevere soccorso rapido in caso di malore o infortunio",
                    "Aggravamento delle conseguenze di qualsiasi infortunio per ritardo nei soccorsi",
                    "Ansia e stress psicologico legato alla condizione di isolamento",
                    "Rischio di decesso per eventi cardiaci o incidenti senza testimoni"
                ],
                prevenzioni: [
                    "Dispositivo uomo-a-terra (man-down) con allarme automatico",
                    "Controllo periodico via radio o telefono ogni 30 minuti",
                    "Divieto di lavoro isolato in celle frigorifere e aree pericolose",
                    "Buddy system: sempre almeno due persone per turno"
                ]
            },
            {
                titolo: "7.4 Carenza di formazione e informazione",
                cause: [
                    "Neoassunti messi al lavoro senza formazione iniziale adeguata",
                    "Aggiornamento formativo non effettuato nei tempi previsti",
                    "Procedure operative non scritte o non aggiornate",
                    "Barriera linguistica con lavoratori stranieri non superata"
                ],
                danni: [
                    "Aumento esponenziale del rischio di infortuni per comportamenti scorretti",
                    "Uso improprio di attrezzature e macchinari con danni a sé e agli altri",
                    "Mancata risposta corretta alle emergenze (incendio, sversamento)",
                    "Violazioni normative con sanzioni penali per il datore di lavoro"
                ],
                prevenzioni: [
                    "Formazione obbligatoria prima dell'inizio dell'attività lavorativa",
                    "Aggiornamento quinquennale di 6 ore minimo per tutti i lavoratori",
                    "Procedure operative scritte, illustrate e tradotte nelle lingue necessarie",
                    "Affiancamento con tutor esperto per i primi 30 giorni dei neoassunti"
                ]
            },
            {
                titolo: "7.5 Interferenze tra imprese diverse",
                cause: [
                    "Più aziende operative nello stesso magazzino (es. corrieri, manutentori)",
                    "Mancanza di coordinamento tra i datori di lavoro presenti",
                    "DUVRI non redatto o non aggiornato con le attività reali",
                    "Lavoratori di aziende diverse non informati sui rischi reciproci"
                ],
                danni: [
                    "Investimento di lavoratori di azienda terza da carrelli del magazzino",
                    "Interferenza tra operazioni di manutenzione e attività ordinarie",
                    "Sversamento chimico durante operazioni di consegna merci pericolose",
                    "Responsabilità legali multiple e contenziosi tra le aziende"
                ],
                prevenzioni: [
                    "DUVRI aggiornato e firmato da tutti i datori di lavoro presenti",
                    "Riunione di coordinamento settimanale tra le aziende operanti",
                    "Badge identificativo con colore diverso per ogni azienda presente",
                    "Aree di lavoro delimitate e assegnate con segnaletica chiara"
                ]
            }
        ]
    },

    /* ============================
       CAT 8 - EMERGENZE (5 rischi)
       ============================ */
    {
        id: "emergenze",
        icon: "🚨",
        nome: "Rischi Emergenze e Primo Soccorso",
        desc: "Rischi legati alla gestione delle emergenze, evacuazione, primo soccorso e situazioni critiche",
        rischi: [
            {
                titolo: "8.1 Evacuazione in emergenza",
                cause: [
                    "Vie di fuga ostruite da merci, pallet o attrezzature",
                    "Uscite di emergenza chiuse a chiave o bloccate",
                    "Segnaletica di emergenza assente, danneggiata o non illuminata",
                    "Personale non formato sulle procedure di evacuazione"
                ],
                danni: [
                    "Impossibilità di evacuare in tempo con rischio di intrappolamento",
                    "Panico collettivo con calca, cadute e schiacciamento",
                    "Inalazione prolungata di fumi tossici per ritardo nell'evacuazione",
                    "Decesso per impossibilità di raggiungere l'uscita in tempo"
                ],
                prevenzioni: [
                    "Vie di fuga sempre libere con controllo giornaliero documentato",
                    "Uscite di emergenza con maniglione antipanico apribile senza chiave",
                    "Segnaletica fotoluminescente su tutte le vie di fuga e le uscite",
                    "Prove di evacuazione semestrali con registrazione dei tempi"
                ]
            },
            {
                titolo: "8.2 Gestione del primo soccorso",
                cause: [
                    "Cassetta di primo soccorso incompleta o con materiale scaduto",
                    "Addetti al primo soccorso non formati o non presenti nel turno",
                    "Tempi di arrivo del 118 lunghi per posizione remota del magazzino",
                    "Assenza di defibrillatore DAE in magazzini con molti lavoratori"
                ],
                danni: [
                    "Aggravamento delle lesioni per primo soccorso inadeguato o ritardato",
                    "Emorragie non controllate per mancanza di materiale adeguato",
                    "Decesso per arresto cardiaco senza defibrillazione tempestiva",
                    "Conseguenze legali per il datore di lavoro per carenze organizzative"
                ],
                prevenzioni: [
                    "Cassetta primo soccorso conforme DM 388/03 con verifica trimestrale",
                    "Almeno un addetto al primo soccorso formato presente per ogni turno",
                    "DAE (defibrillatore) in magazzini con più di 10 lavoratori",
                    "Numeri di emergenza esposti in modo visibile in tutte le aree"
                ]
            },
            {
                titolo: "8.3 Sversamento di sostanze pericolose",
                cause: [
                    "Rottura di contenitori durante la movimentazione con carrello",
                    "Ribaltamento di pallet con fusti o taniche di liquidi chimici",
                    "Stoccaggio improprio senza bacini di contenimento",
                    "Mancanza di kit anti-sversamento nelle aree di stoccaggio chimico"
                ],
                danni: [
                    "Contaminazione del pavimento con rischio scivolamento",
                    "Inalazione di vapori tossici da parte di tutti i presenti",
                    "Ustioni chimiche per contatto diretto con la sostanza sversata",
                    "Contaminazione ambientale con penetrazione in fognatura o terreno"
                ],
                prevenzioni: [
                    "Kit anti-sversamento con assorbenti, neutralizzanti e DPI in ogni area chimica",
                    "Bacini di contenimento con capacità pari al 110% del contenitore più grande",
                    "Procedura scritta di intervento per sversamento con ruoli assegnati",
                    "Formazione pratica annuale sulla gestione degli sversamenti"
                ]
            },
            {
                titolo: "8.4 Allagamento del magazzino",
                cause: [
                    "Forti piogge con sistema di drenaggio insufficiente o intasato",
                    "Rottura di tubazioni idriche o impianto sprinkler",
                    "Magazzino in zona a rischio alluvionale senza protezioni",
                    "Tombini e griglie di scolo ostruiti da detriti e imballaggi"
                ],
                danni: [
                    "Rischio elettrocuzione per acqua a contatto con impianti elettrici",
                    "Scivolamento e caduta su pavimento allagato",
                    "Danni ingenti alla merce stoccata a livello del suolo",
                    "Formazione di muffe e deterioramento strutturale nel tempo"
                ],
                prevenzioni: [
                    "Pulizia trimestrale di tombini, grondaie e sistemi di drenaggio",
                    "Stoccaggio merce sollevata da terra di almeno 15 cm (primo livello pallet)",
                    "Pompa di emergenza disponibile e testata periodicamente",
                    "Interruttore elettrico generale accessibile e chiaramente identificato"
                ]
            },
            {
                titolo: "8.5 Evento sismico",
                cause: [
                    "Magazzino situato in zona sismica classificata (zona 1, 2 o 3)",
                    "Scaffalature non ancorate al pavimento o alla struttura",
                    "Merce non assicurata sui livelli alti delle scaffalature",
                    "Assenza di piano di emergenza specifico per il rischio sismico"
                ],
                danni: [
                    "Crollo di scaffalature con seppellimento dei lavoratori",
                    "Caduta massiva di merce da tutti i livelli di stoccaggio",
                    "Crollo strutturale del magazzino se non adeguato sismicamente",
                    "Panico e feriti durante l'evacuazione disordinata"
                ],
                prevenzioni: [
                    "Scaffalature certificate per la zona sismica di installazione",
                    "Ancoraggio antisismico di tutte le scaffalature a pavimento e pareti",
                    "Reti e barre anti-caduta su tutti i livelli di stoccaggio",
                    "Piano di emergenza sismico con formazione specifica e prove annuali"
                ]
            }
        ]
    }

]; // === FINE ARRAY categorieRischi ===

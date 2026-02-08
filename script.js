/* ========================================
   DATI - CATEGORIE E RISCHI
   ======================================== */
const categorieRischi = [
    {
        id: "movimentazione",
        icon: "🏗️",
        nome: "Movimentazione Merci",
        desc: "Rischi legati a carrelli elevatori, transpallet e movimentazione carichi",
        rischi: [
            {
                titolo: "Investimento da carrello elevatore",
                cause: ["Velocità eccessiva nei corridoi", "Scarsa visibilità agli incroci", "Mancanza di segnaletica orizzontale", "Uso improprio del mezzo"],
                danni: ["Fratture e traumi gravi", "Schiacciamento arti inferiori", "Lesioni fatali"],
                prevenzioni: ["Limite di velocità 5 km/h nelle aree pedonali", "Specchi parabolici agli incroci", "Percorsi separati per pedoni e mezzi", "Formazione obbligatoria con patentino"]
            },
            {
                titolo: "Ribaltamento del carrello elevatore",
                cause: ["Carico eccessivo o mal distribuito", "Curve prese a velocità elevata", "Pavimentazione irregolare o bagnata", "Forche sollevate durante la marcia"],
                danni: ["Schiacciamento dell'operatore", "Trauma cranico", "Lesioni alla colonna vertebrale"],
                prevenzioni: ["Rispettare la portata massima indicata", "Ridurre la velocità in curva", "Manutenzione regolare del pavimento", "Marciare con forche abbassate a 15-20 cm"]
            },
            {
                titolo: "Caduta del carico dalle forche",
                cause: ["Carico non pallettizzato correttamente", "Manovra brusca durante il trasporto", "Forche inadeguate per il tipo di carico", "Imballaggio danneggiato"],
                danni: ["Contusioni e fratture", "Danni a merci circostanti", "Lesioni al personale nelle vicinanze"],
                prevenzioni: ["Verificare stabilità del carico prima del sollevamento", "Utilizzare reggette e film estensibile", "Movimentare con cautela senza strappi", "Vietare il transito sotto carichi sospesi"]
            },
            {
                titolo: "Collisione tra mezzi in movimento",
                cause: ["Corridoi troppo stretti per incrocio mezzi", "Assenza di specchi agli angoli ciechi", "Mancanza di segnalazione acustica", "Distrazione dell'operatore"],
                danni: ["Danni ai mezzi e alle scaffalature", "Trauma da impatto per gli operatori", "Caduta merci dalle scaffalature colpite"],
                prevenzioni: ["Definire sensi unici nei corridoi stretti", "Installare specchi convessi e segnaletica", "Obbligo di clacson agli incroci", "Divieto di uso del telefono durante la guida"]
            },
            {
                titolo: "Uso scorretto del transpallet manuale",
                cause: ["Carico eccessivo rispetto alla portata", "Traino invece di spinta", "Pavimento in pendenza senza freno", "Mancato uso delle scarpe antinfortunistiche"],
                danni: ["Schiacciamento dei piedi", "Lombalgia acuta", "Distorsioni a polsi e caviglie"],
                prevenzioni: ["Rispettare la portata massima del transpallet", "Spingere il carico, non tirarlo", "Non usare su rampe oltre il 5% di pendenza", "DPI obbligatori: scarpe con punta rinforzata"]
            }
        ]
    },
    {
        id: "scaffalature",
        icon: "📦",
        nome: "Scaffalature e Stoccaggio",
        desc: "Rischi legati a scaffalature, stoccaggio in altezza e organizzazione merci",
        rischi: [
            {
                titolo: "Crollo della scaffalatura",
                cause: ["Sovraccarico oltre la portata indicata", "Urto da carrello elevatore alla base", "Mancanza di fissaggio a parete o pavimento", "Corrosione o danneggiamento dei montanti"],
                danni: ["Seppellimento degli operatori", "Effetto domino su scaffalature adiacenti", "Danni gravissimi o morte"],
                prevenzioni: ["Tabelle di portata visibili su ogni scaffalatura", "Protezioni antiurto alla base dei montanti", "Ispezioni periodiche trimestrali certificate", "Fissaggio a pavimento con tasselli chimici"]
            },
            {
                titolo: "Caduta di materiale dall'alto",
                cause: ["Stoccaggio non corretto sui piani alti", "Assenza di fermi posteriori sulle scaffalature", "Vibrazioni da mezzi in transito", "Pallet rotti o instabili"],
                danni: ["Trauma cranico anche con casco", "Fratture da schiacciamento", "Contusioni gravi"],
                prevenzioni: ["Reti e pannelli posteriori di contenimento", "Stoccare i carichi più pesanti in basso", "Verificare integrità dei pallet prima dello stoccaggio", "Obbligo di elmetto nelle zone di carico/scarico"]
            },
            {
                titolo: "Errato stoccaggio dei materiali",
                cause: ["Mancanza di criteri organizzativi", "Materiali incompatibili stoccati vicini", "Assenza di etichettatura chiara", "Personale non formato"],
                danni: ["Reazioni chimiche pericolose", "Difficoltà nelle emergenze", "Deterioramento delle merci"],
                prevenzioni: ["Planimetria di stoccaggio con zone dedicate", "Separazione materiali per compatibilità", "Etichettatura conforme al GHS/CLP", "Formazione specifica per addetti"]
            },
            {
                titolo: "Caduta dell'operatore dalla scala",
                cause: ["Uso di scale non idonee", "Scala non stabilizzata", "Movimenti bruschi in altezza", "Calzature inadeguate"],
                danni: ["Fratture da caduta", "Trauma cranico", "Lesioni alla colonna vertebrale"],
                prevenzioni: ["Usare scale a norma UNI EN 131", "Regola dei 3 punti di contatto", "Piattaforme elevabili per lavori frequenti", "Scarpe antiscivolo obbligatorie"]
            },
            {
                titolo: "Ostruzione delle vie di fuga",
                cause: ["Merci depositate nei corridoi", "Pallet lasciati davanti alle uscite", "Mancanza di controllo quotidiano", "Spazi insufficienti per lo stoccaggio"],
                danni: ["Impossibilità di evacuazione rapida", "Panico e calca durante emergenze", "Violazione normativa con sanzioni"],
                prevenzioni: ["Segnaletica a pavimento per vie di fuga", "Controllo giornaliero dei percorsi", "Sanzioni interne per chi ostruisce i passaggi", "Piano di stoccaggio che rispetti le vie di esodo"]
            }
        ]
    },
    {
        id: "ergonomia",
        icon: "🦺",
        nome: "Ergonomia e MMC",
        desc: "Rischi da movimentazione manuale dei carichi e posture scorrette",
        rischi: [
            {
                titolo: "Lombalgia da movimentazione manuale",
                cause: ["Sollevamento di carichi oltre 25 kg", "Tecnica di sollevamento errata", "Frequenza elevata di sollevamenti", "Assenza di ausili meccanici"],
                danni: ["Ernia del disco lombare", "Lombalgia cronica", "Riduzione permanente capacità lavorativa"],
                prevenzioni: ["Limite 25 kg uomini / 20 kg donne (D.Lgs. 81/08)", "Formazione tecnica di sollevamento", "Rotazione delle mansioni ogni 2 ore", "Fornitura di ausili: transpallet, ventose, rulli"]
            },
            {
                titolo: "Disturbi muscoloscheletrici agli arti superiori",
                cause: ["Movimenti ripetitivi di confezionamento", "Postura forzata prolungata", "Uso di strumenti vibranti", "Mancanza di pause adeguate"],
                danni: ["Sindrome del tunnel carpale", "Tendinite cronica", "Epicondilite"],
                prevenzioni: ["Pausa di 15 minuti ogni 2 ore di lavoro ripetitivo", "Rotazione tra mansioni diverse", "Strumenti ergonomici antivibranti", "Sorveglianza sanitaria specifica"]
            },
            {
                titolo: "Postura scorretta prolungata",
                cause: ["Piani di lavoro ad altezza non regolabile", "Lavoro continuativo in piedi su superficie dura", "Flessioni e torsioni ripetute del busto", "Mancanza di formazione ergonomica"],
                danni: ["Cervicalgia cronica", "Problemi circolatori agli arti inferiori", "Affaticamento muscolare generalizzato"],
                prevenzioni: ["Piani di lavoro regolabili in altezza", "Tappetini antifatica nelle postazioni fisse", "Alternanza tra posizione eretta e seduta", "Esercizi di stretching durante le pause"]
            },
            {
                titolo: "Traino e spinta di carichi pesanti",
                cause: ["Forza richiesta eccessiva", "Ruote dei carrelli non manutenute", "Pavimentazione irregolare", "Mancanza di impugnature ergonomiche"],
                danni: ["Lesioni alla spalla e al rachide", "Strappi muscolari", "Affaticamento cardiovascolare"],
                prevenzioni: ["Limiti di forza: 25 kg spinta iniziale, 10 kg mantenimento", "Manutenzione regolare ruote e cuscinetti", "Pavimentazione liscia e senza dislivelli", "Carrelli con impugnature a doppia altezza"]
            }
        ]
    },
    {
        id: "ambiente",
        icon: "🌡️",
        nome: "Ambiente di Lavoro",
        desc: "Rischi legati a microclima, illuminazione, rumore e qualità dell'aria",
        rischi: [
            {
                titolo: "Esposizione a temperature estreme",
                cause: ["Celle frigorifere senza adeguata protezione", "Magazzini non climatizzati in estate", "Passaggi frequenti caldo-freddo", "Mancanza di DPI termici"],
                danni: ["Ipotermia o colpo di calore", "Geloni alle estremità", "Malattie da raffreddamento croniche"],
                prevenzioni: ["DPI termici per celle frigorifere (-18°C)", "Turni massimi di 30 minuti in cella", "Aree di acclimatamento tra zone", "Distributori di acqua e bevande calde"]
            },
            {
                titolo: "Illuminazione insufficiente",
                cause: ["Lampade non manutenute o fulminate", "Zone d'ombra tra le scaffalature", "Illuminazione di emergenza assente", "Mancanza di luce naturale"],
                danni: ["Inciampi e cadute", "Affaticamento visivo", "Errori nella lettura etichette"],
                prevenzioni: ["Minimo 150 lux nelle aree di stoccaggio", "300 lux nelle zone di lettura e picking", "Manutenzione programmata dell'illuminazione", "Illuminazione di emergenza conforme UNI EN 1838"]
            },
            {
                titolo: "Esposizione al rumore",
                cause: ["Carrelli elevatori a motore termico", "Nastri trasportatori e rulliere", "Operazioni di scarico con rumore impulsivo", "Mancanza di insonorizzazione"],
                danni: ["Ipoacusia professionale", "Acufeni permanenti", "Stress e difficoltà di concentrazione"],
                prevenzioni: ["Valutazione fonometrica annuale", "DPI uditivi sopra 80 dB(A)", "Preferire carrelli elettrici", "Manutenzione antivibrante dei macchinari"]
            },
            {
                titolo: "Polveri e scarsa qualità dell'aria",
                cause: ["Movimentazione di merci polverose", "Scarichi dei mezzi a motore termico", "Ventilazione insufficiente", "Accumulo di polvere sulle scaffalature"],
                danni: ["Irritazione vie respiratorie", "Allergie professionali", "Asma occupazionale"],
                prevenzioni: ["Impianto di aspirazione e ventilazione", "Mascherine FFP2 per operazioni polverose", "Pulizia periodica con aspiratori industriali", "Monitoraggio qualità dell'aria"]
            },
            {
                titolo: "Pavimentazione scivolosa o danneggiata",
                cause: ["Perdite di olio dai mezzi", "Acqua piovana dalle baie di carico", "Crepe e avvallamenti non riparati", "Assenza di trattamento antiscivolo"],
                danni: ["Cadute con fratture", "Distorsioni articolari", "Trauma cranico da caduta"],
                prevenzioni: ["Pulizia immediata di liquidi a terra", "Kit assorbenti in ogni area", "Trattamento antiscivolo della pavimentazione", "Scarpe antinfortunistiche con suola antiscivolo"]
            }
        ]
    },
    {
        id: "incendio",
        icon: "🔥",
        nome: "Incendio ed Emergenze",
        desc: "Rischi di incendio, esplosione e gestione delle emergenze",
        rischi: [
            {
                titolo: "Incendio da materiali stoccati",
                cause: ["Accumulo di materiali infiammabili", "Impianto elettrico sovraccarico", "Assenza di compartimentazione", "Mancanza di rilevatori di fumo"],
                danni: ["Ustioni gravi", "Intossicazione da fumi", "Danni strutturali e perdita totale merci"],
                prevenzioni: ["Classificazione aree secondo rischio incendio", "Estintori ogni 200 m² (tipo ABC)", "Impianto di rilevazione fumi automatico", "Compartimentazione REI 60/120"]
            },
            {
                titolo: "Esplosione da accumulo di gas",
                cause: ["Perdite da bombole GPL dei carrelli", "Mancanza di ventilazione nelle zone di ricarica", "Ricarica batterie in area non idonea", "Assenza di rilevatori di gas"],
                danni: ["Esplosione con onda d'urto", "Ustioni estese", "Crollo strutturale"],
                prevenzioni: ["Zona ricarica batterie ventilata e separata", "Rilevatori di gas metano/GPL", "Divieto di fiamme libere con segnaletica", "Impianto elettrico ATEX nelle zone a rischio"]
            },
            {
                titolo: "Mancanza di piano di emergenza",
                cause: ["Piano mai redatto o non aggiornato", "Personale non formato sulle procedure", "Prove di evacuazione mai effettuate", "Assenza di squadra di emergenza"],
                danni: ["Evacuazione caotica", "Vittime per ritardo nei soccorsi", "Sanzioni penali per il datore di lavoro"],
                prevenzioni: ["Piano di emergenza aggiornato annualmente", "Formazione addetti antincendio e primo soccorso", "Prove di evacuazione semestrali", "Planimetrie di emergenza in ogni area"]
            },
            {
                titolo: "Malfunzionamento impianti di sicurezza",
                cause: ["Mancata manutenzione estintori", "Idranti non verificati", "Uscite di emergenza bloccate", "Luci di emergenza scariche"],
                danni: ["Incapacità di spegnimento tempestivo", "Impossibilità di evacuazione", "Aggravamento delle conseguenze"],
                prevenzioni: ["Manutenzione estintori semestrale certificata", "Verifica idranti annuale", "Controllo mensile uscite di emergenza", "Test trimestrale illuminazione di emergenza"]
            }
        ]
    },
    {
        id: "organizzazione",
        icon: "📋",
        nome: "Organizzazione e Formazione",
        desc: "Rischi legati a gestione, formazione, stress lavoro-correlato e DPI",
        rischi: [
            {
                titolo: "Mancanza di formazione sulla sicurezza",
                cause: ["Lavoratori neoassunti non formati", "Aggiornamenti formativi scaduti", "Formazione solo teorica senza pratica", "Lingue diverse senza materiale tradotto"],
                danni: ["Comportamenti a rischio inconsapevoli", "Incidenti per ignoranza delle procedure", "Responsabilità penale del datore di lavoro"],
                prevenzioni: ["Formazione generale 4h + specifica 8h (rischio medio)", "Aggiornamento quinquennale di 6 ore", "Addestramento pratico su attrezzature", "Materiale multilingue per lavoratori stranieri"]
            },
            {
                titolo: "Stress lavoro-correlato",
                cause: ["Ritmi di lavoro eccessivi", "Turni irregolari e straordinari forzati", "Mancanza di autonomia decisionale", "Pressione per rispettare tempi di consegna"],
                danni: ["Burnout e esaurimento", "Errori da distrazione e stanchezza", "Disturbi del sonno e ansia"],
                prevenzioni: ["Valutazione stress secondo INAIL", "Turni regolari con pause garantite", "Coinvolgimento dei lavoratori nelle decisioni", "Sportello di ascolto psicologico"]
            },
            {
                titolo: "Uso scorretto o mancato uso dei DPI",
                cause: ["DPI scomodi o di taglia errata", "Mancata consegna formale con registro", "Scarsa cultura della sicurezza", "DPI non adeguati al rischio specifico"],
                danni: ["Lesioni prevenibili aggravate", "Malattie professionali evitabili", "Sanzioni per lavoratore e datore"],
                prevenzioni: ["Consegna DPI con verbale firmato", "Scelta DPI con coinvolgimento RLS", "Controllo quotidiano utilizzo DPI", "Sostituzione immediata DPI danneggiati"]
            },
            {
                titolo: "Assenza di procedure operative",
                cause: ["Mansioni svolte senza istruzioni scritte", "Procedure obsolete mai aggiornate", "Mancanza di supervisione", "Comunicazione inefficace tra reparti"],
                danni: ["Incidenti per improvvisazione", "Difformità nelle operazioni", "Impossibilità di individuare responsabilità"],
                prevenzioni: ["Procedure operative standard (SOP) per ogni mansione", "Revisione annuale delle procedure", "Supervisore di area con checklist", "Riunioni di sicurezza settimanali brevi (toolbox meeting)"]
            }
        ]
    }
];

/* ========================================
   DATI - DOMANDE TEST (43 domande)
   ======================================== */
const domande = [
    {
        domanda: "Qual è il limite di velocità consigliato per i carrelli elevatori nelle aree pedonali del magazzino?",
        opzioni: ["10 km/h", "5 km/h", "15 km/h", "Nessun limite se si usa il clacson"],
        corretta: 1,
        categoria: "movimentazione"
    },
    {
        domanda: "A che altezza devono essere mantenute le forche del carrello durante la marcia?",
        opzioni: ["A livello del suolo", "15-20 cm da terra", "50 cm da terra", "All'altezza del carico da depositare"],
        corretta: 1,
        categoria: "movimentazione"
    },
    {
        domanda: "Cosa si deve verificare prima di sollevare un carico con il carrello elevatore?",
        opzioni: ["Solo il peso del carico", "La stabilità del carico e l'integrità del pallet", "La marca del pallet", "Solo che le forche siano pulite"],
        corretta: 1,
        categoria: "movimentazione"
    },
    {
        domanda: "Qual è il modo corretto di utilizzare un transpallet manuale?",
        opzioni: ["Tirarlo verso di sé", "Spingerlo in avanti", "Trascinarlo lateralmente", "Indifferente, basta muoverlo"],
        corretta: 1,
        categoria: "movimentazione"
    },
    {
        domanda: "Quale dispositivo di sicurezza è essenziale agli incroci dei corridoi del magazzino?",
        opzioni: ["Telecamere di sorveglianza", "Specchi parabolici", "Semafori stradali", "Nessuno, basta fare attenzione"],
        corretta: 1,
        categoria: "movimentazione"
    },
    {
        domanda: "La pendenza massima per l'uso del transpallet manuale è:",
        opzioni: ["10%", "15%", "5%", "Non ci sono limiti"],
        corretta: 2,
        categoria: "movimentazione"
    },
    {
        domanda: "Cosa bisogna fare quando ci si avvicina a un incrocio cieco con il carrello elevatore?",
        opzioni: ["Accelerare per passare velocemente", "Suonare il clacson e rallentare", "Spegnere il motore", "Proseguire normalmente"],
        corretta: 1,
        categoria: "movimentazione"
    },
    {
        domanda: "Con quale frequenza devono essere ispezionate le scaffalature?",
        opzioni: ["Ogni anno", "Ogni trimestre", "Solo dopo un incidente", "Una volta ogni 5 anni"],
        corretta: 1,
        categoria: "scaffalature"
    },
    {
        domanda: "Dove devono essere stoccati i carichi più pesanti sulle scaffalature?",
        opzioni: ["Sui piani alti per liberare spazio", "Sui piani intermedi", "Sui piani bassi", "Indifferente se la scaffalatura è a norma"],
        corretta: 2,
        categoria: "scaffalature"
    },
    {
        domanda: "A cosa servono le protezioni antiurto alla base delle scaffalature?",
        opzioni: ["Solo a motivi estetici", "A proteggere i montanti dagli urti dei carrelli", "A impedire il passaggio dei topi", "A segnalare le corsie"],
        corretta: 1,
        categoria: "scaffalature"
    },
    {
        domanda: "Cosa deve essere visibile su ogni scaffalatura?",
        opzioni: ["Il nome del fornitore", "La tabella di portata massima", "Il codice a barre", "La data di installazione"],
        corretta: 1,
        categoria: "scaffalature"
    },
    {
        domanda: "Quale regola si applica quando si sale su una scala in magazzino?",
        opzioni: ["Salire il più velocemente possibile", "La regola dei 3 punti di contatto", "Portare sempre un carico con sé per efficienza", "Salire a due gradini alla volta"],
        corretta: 1,
        categoria: "scaffalature"
    },
    {
        domanda: "Come devono essere fissate le scaffalature industriali?",
        opzioni: ["Appoggiate al muro", "Con tasselli chimici al pavimento", "Con nastro adesivo industriale", "Non serve fissarle se sono pesanti"],
        corretta: 1,
        categoria: "scaffalature"
    },
    {
        domanda: "Qual è la funzione delle reti posteriori sulle scaffalature?",
        opzioni: ["Evitare furti", "Contenere la caduta di materiale dal lato opposto", "Migliorare l'estetica", "Facilitare la ventilazione"],
        corretta: 1,
        categoria: "scaffalature"
    },
    {
        domanda: "Qual è il peso massimo sollevabile manualmente da un uomo adulto secondo il D.Lgs. 81/08?",
        opzioni: ["30 kg", "25 kg", "35 kg", "Non esiste un limite"],
        corretta: 1,
        categoria: "ergonomia"
    },
    {
        domanda: "Qual è il peso massimo sollevabile manualmente da una donna adulta?",
        opzioni: ["25 kg", "20 kg", "15 kg", "Uguale all'uomo: 25 kg"],
        corretta: 1,
        categoria: "ergonomia"
    },
    {
        domanda: "Ogni quanto tempo si dovrebbe effettuare una pausa durante lavori ripetitivi?",
        opzioni: ["Ogni 4 ore", "Ogni 2 ore", "Solo a fine turno", "Ogni 30 minuti"],
        corretta: 1,
        categoria: "ergonomia"
    },
    {
        domanda: "Qual è la tecnica corretta per sollevare un carico da terra?",
        opzioni: ["Piegare la schiena tenendo le gambe dritte", "Piegare le ginocchia mantenendo la schiena dritta", "Sollevare con uno strappo rapido", "Torcere il busto durante il sollevamento"],
        corretta: 1,
        categoria: "ergonomia"
    },
    {
        domanda: "Il limite di forza per la spinta iniziale di un carico su ruote è:",
        opzioni: ["25 kg", "30 kg", "50 kg", "10 kg"],
        corretta: 0,
        categoria: "ergonomia"
    },
    {
        domanda: "A cosa servono i tappetini antifatica nelle postazioni di lavoro?",
        opzioni: ["A decorare l'ambiente", "A ridurre l'affaticamento da postura eretta prolungata", "A assorbire i liquidi", "A isolare dal freddo del pavimento"],
        corretta: 1,
        categoria: "ergonomia"
    },
    {
        domanda: "Quale temperatura si trova in una cella frigorifera standard?",
        opzioni: ["0°C", "-18°C", "-5°C", "+4°C"],
        corretta: 1,
        categoria: "ambiente"
    },
    {
        domanda: "Qual è il tempo massimo consigliato per un turno continuativo in cella frigorifera?",
        opzioni: ["1 ora", "30 minuti", "2 ore", "Nessun limite con i DPI adeguati"],
        corretta: 1,
        categoria: "ambiente"
    },
    {
        domanda: "Quanti lux minimi sono richiesti nelle aree di stoccaggio?",
        opzioni: ["50 lux", "100 lux", "150 lux", "300 lux"],
        corretta: 2,
        categoria: "ambiente"
    },
    {
        domanda: "Quanti lux sono necessari nelle zone di picking e lettura etichette?",
        opzioni: ["150 lux", "200 lux", "300 lux", "500 lux"],
        corretta: 2,
        categoria: "ambiente"
    },
    {
        domanda: "Sopra quale livello di rumore è obbligatorio fornire i DPI uditivi?",
        opzioni: ["70 dB(A)", "80 dB(A)", "90 dB(A)", "85 dB(A)"],
        corretta: 1,
        categoria: "ambiente"
    },
    {
        domanda: "Cosa si deve fare immediatamente quando si verifica una perdita di olio sul pavimento?",
        opzioni: ["Segnalare e pulire a fine turno", "Coprire con cartone", "Pulire immediatamente con kit assorbente", "Transennare e aspettare le pulizie"],
        corretta: 2,
        categoria: "ambiente"
    },
    {
        domanda: "Quale tipo di mascherina è adeguata per le operazioni polverose in magazzino?",
        opzioni: ["Mascherina chirurgica", "FFP2", "Sciarpa di cotone", "Non servono mascherine"],
        corretta: 1,
        categoria: "ambiente"
    },
    {
        domanda: "Ogni quanti metri quadrati deve essere presente un estintore?",
        opzioni: ["100 m²", "200 m²", "300 m²", "500 m²"],
        corretta: 1,
        categoria: "incendio"
    },
    {
        domanda: "Quale tipo di estintore è consigliato per un magazzino con materiali misti?",
        opzioni: ["Solo a CO2", "Solo a schiuma", "Tipo ABC a polvere", "Solo ad acqua"],
        corretta: 2,
        categoria: "incendio"
    },
    {
        domanda: "Con quale frequenza devono essere effettuate le prove di evacuazione?",
        opzioni: ["Annuale", "Semestrale", "Solo all'inaugurazione", "Trimestrale"],
        corretta: 1,
        categoria: "incendio"
    },
    {
        domanda: "Cosa significa la sigla REI 60?",
        opzioni: ["Resistenza elettrica industriale per 60 secondi", "Resistenza al fuoco di 60 minuti", "Regolamento europeo incendi n. 60", "Resistenza estintore idrante 60 bar"],
        corretta: 1,
        categoria: "incendio"
    },
    {
        domanda: "Dove deve essere posizionata la zona di ricarica delle batterie dei carrelli?",
        opzioni: ["Ovunque ci sia una presa elettrica", "In un'area ventilata e separata", "Vicino alle scaffalature per comodità", "In cella frigorifera per evitare surriscaldamenti"],
        corretta: 1,
        categoria: "incendio"
    },
    {
        domanda: "Ogni quanto va effettuata la manutenzione degli estintori?",
        opzioni: ["Ogni anno", "Ogni 6 mesi", "Ogni 2 anni", "Solo quando scarichi"],
        corretta: 1,
        categoria: "incendio"
    },
    {
        domanda: "Cosa significa impianto elettrico ATEX?",
        opzioni: ["Impianto ad alta tensione extra", "Impianto certificato per atmosfere esplosive", "Impianto con attenuazione extra-rumore", "Impianto automatico di emergenza"],
        corretta: 1,
        categoria: "incendio"
    },
    {
        domanda: "Quante ore di formazione generale sulla sicurezza sono previste per un neoassunto?",
        opzioni: ["2 ore", "4 ore", "8 ore", "16 ore"],
        corretta: 1,
        categoria: "organizzazione"
    },
    {
        domanda: "Quante ore di formazione specifica per rischio medio?",
        opzioni: ["4 ore", "8 ore", "12 ore", "16 ore"],
        corretta: 1,
        categoria: "organizzazione"
    },
    {
        domanda: "Ogni quanti anni è obbligatorio l'aggiornamento formativo?",
        opzioni: ["Ogni anno", "Ogni 3 anni", "Ogni 5 anni", "Non è obbligatorio"],
        corretta: 2,
        categoria: "organizzazione"
    },
    {
        domanda: "Quante ore dura l'aggiornamento formativo quinquennale?",
        opzioni: ["2 ore", "4 ore", "6 ore", "8 ore"],
        corretta: 2,
        categoria: "organizzazione"
    },
    {
        domanda: "Cosa sono i toolbox meeting?",
        opzioni: ["Riunioni per inventariare gli attrezzi", "Brevi riunioni di sicurezza prima del turno", "Corsi di formazione trimestrali", "Assemblee sindacali"],
        corretta: 1,
        categoria: "organizzazione"
    },
    {
        domanda: "Come deve essere documentata la consegna dei DPI?",
        opzioni: ["Non serve documentazione", "Con verbale firmato dal lavoratore", "Con una foto del lavoratore con i DPI", "Con una email generica"],
        corretta: 1,
        categoria: "organizzazione"
    },
    {
        domanda: "Chi deve essere coinvolto nella scelta dei DPI?",
        opzioni: ["Solo il datore di lavoro", "Il datore di lavoro e l'RLS", "Solo il medico competente", "Solo il RSPP"],
        corretta: 1,
        categoria: "organizzazione"
    },
    {
        domanda: "A quale normativa fa riferimento la valutazione dello stress lavoro-correlato?",
        opzioni: ["ISO 9001", "Metodo INAIL", "Norma UNI EN 131", "Regolamento CE 178"],
        corretta: 1,
        categoria: "organizzazione"
    },
    {
        domanda: "Qual è il decreto legislativo di riferimento per la sicurezza sul lavoro in Italia?",
        opzioni: ["D.Lgs. 626/94", "D.Lgs. 81/2008", "D.Lgs. 152/2006", "D.Lgs. 196/2003"],
        corretta: 1,
        categoria: "organizzazione"
    }
];

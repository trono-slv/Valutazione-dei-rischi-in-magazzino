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

/* ========================================
   STATO APPLICAZIONE
   ======================================== */
let stato = {
    sezioneAttiva: 'home',
    categoriaAttiva: null,
    rischioAttivo: null,
    testAttivo: false,
    domandaCorrente: 0,
    risposte: [],
    domandeMescolate: [],
    punteggio: 0
};

/* ========================================
   NAVIGAZIONE SEZIONI
   ======================================== */
function mostraSezione(id) {
    // Nascondi tutte le sezioni
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    // Mostra quella richiesta
    const sezione = document.getElementById(id);
    if (sezione) {
        sezione.classList.remove('hidden');
    }
    // Aggiorna nav attiva
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const navBtn = document.querySelector(`.nav-btn[data-section="${id}"]`);
    if (navBtn) navBtn.classList.add('active');

    stato.sezioneAttiva = id;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset vista rischi se si torna alla sezione
    if (id === 'rischi') {
        mostraListaCategorie();
    }
    if (id === 'test' && !stato.testAttivo) {
        mostraIntroTest();
    }
}

/* ========================================
   SEZIONE HOME - RENDER
   ======================================== */
function renderHome() {
    const container = document.getElementById('home-content');
    if (!container) return;

    container.innerHTML = `
        <div class="welcome-card">
            <div class="welcome-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <h2>Benvenuto</h2>
            <p>Questo strumento didattico ti guida nell'analisi dei <strong>rischi specifici</strong> presenti nelle attività di magazzino, secondo il <strong>D.Lgs. 81/2008</strong>.</p>
            <div class="features-grid">
                <div class="feature-item" onclick="mostraSezione('rischi')">
                    <div class="feature-icon"><i class="fas fa-search"></i></div>
                    <h3>Esplora i Rischi</h3>
                    <p>6 categorie con rischi dettagliati, cause, danni e misure di prevenzione</p>
                </div>
                <div class="feature-item" onclick="mostraSezione('test')">
                    <div class="feature-icon"><i class="fas fa-clipboard-check"></i></div>
                    <h3>Test di Valutazione</h3>
                    <p>43 domande per verificare le tue conoscenze sulla sicurezza in magazzino</p>
                </div>
            </div>
        </div>
        <div class="stats-bar">
            <div class="stat-item">
                <span class="stat-number">${categorieRischi.length}</span>
                <span class="stat-label">Categorie</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${categorieRischi.reduce((t, c) => t + c.rischi.length, 0)}</span>
                <span class="stat-label">Rischi Analizzati</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${domande.length}</span>
                <span class="stat-label">Domande Test</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">81/08</span>
                <span class="stat-label">D.Lgs. Riferimento</span>
            </div>
        </div>
    `;
}

/* ========================================
   SEZIONE RISCHI - LISTA CATEGORIE
   ======================================== */
function mostraListaCategorie() {
    const container = document.getElementById('rischi-content');
    if (!container) return;

    stato.categoriaAttiva = null;
    stato.rischioAttivo = null;

    let html = `
        <div class="section-title">
            <h2><i class="fas fa-exclamation-triangle"></i> Categorie di Rischio</h2>
            <p>Seleziona una categoria per esplorare i rischi specifici</p>
        </div>
        <div class="categories-grid">
    `;

    categorieRischi.forEach(cat => {
        html += `
            <div class="category-card" onclick="mostraCategoria('${cat.id}')">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.nome}</h3>
                <p>${cat.desc}</p>
                <div class="category-count">${cat.rischi.length} rischi</div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

/* ========================================
   SEZIONE RISCHI - DETTAGLIO CATEGORIA
   ======================================== */
function mostraCategoria(catId) {
    const cat = categorieRischi.find(c => c.id === catId);
    if (!cat) return;

    stato.categoriaAttiva = catId;
    const container = document.getElementById('rischi-content');

    let html = `
        <div class="section-title">
            <button class="back-btn" onclick="mostraListaCategorie()">
                <i class="fas fa-arrow-left"></i> Tutte le categorie
            </button>
            <h2>${cat.icon} ${cat.nome}</h2>
            <p>${cat.desc}</p>
        </div>
        <div class="rischi-list">
    `;

    cat.rischi.forEach((rischio, idx) => {
        html += `
            <div class="rischio-card" onclick="mostraDettaglioRischio('${catId}', ${idx})">
                <div class="rischio-header">
                    <span class="rischio-num">${idx + 1}</span>
                    <h3>${rischio.titolo}</h3>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================================
   SEZIONE RISCHI - DETTAGLIO SINGOLO RISCHIO
   ======================================== */
function mostraDettaglioRischio(catId, idx) {
    const cat = categorieRischi.find(c => c.id === catId);
    if (!cat || !cat.rischi[idx]) return;

    const rischio = cat.rischi[idx];
    stato.rischioAttivo = idx;
    const container = document.getElementById('rischi-content');

    let html = `
        <div class="section-title">
            <button class="back-btn" onclick="mostraCategoria('${catId}')">
                <i class="fas fa-arrow-left"></i> ${cat.nome}
            </button>
        </div>
        <div class="risk-detail-card">
            <div class="risk-detail-header">
                <span class="rischio-num-lg">${idx + 1}</span>
                <div>
                    <h2>${rischio.titolo}</h2>
                    <span class="risk-badge">${cat.nome}</span>
                </div>
            </div>
            <div class="info-grid">
                <div class="info-block info-cause">
                    <h3><i class="fas fa-exclamation-circle"></i> Cause</h3>
                    <ul>${rischio.cause.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
                <div class="info-block info-danni">
                    <h3><i class="fas fa-heartbeat"></i> Possibili Danni</h3>
                    <ul>${rischio.danni.map(d => `<li>${d}</li>`).join('')}</ul>
                </div>
            </div>
            <div class="info-block info-prevenzioni full-width">
                <h3><i class="fas fa-check-circle"></i> Misure di Prevenzione e Protezione</h3>
                <ul>${rischio.prevenzioni.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
        </div>
    `;

    // Navigazione tra rischi
    html += `<div class="risk-nav">`;
    if (idx > 0) {
        html += `<button class="risk-nav-btn" onclick="mostraDettaglioRischio('${catId}', ${idx - 1})">
            <i class="fas fa-arrow-left"></i> Precedente
        </button>`;
    } else {
        html += `<div></div>`;
    }
    if (idx < cat.rischi.length - 1) {
        html += `<button class="risk-nav-btn" onclick="mostraDettaglioRischio('${catId}', ${idx + 1})">
            Successivo <i class="fas fa-arrow-right"></i>
        </button>`;
    } else {
        html += `<div></div>`;
    }
    html += `</div>`;

    container.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================================
   SEZIONE TEST - INTRO
   ======================================== */
function mostraIntroTest() {
    const container = document.getElementById('test-content');
    if (!container) return;

    stato.testAttivo = false;

    // Carica migliore punteggio da localStorage
    const best = localStorage.getItem('bestScore_magazzino');

    let bestHtml = '';
    if (best !== null) {
        bestHtml = `
            <div class="best-score">
                <i class="fas fa-trophy"></i>
                <span>Miglior punteggio: <strong>${best}/${domande.length}</strong></span>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="section-title">
            <h2><i class="fas fa-clipboard-check"></i> Test di Valutazione</h2>
            <p>Verifica le tue conoscenze sulla sicurezza in magazzino</p>
        </div>
        <div class="test-intro-card">
            <div class="test-intro-icon">
                <i class="fas fa-brain"></i>
            </div>
            <h3>Sei pronto?</h3>
            <p>Il test è composto da <strong>${domande.length} domande</strong> a risposta multipla suddivise in 6 categorie.</p>
            <div class="test-info-grid">
                <div class="test-info-item">
                    <i class="fas fa-question-circle"></i>
                    <span>${domande.length} domande</span>
                </div>
                <div class="test-info-item">
                    <i class="fas fa-random"></i>
                    <span>Ordine casuale</span>
                </div>
                <div class="test-info-item">
                    <i class="fas fa-check-double"></i>
                    <span>Correzione immediata</span>
                </div>
                <div class="test-info-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>Report finale</span>
                </div>
            </div>
            ${bestHtml}
            <button class="btn-start-test" onclick="iniziaTest()">
                <i class="fas fa-play"></i> Inizia il Test
            </button>
        </div>
    `;
}

/* ========================================
   TEST - MESCOLA E INIZIA
   ======================================== */
function mescolaArray(arr) {
    const copia = [...arr];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function iniziaTest() {
    stato.testAttivo = true;
    stato.domandaCorrente = 0;
    stato.risposte = [];
    stato.punteggio = 0;
    stato.domandeMescolate = mescolaArray(domande);
    mostraDomanda();
}

/* ========================================
   TEST - MOSTRA DOMANDA
   ======================================== */
function mostraDomanda() {
    const container = document.getElementById('test-content');
    const d = stato.domandeMescolate[stato.domandaCorrente];
    const num = stato.domandaCorrente + 1;
    const tot = stato.domandeMescolate.length;
    const progresso = Math.round((num / tot) * 100);

    // Trova nome categoria
    const cat = categorieRischi.find(c => c.id === d.categoria);
    const catNome = cat ? cat.nome : '';
    const catIcon = cat ? cat.icon : '';

    container.innerHTML = `
        <div class="test-progress-bar">
            <div class="test-progress-fill" style="width: ${progresso}%"></div>
        </div>
        <div class="test-status">
            <span>Domanda ${num} di ${tot}</span>
            <span class="test-cat-badge">${catIcon} ${catNome}</span>
        </div>
        <div class="question-card">
            <h3 class="question-text">${d.domanda}</h3>
            <div class="options-list">
                ${d.opzioni.map((opt, i) => `
                    <button class="option-btn" id="opt-${i}" onclick="selezionaRisposta(${i})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div class="test-feedback hidden" id="test-feedback"></div>
            <div class="test-nav">
                <button class="btn-test-nav hidden" id="btn-prossima" onclick="prossimaDomanda()">
                    ${num < tot ? 'Prossima Domanda <i class="fas fa-arrow-right"></i>' : 'Vedi Risultati <i class="fas fa-chart-bar"></i>'}
                </button>
            </div>
        </div>
    `;
}

/* ========================================
   TEST - SELEZIONA RISPOSTA
   ======================================== */
function selezionaRisposta(indice) {
    const d = stato.domandeMescolate[stato.domandaCorrente];

    // Disabilita tutti i bottoni
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
    });

    const corretta = d.corretta;
    const isCorretta = indice === corretta;

    if (isCorretta) {
        stato.punteggio++;
    }

    stato.risposte.push({
        domanda: d.domanda,
        risposta: indice,
        corretta: corretta,
        isCorretta: isCorretta,
        categoria: d.categoria
    });

    // Evidenzia risposte
    document.getElementById(`opt-${corretta}`).classList.add('option-correct');
    if (!isCorretta) {
        document.getElementById(`opt-${indice}`).classList.add('option-wrong');
    }

    // Feedback
    const feedback = document.getElementById('test-feedback');
    feedback.classList.remove('hidden');
    if (isCorretta) {
        feedback.className = 'test-feedback feedback-correct';
        feedback.innerHTML = '<i class="fas fa-check-circle"></i> Risposta corretta!';
    } else {
        feedback.className = 'test-feedback feedback-wrong';
        feedback.innerHTML = `<i class="fas fa-times-circle"></i> Sbagliato. La risposta corretta era: <strong>${d.opzioni[corretta]}</strong>`;
    }

    // Mostra pulsante prossima
    document.getElementById('btn-prossima').classList.remove('hidden');
}

/* ========================================
   TEST - PROSSIMA DOMANDA / RISULTATI
   ======================================== */
function prossimaDomanda() {
    stato.domandaCorrente++;
    if (stato.domandaCorrente < stato.domandeMescolate.length) {
        mostraDomanda();
    } else {
        mostraRisultati();
    }
}

/* ========================================
   TEST - RISULTATI FINALI
   ======================================== */
function mostraRisultati() {
    const container = document.getElementById('test-content');
    const tot = stato.domandeMescolate.length;
    const punt = stato.punteggio;
    const perc = Math.round((punt / tot) * 100);

    // Salva miglior punteggio
    const prevBest = localStorage.getItem('bestScore_magazzino');
    if (prevBest === null || punt > parseInt(prevBest)) {
        localStorage.setItem('bestScore_magazzino', punt);
    }

    // Valutazione
    let valutazione, valClass, valIcon;
    if (perc >= 90) {
        valutazione = 'Eccellente';
        valClass = 'val-excellent';
        valIcon = 'fas fa-star';
    } else if (perc >= 75) {
        valutazione = 'Buono';
        valClass = 'val-good';
        valIcon = 'fas fa-thumbs-up';
    } else if (perc >= 60) {
        valutazione = 'Sufficiente';
        valClass = 'val-sufficient';
        valIcon = 'fas fa-check';
    } else {
        valutazione = 'Insufficiente';
        valClass = 'val-fail';
        valIcon = 'fas fa-exclamation-triangle';
    }

    // Statistiche per categoria
    let statsCat = {};
    categorieRischi.forEach(c => {
        statsCat[c.id] = { nome: c.nome, icon: c.icon, corrette: 0, totale: 0 };
    });
    stato.risposte.forEach(r => {
        if (statsCat[r.categoria]) {
            statsCat[r.categoria].totale++;
            if (r.isCorretta) statsCat[r.categoria].corrette++;
        }
    });

    let catStatsHtml = '';
    Object.values(statsCat).forEach(cs => {
        if (cs.totale > 0) {
            const p = Math.round((cs.corrette / cs.totale) * 100);
            const barColor = p >= 75 ? 'var(--success)' : p >= 50 ? 'var(--warning)' : 'var(--danger)';
            catStatsHtml += `
                <div class="cat-stat-item">
                    <div class="cat-stat-header">
                        <span>${cs.icon} ${cs.nome}</span>
                        <span>${cs.corrette}/${cs.totale}</span>
                    </div>
                    <div class="cat-stat-bar">
                        <div class="cat-stat-fill" style="width:${p}%; background:${barColor}"></div>
                    </div>
                </div>
            `;
        }
    });

    // Riepilogo errori
    let erroriHtml = '';
    const errori = stato.risposte.filter(r => !r.isCorretta);
    if (errori.length > 0) {
        erroriHtml = `
            <div class="errori-section">
                <h3><i class="fas fa-times-circle"></i> Risposte Errate (${errori.length})</h3>
                <div class="errori-list">
                    ${errori.map(e => {
                        const dOrig = stato.domandeMescolate.find(dm => dm.domanda === e.domanda);
                        return `
                            <div class="errore-item">
                                <p class="errore-domanda">${e.domanda}</p>
                                <p class="errore-tua"><i class="fas fa-times"></i> Tua risposta: ${dOrig.opzioni[e.risposta]}</p>
                                <p class="errore-corretta"><i class="fas fa-check"></i> Corretta: ${dOrig.opzioni[e.corretta]}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="results-card">
            <div class="results-header ${valClass}">
                <i class="${valIcon}"></i>
                <div class="results-score">${perc}%</div>
                <div class="results-label">${valutazione}</div>
                <div class="results-detail">${punt} risposte corrette su ${tot}</div>
            </div>
            <div class="cat-stats">
                <h3>Dettaglio per Categoria</h3>
                ${catStatsHtml}
            </div>
            ${erroriHtml}
            <div class="results-actions">
                <button class="btn-restart" onclick="iniziaTest()">
                    <i class="fas fa-redo"></i> Ripeti il Test
                </button>
                <button class="btn-back-home" onclick="mostraIntroTest()">
                    <i class="fas fa-home"></i> Torna all'Intro
                </button>
            </div>
        </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ========================================
   SCROLL TO TOP BUTTON
   ======================================== */
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    if (btn) {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
});

/* ========================================
   INIZIALIZZAZIONE
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Setup navigazione
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            if (section) mostraSezione(section);
        });
    });

    // Render iniziale
    renderHome();
    mostraListaCategorie();
    mostraIntroTest();

    // Mostra home di default
    mostraSezione('home');
});

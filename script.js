/* ========================================
   SICUREZZA IN MAGAZZINO - DATI COMPLETI
   8 Categorie - 43 Rischi - 43+ Domande
   ======================================== */

const categorieRischi = [

    /* ============================
       CAT 1 - MECCANICI (7 rischi)
       ============================ */
    {
        id: "meccanici",
        icon: "⚙️",
        nome: "Rischi Meccanici",
        desc: "Rischi legati a sforzi fisici, movimenti ripetitivi e patologie muscolo-scheletriche",
        rischi: [
            {
                titolo: "1.1 Distorsioni articolari",
                cause: [
                    "Movimenti bruschi durante la movimentazione dei carichi",
                    "Pavimentazione irregolare o scivolosa",
                    "Calzature non idonee",
                    "Fretta nell'esecuzione delle operazioni"
                ],
                danni: [
                    "Distorsione alla caviglia o al ginocchio",
                    "Lesioni ai legamenti",
                    "Gonfiore e impotenza funzionale",
                    "Possibile cronicizzazione"
                ],
                prevenzioni: [
                    "Utilizzo di calzature antinfortunistiche con supporto alla caviglia",
                    "Manutenzione regolare della pavimentazione",
                    "Formazione sulle tecniche corrette di movimentazione",
                    "Ritmi di lavoro adeguati senza fretta eccessiva"
                ]
            },
            {
                titolo: "1.2 Lesioni da sollevamento",
                cause: [
                    "Sollevamento di carichi troppo pesanti",
                    "Tecnica di sollevamento scorretta (schiena curva)",
                    "Assenza di ausili meccanici",
                    "Ripetitività dei sollevamenti nel turno"
                ],
                danni: [
                    "Lombalgia acuta (colpo della strega)",
                    "Strappi muscolari alla schiena",
                    "Ernia discale",
                    "Lesioni ai dischi intervertebrali"
                ],
                prevenzioni: [
                    "Rispettare il limite di 25 kg per gli uomini e 15 kg per le donne",
                    "Formazione sulla tecnica corretta: piegare le ginocchia, schiena dritta",
                    "Dotazione di transpallet, carrelli e ausili meccanici",
                    "Rotazione delle mansioni per ridurre la ripetitività"
                ]
            },
            {
                titolo: "1.3 Sindrome del tunnel carpale",
                cause: [
                    "Movimenti ripetitivi di polso e mano (es. uso scanner, confezionamento)",
                    "Vibrazioni trasmesse al sistema mano-braccio",
                    "Posizioni forzate del polso per periodi prolungati",
                    "Mancanza di pause adeguate"
                ],
                danni: [
                    "Formicolio e intorpidimento delle dita",
                    "Dolore al polso e alla mano",
                    "Perdita di forza nella presa",
                    "Necessità di intervento chirurgico nei casi gravi"
                ],
                prevenzioni: [
                    "Rotazione delle mansioni durante il turno",
                    "Pause regolari ogni 60 minuti di lavoro ripetitivo",
                    "Utilizzo di strumenti ergonomici (scanner leggeri, impugnature)",
                    "Sorveglianza sanitaria specifica per esposti"
                ]
            },
            {
                titolo: "1.4 Tendiniti",
                cause: [
                    "Movimenti ripetitivi di spalla, gomito e polso",
                    "Sollevamento ripetuto di carichi leggeri senza pause",
                    "Posture incongrue mantenute a lungo",
                    "Vibrazioni trasmesse dagli strumenti di lavoro"
                ],
                danni: [
                    "Infiammazione dei tendini (tendinite)",
                    "Epicondilite (gomito del tennista)",
                    "Peritendinite al polso",
                    "Limitazione funzionale dell'arto"
                ],
                prevenzioni: [
                    "Alternanza tra compiti diversi durante il turno",
                    "Esercizi di stretching prima e durante il lavoro",
                    "Utilizzo di ausili per ridurre lo sforzo ripetitivo",
                    "Visite mediche periodiche per la sorveglianza sanitaria"
                ]
            },
            {
                titolo: "1.5 Patologie arti inferiori",
                cause: [
                    "Stazione eretta prolungata per l'intero turno",
                    "Camminate continue su superfici dure (cemento)",
                    "Calzature inadeguate o usurate",
                    "Mancanza di tappetini ergonomici nelle postazioni fisse"
                ],
                danni: [
                    "Varici agli arti inferiori",
                    "Fascite plantare",
                    "Gonfiore e pesantezza alle gambe",
                    "Problemi circolatori cronici"
                ],
                prevenzioni: [
                    "Calzature antinfortunistiche ergonomiche con suola ammortizzante",
                    "Tappetini anti-fatica nelle postazioni di lavoro fisse",
                    "Pause per sedersi durante il turno",
                    "Calze a compressione graduata per chi sta in piedi a lungo"
                ]
            },
            {
                titolo: "1.6 Ernie discali",
                cause: [
                    "Sollevamento ripetuto di carichi pesanti",
                    "Torsione del busto durante il sollevamento",
                    "Vibrazioni al corpo intero (guida carrelli elevatori)",
                    "Posture scorrette mantenute nel tempo"
                ],
                danni: [
                    "Ernia del disco lombare o cervicale",
                    "Sciatalgia (dolore irradiato alla gamba)",
                    "Limitazione grave della mobilità",
                    "Possibile necessità di intervento chirurgico"
                ],
                prevenzioni: [
                    "Valutazione del rischio MMC con metodo NIOSH",
                    "Ausili meccanici obbligatori per carichi superiori ai limiti",
                    "Formazione specifica sulla movimentazione manuale",
                    "Sedili ammortizzati e ergonomici sui carrelli elevatori"
                ]
            },
            {
                titolo: "1.7 Riepilogo generale rischi meccanici",
                cause: [
                    "Combinazione di più fattori: ripetitività, carico, postura",
                    "Mancata valutazione del rischio ergonomico",
                    "Assenza di rotazione delle mansioni",
                    "Inadeguata formazione del personale"
                ],
                danni: [
                    "Patologie muscolo-scheletriche croniche",
                    "Assenze prolungate dal lavoro",
                    "Riduzione della capacità lavorativa",
                    "Malattie professionali riconosciute INAIL"
                ],
                prevenzioni: [
                    "DVR aggiornato con sezione specifica sui rischi meccanici",
                    "Programma di sorveglianza sanitaria mirato",
                    "Piano di rotazione delle mansioni",
                    "Investimento in automazione e ausili meccanici"
                ]
            }
        ]
    },

    /* ============================
       CAT 2 - TRAUMATICI (6 rischi)
       ============================ */
    {
        id: "traumatici",
        icon: "🚨",
        nome: "Rischi Traumatici",
        desc: "Rischi legati a cadute di materiali, schiacciamenti, scivolamenti e collisioni",
        rischi: [
            {
                titolo: "2.1 Caduta materiali/oggetti",
                cause: [
                    "Stoccaggio scorretto sulle scaffalature",
                    "Sovraccarico delle scaffalature oltre la portata",
                    "Urti accidentali con carrelli elevatori contro le scaffalature",
                    "Imballi danneggiati o instabili"
                ],
                danni: [
                    "Trauma cranico da impatto",
                    "Fratture agli arti superiori",
                    "Contusioni e lacerazioni",
                    "Lesioni potenzialmente fatali per carichi pesanti"
                ],
                prevenzioni: [
                    "Elmetto di protezione obbligatorio nelle aree di stoccaggio",
                    "Rispetto della portata massima indicata su ogni scaffalatura",
                    "Ispezione periodica delle scaffalature (ogni 12 mesi)",
                    "Reti e fermi anti-caduta sui piani delle scaffalature"
                ]
            },
            {
                titolo: "2.2 Schiacciamento",
                cause: [
                    "Movimentazione di carichi pesanti con mezzi meccanici",
                    "Ribaltamento di merci impilate in modo instabile",
                    "Mancanza di distanze di sicurezza tra operatori e mezzi",
                    "Assenza di protezioni sulle macchine"
                ],
                danni: [
                    "Fratture multiple",
                    "Amputazione di dita o arti",
                    "Lesioni agli organi interni",
                    "Lesioni fatali da schiacciamento toracico"
                ],
                prevenzioni: [
                    "Zone di sicurezza delimitate durante le operazioni di carico/scarico",
                    "Guanti anti-schiacciamento per operazioni manuali",
                    "Procedure di lockout/tagout per le macchine",
                    "Formazione sulla distanza di sicurezza dai mezzi in movimento"
                ]
            },
            {
                titolo: "2.3 Scivolamento e cadute",
                cause: [
                    "Pavimentazione bagnata o contaminata da oli/liquidi",
                    "Presenza di materiali o cavi a terra",
                    "Illuminazione insufficiente nelle aree di transito",
                    "Calzature inadeguate senza suola antiscivolo"
                ],
                danni: [
                    "Frattura del polso o del femore",
                    "Trauma cranico da caduta",
                    "Contusioni e distorsioni",
                    "Lesioni alla colonna vertebrale"
                ],
                prevenzioni: [
                    "Pulizia immediata di liquidi versati a terra",
                    "Calzature antinfortunistiche con suola antiscivolo",
                    "Illuminazione adeguata in tutte le aree (min. 150 lux)",
                    "Ordine e pulizia costante delle aree di transito"
                ]
            },
            {
                titolo: "2.4 Collisioni con oggetti in movimento",
                cause: [
                    "Carrelli elevatori in transito nelle aree miste",
                    "Transpallet elettrici senza segnalazione acustica",
                    "Mancanza di percorsi separati pedoni/mezzi",
                    "Angoli ciechi tra le scaffalature"
                ],
                danni: [
                    "Traumi da impatto con il mezzo",
                    "Fratture da investimento",
                    "Contusioni e abrasioni",
                    "Lesioni gravi o fatali"
                ],
                prevenzioni: [
                    "Segnaletica orizzontale per percorsi separati",
                    "Segnalatori acustici e luminosi su tutti i mezzi",
                    "Specchi parabolici agli incroci e angoli ciechi",
                    "Gilet ad alta visibilità obbligatori per tutti"
                ]
            },
            {
                titolo: "2.5 Collisioni e ribaltamenti carrelli elevatori",
                cause: [
                    "Velocità eccessiva nei corridoi del magazzino",
                    "Carico che ostruisce la visuale del carrellista",
                    "Pavimentazione con buche o dislivelli",
                    "Manovre brusche in spazi ristretti"
                ],
                danni: [
                    "Ribaltamento con schiacciamento dell'operatore",
                    "Investimento di pedoni nelle vicinanze",
                    "Danni a scaffalature con effetto domino",
                    "Incendio per rottura del circuito idraulico"
                ],
                prevenzioni: [
                    "Patentino obbligatorio per la conduzione (Acc. Stato-Regioni 2012)",
                    "Limite di velocità massimo nei corridoi",
                    "Marcia in retromarcia con carico che ostruisce la visuale",
                    "Cintura di sicurezza obbligatoria sul carrello"
                ]
            },
            {
                titolo: "2.6 Tagli e ferite",
                cause: [
                    "Uso di taglierini e cutter per apertura imballi",
                    "Bordi taglienti di lamiere, pallet rotti o reggette metalliche",
                    "Mancato utilizzo di guanti protettivi",
                    "Fretta nelle operazioni di disimballaggio"
                ],
                danni: [
                    "Ferite da taglio alle mani e alle braccia",
                    "Lesioni ai tendini delle dita",
                    "Infezioni delle ferite",
                    "Cicatrici permanenti"
                ],
                prevenzioni: [
                    "Guanti antitaglio obbligatori (min. livello 3)",
                    "Cutter con lama retrattile a sicurezza",
                    "Formazione sull'uso corretto degli strumenti da taglio",
                    "Kit di primo soccorso accessibile in ogni area"
                ]
            }
        ]
    },

    /* ============================
       CAT 3 - POSTURALI/MMC (3 rischi)
       ============================ */
    {
        id: "posturali",
        icon: "🦴",
        nome: "Rischi Posturali / MMC",
        desc: "Rischi legati a movimenti ripetitivi, posture incongrue e sforzi eccessivi nella movimentazione manuale dei carichi",
        rischi: [
            {
                titolo: "3.1 Movimenti ripetitivi",
                cause: [
                    "Operazioni di picking con cicli brevi e ripetuti",
                    "Confezionamento manuale per l'intero turno",
                    "Scansione ripetitiva di codici a barre",
                    "Mancanza di rotazione delle mansioni"
                ],
                danni: [
                    "Sindrome del tunnel carpale",
                    "Tendinite ai polsi e alle spalle",
                    "Epicondilite (gomito del tennista)",
                    "Patologie muscolo-scheletriche croniche degli arti superiori"
                ],
                prevenzioni: [
                    "Valutazione del rischio con metodo OCRA (Occupational Repetitive Actions)",
                    "Rotazione delle mansioni ogni 2 ore massimo",
                    "Pause di 10 minuti ogni ora di lavoro ripetitivo",
                    "Strumenti ergonomici: scanner ad anello, nastri regolabili in altezza"
                ]
            },
            {
                titolo: "3.2 Posture incongrue",
                cause: [
                    "Prelievo di merci da livelli troppo alti o troppo bassi",
                    "Postazioni di lavoro non regolabili in altezza",
                    "Torsione del busto durante lo spostamento dei carichi",
                    "Lavoro prolungato in posizione chinata o accovacciata"
                ],
                danni: [
                    "Cervicalgia e dorsalgia cronica",
                    "Lombalgia da postura scorretta",
                    "Compressione dei dischi intervertebrali",
                    "Sindrome dello stretto toracico"
                ],
                prevenzioni: [
                    "Postazioni di lavoro regolabili in altezza (tavoli, nastri)",
                    "Stoccaggio dei prodotti più movimentati tra 70 e 150 cm da terra",
                    "Formazione sulla corretta postura durante il lavoro",
                    "Ausili di sollevamento per prelievi da livelli estremi"
                ]
            },
            {
                titolo: "3.3 Sforzi eccessivi",
                cause: [
                    "Superamento dei limiti di peso nella movimentazione manuale",
                    "Traino e spinta di carrelli sovraccarichi",
                    "Assenza di ausili meccanici disponibili",
                    "Pressione produttiva che spinge a fare tutto manualmente"
                ],
                danni: [
                    "Ernia discale lombare",
                    "Strappi muscolari alla schiena e alle spalle",
                    "Lesioni articolari acute",
                    "Prolasso dei dischi intervertebrali"
                ],
                prevenzioni: [
                    "Valutazione del rischio MMC con metodo NIOSH (National Institute for Occupational Safety and Health)",
                    "Limite massimo: 25 kg uomini, 15 kg donne (D.Lgs. 81/08)",
                    "Disponibilità obbligatoria di transpallet e carrelli in ogni area",
                    "Divieto di sollevamento manuale oltre i limiti stabiliti dal DVR"
                ]
            }
        ]
    },

    /* ============================
       CAT 4 - CHIMICI/BIOLOGICI (6 rischi)
       ============================ */
    {
        id: "chimici",
        icon: "☣️",
        nome: "Rischi Chimici / Biologici",
        desc: "Rischi legati all'esposizione a polveri, sostanze chimiche, allergeni, agenti infettivi e gas di scarico",
        rischi: [
            {
                titolo: "4.1 Polveri e particolato",
                cause: [
                    "Movimentazione di merci polverose (cemento, farine, cartoni)",
                    "Assenza o malfunzionamento dell'impianto di aspirazione",
                    "Pulizia con spazzamento a secco che solleva polveri",
                    "Ventilazione inadeguata del magazzino"
                ],
                danni: [
                    "Irritazione delle vie respiratorie",
                    "Bronchite cronica occupazionale",
                    "Pneumoconiosi (accumulo di polveri nei polmoni)",
                    "Congiuntivite da polveri"
                ],
                prevenzioni: [
                    "Impianto di aspirazione localizzata nelle aree critiche",
                    "Mascherine FFP2 obbligatorie per le operazioni polverose",
                    "Pulizia con aspiratori industriali (no spazzamento a secco)",
                    "Monitoraggio periodico della qualità dell'aria"
                ]
            },
            {
                titolo: "4.2 Sostanze chimiche pericolose",
                cause: [
                    "Stoccaggio di prodotti chimici senza schede di sicurezza (SDS)",
                    "Sversamento accidentale di sostanze corrosive o tossiche",
                    "Mancato utilizzo dei DPI specifici",
                    "Miscelazione accidentale di prodotti incompatibili"
                ],
                danni: [
                    "Ustioni chimiche alla pelle e agli occhi",
                    "Intossicazione acuta per inalazione",
                    "Dermatite da contatto irritativa o allergica",
                    "Danni epatici o renali per esposizione cronica"
                ],
                prevenzioni: [
                    "Schede di sicurezza (SDS) disponibili per ogni sostanza",
                    "DPI specifici: guanti chimici, occhiali, grembiule",
                    "Armadi di sicurezza per lo stoccaggio di prodotti chimici",
                    "Kit di emergenza per sversamenti in ogni area di stoccaggio chimico"
                ]
            },
            {
                titolo: "4.3 Allergeni e sensibilizzanti",
                cause: [
                    "Contatto con lattice, resine, colle industriali",
                    "Esposizione a polveri di legno o farine",
                    "Utilizzo di detergenti e prodotti di pulizia aggressivi",
                    "Mancata identificazione dei lavoratori allergici"
                ],
                danni: [
                    "Dermatite allergica da contatto",
                    "Asma professionale",
                    "Orticaria da contatto",
                    "Shock anafilattico nei casi gravi"
                ],
                prevenzioni: [
                    "Identificazione di tutti gli allergeni presenti nel magazzino",
                    "Guanti ipoallergenici (nitrile invece di lattice)",
                    "Sorveglianza sanitaria per lavoratori con anamnesi allergica",
                    "Sostituzione dei prodotti sensibilizzanti con alternative meno aggressive"
                ]
            },
            {
                titolo: "4.4 Rischio infettivo",
                cause: [
                    "Contatto con merci provenienti da aree con rischio sanitario",
                    "Punture accidentali con oggetti contaminati nei colli",
                    "Scarsa igiene negli spogliatoi e nei servizi igienici",
                    "Contatto con animali infestanti (topi, insetti)"
                ],
                danni: [
                    "Infezioni batteriche cutanee",
                    "Tetano da ferite contaminate",
                    "Leptospirosi da contatto con urine di roditori",
                    "Epatite da puntura accidentale"
                ],
                prevenzioni: [
                    "Vaccinazione antitetanica obbligatoria aggiornata",
                    "Guanti protettivi per la manipolazione di colli sconosciuti",
                    "Programma di derattizzazione e disinfestazione periodica",
                    "Igiene rigorosa: lavaggio mani, spogliatoi puliti, armadietti doppi"
                ]
            },
            {
                titolo: "4.5 Gas di scarico",
                cause: [
                    "Carrelli elevatori a combustione interna (diesel, GPL) usati al chiuso",
                    "Automezzi di trasporto con motore acceso nelle baie di carico",
                    "Ventilazione insufficiente nelle aree di carico/scarico",
                    "Assenza di monitoraggio della qualità dell'aria"
                ],
                danni: [
                    "Intossicazione da monossido di carbonio (CO)",
                    "Irritazione delle vie respiratorie da NOx",
                    "Cefalea, nausea e vertigini",
                    "Effetti cancerogeni da esposizione cronica ai gas diesel"
                ],
                prevenzioni: [
                    "Utilizzo di carrelli elettrici negli ambienti chiusi",
                    "Impianto di ventilazione forzata nelle baie di carico",
                    "Divieto di tenere i motori accesi durante le soste",
                    "Monitoraggio continuo di CO e NOx con allarmi automatici"
                ]
            },
            {
                titolo: "4.6 Rischio biologico",
                cause: [
                    "Stoccaggio di merci alimentari o deperibili",
                    "Presenza di muffe e funghi in ambienti umidi",
                    "Contaminazione da liquami o acque stagnanti",
                    "Scarsa ventilazione che favorisce la proliferazione microbica"
                ],
                danni: [
                    "Micosi cutanee",
                    "Aspergillosi polmonare",
                    "Infezioni gastrointestinali",
                    "Allergie respiratorie da spore fungine"
                ],
                prevenzioni: [
                    "Controllo dell'umidità relativa (ideale 40-60%)",
                    "Ispezione periodica delle merci stoccate",
                    "Pulizia e sanificazione regolare del magazzino",
                    "DPI specifici per le aree a rischio biologico"
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
        nome: "Rischi Ambientali",
        desc: "Rischi legati a rumore, vibrazioni, illuminazione, radiazioni, campi elettromagnetici e microclima",
        rischi: [
            {
                titolo: "5.1 Rumore",
                cause: [
                    "Carrelli elevatori e transpallet in funzione",
                    "Nastri trasportatori e impianti di smistamento",
                    "Operazioni di carico/scarico con mezzi pesanti",
                    "Mancanza di barriere fonoassorbenti"
                ],
                danni: [
                    "Ipoacusia professionale (perdita dell'udito)",
                    "Acufeni (fischi alle orecchie)",
                    "Disturbi della concentrazione e stress",
                    "Effetti cardiovascolari da esposizione cronica"
                ],
                prevenzioni: [
                    "Valutazione fonometrica periodica (D.Lgs. 81/08 art. 190)",
                    "Otoprotettori obbligatori sopra 85 dB(A)",
                    "Manutenzione dei mezzi per ridurre le emissioni sonore",
                    "Barriere fonoassorbenti nelle aree più rumorose"
                ]
            },
            {
                titolo: "5.2 Vibrazioni",
                cause: [
                    "Guida di carrelli elevatori su pavimentazione irregolare",
                    "Utilizzo di transpallet manuali su lunghe distanze",
                    "Strumenti vibranti (avvitatori, reggitrici)",
                    "Sedili non ammortizzati sui mezzi"
                ],
                danni: [
                    "Vibrazioni al corpo intero (WBV): lombalgie, ernie",
                    "Vibrazioni mano-braccio (HAV): sindrome di Raynaud",
                    "Danni al sistema vascolare delle mani (dita bianche)",
                    "Patologie degenerative della colonna vertebrale"
                ],
                prevenzioni: [
                    "Sedili ammortizzati e certificati sui carrelli elevatori",
                    "Manutenzione della pavimentazione (eliminare buche e dislivelli)",
                    "Guanti antivibranti per strumenti manuali",
                    "Rispetto dei limiti di esposizione: WBV 0.5 m/s², HAV 2.5 m/s²"
                ]
            },
            {
                titolo: "5.3 Illuminazione inadeguata",
                cause: [
                    "Lampade non funzionanti o insufficienti",
                    "Aree di stoccaggio in penombra",
                    "Abbagliamento da luce diretta o riflessa",
                    "Mancata manutenzione dell'impianto di illuminazione"
                ],
                danni: [
                    "Affaticamento visivo",
                    "Aumento del rischio di inciampo e cadute",
                    "Errori nella lettura di etichette e codici",
                    "Cefalea da sforzo visivo prolungato"
                ],
                prevenzioni: [
                    "Livelli minimi: 150 lux aree di transito, 300 lux aree di lavoro",
                    "Illuminazione di emergenza funzionante e verificata",
                    "Manutenzione programmata dell'impianto (sostituzione lampade)",
                    "Integrazione con luce naturale dove possibile"
                ]
            },
            {
                titolo: "5.4 Radiazioni",
                cause: [
                    "Esposizione a radiazioni UV da saldatura (manutenzione scaffalature)",
                    "Radiazioni infrarosse in magazzini con forni vicini",
                    "Esposizione a radiazioni ionizzanti in rari casi (merci speciali)",
                    "Mancata segnalazione delle aree a rischio"
                ],
                danni: [
                    "Ustioni cutanee da UV",
                    "Cataratta da infrarossi",
                    "Eritema attinico",
                    "Rischio oncologico per esposizione cronica a radiazioni ionizzanti"
                ],
                prevenzioni: [
                    "Identificazione e segnalazione di tutte le fonti di radiazione",
                    "DPI specifici: maschere per saldatura, schermi protettivi",
                    "Limitazione del tempo di esposizione",
                    "Sorveglianza sanitaria specifica per gli esposti"
                ]
            },
            {
                titolo: "5.5 Campi elettromagnetici",
                cause: [
                    "Sistemi RFID ad alta potenza per la tracciabilità delle merci",
                    "Impianti elettrici ad alta tensione nelle vicinanze",
                    "Stazioni di ricarica batterie dei carrelli",
                    "Dispositivi wireless industriali"
                ],
                danni: [
                    "Interferenza con dispositivi medici impiantati (pacemaker)",
                    "Cefalea e affaticamento",
                    "Riscaldamento dei tessuti per esposizione intensa",
                    "Effetti ancora in studio per esposizione cronica"
                ],
                prevenzioni: [
                    "Valutazione del rischio CEM (D.Lgs. 81/08 Capo IV)",
                    "Segnalazione delle aree con campi elettromagnetici elevati",
                    "Divieto di accesso per portatori di pacemaker alle aree critiche",
                    "Distanziamento delle postazioni di lavoro dalle fonti CEM"
                ]
            },
            {
                titolo: "5.6 Microclima sfavorevole",
                cause: [
                    "Magazzino non climatizzato con temperature estreme",
                    "Correnti d'aria fredda dalle baie di carico aperte",
                    "Lavoro in celle frigorifere senza adeguata protezione",
                    "Umidità eccessiva o eccessiva secchezza dell'aria"
                ],
                danni: [
                    "Colpo di calore in estate (temperature >35°C)",
                    "Ipotermia in celle frigorifere",
                    "Crampi da calore e disidratazione",
                    "Malattie da raffreddamento per sbalzi termici"
                ],
                prevenzioni: [
                    "Impianto di riscaldamento/raffrescamento o ventilazione forzata",
                    "DPI termici per celle frigorifere: tuta termica, guanti, copricapo",
                    "Pause in ambienti climatizzati durante le stagioni estreme",
                    "Distributori di acqua fresca accessibili in tutte le aree"
                ]
            }
        ]
    },

    /* ============================
       CAT 6 - CARRELLI (6 rischi)
       ============================ */
    {
        id: "carrelli",
        icon: "🚜",
        nome: "Rischi Carrelli Elevatori",
        desc: "Rischi specifici legati alla conduzione, manutenzione e utilizzo dei carrelli elevatori in magazzino",
        rischi: [
            {
                titolo: "6.1 Ribaltamento",
                cause: [
                    "Velocità eccessiva in curva",
                    "Carico posizionato troppo in alto durante il transito",
                    "Pavimentazione con pendenze, buche o dislivelli",
                    "Manovre brusche con carico instabile"
                ],
                danni: [
                    "Schiacciamento dell'operatore sotto il carrello",
                    "Fratture multiple e lesioni spinali",
                    "Decesso nei casi più gravi",
                    "Danni a strutture e merci circostanti"
                ],
                prevenzioni: [
                    "Forche abbassate a 15-20 cm da terra durante il transito",
                    "Velocità massima 5 km/h nei corridoi e 10 km/h nelle aree aperte",
                    "Cintura di sicurezza sempre allacciata durante la guida",
                    "In caso di ribaltamento: NON saltare, restare nel posto guida con cintura"
                ]
            },
            {
                titolo: "6.2 Investimento pedoni",
                cause: [
                    "Mancanza di separazione tra percorsi pedonali e veicolari",
                    "Visibilità ridotta per il carico che ostruisce la vista",
                    "Assenza di segnaletica orizzontale e verticale",
                    "Pedoni con cuffie o distratti dallo smartphone"
                ],
                danni: [
                    "Fratture agli arti inferiori",
                    "Trauma cranico da impatto",
                    "Lesioni addominali da schiacciamento",
                    "Decesso per investimento a velocità elevata"
                ],
                prevenzioni: [
                    "Percorsi pedonali delimitati con barriere e segnaletica a pavimento",
                    "Segnalatori acustici e luminosi (lampeggiante blu/arancione) su ogni carrello",
                    "Specchi parabolici a tutti gli incroci e angoli ciechi",
                    "Divieto di uso di smartphone e cuffie nelle aree operative"
                ]
            },
            {
                titolo: "6.3 Caduta carico",
                cause: [
                    "Carico non correttamente posizionato sulle forche",
                    "Pallet danneggiato o non idoneo al peso",
                    "Mancata reggiatura o filmatura del carico",
                    "Sollevamento troppo rapido che sbilancia il carico"
                ],
                danni: [
                    "Colpito da carico in caduta: trauma cranico, fratture",
                    "Schiacciamento degli arti inferiori",
                    "Danni alle merci sottostanti",
                    "Effetto domino su scaffalature vicine"
                ],
                prevenzioni: [
                    "Verifica integrità del pallet prima del sollevamento",
                    "Carico centrato sulle forche e arretrato contro lo schienale",
                    "Forche inclinate all'indietro durante il trasporto",
                    "Divieto di transitare sotto carichi sospesi"
                ]
            },
            {
                titolo: "6.4 Manutenzione inadeguata",
                cause: [
                    "Mancata manutenzione programmata del carrello",
                    "Freni usurati o non funzionanti",
                    "Perdite di olio idraulico non segnalate",
                    "Check-list pre-utilizzo non compilata"
                ],
                danni: [
                    "Guasto improvviso durante l'operazione di sollevamento",
                    "Mancata frenata con investimento o collisione",
                    "Cedimento del sistema idraulico con caduta del carico",
                    "Incendio per cortocircuito o perdite di fluidi"
                ],
                prevenzioni: [
                    "Check-list di controllo pre-utilizzo obbligatoria a inizio turno",
                    "Programma di manutenzione programmata secondo il manuale del costruttore",
                    "Registro delle manutenzioni aggiornato e accessibile",
                    "Divieto assoluto di utilizzare carrelli con anomalie segnalate"
                ]
            },
            {
                titolo: "6.5 Batterie e ricarica",
                cause: [
                    "Ricarica delle batterie in aree non ventilate",
                    "Manipolazione dell'acido solforico delle batterie al piombo",
                    "Scintille vicino alle batterie in fase di ricarica (emissione di idrogeno)",
                    "Collegamento/scollegamento scorretto dei cavi di ricarica"
                ],
                danni: [
                    "Esplosione per accumulo di idrogeno gassoso",
                    "Ustioni chimiche da acido solforico",
                    "Incendio per cortocircuito",
                    "Intossicazione da vapori acidi"
                ],
                prevenzioni: [
                    "Area di ricarica dedicata con ventilazione forzata antideflagrante",
                    "Divieto di fumo e fiamme libere nell'area di ricarica",
                    "DPI per la manipolazione batterie: guanti acido-resistenti, occhiali, grembiule",
                    "Doccia di emergenza e lavaocchi nell'area di ricarica"
                ]
            },
            {
                titolo: "6.6 Visibilità ridotta",
                cause: [
                    "Carico voluminoso che ostruisce la visuale anteriore",
                    "Corridoi stretti con scarsa illuminazione",
                    "Assenza di specchi agli incroci",
                    "Condizioni atmosferiche avverse in aree esterne (nebbia, pioggia)"
                ],
                danni: [
                    "Collisione con pedoni non visti",
                    "Impatto contro scaffalature o strutture fisse",
                    "Caduta dalla banchina di carico",
                    "Investimento di altri mezzi in manovra"
                ],
                prevenzioni: [
                    "Marcia in retromarcia obbligatoria quando il carico ostruisce la visuale",
                    "Telecamere posteriori installate su tutti i carrelli",
                    "Specchi parabolici ad ogni incrocio e fine corsia",
                    "Illuminazione minima di 150 lux in tutte le aree di transito"
                ]
            }
        ]
    },

    /* ============================
       CAT 7 - INCENDIO (6 rischi)
       ============================ */
    {
        id: "incendio",
        icon: "🔥",
        nome: "Rischi Incendio",
        desc: "Rischi legati a incendio, esplosione, impianti elettrici e gestione delle emergenze",
        rischi: [
            {
                titolo: "7.1 Incendio materiali stoccati",
                cause: [
                    "Stoccaggio di materiali combustibili (cartone, legno, plastica) senza distanze di sicurezza",
                    "Mancato rispetto delle altezze massime di stoccaggio",
                    "Assenza di compartimentazione antincendio",
                    "Impianto sprinkler assente o non funzionante"
                ],
                danni: [
                    "Incendio generalizzato del magazzino (flash-over)",
                    "Intossicazione da fumi tossici",
                    "Ustioni gravi al personale",
                    "Distruzione totale delle merci e della struttura"
                ],
                prevenzioni: [
                    "Compartimentazione REI delle aree di stoccaggio",
                    "Impianto sprinkler dimensionato secondo norma UNI EN 12845",
                    "Distanze di sicurezza tra le cataste di merci",
                    "Divieto assoluto di fumo in tutto il magazzino"
                ]
            },
            {
                titolo: "7.2 Esplosione",
                cause: [
                    "Accumulo di gas infiammabili (GPL da carrelli, idrogeno da batterie)",
                    "Polveri combustibili in sospensione (farine, segatura)",
                    "Sversamento di liquidi infiammabili",
                    "Assenza di rilevatori di gas"
                ],
                danni: [
                    "Esplosione con onda d'urto distruttiva",
                    "Ustioni estese su tutto il corpo",
                    "Crollo strutturale dell'edificio",
                    "Decessi multipli"
                ],
                prevenzioni: [
                    "Classificazione delle zone ATEX (atmosfere esplosive)",
                    "Rilevatori di gas con allarme e sgancio automatico impianti",
                    "Impianti elettrici antideflagranti nelle zone ATEX",
                    "Ventilazione forzata nelle aree a rischio accumulo gas"
                ]
            },
            {
                titolo: "7.3 Vie di fuga ostruite",
                cause: [
                    "Merci depositate lungo i percorsi di esodo",
                    "Uscite di emergenza bloccate o chiuse a chiave",
                    "Segnaletica di emergenza mancante o non illuminata",
                    "Sovraffollamento delle aree di lavoro"
                ],
                danni: [
                    "Impossibilità di evacuazione in caso di emergenza",
                    "Panico e calca durante l'evacuazione",
                    "Intossicazione da fumi per ritardo nell'esodo",
                    "Decessi per mancata evacuazione"
                ],
                prevenzioni: [
                    "Vie di fuga sempre libere: controllo quotidiano obbligatorio",
                    "Uscite di emergenza con maniglione antipanico (apertura a spinta)",
                    "Segnaletica fotoluminescente lungo tutti i percorsi di esodo",
                    "Prove di evacuazione almeno 2 volte all'anno"
                ]
            },
            {
                titolo: "7.4 Impianti elettrici",
                cause: [
                    "Impianto elettrico non a norma o obsoleto",
                    "Sovraccarico delle prese e delle linee elettriche",
                    "Cavi danneggiati o con isolamento deteriorato",
                    "Mancanza di messa a terra o interruttori differenziali"
                ],
                danni: [
                    "Elettrocuzione (folgorazione) dell'operatore",
                    "Incendio di origine elettrica (cortocircuito)",
                    "Ustioni da arco elettrico",
                    "Arresto cardiaco per correnti superiori a 30 mA"
                ],
                prevenzioni: [
                    "Impianto elettrico conforme alla norma CEI 64-8",
                    "Interruttori differenziali (salvavita) da 30 mA su tutte le linee",
                    "Verifica periodica dell'impianto di messa a terra (DPR 462/01)",
                    "Divieto di utilizzo di prolunghe e ciabatte multiple"
                ]
            },
            {
                titolo: "7.5 Mancanza formazione antincendio",
                cause: [
                    "Personale non formato sulla gestione dell'emergenza incendio",
                    "Assenza di addetti antincendio designati",
                    "Mancata conoscenza dell'uso degli estintori",
                    "Piano di emergenza non comunicato ai lavoratori"
                ],
                danni: [
                    "Reazione di panico in caso di incendio",
                    "Mancato utilizzo degli estintori nella fase iniziale",
                    "Evacuazione caotica e disordinata",
                    "Aggravamento dell'incendio per intervento tardivo o errato"
                ],
                prevenzioni: [
                    "Formazione antincendio obbligatoria per tutti (D.M. 02/09/2021)",
                    "Squadra di emergenza addestrata con esercitazioni pratiche annuali",
                    "Piano di emergenza affisso e spiegato a tutti i lavoratori",
                    "Esercitazione pratica con estintori almeno una volta all'anno"
                ]
            },
            {
                titolo: "7.6 Inadeguatezza mezzi estinzione",
                cause: [
                    "Estintori scaduti, scarichi o non revisionati",
                    "Estintori posizionati in punti non accessibili",
                    "Tipo di estintore non adatto alla classe di incendio",
                    "Idranti non funzionanti o senza pressione"
                ],
                danni: [
                    "Impossibilità di spegnere l'incendio nella fase iniziale",
                    "Propagazione rapida e incontrollata delle fiamme",
                    "Falso senso di sicurezza del personale",
                    "Danni strutturali per incendio non contenuto"
                ],
                prevenzioni: [
                    "Revisione semestrale degli estintori (UNI 9994-1)",
                    "Estintori posizionati ogni 15 metri e ben segnalati",
                    "Scelta corretta: polvere ABC per merci solide, CO2 per quadri elettrici",
                    "Collaudo e verifica periodica degli idranti"
                ]
            }
        ]
    },

    /* ============================
       CAT 8 - PSICOSOCIALI/NOTTURNO (3 rischi)
       ============================ */
    {
        id: "psicosociali",
        icon: "🧠",
        nome: "Rischi Psicosociali / Lavoro Notturno",
        desc: "Rischi legati a stress lavoro-correlato, turni notturni e lavoro in condizioni di isolamento",
        rischi: [
            {
                titolo: "8.1 Stress lavoro-correlato",
                cause: [
                    "Ritmi di lavoro intensi con obiettivi di produttività elevati",
                    "Turni irregolari e straordinari frequenti",
                    "Scarsa autonomia decisionale e monotonia delle mansioni",
                    "Clima organizzativo negativo e conflitti interpersonali"
                ],
                danni: [
                    "Sindrome da burnout (esaurimento psicofisico)",
                    "Disturbi d'ansia e depressione",
                    "Disturbi del sonno e dell'alimentazione",
                    "Aumento degli infortuni per calo dell'attenzione"
                ],
                prevenzioni: [
                    "Valutazione dello stress lavoro-correlato obbligatoria (D.Lgs. 81/08 art. 28)",
                    "Rotazione delle mansioni per ridurre la monotonia",
                    "Sportello di ascolto psicologico aziendale",
                    "Pause regolari e rispetto degli orari di lavoro"
                ]
            },
            {
                titolo: "8.2 Lavoro notturno",
                cause: [
                    "Turni notturni continuativi (22:00 - 06:00)",
                    "Alterazione del ritmo circadiano (ciclo sonno-veglia)",
                    "Illuminazione artificiale prolungata",
                    "Ridotta supervisione durante le ore notturne"
                ],
                danni: [
                    "Disturbi del sonno cronici (insonnia)",
                    "Disturbi gastrointestinali (gastrite, colon irritabile)",
                    "Aumento del rischio cardiovascolare",
                    "Calo della vigilanza con aumento del rischio infortuni"
                ],
                prevenzioni: [
                    "Sorveglianza sanitaria specifica per i lavoratori notturni",
                    "Turni notturni massimo per 2 settimane consecutive",
                    "Illuminazione adeguata e aree di ristoro per il turno notturno",
                    "Formazione sulla gestione del sonno e dell'alimentazione"
                ]
            },
            {
                titolo: "8.3 Lavoro isolato",
                cause: [
                    "Operatore solo in turno notturno o in aree remote del magazzino",
                    "Assenza di sistema di comunicazione o allarme uomo a terra",
                    "Nessun collega nelle vicinanze per prestare soccorso",
                    "Aree del magazzino non coperte da telecamere"
                ],
                danni: [
                    "Impossibilità di ricevere soccorso immediato in caso di malore",
                    "Aggressioni o rapine senza possibilità di aiuto",
                    "Ritardo nel soccorso per infortunio non rilevato",
                    "Ansia e disagio psicologico da isolamento"
                ],
                prevenzioni: [
                    "Dispositivo uomo a terra (man-down) obbligatorio per lavoratori isolati",
                    "Sistema di controllo periodico (check-in ogni 30 minuti)",
                    "Copertura completa con telecamere e sistema di allarme",
                    "Divieto di lavoro isolato per operazioni ad alto rischio"
                ]
            }
        ]
    }

]; // FINE ARRAY categorieRischi

/* ========================================
   DOMANDE TEST - 43 DOMANDE (1 per rischio)
   ======================================== */

const domandeTest = [

    // === CAT 1 - MECCANICI ===
    {
        categoria: "meccanici",
        rischio: "1.1",
        domanda: "Qual è la principale causa di distorsioni articolari in magazzino?",
        opzioni: [
            "Movimenti bruschi su pavimentazione irregolare con calzature non idonee",
            "Esposizione prolungata al rumore ambientale",
            "Utilizzo del computer per troppe ore consecutive",
            "Inalazione di polveri sottili durante lo stoccaggio"
        ],
        corretta: 0,
        spiegazione: "Le distorsioni articolari sono causate principalmente da movimenti bruschi durante la movimentazione dei carichi, aggravate da pavimentazione irregolare e calzature non idonee. È obbligatorio l'uso di scarpe antinfortunistiche con supporto alla caviglia."
    },
    {
        categoria: "meccanici",
        rischio: "1.2",
        domanda: "Qual è il peso massimo sollevabile da un singolo lavoratore maschio adulto secondo la normativa?",
        opzioni: [
            "30 kg",
            "25 kg",
            "20 kg",
            "35 kg"
        ],
        corretta: 1,
        spiegazione: "Secondo il D.Lgs. 81/08 e le linee guida NIOSH, il peso massimo raccomandato per un lavoratore maschio adulto è di 25 kg. Per le donne il limite è di 15-20 kg. Superati questi limiti è obbligatorio l'uso di ausili meccanici."
    },
    {
        categoria: "meccanici",
        rischio: "1.3",
        domanda: "La sindrome del tunnel carpale in magazzino è causata principalmente da:",
        opzioni: [
            "Esposizione al freddo nelle celle frigorifere",
            "Movimenti ripetitivi del polso: scansione, confezionamento, uso di taglierini",
            "Sollevamento di carichi superiori a 25 kg",
            "Vibrazioni trasmesse dal carrello elevatore"
        ],
        corretta: 1,
        spiegazione: "La sindrome del tunnel carpale è una neuropatia da compressione del nervo mediano al polso, causata da movimenti ripetitivi di flessione/estensione. In magazzino le attività a rischio sono: scansione codici, confezionamento manuale, uso continuo di cutter."
    },
    {
        categoria: "meccanici",
        rischio: "1.4",
        domanda: "Le tendiniti in ambito lavorativo di magazzino sono provocate da:",
        opzioni: [
            "Esposizione a sostanze chimiche tossiche",
            "Sforzi ripetuti e sovraccarico funzionale dei tendini senza adeguato riposo",
            "Temperature troppo elevate nell'ambiente di lavoro",
            "Illuminazione insufficiente nelle aree di picking"
        ],
        corretta: 1,
        spiegazione: "Le tendiniti sono infiammazioni dei tendini causate da sforzi ripetuti, sovraccarico biomeccanico e mancanza di pause. La prevenzione include la rotazione delle mansioni, pause regolari e stretching dei muscoli interessati."
    },
    {
        categoria: "meccanici",
        rischio: "1.5",
        domanda: "Quali patologie degli arti inferiori sono più frequenti tra i magazzinieri?",
        opzioni: [
            "Sindrome del tunnel carpale e epicondilite",
            "Gonalgia (dolore al ginocchio), fascite plantare e varici",
            "Dermatite da contatto e orticaria",
            "Cefalea cronica e disturbi visivi"
        ],
        corretta: 1,
        spiegazione: "I magazzinieri sono esposti a patologie degli arti inferiori per la postura eretta prolungata e i continui spostamenti: gonalgia, fascite plantare, varici degli arti inferiori. La prevenzione include calzature ergonomiche, tappetini antifatica e pause regolari."
    },
    {
        categoria: "meccanici",
        rischio: "1.6",
        domanda: "Le ernie discali in magazzino sono causate principalmente da:",
        opzioni: [
            "Esposizione a vibrazioni del corpo intero e sollevamento scorretto dei carichi",
            "Inalazione di polveri durante le operazioni di pulizia",
            "Contatto con sostanze chimiche aggressive",
            "Lavoro prolungato al videoterminale"
        ],
        corretta: 0,
        spiegazione: "Le ernie discali sono causate dalla fuoriuscita del nucleo polposo del disco intervertebrale, provocata da sollevamento scorretto (con la schiena anziché con le gambe), vibrazioni del corpo intero (guida carrelli) e posture incongrue prolungate."
    },
    {
        categoria: "meccanici",
        rischio: "1.7",
        domanda: "Quale approccio è più efficace per prevenire l'insieme dei rischi meccanici in magazzino?",
        opzioni: [
            "Limitarsi a fornire i DPI senza formazione",
            "Combinazione di valutazione ergonomica, formazione, rotazione mansioni e ausili meccanici",
            "Aumentare il numero di ore lavorative per ridurre i tempi di esposizione",
            "Affidarsi esclusivamente alla sorveglianza sanitaria"
        ],
        corretta: 1,
        spiegazione: "La prevenzione efficace dei rischi meccanici richiede un approccio integrato: valutazione ergonomica delle postazioni (NIOSH, OCRA), formazione pratica dei lavoratori, rotazione delle mansioni, ausili meccanici (transpallet, sollevatori) e sorveglianza sanitaria periodica."
    },

    // === CAT 2 - TRAUMATICI ===
    {
        categoria: "traumatici",
        rischio: "2.1",
        domanda: "Qual è la principale misura di protezione contro la caduta di materiali dall'alto?",
        opzioni: [
            "Indossare guanti antitaglio in tutte le aree",
            "Casco di protezione obbligatorio + reti anticaduta sulle scaffalature",
            "Aumentare l'illuminazione nelle aree di stoccaggio",
            "Utilizzare solo carrelli con cabina chiusa"
        ],
        corretta: 1,
        spiegazione: "Per la protezione dalla caduta di materiali dall'alto: casco obbligatorio (EN 397) nelle aree di carico/scarico, reti e correnti di protezione sulle scaffalature, rispetto dei limiti di carico per ripiano e verifica periodica dell'integrità degli scaffali."
    },
    {
        categoria: "traumatici",
        rischio: "2.2",
        domanda: "Il rischio di schiacciamento in magazzino si verifica principalmente:",
        opzioni: [
            "Durante le operazioni al videoterminale",
            "Tra parti mobili di macchinari, merci in movimento e strutture fisse",
            "Per esposizione prolungata a temperature elevate",
            "Per contatto con sostanze chimiche corrosive"
        ],
        corretta: 1,
        spiegazione: "Lo schiacciamento avviene tra elementi in movimento (carrelli, nastri trasportatori, porte automatiche) e strutture fisse (scaffalature, muri, colonne). La prevenzione include protezioni antischiacciamento, sensori di prossimità e formazione specifica."
    },
    {
        categoria: "traumatici",
        rischio: "2.3",
        domanda: "Per prevenire scivolamenti e cadute in magazzino è prioritario:",
        opzioni: [
            "Installare un impianto sprinkler in tutto il magazzino",
            "Mantenere i pavimenti puliti e asciutti, segnalare zone bagnate, calzature antiscivolo",
            "Indossare guanti resistenti al taglio",
            "Ridurre il numero di operatori per turno"
        ],
        corretta: 1,
        spiegazione: "Lo scivolamento è tra le prime cause di infortunio. La prevenzione include: pulizia immediata di liquidi versati, segnaletica 'pavimento bagnato', calzature antiscivolo (SRC), illuminazione adeguata (min 150 lux) e eliminazione di cavi/ostacoli a terra."
    },
    {
        categoria: "traumatici",
        rischio: "2.4",
        domanda: "Le collisioni con oggetti in movimento si prevengono con:",
        opzioni: [
            "Segnaletica, percorsi separati e segnalatori acustici/luminosi sui mezzi",
            "Solo l'utilizzo di caschi protettivi",
            "Aumento della velocità dei mezzi per ridurre i tempi di esposizione",
            "Eliminazione di tutti i mezzi meccanici dal magazzino"
        ],
        corretta: 0,
        spiegazione: "La prevenzione delle collisioni richiede: separazione fisica tra percorsi pedonali e veicolari, segnaletica orizzontale e verticale, segnalatori acustici e lampeggianti sui mezzi, specchi parabolici agli incroci e limite di velocità."
    },
    {
        categoria: "traumatici",
        rischio: "2.5",
        domanda: "In caso di ribaltamento del carrello elevatore, l'operatore deve:",
        opzioni: [
            "Saltare fuori dal carrello il più rapidamente possibile",
            "Restare nel posto guida con cintura allacciata e tenersi saldamente",
            "Sterzare bruscamente nella direzione opposta",
            "Alzare le forche al massimo per controbilanciare"
        ],
        corretta: 1,
        spiegazione: "In caso di ribaltamento NON bisogna mai saltare fuori: il carrello può rotolare e schiacciare l'operatore. La procedura corretta è restare nel posto guida con la cintura allacciata, tenersi saldamente al volante e inclinarsi nella direzione opposta al ribaltamento."
    },
    {
        categoria: "traumatici",
        rischio: "2.6",
        domanda: "Per ridurre il rischio di tagli e ferite in magazzino è necessario:",
        opzioni: [
            "Utilizzare cutter con lama fissa per maggiore precisione",
            "Guanti antitaglio (min. livello 3), cutter con lama retrattile e formazione",
            "Lavorare più velocemente per ridurre il tempo di esposizione",
            "Eliminare tutti gli imballaggi in cartone"
        ],
        corretta: 1,
        spiegazione: "La prevenzione dei tagli richiede: guanti antitaglio certificati (min. livello 3 EN 388), cutter con lama retrattile a sicurezza, formazione sull'uso corretto degli strumenti da taglio e kit di primo soccorso accessibile in ogni area."
    },

    // === CAT 3 - POSTURALI/MMC ===
    {
        categoria: "posturali",
        rischio: "3.1",
        domanda: "Il metodo di valutazione del rischio da movimenti ripetitivi degli arti superiori è:",
        opzioni: [
            "Metodo NIOSH per il sollevamento",
            "Metodo OCRA (Occupational Repetitive Actions)",
            "Metodo Snook e Ciriello",
            "Metodo REBA per le posture"
        ],
        corretta: 1,
        spiegazione: "Il metodo OCRA (ISO 11228-3) è lo strumento specifico per valutare il rischio da movimenti ripetitivi degli arti superiori. Analizza frequenza dei gesti, forza richiesta, postura, mancanza di recupero e fattori complementari."
    },
    {
        categoria: "posturali",
        rischio: "3.2",
        domanda: "Per prevenire le posture incongrue, i prodotti più movimentati devono essere stoccati:",
        opzioni: [
            "Nei livelli più alti per liberare spazio a terra",
            "Tra 70 e 150 cm da terra (altezza ergonomica di prelievo)",
            "A livello del pavimento per facilitare l'accesso",
            "In modo casuale per velocizzare le operazioni"
        ],
        corretta: 1,
        spiegazione: "La fascia ergonomica di prelievo è tra 70 e 150 cm da terra: minimizza le flessioni del busto e le estensioni delle braccia. I prodotti ad alta rotazione vanno posizionati in questa fascia, quelli meno movimentati nei livelli superiori o inferiori."
    },
    {
        categoria: "posturali",
        rischio: "3.3",
        domanda: "Il metodo NIOSH per la valutazione degli sforzi eccessivi calcola:",
        opzioni: [
            "Il livello di rumore nell'ambiente di lavoro",
            "Il peso limite raccomandato in funzione di fattori biomeccanici (altezza, distanza, frequenza, torsione)",
            "La concentrazione di polveri nell'aria",
            "Il rischio di incendio nelle aree di stoccaggio"
        ],
        corretta: 1,
        spiegazione: "Il metodo NIOSH (Revised Lifting Equation) calcola il peso limite raccomandato considerando: altezza di presa, distanza orizzontale, dislocazione verticale, frequenza di sollevamento, angolo di torsione e qualità della presa. L'indice di sollevamento >1 indica rischio."
    },

    // === CAT 4 - CHIMICI/BIOLOGICI ===
    {
        categoria: "chimici",
        rischio: "4.1",
        domanda: "La protezione dalle polveri e dal particolato in magazzino richiede:",
        opzioni: [
            "Solo una buona illuminazione delle aree di lavoro",
            "Maschere FFP2/FFP3, aspirazione localizzata e ventilazione adeguata",
            "Guanti antitaglio e scarpe antinfortunistiche",
            "Caschi protettivi in tutte le aree"
        ],
        corretta: 1,
        spiegazione: "Per la protezione da polveri e particolato: maschere filtranti FFP2 (polveri non tossiche) o FFP3 (polveri tossiche), impianti di aspirazione localizzata, ventilazione generale dell'ambiente e pulizia regolare con aspiratori industriali (mai aria compressa)."
    },
    {
        categoria: "chimici",
        rischio: "4.2",
        domanda: "Le Schede Dati di Sicurezza (SDS) delle sostanze chimiche devono:",
        opzioni: [
            "Essere conservate solo nell'ufficio del direttore",
            "Essere accessibili a tutti i lavoratori esposti, aggiornate e in lingua comprensibile",
            "Essere consultate solo dal medico competente",
            "Essere disponibili solo in formato cartaceo"
        ],
        corretta: 1,
        spiegazione: "Le SDS (Regolamento REACH, 16 sezioni) devono essere accessibili a tutti i lavoratori che utilizzano o possono venire a contatto con la sostanza, aggiornate, in italiano e disponibili sia in formato cartaceo che digitale nel punto di utilizzo."
    },
    {
        categoria: "chimici",
        rischio: "4.3",
        domanda: "Gli allergeni e i sensibilizzanti in magazzino possono causare:",
        opzioni: [
            "Solo disturbi gastrointestinali",
            "Dermatite allergica da contatto, asma professionale e rinite",
            "Esclusivamente mal di testa",
            "Solo arrossamento temporaneo degli occhi"
        ],
        corretta: 1,
        spiegazione: "Gli allergeni professionali (lattice dei guanti, polveri di legno, muffe, sostanze chimiche) possono causare: dermatite allergica da contatto (DAC), asma professionale, rinite allergica e in casi gravi shock anafilattico. La prevenzione include l'uso di guanti in nitrile al posto del lattice."
    },
    {
        categoria: "chimici",
        rischio: "4.4",
        domanda: "Il rischio infettivo in magazzino è legato a:",
        opzioni: [
            "Solo alla presenza di animali selvatici",
            "Contatto con merci contaminate, rifiuti biologici, scarsa igiene e presenza di roditori",
            "Esclusivamente alla temperatura dell'ambiente",
            "Solo all'utilizzo di carrelli elevatori"
        ],
        corretta: 1,
        spiegazione: "Il rischio infettivo in magazzino può derivare da: manipolazione di merci contaminate (specie alimentari), contatto con rifiuti, ferite infette, presenza di roditori e insetti, scarsa igiene delle mani e degli ambienti. La prevenzione include igiene personale, guanti monouso e derattizzazione."
    },
    {
        categoria: "chimici",
        rischio: "4.5",
        domanda: "I gas di scarico dei carrelli a motore endotermico contengono:",
        opzioni: [
            "Solo vapore acqueo innocuo",
            "Monossido di carbonio (CO), ossidi di azoto (NOx) e particolato diesel",
            "Esclusivamente anidride carbonica (CO2)",
            "Solo ozono e ossigeno"
        ],
        corretta: 1,
        spiegazione: "I carrelli a motore endotermico (diesel, GPL) emettono: monossido di carbonio (CO, tossico), ossidi di azoto (NOx, irritanti), particolato diesel (cancerogeno IARC gruppo 1) e idrocarburi incombusti. In ambienti chiusi è obbligatorio l'uso di carrelli elettrici o catalizzatori."
    },
    {
        categoria: "chimici",
        rischio: "4.6",
        domanda: "Il rischio biologico in magazzino si gestisce prioritariamente con:",
        opzioni: [
            "Installazione di impianti antincendio",
            "Igiene degli ambienti, derattizzazione, DPI barriera e vaccinazioni se indicate",
            "Aumento dell'illuminazione artificiale",
            "Riduzione della velocità dei carrelli"
        ],
        corretta: 1,
        spiegazione: "La gestione del rischio biologico (Titolo X D.Lgs. 81/08) prevede: pulizia e sanificazione degli ambienti, derattizzazione e disinfestazione periodica, DPI barriera (guanti monouso, mascherine), vaccinazione antitetanica e sorveglianza sanitaria specifica."
    },

    // === CAT 5 - AMBIENTALI ===
    {
        categoria: "ambientali",
        rischio: "5.1",
        domanda: "Il valore limite di esposizione al rumore oltre il quale i DPI uditivi sono obbligatori è:",
        opzioni: [
            "80 dB(A) LEX",
            "85 dB(A) LEX",
            "90 dB(A) LEX",
            "75 dB(A) LEX"
        ],
        corretta: 1,
        spiegazione: "Secondo il D.Lgs. 81/08 (Capo II Titolo VIII): a 80 dB(A) il datore deve fornire i DPI; a 85 dB(A) l'uso dei DPI uditivi è obbligatorio, la sorveglianza sanitaria è attivata e le aree devono essere segnalate. Il valore limite invalicabile è 87 dB(A) con DPI."
    },
    {
        categoria: "ambientali",
        rischio: "5.2",
        domanda: "Le vibrazioni trasmesse al sistema mano-braccio (HAV) in magazzino sono causate da:",
        opzioni: [
            "Utilizzo prolungato del videoterminale",
            "Utilizzo di transpallet manuali, avvitatori e utensili vibranti",
            "Esposizione al rumore superiore a 85 dB",
            "Sollevamento manuale di carichi pesanti"
        ],
        corretta: 1,
        spiegazione: "Le vibrazioni HAV (mano-braccio) derivano dall'uso di utensili vibranti e transpallet manuali. Le vibrazioni WBV (corpo intero) derivano dalla guida di carrelli elevatori. La prevenzione include manutenzione degli utensili, guanti antivibranti e sedili ammortizzati."
    },
    {
        categoria: "ambientali",
        rischio: "5.3",
        domanda: "Il livello minimo di illuminazione raccomandato per le aree di lavoro in magazzino è:",
        opzioni: [
            "50 lux",
            "100 lux",
            "150 lux per aree di transito e 300 lux per aree di picking/lettura",
            "500 lux in tutte le aree"
        ],
        corretta: 2,
        spiegazione: "Secondo la norma UNI EN 12464-1: le aree di transito richiedono minimo 150 lux, le aree di picking e lettura etichette 300 lux, le aree di carico/scarico 150 lux. L'illuminazione deve essere uniforme, senza zone d'ombra e senza abbagliamento."
    },
    {
        categoria: "ambientali",
        rischio: "5.4",
        domanda: "Le radiazioni a cui può essere esposto un magazziniere sono principalmente:",
        opzioni: [
            "Radiazioni nucleari gamma",
            "Radiazioni UV solari (aree esterne), infrarosse (ambienti caldi) e ottiche artificiali",
            "Solo raggi X da scanner industriali",
            "Esclusivamente microonde"
        ],
        corretta: 1,
        spiegazione: "In magazzino le radiazioni più comuni sono: UV solari per chi lavora in aree esterne o baie di carico, radiazioni infrarosse in ambienti caldi, radiazioni ottiche artificiali (saldatura occasionale). La prevenzione include protezioni solari, occhiali filtranti e limitazione dell'esposizione."
    },
    {
        categoria: "ambientali",
        rischio: "5.5",
        domanda: "I campi elettromagnetici (CEM) in magazzino sono generati principalmente da:",
        opzioni: [
            "Solo dai telefoni cellulari dei lavoratori",
            "Sistemi RFID, stazioni di ricarica batterie e impianti ad alta tensione",
            "Esclusivamente dai forni a microonde della mensa",
            "Solo dalle lampade fluorescenti"
        ],
        corretta: 1,
        spiegazione: "Le principali fonti CEM in magazzino sono: sistemi RFID ad alta potenza per la tracciabilità, stazioni di ricarica batterie dei carrelli, impianti elettrici ad alta tensione e dispositivi wireless industriali. Particolare attenzione per portatori di pacemaker."
    },
    {
        categoria: "ambientali",
        rischio: "5.6",
        domanda: "Per lavorare in sicurezza nelle celle frigorifere è necessario:",
        opzioni: [
            "Solo una giacca pesante personale",
            "DPI termici completi (tuta, guanti, copricapo), pause in ambienti caldi e turni limitati",
            "Aumentare il ritmo di lavoro per scaldarsi",
            "Bere bevande alcoliche per resistere al freddo"
        ],
        corretta: 1,
        spiegazione: "Il lavoro in celle frigorifere richiede: tuta termica certificata, guanti termici, copricapo, calzature isolanti. Pause obbligatorie in ambienti riscaldati (10 min ogni ora sotto -5°C), turni limitati e sorveglianza sanitaria specifica."
    },

    // === CAT 6 - CARRELLI ===
    {
        categoria: "carrelli",
        rischio: "6.1",
        domanda: "Durante il transito con carico, le forche del carrello devono essere:",
        opzioni: [
            "Alzate al massimo per vedere meglio la strada",
            "Abbassate a 15-20 cm da terra e inclinate all'indietro",
            "Posizionate a 1 metro da terra per evitare ostacoli",
            "Completamente a terra strisciando sul pavimento"
        ],
        corretta: 1,
        spiegazione: "Durante il transito le forche devono essere abbassate a 15-20 cm da terra e inclinate all'indietro (montante reclinato). Questo abbassa il baricentro del carrello, riduce il rischio di ribaltamento e garantisce stabilità. Forche alte = baricentro alto = rischio ribaltamento."
    },
    {
        categoria: "carrelli",
        rischio: "6.2",
        domanda: "Per prevenire l'investimento dei pedoni, i percorsi in magazzino devono essere:",
        opzioni: [
            "Tutti percorribili indistintamente da mezzi e persone",
            "Fisicamente separati: percorsi pedonali delimitati da barriere con segnaletica a pavimento",
            "Riservati esclusivamente ai carrelli durante tutto il turno",
            "Privi di qualsiasi segnaletica per non creare confusione"
        ],
        corretta: 1,
        spiegazione: "La separazione dei percorsi è fondamentale: corsie pedonali delimitate con barriere fisiche (guard-rail, paracolpi) e segnaletica orizzontale (strisce gialle/bianche). Specchi parabolici agli incroci, segnalatori acustici e luminosi sui carrelli."
    },
    {
        categoria: "carrelli",
        rischio: "6.3",
        domanda: "Prima di sollevare un carico con il carrello è obbligatorio verificare:",
        opzioni: [
            "Solo il peso indicato sull'etichetta",
            "Integrità del pallet, centratura del carico sulle forche e stabilità della filmatura",
            "Solo che il carrello abbia carburante sufficiente",
            "Che non ci siano telecamere nella zona"
        ],
        corretta: 1,
        spiegazione: "Prima del sollevamento: verificare integrità del pallet (no tavole rotte), centrare il carico sulle forche, arretrarlo contro lo schienale, verificare la filmatura/reggiatura. Il carico deve essere stabile e non superare la portata indicata sulla targhetta del carrello."
    },
    {
        categoria: "carrelli",
        rischio: "6.4",
        domanda: "La check-list di controllo pre-utilizzo del carrello deve essere compilata:",
        opzioni: [
            "Una volta al mese dal responsabile di magazzino",
            "A inizio di ogni turno dall'operatore che utilizza il carrello",
            "Solo quando si nota un'anomalia evidente",
            "Una volta all'anno durante la revisione"
        ],
        corretta: 1,
        spiegazione: "La check-list pre-utilizzo è obbligatoria a inizio di ogni turno e deve essere compilata dall'operatore: controllo freni, sterzo, luci, clacson, livello olio, pneumatici, forche, cintura. Eventuali anomalie devono essere segnalate immediatamente e il carrello messo fuori servizio."
    },
    {
        categoria: "carrelli",
        rischio: "6.5",
        domanda: "L'area di ricarica batterie deve avere come requisito essenziale:",
        opzioni: [
            "Essere vicina alle aree di stoccaggio per comodità",
            "Ventilazione forzata antideflagrante per disperdere l'idrogeno emesso",
            "Temperatura ambiente superiore a 30°C per accelerare la ricarica",
            "Essere completamente chiusa senza aperture"
        ],
        corretta: 1,
        spiegazione: "Durante la ricarica, le batterie al piombo emettono idrogeno (gas esplosivo). L'area deve avere: ventilazione forzata antideflagrante, divieto di fumo e fiamme, DPI acido-resistenti, doccia di emergenza e lavaocchi, pavimento resistente agli acidi."
    },
    {
        categoria: "carrelli",
        rischio: "6.6",
        domanda: "Quando il carico ostruisce la visuale anteriore, l'operatore del carrello deve:",
        opzioni: [
            "Sporgersi lateralmente per vedere oltre il carico",
            "Procedere obbligatoriamente in retromarcia",
            "Aumentare la velocità per ridurre il tempo di guida cieca",
            "Chiedere al collega di guidarlo a voce"
        ],
        corretta: 1,
        spiegazione: "Quando il carico ostruisce la visuale è obbligatoria la marcia in retromarcia, guardando nella direzione di marcia. In alternativa: farsi guidare da un segnalatore a terra o utilizzare carrelli dotati di telecamera posteriore. Mai procedere alla cieca."
    },

    // === CAT 7 - INCENDIO ===
    {
        categoria: "incendio",
        rischio: "7.1",
        domanda: "Per prevenire l'incendio dei materiali stoccati è fondamentale:",
        opzioni: [
            "Stoccare tutto il materiale in un'unica area per controllo più facile",
            "Compartimentazione REI, impianto sprinkler e distanze di sicurezza tra le cataste",
            "Utilizzare solo illuminazione a candela nelle aree di stoccaggio",
            "Tenere le porte tagliafuoco sempre aperte per facilitare il passaggio"
        ],
        corretta: 1,
        spiegazione: "La prevenzione incendio per materiali stoccati richiede: compartimentazione REI (Resistenza, Ermeticità, Isolamento), impianto sprinkler (UNI EN 12845), distanze di sicurezza tra cataste, divieto di fumo e rilevatori di fumo collegati a centrale di allarme."
    },
    {
        categoria: "incendio",
        rischio: "7.2",
        domanda: "Le zone ATEX in magazzino sono aree dove:",
        opzioni: [
            "È vietato l'accesso a tutti i lavoratori",
            "Possono formarsi atmosfere esplosive per la presenza di gas o polveri combustibili",
            "La temperatura supera i 50°C",
            "Sono stoccate merci di valore elevato"
        ],
        corretta: 1,
        spiegazione: "Le zone ATEX (ATmosphères EXplosibles, Direttive 99/92/CE e 2014/34/UE) sono aree dove possono formarsi miscele esplosive aria-gas o aria-polveri. In magazzino: aree ricarica batterie (idrogeno), stoccaggio solventi, lavorazione legno (segatura). Richiedono impianti antideflagranti."
    },
    {
        categoria: "incendio",
        rischio: "7.3",
        domanda: "Le vie di fuga in magazzino devono:",
        opzioni: [
            "Essere utilizzate anche come aree di stoccaggio temporaneo",
            "Essere sempre libere, con uscite a maniglione antipanico e segnaletica fotoluminescente",
            "Essere chiuse a chiave per impedire furti",
            "Avere una larghezza minima di 50 cm"
        ],
        corretta: 1,
        spiegazione: "Le vie di fuga devono: essere sempre libere da ostacoli (controllo quotidiano), avere uscite con maniglione antipanico (apertura a spinta verso l'esterno), segnaletica fotoluminescente, illuminazione di emergenza e larghezza minima 120 cm (UNI EN ISO 7010)."
    },
    {
        categoria: "incendio",
        rischio: "7.4",
        domanda: "Gli interruttori differenziali (salvavita) proteggono l'operatore da:",
        opzioni: [
            "Incendio delle merci stoccate",
            "Elettrocuzione: intervengono staccando la corrente a 30 mA di dispersione",
            "Caduta di materiali dall'alto",
            "Esposizione al rumore"
        ],
        corretta: 1,
        spiegazione: "L'interruttore differenziale (salvavita) rileva la corrente di dispersione verso terra e scatta a 30 mA, proteggendo dalla folgorazione. A 30 mA la corrente è già pericolosa (soglia di fibrillazione ventricolare). Obbligatorio su tutte le linee (norma CEI 64-8)."
    },
    {
        categoria: "incendio",
        rischio: "7.5",
        domanda: "La formazione antincendio per i lavoratori è:",
        opzioni: [
            "Facoltativa e a discrezione del datore di lavoro",
            "Obbligatoria per tutti i lavoratori secondo il D.M. 02/09/2021",
            "Necessaria solo per i vigili del fuoco",
            "Richiesta solo nei magazzini con più di 100 dipendenti"
        ],
        corretta: 1,
        spiegazione: "Il D.M. 02/09/2021 (in vigore dal 04/10/2022) rende obbligatoria la formazione antincendio per tutti i lavoratori (livello 1, 2 o 3 in base al rischio). Gli addetti antincendio devono frequentare corsi specifici con esercitazione pratica e aggiornamento periodico."
    },
    {
        categoria: "incendio",
        rischio: "7.6",
        domanda: "Per un incendio di un quadro elettrico, l'estintore corretto è:",
        opzioni: [
            "Estintore ad acqua",
            "Estintore a CO2 (anidride carbonica)",
            "Estintore a schiuma",
            "Un secchio d'acqua"
        ],
        corretta: 1,
        spiegazione: "Per incendi di origine elettrica (ex classe E, ora inclusa nelle classi A/B con indicazione specifica): estintore a CO2 (anidride carbonica), che non conduce elettricità e non lascia residui. Mai acqua o schiuma su quadri elettrici sotto tensione! L'estintore a polvere ABC è utilizzabile ma lascia residui corrosivi."
    },

    // === CAT 8 - PSICOSOCIALI/NOTTURNO ===
    {
        categoria: "psicosociali",
        rischio: "8.1",
        domanda: "La valutazione dello stress lavoro-correlato è:",
        opzioni: [
            "Facoltativa e consigliata solo per aziende con più di 500 dipendenti",
            "Obbligatoria per tutti i datori di lavoro ai sensi dell'art. 28 D.Lgs. 81/08",
            "Necessaria solo su richiesta dei lavoratori",
            "Di competenza esclusiva del medico di base"
        ],
        corretta: 1,
        spiegazione: "L'art. 28 del D.Lgs. 81/08 obbliga tutti i datori di lavoro a valutare anche i rischi da stress lavoro-correlato, secondo le indicazioni della Commissione Consultiva del 2010. La valutazione prevede una fase preliminare (oggettiva) e, se necessario, una fase approfondita (soggettiva)."
    },
    {
        categoria: "psicosociali",
        rischio: "8.2",
        domanda: "Il lavoro notturno (22:00 - 06:00) comporta come rischio specifico:",
        opzioni: [
            "Solo una maggiore stanchezza temporanea",
            "Alterazione del ritmo circadiano con disturbi del sonno, gastro-intestinali e cardiovascolari",
            "Esclusivamente rischio di aggressioni",
            "Nessun rischio specifico se si dorme di giorno"
        ],
        corretta: 1,
        spiegazione: "Il lavoro notturno altera il ritmo circadiano causando: disturbi del sonno cronici, disturbi gastrointestinali, aumento del rischio cardiovascolare (+40% secondo studi epidemiologici), calo della vigilanza (picco di sonnolenza 02:00-04:00) con aumento degli infortuni. Sorveglianza sanitaria specifica obbligatoria."
    },
    {
        categoria: "psicosociali",
        rischio: "8.3",
        domanda: "Per il lavoratore isolato in magazzino è obbligatorio:",
        opzioni: [
            "Nessuna misura specifica, basta un telefono cellulare",
            "Dispositivo uomo a terra (man-down) e sistema di controllo periodico (check-in)",
            "Lavorare sempre con la porta chiusa a chiave",
            "Avere un'arma di difesa personale"
        ],
        corretta: 1,
        spiegazione: "Il lavoratore isolato deve avere: dispositivo uomo a terra (man-down) che rileva cadute e immobilità prolungata inviando allarme automatico, sistema di check-in periodico (ogni 30 min), copertura telecamere e divieto di lavoro isolato per operazioni ad alto rischio."
    }
];


/* ========================================
   FUNZIONI DELL'APPLICAZIONE
   ======================================== */

// === STATE MANAGEMENT ===
let currentView = 'home';
let currentCategory = null;
let currentRischio = null;
let testState = {
    domande: [],
    corrente: 0,
    risposte: [],
    punteggio: 0,
    completato: false
};

// === INIZIALIZZAZIONE ===
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    setupNavigation();
    loadProgress();
});

function setupNavigation() {
    document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget.getAttribute('data-nav');
            navigateTo(target);
        });
    });
}

function navigateTo(view, data = null) {
    currentView = view;
    
    // Aggiorna navigazione attiva
    document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.classList.remove('active', 'border-cyan-400', 'text-cyan-400');
        btn.classList.add('text-gray-400');
    });
    const activeBtn = document.querySelector(`[data-nav="${view}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'border-cyan-400', 'text-cyan-400');
        activeBtn.classList.remove('text-gray-400');
    }

    const mainContent = document.getElementById('main-content');
    
    switch(view) {
        case 'home':
            renderHome();
            break;
        case 'lezioni':
            renderLezioni();
            break;
        case 'test':
            renderTestHome();
            break;
        case 'statistiche':
            renderStatistiche();
            break;
        case 'categoria':
            renderCategoria(data);
            break;
        case 'rischio':
            renderRischio(data);
            break;
        case 'test-run':
            startTest(data);
            break;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ========================================
   RENDER HOME
   ======================================== */
function renderHome() {
    const main = document.getElementById('main-content');
    const progress = getProgress();
    const totalRischi = 43;
    const studiedCount = progress.studied ? progress.studied.length : 0;
    const percentuale = Math.round((studiedCount / totalRischi) * 100);
    
    main.innerHTML = `
        <div class="max-w-6xl mx-auto">
            <!-- Hero -->
            <div class="text-center mb-10">
                <div class="text-6xl mb-4">🏭</div>
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-3">
                    Sicurezza in Magazzino
                </h1>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                    8 Categorie • 43 Rischi • 43 Domande Test
                </p>
            </div>

            <!-- Progresso generale -->
            <div class="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-6 mb-8">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-gray-300 font-medium">Progresso generale</span>
                    <span class="text-cyan-400 font-bold">${studiedCount}/${totalRischi} rischi studiati</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-3">
                    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-700" 
                         style="width: ${percentuale}%"></div>
                </div>
                <div class="text-right mt-1">
                    <span class="text-gray-500 text-sm">${percentuale}%</span>
                </div>
            </div>

            <!-- Grid categorie -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                ${categorieRischi.map((cat, i) => {
                    const catStudied = cat.rischi.filter(r => 
                        progress.studied && progress.studied.includes(r.titolo)
                    ).length;
                    const catTotal = cat.rischi.length;
                    const catPerc = Math.round((catStudied / catTotal) * 100);
                    
                    return `
                    <div class="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-5 
                                hover:border-cyan-500/50 transition-all duration-300 cursor-pointer
                                hover:transform hover:scale-[1.02]"
                         onclick="navigateTo('categoria', '${cat.id}')">
                        <div class="text-3xl mb-3">${cat.icon}</div>
                        <h3 class="text-white font-semibold text-sm mb-1">${cat.nome}</h3>
                        <p class="text-gray-500 text-xs mb-3">${catTotal} rischi</p>
                        <div class="w-full bg-gray-700 rounded-full h-1.5">
                            <div class="bg-cyan-500 h-1.5 rounded-full transition-all" 
                                 style="width: ${catPerc}%"></div>
                        </div>
                        <p class="text-gray-500 text-xs mt-1">${catStudied}/${catTotal}</p>
                    </div>`;
                }).join('')}
            </div>

            <!-- Azioni rapide -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onclick="navigateTo('lezioni')" 
                        class="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 
                               text-white rounded-xl p-6 text-left transition-all duration-300 hover:scale-[1.02]">
                    <div class="text-2xl mb-2">📖</div>
                    <h3 class="font-bold text-lg">Studia le Lezioni</h3>
                    <p class="text-cyan-100 text-sm mt-1">Approfondisci tutti i 43 rischi con cause, danni e prevenzione</p>
                </button>
                <button onclick="navigateTo('test')" 
                        class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
                               text-white rounded-xl p-6 text-left transition-all duration-300 hover:scale-[1.02]">
                    <div class="text-2xl mb-2">✍️</div>
                    <h3 class="font-bold text-lg">Fai il Test</h3>
                    <p class="text-purple-100 text-sm mt-1">Verifica la tua preparazione con 43 domande a risposta multipla</p>
                </button>
            </div>
        </div>
    `;
}


/* ========================================
   RENDER LEZIONI
   ======================================== */
function renderLezioni() {
    const main = document.getElementById('main-content');
    const progress = getProgress();
    
    main.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-8">
                <button onclick="navigateTo('home')" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <h2 class="text-2xl font-bold text-white">📖 Lezioni</h2>
            </div>

            <div class="space-y-4">
                ${categorieRischi.map(cat => {
                    const catStudied = cat.rischi.filter(r => 
                        progress.studied && progress.studied.includes(r.titolo)
                    ).length;
                    
                    return `
                    <div class="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl overflow-hidden">
                        <div class="p-5 cursor-pointer hover:bg-gray-700/30 transition-colors"
                             onclick="navigateTo('categoria', '${cat.id}')">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <span class="text-2xl">${cat.icon}</span>
                                    <div>
                                        <h3 class="text-white font-semibold">${cat.nome}</h3>
                                        <p class="text-gray-500 text-sm">${cat.desc}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                                        ${catStudied}/${cat.rischi.length}
                                    </span>
                                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;
}


/* ========================================
   RENDER CATEGORIA
   ======================================== */
function renderCategoria(catId) {
    const cat = categorieRischi.find(c => c.id === catId);
    if (!cat) return navigateTo('lezioni');
    
    currentCategory = cat;
    const progress = getProgress();
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-8">
                <button onclick="navigateTo('lezioni')" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <span class="text-3xl">${cat.icon}</span>
                <h2 class="text-2xl font-bold text-white">${cat.nome}</h2>
            </div>

            <p class="text-gray-400 mb-6">${cat.desc}</p>

            <div class="space-y-3">
                ${cat.rischi.map((rischio, idx) => {
                    const isStudied = progress.studied && progress.studied.includes(rischio.titolo);
                    return `
                    <div class="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-4
                                hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                         onclick="navigateTo('rischio', { catId: '${catId}', idx: ${idx} })">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                ${isStudied 
                                    ? '<span class="text-green-400 text-lg">✅</span>' 
                                    : '<span class="text-gray-600 text-lg">⬜</span>'}
                                <span class="text-white font-medium">${rischio.titolo}</span>
                            </div>
                            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    `;
}


/* ========================================
   RENDER RISCHIO (DETTAGLIO)
   ======================================== */
function renderRischio(data) {
    const cat = categorieRischi.find(c => c.id === data.catId);
    if (!cat) return;
    
    const rischio = cat.rischi[data.idx];
    if (!rischio) return;
    
    currentRischio = rischio;
    const progress = getProgress();
    const isStudied = progress.studied && progress.studied.includes(rischio.titolo);
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-8">
                <button onclick="navigateTo('categoria', '${data.catId}')" 
                        class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <span class="text-2xl">${cat.icon}</span>
                <h2 class="text-xl font-bold text-white">${rischio.titolo}</h2>
            </div>

            <!-- Cause -->
            <div class="bg-gray-800/50 backdrop-blur border border-red-500/30 rounded-xl p-5 mb-4">
                <h3 class="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <span>⚠️</span> Cause
                </h3>
                <ul class="space-y-2">
                    ${rischio.cause.map(c => `
                        <li class="flex items-start gap-2 text-gray-300 text-sm">
                            <span class="text-red-400 mt-0.5">•</span>
                            <span>${c}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Danni -->
            <div class="bg-gray-800/50 backdrop-blur border border-orange-500/30 rounded-xl p-5 mb-4">
                <h3 class="text-orange-400 font-semibold mb-3 flex items-center gap-2">
                    <span>🩹</span> Danni
                </h3>
                <ul class="space-y-2">
                    ${rischio.danni.map(d => `
                        <li class="flex items-start gap-2 text-gray-300 text-sm">
                            <span class="text-orange-400 mt-0.5">•</span>
                            <span>${d}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Prevenzione -->
            <div class="bg-gray-800/50 backdrop-blur border border-green-500/30 rounded-xl p-5 mb-6">
                <h3 class="text-green-400 font-semibold mb-3 flex items-center gap-2">
                    <span>🛡️</span> Prevenzione
                </h3>
                <ul class="space-y-2">
                    ${rischio.prevenzioni.map(p => `
                        <li class="flex items-start gap-2 text-gray-300 text-sm">
                            <span class="text-green-400 mt-0.5">•</span>
                            <span>${p}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Segna come studiato -->
            <button onclick="toggleStudied('${rischio.titolo}', '${data.catId}', ${data.idx})"
                    class="w-full py-3 rounded-xl font-semibold transition-all duration-300
                           ${isStudied 
                               ? 'bg-green-600/20 border border-green-500/50 text-green-400 hover:bg-green-600/30' 
                               : 'bg-cyan-600 hover:bg-cyan-500 text-white'}">
                ${isStudied ? '✅ Studiato - Clicca per rimuovere' : '📌 Segna come studiato'}
            </button>

            <!-- Navigazione -->
            <div class="flex justify-between mt-4">
                ${data.idx > 0 ? `
                    <button onclick="navigateTo('rischio', { catId: '${data.catId}', idx: ${data.idx - 1} })"
                            class="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Precedente
                    </button>
                ` : '<div></div>'}
                ${data.idx < cat.rischi.length - 1 ? `
                    <button onclick="navigateTo('rischio', { catId: '${data.catId}', idx: ${data.idx + 1} })"
                            class="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1">
                        Successivo
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                ` : '<div></div>'}
            </div>
        </div>
    `;
}


/* ========================================
   RENDER TEST HOME
   ======================================== */
function renderTestHome() {
    const main = document.getElementById('main-content');
    const progress = getProgress();
    const lastScore = progress.lastTestScore;
    
    main.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-8">
                <button onclick="navigateTo('home')" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <h2 class="text-2xl font-bold text-white">✍️ Test di Verifica</h2>
            </div>

            ${lastScore !== undefined ? `
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 mb-6">
                    <p class="text-gray-400 text-sm">Ultimo risultato</p>
                    <p class="text-2xl font-bold ${lastScore >= 70 ? 'text-green-400' : lastScore >= 50 ? 'text-yellow-400' : 'text-red-400'}">
                        ${lastScore}%
                    </p>
                </div>
            ` : ''}

            <!-- Opzioni test -->
            <div class="space-y-4">
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 
                            hover:border-purple-500/50 transition-all cursor-pointer"
                     onclick="navigateTo('test-run', { type: 'completo' })">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl">📋</span>
                        <div>
                            <h3 class="text-white font-semibold">Test Completo</h3>
                            <p class="text-gray-400 text-sm">Tutte le 43 domande in ordine casuale</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 
                            hover:border-purple-500/50 transition-all cursor-pointer"
                     onclick="navigateTo('test-run', { type: 'rapido' })">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl">⚡</span>
                        <div>
                            <h3 class="text-white font-semibold">Test Rapido (15 domande)</h3>
                            <p class="text-gray-400 text-sm">Selezione casuale da tutte le categorie</p>
                        </div>
                    </div>
                </div>

                <!-- Test per categoria -->
                <h3 class="text-gray-400 font-medium mt-6 mb-2">Test per categoria</h3>
                ${categorieRischi.map(cat => `
                    <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 
                            hover:border-purple-500/50 transition-all cursor-pointer"
                     onclick="navigateTo('test-run', { type: 'categoria', catId: '${cat.id}' })">
                    <div class="flex items-center gap-3">
                        <span class="text-xl">${cat.icon}</span>
                        <div>
                            <h4 class="text-white font-medium text-sm">${cat.nome}</h4>
                            <p class="text-gray-500 text-xs">${cat.rischi.length} domande</p>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    `;
}


/* ========================================
   TEST ENGINE
   ======================================== */
function startTest(config) {
    let domandeFiltrate = [];
    
    if (config.type === 'completo') {
        domandeFiltrate = [...domandeTest];
    } else if (config.type === 'rapido') {
        domandeFiltrate = shuffleArray([...domandeTest]).slice(0, 15);
    } else if (config.type === 'categoria') {
        domandeFiltrate = domandeTest.filter(d => d.categoria === config.catId);
    }
    
    testState = {
        domande: shuffleArray(domandeFiltrate),
        corrente: 0,
        risposte: [],
        punteggio: 0,
        completato: false,
        config: config
    };
    
    renderDomanda();
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function renderDomanda() {
    if (testState.corrente >= testState.domande.length) {
        renderRisultati();
        return;
    }
    
    const domanda = testState.domande[testState.corrente];
    const num = testState.corrente + 1;
    const total = testState.domande.length;
    const percentuale = Math.round((num / total) * 100);
    const main = document.getElementById('main-content');
    
    // Mescola le opzioni mantenendo traccia della corretta
    const opzioniMescolate = domanda.opzioni.map((opt, idx) => ({ testo: opt, originale: idx }));
    const shuffled = shuffleArray(opzioniMescolate);
    const nuovaCorretta = shuffled.findIndex(o => o.originale === domanda.corretta);
    
    main.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <!-- Header test -->
            <div class="flex items-center justify-between mb-6">
                <button onclick="confirmExitTest()" class="text-gray-400 hover:text-white transition-colors text-sm">
                    ✕ Esci
                </button>
                <span class="text-gray-400 text-sm font-medium">Domanda ${num}/${total}</span>
                <span class="text-cyan-400 text-sm font-bold">${testState.punteggio} punti</span>
            </div>
            
            <!-- Barra progresso -->
            <div class="w-full bg-gray-700 rounded-full h-2 mb-8">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500" 
                     style="width: ${percentuale}%"></div>
            </div>

            <!-- Categoria badge -->
            <div class="mb-4">
                <span class="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                    ${getCategoryIcon(domanda.categoria)} Rischio ${domanda.rischio}
                </span>
            </div>

            <!-- Domanda -->
            <h3 class="text-white text-lg font-semibold mb-6 leading-relaxed">
                ${domanda.domanda}
            </h3>

            <!-- Opzioni -->
            <div class="space-y-3" id="opzioni-container">
                ${shuffled.map((opt, idx) => `
                    <button onclick="selezionaRisposta(${idx}, ${nuovaCorretta})"
                            id="opzione-${idx}"
                            class="w-full text-left p-4 rounded-xl border transition-all duration-300
                                   bg-gray-800/50 border-gray-700/50 text-gray-300 
                                   hover:border-cyan-500/50 hover:bg-gray-700/50
                                   active:scale-[0.98]">
                        <div class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-7 h-7 rounded-full border border-gray-600 
                                         flex items-center justify-center text-xs font-bold text-gray-400"
                                  id="badge-${idx}">
                                ${String.fromCharCode(65 + idx)}
                            </span>
                            <span class="text-sm leading-relaxed">${opt.testo}</span>
                        </div>
                    </button>
                `).join('')}
            </div>

            <!-- Spiegazione (nascosta) -->
            <div id="spiegazione-box" class="hidden mt-6 bg-gray-800/80 border border-cyan-500/30 rounded-xl p-5">
                <h4 class="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span>💡</span> Spiegazione
                </h4>
                <p class="text-gray-300 text-sm leading-relaxed">${domanda.spiegazione}</p>
            </div>

            <!-- Pulsante prossima (nascosto) -->
            <button id="btn-prossima" class="hidden w-full mt-4 py-3 rounded-xl font-semibold
                           bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
                           text-white transition-all duration-300"
                    onclick="prossimaDomanda()">
                ${testState.corrente < testState.domande.length - 1 ? 'Prossima Domanda →' : 'Vedi Risultati →'}
            </button>
        </div>
    `;
}

function getCategoryIcon(catId) {
    const cat = categorieRischi.find(c => c.id === catId);
    return cat ? cat.icon : '📋';
}

function selezionaRisposta(selezionata, corretta) {
    // Disabilita tutti i pulsanti
    const container = document.getElementById('opzioni-container');
    const buttons = container.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:border-cyan-500/50', 'hover:bg-gray-700/50');
        btn.style.cursor = 'default';
    });
    
    const isCorretta = selezionata === corretta;
    
    if (isCorretta) {
        testState.punteggio++;
    }
    
    testState.risposte.push({
        domanda: testState.domande[testState.corrente],
        selezionata: selezionata,
        corretta: corretta,
        isCorretta: isCorretta
    });
    
    // Evidenzia risposta corretta e sbagliata
    const btnCorretta = document.getElementById(`opzione-${corretta}`);
    const badgeCorretta = document.getElementById(`badge-${corretta}`);
    btnCorretta.classList.remove('bg-gray-800/50', 'border-gray-700/50', 'text-gray-300');
    btnCorretta.classList.add('bg-green-500/20', 'border-green-500/50', 'text-green-300');
    badgeCorretta.classList.remove('border-gray-600', 'text-gray-400');
    badgeCorretta.classList.add('border-green-500', 'text-green-400', 'bg-green-500/20');
    
    if (!isCorretta) {
        const btnSbagliata = document.getElementById(`opzione-${selezionata}`);
        const badgeSbagliata = document.getElementById(`badge-${selezionata}`);
        btnSbagliata.classList.remove('bg-gray-800/50', 'border-gray-700/50', 'text-gray-300');
        btnSbagliata.classList.add('bg-red-500/20', 'border-red-500/50', 'text-red-300');
        badgeSbagliata.classList.remove('border-gray-600', 'text-gray-400');
        badgeSbagliata.classList.add('border-red-500', 'text-red-400', 'bg-red-500/20');
    }
    
    // Mostra spiegazione e pulsante prossima
    document.getElementById('spiegazione-box').classList.remove('hidden');
    document.getElementById('btn-prossima').classList.remove('hidden');
    
    // Scroll alla spiegazione
    setTimeout(() => {
        document.getElementById('spiegazione-box').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

function prossimaDomanda() {
    testState.corrente++;
    renderDomanda();
}

function confirmExitTest() {
    if (confirm('Sei sicuro di voler uscire dal test? Il progresso andrà perso.')) {
        navigateTo('test');
    }
}


/* ========================================
   RENDER RISULTATI
   ======================================== */
function renderRisultati() {
    const total = testState.domande.length;
    const corrette = testState.punteggio;
    const percentuale = Math.round((corrette / total) * 100);
    const main = document.getElementById('main-content');
    
    // Salva risultato
    saveTestResult(percentuale);
    
    let emoji, messaggio, colore;
    if (percentuale >= 90) {
        emoji = '🏆'; messaggio = 'Eccellente!'; colore = 'text-green-400';
    } else if (percentuale >= 70) {
        emoji = '✅'; messaggio = 'Buon risultato!'; colore = 'text-green-400';
    } else if (percentuale >= 50) {
        emoji = '📙'; messaggio = 'Sufficiente, ma puoi migliorare'; colore = 'text-yellow-400';
    } else {
        emoji = '📕'; messaggio = 'Devi studiare di più'; colore = 'text-red-400';
    }
    
    // Errori per categoria
    const erroriPerCat = {};
    testState.risposte.filter(r => !r.isCorretta).forEach(r => {
        const catId = r.domanda.categoria;
        if (!erroriPerCat[catId]) erroriPerCat[catId] = 0;
        erroriPerCat[catId]++;
    });
    
    main.innerHTML = `
        <div class="max-w-3xl mx-auto text-center">
            <!-- Risultato -->
            <div class="text-6xl mb-4">${emoji}</div>
            <h2 class="text-3xl font-bold text-white mb-2">${messaggio}</h2>
            <p class="${colore} text-5xl font-bold mb-2">${percentuale}%</p>
            <p class="text-gray-400 mb-8">${corrette} risposte corrette su ${total}</p>

            <!-- Dettaglio punteggio -->
            <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 mb-6">
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <p class="text-green-400 text-2xl font-bold">${corrette}</p>
                        <p class="text-gray-500 text-xs">Corrette</p>
                    </div>
                    <div>
                        <p class="text-red-400 text-2xl font-bold">${total - corrette}</p>
                        <p class="text-gray-500 text-xs">Sbagliate</p>
                    </div>
                    <div>
                        <p class="text-cyan-400 text-2xl font-bold">${total}</p>
                        <p class="text-gray-500 text-xs">Totali</p>
                    </div>
                </div>
            </div>

            ${Object.keys(erroriPerCat).length > 0 ? `
                <!-- Categorie da ripassare -->
                <div class="bg-gray-800/50 border border-orange-500/30 rounded-xl p-5 mb-6 text-left">
                    <h3 class="text-orange-400 font-semibold mb-3">📌 Categorie da ripassare:</h3>
                    <div class="space-y-2">
                        ${Object.entries(erroriPerCat).map(([catId, count]) => {
                            const cat = categorieRischi.find(c => c.id === catId);
                            return `
                                <div class="flex items-center justify-between text-sm cursor-pointer 
                                            hover:bg-gray-700/30 p-2 rounded-lg transition-colors"
                                     onclick="navigateTo('categoria', '${catId}')">
                                    <span class="text-gray-300">${cat ? cat.icon : ''} ${cat ? cat.nome : catId}</span>
                                    <span class="text-red-400 font-medium">${count} errori</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Revisione risposte sbagliate -->
            ${testState.risposte.filter(r => !r.isCorretta).length > 0 ? `
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 mb-6 text-left">
                    <h3 class="text-red-400 font-semibold mb-3">❌ Risposte sbagliate:</h3>
                    <div class="space-y-4">
                        ${testState.risposte.filter(r => !r.isCorretta).map((r, i) => `
                            <div class="border-b border-gray-700/50 pb-3 ${i === 0 ? '' : 'pt-3'}">
                                <p class="text-gray-300 text-sm font-medium mb-2">${r.domanda.domanda}</p>
                                <p class="text-green-400 text-xs">✅ ${r.domanda.opzioni[r.domanda.corretta]}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Azioni -->
            <div class="grid grid-cols-2 gap-4">
                <button onclick="navigateTo('test-run', testState.config)"
                        class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
                               text-white rounded-xl py-3 font-semibold transition-all">
                    🔄 Ripeti Test
                </button>
                <button onclick="navigateTo('home')"
                        class="bg-gray-700 hover:bg-gray-600 text-white rounded-xl py-3 font-semibold transition-all">
                    🏠 Home
                </button>
            </div>
        </div>
    `;
}


/* ========================================
   RENDER STATISTICHE
   ======================================== */
function renderStatistiche() {
    const main = document.getElementById('main-content');
    const progress = getProgress();
    const totalRischi = 43;
    const studiedCount = progress.studied ? progress.studied.length : 0;
    const tests = progress.testHistory || [];
    
    const media = tests.length > 0 
        ? Math.round(tests.reduce((a, b) => a + b.score, 0) / tests.length)
        : 0;
    const miglior = tests.length > 0 
        ? Math.max(...tests.map(t => t.score))
        : 0;
    
    main.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-8">
                <button onclick="navigateTo('home')" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <h2 class="text-2xl font-bold text-white">📊 Statistiche</h2>
            </div>

            <!-- Cards stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center">
                    <p class="text-cyan-400 text-2xl font-bold">${studiedCount}</p>
                    <p class="text-gray-500 text-xs mt-1">Rischi studiati</p>
                </div>
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center">
                    <p class="text-purple-400 text-2xl font-bold">${tests.length}</p>
                    <p class="text-gray-500 text-xs mt-1">Test completati</p>
                </div>
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center">
                    <p class="text-yellow-400 text-2xl font-bold">${media}%</p>
                    <p class="text-gray-500 text-xs mt-1">Media punteggio</p>
                </div>
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 text-center">
                    <p class="text-green-400 text-2xl font-bold">${miglior}%</p>
                    <p class="text-gray-500 text-xs mt-1">Miglior punteggio</p>
                </div>
            </div>

            <!-- Progresso per categoria -->
            <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 mb-6">
                <h3 class="text-white font-semibold mb-4">Progresso per categoria</h3>
                <div class="space-y-3">
                    ${categorieRischi.map(cat => {
                        const catStudied = cat.rischi.filter(r => 
                            progress.studied && progress.studied.includes(r.titolo)
                        ).length;
                        const catPerc = Math.round((catStudied / cat.rischi.length) * 100);
                        
                        return `
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span class="text-gray-300">${cat.icon} ${cat.nome}</span>
                                <span class="text-gray-400">${catStudied}/${cat.rischi.length}</span>
                            </div>
                            <div class="w-full bg-gray-700 rounded-full h-2">
                                <div class="bg-cyan-500 h-2 rounded-full transition-all" 
                                     style="width: ${catPerc}%"></div>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>

            <!-- Cronologia test -->
            ${tests.length > 0 ? `
                <div class="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 mb-6">
                    <h3 class="text-white font-semibold mb-4">Cronologia test</h3>
                    <div class="space-y-2 max-h-60 overflow-y-auto">
                        ${tests.slice().reverse().map((t, i) => `
                            <div class="flex items-center justify-between text-sm p-2 rounded-lg 
                                        ${i % 2 === 0 ? 'bg-gray-700/20' : ''}">
                                <span class="text-gray-400">${t.date}</span>
                                <span class="text-gray-400">${t.type}</span>
                                <span class="font-bold ${t.score >= 70 ? 'text-green-400' : t.score >= 50 ? 'text-yellow-400' : 'text-red-400'}">
                                    ${t.score}%
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Reset -->
            <button onclick="confirmReset()"
                    class="w-full py-3 rounded-xl border border-red-500/30 text-red-400 
                           hover:bg-red-500/10 transition-all text-sm">
                🗑️ Resetta tutti i progressi
            </button>
        </div>
    `;
}


/* ========================================
   LOCAL STORAGE - PERSISTENZA
   ======================================== */
function getProgress() {
    try {
        const data = localStorage.getItem('magazzino_sicurezza_progress');
        return data ? JSON.parse(data) : { studied: [], testHistory: [] };
    } catch (e) {
        return { studied: [], testHistory: [] };
    }
}

function saveProgress(progress) {
    try {
        localStorage.setItem('magazzino_sicurezza_progress', JSON.stringify(progress));
    } catch (e) {
        console.warn('Impossibile salvare i progressi:', e);
    }
}

function loadProgress() {
    // Caricamento iniziale, già gestito da getProgress()
}

function toggleStudied(titolo, catId, idx) {
    const progress = getProgress();
    if (!progress.studied) progress.studied = [];
    
    const index = progress.studied.indexOf(titolo);
    if (index > -1) {
        progress.studied.splice(index, 1);
    } else {
        progress.studied.push(titolo);
    }
    
    saveProgress(progress);
    renderRischio({ catId, idx });
}

function saveTestResult(percentuale) {
    const progress = getProgress();
    if (!progress.testHistory) progress.testHistory = [];
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('it-IT') + ' ' + now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    
    let typeStr = 'Completo';
    if (testState.config.type === 'rapido') typeStr = 'Rapido';
    else if (testState.config.type === 'categoria') {
        const cat = categorieRischi.find(c => c.id === testState.config.catId);
        typeStr = cat ? cat.nome : 'Categoria';
    }
    
    progress.testHistory.push({
        date: dateStr,
        score: percentuale,
        type: typeStr
    });
    
    progress.lastTestScore = percentuale;
    saveProgress(progress);
}

function confirmReset() {
    if (confirm('Sei sicuro di voler cancellare TUTTI i progressi? Questa azione è irreversibile.')) {
        localStorage.removeItem('magazzino_sicurezza_progress');
        navigateTo('home');
    }
}


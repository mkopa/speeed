import { Translation } from "./type";

export const it: Translation = {
  messages: {
    processing: "Elaborazione...",
    deviceIsDisconnected: "Il dispositivo è scollegato!",
    connectingInProgress: "Collegamento in corso...",
    settingsHaveBeenSaved: "Le tue impostazioni sono state salvate!",
    configLoadedSuccessful: "Config caricata con successo!",
    overrideFileWarning: {
      header: "Attenzione!",
      message: {
        theFileText: "Il file",
        areYouSureToOverrideText: "esistere! Sei sicuro di voler sovrascrivere questo file?",
      },
      buttons: {
        yes: "Sovrascrivere",
        no: "No",
      },
    },
    unsupportedConfigurationFile: {
      header: "Errore!",
      text: "File di configurazione non supportato o rotto!",
    },
    pleaseWait: "Si prega di attendere...",
    connectingToMotor: "Collegamento al motore...",
    noDeviceFound: "Nessun dispositivo trovato!",
    cantEstablishingConnection:
      "Impossibile stabilire la connessione con il motore! Controllare la fine della connessione e riavviare!",
    connectedTo: "Collegato a",
    readBasSuccess: {
      basTypeLevel: "Livelli",
      basTypeGeneral: "Generale",
      first: "Leggi",
      second: "parametri con successo!",
    },
    readPedalAssistSuccess: "Leggere i parametri di Pedal Assist con successo!",
    readThrottleHandleSuccess: "Lettura dei parametri della maniglia del motore con successo",
    readAllSuccess: "Leggere tutti i parametri con successo!",
    somethingWentWrong: "Qualcosa è andato storto! Diario:",
    writeSuccess: {
      levels: "Livelli",
      general: "Generale",
      pedalAssist: "Assistente a pedale",
      throttleHandle: "Maniglia dell'acceleratore",
      first: "Scrivere",
      second: "parametri con successo!",
    },
    writeAllSuccess: "Scrivi tutti i parametri con successo!",
  },
  buttons: {
    cancel: "Cancella",
  },
  errors: {
    writeBasErrors: {
      "0": "Low Battery Protection fuori portata, si prega di resettare!",
      "1": "Limite di corrente fuori portata, si prega di resettare!",
      "2": "Limite di corrente per PAS0 fuori portata, si prega di resettare!",
      "3": "Limite di velocità per PAS0 fuori portata, si prega di resettare!",
      "4": "Limite di corrente per PAS1 fuori portata, si prega di resettare!",
      "5": "Limite di velocità per PAS1 fuori portata, si prega di resettare!",
      "6": "Limite di corrente per PAS2 fuori portata, si prega di resettare!",
      "7": "Limite di velocità per PAS2 fuori portata, si prega di resettare!",
      "8": "Limite di corrente per PAS3 fuori portata, si prega di resettare!",
      "9": "Limite di velocità per PAS3 fuori portata, si prega di resettare!",
      "10": "Limite di corrente per PAS4 fuori portata, si prega di resettare!",
      "11": "Limite di velocità per PAS4 fuori portata, si prega di resettare!",
      "12": "Limite di corrente per PAS5 fuori portata, si prega di resettare!",
      "13": "Limite di velocità per PAS5 fuori portata, si prega di resettare!",
      "14": "Limite di corrente per PAS6 fuori portata, si prega di resettare!",
      "15": "Limite di velocità per PAS6 fuori portata, si prega di resettare!",
      "16": "Limite di corrente per PAS7 fuori portata, si prega di resettare!",
      "17": "Limite di velocità per PAS7 fuori portata, si prega di resettare!",
      "18": "Limite di corrente per PAS8 fuori portata, si prega di resettare!",
      "19": "Limite di velocità per PAS8 fuori portata, si prega di resettare!",
      "20": "Limite di corrente per PAS9 fuori portata, si prega di resettare!",
      "21": "Limite di velocità per PAS9 fuori portata, si prega di resettare!",
      "22": "Diametro della ruota fuori portata, si prega di reimpostare!",
      "23": "Segnali del misuratore di velocità fuori portata, si prega di resettare!",
      default: "Problema di comunicazione, si prega di resettare!",
    },
    writePasErrors: {
      "0": "Errore del tipo di sensore del pedale, si prega di resettare!",
      "1": "Errore nel livello di assistenza designato, si prega di resettare!",
      "2": "Errore del limite di velocità, si prega di resettare!",
      "3": "Start Current fuori portata, si prega di resettare!",
      "4": "Errore della modalità di avvio lento, si prega di resettare!",
      "5": "Start Degree fuori portata, si prega di resettare!",
      "6": "Errore della modalità di lavoro, si prega di resettare!",
      "7": "Stop Delay fuori portata, si prega di resettare!",
      "8": "Decadimento corrente fuori portata, si prega di resettare!",
      "9": "Stop Decay fuori portata, si prega di resettare!",
      "10": "Mantenere la corrente fuori portata, si prega di resettare!",
      default: "Errore sconosciuto, si prega di resettare!",
    },
    writeThrErrors: {
      "0": "Start Voltage fuori portata, si prega di resettare!",
      "1": "End Voltage fuori portata, si prega di resettare!",
      "2": "Errore di modalità, si prega di resettare!",
      "3": "Errore di assistenza designata, si prega di resettare!",
      "4": "Errore del limite di velocità, si prega di resettare!",
      "5": "Start Current fuori portata, si prega di resettare!",
      default: "Errore sconosciuto, si prega di resettare!",
    },
  },
  mainRouter: {
    home: "Casa",
    settings: "Impostazioni",
    help: "Aiuto",
  },
  main: {
    label_language: "Lingua",
    object_Profile: {
      header: "Profilo",
      open: "Aprire",
      save_as: "Salva con nome",
      save: "Salva",
      default_configuration_string: "Configurazione predefinita (nessun file specificato)",
      popup_header: "Salva la configurazione come",
      popup_placeholder: "Inserisci il nome del file qui",
      popup_button_label: "Salva",
    },
    object_Motor: {
      header: "Motore",
      read_all: "Leggi",
      write_all: "Scrivere",
      connect: "Collegare",
      disconnect: "Scollegare",
      status: {
        disconnected: "scollegato",
        connecting: "collegare",
        connected: "collegato",
        error: "errore",
      },
      motor_info: {
        status: "Stato",
        manufacturer: "Produttore",
        model: "Modello",
        hardware_version: "Versione hardware",
        firmware_version: "Versione del firmware",
        nominal_voltage: "Nominal Voltage",
        max_current: "Corrente massima",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Generale",
      levels: "Livelli",
      pedal: "Pedale",
      throttle: "Acceleratore",
    },
    header: {
      readButtonText: "Leggi",
      writeButtonText: "Salva",
    },
    tabs: {
      general: {
        header: "Generale",
        lowBatteryProtection: "Protezione da batteria scarica",
        currentLimit: "Limite di corrente",
        speedMeterType: {
          text: "Tipo di misuratore di velocità",
          types: ["Esterno, misuratore di ruote", "Interno, Motor Meter", "Per fase del motore"],
        },
        speedMeterSignals: "Segnali del misuratore di velocità",
        wheelDiameter: {
          text: "Diametro della ruota",
          types: [
            "16 pollici",
            "17 pollici",
            "18 pollici",
            "19 pollici",
            "20 pollici",
            "21 pollici",
            "22 pollici",
            "23 pollici",
            "24 pollici",
            "25 pollici",
            "26 pollici",
            "27 pollici",
            "700C",
            "28 pollici",
            "29 pollici",
            "30 pollici",
          ],
        },
      },
      levels: {
        header: "Livelli di assistenza",
        level: "Livello",
        current: "Corrente",
        speed: "Velocità",
        popoverCurrentLimitHeader: "Limite di corrente per il livello",
        popoverSpeedLimitHeader: "Limite di velocità per il livello",
      },
      pedal: {
        header: "Assistente a pedale",
        pedalSensorType: {
          text: "Tipo di sensore del pedale",
          types: ["Nessuno", "DH-Sensor-12", "BB-Sensor-32", "DoppioSegnale-24"],
        },
        designatedAssistLevel: {
          text: "Livello di assistenza designato",
          types: ["Per comando del display", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limite di velocità",
          types: [
            "Per comando del display",
            "15km/h",
            "16km/h",
            "17km/h",
            "18km/h",
            "19km/h",
            "20km/h",
            "21km/h",
            "22km/h",
            "23km/h",
            "24km/h",
            "25km/h",
            "26km/h",
            "27km/h",
            "28km/h",
            "29km/h",
            "30km/h",
            "31km/h",
            "32km/h",
            "33km/h",
            "34km/h",
            "35km/h",
            "36km/h",
            "37km/h",
            "38km/h",
            "39km/h",
            "40 km/h",
          ],
        },
        startCurrent: "Inizio corrente",
        slowStartMode: "Modalità di avvio lento",
        startDegree: "Inizio Laurea",
        workMode: {
          text: "Modalità di lavoro",
          types: ["Indeterminato"],
        },
        stopDelay: "Ritardo di arresto",
        currentDecay: "Decadimento corrente",
        stopDecay: "Fermare il decadimento",
        keepCurrent: "Mantenere la corrente",
      },
      throttle: {
        header: "Assistenza all'acceleratore",
        startVoltage: "Tensione iniziale",
        endVoltage: "Tensione finale",
        mode: {
          text: "Modo",
          types: ["Velocità", "Corrente"],
        },
        designatedAssistLevel: {
          text: "Livello di assistenza designato",
          types: ["Per comando del display", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limite di velocità",
          types: [
            "Per comando del display",
            "15km/h",
            "16km/h",
            "17km/h",
            "18km/h",
            "19km/h",
            "20km/h",
            "21km/h",
            "22km/h",
            "23km/h",
            "24km/h",
            "25km/h",
            "26km/h",
            "27km/h",
            "28km/h",
            "29km/h",
            "30km/h",
            "31km/h",
            "32km/h",
            "33km/h",
            "34km/h",
            "35km/h",
            "36km/h",
            "37km/h",
            "38km/h",
            "39km/h",
            "40 km/h",
          ],
        },
        startCurrent: "Inizio corrente",
      },
    },
  },
  help: {
    about: {
      header: "Circa l'applicazione",
      p1: "Strumento di configurazione per la serie di motori Bafang BBS.",
      author: "Autore",
    },
    connection: {
      header: "Connessione",
      p1:
        "Per connettersi al controller della vostra bicicletta elettrica della serie Bafang BBS avete bisogno di un adattatore USB-OTG, adattatore da USB a seriale con connettori a pin femmina tipo Julet all'estremità.",
      p2:
        'Puoi anche comprare un cavo di programmazione USB "originale", ma è solo un adattatore USB-seriale troppo costoso con il connettore adatto al cavo del tuo controller BBS.',
    },
    general: {
      header: "Generale",
      lowBatteryProtection:
        "Questa è la tensione alla quale il controller fermerà il motore per mantenere la vostra batteria al sicuro dal sovra-scarico. Dovrebbe essere impostata correttamente dal produttore e non è necessario cambiarla. Per i pacchi batteria 13S 41V è il valore predefinito.",
      currentLimit:
        "Questa è la corrente massima permessa al flusso attraverso il motore. Se il vostro motore è 25A per esempio, potete impostarlo a 20A per tenerlo al sicuro, se volete. Non si raccomanda di impostare una corrente più alta di quella nominale. Anche impostata a 25A la corrente di picco sarà più alta, quindi è meglio non impostarla più di così.",
      speedMeterType:
        "Questo seleziona il misuratore di velocità utilizzato sulla vostra bicicletta. Per i kit BBS è esterno. Questo parametro è impostato dal produttore e se il tuo setup non è personalizzato allora non hai bisogno di cambiarlo.",
      speedMeterSignals:
        "Qui potete impostare quanti segnali per giro genera il vostro sensore. Se usi il sensore esterno con magnete, genera un segnale per giro della ruota. Questo parametro è impostato dal produttore e se il tuo setup non è personalizzato allora non hai bisogno di cambiarlo.",
      wheelDiameter:
        "Il diametro della ruota dovrebbe corrispondere alla dimensione della vostra ruota motrice (quindi la vostra bicicletta potrebbe avere due ruote di dimensioni diverse). Impostare il diametro su una misura più piccola di quella reale aumenterà la vostra velocità ma può anche portare facilmente a danni al motore.",
      endText:
        "Quando hai finito di sintonizzare le tue impostazioni generali, puoi usare il pulsante WRITE in questa scheda del programma per scriverle sul tuo controller. Puoi anche usare il pulsante READ in qualsiasi momento per leggerle (questo sostituirà tutti i valori del General. Questo non sovrascriverà altre impostazioni.",
    },
    levels: {
      header: "Livelli di assistenza",
      p1:
        "Queste sono tutte le impostazioni di assistenza possibili (sia per l'assistenza a pedale che per la maniglia dell'acceleratore usando uno di questi).",
      p2:
        "È importante menzionare che la corrente Assist 0 e i limiti di velocità devono essere impostati su 1 se volete essere in grado di usare la maniglia dell'acceleratore con Pedal Assist 0 selezionato sul vostro LCD.",
      p3: "Di solito Assist 0 è impostato su 0 in modo da poter utilizzare la bicicletta senza assistenza se si vuole.",
      p4:
        "Fate attenzione ad impostare questi livelli. Se impostate una corrente troppo bassa, il motore non sarà in grado di muovere la bicicletta e potrebbe subire dei danni. Se impostate la corrente del primo livello di assistenza troppo alta, l'accelerazione alla partenza sarà significativa. Questo potrebbe danneggiare gli ingranaggi interni o farvi cadere dalla bicicletta.",
      p5:
        "Il limite di velocità imposta a quale velocità (% della velocità massima impostata dal tuo LCD) il motore ridurrà la sua potenza e manterrà solo quella velocità invece di accelerare di più.",
      p6:
        "Gli interruttori nella parte superiore dell'applicazione permettono di mostrare i valori convertiti automaticamente (corrente e velocità o percentuali)",
      endText:
        "Quando hai finito di sintonizzare le impostazioni degli Assist Levels puoi usare il pulsante WRITE in questa scheda del programma per scriverle sul tuo controller. Puoi anche usare il pulsante READ in qualsiasi momento per leggerle (questo sostituirà tutti i valori degli Assist Levels. Questo non sovrascriverà altre impostazioni.",
    },
    pedal: {
      header: "Assistente a pedale",
      p1:
        "Il sistema Pedal Assist ti assiste mentre pedali. In questa scheda puoi sintonizzare le sue prestazioni. Alcuni di questi non dovresti cambiarli perché sono specifici del tuo kit. Questi sono impostati dal produttore.",
      pedalSensorType:
        "Questo parametro seleziona il tipo di sensore di rotazione del pedale. È impostato dal produttore e non deve essere modificato.",
      designatedAssistLevel:
        'Con questo parametro si possono selezionare due tipi di operazioni. Il primo è "Per comando del display". Questo significa che il livello di assistenza (quello della scheda Impostazioni di base) sarà selezionato dal vostro LCD. La seconda opzione è quella di scegliere un livello di assistenza specifico che sarà fisso e non sarà possibile cambiarlo dal display. Per questo potete selezionare qualsiasi livello di assistenza da 0 a 9.',
      speedLimit:
        "Questa è la velocità massima alla quale il motore fornirà un'ulteriore accelerazione. Quando la velocità è raggiunta, la manterrà ma non accelererà di più. Se impostate questo parametro su \"By Display's Command\" sarete in grado di impostare la velocità dal vostro LCD. Tenete presente che alcuni LCD permettono di impostare una velocità di 99km/h, il che non è possibile almeno con gli attuali kit BBS. Per quanto ho provato, la velocità massima senza pedalare è di 40km/h (quando la dimensione della ruota è impostata correttamente). Questa impostazione è usata per tutti i livelli di assistenza che vedete nella scheda Basic. Se lo imposti a 40km/h (in questo programma o dal tuo LCD) e il tuo livello di assistenza 5 è impostato al 50% di velocità, allora sarai in grado di raggiungere i 20km/h a quel livello di assistenza.",
      startCurrent:
        "Questa è la corrente di avvio quando si inizia a ruotare i pedali. È bene impostarlo ad almeno il 10% per assicurarsi che la bicicletta inizi a muoversi e che il motore non sia in stallo. Impostando un valore molto alto, la bicicletta accelererà molto velocemente all'inizio, il che potrebbe danneggiare i suoi ingranaggi interni e anche il motore. Il valore raccomandato è tra il 10% e il 30%. Dovreste anche assicurarvi di non iniziare a pedalare con una marcia troppo alta che caricherebbe troppo il motore.",
      slowStartMode:
        "Questa impostazione controlla quanto velocemente viene raggiunta la corrente di partenza. Si può fare in modo che la bicicletta acceleri dolcemente e che risponda rapidamente. Un valore intorno a 4 di solito funziona bene per il ciclismo normale. Se sei un mountain-biker, l'impostazione di un valore basso renderà l'accelerazione più veloce, il che potrebbe essere utile, ma dovresti fare attenzione a non friggere il controller e il motore.",
      startDegree:
        "Questo parametro imposta quanti impulsi dal sensore del pedale sono necessari prima che il motore si avvii. Il giro completo del pedale sui kit BBS genera 24 impulsi. Impostarlo a 0 o 1 non funzionerà. Un valore intorno a 4 funziona bene perché non parte con un piccolo movimento e inoltre non richiede troppa rotazione.",
      workMode:
        "Lo scopo di questo parametro non è molto chiaro. Si suppone che controlli la potenza in base alla velocità di rotazione del pedale. Il valore impostato dal produttore sembra funzionare bene, quindi non è necessario cambiarlo.",
      stopDelay:
        "Questo è il ritardo dopo aver smesso di pedalare prima che il motore si fermi. Un valore di 250ms funziona bene.",
      currentDecay:
        "Questo parametro imposta la velocità con cui la corrente scende quando si pedala velocemente e si raggiunge la velocità massima al livello di assistenza selezionato. Un valore più basso significa che la corrente inizierà a scendere a una velocità inferiore.",
      stopDecay: "La quantità di tempo che il motore impiega per fermarsi.",
      keepCurrent:
        "Questa impostazione controlla la percentuale della corrente massima al livello di assistenza selezionato che scorrerà attraverso il motore quando si raggiunge la velocità massima e si continua a pedalare. Così, se la vostra corrente massima è 25A e usate Pedal Assist 5 impostato al 50% di corrente, allora avrete una corrente massima di 12,5A per questo livello di assistenza. Quindi se Keep Current è impostato al 50% quando la velocità massima è raggiunta e si continua a pedalare la corrente sarà mantenuta a 6.25A. Questo assicura una transizione graduale alla potenza di assistenza quando si riduce la velocità di pedalata e la velocità di movimento scende sotto il massimo.",
      endText:
        "Quando hai finito di sintonizzare le tue impostazioni del Pedal Assist puoi usare il pulsante WRITE in questa scheda del programma per scriverle sul tuo controller. Puoi anche usare il pulsante READ in qualsiasi momento per leggerle (questo sostituirà tutti i valori al Pedal Assist. Questo non sovrascriverà altre impostazioni.",
    },
    throttle: {
      header: "Maniglia dell'acceleratore",
      p1:
        "Se il tuo kit è dotato di maniglia dell'acceleratore, questa scheda ti permette di configurare il suo funzionamento. Assicurati che Assis 0 sia impostato su 1 (sia corrente che velocità) se vuoi usarlo quando Pedal Assist S0 è selezionato sul tuo LCD.",
      startVoltage:
        "Questa è la tensione di uscita della maniglia dell'acceleratore alla quale il motore si avvia. Il minimo a cui il controller risponde è 1.1V",
      endVoltage:
        "Questa è la tensione di uscita della maniglia dell'acceleratore alla quale il motore raggiungerà la sua massima potenza (limitata da altre impostazioni). Il massimo accettato dal controller è 4.2V. Devi giocare un po' con questo parametro perché il massimo della manopola dell'acceleratore può essere diverso a seconda del modello. Se imposti questo parametro troppo basso, non otterrai quasi nessuna risposta dalla manopola dell'acceleratore. Quando lo imposti al massimo che la maniglia può produrre, otterrai la più ampia gamma possibile di controllo sulla potenza del motore.",
      mode:
        "Questa è la modalità di funzionamento della maniglia dell'acceleratore. Ci sono due opzioni: velocità e corrente. Quando è impostato su velocità, il controller usa la velocità di movimento per impostare la potenza del motore in base alla posizione della manopola dell'acceleratore. Sfortunatamente c'è un ritardo significativo a causa del modo in cui viene misurata la velocità e la risposta è piuttosto cattiva in questa modalità. Quando è impostata sulla corrente, la maniglia controlla la corrente del motore in base alla sua posizione. Questa modalità funziona meglio ed è simile al funzionamento di un'automobile.",
      designatedAssistLevel:
        "Si può impostare su \"Per comando del display\" o selezionare un livello fisso. La prima opzione utilizza l'impostazione PAS dal vostro LCD. Questo significa che la potenza massima in uscita e la velocità dipendono dal livello PAS selezionato e dalla posizione della manopola dell'acceleratore. Quindi, se viene selezionata una PAS bassa, anche la corrente e la velocità massima saranno basse, anche se si spinge l'acceleratore al massimo. Se viene selezionato un livello di assistenza fisso per questo parametro, la manopola dell'acceleratore userà la sua corrente e velocità massima. Fate attenzione se impostate questo livello 9 a non spingere l'acceleratore al massimo quando siete fermi perché l'alta corrente e la potenza potrebbero danneggiare il controller e il motore.",
      speedLimit:
        "Con questo parametro è possibile limitare la velocità massima quando si usa la maniglia dell'acceleratore. Questo sovrascrive la velocità massima del livello di assistenza designato, se è superiore.",
      startCurrent:
        "Questa è la percentuale della corrente massima applicata al motore quando la maniglia dell'acceleratore genera la tensione minima accettata. Di solito un valore del 10% o 20% funziona bene. Se la tua corrente massima nella scheda General è impostata a 25A e Start Current è impostata al 10%, otterrai una corrente di avvio di 2,5A. Questo porterà a un avvio regolare e non caricherà troppo gli ingranaggi interni. Se si imposta questo parametro su un valore molto alto si possono danneggiare gli ingranaggi interni e il motore.",
      endText:
        "Quando hai finito di mettere a punto le impostazioni della manopola del Throttle, puoi usare il pulsante WRITE in questa scheda del programma per scriverle sul tuo controller. Puoi anche usare il pulsante READ in qualsiasi momento per leggerle (questo sostituirà tutti i valori sulla maniglia del Throttle. Questo non sovrascriverà nessun'altra impostazione.",
    },
  },
};

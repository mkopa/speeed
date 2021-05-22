import { Translation } from "./type";

export const dk: Translation = {
  messages: {
    processing: "Behandling...",
    deviceIsDisconnected: "Enheden er frakoblet!",
    connectingInProgress: "Forbindelse i gang...",
    settingsHaveBeenSaved: "Dine indstillinger er blevet gemt!",
    configLoadedSuccessful: "Konfigurationen blev indlæst med succes!",
    overrideFileWarning: {
      header: "Advarsel!",
      message: {
        theFileText: "Filen",
        areYouSureToOverrideText: "eksisterer! Er du sikker på, at du ønsker at tilsidesætte denne fil?",
      },
      buttons: {
        yes: "Override",
        no: "Nej",
      },
    },
    unsupportedConfigurationFile: {
      header: "Fejl!",
      text: "Ikke understøttet eller ødelagt konfigurationsfil!",
    },
    pleaseWait: "Vent venligst...",
    connectingToMotor: "Tilslutning til motor...",
    noDeviceFound: "Ingen enhed fundet!",
    cantEstablishingConnection:
      "Kan ikke etablere forbindelse med motoren! Kontrollér forbindelsen og genstart den igen!",
    connectedTo: "Forbundet til",
    readBasSuccess: {
      basTypeLevel: "Niveauer",
      basTypeGeneral: "Generelt",
      first: "Læs",
      second: "parametre med succes!",
    },
    readPedalAssistSuccess: "Læs Pedal Assist-parametre med succes!",
    readThrottleHandleSuccess: "Læsning af parametre for gashåndtag med succes",
    readAllSuccess: "Læs alle parametre med succes!",
    somethingWentWrong: "Noget gik galt! Log:",
    writeSuccess: {
      levels: "Niveauer",
      general: "Generelt",
      pedalAssist: "Pedalassistent",
      throttleHandle: "Håndtag for gashåndtag",
      first: "Skriv",
      second: "parametre med succes!",
    },
    writeAllSuccess: "Skriv alle parametre med succes!",
  },
  buttons: {
    cancel: "Annuller",
  },
  errors: {
    writeBasErrors: {
      "0": "Beskyttelse ved lavt batteri er uden for rækkevidde, nulstil venligst!",
      "1": "Strømgrænsen er uden for området, nulstil venligst!",
      "2": "Strømgrænse for PAS0 uden for området, nulstil venligst!",
      "3": "Hastighedsgrænse for PAS0 uden for området, nulstil venligst!",
      "4": "Strømgrænsen for PAS1 er uden for området, nulstil venligst!",
      "5": "Hastighedsgrænse for PAS1 er uden for området, nulstil venligst!",
      "6": "Strømgrænsen for PAS2 er uden for området, nulstil venligst!",
      "7": "Hastighedsgrænse for PAS2 er uden for området, nulstil venligst!",
      "8": "Strømgrænsen for PAS3 er uden for området, nulstil venligst!",
      "9": "Hastighedsgrænse for PAS3 er uden for rækkevidde, nulstil venligst!",
      "10": "Strømgrænsen for PAS4 er uden for området, nulstil venligst!",
      "11": "Hastighedsgrænse for PAS4 er uden for rækkevidde, nulstil venligst!",
      "12": "Strømgrænsen for PAS5 er uden for området, nulstil venligst!",
      "13": "Hastighedsgrænse for PAS5 er uden for rækkevidde, nulstil venligst!",
      "14": "Strømgrænsen for PAS6 er uden for området, nulstil venligst!",
      "15": "Hastighedsgrænse for PAS6 er uden for rækkevidde, nulstil venligst!",
      "16": "Strømgrænsen for PAS7 er uden for området, nulstil venligst!",
      "17": "Hastighedsgrænse for PAS7 er uden for rækkevidde, nulstil venligst!",
      "18": "Strømgrænsen for PAS8 er uden for området, nulstil venligst!",
      "19": "Hastighedsgrænse for PAS8 er uden for rækkevidde, nulstil venligst!",
      "20": "Strømgrænsen for PAS9 er uden for området, nulstil venligst!",
      "21": "Hastighedsgrænse for PAS9 er uden for rækkevidde, nulstil venligst!",
      "22": "Hjuldiameter uden for området, nulstil venligst!",
      "23": "Hastighedsmåler Signaler uden for rækkevidde, nulstil venligst!",
      default: "Kommunikationsproblem, nulstil venligst!",
    },
    writePasErrors: {
      "0": "Fejl i pedalsensor type, nulstil venligst!",
      "1": "Fejl ved udpeget assistniveau, nulstil venligst!",
      "2": "Fejl ved hastighedsbegrænsning, nulstil venligst!",
      "3": "Start Strøm uden for rækkevidde, nulstil venligst!",
      "4": "Fejl i langsom starttilstand, nulstil venligst!",
      "5": "Start Degree uden for rækkevidde, nulstil venligst!",
      "6": "Fejl i arbejdstilstand, nulstil venligst!",
      "7": "Stop Forsinkelse uden for rækkevidde, nulstil venligst!",
      "8": "Aktuelt henfald uden for rækkevidde, nulstil venligst!",
      "9": "Stop Decay uden for rækkevidde, nulstil venligst!",
      "10": "Hold Current uden for rækkevidde, nulstil venligst!",
      default: "Ukendt fejl, nulstil venligst!",
    },
    writeThrErrors: {
      "0": "Startspænding uden for rækkevidde, nulstil venligst!",
      "1": "Slutspænding uden for rækkevidde, nulstil venligst!",
      "2": "Modefejl, nulstil venligst!",
      "3": "Designated Assist fejl, nulstil venligst!",
      "4": "Fejl ved hastighedsbegrænsning, nulstil venligst!",
      "5": "Start Strøm uden for rækkevidde, nulstil venligst!",
      default: "Ukendt fejl, nulstil venligst!",
    },
  },
  mainRouter: {
    home: "Hjem",
    settings: "Indstillinger",
    help: "Hjælp",
  },
  main: {
    label_language: "Sprog",
    object_Profile: {
      header: "Profil",
      open: "Åbn",
      save_as: "Gem som",
      save: "Gem",
      default_configuration_string: "Standardkonfiguration (ingen fil angivet)",
      popup_header: "Gem konfiguration som",
      popup_placeholder: "Indtast filnavnet her",
      popup_button_label: "Gem",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Læs",
      write_all: "Skriv",
      connect: "Forbind",
      disconnect: "Afbryd forbindelsen",
      status: {
        disconnected: "afbrudt",
        connecting: "tilslutning af",
        connected: "tilsluttet",
        error: "fejl",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Producent",
        model: "Model",
        hardware_version: "Hardware-version",
        firmware_version: "Firmware-version",
        nominal_voltage: "Nominel spænding",
        max_current: "Max. strøm",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Generelt",
      levels: "Niveauer",
      pedal: "Pedal",
      throttle: "Gashåndtag",
    },
    header: {
      readButtonText: "Læs",
      writeButtonText: "Gem",
    },
    tabs: {
      general: {
        header: "Generelt",
        lowBatteryProtection: "Beskyttelse mod lavt batteri",
        currentLimit: "Strømgrænse",
        speedMeterType: {
          text: "Hastighedsmåler type",
          types: ["Ekstern, Hjulmåler", "Intern, Motor Meter", "Efter motorfase"],
        },
        speedMeterSignals: "Signaler fra hastighedsmålere",
        wheelDiameter: {
          text: "Hjulets diameter",
          types: [
            "16 tommer",
            "17 tommer",
            "18 tommer",
            "19 tommer",
            "20 tommer",
            "21 tommer",
            "22 tommer",
            "23 tommer",
            "24 tommer",
            "25 tommer",
            "26 tommer",
            "27 tommer",
            "700C",
            "28 tommer",
            "29 tommer",
            "30 tommer",
          ],
        },
      },
      levels: {
        header: "Assist-niveauer",
        level: "Niveau",
        current: "Nuværende",
        speed: "Hastighed",
        popoverCurrentLimitHeader: "Strømgrænse for niveau",
        popoverSpeedLimitHeader: "Hastighedsgrænse for niveau",
      },
      pedal: {
        header: "Pedalassistent",
        pedalSensorType: {
          text: "Type af pedalsensor",
          types: ["Ingen", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Udpeget assistanceniveau",
          types: ["På displayets kommando", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Hastighedsgrænse",
          types: [
            "På displayets kommando",
            "15 km/t",
            "16 km/t",
            "17 km/t",
            "18 km/t",
            "19 km/t",
            "20 km/t",
            "21 km/t",
            "22 km/t",
            "23 km/t",
            "24 km/t",
            "25 km/t",
            "26 km/t",
            "27 km/t",
            "28 km/t",
            "29 km/t",
            "30 km/t",
            "31 km/t",
            "32 km/t",
            "33 km/t",
            "34 km/t",
            "35 km/t",
            "36 km/t",
            "37 km/t",
            "38 km/t",
            "39 km/t",
            "40 km/t",
          ],
        },
        startCurrent: "Start Strøm",
        slowStartMode: "Langsom starttilstand",
        startDegree: "Start grad",
        workMode: {
          text: "Arbejdstilstand",
          types: ["Ubestemt"],
        },
        stopDelay: "Stopforsinkelse",
        currentDecay: "Nuværende henfald",
        stopDecay: "Stop forfald",
        keepCurrent: "Hold dig opdateret",
      },
      throttle: {
        header: "Gashåndtagassistent",
        startVoltage: "Startspænding",
        endVoltage: "Slutspænding",
        mode: {
          text: "Tilstand",
          types: ["Hastighed", "Nuværende"],
        },
        designatedAssistLevel: {
          text: "Udpeget assistanceniveau",
          types: ["På displayets kommando", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Hastighedsgrænse",
          types: [
            "På displayets kommando",
            "15 km/t",
            "16 km/t",
            "17 km/t",
            "18 km/t",
            "19 km/t",
            "20 km/t",
            "21 km/t",
            "22 km/t",
            "23 km/t",
            "24 km/t",
            "25 km/t",
            "26 km/t",
            "27 km/t",
            "28 km/t",
            "29 km/t",
            "30 km/t",
            "31 km/t",
            "32 km/t",
            "33 km/t",
            "34 km/t",
            "35 km/t",
            "36 km/t",
            "37 km/t",
            "38 km/t",
            "39 km/t",
            "40 km/t",
          ],
        },
        startCurrent: "Start Strøm",
      },
    },
  },
  help: {
    about: {
      header: "Om ansøgning",
      p1: "Konfigurationsværktøj til Bafang BBS-motorserien.",
      author: "Forfatter",
    },
    connection: {
      header: "Forbindelse",
      p1:
        "For at tilslutte til controlleren på din elektriske cykel fra Bafang BBS-serien skal du bruge en USB-OTG-adapter, USB til seriel adapter med Julet-type hun-stik i enden.",
      p2:
        'Du kan også købe et "originalt" USB-programmeringskabel, men det er bare en overpris USB til seriel adapter med det rigtige stik til kablet på din BBS-controller.',
    },
    general: {
      header: "Generelt",
      lowBatteryProtection:
        "Det er den spænding, hvor controlleren stopper motoren for at beskytte batteriet mod overafladning. Den skal være indstillet korrekt af producenten, og du behøver ikke at ændre den. For 13S-batteripakker er 41V standard.",
      currentLimit:
        "Dette er den maksimale strøm, der må strømme gennem motoren. Hvis din motor f.eks. er på 25 A, kan du indstille den til 20 A for at beskytte den, hvis du ønsker det. Det anbefales ikke at indstille en højere strøm end den nominelle strømstyrke. Selv ved en indstilling på 25 A vil spidsstrømmen være højere, så du bør ikke indstille mere end det.",
      speedMeterType:
        "Denne vælger den hastighedsmåler, der anvendes på din cykel. For BBS-sæt er den ekstern. Denne parameter er indstillet af producenten, og hvis din opsætning ikke er tilpasset, behøver du ikke at ændre den.",
      speedMeterSignals:
        "Her kan du indstille, hvor mange signaler din sensor genererer pr. omdrejning. Hvis du bruger den eksterne sensor med magnet, genererer den ét signal pr. hjulomdrejning. Denne parameter er indstillet af producenten, og hvis din opsætning ikke er tilpasset, behøver du ikke at ændre den.",
      wheelDiameter:
        "Hjuldiameteren skal svare til størrelsen på dit drivhjul (derfor kan din cykel have to forskellige hjulstørrelser). Hvis du indstiller diameteren til en mindre størrelse, end den i virkeligheden er, vil du øge din hastighed, men det kan også let føre til motorskader.",
      endText:
        "Når du er færdig med at indstille dine generelle indstillinger, kan du bruge knappen WRITE (skriv) på denne fane i programmet til at skrive dem til din controller. Du kan også til enhver tid bruge knappen READ til at læse dem (dette vil erstatte alle værdier på General. Dette vil ikke overskrive andre indstillinger.",
    },
    levels: {
      header: "Assist-niveauer",
      p1: "Det er alle mulige indstillinger (både for pedalassistent og gashåndtag ved brug af en af disse).",
      p2:
        "Det er vigtigt at nævne, at Assist 0-strøm- og hastighedsgrænserne skal være indstillet til 1, hvis du vil kunne bruge dit gashåndtag med Pedal Assist 0 valgt på LCD-skærmen.",
      p3: "Normalt er Assist 0 indstillet til 0, så du kan bruge cyklen uden hjælp, hvis du ønsker det.",
      p4:
        "Vær forsigtig med at indstille disse niveauer. Hvis du indstiller strømmen for lavt, vil motoren ikke kunne flytte cyklen, og den kan blive beskadiget. Hvis du indstiller strømmen på det første assistniveau for højt, vil accelerationen ved start være betydelig. Dette kan beskadige de interne gear eller få dig til at falde af cyklen.",
      p5:
        "Hastighedsgrænsen angiver, ved hvilken hastighed (% af den maksimale hastighed, der er indstillet på LCD-skærmen) motoren reducerer sin effekt og holder den hastighed i stedet for at accelerere mere.",
      p6:
        "Skifter øverst i programmet giver dig mulighed for at vise automatisk konverterede værdier (strøm og hastighed eller procenter)",
      endText:
        "Når du er færdig med at indstille dine Assist Levels-indstillinger, kan du bruge WRITE-knappen i denne fane i programmet til at skrive dem til din controller. Du kan også til enhver tid bruge knappen READ til at læse dem (dette vil erstatte alle værdierne på Assist Levels. Dette vil ikke overskrive andre indstillinger.",
    },
    pedal: {
      header: "Pedalassistent",
      p1:
        "Pedal Assist-systemet hjælper dig, mens du træder i pedalerne. På denne fane kan du indstille dets ydeevne. Nogle af dem bør du ikke ændre, da de er specifikke for dit sæt. De er indstillet af producenten.",
      pedalSensorType:
        "Denne parameter vælger typen af pedalrotationssensor. Den er indstillet af producenten og bør ikke ændres.",
      designatedAssistLevel:
        'Du kan vælge mellem to typer af operationer med denne parameter. Den første er "Ved displayets kommando". Det betyder, at assistniveauet (det fra fanen Grundlæggende indstillinger) vælges fra din LCD-skærm. Den anden mulighed er at vælge et specifikt assistniveau, som vil være fast, og du vil ikke kunne ændre det fra LCD-skærmen. Her kan du vælge et hvilket som helst assistniveau fra 0 til 9.',
      speedLimit:
        'Dette er den maksimale hastighed, ved hvilken motoren vil give yderligere acceleration. Når hastigheden er nået, vil den kun holde den, men vil ikke accelerere mere. Hvis du indstiller denne parameter til "By Display\'s Command", kan du indstille hastigheden fra dit LCD-display. Husk, at nogle LCD-skærme giver dig mulighed for at indstille en hastighed på 99 km/t, hvilket i hvert fald ikke er muligt med de nuværende BBS-sæt. Så vidt jeg har testet, er den maksimale hastighed uden at træde i pedalerne 40 km/t (når hjulstørrelsen er indstillet korrekt). Denne indstilling bruges til alle assistniveauer, som du ser i fanen Basic. Hvis du indstiller dette til 40 km/t (i dette program eller fra din LCD-skærm) og dit Assist 5 niveau er indstillet til 50% hastighed, så vil du kunne nå 20 km/t på dette assist niveau.',
      startCurrent:
        "Dette er opstartstrømmen, når du begynder at dreje pedalerne. Det er godt at indstille den til mindst 10 % for at sikre, at cyklen begynder at bevæge sig, og at motoren ikke går i stå. Hvis du indstiller den til en meget høj værdi, vil cyklen accelerere meget hurtigt ved start, hvilket kan beskadige de interne gear og motoren. Den anbefalede værdi er en værdi mellem 10 % og 30 %. Du bør også sørge for, at du ikke begynder at træde i pedalerne med et for højt gear, hvilket vil belaste motoren for meget.",
      slowStartMode:
        "Denne indstilling styrer, hvor hurtigt startstrømmen nås. Du kan få din cykel til at accelerere jævnt og få den til at reagere hurtigt. En værdi omkring 4 fungerer normalt godt til normal cykling. Hvis du er mountainbiker, vil en indstilling til en lav værdi gøre accelerationen hurtigere, hvilket kan være nyttigt, men du skal være forsigtig med ikke at stege din controller og motor.",
      startDegree:
        "Denne parameter indstiller, hvor mange impulser fra pedalsensoren der er nødvendige, før motoren starter. En fuld pedalomdrejning på BBS-sæt genererer 24 impulser. Indstilling af denne til 0 eller 1 vil ikke fungere. En værdi omkring 4 fungerer godt, da den ikke starter med bare en lille bevægelse og heller ikke kræver for meget rotation.",
      workMode:
        "Formålet med denne parameter er ikke helt klart. Det er meningen, at den skal styre effekten i henhold til pedalens omdrejningshastighed. Den værdi, der er indstillet af producenten, synes at fungere fint, så du behøver ikke at ændre den.",
      stopDelay:
        "Dette er den tid, der går, efter at du holder op med at træde i pedalerne, før motoren stopper. En værdi på 250 ms fungerer godt.",
      currentDecay:
        "Denne parameter indstiller, hvor hurtigt strømmen falder, når du træder hurtigt i pedalerne og når den maksimale hastighed ved det valgte assistniveau. En lavere værdi betyder, at strømmen begynder at falde ved lavere hastighed.",
      stopDecay: "Den tid, det tager motoren at stoppe.",
      keepCurrent:
        "Denne indstilling styrer den procentdel af den maksimale strøm ved det valgte assistanceniveau, som vil strømme gennem motoren, når du når den maksimale hastighed og fortsætter med at træde i pedalerne. Så hvis din maksimale strømstyrke er 25 A, og du bruger Pedal Assist 5 indstillet til 50 % strømstyrke, vil du have en maksimal strømstyrke på 12,5 A for dette assistanceniveau. Hvis Keep Current er indstillet til 50 %, når den maksimale hastighed er nået, og du fortsætter med at træde i pedalerne, vil strømmen blive holdt på 6,25 A. Dette sikrer en jævn overgang til assiststrøm, når du reducerer pedalhastigheden, og bevægelseshastigheden falder under maksimumhastigheden.",
      endText:
        "Når du er færdig med at indstille dine Pedal Assist-indstillinger, kan du bruge WRITE-knappen i denne fane i programmet til at skrive dem til din controller. Du kan også til enhver tid bruge knappen READ til at læse dem (dette vil erstatte alle værdier på Pedal Assist. Dette vil ikke overskrive andre indstillinger.",
    },
    throttle: {
      header: "Håndtag for gashåndtag",
      p1:
        "Hvis dit sæt er udstyret med et gashåndtag, kan du konfigurere dets funktion under denne fane. Sørg for, at Assis 0 er indstillet til 1 (både strøm og hastighed), hvis du vil bruge den, når Pedal Assist S0 er valgt på LCD-skærmen.",
      startVoltage:
        "Dette er den udgangsspænding for gashåndtaget, ved hvilken motoren starter. Den mindste værdi, ved hvilken controlleren reagerer, er 1,1 V.",
      endVoltage:
        "Dette er den udgangsspænding for gashåndtaget, ved hvilken motoren når sin maksimale effekt (begrænset af andre indstillinger). Den maksimalt accepterede spænding fra controlleren er 4,2 V. Du skal lege lidt med denne parameter, da gashåndtagets maksimum kan være forskelligt afhængigt af model. Hvis du indstiller denne parameter for lavt, får du næsten ingen respons fra gashåndtaget. Når du indstiller den til det maksimum, som håndtaget kan producere, får du det bredest mulige område af kontrol over motorkraften.",
      mode:
        "Dette er gashåndtagets funktionsmåde. Du har to muligheder: hastighed og strøm. Når den er indstillet til hastighed, bruger controlleren bevægelseshastigheden til at indstille motoreffekten i overensstemmelse med gashåndtagets position. Desværre er der en betydelig forsinkelse på grund af den måde, hvorpå hastigheden måles, og responsen er ret dårlig i denne tilstand. Når den er indstillet til strøm, styrer håndtaget motorstrømmen i overensstemmelse med sin position. Denne tilstand fungerer bedre og svarer til en bilbetjening.",
      designatedAssistLevel:
        'Du kan indstille dette til "Efter displayets kommando" eller vælge et fast niveau. Den første mulighed bruger PAS-indstillingen fra LCD-skærmen. Det betyder, at den maksimale effekt og hastighed afhænger af det valgte PAS-niveau og gashåndtagets position. Så hvis der er valgt et lavt PAS-niveau, vil den maksimale strøm og hastighed også være lav, selv om du trykker gashåndtaget til maksimum. Hvis der er valgt et fast assistniveau for denne parameter, vil gashåndtaget bruge sin maksimale strøm og hastighed. Vær forsigtig, hvis du indstiller dette til niveau 9, med ikke at skubbe gashåndtaget til maksimum, når du er stoppet, da den høje strøm og kraften kan beskadige din controller og motor.',
      speedLimit:
        "Med denne parameter kan du begrænse den maksimale hastighed, når du bruger gashåndtaget. Dette overskriver den angivne maksimale hastighed på det angivne assistanceniveau, hvis den er højere.",
      startCurrent:
        "Dette er den procentdel af den maksimale strøm, der tilføres motoren, når gashåndtaget genererer den mindste accepterede spænding. Normalt fungerer en værdi på 10 % eller 20 % godt. Hvis din maksimale strøm på fanen General (Generelt) er indstillet til 25 A og Start Current (Startstrøm) er indstillet til 10 %, får du 2,5 A startstrøm. Dette vil føre til en jævn start og vil ikke belaste de interne gear for meget. Hvis du indstiller denne parameter til en meget høj værdi, kan du beskadige de interne tandhjul og motoren.",
      endText:
        "Når du er færdig med at indstille indstillingerne for dit gashåndtag, kan du bruge knappen WRITE (skriv) på denne fane i programmet til at skrive dem til din controller. Du kan også til enhver tid bruge knappen READ til at læse dem (dette erstatter alle værdierne på gashåndtaget). Dette vil ikke overskrive andre indstillinger.",
    },
  },
};

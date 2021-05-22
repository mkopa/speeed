import { Translation } from "./type";

export const lv: Translation = {
  messages: {
    processing: "Apstrāde...",
    deviceIsDisconnected: "Ierīce ir atvienota!",
    connectingInProgress: "Veidojas savienojums...",
    settingsHaveBeenSaved: "Jūsu iestatījumi ir saglabāti!",
    configLoadedSuccessful: "Konfigurācija ielādēta veiksmīgi!",
    overrideFileWarning: {
      header: "Brīdinājums!",
      message: {
        theFileText: "Datne",
        areYouSureToOverrideText: "pastāvēt! Vai esat pārliecināts, ka vēlaties aizstāt šo failu?",
      },
      buttons: {
        yes: "Pārslēgt",
        no: "Nē",
      },
    },
    unsupportedConfigurationFile: {
      header: "Kļūda!",
      text: "Neatbalstīts vai bojāts konfigurācijas fails!",
    },
    pleaseWait: "Lūdzu, uzgaidiet...",
    connectingToMotor: "Savienojums ar motoru...",
    noDeviceFound: "Nav atrasta neviena ierīce!",
    cantEstablishingConnection: "Nevar izveidot savienojumu ar dzinēju! Pārbaudiet savienojuma beigas restartējiet!",
    connectedTo: "Savienots ar",
    readBasSuccess: {
      basTypeLevel: "Līmeņi",
      basTypeGeneral: "Vispārīgi",
      first: "Lasīt",
      second: "parametri veiksmīgi!",
    },
    readPedalAssistSuccess: "Veiksmīgi nolasiet pedāļa palīgsistēmas parametrus!",
    readThrottleHandleSuccess: "Veiksmīga droseles roktura parametru nolasīšana",
    readAllSuccess: "Veiksmīgi nolasīti visi parametri!",
    somethingWentWrong: "Kaut kas notika nepareizi! Žurnāls:",
    writeSuccess: {
      levels: "Līmeņi",
      general: "Vispārīgi",
      pedalAssist: "Pedāļu palīgsistēma",
      throttleHandle: "Droseles rokturis",
      first: "Rakstiet",
      second: "parametri veiksmīgi!",
    },
    writeAllSuccess: "Veiksmīgi ierakstiet visus parametrus!",
  },
  buttons: {
    cancel: "Atcelt",
  },
  errors: {
    writeBasErrors: {
      "0": "Zema akumulatora aizsardzība ir ārpus diapazona, lūdzu, atiestatiet!",
      "1": "Pašreizējais ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "2": "PAS0 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "3": "PAS0 ātruma ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "4": "PAS1 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "5": "PAS1 ātruma ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "6": "PAS2 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "7": "PAS2 ātruma ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "8": "PAS3 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "9": "PAS3 ātruma ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "10": "PAS4 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "11": "Ātruma ierobežojums PAS4 ārpus diapazona, lūdzu, atiestatiet!",
      "12": "PAS5 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "13": "PAS5 ātruma ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "14": "PAS6 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "15": "Ātruma ierobežojums PAS6 ārpus diapazona, lūdzu, atiestatiet!",
      "16": "PAS7 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "17": "Ātruma ierobežojums PAS7 ir ārpus diapazona, lūdzu, atiestatiet!",
      "18": "PAS8 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "19": "Ātruma ierobežojums PAS8 ārpus diapazona, lūdzu, atiestatiet!",
      "20": "PAS9 strāvas ierobežojums ir ārpus diapazona, lūdzu, atiestatiet!",
      "21": "Ātruma ierobežojums PAS9 ārpus diapazona, lūdzu, atiestatiet!",
      "22": "Riteņa diametrs ir ārpus diapazona, lūdzu, atiestatiet!",
      "23": "Ātruma mērītāja signāli ir ārpus diapazona, lūdzu, atiestatiet!",
      default: "Komunikācijas problēma, lūdzu, atiestatiet!",
    },
    writePasErrors: {
      "0": "Pedāļa sensora tipa kļūda, lūdzu, atiestatiet!",
      "1": "Noteiktā palīdzības līmeņa kļūda, lūdzu, atiestatiet!",
      "2": "Ātruma ierobežojuma kļūda, lūdzu, atiestatiet!",
      "3": "Sākums Pašreizējais ārpus diapazona, lūdzu, atiestatiet!",
      "4": "Lēna palaišanas režīma kļūda, lūdzu, atiestatiet!",
      "5": "Sākuma pakāpe Ārpus diapazona, lūdzu, atiestatiet!",
      "6": "Darba režīma kļūda, lūdzu, atiestatiet!",
      "7": "Stop Delay ārpus diapazona, lūdzu, atiestatiet!",
      "8": "Pašreizējais sabrukums ārpus diapazona, lūdzu, atiestatiet!",
      "9": "Stop Decay ārpus darbības zonas, lūdzu, atiestatiet!",
      "10": "Turiet strāvu ārpus diapazona, lūdzu, atiestatiet!",
      default: "Nezināma kļūda, lūdzu, atiestatiet!",
    },
    writeThrErrors: {
      "0": "Sākuma spriegums ārpus diapazona, lūdzu, atiestatiet!",
      "1": "Beigu spriegums ārpus diapazona, lūdzu, atjaunojiet iestatījumus!",
      "2": "Kļūda režīmā, lūdzu, atiestatiet!",
      "3": "Noteiktā asistenta kļūda, lūdzu, atiestatiet!",
      "4": "Ātruma ierobežojuma kļūda, lūdzu, atiestatiet!",
      "5": "Sākums Pašreizējais ārpus diapazona, lūdzu, atiestatiet!",
      default: "Nezināma kļūda, lūdzu, atiestatiet!",
    },
  },
  mainRouter: {
    home: "Sākums",
    settings: "Iestatījumi",
    help: "Palīdzība",
  },
  main: {
    label_language: "Valoda",
    object_Profile: {
      header: "Profils",
      open: "Atvērt",
      save_as: "Saglabāt kā",
      save: "Saglabāt",
      default_configuration_string: "Noklusējuma konfigurācija (nav norādīts neviens fails)",
      popup_header: "Saglabāt konfigurāciju kā",
      popup_placeholder: "Šeit ievadiet faila nosaukumu",
      popup_button_label: "Saglabāt",
    },
    object_Motor: {
      header: "Motors",
      read_all: "Lasīt",
      write_all: "Rakstiet",
      connect: "Savienot",
      disconnect: "Atvienojiet",
      status: {
        disconnected: "atvienots",
        connecting: "savienojuma",
        connected: "savienots",
        error: "kļūda",
      },
      motor_info: {
        status: "Statuss",
        manufacturer: "Ražotājs",
        model: "Modelis",
        hardware_version: "Aparatūras versija",
        firmware_version: "Firmware versija",
        nominal_voltage: "Nominālais spriegums",
        max_current: "Maksimālā strāva",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Vispārīgi",
      levels: "Līmeņi",
      pedal: "Pedāļi",
      throttle: "Droseles pedālis",
    },
    header: {
      readButtonText: "Lasīt",
      writeButtonText: "Saglabāt",
    },
    tabs: {
      general: {
        header: "Vispārīgi",
        lowBatteryProtection: "Zema akumulatora aizsardzība",
        currentLimit: "Strāvas ierobežojums",
        speedMeterType: {
          text: "Ātruma mērītāja tips",
          types: ["Ārējais, riteņu skaitītājs", "Iekšējais, motora mērītājs", "Pēc motora fāzes"],
        },
        speedMeterSignals: "Ātruma mērītāja signāli",
        wheelDiameter: {
          text: "Riteņa diametrs",
          types: [
            "16 collu",
            "17 collu",
            "18 collu",
            "19 collu",
            "20 collu",
            "21 collu",
            "22 collas",
            "23 collas",
            "24 collas",
            "25 collas",
            "26 collas",
            "27 collu",
            "700C",
            "28 collas",
            "29 collas",
            "30 collu",
          ],
        },
      },
      levels: {
        header: "Palīdzības līmeņi",
        level: "Līmenis",
        current: "Pašreizējais",
        speed: "Ātrums",
        popoverCurrentLimitHeader: "Pašreizējais līmeņa ierobežojums",
        popoverSpeedLimitHeader: "Ātruma ierobežojums līmenim",
      },
      pedal: {
        header: "Pedāļu palīgsistēma",
        pedalSensorType: {
          text: "Pedāļa sensora tips",
          types: ["Nav", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Noteiktais palīdzības līmenis",
          types: ["Pēc displeja komandas", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Ātruma ierobežojums",
          types: [
            "Pēc displeja komandas",
            "15 km/h",
            "16 km/h",
            "17 km/h",
            "18 km/h",
            "19 km/h",
            "20 km/h",
            "21km/h",
            "22 km/h",
            "23 km/h",
            "24 km/h",
            "25km/h",
            "26 km/h",
            "27 km/h",
            "28 km/h",
            "29 km/h",
            "30 km/h",
            "31km/h",
            "32 km/h",
            "33 km/h",
            "34 km/h",
            "35 km/h",
            "36 km/h",
            "37 km/h",
            "38 km/h",
            "39 km/h",
            "40 km/h",
          ],
        },
        startCurrent: "Sākums Pašreizējais",
        slowStartMode: "Lēnais palaišanas režīms",
        startDegree: "Sākums grāds",
        workMode: {
          text: "Darba režīms",
          types: ["Nenoteikts"],
        },
        stopDelay: "Apstāšanās aizkave",
        currentDecay: "Pašreizējais sabrukums",
        stopDecay: "Pārtrauciet sabrukumu",
        keepCurrent: "Uzturēt aktuālo",
      },
      throttle: {
        header: "Droseles pedāļa palīgsistēma",
        startVoltage: "Sākuma spriegums",
        endVoltage: "Gala spriegums",
        mode: {
          text: "Režīms",
          types: ["Ātrums", "Pašreizējais"],
        },
        designatedAssistLevel: {
          text: "Noteiktais palīdzības līmenis",
          types: ["Pēc displeja komandas", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Ātruma ierobežojums",
          types: [
            "Pēc displeja komandas",
            "15 km/h",
            "16 km/h",
            "17 km/h",
            "18 km/h",
            "19 km/h",
            "20 km/h",
            "21km/h",
            "22 km/h",
            "23 km/h",
            "24 km/h",
            "25km/h",
            "26 km/h",
            "27 km/h",
            "28 km/h",
            "29 km/h",
            "30 km/h",
            "31km/h",
            "32 km/h",
            "33 km/h",
            "34 km/h",
            "35 km/h",
            "36 km/h",
            "37 km/h",
            "38 km/h",
            "39 km/h",
            "40 km/h",
          ],
        },
        startCurrent: "Sākums Pašreizējais",
      },
    },
  },
  help: {
    about: {
      header: "Par pieteikumu",
      p1: "Konfigurēšanas rīks Bafang BBS motoru sērijai.",
      author: "Autors",
    },
    connection: {
      header: "Savienojums",
      p1:
        "Lai izveidotu savienojumu ar Bafang BBS sērijas elektrovelosipēda kontrolieri, jums ir nepieciešams USB-OTG adapteris, USB adapteris uz seriālo adapteri ar Julet tipa sievišķo kontaktu savienotājiem galā.",
      p2:
        'Varat iegādāties arī "oriģinālo" USB programmēšanas kabeli, taču tas ir tikai pārlieku dārgs USB adapteris ar atbilstošu savienotāju jūsu BBS kontroliera kabelim.',
    },
    general: {
      header: "Vispārīgi",
      lowBatteryProtection:
        "Tas ir spriegums, pie kura kontrolieris apturēs motoru, lai pasargātu akumulatoru no pārmērīgas izlādes. Ražotājam tas ir pareizi jāiestata, un jums tas nav jāmaina. 13S akumulatoriem 41 V ir noklusējuma iestatījums.",
      currentLimit:
        "Tā ir maksimālā strāva, kas var plūst caur motoru. Ja, piemēram, jūsu motora strāva ir 25 A, varat iestatīt 20 A, lai nodrošinātu tā drošību, ja vēlaties. Nav ieteicams iestatīt lielāku strāvu par nominālo. Pat iestatot 25 A, maksimālā strāva būs lielāka, tāpēc labāk nenoteikt lielāku strāvu.",
      speedMeterType:
        "Ar šo izvēlieties velosipēdam izmantoto ātruma mērītāju. BBS komplektiem tas ir ārējais. Šo parametru nosaka ražotājs, un, ja jūsu iestatījums nav pielāgots, tad tas nav jāmaina.",
      speedMeterSignals:
        "Šeit varat iestatīt, cik daudz signālu uz vienu apgriezienu sensors ģenerē. Ja izmantojat ārējo sensoru ar magnētu, tas ģenerē vienu signālu uz vienu riteņa apgriezienu. Šo parametru ir iestatījis ražotājs, un, ja jūsu iestatījums nav pielāgots, tas nav jāmaina.",
      wheelDiameter:
        "Riteņa diametram jāatbilst jūsu piedziņas riteņa izmēram (tātad jūsu velosipēdam var būt divi dažāda izmēra riteņi). Ja iestatīsiet mazāku diametru, nekā tas ir patiesībā, palielināsiet ātrumu, taču tas var arī viegli izraisīt motora bojājumus.",
      endText:
        "Kad esat pabeidzis vispārējo iestatījumu iestatīšanu, varat izmantot šīs programmas cilnes pogu WRITE, lai tos ierakstītu savā kontrolierī. Varat arī jebkurā laikā izmantot pogu READ (nolasīt), lai nolasītu šos iestatījumus (tas aizstās visas vērtības sadaļā General (Vispārīgi). Tas nepārraksta nekādus citus iestatījumus.",
    },
    levels: {
      header: "Palīdzības līmeņi",
      p1:
        "Šie ir visi iespējamie asistenta iestatījumi (gan pedāļa asistenta, gan droseles roktura, izmantojot vienu no tiem).",
      p2:
        "Ir svarīgi pieminēt, ka Assist 0 strāvas un ātruma ierobežojumiem jābūt iestatītiem uz 1, ja vēlaties, lai varētu izmantot droseles rokturi, ja LCD displejā ir izvēlēts Pedal Assist 0.",
      p3: "Parasti Assist 0 ir iestatīts uz 0, lai jūs varētu lietot velosipēdu bez palīdzības, ja vēlaties.",
      p4:
        "Uzmanīgi iestatiet šos līmeņus. Ja iestatīsiet pārāk zemu strāvas stiprumu, motors nespēs pārvietot velosipēdu un tas var tikt bojāts. Ja iestatīsiet pārāk lielu pirmā palīglīmeņa strāvu, tad paātrinājums pie starta būs ievērojams. Tas var sabojāt iekšējos pārnesumus vai likt jums nokrist no velosipēda.",
      p5:
        "Ātruma ierobežojums nosaka, pie kāda ātruma (% no LCD displejā iestatītā maksimālā ātruma) motors samazinās savu jaudu un vienkārši uzturēs šo ātrumu, nevis paātrināsies vairāk.",
      p6:
        "Programmas augšpusē atrodas slēdži, kas ļauj parādīt automātiski konvertētās vērtības (pašreizējās un ātruma vai procentuālās vērtības).",
      endText:
        "Kad esat pabeidzis asistenta līmeņu iestatījumu pielāgošanu, varat izmantot šīs programmas cilnes pogu WRITE, lai tos ierakstītu savā kontrolierī. Varat arī jebkurā laikā izmantot pogu READ (nolasīt), lai šos iestatījumus nolasītu (tādējādi tiks aizstātas visas Assist Levels vērtības. Tas nepārraksta nekādus citus iestatījumus.",
    },
    pedal: {
      header: "Pedāļu palīgsistēma",
      p1:
        "Pedāļu pedāļu atbalsta sistēma palīdz jums pedāļu minšanas laikā. Šajā cilnē varat noregulēt tās darbību. Dažas no tām nevajadzētu mainīt, jo tās ir specifiskas jūsu komplektam. Tās nosaka ražotājs.",
      pedalSensorType:
        "Šis parametrs izvēlas pedāļa rotācijas sensora tipu. To ir iestatījis ražotājs, un to nevajadzētu mainīt.",
      designatedAssistLevel:
        'Ar šo parametru var izvēlēties divus darbības veidus. Pirmais ir "Pēc displeja komandas". Tas nozīmē, ka palīgsistēmas līmenis (tas, kas norādīts cilnē "Pamata iestatījumi") tiks izvēlēts no jūsu LCD displeja. Otrā iespēja ir izvēlēties konkrētu asistenta līmeni, kas būs fiksēts, un jūs to nevarēsiet mainīt no LCD displeja. Šim nolūkam varat izvēlēties jebkuru asistenta līmeni no 0 līdz 9.',
      speedLimit:
        'Tas ir maksimālais ātrums, pie kura motors nodrošina papildu paātrinājumu. Kad šis ātrums ir sasniegts, tas to tikai uzturēs, bet neveicinās lielāku paātrinājumu. Ja iestatīsiet šo parametru uz "Pēc displeja komandas", jūs varēsiet iestatīt ātrumu no LCD displeja. Paturiet prātā, ka daži LCD ļauj iestatīt ātrumu 99 km/h, kas nav iespējams vismaz ar pašreizējiem BBS komplektiem. Cik esmu pārbaudījis, maksimālais ātrums bez pedāļu minšanas ir 40 km/h (ja riteņa izmērs ir iestatīts pareizi). Šis iestatījums tiek izmantots visiem palīdzības līmeņiem, kas redzami cilnē Basic (Pamata). Ja to iestatāt uz 40 km/h (šajā programmā vai no LCD displeja) un jūsu 5. palīgsistēmas līmenis ir iestatīts uz 50 % ātrumu, tad ar šo palīgsistēmas līmeni varēsiet sasniegt 20 km/h ātrumu.',
      startCurrent:
        "Tā ir starta strāva, kad sākat griezt pedāļus. To ir labi iestatīt vismaz 10 % apmērā, lai pārliecinātos, ka velosipēds sāks kustēties un motors neapstāsies. Iestatot šo vērtību ļoti augstu, velosipēds starta laikā paātrināsies ļoti strauji, kas var sabojāt tā iekšējos pārnesumus un arī motoru. Ieteicamā vērtība ir no 10% līdz 30%. Jāpārliecinās arī, ka pedāļus nesākat mint ar pārāk augstu pārnesumu, kas pārāk noslogos motoru.",
      slowStartMode:
        "Šis iestatījums nosaka, cik ātri tiek sasniegta sākuma strāva. Jūs varat panākt, lai velosipēds paātrinātos vienmērīgi un reaģētu ātri. Parasti normālai braukšanai ar velosipēdu labi darbojas vērtība ap 4. Ja braucat ar kalnu velosipēdu, tad, iestatot zemāku vērtību, paātrinājums būs ātrāks, kas varētu būt noderīgi, taču jums jābūt uzmanīgiem, lai nesadedzinātu kontrolieri un motoru.",
      startDegree:
        "Šis parametrs nosaka, cik daudz impulsu no pedāļa sensora ir nepieciešams, lai iedarbinātu motoru. Pilns pedāļa apgrieziens BBS komplektos rada 24 impulsus. Iestatot 0 vai 1, šis parametrs nedarbosies. Vērtība ap 4 darbojas labi, jo tā nesākas tikai ar nelielu kustību un arī neprasa pārāk lielu rotāciju.",
      workMode:
        "Šī parametra mērķis nav īsti skaidrs. Tam ir jākontrolē jauda atkarībā no pedāļa griešanās ātruma. Ražotāja noteiktā vērtība, šķiet, darbojas labi, tāpēc to nav nepieciešams mainīt.",
      stopDelay: "Tas ir laiks pēc pedāļu minšanas pārtraukšanas, pirms motors apstājas. Vērtība 250 ms darbojas labi.",
      currentDecay:
        "Šis parametrs nosaka, cik strauji samazinās strāvas ātrums, kad pedāļi tiek dzīti ātri un tiek sasniegts maksimālais ātrums ar izvēlēto atbalsta līmeni. Zemāka vērtība nozīmē, ka strāva sāks samazināties pie mazāka ātruma.",
      stopDecay: "Laiks, kas nepieciešams, lai motors apstātos.",
      keepCurrent:
        "Šis iestatījums nosaka, cik procentu no maksimālā strāvas daudzuma pie izvēlētā atbalsta līmeņa caur motoru plūdīs, kad sasniegsiet maksimālo ātrumu un turpināsiet pedāļu minšanu. Tātad, ja jūsu maksimālā strāva ir 25 A un jūs izmantojat Pedal Assist 5, kas iestatīts uz 50 % strāvas, tad maksimālā strāva šajā asistenta līmenī būs 12,5 A. Ja ir iestatīts Keep Current (saglabāt strāvu) 50 %, kad sasniegts maksimālais ātrums un turpināsiet pedāļu minšanu, strāva saglabāsies 6,25 A līmenī. Tas nodrošina vienmērīgu pāreju uz asistenta jaudu, kad samazinās pedāļu minšanas ātrums un kustības ātrums samazinās zem maksimālā.",
      endText:
        "Kad esat pabeidzis pedāļa palīgsistēmas iestatījumu noregulēšanu, varat izmantot šīs programmas cilnes pogu WRITE, lai tos ierakstītu savā kontrolierī. Varat arī jebkurā laikā izmantot pogu READ (nolasīt), lai šos iestatījumus nolasītu (tas aizstās visas Pedal Assist vērtības. Tas nepārraksta nekādus citus iestatījumus.",
    },
    throttle: {
      header: "Droseles rokturis",
      p1:
        "Ja jūsu komplekts ir aprīkots ar droseles rokturi, šī cilne ļauj konfigurēt tā darbību. Pārliecinieties, ka Assis 0 ir iestatīts uz 1 (gan strāvas, gan ātruma), ja vēlaties to izmantot, kad LCD displejā ir izvēlēts Pedal Assist S0.",
      startVoltage:
        "Tas ir droseles roktura izejas spriegums, pie kura motors ieslēdzas. Minimālais spriegums, pie kura kontrolieris reaģē, ir 1,1 V.",
      endVoltage:
        "Tas ir droseles roktura izejas spriegums, pie kura motors sasniegs maksimālo jaudu (to ierobežo citi iestatījumi). Maksimālais pieļaujamais spriegums no kontroliera ir 4,2 V. Ar šo parametru ir nedaudz jāspēlē, jo atkarībā no modeļa droseles roktura maksimums var atšķirties. Ja iestatīsiet šo parametru pārāk zemu, jūs nesaņemsiet gandrīz nekādu reakciju no droseles roktura. Iestatot maksimālo vērtību, ko rokturis var radīt, jūs iegūsiet visplašāko iespējamo motora jaudas kontroles diapazonu.",
      mode:
        "Tas ir droseles roktura darbības režīms. Ir divas iespējas: ātrums un strāva. Ja iestatīts uz ātrumu, kontrolieris izmanto kustības ātrumu, lai iestatītu motora jaudu atbilstoši droseles roktura stāvoklim. Diemžēl ātruma mērīšanas veida dēļ ir ievērojama aizture, un reakcija šajā režīmā ir diezgan slikta. Ja iestatīts uz strāvu, rokturis regulē motora strāvu atkarībā no tā stāvokļa. Šis režīms darbojas labāk un ir līdzīgs automašīnas darbībai.",
      designatedAssistLevel:
        'Varat iestatīt "Pēc displeja komandas" vai izvēlēties fiksētu līmeni. Pirmā opcija izmanto jūsu LCD displeja PAS iestatījumu. Tas nozīmē, ka maksimālā jauda un ātrums ir atkarīgs no izvēlētā PAS līmeņa un droseles roktura stāvokļa. Tātad, ja ir izvēlēts zems PAS līmenis, maksimālā strāva un ātrums arī būs zems, pat ja jūs nospiedīsiet droseles rokturi līdz maksimumam. Ja šim parametram ir izvēlēts fiksēts palīdzības līmenis, droseles rokturis izmantos maksimālo strāvu un ātrumu. Ja iestatāt 9. līmeni, esiet uzmanīgi, lai apstājoties nespiestu droseles rokturi līdz maksimumam, jo lielā strāva un jauda var sabojāt kontrolieri un motoru.',
      speedLimit:
        "Ar šo parametru var ierobežot maksimālo ātrumu, izmantojot droseles rokturi. Tas pārraksta norādīto palīglīmeņa maksimālo ātrumu, ja tas ir lielāks.",
      startCurrent:
        "Tas ir motora maksimālās strāvas procentuālā daļa, kad droseles rokturis rada minimālo pieļaujamo spriegumu. Parasti labi darbojas vērtība 10% vai 20%. Ja jūsu maksimālā strāva cilnē Vispārīgi ir iestatīta uz 25 A un starta strāva ir iestatīta uz 10 %, jūs saņemsiet 2,5 A starta strāvu. Tas nodrošinās vienmērīgu iedarbināšanu un pārāk neapgrūtinās iekšējos pārnesumus. Ja šim parametram iestatīsiet ļoti lielu vērtību, varat sabojāt iekšējos zobratus un motoru.",
      endText:
        "Kad esat pabeidzis regulēt droseles roktura iestatījumus, varat izmantot šīs programmas cilnes pogu WRITE, lai tos ierakstītu savā kontrolierī. Varat arī jebkurā laikā izmantot pogu READ (nolasīt), lai nolasītu šos iestatījumus (tādējādi tiks aizstātas visas vērtības droseles rokturī). Tas nepārraksta nekādus citus iestatījumus.",
    },
  },
};

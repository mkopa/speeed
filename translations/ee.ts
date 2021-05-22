import { Translation } from "./type";

export const ee: Translation = {
  messages: {
    processing: "Töötlemine...",
    deviceIsDisconnected: "Seade on lahti ühendatud!",
    connectingInProgress: "Ühendamine käib...",
    settingsHaveBeenSaved: "Teie seaded on salvestatud!",
    configLoadedSuccessful: "Config laaditud edukalt!",
    overrideFileWarning: {
      header: "Hoiatus!",
      message: {
        theFileText: "Faili",
        areYouSureToOverrideText: "olemas! Kas olete kindel, et soovite selle faili üle kirjutada?",
      },
      buttons: {
        yes: "Override",
        no: "Ei",
      },
    },
    unsupportedConfigurationFile: {
      header: "Viga!",
      text: "Toetamata või katkine konfiguratsioonifail!",
    },
    pleaseWait: "Palun oodake...",
    connectingToMotor: "Ühendamine mootoriga...",
    noDeviceFound: "Seadet ei leitud!",
    cantEstablishingConnection: "Ei saa luua ühendust mootoriga! Kontrollige ühenduse lõppu taaskäivitage!",
    connectedTo: "Ühendatud",
    readBasSuccess: {
      basTypeLevel: "Tasandid",
      basTypeGeneral: "Üldine",
      first: "Loe",
      second: "parameetrid edukalt!",
    },
    readPedalAssistSuccess: "Lugege pedal assist parameetrid edukalt!",
    readThrottleHandleSuccess: "Drosselkäepideme parameetrite lugemine edukalt",
    readAllSuccess: "Lugege kõik parameetrid edukalt!",
    somethingWentWrong: "Midagi läks valesti! Logi:",
    writeSuccess: {
      levels: "Tasandid",
      general: "Üldine",
      pedalAssist: "Pedaalide abistamine",
      throttleHandle: "Gaasikäepide",
      first: "Kirjutage",
      second: "parameetrid edukalt!",
    },
    writeAllSuccess: "Kirjutage kõik parameetrid edukalt!",
  },
  buttons: {
    cancel: "Tühista",
  },
  errors: {
    writeBasErrors: {
      "0": "Madala aku kaitse on väljaspool ulatust, palun lähtestage!",
      "1": "Praegune piirväärtus väljaspool ulatust, palun lähtestage!",
      "2": "PAS0 voolu piirväärtus on ületatud, palun lähtestage!",
      "3": "PAS0 kiiruspiirang on väljaspool lubatud piire, palun lähtestage!",
      "4": "PAS1 voolu piirväärtus on ületatud, palun lähtestage!",
      "5": "PAS1 kiirusepiirang on väljas, palun lähtestage!",
      "6": "PAS2 voolu piirväärtus on ületatud, palun lähtestage!",
      "7": "PAS2 kiirusepiirang on väljas, palun lähtestage!",
      "8": "PAS3 voolu piirväärtus on ületatud, palun lähtestage!",
      "9": "PAS3 kiirusepiirang on väljas, palun lähtestage!",
      "10": "PAS4 voolu piirväärtus on ületatud, palun lähtestage!",
      "11": "PAS4 kiirusepiirang on väljas, palun lähtestage!",
      "12": "PAS5 voolu piirväärtus on ületatud, palun lähtestage!",
      "13": "PAS5 kiirusepiirang on väljas, palun lähtestage!",
      "14": "PAS6 voolu piirväärtus on ületatud, palun lähtestage!",
      "15": "PAS6 kiirusepiirang on väljas, palun lähtestage!",
      "16": "PAS7 voolu piirväärtus on ületatud, palun lähtestage!",
      "17": "PAS7 kiirusepiirang on väljas, palun lähtestage!",
      "18": "PAS8 voolu piirväärtus on ületatud, palun lähtestage!",
      "19": "PAS8 kiirusepiirang on väljas, palun lähtestage!",
      "20": "PAS9 voolu piirväärtus on ületatud, palun lähtestage!",
      "21": "PAS9 kiirusepiirang on väljas, palun lähtestage!",
      "22": "Ratta läbimõõt väljaspool vahemikku, palun lähtestage!",
      "23": "Kiirusmõõdiku signaalid on väljaspool ulatust, palun lähtestage!",
      default: "Kommunikatsiooniprobleem, palun lähtestage!",
    },
    writePasErrors: {
      "0": "Pedaalianduri tüübiviga, palun lähtestage!",
      "1": "Määratud abitaseme viga, palun lähtestage!",
      "2": "Kiirusepiirangu viga, palun lähtestage!",
      "3": "Start Current out of range, palun lähtestage!",
      "4": "Aeglase käivitamise režiimi viga, palun lähtestage!",
      "5": "Start kraad väljaspool ulatust, palun lähtestage!",
      "6": "Töörežiimi viga, palun lähtestage!",
      "7": "Stopp Viivitus väljaspool ulatust, palun lähtestage!",
      "8": "Praegune lagunemine väljaspool vahemikku, palun lähtestage!",
      "9": "Stop Decay väljaspool leviala, palun lähtestage!",
      "10": "Hoidke voolu vahemikust väljas, palun lähtestage!",
      default: "Tundmatu viga, palun lähtestage!",
    },
    writeThrErrors: {
      "0": "Start Voltage out of range, palun lähtestage!",
      "1": "End Voltage out of range, palun lähtestage!",
      "2": "Režiimi viga, palun lähtestage!",
      "3": "Määratud assistendi viga, palun lähtestage!",
      "4": "Kiirusepiirangu viga, palun lähtestage!",
      "5": "Start Current out of range, palun lähtestage!",
      default: "Tundmatu viga, palun lähtestage!",
    },
  },
  mainRouter: {
    home: "Kodu",
    settings: "Seaded",
    help: "Abi",
  },
  main: {
    label_language: "Keel",
    object_Profile: {
      header: "Profiil",
      open: "Avatud",
      save_as: "Salvesta kui",
      save: "Salvesta",
      default_configuration_string: "Vaikimisi konfiguratsioon (faili ei ole määratud)",
      popup_header: "Salvesta konfiguratsioon kui",
      popup_placeholder: "Sisestage faili nimi siia",
      popup_button_label: "Salvesta",
    },
    object_Motor: {
      header: "Mootor",
      read_all: "Loe",
      write_all: "Kirjutage",
      connect: "Ühendage",
      disconnect: "Lahutage",
      status: {
        disconnected: "lahti ühendatud",
        connecting: "ühendamine",
        connected: "ühendatud",
        error: "viga",
      },
      motor_info: {
        status: "Staatus",
        manufacturer: "Tootja",
        model: "Mudel",
        hardware_version: "Riistvara versioon",
        firmware_version: "Püsivara versioon",
        nominal_voltage: "Nominaalne pinge",
        max_current: "Maksimaalne voolutugevus",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Üldine",
      levels: "Tasandid",
      pedal: "Pedal",
      throttle: "Drosselklapp",
    },
    header: {
      readButtonText: "Loe",
      writeButtonText: "Salvesta",
    },
    tabs: {
      general: {
        header: "Üldine",
        lowBatteryProtection: "Madal aku kaitse",
        currentLimit: "Praegune piirang",
        speedMeterType: {
          text: "Kiirusmõõtja tüüp",
          types: ["Väline, rattaarvesti", "Sisemine, mootorimõõtja", "Mootori faasi järgi"],
        },
        speedMeterSignals: "Kiirusmõõtja signaalid",
        wheelDiameter: {
          text: "Ratta läbimõõt",
          types: [
            "16 tolli",
            "17 tolli",
            "18 tolli",
            "19 tolli",
            "20 tolli",
            "21 tolli",
            "22 tolli",
            "23 tolli",
            "24 tolli",
            "25 tolli",
            "26 tolli",
            "27 tolli",
            "700C",
            "28 tolli",
            "29 tolli",
            "30 tolli",
          ],
        },
      },
      levels: {
        header: "Abi tasemed",
        level: "Tasand",
        current: "Praegune",
        speed: "Kiirus",
        popoverCurrentLimitHeader: "Praegune piirväärtus taseme jaoks",
        popoverSpeedLimitHeader: "Taseme kiiruspiirang",
      },
      pedal: {
        header: "Pedaalide abistamine",
        pedalSensorType: {
          text: "Pedaalianduri tüüp",
          types: ["Puudub", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Määratud abi tase",
          types: ["Näidiku käsul", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Kiiruspiirang",
          types: [
            "Näidiku käsul",
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
        startCurrent: "Alusta voolu",
        slowStartMode: "Aeglane käivitusrežiim",
        startDegree: "Alusta kraadi",
        workMode: {
          text: "Töörežiim",
          types: ["Määramata"],
        },
        stopDelay: "Peatamise viivitus",
        currentDecay: "Praegune lagunemine",
        stopDecay: "Lõpeta lagunemine",
        keepCurrent: "Hoidke praegune",
      },
      throttle: {
        header: "Gaasihoidik",
        startVoltage: "Alguspinge",
        endVoltage: "Lõpppinge",
        mode: {
          text: "Režiim",
          types: ["Kiirus", "Praegune"],
        },
        designatedAssistLevel: {
          text: "Määratud abi tase",
          types: ["Näidiku käsul", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Kiiruspiirang",
          types: [
            "Näidiku käsul",
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
        startCurrent: "Alusta voolu",
      },
    },
  },
  help: {
    about: {
      header: "Taotluse kohta",
      p1: "Bafang BBS-mootorite seeria konfiguratsioonitööriist.",
      author: "Autor",
    },
    connection: {
      header: "Ühendus",
      p1:
        "Bafang BBS-seeria elektrilise jalgratta kontrolleriga ühendamiseks on vaja USB-OTG adapterit, USB-seeria adapterit, mille otsas on Julet-tüüpi naissoost pistikühendused.",
      p2:
        'Saate osta ka "originaal" USB-programmeerimiskaabli, kuid see on lihtsalt ülehinnatud USB-seeria adapter, millel on BBS-kontrolleri kaablile sobiv pistik.',
    },
    general: {
      header: "Üldine",
      lowBatteryProtection:
        "See on pinge, mille juures kontroller peatab mootori, et hoida akut liigse tühjenemise eest. See peaks olema tootja poolt õigesti seadistatud ja te ei pea seda muutma. 13S akupakkide puhul on vaikimisi 41V.",
      currentLimit:
        "See on maksimaalne lubatud voolutugevus läbi mootori. Kui teie mootor on näiteks 25A, võite selle seadistada 20A-le, et hoida seda turvaliselt, kui soovite. Nimivoolust suuremat voolu ei ole soovitatav määrata. Isegi 25A puhul on tippvool suurem, nii et parem on mitte seada rohkem kui see.",
      speedMeterType:
        "See valib teie jalgrattal kasutatava kiirusmõõtja. BBS-komplektide puhul on see väline. Selle parameetri määrab tootja ja kui teie seadistus ei ole kohandatud, siis ei pea te seda muutma.",
      speedMeterSignals:
        "Siin saate määrata, mitu signaali ühe pöörde kohta teie andur tekitab. Kui kasutate magnetiga välist andurit, siis genereerib see ühe signaali iga ratta pöörde kohta. Selle parameetri määrab tootja ja kui teie seadistus ei ole kohandatud, siis ei pea te seda muutma.",
      wheelDiameter:
        "Ratta läbimõõt peaks vastama teie veoratta suurusele (seega võib teie jalgrattal olla kaks erineva suurusega ratast). Läbimõõdu seadistamine väiksemaks kui see tegelikult on, suurendab teie kiirust, kuid võib ka kergesti põhjustada mootorikahjustusi.",
      endText:
        "Kui olete lõpetanud oma üldiste seadete häälestamise, võite kasutada programmi selle vahekaardi nuppu WRITE, et kirjutada need oma kontrollerisse. Samuti võite igal ajal kasutada READ nuppu, et neid lugeda (see asendab kõik väärtused jaotises General. See ei kirjuta üle ühtegi muud seadistust.",
    },
    levels: {
      header: "Abi tasemed",
      p1:
        "Need on kõik võimalikud abiseadistused (nii pedaalide abi- kui ka gaasikäepideme jaoks, kasutades ühte neist).",
      p2:
        "Oluline on mainida, et Assist 0 voolu ja kiiruse piirangud peavad olema seatud väärtusele 1, kui soovite kasutada gaasikäepidet, kui LCD-ekraanil on valitud Pedal Assist 0.",
      p3: "Tavaliselt on Assist 0 seatud väärtusele 0, et saaksite soovi korral jalgratast kasutada ilma abita.",
      p4:
        "Olge ettevaatlik nende tasemete määramisel. Kui seadistate voolu liiga madalaks, ei suuda mootor jalgratast liigutada ja see võib kahjustada. Kui seadistate esimese abitaseme voolu liiga kõrgeks, siis on kiirendus käivitamisel märkimisväärne. See võib kahjustada sisemisi käike või panna teid jalgrattalt maha kukkuma.",
      p5:
        "Kiirusepiirang määrab, millisel kiirusel (% teie LCD-ekraanilt määratud maksimaalsest kiirusest) vähendab mootor oma võimsust ja hoiab lihtsalt seda kiirust, mitte ei kiirenda rohkem.",
      p6:
        "Rakenduse ülaosas olevad lülitid võimaldavad kuvada automaatselt teisendatud väärtusi (voolu ja kiiruse või protsentides).",
      endText:
        "Kui olete lõpetanud oma assistentide tasemete seadete häälestamise, võite kasutada programmi selle vahekaardi nuppu WRITE, et need oma kontrollerisse kirjutada. Samuti võite igal ajal kasutada nuppu READ, et neid lugeda (see asendab kõik väärtused Assist Levels. See ei kirjuta üle ühtegi muud seadistust.",
    },
    pedal: {
      header: "Pedaalide abistamine",
      p1:
        "Pedal Assist süsteem abistab teid pedaalimise ajal. Sellel vahekaardil saate selle jõudlust häälestada. Mõnda neist te ei tohiks muuta, kuna need on teie komplekti jaoks spetsiifilised. Need määrab tootja.",
      pedalSensorType:
        "Selle parameetriga valitakse pedaali pöörlemisanduri tüüp. Selle määrab tootja ja seda ei tohiks muuta.",
      designatedAssistLevel:
        'Selle parameetriga on valitud kaks operatsioonitüüpi. Esimene on "Kuvari käsu järgi". See tähendab, et teie LCD-ekraanilt valitakse abitase (see, mis on esitatud vahekaardil Basic settings (Põhiseaded)). Teine võimalus on valida konkreetne abitase, mis on fikseeritud ja mida te ei saa LCD-ekraanilt muuta. Selleks saate valida mis tahes abitasemed vahemikus 0 kuni 9.',
      speedLimit:
        'See on maksimaalne kiirus, millega mootor annab täiendavat kiirendust. Kui kiirus on saavutatud, hoiab see ainult seda, kuid ei kiirenda rohkem. Kui seadistate selle parameetri "By Display\'s Command", saate kiirust määrata LCD ekraanilt. Pidage meeles, et mõned LCD-d võimaldavad määrata kiirust 99km/h, mis ei ole vähemalt praeguste BBS-komplektidega võimalik. Niipalju kui ma olen testinud, on maksimaalne kiirus ilma pedaalideta 40km/h (kui ratta suurus on õigesti seadistatud). Seda seadistust kasutatakse kõigi abitasemete puhul, mida näete vahekaardil Basic. Kui te seadistate selle 40km/h (selles programmis või LCD ekraanil) ja teie Assist 5 tase on seatud 50% kiirusele, siis saate selle assistentide taseme juures saavutada 20km/h.',
      startCurrent:
        "See on käivitusvool, kui hakkate pedaale pöörama. Seda on hea seada vähemalt 10%, et jalgratas hakkaks liikuma ja mootor ei jääks seisma. Selle seadmine väga kõrgele väärtusele paneb jalgratta käivitamisel väga kiiresti kiirendama, mis võib kahjustada selle sisemisi käike ja ka mootorit. Soovitatav väärtus on vahemikus 10% kuni 30%. Samuti peaksite jälgima, et te ei alustaks pedaalimist liiga suure käiguga, mis koormaks mootorit liiga palju.",
      slowStartMode:
        "See seade kontrollib, kui kiiresti saavutatakse käivitusvool. Saate jalgratta sujuvalt kiirendada ja panna selle kiiresti reageerima. Tavalise jalgrattasõidu puhul sobib tavaliselt hästi väärtus 4 ümber. Kui te olete mägirattur, siis muudab seadistus madalale väärtusele kiirenduse kiiremaks, mis võib olla kasulik, kuid te peaksite olema ettevaatlik, et mitte küpsetada oma kontrollerit ja mootorit.",
      startDegree:
        "See parameeter määrab, mitu impulssi pedaaliandurilt on vaja enne mootori käivitamist. BBS-komplektide puhul tekitab täielik pedaali pöörlemine 24 impulssi. Selle seadistamine 0 või 1 ei toimi. Väärtus umbes 4 töötab hästi, kuna see ei käivitu vaid väikese liigutuse korral ja ei nõua ka liiga suurt pööret.",
      workMode:
        "Selle parameetri eesmärk ei ole väga selge. See peaks reguleerima võimsust vastavalt pedaali pöörlemiskiirusele. Tundub, et tootja poolt määratud väärtus töötab suurepäraselt, nii et seda ei ole vaja muuta.",
      stopDelay: "See on viivitus pärast pedaalimise lõpetamist, enne kui mootor seiskub. Väärtus 250ms töötab hästi.",
      currentDecay:
        "See parameeter määrab, kui kiiresti langeb voolutugevus, kui pedaalite kiiresti ja saavutate valitud abitasemel maksimaalse kiiruse. Madalam väärtus tähendab, et vool hakkab langema väiksema kiiruse juures.",
      stopDecay: "Aeg, mis kulub mootori seiskamiseks.",
      keepCurrent:
        "See seade reguleerib protsentuaalset osa maksimaalsest voolust valitud abitasemel, mis voolab läbi mootori, kui saavutate maksimaalse kiiruse ja jätkate pedaalimist. Kui teie maksimaalne voolutugevus on 25 A ja te kasutate Pedal Assist 5, mis on seadistatud 50% voolutugevusele, siis on maksimaalne voolutugevus 12,5 A selle abitaseme puhul. Kui siis Keep Current on seadistatud 50%-le, kui saavutate maksimaalse kiiruse ja jätkate pedaalimist, jääb voolutugevus 6,25A juurde. See tagab sujuva ülemineku abivoolule, kui vähendate pedaalimiskiirust ja liikumiskiirus langeb alla maksimumkiiruse.",
      endText:
        "Kui olete lõpetanud pedaalide abiseadete häälestamise, võite kasutada programmi selle vahekaardi nuppu WRITE, et kirjutada need oma kontrollerisse. Samuti võite igal ajal kasutada READ nuppu, et neid lugeda (see asendab kõik väärtused Pedal Assisti juures. See ei kirjuta üle muid seadistusi.",
    },
    throttle: {
      header: "Gaasikäepide",
      p1:
        "Kui teie komplekt on varustatud gaasikäepidemega, siis võimaldab see vahekaart selle tööd seadistada. Veenduge, et Assis 0 on seatud 1 (nii voolu kui ka kiiruse osas), kui soovite seda kasutada, kui LCD ekraanil on valitud Pedal Assist S0.",
      startVoltage:
        "See on gaasi käepideme väljundpinge, mille juures mootor käivitub. Minimaalne väärtus, mille juures kontroller reageerib, on 1,1 V.",
      endVoltage:
        "See on gaasi käepideme väljundpinge, mille juures mootor saavutab oma maksimaalse võimsuse (mida piiravad muud seadistused). Maksimaalne kontrollerilt vastuvõetav väärtus on 4,2 V. Selle parameetriga tuleb veidi mängida, kuna gaasikäepideme maksimum võib sõltuvalt mudelist olla erinev. Kui te seadistate selle parameetri liiga madalaks, siis ei saa te gaasikäepidemest peaaegu mingit reaktsiooni. Kui seadistate selle maksimaalsele väärtusele, mida käepide suudab toota, saate võimalikult laiaulatusliku kontrolli mootori võimsuse üle.",
      mode:
        "See on gaasikäepideme töörežiim. Teil on kaks võimalust: kiirus ja voolu kiirus. Kui see on seatud kiirusele, kasutab kontroller liikumiskiirust, et seadistada mootori võimsust vastavalt gaasikäepideme asendile. Kahjuks on kiiruse mõõtmise viisi tõttu märkimisväärne viivitus ja reaktsioon on selles režiimis üsna halb. Kui käepide on seadistatud voolule, reguleerib käepide mootori voolu vastavalt oma asendile. See režiim töötab paremini ja sarnaneb auto juhtimisega.",
      designatedAssistLevel:
        'Saate selle määrata "Kuvari käsu järgi" või valida fikseeritud taseme. Esimene valik kasutab teie LCD-ekraanilt saadud PAS-eeskirja seadistust. See tähendab, et maksimaalne võimsus ja kiirus sõltuvad valitud PAS-tasemest ja gaasikäepideme asendist. Seega, kui on valitud madal PAS, on ka maksimaalne voolutugevus ja kiirus madalad, isegi kui vajutate gaasipedaali maksimaalselt. Kui selle parameetri jaoks on valitud fikseeritud abitase, kasutab gaasikäepide maksimaalset voolu ja kiirust. Olge ettevaatlik, kui te seadistate selle tasemele 9, et mitte vajutada gaasipedaali maksimumini, kui te olete peatunud, sest suur vool ja võimsus võivad teie kontrollerit ja mootorit kahjustada.',
      speedLimit:
        "Selle parameetriga saate piirata maksimaalset kiirust gaasikäepideme kasutamisel. See tühistab määratud abitaseme maksimaalse kiiruse, kui see on suurem.",
      startCurrent:
        "See on protsent maksimaalsest mootorile rakendatavast voolust, kui gaasikäepide tekitab minimaalse lubatud pinge. Tavaliselt töötab hästi väärtus 10% või 20%. Kui teie maksimaalseks vooluks on vahekaardil General seatud 25A ja Start Current on seatud 10%, siis saate 2,5A stardivoolu. See toob kaasa sujuva käivituse ja ei koorma sisemisi käike liiga palju. Kui seadistate selle parameetri väga kõrgele väärtusele, võite kahjustada sisemisi hammasrattaid ja mootorit.",
      endText:
        "Kui olete lõpetanud oma gaasikäepideme seadete häälestamise, võite kasutada programmi selle vahekaardi nuppu WRITE, et kirjutada need oma kontrollerisse. Samuti võite igal ajal kasutada READ nuppu, et neid lugeda (see asendab kõik väärtused Throttle Handle'i käepidemel. See ei kirjuta üle ühtegi muud seadistust.",
    },
  },
};

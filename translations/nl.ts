import { Translation } from "./type";

export const nl: Translation = {
  messages: {
    processing: "Verwerking...",
    deviceIsDisconnected: "Apparaat is losgekoppeld!",
    connectingInProgress: "Verbinden in uitvoering...",
    settingsHaveBeenSaved: "Uw instellingen zijn opgeslagen!",
    configLoadedSuccessful: "Config geladen succesvol!",
    overrideFileWarning: {
      header: "Waarschuwing!",
      message: {
        theFileText: "Het bestand",
        areYouSureToOverrideText: "bestaan! Weet je zeker dat je dit bestand wilt overschrijven?",
      },
      buttons: {
        yes: "Override",
        no: "Geen",
      },
    },
    unsupportedConfigurationFile: {
      header: "Fout!",
      text: "Niet ondersteund of gebroken configuratiebestand!",
    },
    pleaseWait: "Wacht alstublieft...",
    connectingToMotor: "Verbinden met de motor...",
    noDeviceFound: "Geen apparaat gevonden!",
    cantEstablishingConnection:
      "Kan geen verbinding met motor tot stand brengen! Controleer verbinding einde herstart!",
    connectedTo: "Verbonden met",
    readBasSuccess: {
      basTypeLevel: "Niveaus",
      basTypeGeneral: "Algemeen",
      first: "Lees",
      second: "parameters met succes!",
    },
    readPedalAssistSuccess: "Pedal Assist parameters succesvol uitgelezen!",
    readThrottleHandleSuccess: "Succesvol lezen van de gashendel parameters",
    readAllSuccess: "Lees alle parameters succesvol!",
    somethingWentWrong: "Er is iets misgegaan! Logboek:",
    writeSuccess: {
      levels: "Niveaus",
      general: "Algemeen",
      pedalAssist: "Pedaalassistentie",
      throttleHandle: "Gashendel",
      first: "Schrijf",
      second: "parameters met succes!",
    },
    writeAllSuccess: "Schrijf alle parameters succesvol!",
  },
  buttons: {
    cancel: "Annuleren",
  },
  errors: {
    writeBasErrors: {
      "0": "Low Battery Protection buiten bereik, reset a.u.b.!",
      "1": "Huidige limiet buiten bereik, reset aub!",
      "2": "Stroomlimiet voor PAS0 buiten bereik, reset aub!",
      "3": "Snelheidslimiet voor PAS0 buiten bereik, reset aub!",
      "4": "Stroomlimiet voor PAS1 buiten bereik, reset aub!",
      "5": "Snelheidslimiet voor PAS1 buiten bereik, reset aub!",
      "6": "Huidige limiet voor PAS2 buiten bereik, reset aub!",
      "7": "Snelheidslimiet voor PAS2 buiten bereik, reset aub!",
      "8": "Stroomlimiet voor PAS3 buiten bereik, reset aub!",
      "9": "Snelheidslimiet voor PAS3 buiten bereik, reset aub!",
      "10": "Stroomlimiet voor PAS4 buiten bereik, reset aub!",
      "11": "Snelheidslimiet voor PAS4 buiten bereik, reset aub!",
      "12": "Stroomlimiet voor PAS5 buiten bereik, reset aub!",
      "13": "Snelheidslimiet voor PAS5 buiten bereik, reset aub!",
      "14": "Stroomlimiet voor PAS6 buiten bereik, reset aub!",
      "15": "Snelheidslimiet voor PAS6 buiten bereik, reset aub!",
      "16": "Huidige limiet voor PAS7 buiten bereik, reset aub!",
      "17": "Snelheidslimiet voor PAS7 buiten bereik, reset aub!",
      "18": "Huidige limiet voor PAS8 buiten bereik, reset aub!",
      "19": "Snelheidslimiet voor PAS8 buiten bereik, reset aub!",
      "20": "Huidige limiet voor PAS9 buiten bereik, reset aub!",
      "21": "Snelheidslimiet voor PAS9 buiten bereik, reset aub!",
      "22": "Wieldiameter buiten bereik, reset aub!",
      "23": "Snelheidsmeter Signalen buiten bereik, reset aub!",
      default: "Communicatie probleem, reset alsjeblieft!",
    },
    writePasErrors: {
      "0": "Fout in pedaalsensor, reset aub!",
      "1": "Aangewezen assistent-niveau fout, reset alstublieft!",
      "2": "Snelheidslimiet fout, reset aub!",
      "3": "Start Stroom buiten bereik, reset aub!",
      "4": "Slow-start modus fout, reset aub!",
      "5": "Startree buiten bereik, reset alsjeblieft!",
      "6": "Werkmodus fout, reset aub!",
      "7": "Stop! Vertraging buiten bereik, reset alsjeblieft!",
      "8": "Huidige Verval buiten bereik, reset alstublieft!",
      "9": "Stop! Verval buiten bereik, reset alsjeblieft!",
      "10": "Hou Stroom buiten bereik, reset!",
      default: "Onbekende fout, reset alstublieft!",
    },
    writeThrErrors: {
      "0": "Startspanning buiten bereik, reset alstublieft!",
      "1": "Eindspanning buiten bereik, reset aub!",
      "2": "Mode error, reset aub!",
      "3": "Aangewezen assistent fout, reset aub!",
      "4": "Snelheidslimiet fout, reset aub!",
      "5": "Start Stroom buiten bereik, reset aub!",
      default: "Onbekende fout, reset alstublieft!",
    },
  },
  mainRouter: {
    home: "Home",
    settings: "Instellingen",
    help: "Help",
  },
  main: {
    label_language: "Taal",
    object_Profile: {
      header: "Profiel",
      open: "Open",
      save_as: "Opslaan als",
      save: "Save",
      default_configuration_string: "Standaardconfiguratie (geen bestand opgegeven)",
      popup_header: "Configuratie opslaan als",
      popup_placeholder: "Vul hier de bestandsnaam in",
      popup_button_label: "Save",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Lees",
      write_all: "Schrijf",
      connect: "Connect",
      disconnect: "Loskoppelen",
      status: {
        disconnected: "losgekoppeld",
        connecting: "aansluiten",
        connected: "aangesloten",
        error: "fout",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Fabrikant",
        model: "Model",
        hardware_version: "Hardware versie",
        firmware_version: "Firmware Versie",
        nominal_voltage: "Nominale spanning",
        max_current: "Max. stroom",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Algemeen",
      levels: "Niveaus",
      pedal: "Pedaal",
      throttle: "Gashendel",
    },
    header: {
      readButtonText: "Lees",
      writeButtonText: "Gem",
    },
    tabs: {
      general: {
        header: "Algemeen",
        lowBatteryProtection: "Lage Batterij Bescherming",
        currentLimit: "Huidige limiet",
        speedMeterType: {
          text: "Snelheidsmeter Type",
          types: ["Extern, Wielmeter", "Intern, Motormeter", "Per motorfase"],
        },
        speedMeterSignals: "Snelheidsmeter Signalen",
        wheelDiameter: {
          text: "Wheel Diameter",
          types: [
            "16 inch",
            "17 inch",
            "18 inch",
            "19 inch",
            "20 inch",
            "21 inch",
            "22 inch",
            "23 inch",
            "24 inch",
            "25 inch",
            "26 inch",
            "27 inch",
            "700C",
            "28 inch",
            "29 inch",
            "30 inch",
          ],
        },
      },
      levels: {
        header: "Assist Niveaus",
        level: "Niveau",
        current: "Huidige",
        speed: "Snelheid",
        popoverCurrentLimitHeader: "Huidige Limiet voor niveau",
        popoverSpeedLimitHeader: "Snelheidslimiet voor niveau",
      },
      pedal: {
        header: "Pedaalassistentie",
        pedalSensorType: {
          text: "Type pedaalsensor",
          types: ["Geen", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Aangewezen Assist Niveau",
          types: ["Op bevel van het scherm", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Snelheidslimiet",
          types: [
            "Op bevel van het scherm",
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
            "32 km/u",
            "33km/h",
            "34km/h",
            "35 km/u",
            "36 km/u",
            "37km/h",
            "38km/h",
            "39 km/u",
            "40 km/h",
          ],
        },
        startCurrent: "Start Stroom",
        slowStartMode: "Modus langzame start",
        startDegree: "Begin graad",
        workMode: {
          text: "Werkmodus",
          types: ["Onbepaald"],
        },
        stopDelay: "Stop Delay",
        currentDecay: "Huidig verval",
        stopDecay: "Stop Verval",
        keepCurrent: "Actueel houden",
      },
      throttle: {
        header: "Throttle Assist",
        startVoltage: "Startspanning",
        endVoltage: "Eindspanning",
        mode: {
          text: "Modus",
          types: ["Snelheid", "Huidige"],
        },
        designatedAssistLevel: {
          text: "Aangewezen Assist Niveau",
          types: ["Op bevel van het scherm", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Snelheidslimiet",
          types: [
            "Op bevel van het scherm",
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
            "32 km/u",
            "33km/h",
            "34km/h",
            "35 km/u",
            "36 km/u",
            "37km/h",
            "38km/h",
            "39 km/u",
            "40 km/h",
          ],
        },
        startCurrent: "Start Stroom",
      },
    },
  },
  help: {
    about: {
      header: "Over de toepassing",
      p1: "Configuratiehulpmiddel voor Bafang BBS motorserie.",
      author: "Auteur",
    },
    connection: {
      header: "Aansluiting",
      p1:
        "Om verbinding te maken met de controller van uw elektrische fiets uit de Bafang BBS serie heeft u een USB-OTG adapter nodig, USB naar Serieel adapter met Julet type vrouwelijke pin aansluitingen aan het eind.",
      p2:
        'Je kunt ook een "originele" USB programmeerkabel kopen, maar dat is gewoon een veel te dure USB naar Serieel adapter met de juiste connector voor de kabel op je BBS controller.',
    },
    general: {
      header: "Algemeen",
      lowBatteryProtection:
        "Dit is de spanning waarbij de controller de motor zal stoppen om uw accu te beschermen tegen overontlading. Het moet door de fabrikant goed worden ingesteld en u hoeft het niet te veranderen. Voor 13S accu's is 41V de standaardwaarde.",
      currentLimit:
        "Dit is de maximale stroom die door de motor mag stromen. Als uw motor bijvoorbeeld 25A is, kunt u hem op 20A instellen om hem veilig te houden als u dat wilt. Het is niet aan te raden een hogere stroom dan de nominale in te stellen. Zelfs als u 25A instelt, zal de piekstroom hoger zijn, dus kunt u beter niet meer dan dat instellen.",
      speedMeterType:
        "Deze selecteert de snelheidsmeter die op uw fiets wordt gebruikt. Voor BBS kits is dit een externe meter. Deze parameter is ingesteld door de fabrikant en als je setup niet op maat is, hoef je hem niet te veranderen.",
      speedMeterSignals:
        "Hier kunt u instellen hoeveel signalen per omwenteling uw sensor genereert. Als je de externe sensor met magneet gebruikt, genereert hij één signaal per wielomwenteling. Deze parameter wordt ingesteld door de fabrikant en als je geen aangepaste setup hebt, hoef je hem niet te veranderen.",
      wheelDiameter:
        "De wieldiameter moet overeenkomen met de maat van je aandrijfwiel (je fiets kan dus twee verschillende maten wielen hebben). Als u de diameter kleiner instelt dan hij in werkelijkheid is, verhoogt u uw snelheid, maar dit kan ook gemakkelijk leiden tot motorschade.",
      endText:
        "Als je klaar bent met het afstellen van je General instellingen kun je de WRITE knop in dit tabblad van het programma gebruiken om ze naar je controller te schrijven. U kunt ook op elk moment de READ knop gebruiken om deze te lezen (dit zal alle waarden in de General vervangen. Dit zal geen andere instellingen overschrijven.",
    },
    levels: {
      header: "Assist Niveaus",
      p1:
        "Dat zijn alle mogelijke ondersteuningsinstellingen (zowel voor trapondersteuning als voor gashendel bij gebruik van een van die instellingen).",
      p2:
        "Het is belangrijk te vermelden dat de stroom- en snelheidslimieten van Assist 0 op 1 moeten worden ingesteld als u uw gashendel wilt kunnen gebruiken met Pedal Assist 0 geselecteerd op uw LCD.",
      p3: "Gewoonlijk is Assist 0 ingesteld op 0, zodat u uw fiets zonder ondersteuning kunt gebruiken als u dat wilt.",
      p4:
        "Wees voorzichtig met het instellen van deze niveaus. Als u de stroomsterkte te laag instelt, zal de motor de fiets niet kunnen voortbewegen en kan hij schade oplopen. Als u de stroomsterkte van het eerste ondersteuningsniveau te hoog instelt, zal de versnelling bij de start aanzienlijk zijn. Hierdoor kunnen de interne tandwielen beschadigd raken of kunt u van uw fiets vallen.",
      p5:
        "De snelheidslimiet bepaalt bij welke snelheid (% van de maximumsnelheid die op uw LCD-scherm is ingesteld) de motor zijn vermogen zal verminderen en gewoon die snelheid zal aanhouden in plaats van meer te versnellen.",
      p6:
        "Schakelaars bovenaan de toepassing laten u toe automatisch omgezette waarden te tonen (stroom en snelheid of percentages)",
      endText:
        "Als je klaar bent met het afstellen van je Assist Levels instellingen kun je de WRITE knop in dit tabblad van het programma gebruiken om ze naar je controller te schrijven. Je kunt ook op elk moment de READ knop gebruiken om ze te lezen (dit zal alle waarden op de Assist Levels vervangen. Dit zal geen andere instellingen overschrijven.",
    },
    pedal: {
      header: "Pedaalassistentie",
      p1:
        "Het trapassistentiesysteem helpt u terwijl u trapt. Op dit tabblad kunt u de prestaties afstellen. Sommige moet je niet veranderen omdat ze specifiek zijn voor je uitrusting. Die worden ingesteld door de fabrikant.",
      pedalSensorType:
        "Deze parameter selecteert het type pedaalrotatiesensor. Hij is ingesteld door de fabrikant en mag niet worden gewijzigd.",
      designatedAssistLevel:
        'Met deze parameter kunt u twee soorten bewerkingen selecteren. De eerste is "By Display\'s Command". Dit betekent dat het ondersteuningsniveau (dat van het tabblad Basisinstellingen) wordt geselecteerd via uw LCD. De tweede optie is om een specifiek ondersteuningsniveau te kiezen dat vast zal zijn en dat u niet kunt wijzigen vanaf het LCD-scherm. Hiervoor kunt u een ondersteuningsniveau van 0 tot 9 kiezen.',
      speedLimit:
        "Dit is de maximumsnelheid waarbij de motor extra versnelling zal geven. Wanneer de snelheid is bereikt zal hij deze alleen aanhouden maar niet meer versnellen. Als u deze parameter instelt op \"By Display's Command\" kunt u de snelheid instellen vanaf uw LCD. Houd er rekening mee dat je met sommige LCD's een snelheid van 99km/h kunt instellen, wat niet mogelijk is met de huidige BBS kits. Voor zover ik heb getest is de maximum snelheid zonder te trappen 40km/h (als de wielmaat goed is ingesteld). Deze instelling wordt gebruikt voor alle ondersteuningsstanden die je ziet in het tabblad Basic. Als je dit instelt op 40km/h (in dit programma of van je LCD) en je Assist 5 niveau is ingesteld op 50% snelheid dan zul je in staat zijn om 20km/h te halen op dat ondersteuningsniveau.",
      startCurrent:
        "Dit is de startstroom wanneer je de pedalen begint te draaien. Het is goed om dit op ten minste 10% in te stellen om er zeker van te zijn dat de fiets begint te bewegen en de motor niet afslaat. Een zeer hoge waarde zorgt ervoor dat de fiets bij het starten zeer snel accelereert, wat de interne tandwielen en ook de motor kan beschadigen. Aanbevolen wordt een waarde tussen 10% en 30%. U moet er ook voor zorgen dat u niet in een te hoge versnelling begint te trappen, waardoor de motor te zwaar wordt belast.",
      slowStartMode:
        "Deze instelling regelt hoe snel de startstroom wordt bereikt. U kunt uw fiets soepel laten versnellen en hem snel laten reageren. Een waarde rond 4 werkt meestal goed voor normaal fietsen. Als u mountainbiker bent, zal een lage waarde de versnelling sneller maken, wat nuttig kan zijn, maar u moet oppassen dat u uw controller en motor niet frituurt.",
      startDegree:
        "Deze parameter bepaalt hoeveel pulsen van de pedaalsensor nodig zijn voordat de motor start. Een volledige pedaalomwenteling bij BBS kits genereert 24 pulsen. Als dit op 0 of 1 wordt gezet, werkt het niet. Een waarde rond 4 werkt goed omdat het niet start bij een kleine beweging en ook niet te veel rotatie vereist.",
      workMode:
        "Het doel van deze parameter is niet erg duidelijk. Hij wordt verondersteld het vermogen te regelen volgens de rotatiesnelheid van het pedaal. De door de fabrikant ingestelde waarde lijkt goed te werken, dus u hoeft hem niet te veranderen.",
      stopDelay:
        "Dit is de vertraging nadat je stopt met trappen voordat de motor stopt. Een waarde van 250ms werkt goed.",
      currentDecay:
        "Deze parameter bepaalt hoe snel de stroomsterkte daalt wanneer u snel trapt en de maximumsnelheid bereikt bij het geselecteerde ondersteuningsniveau. Een lagere waarde betekent dat de stroom zal beginnen te dalen bij een lagere snelheid.",
      stopDecay: "De tijd die de motor nodig heeft om te stoppen.",
      keepCurrent:
        "Deze instelling bepaalt het percentage van de maximale stroom op het geselecteerde ondersteuningsniveau dat door de motor zal stromen wanneer u de maximumsnelheid bereikt en blijft trappen. Dus als uw maximale stroom 25A is en u gebruikt Pedal Assist 5 ingesteld op 50% stroom, dan zult u een maximale stroom van 12,5A hebben voor dit ondersteuningsniveau. Als vervolgens Keep Current is ingesteld op 50% wanneer de maximumsnelheid is bereikt en u doortrapt, wordt de stroom op 6,25 A gehouden. Dit zorgt voor een soepele overgang naar ondersteuningsvermogen wanneer u de pedaalsnelheid vermindert en de rijsnelheid onder het maximum daalt.",
      endText:
        "Als u klaar bent met het afstellen van uw Pedal Assist instellingen kunt u de WRITE knop in dit tabblad van het programma gebruiken om ze naar uw controller te schrijven. U kunt ook op elk moment de READ knop gebruiken om ze te lezen (dit zal alle waarden op de Pedal Assist vervangen. Dit zal geen andere instellingen overschrijven.",
    },
    throttle: {
      header: "Gashendel",
      p1:
        "Als je kit is uitgerust met een gashendel dan kun je met dit tabblad de werking ervan configureren. Zorg ervoor dat Assis 0 op 1 staat (zowel stroom als snelheid) als je het wilt gebruiken wanneer Pedal Assist S0 geselecteerd is op je LCD.",
      startVoltage:
        "Dit is de uitgangsspanning van de gashendel waarbij de motor zal starten. Het minimum waarop de regelaar reageert is 1.1V",
      endVoltage:
        "Dit is de uitgangsspanning van de gashendel waarbij de motor zijn maximumvermogen zal bereiken (beperkt door andere instellingen). Het maximum dat door de regelaar wordt geaccepteerd is 4,2V. Je moet een beetje spelen met deze parameter omdat het maximum van de gashendel kan verschillen afhankelijk van het model. Als je deze parameter te laag instelt krijg je bijna geen reactie van de gashendel. Als je het instelt op het maximum dat de hendel kan produceren krijg je het grootst mogelijke bereik van controle over het motorvermogen.",
      mode:
        "Dit is de werkingsmodus van de gashendel. Je hebt twee mogelijkheden: snelheid en stroom. In deze stand gebruikt de controller de snelheid van de beweging om het motorvermogen in te stellen op basis van de stand van de gashendel. Helaas is er een aanzienlijke vertraging door de manier waarop de snelheid wordt gemeten en de respons is vrij slecht in deze modus. In de stand stroom regelt de handgreep de motorstroom in overeenstemming met zijn positie. Deze modus werkt beter en lijkt op de werking van een auto.",
      designatedAssistLevel:
        'U kunt dit instellen op "By Display\'s Command" of een vast niveau kiezen. De eerste optie gebruikt de PAS-instelling van je LCD. Dit betekent dat het maximale vermogen en de maximale snelheid afhangen van het gekozen PAS-niveau en de stand van de gashendel. Dus als een laag PAS-niveau is geselecteerd, zullen de maximale stroom en snelheid ook laag zijn, zelfs als je de gashendel tot het maximum duwt. Als een vast ondersteuningsniveau is geselecteerd voor deze parameter zal de gashendel zijn maximale stroom en snelheid gebruiken. Wees voorzichtig als je dit instelt op niveau 9 dat je de gashendel niet tot het maximum duwt wanneer je stopt omdat de hoge stroom en het vermogen je controller en motor kunnen beschadigen.',
      speedLimit:
        "Met deze parameter kunt u de maximumsnelheid bij gebruik van de gashendel beperken. Dit overschrijft de aangewezen maximumsnelheid van het ondersteuningsniveau als deze hoger is.",
      startCurrent:
        "Dit is het percentage van de maximale stroom die op de motor wordt aangelegd wanneer de gashendel de minimaal toegelaten spanning opwekt. Meestal werkt een waarde van 10% of 20% goed. Als je maximale stroom op het tabblad Algemeen is ingesteld op 25A en Startstroom is ingesteld op 10% krijg je 2,5A startstroom. Dit zal leiden tot een vlotte start en zal de interne tandwielen niet te veel belasten. Als u deze parameter op een zeer hoge waarde instelt, kunnen de interne tandwielen en de motor beschadigd raken.",
      endText:
        "Als je klaar bent met het afstellen van je Throttle Handle instellingen kun je de WRITE knop in dit tabblad van het programma gebruiken om ze naar je controller te schrijven. Je kunt ook altijd de knop READ gebruiken om ze te lezen (dit zal alle waarden bij de Throttle Handle vervangen. Dit zal geen andere instellingen overschrijven.",
    },
  },
};

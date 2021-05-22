import { Translation } from "./type";

export const se: Translation = {
  messages: {
    processing: "Bearbetning...",
    deviceIsDisconnected: "Enheten är bortkopplad!",
    connectingInProgress: "Anslutning pågår...",
    settingsHaveBeenSaved: "Dina inställningar har sparats!",
    configLoadedSuccessful: "Konfigurationen laddades framgångsrikt!",
    overrideFileWarning: {
      header: "Varning!",
      message: {
        theFileText: "Filen",
        areYouSureToOverrideText: "existerar! Är du säker på att du vill åsidosätta denna fil?",
      },
      buttons: {
        yes: "Överprövning",
        no: "Ingen",
      },
    },
    unsupportedConfigurationFile: {
      header: "Fel!",
      text: "Konfigurationsfil som inte stöds eller är trasig!",
    },
    pleaseWait: "Vänligen vänta...",
    connectingToMotor: "Anslutning till motor...",
    noDeviceFound: "Ingen enhet hittad!",
    cantEstablishingConnection:
      "Kan inte etablera kontakt med motorn! Kontrollera anslutningen i slutet och starta om!",
    connectedTo: "Ansluten till",
    readBasSuccess: {
      basTypeLevel: "Nivåer",
      basTypeGeneral: "Allmänt",
      first: "Läs",
      second: "parametrar framgångsrikt!",
    },
    readPedalAssistSuccess: "Läs Pedal Assist-parametrarna framgångsrikt!",
    readThrottleHandleSuccess: "Läsning av parametrar för gashandtag framgångsrikt",
    readAllSuccess: "Läs alla parametrar framgångsrikt!",
    somethingWentWrong: "Något gick fel! Logg:",
    writeSuccess: {
      levels: "Nivåer",
      general: "Allmänt",
      pedalAssist: "Pedalassistans",
      throttleHandle: "Gashandtag",
      first: "Skriv till",
      second: "parametrar framgångsrikt!",
    },
    writeAllSuccess: "Skriv alla parametrar framgångsrikt!",
  },
  buttons: {
    cancel: "Avbryt",
  },
  errors: {
    writeBasErrors: {
      "0": "Lågt batteri Skyddet ligger utanför räckvidden, återställ det!",
      "1": "Strömgränsen ligger utanför intervallet, återställ den!",
      "2": "Strömgränsen för PAS0 ligger utanför intervallet, återställ den!",
      "3": "Hastighetsgräns för PAS0 utanför intervallet, återställ den!",
      "4": "Strömgränsen för PAS1 ligger utanför intervallet, återställ den!",
      "5": "Hastighetsgränsen för PAS1 ligger utanför intervallet, återställ den!",
      "6": "Strömgränsen för PAS2 ligger utanför intervallet, återställ den!",
      "7": "Hastighetsbegränsning för PAS2 ligger utanför intervallet, återställ den!",
      "8": "Strömgränsen för PAS3 ligger utanför intervallet, återställ den!",
      "9": "Hastighetsgränsen för PAS3 ligger utanför intervallet, återställ den!",
      "10": "Strömgränsen för PAS4 ligger utanför intervallet, återställ den!",
      "11": "Hastighetsgränsen för PAS4 ligger utanför intervallet, återställ den!",
      "12": "Strömgränsen för PAS5 ligger utanför intervallet, återställ den!",
      "13": "Hastighetsgränsen för PAS5 ligger utanför intervallet, återställ den!",
      "14": "Strömgränsen för PAS6 ligger utanför intervallet, återställ den!",
      "15": "Hastighetsgränsen för PAS6 ligger utanför intervallet, återställ den!",
      "16": "Strömgränsen för PAS7 ligger utanför intervallet, återställ den!",
      "17": "Hastighetsgränsen för PAS7 ligger utanför intervallet, återställ den!",
      "18": "Strömgränsen för PAS8 ligger utanför intervallet, återställ den!",
      "19": "Hastighetsgränsen för PAS8 ligger utanför intervallet, återställ den!",
      "20": "Strömgränsen för PAS9 ligger utanför intervallet, återställ den!",
      "21": "Hastighetsgränsen för PAS9 ligger utanför intervallet, återställ den!",
      "22": "Hjuldiameter utanför intervallet, vänligen återställ!",
      "23": "Hastighetsmätaren signalerar utanför räckvidd, återställ den!",
      default: "Kommunikationsproblem, vänligen återställ!",
    },
    writePasErrors: {
      "0": "Pedalsensor-typfel, återställ den!",
      "1": "Fel i den utsedda assistansnivån, återställ den!",
      "2": "Fel i hastighetsgränsen, återställ den!",
      "3": "Start Current är utom räckvidd, återställ den!",
      "4": "Fel i långsamstartläge, återställ!",
      "5": "Start Degree utom räckhåll, återställ!",
      "6": "Fel i arbetsläget, återställ!",
      "7": "Stop Delay utom räckvidd, återställ!",
      "8": "Current Decay är inte inom räckvidden, återställ!",
      "9": "Stop Decay utom räckhåll, återställ!",
      "10": "Håll Current utom räckhåll, återställ den!",
      default: "Okänt fel, vänligen återställ!",
    },
    writeThrErrors: {
      "0": "Startspänningen ligger utanför intervallet, återställ den!",
      "1": "Slut Spänningen ligger utanför intervallet, återställ den!",
      "2": "Lägesfel, vänligen återställ!",
      "3": "Fel i Designated Assist, vänligen återställ!",
      "4": "Fel i hastighetsgränsen, återställ den!",
      "5": "Start Current är utom räckvidd, återställ den!",
      default: "Okänt fel, vänligen återställ!",
    },
  },
  mainRouter: {
    home: "Hem",
    settings: "Inställningar",
    help: "Hjälp",
  },
  main: {
    label_language: "Språk",
    object_Profile: {
      header: "Profil",
      open: "Öppna",
      save_as: "Spara som",
      save: "Spara",
      default_configuration_string: "Standardkonfiguration (ingen fil anges)",
      popup_header: "Spara konfigurationen som",
      popup_placeholder: "Ange filnamnet här",
      popup_button_label: "Spara",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Läs",
      write_all: "Skriv till",
      connect: "Anslut",
      disconnect: "Koppla bort",
      status: {
        disconnected: "bortkopplad",
        connecting: "anslutning av",
        connected: "ansluten",
        error: "fel",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Tillverkare",
        model: "Modell",
        hardware_version: "Maskinvaruversion",
        firmware_version: "Version av fast programvara",
        nominal_voltage: "Nominell spänning",
        max_current: "Max ström",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Allmänt",
      levels: "Nivåer",
      pedal: "Pedal",
      throttle: "Gasreglage",
    },
    header: {
      readButtonText: "Läs",
      writeButtonText: "Spara",
    },
    tabs: {
      general: {
        header: "Allmänt",
        lowBatteryProtection: "Skydd vid lågt batteri",
        currentLimit: "Strömbegränsning",
        speedMeterType: {
          text: "Typ av hastighetsmätare",
          types: ["Extern, hjulmätare", "Internt, motor mätare", "Enligt motorfas"],
        },
        speedMeterSignals: "Signaler för hastighetsmätare",
        wheelDiameter: {
          text: "Hjuldiameter",
          types: [
            "16 tum",
            "17 tum",
            "18 tum",
            "19 tum",
            "20 tum",
            "21 tum",
            "22 tum",
            "23 tum",
            "24 tum",
            "25 tum",
            "26 tum",
            "27 tum",
            "700C",
            "28 tum",
            "29 tum",
            "30 tum",
          ],
        },
      },
      levels: {
        header: "Assistnivåer",
        level: "Nivå",
        current: "Aktuell",
        speed: "Hastighet",
        popoverCurrentLimitHeader: "Strömbegränsning för nivå",
        popoverSpeedLimitHeader: "Hastighetsgräns för nivå",
      },
      pedal: {
        header: "Pedalassistans",
        pedalSensorType: {
          text: "Typ av pedalsensor",
          types: ["Ingen", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Utpekad assistansnivå",
          types: ["På Display's order", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Hastighetsbegränsning",
          types: [
            "På Display's order",
            "15 km/h",
            "16 km/h",
            "17 km/h",
            "18 km/h",
            "19 km/h",
            "20 km/h",
            "21 km/h",
            "22 km/h",
            "23 km/h",
            "24 km/h",
            "25 km/h",
            "26 km/h",
            "27 km/h",
            "28 km/h",
            "29 km/h",
            "30km/h",
            "31 km/h",
            "32 km/h",
            "33 km/h",
            "34 km/h",
            "35 km/h",
            "36 km/h",
            "37 km/h",
            "38 km/h",
            "39 km/h",
            "40 km/tim.",
          ],
        },
        startCurrent: "Start Ström",
        slowStartMode: "Långsam start",
        startDegree: "Börja examen",
        workMode: {
          text: "Arbetsläge",
          types: ["Obestämd"],
        },
        stopDelay: "Stoppfördröjning",
        currentDecay: "Nuvarande nedbrytning",
        stopDecay: "Stoppa förfall",
        keepCurrent: "Håll dig uppdaterad",
      },
      throttle: {
        header: "Gashjälp",
        startVoltage: "Startspänning",
        endVoltage: "Slutspänning",
        mode: {
          text: "Läge",
          types: ["Hastighet", "Aktuell"],
        },
        designatedAssistLevel: {
          text: "Utpekad assistansnivå",
          types: ["På Display's order", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Hastighetsbegränsning",
          types: [
            "På Display's order",
            "15 km/h",
            "16 km/h",
            "17 km/h",
            "18 km/h",
            "19 km/h",
            "20 km/h",
            "21 km/h",
            "22 km/h",
            "23 km/h",
            "24 km/h",
            "25 km/h",
            "26 km/h",
            "27 km/h",
            "28 km/h",
            "29 km/h",
            "30km/h",
            "31 km/h",
            "32 km/h",
            "33 km/h",
            "34 km/h",
            "35 km/h",
            "36 km/h",
            "37 km/h",
            "38 km/h",
            "39 km/h",
            "40 km/tim.",
          ],
        },
        startCurrent: "Start Ström",
      },
    },
  },
  help: {
    about: {
      header: "Om ansökan",
      p1: "Konfigurationsverktyg för Bafang BBS-motorserien.",
      author: "Författare",
    },
    connection: {
      header: "Anslutning",
      p1:
        "För att ansluta till styrenheten på din elcykel från Bafang BBS-serien behöver du en USB-OTG-adapter, USB- till serieadapter med Julet-typ kvinnliga stiftkontakter i slutet.",
      p2:
        'Du kan också köpa en "original" USB-programmeringskabel, men det är bara en överprisad USB-till-seriell-adapter med r��tt kontakt för kabeln på din BBS-kontroller.',
    },
    general: {
      header: "Allmänt",
      lowBatteryProtection:
        "Detta är den spänning vid vilken styrenheten stoppar motorn för att skydda batteriet från överladdning. Den ska vara korrekt inställd av tillverkaren och du behöver inte ändra den. För 13S-batteripaket är 41V standardvärdet.",
      currentLimit:
        "Detta är den maximala strömmen som får strömma genom motorn. Om din motor till exempel är 25A kan du ställa in den på 20A för att hålla den säker om du vill. Det rekommenderas inte att ställa in högre ström än den nominella strömmen. Även om den är inställd på 25 A kommer toppströmmen att vara högre, så det är bättre att inte ställa in mer än så.",
      speedMeterType:
        "Med denna väljer du den hastighetsmätare som används på din cykel. För BBS-satser är den extern. Denna parameter ställs in av tillverkaren och om din inställning inte är anpassad behöver du inte ändra den.",
      speedMeterSignals:
        "Här kan du ställa in hur många signaler per varv sensorn genererar. Om du använder den externa sensorn med magnet genererar den en signal per hjulvarv. Den här parametern ställs in av tillverkaren och om din inställning inte är anpassad behöver du inte ändra den.",
      wheelDiameter:
        "Hjuldiametern ska matcha storleken på drivhjulet (därför kan din cykel ha två olika stora hjul). Om du ställer in diametern på en mindre storlek än den egentligen är ökar du hastigheten, men det kan också lätt leda till motorskador.",
      endText:
        "När du är klar med de allmänna inställningarna kan du använda knappen WRITE på denna flik i programmet för att skriva in dem i styrenheten. Du kan också när som helst använda READ-knappen för att läsa dem (detta kommer att ersätta alla värden i General. Detta kommer inte att skriva över några andra inställningar.",
    },
    levels: {
      header: "Assistnivåer",
      p1: "Dessa är alla möjliga inställningar för assistans (både för pedalassistans och gashandtag med en av dessa).",
      p2:
        "Det är viktigt att nämna att assist 0-strömmen och hastighetsgränserna måste ställas in på 1 om du vill kunna använda gashandtaget när Pedal Assist 0 är valt på LCD-skärmen.",
      p3: "Vanligtvis är Assist 0 inställt på 0 så att du kan använda cykeln utan assistans om du vill.",
      p4:
        "Var försiktig när du ställer in dessa nivåer. Om du ställer in strömmen för lågt kommer motorn inte att kunna flytta cykeln och den kan skadas. Om du ställer in strömmen på den första assistnivån för högt kommer accelerationen vid start att vara betydande. Detta kan skada de interna växlarna eller få dig att falla av cykeln.",
      p5:
        "Hastighetsgränsen anger vid vilken hastighet (% av den maximala hastigheten i LCD-skärmen) motorn kommer att minska sin effekt och hålla den hastigheten i stället för att accelerera mer.",
      p6:
        "Med hjälp av växlar högst upp i programmet kan du visa automatiskt konverterade värden (ström och hastighet eller procentsatser).",
      endText:
        "När du är klar med inställningarna för Assist Levels kan du använda WRITE-knappen på den här fliken i programmet för att skriva in dem i styrenheten. Du kan också använda READ-knappen när som helst för att läsa dem (detta kommer att ersätta alla värden i assistnivåerna). Detta kommer inte att skriva över några andra inställningar.",
    },
    pedal: {
      header: "Pedalassistans",
      p1:
        "Pedal Assist-systemet hjälper dig när du trampar. På den här fliken kan du justera dess prestanda. Vissa av dem bör du inte ändra eftersom de är specifika för ditt kit. Dessa ställs in av tillverkaren.",
      pedalSensorType:
        "Den här parametern väljer typ av pedalrotationssensor. Den är inställd av tillverkaren och bör inte ändras.",
      designatedAssistLevel:
        'Du kan välja två typer av drift med denna parameter. Den första är "På displayens kommando". Detta innebär att assistansnivån (den från fliken Grundläggande inställningar) väljs från LCD-skärmen. Det andra alternativet är att välja en specifik assistansnivå som kommer att vara fast och du kommer inte att kunna ändra den från LCD-skärmen. För detta kan du välja en assistansnivå från 0 till 9.',
      speedLimit:
        'Detta är det högsta varvtal vid vilket motorn ger ytterligare acceleration. När hastigheten är uppnådd kommer den bara att hålla den men inte accelerera mer. Om du ställer in den här parametern på "By Display\'s Command" kan du ställa in hastigheten från din LCD-skärm. Tänk på att vissa LCD-skärmar gör det möjligt att ställa in hastigheten till 99 km/h, vilket inte är möjligt åtminstone inte med de nuvarande BBS-satserna. Såvitt jag har testat är den maximala hastigheten utan att trampa 40 km/h (när hjulstorleken är korrekt inställd). Denna inställning används för alla assistansnivåer som du ser på fliken Basic. Om du ställer in detta till 40 km/tim (i detta program eller från din LCD-skärm) och din Assist 5-nivå är inställd på 50 % hastighet kommer du att kunna nå 20 km/tim på den assistansnivån.',
      startCurrent:
        "Detta är startströmmen när du börjar vrida pedalerna. Det är bra att ställa in den på minst 10 % för att se till att cykeln börjar röra sig och att motorn inte stannar. Om du ställer in detta på ett mycket högt värde kommer cykeln att accelerera mycket snabbt vid start, vilket kan skada dess interna växlar och även motorn. Rekommenderat värde är ett värde mellan 10 % och 30 %. Du bör också se till att du inte börjar trampa i en för hög växel som belastar motorn för mycket.",
      slowStartMode:
        "Den här inställningen styr hur snabbt startströmmen uppnås. Du kan få din cykel att accelerera mjukt och få den att reagera snabbt. Ett värde runt 4 brukar fungera bra för normal cykling. Om du är mountainbikecyklist kommer inställningen till ett lågt värde att göra accelerationen snabbare, vilket kan vara användbart, men du bör vara försiktig så att du inte steker din styrenhet och motor.",
      startDegree:
        "Den här parametern ställer in hur många pulser från pedalsensorn som behövs innan motorn startar. Ett helt pedalsvarv på BBS-satser genererar 24 pulser. Att ställa in den här inställningen på 0 eller 1 fungerar inte. Ett värde runt 4 fungerar bra eftersom det inte startar med bara en liten rörelse och inte heller kräver för mycket rotation.",
      workMode:
        "Syftet med denna parameter är inte helt klart. Det är meningen att den ska styra effekten i enlighet med pedalens rotationshastighet. Det värde som tillverkaren har ställt in verkar fungera utmärkt så du behöver inte ändra det.",
      stopDelay:
        "Detta är fördröjningen efter att du slutar trampa innan motorn stannar. Ett värde på 250 ms fungerar bra.",
      currentDecay:
        "Den här parametern ställer in hur snabbt strömmen sjunker när du trampar snabbt och når maximal hastighet med den valda assistnivån. Lägre värde innebär att strömmen börjar sjunka vid lägre hastighet.",
      stopDecay: "Den tid det tar för motorn att stanna.",
      keepCurrent:
        "Den här inställningen styr hur stor andel av den maximala strömmen vid den valda assistansnivån som kommer att flöda genom motorn när du når maximal hastighet och fortsätter att trampa. Om din maximala ström är 25 A och du använder Pedal Assist 5 inställd på 50 % ström kommer du att ha en maximal ström på 12,5 A för denna assistansnivå. Om Håll strömmen är inställd på 50 % när den maximala hastigheten är uppnådd och du fortsätter att trampa kommer strömmen att hållas på 6,25 A. Detta säkerställer en smidig övergång till assistansström när du sänker tramphastigheten och hastigheten sjunker under den maximala hastigheten.",
      endText:
        "När du är klar med inställningarna för Pedal Assist kan du använda WRITE-knappen på den här fliken i programmet för att skriva in dem i din styrenhet. Du kan också använda READ-knappen när som helst för att läsa dem (detta kommer att ersätta alla värden på Pedal Assist. Detta kommer inte att skriva över några andra inställningar.",
    },
    throttle: {
      header: "Gashandtag",
      p1:
        "Om din utrustning är utrustad med ett gashandtag kan du konfigurera dess funktion med den här fliken. Se till att Assis 0 är inställd på 1 (både ström och hastighet) om du vill använda den när Pedal Assist S0 är vald på LCD-skärmen.",
      startVoltage:
        "Detta är den spänning från gashandtaget vid vilken motorn startar. Det lägsta värde vid vilket styrenheten reagerar är 1,1 V.",
      endVoltage:
        "Detta är den utgångsspänning för gashandtaget vid vilken motorn når sin maximala effekt (begränsad av andra inställningar). Den högsta tillåtna spänningen från styrenheten är 4,2 V. Du måste leka lite med den här parametern eftersom gashandtagets maxvärde kan vara olika beroende på modell. Om du ställer in den här parametern för lågt får du nästan ingen respons från gashandtaget. När du ställer in den på det maximala värde som handtaget kan ge upphov till får du det bredaste möjliga området för kontroll av motoreffekten.",
      mode:
        "Detta är gashandtagets driftläge. Du har två alternativ: hastighet och ström. När det är inställt på hastighet använder styrenheten rörelsehastigheten för att ställa in motoreffekten i enlighet med gashandtagets läge. Tyvärr finns det en betydande fördröjning på grund av hur hastigheten mäts och responsen är ganska dålig i det här läget. När det är inställt på ström styr handtaget motorströmmen enligt sitt läge. Det här läget fungerar bättre och liknar en bildrift.",
      designatedAssistLevel:
        'Du kan ställa in detta på "By Display\'s Command" eller välja en fast nivå. Det första alternativet använder PAS-inställningen från LCD-skärmen. Detta innebär att den maximala effekten och hastigheten beror på den PAS-nivå som valts och gashandtagets läge. Så om en låg PAS-nivå väljs kommer den maximala strömmen och hastigheten också att vara låg även om du trycker gashandtaget till max. Om en fast assistansnivå väljs för denna parameter kommer gashandtaget att använda sin maximala ström och hastighet. Var försiktig om du ställer in detta på nivå 9 så att du inte trycker på gashandtaget till max när du stannar eftersom den höga strömmen och kraften kan skada styrenheten och motorn.',
      speedLimit:
        "Med den här parametern kan du begränsa den maximala hastigheten när du använder gashandtaget. Detta överskriver den angivna assistansnivåns maximala hastighet om den är högre.",
      startCurrent:
        "Detta är den procentuella andel av den maximala strömmen som tillförs motorn när gashandtaget genererar den lägsta tillåtna spänningen. Vanligtvis fungerar ett värde på 10 % eller 20 % bra. Om den maximala strömmen på fliken Allmänt är inställd på 25 A och Startströmmen är inställd på 10 % får du en startström på 2,5 A. Detta leder till en jämn start och belastar inte de interna växlarna för mycket. Om du ställer in den här parametern på ett mycket högt värde kan du skada de interna kugghjulen och motorn.",
      endText:
        "När du är klar med inställningarna för gashandtaget kan du använda WRITE-knappen på den här fliken i programmet för att skriva in dem i styrenheten. Du kan också använda READ-knappen när som helst för att läsa dem (detta kommer att ersätta alla värden i gashandtaget). Detta kommer inte att skriva över några andra inställningar.",
    },
  },
};

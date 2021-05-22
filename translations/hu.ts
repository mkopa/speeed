import { Translation } from "./type";

export const hu: Translation = {
  messages: {
    processing: "Feldolgozás...",
    deviceIsDisconnected: "A készülék nem csatlakozik!",
    connectingInProgress: "Csatlakozás folyamatban...",
    settingsHaveBeenSaved: "A beállítások mentésre kerültek!",
    configLoadedSuccessful: "Konfiguráció betöltése sikeres!",
    overrideFileWarning: {
      header: "Figyelem!",
      message: {
        theFileText: "A fájl",
        areYouSureToOverrideText: "létezni! Biztos, hogy felül akarja írni ezt a fájlt?",
      },
      buttons: {
        yes: "Felülbírálás",
        no: "Nem",
      },
    },
    unsupportedConfigurationFile: {
      header: "Hiba!",
      text: "Nem támogatott vagy hibás konfigurációs fájl!",
    },
    pleaseWait: "Kérjük, várjon...",
    connectingToMotor: "A motorhoz való csatlakoztatás...",
    noDeviceFound: "Nem találtunk eszközt!",
    cantEstablishingConnection: "Nem tud kapcsolatot létesíteni a motorral! Ellenőrizze a kapcsolat végét újraindítás!",
    connectedTo: "Csatlakoztatva",
    readBasSuccess: {
      basTypeLevel: "Szintek",
      basTypeGeneral: "Általános",
      first: "Olvassa el",
      second: "paraméterek sikeresen!",
    },
    readPedalAssistSuccess: "Sikeresen olvassa be a Pedal Assist paramétereit!",
    readThrottleHandleSuccess: "A gázkar paramétereinek sikeres olvasása",
    readAllSuccess: "Minden paramétert sikeresen beolvasott!",
    somethingWentWrong: "Valami elromlott! Napló:",
    writeSuccess: {
      levels: "Szintek",
      general: "Általános",
      pedalAssist: "Pedál asszisztens",
      throttleHandle: "Gázkar",
      first: "Írja",
      second: "paraméterek sikeresen!",
    },
    writeAllSuccess: "Minden paraméter sikeres írása!",
  },
  buttons: {
    cancel: "Törölje",
  },
  errors: {
    writeBasErrors: {
      "0": "Alacsony töltöttségű akkumulátor védelem hatótávon kívül, kérjük, állítsa vissza!",
      "1": "Jelenlegi határérték a tartományon kívül, kérjük, állítsa vissza!",
      "2": "A PAS0 áramhatár a tartományon kívül van, kérjük, állítsa vissza!",
      "3": "A PAS0 sebességkorlátozás a tartományon kívül van, kérjük, állítsa vissza!",
      "4": "A PAS1 áramerősség-határérték a tartományon kívül van, kérjük, állítsa vissza!",
      "5": "A PAS1 sebességkorlátozás a tartományon kívül van, kérjük, állítsa vissza!",
      "6": "A PAS2 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "7": "A PAS2 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "8": "A PAS3 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "9": "A PAS3 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "10": "A PAS4 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "11": "A PAS4 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "12": "A PAS5 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "13": "A PAS5 sebességkorlátozás a tartományon kívül van, kérjük, állítsa vissza!",
      "14": "A PAS6 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "15": "A PAS6 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "16": "A PAS7 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "17": "A PAS7 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "18": "A PAS8 áramerősség-határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "19": "A PAS8 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "20": "A PAS9 aktuális határértéke a tartományon kívül van, kérjük, állítsa vissza!",
      "21": "A PAS9 sebességkorlátozása a tartományon kívül van, kérjük, állítsa vissza!",
      "22": "Kerékátmérő a tartományon kívül, kérjük, állítsa vissza!",
      "23": "A sebességmérő jelzései a tartományon kívül vannak, kérjük, állítsa vissza!",
      default: "Kommunikációs probléma, kérjük, állítsa vissza!",
    },
    writePasErrors: {
      "0": "Pedálérzékelő típushiba, kérjük, állítsa vissza!",
      "1": "Kijelölt segédszint hiba, kérjük, állítsa vissza!",
      "2": "Sebességkorlátozási hiba, kérjük, állítsa vissza!",
      "3": "Start Current out of range, kérjük, állítsa vissza!",
      "4": "Lassú indítás üzemmód hiba, kérjük, állítsa vissza!",
      "5": "Start Fokozat hatótávon kívül, kérjük, állítsa vissza!",
      "6": "Munka üzemmód hiba, kérjük, állítsa vissza!",
      "7": "Stop Késleltetés hatótávon kívül, kérjük, állítsa vissza!",
      "8": "Jelenlegi romlás a tartományon kívül, kérjük, állítsa vissza!",
      "9": "Stop Decay hatótávolságon kívül, kérjük, állítsa vissza!",
      "10": "Tartsa az áramot hatótávolságon kívül, kérem, állítsa vissza!",
      default: "Ismeretlen hiba, kérjük, állítsa vissza!",
    },
    writeThrErrors: {
      "0": "Start Voltage out of range, kérjük, állítsa vissza!",
      "1": "Végfeszültség a tartományon kívül, kérjük, állítsa vissza!",
      "2": "Üzemmód hiba, kérjük, állítsa vissza!",
      "3": "Kijelölt asszisztens hiba, kérjük, állítsa vissza!",
      "4": "Sebességkorlátozási hiba, kérjük, állítsa vissza!",
      "5": "Start Current out of range, kérjük, állítsa vissza!",
      default: "Ismeretlen hiba, kérjük, állítsa vissza!",
    },
  },
  mainRouter: {
    home: "Home",
    settings: "Beállítások",
    help: "Segítség",
  },
  main: {
    label_language: "Nyelv",
    object_Profile: {
      header: "Profil",
      open: "Nyissa meg a  címet.",
      save_as: "Mentés másként",
      save: "Mentés",
      default_configuration_string: "Alapértelmezett konfiguráció (nincs megadva fájl)",
      popup_header: "Konfiguráció mentése",
      popup_placeholder: "Itt adja meg a fájl nevét",
      popup_button_label: "Mentés",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Olvassa el",
      write_all: "Írja",
      connect: "Csatlakozás",
      disconnect: "Kapcsolódás megszüntetése",
      status: {
        disconnected: "kikapcsolt",
        connecting: "összekötése",
        connected: "csatlakoztatott",
        error: "hiba",
      },
      motor_info: {
        status: "Állapot",
        manufacturer: "Gyártó",
        model: "Modell",
        hardware_version: "Hardveres verzió",
        firmware_version: "Firmware verzió",
        nominal_voltage: "Névleges feszültség",
        max_current: "Maximális áram",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Általános",
      levels: "Szintek",
      pedal: "Pedál",
      throttle: "Gázkar",
    },
    header: {
      readButtonText: "Olvassa el",
      writeButtonText: "Mentés",
    },
    tabs: {
      general: {
        header: "Általános",
        lowBatteryProtection: "Alacsony akkumulátor védelem",
        currentLimit: "Áramhatár",
        speedMeterType: {
          text: "Sebességmérő típus",
          types: ["Külső, kerékmérő", "Belső, motoros mérő", "Motorfázis szerint"],
        },
        speedMeterSignals: "Sebességmérő jelzések",
        wheelDiameter: {
          text: "Kerékátmérő",
          types: [
            "16 hüvelyk",
            "17 hüvelyk",
            "18 hüvelyk",
            "19 hüvelyk",
            "20 hüvelyk",
            "21 hüvelyk",
            "22 hüvelyk",
            "23 hüvelyk",
            "24 hüvelyk",
            "25 hüvelyk",
            "26 hüvelyk",
            "27 hüvelyk",
            "700C",
            "28 hüvelyk",
            "29 hüvelyk",
            "30 hüvelyk",
          ],
        },
      },
      levels: {
        header: "Támogatási szintek",
        level: "Szint",
        current: "Jelenlegi",
        speed: "Sebesség",
        popoverCurrentLimitHeader: "Áramhatár a szinthez",
        popoverSpeedLimitHeader: "Sebességhatár a szinthez",
      },
      pedal: {
        header: "Pedál asszisztens",
        pedalSensorType: {
          text: "Pedál érzékelő típusa",
          types: ["Nincs", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Kijelölt támogatási szint",
          types: ["A kijelző parancsára", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Sebességkorlátozás",
          types: [
            "A kijelző parancsára",
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
        startCurrent: "Aktuális indítás",
        slowStartMode: "Lassú indítási mód",
        startDegree: "Start Fokozat",
        workMode: {
          text: "Munka üzemmód",
          types: ["Meghatározatlan"],
        },
        stopDelay: "Stop késleltetés",
        currentDecay: "Jelenlegi bomlás",
        stopDecay: "Stop Decay",
        keepCurrent: "Tartsa aktuális",
      },
      throttle: {
        header: "Gázpedál asszisztens",
        startVoltage: "Start feszültség",
        endVoltage: "Végfeszültség",
        mode: {
          text: "Mód",
          types: ["Sebesség", "Jelenlegi"],
        },
        designatedAssistLevel: {
          text: "Kijelölt támogatási szint",
          types: ["A kijelző parancsára", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Sebességkorlátozás",
          types: [
            "A kijelző parancsára",
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
        startCurrent: "Aktuális indítás",
      },
    },
  },
  help: {
    about: {
      header: "Az alkalmazásról",
      p1: "Konfigurációs eszköz a Bafang BBS motor sorozathoz.",
      author: "Szerző",
    },
    connection: {
      header: "Kapcsolat",
      p1:
        "A Bafang BBS sorozatú elektromos kerékpár vezérlőjéhez való csatlakoztatáshoz USB-OTG adapterre, USB-soros adapterre van szüksége, amelynek a végén Julet típusú női csatlakozó van.",
      p2:
        'Vásárolhatsz egy "eredeti" USB programozó kábelt is, de ez csak egy túlárazott USB-soros adapter a BBS-vezérlőd kábelének megfelelő csatlakozójával.',
    },
    general: {
      header: "Általános",
      lowBatteryProtection:
        "Ez az a feszültség, amelynél a vezérlő leállítja a motort, hogy megóvja az akkumulátort a túlterheléstől. Ezt a gyártónak megfelelően kell beállítania, és nem kell megváltoztatnia. A 13S akkucsomagok esetében 41V az alapértelmezett.",
      currentLimit:
        "Ez a motoron átfolyó legnagyobb megengedett áram. Ha a motorja például 25A, akkor 20A-ra állíthatja, hogy biztonságban tartsa, ha szeretné. Nem ajánlott a névlegesnél nagyobb áramot beállítani. Még 25A-nál is magasabb lesz a csúcsáram, ezért jobb, ha nem állít be ennél többet.",
      speedMeterType:
        "Ez választja ki a kerékpárján használt sebességmérőt. A BBS készleteknél ez külső. Ezt a paramétert a gyártó állítja be, és ha az Ön beállítása nem egyéni, akkor nem kell megváltoztatnia.",
      speedMeterSignals:
        "Itt állíthatja be, hogy az érzékelő hány jelet generál fordulatonként. Ha külső mágnessel ellátott érzékelőt használ, az kerékfordulatonként egy jelet generál. Ezt a paramétert a gyártó állítja be, és ha az Ön beállítása nem egyéni, akkor nem kell megváltoztatnia.",
      wheelDiameter:
        "A kerékátmérőnek meg kell egyeznie a meghajtó kerék méretével (ezért a kerékpárnak két különböző méretű kereke lehet). Az átmérőnek a valóságosnál kisebb méretre való beállítása növeli a sebességet, de könnyen vezethet motorkárosodáshoz is.",
      endText:
        "Amikor befejezte az Általános beállítások hangolását, a program ezen lapján található WRITE gomb segítségével írhatja azokat a vezérlőbe. A READ gombot is bármikor használhatja, hogy beolvassa azokat (ez az összes értéket lecseréli az Általános. Ez nem írja felül a többi beállítást.",
    },
    levels: {
      header: "Támogatási szintek",
      p1:
        "Ezek az összes lehetséges asszisztencia-beállítás (mind a pedálasszisztencia, mind a gázkar egyikének használatával).",
      p2:
        "Fontos megemlíteni, hogy az Assist 0 áram- és sebességhatárokat 1-re kell állítani, ha az LCD kijelzőn kiválasztott Pedal Assist 0-val szeretné használni a gázkarját.",
      p3: "Az Assist 0 általában 0-ra van állítva, így ha akarja, segítség nélkül is használhatja a kerékpárt.",
      p4:
        "Legyen óvatos ezeknek a szinteknek a beállításával. Ha túl alacsonyra állítja az áramot, a motor nem fogja tudni mozgatni a kerékpárt, és az károsodhat. Ha túl magasra állítja az első asszisztencia szint áramát, akkor az induláskor a gyorsulás jelentős lesz. Ez károsíthatja a belső fogaskerekeket, vagy leeshet a kerékpárról.",
      p5:
        "A sebességkorlátozás meghatározza, hogy a motor milyen sebességnél (az LCD kijelzőn beállított maximális sebesség %-ánál) csökkenti a teljesítményét, és csak ezt a sebességet tartja, ahelyett, hogy tovább gyorsítana.",
      p6:
        "Az alkalmazás tetején található kapcsolók lehetővé teszik az automatikusan átváltott értékek (áram és sebesség vagy százalékos értékek) megjelenítését.",
      endText:
        "Amikor befejezte az Assist Levels beállításainak hangolását, a program ezen lapján található WRITE gombbal írhatja azokat a vezérlőbe. A READ gombot is bármikor használhatja, hogy beolvassa azokat (ez az Assist Levels összes értékét lecseréli. Ez nem írja felül a többi beállítást.",
    },
    pedal: {
      header: "Pedál asszisztens",
      p1:
        "A Pedal Assist rendszer segíti Önt pedálozás közben. Ezen a lapon beállíthatja a teljesítményét. Ezek közül néhányat nem szabad megváltoztatnod, mivel ezek a felszerelésedre jellemzőek. Ezeket a gyártó állítja be.",
      pedalSensorType:
        "Ez a paraméter a pedálfordulat-érzékelő típusát választja ki. Ezt a gyártó állítja be, és nem szabad megváltoztatni.",
      designatedAssistLevel:
        'Ezzel a paraméterrel kétféle műveletet választhat ki. Az első a "Kijelző parancsára". Ez azt jelenti, hogy a segédszint (az Alapbeállítások lapon található) az LCD kijelzőn lesz kiválasztva. A második lehetőség egy konkrét asszisztencia szint kiválasztása, amely rögzített lesz, és ezt nem tudja megváltoztatni az LCD kijelzőről. Ehhez bármelyik asszisztencia szintet kiválaszthatja 0 és 9 között.',
      speedLimit:
        'Ez az a maximális sebesség, amelynél a motor további gyorsulást biztosít. Ha a sebességet elérte, akkor csak tartja, de nem gyorsít tovább. Ha ezt a paramétert a "Kijelző parancsára" értékre állítja, akkor az LCD kijelzőről tudja beállítani a sebességet. Ne feledje, hogy egyes LCD-k lehetővé teszik a 99km/h sebesség beállítását, ami legalábbis a jelenlegi BBS készletekkel nem lehetséges. Amennyire én teszteltem, a maximális sebesség pedálozás nélkül 40km/h (ha a kerékméret helyesen van beállítva). Ezt a beállítást használjuk az összes asszisztencia szinthez, amit az Alap fülön láthatunk. Ha ezt 40km/h-ra állítod be (ebben a programban vagy az LCD kijelzőn), és az Assist 5 szinted 50%-os sebességre van állítva, akkor ezen az asszisztencia szinten 20km/h-t fogsz tudni elérni.',
      startCurrent:
        "Ez az indítási áram, amikor elkezdi forgatni a pedálokat. Ezt legalább 10%-ra érdemes beállítani, hogy a kerékpár biztosan elinduljon, és a motor ne akadjon el. Ha ezt nagyon magas értékre állítja, akkor a kerékpár induláskor nagyon gyorsan gyorsul, ami károsíthatja a belső fogaskerekeket és a motort is. Az ajánlott érték 10% és 30% között van. Arra is ügyelnie kell, hogy ne kezdjen el túl nagy sebességgel pedálozni, ami túlságosan megterheli a motort.",
      slowStartMode:
        "Ez a beállítás szabályozza, hogy milyen gyorsan érjük el a kezdőáramot. Ezzel elérheti, hogy a kerékpár egyenletesen gyorsuljon és gyorsan reagáljon. A 4 körüli érték általában jól működik normál kerékpározáshoz. Ha hegyi kerékpáros, akkor az alacsony értékre való beállítás gyorsabbá teszi a gyorsulást, ami hasznos lehet, de vigyázni kell, nehogy megsüsse a vezérlőt és a motort.",
      startDegree:
        "Ez a paraméter azt határozza meg, hogy hány impulzusra van szükség a pedálérzékelőtől a motor indításához. A BBS-készleteken a teljes pedálfordulat 24 impulzust generál. Ennek 0-ra vagy 1-re állítása nem fog működni. Egy 4 körüli érték jól működik, mivel nem indul el csak egy kis mozdulatnál, és nem is igényel túl sok fordulatot.",
      workMode:
        "Ennek a paraméternek a célja nem teljesen világos. A pedál fordulatszámának megfelelően kell szabályoznia a teljesítményt. Úgy tűnik, hogy a gyártó által beállított érték jól működik, így nem kell megváltoztatni.",
      stopDelay:
        "Ez az a késleltetés, miután abbahagyta a pedálozást, mielőtt a motor leáll. A 250ms érték jól működik.",
      currentDecay:
        "Ez a paraméter azt állítja be, hogy milyen gyorsan csökkenjen az áram, amikor gyorsított pedálozás közben eléri a maximális sebességet a kiválasztott asszisztenciaszinten. Alacsonyabb érték azt jelenti, hogy az áram alacsonyabb sebességnél csökkenni kezd.",
      stopDecay: "Az az idő, amely alatt a motor leáll.",
      keepCurrent:
        "Ez a beállítás szabályozza, hogy a kiválasztott asszisztenciaszinten a maximális áram hány százaléka folyik át a motoron, amikor eléri a maximális sebességet és tovább pedálozik. Tehát ha a maximális áram 25A, és a Pedal Assist 5 beállítása 50%-os áramra van állítva, akkor a maximális áram 12,5A lesz ezen a segédszinten. Ha a Keep Current 50%-ra van állítva, amikor a maximális sebességet eléri, és folytatja a pedálozást, akkor az áram 6,25A marad. Ez biztosítja a zökkenőmentes átmenetet a segédáramra, amikor csökkenti a pedálozási sebességet, és a mozgási sebesség a maximális alá csökken.",
      endText:
        "Amikor befejezte a Pedal Assist beállításainak hangolását, a program ezen lapján található WRITE gombbal írhatja azokat a vezérlőbe. A READ gombot is bármikor használhatja, hogy beolvassa azokat (ez a Pedal Assist összes értékét lecseréli. Ez nem írja felül a többi beállítást.",
    },
    throttle: {
      header: "Gázkar",
      p1:
        "Ha a készlet gázkarral van felszerelve, akkor ezen a lapon konfigurálhatja a működését. Győződjön meg róla, hogy az Assis 0 értéke 1-re van állítva (mind az áram, mind a sebesség), ha használni szeretné, amikor a Pedal Assist S0 van kiválasztva az LCD kijelzőn.",
      startVoltage:
        "Ez az a gázkar kimeneti feszültség, amelynél a motor elindul. A legkisebb érték, amelynél a vezérlő reagál, 1,1V.",
      endVoltage:
        "Ez az a gázkar kimeneti feszültség, amelynél a motor eléri a maximális teljesítményét (más beállítások által korlátozott). A vezérlő által elfogadott maximális érték 4,2 V. Ezzel a paraméterrel egy kicsit játszani kell, mivel a gázkar maximuma modelltől függően eltérő lehet. Ha túl alacsonyra állítod ezt a paramétert, akkor szinte semmilyen választ nem kapsz a gázkarról. Ha a maximális értékre állítja, amit a gázkar tud produkálni, akkor a lehető legszélesebb tartományban tudja szabályozni a motor teljesítményét.",
      mode:
        "Ez a gázkar működési módja. Két lehetőség van: sebesség és áram. Ha sebességre van állítva, akkor a vezérlő a mozgási sebességet használja a motor teljesítményének beállításához a gázkar helyzetének megfelelően. Sajnos a sebesség mérésének módja miatt jelentős késleltetés van, és a reakció elég rossz ebben az üzemmódban. Áramra állítva a fogantyú a motor áramát a pozíciójának megfelelően szabályozza. Ez az üzemmód jobban működik és hasonlít az autó működéséhez.",
      designatedAssistLevel:
        'Ezt beállíthatja "A kijelző parancsára", vagy választhat egy rögzített szintet. Az első lehetőség az LCD kijelző PAS beállítását használja. Ez azt jelenti, hogy a maximális teljesítmény és a sebesség a kiválasztott PAS-szinttől és a gázkar helyzetétől függ. Tehát ha alacsony PAS van kiválasztva, a maximális áram és sebesség is alacsony lesz, még akkor is, ha a gázkart a maximumra nyomja. Ha ehhez a paraméterhez egy fix asszisztencia szintet választ ki, akkor a gázkar a maximális áramot és sebességet fogja használni. Legyen óvatos, ha ezt a 9-es szintre állítja, hogy megálláskor ne nyomja a gázkart a maximumra, mert a nagy áram és a teljesítmény károsíthatja a vezérlőt és a motort.',
      speedLimit:
        "Ezzel a paraméterrel korlátozhatja a maximális sebességet a gázkar használatakor. Ez felülírja a kijelölt segédszint maximális sebességét, ha az magasabb.",
      startCurrent:
        "Ez a motorra adott maximális áram százalékos értéke, amikor a gázkar a minimálisan elfogadott feszültséget generálja. Általában a 10% vagy 20%-os érték jól működik. Ha az Általános lapon a maximális áram 25A-ra van beállítva, és a Start Current 10%-ra van állítva, akkor 2,5A indítási áramot kap. Ez sima indítást eredményez, és nem terheli túlságosan a belső fogaskerekeket. Ha ezt a paramétert nagyon magas értékre állítja, akkor károsíthatja a belső fogaskerekeket és a motort.",
      endText:
        "Amikor befejezte a gázkar beállításainak hangolását, a program ezen lapján található WRITE gomb segítségével írhatja azokat a vezérlőbe. A READ gombot is bármikor használhatja, hogy beolvassa azokat (ez a Throttle Handle összes értékét lecseréli. Ez nem írja felül a többi beállítást.",
    },
  },
};

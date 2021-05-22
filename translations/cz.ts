import { Translation } from "./type";

export const cz: Translation = {
  messages: {
    processing: "Zpracování...",
    deviceIsDisconnected: "Zařízení je odpojeno!",
    connectingInProgress: "Připojování probíhá...",
    settingsHaveBeenSaved: "Vaše nastavení bylo uloženo!",
    configLoadedSuccessful: "Konfigurace byla úspěšně načtena!",
    overrideFileWarning: {
      header: "Pozor!",
      message: {
        theFileText: "Soubor",
        areYouSureToOverrideText: "existovat! Opravdu chcete tento soubor přepsat?",
      },
      buttons: {
        yes: "Přepsat",
        no: "Ne",
      },
    },
    unsupportedConfigurationFile: {
      header: "Chyba!",
      text: "Nepodporovaný nebo poškozený konfigurační soubor!",
    },
    pleaseWait: "Počkejte prosím...",
    connectingToMotor: "Připojení k motoru...",
    noDeviceFound: "Nebylo nalezeno žádné zařízení!",
    cantEstablishingConnection: "Nelze navázat spojení s motorem! Zkontrolujte konec spojení a restartujte jej!",
    connectedTo: "Připojeno k",
    readBasSuccess: {
      basTypeLevel: "Úrovně",
      basTypeGeneral: "Obecné",
      first: "Přečtěte si",
      second: "parametry úspěšně!",
    },
    readPedalAssistSuccess: "Úspěšně načtěte parametry asistenta pedálů!",
    readThrottleHandleSuccess: "Úspěšné načtení parametrů rukojeti plynu",
    readAllSuccess: "Úspěšné načtení všech parametrů!",
    somethingWentWrong: "Něco se pokazilo! Záznam:",
    writeSuccess: {
      levels: "Úrovně",
      general: "Obecné",
      pedalAssist: "Asistent pedálů",
      throttleHandle: "Rukojeť plynu",
      first: "Napište na",
      second: "parametry úspěšně!",
    },
    writeAllSuccess: "Úspěšný zápis všech parametrů!",
  },
  buttons: {
    cancel: "Zrušit",
  },
  errors: {
    writeBasErrors: {
      "0": "Ochrana proti vybití baterie mimo dosah, resetujte ji!",
      "1": "Aktuální limit mimo rozsah, resetujte jej!",
      "2": "Proudový limit pro PAS0 mimo rozsah, prosím resetujte!",
      "3": "Omezení rychlosti pro PAS0 mimo rozsah, prosím resetujte!",
      "4": "Proudový limit pro PAS1 mimo rozsah, resetujte jej!",
      "5": "Omezení rychlosti pro PAS1 mimo rozsah, resetujte prosím!",
      "6": "Proudový limit pro PAS2 mimo rozsah, resetujte jej!",
      "7": "Omezení rychlosti pro PAS2 mimo rozsah, prosím, resetujte!",
      "8": "Proudový limit pro PAS3 mimo rozsah, resetujte jej!",
      "9": "Omezení rychlosti pro PAS3 mimo rozsah, resetujte prosím!",
      "10": "Proudový limit pro PAS4 mimo rozsah, resetujte jej!",
      "11": "Omezení rychlosti pro PAS4 mimo rozsah, resetujte prosím!",
      "12": "Proudový limit pro PAS5 mimo rozsah, resetujte jej!",
      "13": "Omezení rychlosti pro PAS5 mimo rozsah, resetujte prosím!",
      "14": "Proudový limit pro PAS6 mimo rozsah, prosím resetujte!",
      "15": "Omezení rychlosti pro PAS6 mimo rozsah, resetujte prosím!",
      "16": "Proudový limit pro PAS7 mimo rozsah, resetujte jej!",
      "17": "Omezení rychlosti pro PAS7 mimo rozsah, resetujte prosím!",
      "18": "Proudový limit pro PAS8 mimo rozsah, resetujte jej!",
      "19": "Omezení rychlosti pro PAS8 mimo rozsah, resetujte prosím!",
      "20": "Proudový limit pro PAS9 mimo rozsah, prosím resetujte!",
      "21": "Omezení rychlosti pro PAS9 mimo rozsah, resetujte prosím!",
      "22": "Průměr kola mimo rozsah, resetujte prosím!",
      "23": "Signály měřiče rychlosti mimo rozsah, resetujte je, prosím!",
      default: "Problém s komunikací, resetujte prosím!",
    },
    writePasErrors: {
      "0": "Chyba typu pedálového snímače, resetujte ji!",
      "1": "Chyba určené úrovně asistence, resetujte ji prosím!",
      "2": "Chyba rychlostního limitu, resetujte prosím!",
      "3": "Start Aktuální mimo rozsah, resetujte!",
      "4": "Chyba režimu pomalého startu, resetujte prosím!",
      "5": "Start Stupeň mimo dosah, resetujte!",
      "6": "Chyba pracovního režimu, resetujte prosím!",
      "7": "Stop Delay mimo dosah, resetujte prosím!",
      "8": "Aktuální rozpad mimo rozsah, prosím resetujte!",
      "9": "Zastavte rozpad mimo dosah, prosím resetujte!",
      "10": "Udržujte proud mimo dosah, prosím, resetujte!",
      default: "Neznámá chyba, resetujte prosím!",
    },
    writeThrErrors: {
      "0": "Start Napětí mimo rozsah, resetujte!",
      "1": "Koncové napětí mimo rozsah, prosím resetujte!",
      "2": "Chyba režimu, resetujte prosím!",
      "3": "Chybné určení asistenta, prosím, resetujte!",
      "4": "Chyba rychlostního limitu, resetujte prosím!",
      "5": "Start Aktuální mimo rozsah, resetujte!",
      default: "Neznámá chyba, resetujte prosím!",
    },
  },
  mainRouter: {
    home: "Home",
    settings: "Nastavení",
    help: "Nápověda",
  },
  main: {
    label_language: "Jazyk",
    object_Profile: {
      header: "Profil",
      open: "Otevřít",
      save_as: "Uložit jako",
      save: "Uložit",
      default_configuration_string: "Výchozí konfigurace (není zadán žádný soubor)",
      popup_header: "Uložit konfiguraci jako",
      popup_placeholder: "Zde zadejte název souboru",
      popup_button_label: "Uložit",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Přečtěte si",
      write_all: "Napište na",
      connect: "Připojení",
      disconnect: "Odpojení",
      status: {
        disconnected: "odpojené",
        connecting: "připojení",
        connected: "připojené",
        error: "chyba",
      },
      motor_info: {
        status: "Stav",
        manufacturer: "Výrobce",
        model: "Model",
        hardware_version: "Verze hardwaru",
        firmware_version: "Verze firmwaru",
        nominal_voltage: "Jmenovité napětí",
        max_current: "Maximální proud",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Obecné",
      levels: "Úrovně",
      pedal: "Pedál",
      throttle: "Škrticí klapka",
    },
    header: {
      readButtonText: "Přečtěte si",
      writeButtonText: "Uložit",
    },
    tabs: {
      general: {
        header: "Obecné",
        lowBatteryProtection: "Ochrana proti vybití baterie",
        currentLimit: "Proudový limit",
        speedMeterType: {
          text: "Typ měřiče rychlosti",
          types: ["Externí, měřič kol", "Interní, motorový měřič", "Podle fáze motoru"],
        },
        speedMeterSignals: "Signály měřiče rychlosti",
        wheelDiameter: {
          text: "Průměr kola",
          types: [
            "16 palců",
            "17 palců",
            "18 palců",
            "19 palců",
            "20 palců",
            "21 palců",
            "22 palců",
            "23 palců",
            "24 palců",
            "25 palců",
            "26 palců",
            "27 palců",
            "700C",
            "28 palců",
            "29 palců",
            "30 palců",
          ],
        },
      },
      levels: {
        header: "Úrovně asistence",
        level: "Úroveň",
        current: "Aktuální",
        speed: "Rychlost",
        popoverCurrentLimitHeader: "Proudový limit pro úroveň",
        popoverSpeedLimitHeader: "Omezení rychlosti pro úroveň",
      },
      pedal: {
        header: "Asistent pedálů",
        pedalSensorType: {
          text: "Typ pedálového snímače",
          types: ["Žádné", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Určená úroveň asistence",
          types: ["Podle příkazu displeje", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Omezení rychlosti",
          types: [
            "Podle příkazu displeje",
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
            "30 km/h",
            "31 km/h",
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
        startCurrent: "Začátek proudu",
        slowStartMode: "Režim pomalého startu",
        startDegree: "Stupeň zahájení",
        workMode: {
          text: "Pracovní režim",
          types: ["Neurčeno"],
        },
        stopDelay: "Zpoždění zastavení",
        currentDecay: "Aktuální rozpad",
        stopDecay: "Zastavení rozpadu",
        keepCurrent: "Udržujte aktuální stav",
      },
      throttle: {
        header: "Asistent plynu",
        startVoltage: "Počáteční napětí",
        endVoltage: "Koncové napětí",
        mode: {
          text: "Režim",
          types: ["Rychlost", "Aktuální"],
        },
        designatedAssistLevel: {
          text: "Určená úroveň asistence",
          types: ["Podle příkazu displeje", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Omezení rychlosti",
          types: [
            "Podle příkazu displeje",
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
            "30 km/h",
            "31 km/h",
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
        startCurrent: "Začátek proudu",
      },
    },
  },
  help: {
    about: {
      header: "O aplikaci",
      p1: "Konfigurační nástroj pro motory Bafang řady BBS.",
      author: "Autor",
    },
    connection: {
      header: "Připojení",
      p1:
        "Pro připojení k řídicí jednotce vašeho elektrokola řady Bafang BBS potřebujete adaptér USB-OTG, adaptér USB na sériový kabel s konektory typu Julet na konci.",
      p2:
        'Můžete si také koupit "originální" programovací kabel USB, ale je to jen předražený adaptér USB na sériový kabel se správným konektorem pro kabel na řadiči BBS.',
    },
    general: {
      header: "Obecné",
      lowBatteryProtection:
        "To je napětí, při kterém řídicí jednotka zastaví motor, aby ochránila baterii před nadměrným vybitím. Mělo by být správně nastaveno výrobcem a nemusíte ho měnit. Pro 13S akumulátory je standardně nastaveno 41 V.",
      currentLimit:
        "Jedná se o maximální povolený proud protékající motorem. Pokud je váš motor například 25 A, můžete jej nastavit na 20 A, abyste jej udrželi v bezpečí, pokud chcete. Nedoporučuje se nastavovat vyšší proud, než je jmenovitý. I při nastavení na 25A bude špičkový proud vyšší, takže raději nenastavujte více.",
      speedMeterType:
        "Tímto se vybírá měřič rychlosti, který se používá na vašem kole. U sad BBS je externí. Tento parametr je nastaven výrobcem, a pokud vaše nastavení není vlastní, nemusíte jej měnit.",
      speedMeterSignals:
        "Zde můžete nastavit, kolik signálů na jednu otáčku generuje váš snímač. Pokud používáte externí snímač s magnetem, generuje jeden signál na jednu otáčku kola. Tento parametr je nastaven výrobcem, a pokud vaše nastavení není vlastní, nemusíte jej měnit.",
      wheelDiameter:
        "Průměr kola by měl odpovídat velikosti hnacího kola (proto může mít vaše kolo dvě různě velká kola). Nastavení menšího průměru, než jaký ve skutečnosti je, zvýší vaši rychlost, ale také může snadno vést k poškození motoru.",
      endText:
        "Po dokončení ladění obecných nastavení je můžete pomocí tlačítka WRITE na této kartě programu zapsat do řídicí jednotky. Kdykoli je také můžete pomocí tlačítka READ přečíst (tím se nahradí všechny hodnoty v záložce General. Nepřepíše se tím žádné jiné nastavení.",
    },
    levels: {
      header: "Úrovně asistence",
      p1:
        "To jsou všechna možná nastavení asistence (jak pro asistenci pedálů, tak pro plynové rukojeti při použití jedné z nich).",
      p2:
        "Důležité je zmínit, že pokud chcete mít možnost používat plynovou rukojeť se zvolenou funkcí Pedal Assist 0 na LCD displeji, musí být proud a omezení rychlosti nastaveny na hodnotu 1.",
      p3: "Obvykle je asistent 0 nastaven na hodnotu 0, abyste mohli kolo používat bez asistence, pokud chcete.",
      p4:
        "Při nastavování těchto úrovní buďte opatrní. Pokud nastavíte příliš nízký proud, motor nebude schopen kolo rozpohybovat a mohlo by dojít k jeho poškození. Pokud nastavíte příliš vysoký proud první úrovně asistence, bude zrychlení při rozjezdu značné. To by mohlo poškodit vnitřní převody nebo způsobit pád kola.",
      p5:
        "Omezení rychlosti nastavuje, při jaké rychlosti (% maximální rychlosti nastavené na displeji LCD) motor sníží svůj výkon a bude tuto rychlost udržovat, místo aby více zrychloval.",
      p6:
        "Přepínače v horní části aplikace umožňují zobrazit automaticky převedené hodnoty (proud a rychlost nebo procenta).",
      endText:
        "Po dokončení ladění nastavení úrovní asistence je můžete pomocí tlačítka WRITE na této kartě programu zapsat do ovladače. Kdykoli je také můžete pomocí tlačítka READ přečíst (tím se nahradí všechny hodnoty v Assist Levels. Nepřepíše se tím žádné jiné nastavení.",
    },
    pedal: {
      header: "Asistent pedálů",
      p1:
        "Systém Pedal Assist vám pomáhá při šlapání. Na této kartě můžete vyladit jeho výkon. Některé z nich byste neměli měnit, protože jsou specifické pro vaši soupravu. Ty nastavuje výrobce.",
      pedalSensorType:
        "Tímto parametrem se vybírá typ snímače otáčení pedálu. Je nastaven výrobcem a neměl by se měnit.",
      designatedAssistLevel:
        'Pomocí tohoto parametru můžete zvolit dva typy operací. První je "Příkazem displeje". To znamená, že úroveň asistence (ta z karty Základní nastavení) bude vybrána z vašeho LCD displeje. Druhou možností je výběr konkrétní úrovně asistence, která bude pevně daná a nebudete ji moci z LCD displeje měnit. V tomto případě můžete zvolit libovolnou úroveň asistence od 0 do 9.',
      speedLimit:
        'Jedná se o maximální rychlost, při které motor zajistí dodatečné zrychlení. Po dosažení této rychlosti ji bude pouze udržovat, ale nebude dále zrychlovat. Pokud tento parametr nastavíte na "Příkazem displeje", budete moci rychlost nastavit z LCD displeje. Mějte na paměti, že některé LCD displeje umožňují nastavit rychlost 99 km/h, což alespoň u současných sad BBS není možné. Pokud mám vyzkoušeno, maximální rychlost bez šlapání je 40 km/h (při správném nastavení velikosti kola). Toto nastavení se používá pro všechny úrovně asistence, které vidíte na kartě Basic. Pokud ji nastavíte na 40 km/h (v tomto programu nebo z LCD displeje) a úroveň asistence 5 je nastavena na 50 % rychlosti, pak budete schopni při této úrovni asistence dosáhnout 20 km/h.',
      startCurrent:
        "Jedná se o startovací proud, když začnete otáčet pedály. Je dobré jej nastavit alespoň na 10 %, abyste měli jistotu, že se kolo rozjede a motor se nezastaví. Nastavení této hodnoty na velmi vysokou hodnotu způsobí, že kolo při startu velmi rychle zrychlí, což by mohlo poškodit jeho vnitřní převody a také motor. Doporučená hodnota je mezi 10 a 30 %. Měli byste také dbát na to, abyste nezačali šlapat na příliš vysoký převod, který by příliš zatěžoval motor.",
      slowStartMode:
        "Toto nastavení určuje, jak rychle se dosáhne počátečního proudu. Můžete tak docílit plynulého zrychlení a rychlé reakce jízdního kola. Pro běžnou jízdu na kole obvykle dobře funguje hodnota kolem 4. Pokud jezdíte na horském kole, pak nastavení na nižší hodnotu zrychlí akceleraci, což může být užitečné, ale měli byste si dát pozor, abyste nesmažili regulátor a motor.",
      startDegree:
        "Tento parametr nastavuje, kolik impulzů ze snímače pedálů je potřeba, aby se motor spustil. Plná otáčka pedálu u souprav BBS generuje 24 impulzů. Nastavení tohoto parametru na hodnotu 0 nebo 1 nebude fungovat. Hodnota kolem 4 funguje dobře, protože se nespustí jen při malém pohybu a také nevyžaduje příliš mnoho otáček.",
      workMode:
        "Účel tohoto parametru není zcela jasný. Předpokládá se, že řídí výkon podle rychlosti otáčení pedálu. Zdá se, že hodnota nastavená výrobcem funguje dobře, takže ji není třeba měnit.",
      stopDelay: "Jedná se o prodlevu po ukončení šlapání, než se motor zastaví. Hodnota 250 ms funguje dobře.",
      currentDecay:
        "Tento parametr nastavuje, jak rychle klesne proud při rychlém šlapání a dosažení maximální rychlosti při zvolené úrovni asistence. Nižší hodnota znamená, že proud začne klesat při nižší rychlosti.",
      stopDecay: "Doba, za kterou se motor zastaví.",
      keepCurrent:
        "Tímto nastavením se řídí procento maximálního proudu při zvolené úrovni asistence, které bude protékat motorem, když dosáhnete maximální rychlosti a budete pokračovat ve šlapání. Pokud je tedy váš maximální proud 25 A a použijete asistenci šlapání 5 nastavenou na 50 % proudu, pak bude maximální proud pro tuto úroveň asistence 12,5 A. Pokud je pak funkce Keep Current nastavena na 50 %, když dosáhnete maximální rychlosti a budete pokračovat ve šlapání, bude proud udržován na hodnotě 6,25 A. Tím je zajištěn plynulý přechod na asistenční výkon, když snížíte rychlost šlapání a rychlost pohybu klesne pod maximum.",
      endText:
        "Po dokončení ladění nastavení pedálového asistenta je můžete pomocí tlačítka WRITE na této kartě programu zapsat do ovladače. Kdykoli je také můžete pomocí tlačítka READ přečíst (tím se nahradí všechny hodnoty v Pedal Assist. Nepřepíše se tím žádné jiné nastavení.",
    },
    throttle: {
      header: "Rukojeť plynu",
      p1:
        "Pokud je vaše souprava vybavena rukojetí plynu, umožňuje tato karta nastavit její provoz. Ujistěte se, že je Assis 0 nastaven na 1 (proud i rychlost), pokud jej chcete používat, když je na LCD displeji vybrána funkce Pedal Assist S0.",
      startVoltage:
        "Jedná se o výstupní napětí rukojeti plynu, při kterém se motor spustí. Minimum, při kterém regulátor reaguje, je 1,1 V.",
      endVoltage:
        "Jedná se o výstupní napětí rukojeti plynu, při kterém motor dosáhne maximálního výkonu (omezeného ostatními nastaveními). Maximální napětí přijímané z regulátoru je 4,2 V. S tímto parametrem si musíte trochu pohrát, protože maximum plynové rukojeti se může lišit v závislosti na modelu. Pokud tento parametr nastavíte příliš nízko, nebude plynová rukojeť téměř reagovat. Pokud jej nastavíte na maximum, které je rukojeť schopna vyprodukovat, získáte nejširší možný rozsah ovládání výkonu motoru.",
      mode:
        "Jedná se o provozní režim plynové rukojeti. Máte dvě možnosti: rychlost a proud. Při nastavení na rychlost používá řídicí jednotka rychlost pohybu k nastavení výkonu motoru podle polohy plynové rukojeti. Bohužel kvůli způsobu měření rychlosti dochází ke značnému zpoždění a odezva je v tomto režimu dost špatná. Při nastavení na proud řídí rukojeť proud motoru podle své polohy. Tento režim funguje lépe a podobá se provozu automobilu.",
      designatedAssistLevel:
        'Tuto hodnotu můžete nastavit na "Podle příkazu displeje" nebo vybrat pevnou úroveň. První možnost využívá nastavení PAS z vašeho LCD displeje. To znamená, že maximální výkon a rychlost závisí na zvolené úrovni PAS a poloze plynové rukojeti. Pokud je tedy vybrána nízká úroveň PAS, maximální proud a rychlost budou také nízké, i když budete tlačit plyn na maximum. Pokud je pro tento parametr zvolena pevná úroveň asistence, bude plynová rukojeť používat svůj maximální proud a rychlost. Pokud nastavíte tuto úroveň na 9, dávejte pozor, abyste při zastavení netlačili na plyn na maximum, protože vysoký proud a výkon by vám mohl poškodit regulátor a motor.',
      speedLimit:
        "Pomocí tohoto parametru můžete omezit maximální rychlost při použití plynové rukojeti. Tím se přepíše určená maximální rychlost asistenční úrovně, pokud je vyšší.",
      startCurrent:
        "Jedná se o procento maximálního proudu přiváděného do motoru, když rukojeť plynu generuje minimální přijatelné napětí. Obvykle se osvědčuje hodnota 10 % nebo 20 %. Pokud je váš maximální proud na kartě Obecné nastaven na 25 A a Startovací proud je nastaven na 10 %, získáte startovací proud 2,5 A. To povede k hladkému startu a nebude příliš zatěžovat vnitřní převody. Pokud tento parametr nastavíte na velmi vysokou hodnotu, můžete poškodit vnitřní převody a motor.",
      endText:
        "Po dokončení ladění nastavení plynové rukojeti je můžete pomocí tlačítka WRITE na této kartě programu zapsat do ovladače. Kdykoli je také můžete pomocí tlačítka READ přečíst (tím se nahradí všechny hodnoty na rukojeti plynu. Nepřepíše se tím žádné jiné nastavení.",
    },
  },
};

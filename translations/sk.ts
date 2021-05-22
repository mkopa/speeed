import { Translation } from "./type";

export const sk: Translation = {
  messages: {
    processing: "Spracovanie...",
    deviceIsDisconnected: "Zariadenie je odpojené!",
    connectingInProgress: "Prebieha pripájanie...",
    settingsHaveBeenSaved: "Vaše nastavenia boli uložené!",
    configLoadedSuccessful: "Konfigurácia bola úspešne načítaná!",
    overrideFileWarning: {
      header: "Varovanie!",
      message: {
        theFileText: "Súbor",
        areYouSureToOverrideText: "existujú! Ste si istí, že chcete tento súbor prepísať?",
      },
      buttons: {
        yes: "Override",
        no: "Nie",
      },
    },
    unsupportedConfigurationFile: {
      header: "Chyba!",
      text: "Nepodporovaný alebo poškodený konfiguračný súbor!",
    },
    pleaseWait: "Počkajte, prosím...",
    connectingToMotor: "Pripojenie k motoru...",
    noDeviceFound: "Nenašlo sa žiadne zariadenie!",
    cantEstablishingConnection:
      "Nie je možné nadviazať spojenie s motorom! Skontrolujte koniec spojenia a reštartujte ho!",
    connectedTo: "Pripojené k",
    readBasSuccess: {
      basTypeLevel: "Úrovne",
      basTypeGeneral: "Všeobecné",
      first: "Prečítajte si",
      second: "parametre úspešne!",
    },
    readPedalAssistSuccess: "Úspešne prečítajte parametre asistenta pedálovania!",
    readThrottleHandleSuccess: "Úspešné načítanie parametrov rukoväte plynu",
    readAllSuccess: "Úspešné načítanie všetkých parametrov!",
    somethingWentWrong: "Niečo sa pokazilo! Záznam:",
    writeSuccess: {
      levels: "Úrovne",
      general: "Všeobecné",
      pedalAssist: "Pedálový asistent",
      throttleHandle: "Rukoväť plynu",
      first: "Napíšte na",
      second: "parametre úspešne!",
    },
    writeAllSuccess: "Úspešne zapíšte všetky parametre!",
  },
  buttons: {
    cancel: "Zrušiť",
  },
  errors: {
    writeBasErrors: {
      "0": "Ochrana proti vybitiu batérie mimo dosahu, resetujte ju!",
      "1": "Aktuálny limit mimo rozsahu, prosím, resetujte!",
      "2": "Prúdový limit pre PAS0 mimo rozsahu, resetujte ho!",
      "3": "Rýchlostný limit pre PAS0 mimo rozsahu, resetujte ho!",
      "4": "Prúdový limit pre PAS1 mimo rozsahu, prosím, resetujte!",
      "5": "Obmedzenie rýchlosti pre PAS1 mimo rozsahu, prosím, resetujte!",
      "6": "Prúdový limit pre PAS2 mimo rozsahu, prosím, resetujte!",
      "7": "Rýchlostný limit pre PAS2 mimo rozsahu, prosím, resetujte!",
      "8": "Prúdový limit pre PAS3 mimo rozsahu, prosím, resetujte!",
      "9": "Rýchlostný limit pre PAS3 mimo rozsahu, prosím, resetujte!",
      "10": "Prúdový limit pre PAS4 mimo rozsahu, prosím, resetujte!",
      "11": "Rýchlostný limit pre PAS4 mimo rozsahu, prosím, resetujte!",
      "12": "Prúdový limit pre PAS5 mimo rozsahu, prosím, resetujte!",
      "13": "Rýchlostný limit pre PAS5 mimo rozsahu, prosím, resetujte!",
      "14": "Prúdový limit pre PAS6 mimo rozsahu, resetujte ho!",
      "15": "Rýchlostný limit pre PAS6 mimo rozsahu, prosím, resetujte!",
      "16": "Prúdový limit pre PAS7 mimo rozsahu, prosím, resetujte!",
      "17": "Obmedzenie rýchlosti pre PAS7 mimo rozsahu, prosím, resetujte!",
      "18": "Prúdový limit pre PAS8 mimo rozsahu, prosím, resetujte!",
      "19": "Obmedzenie rýchlosti pre PAS8 mimo rozsahu, prosím, resetujte!",
      "20": "Prúdový limit pre PAS9 mimo rozsahu, resetujte ho!",
      "21": "Rýchlostný limit pre PAS9 mimo rozsahu, prosím, resetujte!",
      "22": "Priemer kolesa mimo rozsahu, prosím, resetujte!",
      "23": "Signály merača rýchlosti sú mimo rozsahu, resetujte ich, prosím!",
      default: "Problém s komunikáciou, prosím, resetujte!",
    },
    writePasErrors: {
      "0": "Chyba typu pedálového snímača, resetujte ho!",
      "1": "Chyba určenej úrovne asistencie, obnovte ju, prosím!",
      "2": "Chyba obmedzenia rýchlosti, prosím, resetujte!",
      "3": "Štart Aktuálne mimo dosahu, resetujte!",
      "4": "Chyba režimu pomalého štartu, resetujte ho!",
      "5": "Štart Stupeň mimo dosahu, prosím, resetujte!",
      "6": "Chyba pracovného režimu, prosím, resetujte!",
      "7": "Zastavenie oneskorenia mimo dosahu, prosím, resetujte!",
      "8": "Aktuálny rozpad mimo rozsahu, prosím, resetujte!",
      "9": "Zastavte rozpad mimo dosahu, prosím, resetujte!",
      "10": "Udržujte prúd mimo dosahu, prosím, resetujte!",
      default: "Neznáma chyba, prosím, resetujte!",
    },
    writeThrErrors: {
      "0": "Štart Napätie mimo dosahu, resetujte ho!",
      "1": "Koniec Napätie mimo dosahu, resetujte!",
      "2": "Chyba režimu, prosím, resetujte!",
      "3": "Chybné označenie asistenta, prosím, resetujte!",
      "4": "Chyba obmedzenia rýchlosti, prosím, resetujte!",
      "5": "Štart Aktuálne mimo dosahu, resetujte!",
      default: "Neznáma chyba, prosím, resetujte!",
    },
  },
  mainRouter: {
    home: "Domov",
    settings: "Nastavenia",
    help: "Pomoc",
  },
  main: {
    label_language: "Jazyk",
    object_Profile: {
      header: "Profil",
      open: "Otvorte stránku",
      save_as: "Uložiť ako",
      save: "Uložiť",
      default_configuration_string: "Predvolená konfigurácia (nie je zadaný žiadny súbor)",
      popup_header: "Uložiť konfiguráciu ako",
      popup_placeholder: "Tu zadajte názov súboru",
      popup_button_label: "Uložiť",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Prečítajte si",
      write_all: "Napíšte na",
      connect: "Pripojenie",
      disconnect: "Odpojenie",
      status: {
        disconnected: "odpojené",
        connecting: "pripojenie",
        connected: "pripojené",
        error: "chyba",
      },
      motor_info: {
        status: "Stav",
        manufacturer: "Výrobca",
        model: "Model",
        hardware_version: "Verzia hardvéru",
        firmware_version: "Verzia firmvéru",
        nominal_voltage: "Nominálne napätie",
        max_current: "Maximálny prúd",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Všeobecné",
      levels: "Úrovne",
      pedal: "Pedál",
      throttle: "Škrtiaca klapka",
    },
    header: {
      readButtonText: "Prečítajte si",
      writeButtonText: "Uložiť",
    },
    tabs: {
      general: {
        header: "Všeobecné",
        lowBatteryProtection: "Ochrana pred vybitím batérie",
        currentLimit: "Prúdový limit",
        speedMeterType: {
          text: "Typ merača rýchlosti",
          types: ["Externý, merač kolies", "Interný, motorový merač", "Podľa fázy motora"],
        },
        speedMeterSignals: "Signály merača rýchlosti",
        wheelDiameter: {
          text: "Priemer kolesa",
          types: [
            "16 palcov",
            "17 palcov",
            "18 palcov",
            "19 palcov",
            "20 palcov",
            "21 palcov",
            "22 palcov",
            "23 palcov",
            "24 palcov",
            "25 palcov",
            "26 palcov",
            "27 palcov",
            "700C",
            "28 palcov",
            "29 palcov",
            "30 palcov",
          ],
        },
      },
      levels: {
        header: "Úrovne asistencie",
        level: "Úroveň",
        current: "Aktuálne",
        speed: "Rýchlosť",
        popoverCurrentLimitHeader: "Prúdový limit pre úroveň",
        popoverSpeedLimitHeader: "Obmedzenie rýchlosti pre úroveň",
      },
      pedal: {
        header: "Pedálový asistent",
        pedalSensorType: {
          text: "Typ pedálového snímača",
          types: ["Žiadne", "DH-Senzor-12", "BB-Senzor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Určená úroveň asistencie",
          types: ["Podľa príkazu displeja", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Obmedzenie rýchlosti",
          types: [
            "Podľa príkazu displeja",
            "15 km/h",
            "16 km/h",
            "17 km/h",
            "18 km/h",
            "19km/h",
            "20 km/h",
            "21km/h",
            "22km/h",
            "23 km/h",
            "24km/h",
            "25km/h",
            "26 km/h",
            "27 km/h",
            "28 km/h",
            "29 km/h",
            "30 km/h",
            "31 km/h",
            "32km/h",
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
        startCurrent: "Začiatok prúdu",
        slowStartMode: "Režim pomalého štartu",
        startDegree: "Začať stupeň",
        workMode: {
          text: "Pracovný režim",
          types: ["Neurčené"],
        },
        stopDelay: "Oneskorenie zastavenia",
        currentDecay: "Aktuálny rozpad",
        stopDecay: "Zastavenie rozpadu",
        keepCurrent: "Udržujte aktuálny stav",
      },
      throttle: {
        header: "Asistent plynu",
        startVoltage: "Počiatočné napätie",
        endVoltage: "Koncové napätie",
        mode: {
          text: "Režim",
          types: ["Rýchlosť", "Aktuálne"],
        },
        designatedAssistLevel: {
          text: "Určená úroveň asistencie",
          types: ["Podľa príkazu displeja", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Obmedzenie rýchlosti",
          types: [
            "Podľa príkazu displeja",
            "15 km/h",
            "16 km/h",
            "17 km/h",
            "18 km/h",
            "19km/h",
            "20 km/h",
            "21km/h",
            "22km/h",
            "23 km/h",
            "24km/h",
            "25km/h",
            "26 km/h",
            "27 km/h",
            "28 km/h",
            "29 km/h",
            "30 km/h",
            "31 km/h",
            "32km/h",
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
        startCurrent: "Začiatok prúdu",
      },
    },
  },
  help: {
    about: {
      header: "O aplikácii",
      p1: "Konfiguračný nástroj pre sériu motorov Bafang BBS.",
      author: "Autor",
    },
    connection: {
      header: "Pripojenie",
      p1:
        "Na pripojenie k riadiacej jednotke vášho elektrického bicykla zo série Bafang BBS potrebujete adaptér USB-OTG, adaptér USB na sériové pripojenie s konektormi typu Julet na konci.",
      p2:
        'Môžete si kúpiť aj "originálny" programovací kábel USB, ale je to len predražený adaptér USB na sériový kábel so správnym konektorom pre kábel na ovládači BBS.',
    },
    general: {
      header: "Všeobecné",
      lowBatteryProtection:
        "Pri tomto napätí riadiaca jednotka zastaví motor, aby sa batéria nevybila. Malo by byť správne nastavené výrobcom a nemusíte ho meniť. Pre 13S akumulátory je predvolené napätie 41 V.",
      currentLimit:
        "Toto je maximálny povolený prúd, ktorý môže pretekať motorom. Ak je váš motor napríklad 25 A, môžete ho nastaviť na 20 A, aby ste ho udržali v bezpečí, ak chcete. Neodporúča sa nastavovať vyšší prúd, ako je menovitý. Aj pri nastavení na 25A bude špičkový prúd vyšší, takže radšej nenastavujte viac.",
      speedMeterType:
        "Týmto sa vyberie merač rýchlosti používaný na bicykli. Pre súpravy BBS je externý. Tento parameter je nastavený výrobcom a ak vaša zostava nie je vlastná, nemusíte ho meniť.",
      speedMeterSignals:
        "Tu môžete nastaviť, koľko signálov na jednu otáčku generuje váš snímač. Ak používate externý snímač s magnetom, generuje jeden signál na jednu otáčku kolesa. Tento parameter je nastavený výrobcom a ak vaše nastavenie nie je vlastné, nemusíte ho meniť.",
      wheelDiameter:
        "Priemer kolesa by mal zodpovedať veľkosti vášho hnacieho kolesa (preto by váš bicykel mohol mať dve rôzne veľkosti kolies). Nastavenie priemeru na menšiu veľkosť, ako v skutočnosti je, zvýši vašu rýchlosť, ale tiež môže ľahko viesť k poškodeniu motora.",
      endText:
        "Po dokončení ladenia všeobecných nastavení ich môžete pomocou tlačidla WRITE na tejto karte programu zapísať do ovládača. Taktiež môžete kedykoľvek použiť tlačidlo READ (Čítať) na ich prečítanie (tým sa nahradia všetky hodnoty v záložke General (Všeobecné). Tým sa neprepíšu žiadne iné nastavenia.",
    },
    levels: {
      header: "Úrovne asistencie",
      p1:
        "Toto sú všetky možné nastavenia asistencie (pre asistenciu pedálom aj pre plynovú rukoväť pomocou jednej z nich).",
      p2:
        "Je dôležité spomenúť, že prúdový asistent 0 a obmedzenia rýchlosti musia byť nastavené na hodnotu 1, ak chcete mať možnosť používať plynovú rukoväť so zvoleným asistentom pedálovania 0 na LCD displeji.",
      p3: "Zvyčajne je asistent 0 nastavený na hodnotu 0, aby ste mohli bicykel používať bez asistencie, ak chcete.",
      p4:
        "Pri nastavovaní týchto úrovní buďte opatrní. Ak nastavíte príliš nízky prúd, motor nebude schopný pohnúť bicyklom a môže dôjsť k jeho poškodeniu. Ak nastavíte prúd prvej úrovne asistencie príliš vysoký, zrýchlenie pri štarte bude výrazné. To by mohlo poškodiť vnútorné prevody alebo spôsobiť pád bicykla.",
      p5:
        "Obmedzenie rýchlosti nastavuje, pri akej rýchlosti (% maximálnej rýchlosti nastavenej na LCD displeji) motor zníži svoj výkon a namiesto väčšej akcelerácie len udržiava túto rýchlosť.",
      p6:
        "Prepínače v hornej časti aplikácie umožňujú zobraziť automaticky konvertované hodnoty (prúd a rýchlosť alebo percentá)",
      endText:
        "Po dokončení ladenia nastavení úrovne asistencie ich môžete pomocou tlačidla WRITE na tejto karte programu zapísať do ovládača. Taktiež môžete kedykoľvek použiť tlačidlo READ (Čítať) na ich prečítanie (tým sa nahradia všetky hodnoty v položke Assist Levels (Úrovne asistencie). Tým sa neprepíšu žiadne iné nastavenia.",
    },
    pedal: {
      header: "Pedálový asistent",
      p1:
        "Systém Pedal Assist vám pomáha pri šliapaní do pedálov. Na tejto karte môžete nastaviť jeho výkon. Niektoré z nich by ste nemali meniť, pretože sú špecifické pre vašu súpravu. Tie nastavuje výrobca.",
      pedalSensorType:
        "Týmto parametrom sa vyberá typ snímača otáčania pedálov. Je nastavený výrobcom a nemal by sa meniť.",
      designatedAssistLevel:
        'Pomocou tohto parametra môžete vybrať dva typy operácií. Prvý je "Príkazom displeja". To znamená, že úroveň asistencie (tá zo záložky Základné nastavenia) bude zvolená z vášho LCD displeja. Druhou možnosťou je výber konkrétnej úrovne asistencie, ktorá bude pevne stanovená a nebudete ju môcť zmeniť z LCD displeja. V tomto prípade môžete vybrať ľubovoľnú úroveň asistencie od 0 do 9.',
      speedLimit:
        'Ide o maximálnu rýchlosť, pri ktorej motor zabezpečí dodatočné zrýchlenie. Po dosiahnutí tejto rýchlosti ju bude len udržiavať, ale nebude ďalej zrýchľovať. Ak tento parameter nastavíte na "Príkazom displeja", budete môcť rýchlosť nastaviť z LCD displeja. Majte na pamäti, že niektoré LCD displeje umožňujú nastaviť rýchlosť 99 km/h, čo nie je možné aspoň pri súčasných súpravách BBS. Pokiaľ som testoval, maximálna rýchlosť bez pedálovania je 40 km/h (pri správne nastavenej veľkosti kolies). Toto nastavenie sa používa pre všetky úrovne asistencie, ktoré vidíte na karte Basic (Základné). Ak nastavíte túto hodnotu na 40 km/h (v tomto programe alebo z LCD displeja) a úroveň asistencie 5 je nastavená na 50 % rýchlosti, potom budete môcť pri tejto úrovni asistencie dosiahnuť 20 km/h.',
      startCurrent:
        "Ide o spúšťací prúd, keď začnete otáčať pedálmi. Je dobré nastaviť ho aspoň na 10 %, aby ste mali istotu, že sa bicykel rozbehne a motor sa nezastaví. Nastavenie tejto hodnoty na veľmi vysokú hodnotu spôsobí, že bicykel bude pri štarte veľmi rýchlo zrýchľovať, čo môže poškodiť jeho vnútorné prevody a tiež motor. Odporúčaná hodnota je medzi 10 % a 30 %. Mali by ste sa tiež uistiť, že nezačnete šliapať na príliš vysoký prevod, ktorý by príliš zaťažil motor.",
      slowStartMode:
        "Toto nastavenie určuje, ako rýchlo sa dosiahne štartovací prúd. Môžete tak dosiahnuť plynulé zrýchlenie bicykla a jeho rýchlu reakciu. Hodnota okolo 4 zvyčajne dobre funguje pri bežnej jazde na bicykli. Ak jazdíte na horskom bicykli, potom nastavením na nižšiu hodnotu zrýchlite zrýchlenie, čo môže byť užitočné, ale mali by ste si dať pozor, aby ste nesmažili regulátor a motor.",
      startDegree:
        "Tento parameter nastavuje, koľko impulzov zo snímača pedálov je potrebných pred spustením motora. Plná otáčka pedálu na súpravách BBS generuje 24 impulzov. Nastavenie tohto parametra na hodnotu 0 alebo 1 nebude fungovať. Hodnota okolo 4 funguje dobre, pretože sa nespustí len pri malom pohybe a tiež nevyžaduje príliš veľa otáčok.",
      workMode:
        "Účel tohto parametra nie je celkom jasný. Má riadiť výkon podľa rýchlosti otáčania pedálov. Zdá sa, že hodnota nastavená výrobcom funguje v poriadku, takže ju nemusíte meniť.",
      stopDelay: "Ide o oneskorenie po zastavení pedálovania pred zastavením motora. Hodnota 250 ms funguje dobre.",
      currentDecay:
        "Tento parameter nastavuje, ako rýchlo klesá prúd, keď šliapete rýchlo a dosahujete maximálnu rýchlosť pri zvolenej úrovni asistencie. Nižšia hodnota znamená, že prúd začne klesať pri nižšej rýchlosti.",
      stopDecay: "Čas, za ktorý sa motor zastaví.",
      keepCurrent:
        "Toto nastavenie riadi percento maximálneho prúdu pri zvolenej úrovni asistencie, ktoré bude pretekať motorom, keď dosiahnete maximálnu rýchlosť a budete pokračovať v pedálovaní. Ak je teda váš maximálny prúd 25 A a používate asistenciu pri pedálovaní 5 nastavenú na 50 % prúdu, potom bude maximálny prúd pre túto úroveň asistencie 12,5 A. Potom ak je Keep Current nastavený na 50 %, keď dosiahnete maximálnu rýchlosť a budete pokračovať v pedálovaní, prúd sa bude udržiavať na úrovni 6,25 A. Tým sa zabezpečí plynulý prechod na asistenčný výkon, keď znížite rýchlosť pedálovania a rýchlosť pohybu klesne pod maximálnu hodnotu.",
      endText:
        "Po dokončení ladenia nastavení pedálového asistenta ich môžete pomocou tlačidla WRITE na tejto karte programu zapísať do ovládača. Taktiež môžete kedykoľvek použiť tlačidlo READ (Čítať) na ich prečítanie (tým sa nahradia všetky hodnoty v Pedal Assist. Tým sa neprepíšu žiadne iné nastavenia.",
    },
    throttle: {
      header: "Rukoväť plynu",
      p1:
        "Ak je vaša súprava vybavená rukoväťou plynu, táto karta vám umožňuje konfigurovať jej prevádzku. Uistite sa, že Assis 0 je nastavený na 1 (prúd aj rýchlosť), ak ho chcete používať, keď je na LCD displeji vybraný Pedal Assist S0.",
      startVoltage:
        "Toto je výstupné napätie rukoväte plynu, pri ktorom sa motor spustí. Minimum, pri ktorom regulátor reaguje, je 1,1 V",
      endVoltage:
        "Toto je výstupné napätie rukoväte plynu, pri ktorom motor dosiahne maximálny výkon (obmedzený ostatnými nastaveniami). Maximálne akceptované napätie z regulátora je 4,2 V. S týmto parametrom sa musíte trochu pohrať, pretože maximum rukoväte plynu sa môže líšiť v závislosti od modelu. Ak nastavíte tento parameter príliš nízko, nebudete mať takmer žiadnu odozvu od plynovej rukoväte. Keď ho nastavíte na maximum, ktoré dokáže rukoväť vyprodukovať, získate najširší možný rozsah ovládania výkonu motora.",
      mode:
        "Toto je prevádzkový režim rukoväte plynu. Máte dve možnosti: rýchlosť a prúd. Keď je nastavená na rýchlosť, riadiaca jednotka používa rýchlosť pohybu na nastavenie výkonu motora podľa polohy rukoväte plynu. Bohužiaľ, kvôli spôsobu merania rýchlosti dochádza k značnému oneskoreniu a odozva je v tomto režime dosť zlá. Pri nastavení na prúd riadi rukoväť prúd motora podľa svojej polohy. Tento režim funguje lepšie a podobá sa prevádzke automobilu.",
      designatedAssistLevel:
        'Môžete ju nastaviť na "Podľa príkazu displeja" alebo vybrať pevnú úroveň. Prvá možnosť využíva nastavenie PAS z vášho LCD displeja. To znamená, že maximálny výkon a rýchlosť závisia od zvolenej úrovne PAS a polohy rukoväte plynu. Ak je teda zvolená nízka úroveň PAS, maximálny prúd a rýchlosť budú tiež nízke, aj keď stlačíte plynovú rukoväť na maximum. Ak je pre tento parameter zvolená pevná úroveň asistencie, rukoväť plynu bude používať svoj maximálny prúd a rýchlosť. Ak nastavíte túto úroveň na 9, dávajte pozor, aby ste pri zastavení nestlačili plynovú rukoväť na maximum, pretože vysoký prúd a výkon by vám mohli poškodiť regulátor a motor.',
      speedLimit:
        "Pomocou tohto parametra môžete obmedziť maximálnu rýchlosť pri použití rukoväte plynu. Tým sa prepíše určená maximálna rýchlosť úrovne asistencie, ak je vyššia.",
      startCurrent:
        "Ide o percento maximálneho prúdu privádzaného do motora, keď rukoväť plynu generuje minimálne akceptovateľné napätie. Zvyčajne sa osvedčuje hodnota 10 % alebo 20 %. Ak je váš maximálny prúd na karte General (Všeobecné) nastavený na 25 A a Start Current (Štartovací prúd) je nastavený na 10 %, dostanete štartovací prúd 2,5 A. To povedie k hladkému štartu a nebude príliš zaťažovať vnútorné prevody. Ak nastavíte tento parameter na veľmi vysokú hodnotu, môžete poškodiť vnútorné prevody a motor.",
      endText:
        "Po dokončení ladenia nastavení rukoväte plynu ich môžete pomocou tlačidla WRITE na tejto karte programu zapísať do ovládača. Taktiež môžete kedykoľvek použiť tlačidlo READ (Čítať) na ich prečítanie (tým sa nahradia všetky hodnoty na rukoväti plynu. Tým sa neprepíšu žiadne iné nastavenia.",
    },
  },
};

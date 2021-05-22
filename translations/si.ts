import { Translation } from "./type";

export const si: Translation = {
  messages: {
    processing: "Obdelava...",
    deviceIsDisconnected: "Naprava je odklopljena!",
    connectingInProgress: "Povezovanje v teku...",
    settingsHaveBeenSaved: "Vaše nastavitve so shranjene!",
    configLoadedSuccessful: "Konfiguracija je bila uspešno naložena!",
    overrideFileWarning: {
      header: "Opozorilo!",
      message: {
        theFileText: "Datoteka",
        areYouSureToOverrideText: "obstajajo! Ali ste prepričani, da želite to datoteko nadomestiti?",
      },
      buttons: {
        yes: "Prevlada",
        no: "Ne",
      },
    },
    unsupportedConfigurationFile: {
      header: "Napaka!",
      text: "Nepodprta ali pokvarjena konfiguracijska datoteka!",
    },
    pleaseWait: "Počakajte...",
    connectingToMotor: "Priključitev na motor...",
    noDeviceFound: "Naprava ni bila najdena!",
    cantEstablishingConnection:
      "Ne morem vzpostaviti povezave z motorjem! Preverite konec povezave in jo ponovno zaženite!",
    connectedTo: "Povezano z",
    readBasSuccess: {
      basTypeLevel: "Ravni",
      basTypeGeneral: "Splošno",
      first: "Preberi",
      second: "parametri uspešno!",
    },
    readPedalAssistSuccess: "Uspešno preberite parametre pomoči pri pedaliranju!",
    readThrottleHandleSuccess: "Uspešno branje parametrov ročice za plin",
    readAllSuccess: "Uspešno preberite vse parametre!",
    somethingWentWrong: "Nekaj je šlo narobe! Dnevnik:",
    writeSuccess: {
      levels: "Ravni",
      general: "Splošno",
      pedalAssist: "Pomoč pri pedaliranju",
      throttleHandle: "Ročica za plin",
      first: "Napišite",
      second: "parametri uspešno!",
    },
    writeAllSuccess: "Uspešno napišite vse parametre!",
  },
  buttons: {
    cancel: "Prekliči",
  },
  errors: {
    writeBasErrors: {
      "0": "Zaščita pred nizko porabo baterije je zunaj dosega, ponastavite jo!",
      "1": "Trenutna omejitev je zunaj območja, ponastavite jo!",
      "2": "Trenutna omejitev za PAS0 zunaj območja, ponastavite!",
      "3": "Omejitev hitrosti za PAS0 zunaj območja, ponastavite!",
      "4": "Trenutna omejitev za PAS1 je zunaj območja, ponastavite jo!",
      "5": "Omejitev hitrosti za PAS1 izven območja, ponastavite!",
      "6": "Trenutna omejitev za PAS2 je zunaj območja, ponastavite jo!",
      "7": "Omejitev hitrosti za PAS2 izven območja, ponastavite!",
      "8": "Trenutna omejitev za PAS3 je zunaj območja, ponastavite jo!",
      "9": "Omejitev hitrosti za PAS3 izven območja, ponastavite!",
      "10": "Trenutna omejitev za PAS4 je zunaj območja, ponastavite jo!",
      "11": "Omejitev hitrosti za PAS4 izven območja, ponastavite!",
      "12": "Trenutna omejitev za PAS5 je zunaj območja, ponastavite jo!",
      "13": "Omejitev hitrosti za PAS5 izven območja, ponastavite!",
      "14": "Trenutna omejitev za PAS6 zunaj območja, ponastavite!",
      "15": "Omejitev hitrosti za PAS6 izven območja, ponastavite!",
      "16": "Trenutna omejitev za PAS7 je zunaj območja, ponastavite jo!",
      "17": "Omejitev hitrosti za PAS7 izven območja, ponastavite!",
      "18": "Trenutna omejitev za PAS8 je zunaj območja, ponastavite jo!",
      "19": "Omejitev hitrosti za PAS8 izven območja, ponastavite!",
      "20": "Trenutna omejitev za PAS9 je zunaj območja, ponastavite jo!",
      "21": "Omejitev hitrosti za PAS9 izven območja, ponastavite!",
      "22": "Premer kolesa je zunaj območja, ponastavite ga!",
      "23": "Signali merilnika hitrosti so zunaj območja, ponastavite jih!",
      default: "Težava s komunikacijo, prosimo, ponastavite!",
    },
    writePasErrors: {
      "0": "Napaka tipa pedalnega senzorja, ponastavite ga!",
      "1": "Napaka pri določeni ravni pomoči, ponastavite jo!",
      "2": "Napaka omejitve hitrosti, ponastavite jo!",
      "3": "Začetni tok je zunaj dosega, ponastavite ga!",
      "4": "Napaka načina počasnega zagona, ponastavite ga!",
      "5": "Začetek Stopnja izven dosega, ponastavite!",
      "6": "Napaka delovnega načina, prosimo, ponastavite!",
      "7": "Ustavite zakasnitev izven območja, ponastavite!",
      "8": "Trenutni razpad je zunaj območja, ponastavite ga!",
      "9": "Ustavite razkroj zunaj dosega, prosimo, ponastavite!",
      "10": "Naj bo tok izven dosega, ponastavite!",
      default: "Neznana napaka, prosimo, ponastavite!",
    },
    writeThrErrors: {
      "0": "Začetna napetost izven območja, ponastavite!",
      "1": "Konec Napetost zunaj območja, ponastavite!",
      "2": "Napaka načina, prosimo, ponastavite!",
      "3": "Napaka pri imenovanem asistentu, prosimo, ponastavite!",
      "4": "Napaka omejitve hitrosti, ponastavite jo!",
      "5": "Začetni tok je zunaj dosega, ponastavite ga!",
      default: "Neznana napaka, prosimo, ponastavite!",
    },
  },
  mainRouter: {
    home: "Domov",
    settings: "Nastavitve",
    help: "Pomoč",
  },
  main: {
    label_language: "Jezik",
    object_Profile: {
      header: "Profil",
      open: "Odpri",
      save_as: "Shrani kot",
      save: "Shrani",
      default_configuration_string: "Privzeta konfiguracija (datoteka ni navedena)",
      popup_header: "Shranite konfiguracijo kot",
      popup_placeholder: "Tukaj vnesite ime datoteke",
      popup_button_label: "Shrani",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Preberi",
      write_all: "Napišite",
      connect: "Povežite",
      disconnect: "Odklop",
      status: {
        disconnected: "odklopljen",
        connecting: "povezovanje",
        connected: "povezano",
        error: "napaka",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Proizvajalec",
        model: "Model",
        hardware_version: "Različica strojne opreme",
        firmware_version: "Različica strojne programske opreme",
        nominal_voltage: "Nazivna napetost",
        max_current: "Največji tok",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Splošno",
      levels: "Ravni",
      pedal: "Pedal",
      throttle: "Dušilna loputa",
    },
    header: {
      readButtonText: "Preberi",
      writeButtonText: "Shrani",
    },
    tabs: {
      general: {
        header: "Splošno",
        lowBatteryProtection: "Zaščita pred nizko porabo baterije",
        currentLimit: "Omejitev toka",
        speedMeterType: {
          text: "Vrsta merilnika hitrosti",
          types: ["Zunanji, merilnik koles", "Notranji, motorni merilnik", "Po fazi motorja"],
        },
        speedMeterSignals: "Signali merilnika hitrosti",
        wheelDiameter: {
          text: "Premer kolesa",
          types: [
            "16 palcev",
            "17 palcev",
            "18 palcev",
            "19 palcev",
            "20 palcev",
            "21 palcev",
            "22 palcev",
            "23 palcev",
            "24 palcev",
            "25 palcev",
            "26 palcev",
            "27 palcev",
            "700C",
            "28 palcev",
            "29 palcev",
            "30 palcev",
          ],
        },
      },
      levels: {
        header: "Stopnje pomoči",
        level: "Raven",
        current: "Trenutni",
        speed: "Hitrost",
        popoverCurrentLimitHeader: "Trenutna omejitev za raven",
        popoverSpeedLimitHeader: "Omejitev hitrosti za stopnjo",
      },
      pedal: {
        header: "Pomoč pri pedaliranju",
        pedalSensorType: {
          text: "Tip pedalnega senzorja",
          types: ["Ni", "DH-Senzor-12", "BB-Senzor-32", "Dvojni signal-24"],
        },
        designatedAssistLevel: {
          text: "Določena stopnja pomoči",
          types: ["Po ukazu zaslona", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Omejitev hitrosti",
          types: [
            "Po ukazu zaslona",
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
            "40km/h",
          ],
        },
        startCurrent: "Začetni tok",
        slowStartMode: "Način počasnega zagona",
        startDegree: "Začetna stopnja",
        workMode: {
          text: "Delovni način",
          types: ["Nedoločeno"],
        },
        stopDelay: "Zakasnitev zaustavitve",
        currentDecay: "Trenutni razpad",
        stopDecay: "Ustavite propadanje",
        keepCurrent: "Ohranjanje trenutnega stanja",
      },
      throttle: {
        header: "Pomoč pri dodajanju plina",
        startVoltage: "Začetna napetost",
        endVoltage: "Končna napetost",
        mode: {
          text: "Način",
          types: ["Hitrost", "Trenutni"],
        },
        designatedAssistLevel: {
          text: "Določena stopnja pomoči",
          types: ["Po ukazu zaslona", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Omejitev hitrosti",
          types: [
            "Po ukazu zaslona",
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
            "40km/h",
          ],
        },
        startCurrent: "Začetni tok",
      },
    },
  },
  help: {
    about: {
      header: "O aplikaciji",
      p1: "Orodje za konfiguracijo za serijo motorjev Bafang BBS.",
      author: "Avtor",
    },
    connection: {
      header: "Povezava",
      p1:
        "Za povezavo s krmilnikom električnega kolesa iz serije Bafang BBS potrebujete adapter USB-OTG, adapter USB za serijski vmesnik z ženskimi priključki tipa Julet na koncu.",
      p2:
        'Kupite lahko tudi "originalni" programski kabel USB, vendar je to le precenjen adapter iz USB v serijski vmesnik z ustreznim priključkom za kabel na krmilniku BBS.',
    },
    general: {
      header: "Splošno",
      lowBatteryProtection:
        "To je napetost, pri kateri krmilnik zaustavi motor, da se baterija ne bi preveč izpraznila. Proizvajalec jo mora pravilno nastaviti in vam je ni treba spreminjati. Za baterijske pakete 13S je privzeta napetost 41 V.",
      currentLimit:
        "To je največji dovoljeni tok, ki lahko teče skozi motor. Če ima vaš motor na primer 25 A, lahko nastavite 20 A, da bo varen, če želite. Ni priporočljivo nastaviti višjega toka od nazivnega. Tudi pri nastavitvi 25 A bo največji tok večji, zato ga raje ne nastavljajte več.",
      speedMeterType:
        "S tem se izbere merilnik hitrosti, ki se uporablja na kolesu. Pri kompletih BBS je zunanji. Ta parameter nastavi proizvajalec in če vaša nastavitev ni po meri, vam ga ni treba spreminjati.",
      speedMeterSignals:
        "Tu lahko nastavite, koliko signalov na obrat ustvarja senzor. Če uporabljate zunanji senzor z magnetom, generira en signal na obrat kolesa. Ta parameter nastavi proizvajalec in če vaša nastavitev ni prilagojena, vam ga ni treba spreminjati.",
      wheelDiameter:
        "Premer kolesa se mora ujemati z velikostjo pogonskega kolesa (zato ima lahko vaše kolo dve kolesi različnih velikosti). Če premer nastavite na manjšo velikost, kot je v resnici, boste povečali hitrost, vendar lahko zlahka pride tudi do poškodb motorja.",
      endText:
        "Ko končate s prilagajanjem splošnih nastavitev, jih lahko z gumbom WRITE v tem zavihku programa zapišete v krmilnik. Kadar koli lahko uporabite tudi gumb READ (Preberi), da jih preberete (s tem boste zamenjali vse vrednosti v zavihku General (Splošno). S tem ne boste prepisali nobenih drugih nastavitev.",
    },
    levels: {
      header: "Stopnje pomoči",
      p1:
        "To so vse možne nastavitve pomoči (tako za pomoč s pedali kot tudi za ročico za plin, če uporabljate eno od teh nastavitev).",
      p2:
        "Pomembno je omeniti, da morata biti trenutna in hitrostna omejitev asistence 0 nastavljeni na 1, če želite uporabljati ročico za plin z izbrano asistenco za pedala 0 na LCD-zaslonu.",
      p3: "Običajno je pomoč 0 nastavljena na 0, tako da lahko po želji uporabljate kolo brez pomoči.",
      p4:
        "Bodite previdni pri določanju teh ravni. Če nastavite prenizko vrednost toka, motor ne bo mogel premikati kolesa in lahko se poškoduje. Če nastavite previsok tok prve stopnje pomoči, bo pospešek ob zagonu precejšen. Pri tem se lahko poškodujejo notranji zobniki ali pa padete s kolesa.",
      p5:
        "Omejitev hitrosti določa, pri kakšni hitrosti (% največje hitrosti, nastavljene na zaslonu LCD) bo motor zmanjšal svojo moč in samo ohranil to hitrost, namesto da bi pospešil.",
      p6:
        "Stikala na vrhu aplikacije omogočajo prikaz samodejno pretvorjenih vrednosti (trenutne vrednosti in hitrosti ali odstotkov).",
      endText:
        "Ko končate s prilagajanjem nastavitev ravni pomoči, jih lahko z gumbom WRITE v tem zavihku programa zapišete v krmilnik. Kadar koli lahko uporabite tudi gumb READ (Preberi), da jih preberete (s tem boste zamenjali vse vrednosti v Assist Levels (Ravni pomoči). S tem ne boste prepisali nobenih drugih nastavitev.",
    },
    pedal: {
      header: "Pomoč pri pedaliranju",
      p1:
        "Sistem Pedal Assist vam pomaga pri pedaliranju. Na tem zavihku lahko nastavite njegovo delovanje. Nekaterih ne smete spreminjati, saj so specifični za vaš komplet. Te nastavi proizvajalec.",
      pedalSensorType:
        "S tem parametrom izberete tip senzorja vrtenja pedala. Nastavi ga proizvajalec in ga ne smete spreminjati.",
      designatedAssistLevel:
        'S tem parametrom lahko izberete dve vrsti delovanja. Prva je "Po ukazu zaslona". To pomeni, da bo stopnja pomoči (tista iz zavihka Osnovne nastavitve) izbrana na vašem LCD-zaslonu. Druga možnost je izbira določene ravni pomoči, ki bo fiksna in je ne boste mogli spremeniti z zaslona LCD. Pri tem lahko izberete katero koli stopnjo pomoči od 0 do 9.',
      speedLimit:
        'To je največja hitrost, pri kateri motor zagotavlja dodatno pospeševanje. Ko je hitrost dosežena, jo bo motor le ohranil, vendar ne bo več pospeševal. Če ta parameter nastavite na "Po ukazu zaslona", boste lahko hitrost nastavili z zaslona LCD. Upoštevajte, da nekateri LCD-ji omogočajo nastavitev hitrosti 99 km/h, kar vsaj pri trenutnih kompletih BBS ni mogoče. Kolikor sem testiral, je največja hitrost brez pedaliranja 40 km/h (če je velikost kolesa pravilno nastavljena). Ta nastavitev se uporablja za vse stopnje pomoči, ki so prikazane v zavihku Osnovno. Če jo nastavite na 40 km/h (v tem programu ali na zaslonu LCD) in je stopnja pomoči 5 nastavljena na 50 % hitrosti, boste lahko pri tej stopnji pomoči dosegli 20 km/h.',
      startCurrent:
        "To je zagonski tok, ko začnete vrteti pedala. Dobro je, da ga nastavite na vsaj 10 %, da zagotovite, da se bo kolo začelo premikati in da se motor ne bo ustavil. Če ga nastavite na zelo visoko vrednost, bo kolo ob zagonu zelo hitro pospešilo, kar lahko poškoduje notranje zobnike in tudi motor. Priporočena vrednost je med 10 % in 30 %. Prav tako morate paziti, da ne začnete pedalirati pri previsoki prestavi, ki bi preveč obremenila motor.",
      slowStartMode:
        "Ta nastavitev določa, kako hitro se doseže začetni tok. S tem lahko poskrbite, da bo kolo pospešilo gladko in se hitro odzvalo. Vrednost okoli 4 se običajno dobro obnese pri običajnem kolesarjenju. Če ste gorski kolesar, bo nastavitev na nizko vrednost pospešila pospeševanje, kar je lahko koristno, vendar morate paziti, da ne opečete krmilnika in motorja.",
      startDegree:
        "Ta parameter določa, koliko impulzov s senzorja pedal je potrebnih, da se motor zažene. Polni obrat pedala pri kompletih BBS ustvari 24 impulzov. Nastavitev na 0 ali 1 ne bo delovala. Vrednost okoli 4 deluje dobro, saj se ne začne že pri majhnem premiku in tudi ne zahteva prevelikega obrata.",
      workMode:
        "Namen tega parametra ni povsem jasen. Z njim naj bi se moč uravnavala glede na hitrost vrtenja pedala. Zdi se, da vrednost, ki jo je določil proizvajalec, deluje v redu, zato je ni treba spreminjati.",
      stopDelay: "To je časovni zamik po prenehanju pedaliranja, preden se motor ustavi. Vrednost 250 ms deluje dobro.",
      currentDecay:
        "Ta parameter določa, kako hitro pade tok, ko pospešeno vrtimo pedala in dosegamo največjo hitrost pri izbrani stopnji pomoči. Nižja vrednost pomeni, da bo tok začel padati pri nižji hitrosti.",
      stopDecay: "Čas, v katerem se motor ustavi.",
      keepCurrent:
        "Ta nastavitev določa odstotek največjega toka pri izbrani stopnji pomoči, ki bo tekel skozi motor, ko dosežete največjo hitrost in nadaljujete s pedaliranjem. Če je torej vaš največji tok 25 A in uporabljate pomoč pri pedaliranju 5 z nastavitvijo 50 % toka, bo največji tok za to stopnjo pomoči 12,5 A. Če je funkcija Keep Current nastavljena na 50 %, ko dosežete največjo hitrost in nadaljujete s pedaliranjem, se bo tok ohranil na 6,25 A. To zagotavlja nemoten prehod na moč pomoči, ko zmanjšate hitrost pedaliranja in se hitrost gibanja zmanjša pod največjo.",
      endText:
        "Ko končate s prilagajanjem nastavitev Pedal Assist, jih lahko z gumbom WRITE v tem zavihku programa zapišete v krmilnik. Kadar koli lahko uporabite tudi gumb READ, da jih preberete (s tem boste zamenjali vse vrednosti na pedalnem pomočniku. To ne bo prepisalo nobenih drugih nastavitev.",
    },
    throttle: {
      header: "Ročica za plin",
      p1:
        "Če je vaš komplet opremljen z ročico za plin, lahko s tem zavihkom nastavite njeno delovanje. Prepričajte se, da je Assis 0 nastavljen na 1 (tako za tok kot za hitrost), če ga želite uporabljati, ko je na zaslonu LCD izbrana možnost Pedal Assist S0.",
      startVoltage:
        "To je izhodna napetost ročice za plin, pri kateri se motor zažene. Najmanjša vrednost, pri kateri se krmilnik odzove, je 1,1 V.",
      endVoltage:
        "To je izhodna napetost ročice za plin, pri kateri motor doseže največjo moč (omejeno z drugimi nastavitvami). Najvišja vrednost, ki jo sprejme krmilnik, je 4,2 V. S tem parametrom se morate malo poigrati, saj je lahko maksimalna vrednost ročice za plin različna glede na model. Če ta parameter nastavite prenizko, se ročica za plin skoraj ne bo odzvala. Če ga nastavite na največjo vrednost, ki jo ročica lahko proizvede, boste dobili najširši možni razpon nadzora nad močjo motorja.",
      mode:
        "To je način delovanja ročice za plin. Na voljo sta dve možnosti: hitrost in tok. Ko je nastavljena na hitrost, krmilnik uporabi hitrost gibanja za nastavitev moči motorja glede na položaj ročice za plin. Žal je zaradi načina merjenja hitrosti precejšnja zakasnitev in odzivnost je v tem načinu precej slaba. Če je nastavljen na tok, ročica uravnava tok motorja glede na svoj položaj. Ta način deluje bolje in je podoben delovanju avtomobila.",
      designatedAssistLevel:
        'To lahko nastavite na "Po ukazu zaslona" ali izberete fiksno raven. Prva možnost uporablja nastavitev PAS z vašega LCD-zaslona. To pomeni, da sta največja izhodna moč in hitrost odvisna od izbrane ravni PAS in položaja ročice plina. Če je torej izbrana nizka raven PAS, bosta tudi največji tok in hitrost nizka, tudi če potisnete ročico za plin do maksimuma. Če je za ta parameter izbrana fiksna raven pomoči, bo ročica za plin uporabljala svoj največji tok in hitrost. Če to nastavite na stopnjo 9, bodite previdni, da med ustavljanjem ne pritisnete ročice za plin do maksimuma, saj lahko visok tok in moč poškodujeta krmilnik in motor.',
      speedLimit:
        "S tem parametrom lahko omejite največjo hitrost pri uporabi ročice za plin. To prepiše največjo hitrost določene stopnje pomoči, če je ta višja.",
      startCurrent:
        "To je odstotek največjega toka, ki se priključi na motor, ko ročica za plin ustvarja najmanjšo dovoljeno napetost. Običajno se dobro obnese vrednost 10 % ali 20 %. Če je največji tok v zavihku Splošno nastavljen na 25 A in je začetni tok nastavljen na 10 %, boste dobili začetni tok 2,5 A. To bo omogočilo nemoten zagon in ne bo preveč obremenilo notranjih zobnikov. Če ta parameter nastavite na zelo visoko vrednost, lahko poškodujete notranje zobnike in motor.",
      endText:
        "Ko končate s prilagajanjem nastavitev ročice za plin, jih lahko z gumbom WRITE v tem zavihku programa zapišete v krmilnik. Kadar koli lahko uporabite tudi gumb READ, da jih preberete (s tem boste zamenjali vse vrednosti na ročici za plin. To ne bo prepisalo nobenih drugih nastavitev.",
    },
  },
};

import { Translation } from "./type";

export const ro: Translation = {
  messages: {
    processing: "Procesarea...",
    deviceIsDisconnected: "Dispozitivul este deconectat!",
    connectingInProgress: "Conectare în curs de realizare...",
    settingsHaveBeenSaved: "Setările dvs. au fost salvate!",
    configLoadedSuccessful: "Config încărcat cu succes!",
    overrideFileWarning: {
      header: "Atenție!",
      message: {
        theFileText: "Fișierul",
        areYouSureToOverrideText: "există! Sunteți sigur că doriți să suprascrieți acest fișier?",
      },
      buttons: {
        yes: "Anulare",
        no: "Nu",
      },
    },
    unsupportedConfigurationFile: {
      header: "Eroare!",
      text: "Fișier de configurare neacceptat sau stricat!",
    },
    pleaseWait: "Vă rugăm să așteptați...",
    connectingToMotor: "Conectarea la motor...",
    noDeviceFound: "Nu s-a găsit niciun dispozitiv!",
    cantEstablishingConnection:
      "Nu se poate stabili o conexiune cu motorul! Verificați sfârșitul conexiunii și reporniți!",
    connectedTo: "Conectat la",
    readBasSuccess: {
      basTypeLevel: "Niveluri",
      basTypeGeneral: "General",
      first: "Citește",
      second: "parametrii cu succes!",
    },
    readPedalAssistSuccess: "Citiți cu succes parametrii Pedal Assist!",
    readThrottleHandleSuccess: "Citirea cu succes a parametrilor mânerului de accelerație",
    readAllSuccess: "Citiți toți parametrii cu succes!",
    somethingWentWrong: "Ceva a mers prost! Jurnal:",
    writeSuccess: {
      levels: "Niveluri",
      general: "General",
      pedalAssist: "Asistență la pedală",
      throttleHandle: "Mânerul de accelerație",
      first: "Scrieți",
      second: "parametrii cu succes!",
    },
    writeAllSuccess: "Scrieți toți parametrii cu succes!",
  },
  buttons: {
    cancel: "Anulează",
  },
  errors: {
    writeBasErrors: {
      "0": "Protecție pentru baterie descărcată în afara intervalului, vă rugăm să resetați!",
      "1": "Limita de curent în afara intervalului, vă rugăm să resetați!",
      "2": "Limita de curent pentru PAS0 în afara intervalului, vă rugăm să resetați!",
      "3": "Limita de viteză pentru PAS0 a ieșit din interval, vă rugăm să resetați!",
      "4": "Limita de curent pentru PAS1 este în afara intervalului, vă rugăm să resetați!",
      "5": "Limita de viteză pentru PAS1 a ieșit din interval, vă rugăm să resetați!",
      "6": "Limita de curent pentru PAS2 este în afara intervalului, vă rugăm să resetați!",
      "7": "Limita de viteză pentru PAS2 a ieșit din interval, vă rugăm să resetați!",
      "8": "Limita de curent pentru PAS3 este în afara intervalului, vă rugăm să resetați!",
      "9": "Limita de viteză pentru PAS3 a ieșit din interval, vă rugăm să resetați!",
      "10": "Limita de curent pentru PAS4 este în afara intervalului, vă rugăm să resetați!",
      "11": "Limita de viteză pentru PAS4 a ieșit din interval, vă rugăm să resetați!",
      "12": "Limita de curent pentru PAS5 a ieșit din interval, vă rugăm să resetați!",
      "13": "Limita de viteză pentru PAS5 a ieșit din interval, vă rugăm să resetați!",
      "14": "Limita de curent pentru PAS6 a ieșit din interval, vă rugăm să resetați!",
      "15": "Limita de viteză pentru PAS6 a ieșit din interval, vă rugăm să resetați!",
      "16": "Limita de curent pentru PAS7 este în afara intervalului, vă rugăm să resetați!",
      "17": "Limita de viteză pentru PAS7 a ieșit din interval, vă rugăm să resetați!",
      "18": "Limita de curent pentru PAS8 este în afara intervalului, vă rugăm să resetați!",
      "19": "Limita de viteză pentru PAS8 a ieșit din interval, vă rugăm să resetați!",
      "20": "Limita de curent pentru PAS9 a ieșit din interval, vă rugăm să resetați!",
      "21": "Limita de viteză pentru PAS9 a ieșit din interval, vă rugăm să resetați!",
      "22": "Diametrul roții este în afara intervalului, vă rugăm să resetați!",
      "23": "Semnale de măsurare a vitezei în afara intervalului, vă rugăm să resetați!",
      default: "Problemă de comunicare, vă rugăm să resetați!",
    },
    writePasErrors: {
      "0": "Eroare de tip senzor pedală, vă rugăm să resetați!",
      "1": "Eroare la nivelul de asistență desemnat, vă rugăm să resetați!",
      "2": "Eroare de limitare a vitezei, vă rugăm să resetați!",
      "3": "Start Curentul de pornire a ieșit din raza de acțiune, vă rugăm să resetați!",
      "4": "Eroare în modul de pornire lentă, vă rugăm să resetați!",
      "5": "Grad de pornire în afara razei de acțiune, vă rugăm să resetați!",
      "6": "Eroare în modul de lucru, vă rugăm să resetați!",
      "7": "Opriți Întârzierea de oprire a ieșit din raza de acțiune, vă rugăm să resetați!",
      "8": "Decadența curentă a ieșit din interval, vă rugăm să resetați!",
      "9": "Opriți Decay în afara razei de acțiune, vă rugăm să resetați!",
      "10": "Țineți curentul în afara razei de acțiune, vă rog resetați!",
      default: "Eroare necunoscută, vă rugăm să resetați!",
    },
    writeThrErrors: {
      "0": "Tensiune de pornire în afara intervalului, vă rugăm să resetați!",
      "1": "Tensiune finală în afara intervalului, vă rugăm să resetați!",
      "2": "Eroare de mod, vă rugăm să resetați!",
      "3": "Eroare Designated Assist, vă rugăm să resetați!",
      "4": "Eroare de limitare a vitezei, vă rugăm să resetați!",
      "5": "Start Curentul de pornire a ieșit din raza de acțiune, vă rugăm să resetați!",
      default: "Eroare necunoscută, vă rugăm să resetați!",
    },
  },
  mainRouter: {
    home: "Acasă",
    settings: "Setări",
    help: "Ajutor",
  },
  main: {
    label_language: "Limba",
    object_Profile: {
      header: "Profil",
      open: "Deschideți",
      save_as: "Salvați ca",
      save: "Salvați",
      default_configuration_string: "Configurație implicită (niciun fișier specificat)",
      popup_header: "Salvați configurația ca",
      popup_placeholder: "Introduceți aici numele fișierului",
      popup_button_label: "Salvați",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Citește",
      write_all: "Scrieți",
      connect: "Conectați-vă",
      disconnect: "Deconectați",
      status: {
        disconnected: "deconectat",
        connecting: "conectarea",
        connected: "conectat",
        error: "eroare",
      },
      motor_info: {
        status: "Stare",
        manufacturer: "Producător",
        model: "Model",
        hardware_version: "Versiunea hardware",
        firmware_version: "Versiunea Firmware",
        nominal_voltage: "Tensiune nominală",
        max_current: "Curent maxim",
      },
    },
  },
  settings: {
    toolbar: {
      general: "General",
      levels: "Niveluri",
      pedal: "Pedală",
      throttle: "Clapeta de accelerație",
    },
    header: {
      readButtonText: "Citește",
      writeButtonText: "Salvați",
    },
    tabs: {
      general: {
        header: "General",
        lowBatteryProtection: "Protecție împotriva bateriei slabe",
        currentLimit: "Limita de curent",
        speedMeterType: {
          text: "Tip de contor de viteză",
          types: ["Extern, contor de roți", "Intern, contor de motor", "În funcție de faza motorului"],
        },
        speedMeterSignals: "Semnale de măsurare a vitezei",
        wheelDiameter: {
          text: "Diametrul roții",
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
        header: "Niveluri de asistență",
        level: "Nivel",
        current: "Curent",
        speed: "Viteză",
        popoverCurrentLimitHeader: "Limita de curent pentru nivel",
        popoverSpeedLimitHeader: "Limita de viteză pentru nivel",
      },
      pedal: {
        header: "Asistență la pedală",
        pedalSensorType: {
          text: "Tipul de senzor de pedală",
          types: ["Nici unul", "DH-Senzor-12", "BB-Sensor-32", "DubluSemnal-24"],
        },
        designatedAssistLevel: {
          text: "Nivelul de asistență desemnat",
          types: ["Prin comanda Display's Command", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limita de viteză",
          types: [
            "Prin comanda Display's Command",
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
        startCurrent: "Start Curent",
        slowStartMode: "Modul de pornire lentă",
        startDegree: "Începeți gradul",
        workMode: {
          text: "Modul de lucru",
          types: ["Indeterminat"],
        },
        stopDelay: "Întârziere de oprire",
        currentDecay: "Declinul curent",
        stopDecay: "Opriți decăderea",
        keepCurrent: "Păstrați curentul",
      },
      throttle: {
        header: "Asistență pentru accelerație",
        startVoltage: "Tensiune de pornire",
        endVoltage: "Tensiune finală",
        mode: {
          text: "Mod",
          types: ["Viteză", "Curent"],
        },
        designatedAssistLevel: {
          text: "Nivelul de asistență desemnat",
          types: ["Prin comanda Display's Command", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limita de viteză",
          types: [
            "Prin comanda Display's Command",
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
        startCurrent: "Start Curent",
      },
    },
  },
  help: {
    about: {
      header: "Despre aplicație",
      p1: "Instrument de configurare pentru seria de motoare Bafang BBS.",
      author: "Autor",
    },
    connection: {
      header: "Conexiune",
      p1:
        "Pentru a vă conecta la controlerul bicicletei dvs. electrice din seria Bafang BBS aveți nevoie de un adaptor USB-OTG, adaptor de la USB la Serial cu conectori cu pin de sex feminin de tip Julet la capăt.",
      p2:
        'De asemenea, puteți cumpăra un cablu de programare USB "original", dar acesta este doar un adaptor de la USB la serial la un preț exagerat, cu un conector adecvat pentru cablul de pe controlerul BBS.',
    },
    general: {
      header: "General",
      lowBatteryProtection:
        "Aceasta este tensiunea la care controlerul va opri motorul pentru a proteja bateria împotriva descărcării excesive. Ar trebui să fie setată corect de către producător și nu trebuie să o modificați. Pentru pachetele de baterii 13S, 41V este valoarea implicită.",
      currentLimit:
        "Acesta este curentul maxim admis prin motor. De exemplu, dacă motorul dvs. este de 25A, puteți seta la 20A pentru a-l menține în siguranță, dacă doriți. Nu este recomandat să setați un curent mai mare decât cel nominal. Chiar dacă este setat la 25A, curentul de vârf va fi mai mare, așa că ar fi bine să nu setați mai mult de atât.",
      speedMeterType:
        "Acesta selectează vitezometrul utilizat pe bicicletă. Pentru kiturile BBS, acesta este extern. Acest parametru este setat de către producător și dacă configurația dvs. nu este personalizată, atunci nu trebuie să îl modificați.",
      speedMeterSignals:
        "Aici puteți seta câte semnale pe revoluție generează senzorul dumneavoastră. Dacă folosiți senzorul extern cu magnet, acesta generează un semnal pe tur de roată. Acest parametru este setat de către producător și dacă configurația dvs. nu este personalizată, atunci nu trebuie să îl modificați.",
      wheelDiameter:
        "Diametrul roții ar trebui să corespundă dimensiunii roții de antrenare (de aceea, bicicleta dvs. ar putea avea două roți de dimensiuni diferite). Setarea diametrului la o dimensiune mai mică decât este în realitate vă va crește viteza, dar, de asemenea, poate duce cu ușurință la deteriorarea motorului.",
      endText:
        "Când ați terminat de reglat setările generale, puteți utiliza butonul WRITE din această filă a programului pentru a le scrie în controler. De asemenea, puteți utiliza în orice moment butonul READ (Citire) pentru a le citi (acest lucru va înlocui toate valorile de la General. Acest lucru nu va suprascrie nicio altă setare.",
    },
    levels: {
      header: "Niveluri de asistență",
      p1:
        "Acestea sunt toate setările de asistență posibile (atât pentru asistența la pedalare, cât și pentru mânerul de accelerație, folosind unul dintre acestea).",
      p2:
        "Este important să menționăm că curentul Assist 0 și limitele de viteză trebuie să fie setate la 1 dacă doriți să puteți utiliza maneta de accelerație cu Pedal Assist 0 selectat pe ecranul LCD.",
      p3: "De obicei, Assist 0 este setat la 0, astfel încât să puteți utiliza bicicleta fără asistență, dacă doriți.",
      p4:
        "Aveți grijă la stabilirea acestor niveluri. Dacă setați un curent prea mic, motorul nu va putea mișca bicicleta și aceasta ar putea suferi unele daune. Dacă setați curentul primului nivel de asistență prea mare, atunci accelerația la pornire va fi semnificativă. Acest lucru ar putea deteriora angrenajele interne sau vă poate face să cădeți de pe bicicletă.",
      p5:
        "Limita de viteză stabilește la ce viteză (% din viteza maximă setată de pe ecranul LCD) motorul își va reduce puterea și va menține această viteză în loc să accelereze mai mult.",
      p6:
        "Comutatoarele din partea de sus a aplicației vă permit să afișați valorile convertite automat (curent și viteză sau procente).",
      endText:
        "Când ați terminat de reglat setările Assist Levels, puteți utiliza butonul WRITE din această filă a programului pentru a le scrie pe controler. De asemenea, puteți utiliza în orice moment butonul READ (Citire) pentru a le citi (acest lucru va înlocui toate valorile de la Assist Levels. Acest lucru nu va suprascrie nicio altă setare.",
    },
    pedal: {
      header: "Asistență la pedală",
      p1:
        "Sistemul Pedal Assist vă asistă în timp ce pedalați. În această filă puteți regla performanța acestuia. Unele dintre acestea nu ar trebui să le modificați, deoarece sunt specifice kitului dvs. Acestea sunt setate de către producător.",
      pedalSensorType:
        "Acest parametru selectează tipul de senzor de rotație a pedalei. Acesta este setat de producător și nu trebuie modificat.",
      designatedAssistLevel:
        'Cu acest parametru puteți selecta două tipuri de operațiune. Primul este "By Display\'s Command". Aceasta înseamnă că nivelul de asistență (cel din fila Basic settings) va fi selectat de pe ecranul LCD. A doua opțiune este de a alege un anumit nivel de asistență care va fi fixat și pe care nu îl veți putea schimba de pe LCD. Pentru aceasta puteți selecta orice nivel de asistență de la 0 la 9.',
      speedLimit:
        'Aceasta este viteza maximă la care motorul va asigura o accelerație suplimentară. Când viteza este atinsă, acesta o va menține doar, dar nu va accelera mai mult. Dacă setați acest parametru la "By Display\'s Command" (La comanda afișajului), veți putea seta viteza de pe ecranul LCD. Rețineți că unele LCD-uri vă permit să setați o viteză de 99km/h, ceea ce nu este posibil, cel puțin cu actualele kituri BBS. Din câte am testat eu, viteza maximă fără pedalare este de 40km/h (atunci când dimensiunea roților este setată corect). Această setare este utilizată pentru toate nivelurile de asistență pe care le vedeți în fila Basic. Dacă setați acest lucru la 40km/h (în acest program sau de pe LCD) și nivelul Assist 5 este setat la 50% din viteză, atunci veți putea atinge 20km/h la acel nivel de asistență.',
      startCurrent:
        "Acesta este curentul de pornire atunci când începeți să rotiți pedalele. Este bine să setați această valoare la cel puțin 10% pentru a vă asigura că bicicleta va începe să se miște și că motorul nu va fi blocat. Setarea acestei valori la o valoare foarte mare va face ca bicicleta să accelereze foarte repede la pornire, ceea ce ar putea deteriora angrenajele interne și, de asemenea, motorul. Valoarea recomandată este una între 10% și 30%. De asemenea, trebuie să vă asigurați că nu începeți să pedalați cu o treaptă de viteză prea mare, ceea ce va încărca prea mult motorul.",
      slowStartMode:
        "Această setare controlează rapiditatea cu care este atins curentul de pornire. Puteți face ca bicicleta să accelereze lin și să răspundă rapid. O valoare în jurul valorii de 4 funcționează de obicei bine pentru ciclismul normal. Dacă sunteți mountain-biker, atunci setarea la o valoare mică va face ca accelerația să fie mai rapidă, ceea ce ar putea fi util, dar trebuie să aveți grijă să nu vă prăjiți controlerul și motorul.",
      startDegree:
        "Acest parametru stabilește câte impulsuri de la senzorul pedalei sunt necesare înainte ca motorul să pornească. O rotație completă a pedalei la kiturile BBS generează 24 de impulsuri. Setarea acestui parametru la 0 sau 1 nu va funcționa. O valoare în jur de 4 funcționează bine, deoarece nu pornește doar cu o mișcare mică și, de asemenea, nu necesită o rotație prea mare.",
      workMode:
        "Scopul acestui parametru nu este foarte clar. Se presupune că ar trebui să controleze puterea în funcție de viteza de rotație a pedalei. Valoarea setată de producător pare să funcționeze foarte bine, așa că nu este nevoie să o modificați.",
      stopDelay:
        "Aceasta este întârzierea după ce vă opriți din pedalat înainte ca motorul să se oprească. O valoare de 250ms funcționează bine.",
      currentDecay:
        "Acest parametru stabilește cât de repede scade curentul atunci când pedalați rapid și atingeți viteza maximă la nivelul de asistență selectat. O valoare mai mică înseamnă că curentul va începe să scadă la o viteză mai mică.",
      stopDecay: "Timpul necesar pentru ca motorul să se oprească.",
      keepCurrent:
        "Această setare controlează procentul din curentul maxim la nivelul de asistență selectat care va trece prin motor atunci când atingeți viteza maximă și continuați să pedalați. Astfel, dacă curentul maxim este de 25A și folosiți Pedal Assist 5 setat la 50% curent, atunci veți avea un curent maxim de 12,5A pentru acest nivel de asistență. Apoi, dacă Keep Current (Menținerea curentului) este setat la 50% atunci când viteza maximă este atinsă și continuați să pedalați, curentul va fi menținut la 6,25A. Acest lucru asigură o tranziție lină la puterea de asistență atunci când reduceți viteza de pedalare și viteza de deplasare scade sub cea maximă.",
      endText:
        "Când ați terminat de reglat setările Pedal Assist, puteți folosi butonul WRITE din această filă a programului pentru a le scrie pe controlerul dumneavoastră. De asemenea, puteți utiliza în orice moment butonul READ pentru a le citi (acest lucru va înlocui toate valorile de la Pedal Assist. Acest lucru nu va suprascrie nicio altă setare.",
    },
    throttle: {
      header: "Mânerul de accelerație",
      p1:
        "Dacă kitul dvs. este echipat cu mâner de accelerație, atunci această filă vă permite să configurați funcționarea acestuia. Asigurați-vă că Assis 0 este setat la 1 (atât curent cât și viteză) dacă doriți să îl utilizați atunci când Pedal Assist S0 este selectat pe LCD.",
      startVoltage:
        "Aceasta este tensiunea de ieșire a manetei de accelerație la care va porni motorul. Valoarea minimă la care răspunde controlerul este de 1,1V",
      endVoltage:
        "Aceasta este tensiunea de ieșire a manetei de accelerație la care motorul va atinge puterea maximă (limitată de alte setări). Valoarea maximă acceptată de la controler este de 4,2V. Trebuie să vă jucați puțin cu acest parametru, deoarece valoarea maximă a mânerului de accelerație poate fi diferită în funcție de model. Dacă setați acest parametru prea jos, nu veți obține aproape niciun răspuns din partea mânerului de accelerație. Când îl setați la maximul pe care mânerul îl poate produce, veți obține cea mai largă gamă posibilă de control asupra puterii motorului.",
      mode:
        "Acesta este modul de funcționare a manetei de accelerație. Aveți două opțiuni: viteză și curent. Atunci când este setat pe viteză, controlerul utilizează viteza de deplasare pentru a seta puterea motorului în funcție de poziția mânerului de accelerație. Din păcate, există o întârziere semnificativă din cauza modului în care este măsurată viteza și răspunsul este destul de prost în acest mod. Când este setat pe curent, mânerul controlează curentul motorului în funcție de poziția sa. Acest mod funcționează mai bine și este similar cu funcționarea unei mașini.",
      designatedAssistLevel:
        'Puteți seta acest lucru la "By Display\'s Command" sau puteți selecta un nivel fix. Prima opțiune utilizează setarea PAS de pe ecranul LCD. Aceasta înseamnă că puterea maximă de ieșire și viteza maximă depind de nivelul PAS selectat și de poziția mânerului de accelerație. Astfel, dacă este selectat un PAS scăzut, curentul și viteza maximă vor fi și ele scăzute, chiar dacă împingeți accelerația la maxim. Dacă pentru acest parametru este selectat un nivel de asistență fix, mânerul de accelerație va folosi curentul și viteza maximă. Aveți grijă, dacă setați acest parametru la nivelul 9, să nu împingeți accelerația la maxim atunci când sunteți oprit, deoarece curentul ridicat și puterea ar putea să vă deterioreze controlerul și motorul.',
      speedLimit:
        "Cu acest parametru puteți limita viteza maximă atunci când utilizați mânerul de accelerație. Acest lucru suprascrie viteza maximă a nivelului de asistență desemnat, dacă aceasta este mai mare.",
      startCurrent:
        "Acesta este procentul de curent maxim aplicat motorului atunci când maneta de accelerație generează tensiunea minimă acceptată. De obicei, o valoare de 10% sau 20% funcționează bine. Dacă curentul maxim din fila General este setat la 25A, iar Start Current este setat la 10%, veți obține un curent de pornire de 2,5A. Acest lucru va duce la o pornire lină și nu va încărca prea mult angrenajele interne. Dacă setați acest parametru la o valoare foarte mare, puteți deteriora angrenajele interne și motorul.",
      endText:
        "După ce ați terminat de reglat setările manetei de accelerație, puteți utiliza butonul WRITE din această filă a programului pentru a le scrie în controler. De asemenea, puteți utiliza în orice moment butonul READ (Citire) pentru a le citi (acest lucru va înlocui toate valorile de la Throttle Handle. Acest lucru nu va suprascrie nicio altă setare.",
    },
  },
};

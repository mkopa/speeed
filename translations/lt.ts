import { Translation } from "./type";

export const lt: Translation = {
  messages: {
    processing: "Apdorojimas...",
    deviceIsDisconnected: "Įrenginys atjungtas!",
    connectingInProgress: "Vyksta jungimas...",
    settingsHaveBeenSaved: "Jūsų nustatymai išsaugoti!",
    configLoadedSuccessful: "Konfigūracija įkelta sėkmingai!",
    overrideFileWarning: {
      header: "Įspėjimas!",
      message: {
        theFileText: "Failas",
        areYouSureToOverrideText: "egzistuoja! Ar tikrai norite pakeisti šį failą?",
      },
      buttons: {
        yes: "Apriboti",
        no: "Ne",
      },
    },
    unsupportedConfigurationFile: {
      header: "Klaida!",
      text: "Nepalaikomas arba sugadintas konfigūracijos failas!",
    },
    pleaseWait: "Palaukite...",
    connectingToMotor: "Prijungimas prie variklio...",
    noDeviceFound: "Įrenginys nerastas!",
    cantEstablishingConnection: "Nepavyksta užmegzti ryšio su varikliu! Patikrinkite, ar ryšys baigtas iš naujo!",
    connectedTo: "Prijungtas prie",
    readBasSuccess: {
      basTypeLevel: "Lygiai",
      basTypeGeneral: "Bendra",
      first: "Skaityti",
      second: "parametrai sėkmingai!",
    },
    readPedalAssistSuccess: "Sėkmingai nuskaitykite pagalbos pedalams parametrus!",
    readThrottleHandleSuccess: "Sėkmingai nuskaityti droselinės rankenos parametrus",
    readAllSuccess: "Sėkmingai nuskaityti visi parametrai!",
    somethingWentWrong: "Kažkas nutiko ne taip! Žurnalas:",
    writeSuccess: {
      levels: "Lygiai",
      general: "Bendra",
      pedalAssist: "Pagalba pedalams",
      throttleHandle: "Droselinės sklendės rankena",
      first: "Rašykite",
      second: "parametrai sėkmingai!",
    },
    writeAllSuccess: "Sėkmingai įrašykite visus parametrus!",
  },
  buttons: {
    cancel: "Atšaukti",
  },
  errors: {
    writeBasErrors: {
      "0": "Apsauga nuo išsikrovusio akumuliatoriaus išsikrovė, iš naujo nustatykite!",
      "1": "Srovės riba išėjo iš ribos, iš naujo nustatykite!",
      "2": "Srovės riba PAS0 išėjo iš diapazono, iš naujo nustatykite!",
      "3": "Greičio riba PAS0 išėjo iš diapazono, iš naujo nustatykite!",
      "4": "Srovės riba PAS1 išėjo iš diapazono, iš naujo nustatykite!",
      "5": "Greičio riba PAS1 išėjo iš diapazono, iš naujo nustatykite!",
      "6": "Srovės riba PAS2 išėjo iš diapazono, iš naujo nustatykite!",
      "7": "Greičio riba PAS2 išėjo iš diapazono, iš naujo nustatykite!",
      "8": "Srovės riba PAS3 išėjo iš diapazono, iš naujo nustatykite!",
      "9": "Greičio riba PAS3 išėjo iš diapazono, iš naujo nustatykite!",
      "10": "Srovės riba PAS4 išėjo iš diapazono, iš naujo nustatykite!",
      "11": "Greičio riba PAS4 išėjo iš diapazono, iš naujo nustatykite!",
      "12": "Srovės riba PAS5 išėjo iš diapazono, iš naujo nustatykite!",
      "13": "Greičio riba PAS5 išėjo iš diapazono, iš naujo nustatykite!",
      "14": "Srovės riba PAS6 išėjo iš diapazono, iš naujo nustatykite!",
      "15": "Greičio riba PAS6 išėjo iš diapazono, iš naujo nustatykite!",
      "16": "Srovės riba PAS7 išėjo iš diapazono, iš naujo nustatykite!",
      "17": "Greičio riba PAS7 išėjo iš diapazono, iš naujo nustatykite!",
      "18": "Srovės riba PAS8 išėjo iš diapazono, iš naujo nustatykite!",
      "19": "Greičio riba PAS8 išėjo iš diapazono, iš naujo nustatykite!",
      "20": "Srovės riba PAS9 išėjo iš diapazono, iš naujo nustatykite!",
      "21": "Greičio riba PAS9 išėjo iš diapazono, iš naujo nustatykite!",
      "22": "Ratų skersmuo išėjo iš diapazono, iš naujo nustatykite!",
      "23": "Greičio matuoklio signalai išėjo iš diapazono, iš naujo nustatykite!",
      default: "Ryšio problema, prašome iš naujo nustatyti!",
    },
    writePasErrors: {
      "0": "Pedalo jutiklio tipo klaida, iš naujo nustatykite!",
      "1": "Nustatyto pagalbos lygio klaida, iš naujo nustatykite!",
      "2": "Greičio ribojimo klaida, prašome iš naujo nustatyti!",
      "3": "Startas Dabartinė išėjo iš diapazono, iš naujo nustatykite!",
      "4": "Lėto paleidimo režimo klaida, iš naujo nustatykite!",
      "5": 'Startas "Degree" išvestas iš diapazono, iš naujo nustatykite!',
      "6": "Darbo režimo klaida, prašome iš naujo nustatyti!",
      "7": "Sustabdyti uždelsimą iš diapazono, iš naujo nustatykite!",
      "8": "Dabartinis skilimas išėjo iš ribos, prašome iš naujo nustatyti!",
      "9": 'Sustabdykite "Decay" iš diapazono, iš naujo nustatykite!',
      "10": "Laikykite srovę už diapazono ribų, prašome iš naujo nustatyti!",
      default: "Nežinoma klaida, prašome iš naujo nustatyti!",
    },
    writeThrErrors: {
      "0": "Pradžios įtampa išėjo iš diapazono, iš naujo nustatykite!",
      "1": "Pabaigos įtampa išėjo iš diapazono, iš naujo nustatykite!",
      "2": "Režimo klaida, iš naujo nustatykite režimą!",
      "3": "Paskirtoji pagalbos klaida, prašome iš naujo nustatyti!",
      "4": "Greičio ribojimo klaida, prašome iš naujo nustatyti!",
      "5": "Startas Dabartinė išėjo iš diapazono, iš naujo nustatykite!",
      default: "Nežinoma klaida, prašome iš naujo nustatyti!",
    },
  },
  mainRouter: {
    home: "Pagrindinis",
    settings: "Nustatymai",
    help: "Pagalba",
  },
  main: {
    label_language: "Kalba",
    object_Profile: {
      header: "Profilis",
      open: "Atviras",
      save_as: "Išsaugoti kaip",
      save: "Išsaugoti",
      default_configuration_string: "Numatytoji konfigūracija (failas nenurodytas)",
      popup_header: "Išsaugoti konfigūraciją kaip",
      popup_placeholder: "Čia įveskite failo pavadinimą",
      popup_button_label: "Išsaugoti",
    },
    object_Motor: {
      header: "Variklis",
      read_all: "Skaityti",
      write_all: "Rašykite",
      connect: "Prisijungti",
      disconnect: "Atjunkite",
      status: {
        disconnected: "atjungtas",
        connecting: "jungtis",
        connected: "prijungtas",
        error: "klaida",
      },
      motor_info: {
        status: "Statusas",
        manufacturer: "Gamintojas",
        model: "Modelis",
        hardware_version: "Techninės įrangos versija",
        firmware_version: "Programinės įrangos versija",
        nominal_voltage: "Nominalioji įtampa",
        max_current: "Maksimali srovė",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Bendra",
      levels: "Lygiai",
      pedal: "Pedalas",
      throttle: "Droselinė sklendė",
    },
    header: {
      readButtonText: "Skaityti",
      writeButtonText: "Išsaugoti",
    },
    tabs: {
      general: {
        header: "Bendra",
        lowBatteryProtection: "Apsauga nuo išsikrovusio akumuliatoriaus",
        currentLimit: "Srovės riba",
        speedMeterType: {
          text: "Greičio matuoklio tipas",
          types: ["Išorinis, ratų matuoklis", "Vidinis, variklio matuoklis", "Pagal variklio fazę"],
        },
        speedMeterSignals: "Greičio matuoklio signalai",
        wheelDiameter: {
          text: "Ratų skersmuo",
          types: [
            "16 colių",
            "17 colių",
            "18 colių",
            "19 colių",
            "20 colių",
            "21 colis",
            "22 coliai",
            "23 coliai",
            "24 colių",
            "25 coliai",
            "26 colių",
            "27 colių",
            "700C",
            "28 colių",
            "29 colių",
            "30 colių",
          ],
        },
      },
      levels: {
        header: "Pagalbos lygiai",
        level: "Lygis",
        current: "Dabartinis",
        speed: "Greitis",
        popoverCurrentLimitHeader: "Dabartinė lygio riba",
        popoverSpeedLimitHeader: "Lygio greičio apribojimas",
      },
      pedal: {
        header: "Pagalba pedalams",
        pedalSensorType: {
          text: "Pedalo jutiklio tipas",
          types: ["Nėra", "DH jutiklis-12", "BB jutiklis-32", "Dvigubas signalas-24"],
        },
        designatedAssistLevel: {
          text: "Paskirtasis pagalbos lygis",
          types: ["Pagal ekrano įsakymą", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Greičio apribojimas",
          types: [
            "Pagal ekrano įsakymą",
            "15 km/val.",
            "16 km/val.",
            "17 km/val.",
            "18 km/val.",
            "19 km/val.",
            "20 km/val.",
            "21 km/val.",
            "22 km/val.",
            "23 km/val.",
            "24 km/val.",
            "25 km/val.",
            "26 km/val.",
            "27 km/val.",
            "28 km/val.",
            "29 km/val.",
            "30 km/val.",
            "31 km/val.",
            "32 km/val.",
            "33 km/val.",
            "34 km/val.",
            "35 km/val.",
            "36 km/val.",
            "37 km/val.",
            "38 km/val.",
            "39 km/val.",
            "40 km/val.",
          ],
        },
        startCurrent: "Pradžia Dabartinė srovė",
        slowStartMode: "Lėtas paleidimo režimas",
        startDegree: "Pradėti laipsnį",
        workMode: {
          text: "Darbo režimas",
          types: ["Nenustatyta"],
        },
        stopDelay: "Stabdymo vėlavimas",
        currentDecay: "Dabartinis skilimas",
        stopDecay: "Sustabdykite irimą",
        keepCurrent: "Laikykitės dabartinės srovės",
      },
      throttle: {
        header: "Droselinės sklendės pagalba",
        startVoltage: "Pradinė įtampa",
        endVoltage: "Galinė įtampa",
        mode: {
          text: "Režimas",
          types: ["Greitis", "Dabartinis"],
        },
        designatedAssistLevel: {
          text: "Paskirtasis pagalbos lygis",
          types: ["Pagal ekrano įsakymą", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Greičio apribojimas",
          types: [
            "Pagal ekrano įsakymą",
            "15 km/val.",
            "16 km/val.",
            "17 km/val.",
            "18 km/val.",
            "19 km/val.",
            "20 km/val.",
            "21 km/val.",
            "22 km/val.",
            "23 km/val.",
            "24 km/val.",
            "25 km/val.",
            "26 km/val.",
            "27 km/val.",
            "28 km/val.",
            "29 km/val.",
            "30 km/val.",
            "31 km/val.",
            "32 km/val.",
            "33 km/val.",
            "34 km/val.",
            "35 km/val.",
            "36 km/val.",
            "37 km/val.",
            "38 km/val.",
            "39 km/val.",
            "40 km/val.",
          ],
        },
        startCurrent: "Pradžia Dabartinė srovė",
      },
    },
  },
  help: {
    about: {
      header: "Apie paraišką",
      p1: '"Bafang BBS" serijos variklių konfigūravimo įrankis.',
      author: "Autorius",
    },
    connection: {
      header: "Ryšys",
      p1:
        'Norint prisijungti prie "Bafang BBS" serijos elektrinio dviračio valdiklio, reikia USB-OTG adapterio, USB ir serijinio adapterio su "Julet" tipo moteriškomis jungtimis.',
      p2:
        'Taip pat galite nusipirkti "originalų" USB programavimo kabelį, tačiau tai tik brangus USB ir nuosekliojo ryšio adapteris su tinkama BBS valdiklio kabelio jungtimi.',
    },
    general: {
      header: "Bendra",
      lowBatteryProtection:
        "Tai įtampa, kuriai esant valdiklis sustabdo variklį, kad apsaugotų akumuliatorių nuo per didelės iškrovos. Ją turėtų tinkamai nustatyti gamintojas ir jums jos keisti nereikia. 13S akumuliatoriams 41 V yra numatytasis nustatymas.",
      currentLimit:
        "Tai didžiausia leistina srovė, tekanti per variklį. Jei, pavyzdžiui, jūsų variklio srovė yra 25 A, jei norite, galite nustatyti 20 A, kad būtų saugu. Nerekomenduojama nustatyti didesnės srovės nei vardinė. Net nustačius 25 A, didžiausia srovė bus didesnė, todėl geriau nenustatyti didesnės srovės.",
      speedMeterType:
        "Šiuo mygtuku pasirenkamas dviračio greičio matuoklis. BBS rinkiniuose jis yra išorinis. Šį parametrą nustato gamintojas ir, jei jūsų sąranka nėra nestandartinė, jo keisti nereikia.",
      speedMeterSignals:
        "Čia galite nustatyti, kiek signalų per vieną apsisukimą generuoja jutiklis. Jei naudojate išorinį jutiklį su magnetu, jis generuoja vieną signalą per vieną rato apsisukimą. Šį parametrą nustato gamintojas ir, jei jūsų sąranka nėra nestandartinė, jo keisti nereikia.",
      wheelDiameter:
        "Rato skersmuo turėtų atitikti varomojo rato dydį (taigi jūsų dviratis gali turėti du skirtingo dydžio ratus). Nustatę mažesnį skersmenį, nei yra iš tikrųjų, padidinsite greitį, tačiau taip pat galite lengvai sugadinti variklį.",
      endText:
        "Baigę derinti bendruosius nustatymus, galite juos įrašyti į valdiklį naudodami šiame programos skirtuke esantį mygtuką WRITE. Taip pat bet kuriuo metu galite naudoti mygtuką READ (nuskaityti), kad juos perskaitytumėte (taip pakeisite visas reikšmes, esančias General. Tai neperrašys jokių kitų nustatymų.",
    },
    levels: {
      header: "Pagalbos lygiai",
      p1: "Tai visi galimi pagalbos nustatymai (tiek pedalų pagalbai, tiek droselio rankenėlei naudojant vieną iš jų).",
      p2:
        'Svarbu paminėti, kad "Assist 0" srovės ir greičio ribos turi būti nustatytos į 1, jei norite, kad būtų galima naudoti akceleratoriaus rankenėlę su LCD ekrane pasirinkta "Pedal Assist 0".',
      p3: 'Paprastai "Assist 0" nustatomas į 0, kad galėtumėte naudotis dviračiu be pagalbos, jei norite.',
      p4:
        "Būkite atsargūs nustatydami šiuos lygius. Jei nustatysite per mažą srovę, variklis negalės judinti dviračio ir jis gali būti sugadintas. Jei pirmojo pagalbos lygio srovę nustatysite per didelę, tuomet pagreitis starto metu bus didelis. Tai gali sugadinti vidines pavaras arba priversti jus nukristi nuo dviračio.",
      p5:
        "Greičio riba nustato, kokiu greičiu (% didžiausio LCD ekrane nustatyto greičio) variklis sumažins savo galią ir tiesiog išlaikys šį greitį, užuot dar labiau greitėjęs.",
      p6:
        "Programos viršuje esantys jungikliai leidžia rodyti automatiškai konvertuojamas vertes (srovės ir greičio arba procentus).",
      endText:
        "Baigę derinti pagalbinių lygių nustatymus, galite juos įrašyti į valdiklį naudodami šios programos skirtuke esantį mygtuką WRITE (rašyti). Taip pat bet kuriuo metu galite naudoti mygtuką READ (nuskaityti), kad juos perskaitytumėte (tai pakeis visas Assist Levels (pagalbinių lygių) vertes. Tai neperrašys jokių kitų nustatymų.",
    },
    pedal: {
      header: "Pagalba pedalams",
      p1:
        "Pedal Assist sistema padeda jums minti pedalus. Šiame skirtuke galite reguliuoti jos veikimą. Kai kurių iš jų neturėtumėte keisti, nes jie būdingi jūsų komplektui. Juos nustato gamintojas.",
      pedalSensorType:
        "Šiuo parametru pasirenkamas pedalo sukimosi jutiklio tipas. Jį nustato gamintojas ir jo keisti nereikėtų.",
      designatedAssistLevel:
        'Naudodami šį parametrą galite pasirinkti du operacijos tipus. Pirmasis yra "Pagal ekrano komandą". Tai reiškia, kad pagalbinis lygis (tas, kuris nurodytas skirtuke "Pagrindiniai nustatymai") bus pasirinktas iš jūsų LCD ekrano. Antroji galimybė - pasirinkti konkretų pagalbos lygį, kuris bus fiksuotas ir jo negalėsite keisti iš LCD ekrano. Šiuo atveju galite pasirinkti bet kurį pagalbos lygį nuo 0 iki 9.',
      speedLimit:
        'Tai didžiausias greitis, kuriam esant variklis gali suteikti papildomą pagreitį. Pasiekus šį greitį, jis tik jį išlaikys, bet daugiau nespartins. Jei nustatysite šį parametrą į "Pagal ekrano komandą", galėsite nustatyti greitį iš LCD ekrano. Turėkite omenyje, kad kai kurie LCD ekranai leidžia nustatyti 99 km/val. greitį, o tai neįmanoma bent jau su dabartiniais BBS rinkiniais. Kiek išbandžiau, didžiausias greitis neminant pedalų yra 40 km/h (kai teisingai nustatytas ratų dydis). Šis nustatymas naudojamas visiems pagalbos lygiams, kuriuos matote skirtuke Basic (Pagrindiniai). Jei nustatysite 40 km/val. greitį (šioje programoje arba LCD ekrane), o jūsų 5 pagalbos lygis nustatytas 50 %, tuomet šiuo pagalbos lygiu galėsite pasiekti 20 km/val. greitį.',
      startCurrent:
        "Tai paleidimo srovė, kai pradedate sukti pedalus. Gerai ją nustatyti bent 10 %, kad dviratis pradėtų judėti ir variklis neužstrigtų. Nustačius labai didelę reikšmę, dviratis starto metu įsibėgės labai greitai, o tai gali sugadinti jo vidines pavaras ir variklį. Rekomenduojama vertė yra nuo 10 iki 30 %. Taip pat turėtumėte įsitikinti, kad nepradėsite minti pedalų per didele pavara, nes tai per daug apkraus variklį.",
      slowStartMode:
        "Šiuo nustatymu kontroliuojama, kaip greitai pasiekiama paleidimo srovė. Galite pasiekti, kad dviratis įsibėgėtų sklandžiai ir greitai reaguotų. Įprastam važiavimui dviračiu paprastai tinka maždaug 4 reikšmė. Jei važinėjate kalnų dviračiu, nustačius mažą vertę, pagreitės pagreitis, o tai gali būti naudinga, tačiau turėtumėte būti atsargūs, kad neiškeptumėte valdiklio ir variklio.",
      startDegree:
        "Šiuo parametru nustatoma, kiek impulsų iš pedalo jutiklio reikia, kad variklis įsijungtų. BBS komplektuose per visą pedalo apsisukimą generuojami 24 impulsai. Nustačius 0 arba 1, šis parametras neveiks. Vertė apie 4 veikia gerai, nes neprasideda tik nuo mažo judesio, be to, nereikia per daug sukimosi.",
      workMode:
        "Šio parametro paskirtis nėra labai aiški. Jis turėtų valdyti galią pagal pedalo sukimosi greitį. Atrodo, kad gamintojo nustatyta vertė veikia puikiai, todėl jos keisti nereikia.",
      stopDelay: "Tai uždelsimas, kai nustojate minti pedalus, kol variklis sustoja. Gerai veikia 250 ms reikšmė.",
      currentDecay:
        "Šis parametras nustato, kaip greitai krenta srovė, kai minate pedalus greitai ir pasiekiamas didžiausias greitis esant pasirinktam pagalbos lygiui. Mažesnė reikšmė reiškia, kad srovė pradės mažėti esant mažesniam greičiui.",
      stopDecay: "Laikas, per kurį variklis sustoja.",
      keepCurrent:
        'Šiuo nustatymu nustatoma pasirinkto pagalbos lygio didžiausios srovės procentinė dalis, kuri tekės per variklį, kai pasieksite didžiausią greitį ir toliau minsite pedalus. Taigi, jei jūsų didžiausia srovė yra 25 A, o jūs naudojate "Pedal Assist 5" nustatę 50 % srovės, tuomet šio pagalbos lygio didžiausia srovė bus 12,5 A. Tada, jei Keep Current (palaikymo srovė) nustatyta į 50 %, kai pasieksite didžiausią greitį ir toliau minsite pedalus, srovė išliks 6,25 A. Taip užtikrinamas sklandus perėjimas prie pagalbinės galios, kai sumažinate pedalų mynimo greitį ir judėjimo greitis sumažėja žemiau maksimalaus.',
      endText:
        'Baigę derinti "Pedal Assist" nustatymus, galite juos įsirašyti į valdiklį naudodami šiame programos skirtuke esantį mygtuką WRITE. Taip pat bet kuriuo metu galite naudoti mygtuką READ (nuskaityti), kad juos perskaitytumėte (taip bus pakeistos visos Pedal Assist reikšmės. Tai neperrašys jokių kitų nustatymų.',
    },
    throttle: {
      header: "Droselinės sklendės rankena",
      p1:
        'Jei jūsų rinkinyje yra droselinė rankena, šiame skirtuke galite konfigūruoti jos veikimą. Įsitikinkite, kad "Assis 0" yra nustatyta į 1 (tiek srovės, tiek greičio), jei norite ją naudoti, kai LCD ekrane pasirinkta "Pedal Assist S0".',
      startVoltage:
        "Tai yra droselio rankenos išėjimo įtampa, kuriai esant variklis įsijungia. Mažiausia vertė, kuriai esant valdiklis reaguoja, yra 1,1 V.",
      endVoltage:
        "Tai yra droselio rankenos išėjimo įtampa, kuriai esant variklis pasieks didžiausią galią (ribojama kitų nustatymų). Didžiausia iš valdiklio priimtina įtampa yra 4,2 V. Su šiuo parametru reikia šiek tiek pažaisti, nes maksimali droselio rankenos įtampa gali skirtis priklausomai nuo modelio. Jei nustatysite per mažą šio parametro reikšmę, droselio rankena beveik nereaguos. Nustatę maksimalų parametrą, kurį gali duoti rankena, gausite plačiausią įmanomą variklio galios valdymo diapazoną.",
      mode:
        "Tai yra droselio rankenos veikimo režimas. Galite pasirinkti dvi parinktis: greitį ir srovę. Nustačius greitį, valdiklis naudoja judėjimo greitį variklio galiai nustatyti pagal droselio rankenos padėtį. Deja, dėl greičio matavimo būdo atsiranda nemažas vėlavimas, todėl šiuo režimu reakcija yra gana prasta. Kai nustatytas srovės režimas, rankena valdo variklio srovę pagal savo padėtį. Šis režimas veikia geriau ir yra panašus į automobilio valdymą.",
      designatedAssistLevel:
        'Galite nustatyti "Pagal ekrano komandą" arba pasirinkti fiksuotą lygį. Pirmoji parinktis naudoja jūsų LCD ekrano PAS nustatymą. Tai reiškia, kad didžiausia išvystoma galia ir greitis priklauso nuo pasirinkto PAS lygio ir droselio rankenos padėties. Taigi, jei pasirinktas mažas PAS, didžiausia srovė ir greitis taip pat bus maži, net jei paspausite droselinę rankeną iki maksimumo. Jei šiam parametrui pasirinktas fiksuotas pagalbos lygis, droselio rankena naudos didžiausią srovę ir greitį. Būkite atsargūs, jei nustatėte 9 lygį, kad sustoję nespaustumėte droselio rankenos iki maksimumo, nes didelė srovė ir galia gali sugadinti valdiklį ir variklį.',
      speedLimit:
        "Naudodami šį parametrą galite apriboti didžiausią greitį, kai naudojate droselio rankeną. Tai pakeičia nustatytą pagalbinio lygio didžiausią greitį, jei jis yra didesnis.",
      startCurrent:
        'Tai didžiausios varikliui tiekiamos srovės procentinė dalis, kai droselio rankena generuoja mažiausią leistiną įtampą. Paprastai 10 % arba 20 % vertė yra tinkama. Jei kortelėje "General" (Bendrosios nuostatos) nustatyta didžiausia srovė yra 25 A, o "Start Current" (Paleidimo srovė) - 10 %, gausite 2,5 A paleidimo srovę. Tai lems sklandų paleidimą ir per daug neapkraus vidinių pavarų. Jei nustatysite labai didelę šio parametro vertę, galite sugadinti vidines pavaras ir variklį.',
      endText:
        "Baigę derinti droselinės rankenos nustatymus, galite juos įsirašyti į valdiklį naudodami šios programos skirtuko mygtuką WRITE (rašyti). Taip pat bet kuriuo metu galite naudoti mygtuką READ (nuskaityti), kad juos perskaitytumėte (taip bus pakeistos visos droselio rankenos vertės. Tai neperrašys jokių kitų nustatymų.",
    },
  },
};

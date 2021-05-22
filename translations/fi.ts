import { Translation } from "./type";

export const fi: Translation = {
  messages: {
    processing: "Käsittely...",
    deviceIsDisconnected: "Laite on irrotettu!",
    connectingInProgress: "Yhdistäminen käynnissä...",
    settingsHaveBeenSaved: "Asetuksesi on tallennettu!",
    configLoadedSuccessful: "Config ladattu onnistuneesti!",
    overrideFileWarning: {
      header: "Varoitus!",
      message: {
        theFileText: "Tiedosto",
        areYouSureToOverrideText: "olemassa! Oletko varma, että haluat ohittaa tämän tiedoston?",
      },
      buttons: {
        yes: "Ohita",
        no: "Ei",
      },
    },
    unsupportedConfigurationFile: {
      header: "Virhe!",
      text: "Ei tuettu tai rikkinäinen konfiguraatiotiedosto!",
    },
    pleaseWait: "Odota...",
    connectingToMotor: "Moottoriin liittäminen...",
    noDeviceFound: "Laitetta ei löytynyt!",
    cantEstablishingConnection: "Ei voi luoda yhteyttä moottoriin! Tarkista yhteyden loppu uudelleenkäynnistys!",
    connectedTo: "Yhdistetty",
    readBasSuccess: {
      basTypeLevel: "Tasot",
      basTypeGeneral: "Yleistä",
      first: "Lue",
      second: "parametrit onnistuneesti!",
    },
    readPedalAssistSuccess: "Lue Pedal Assist -parametrit onnistuneesti!",
    readThrottleHandleSuccess: "Kaasukahvan parametrien lukeminen onnistuneesti",
    readAllSuccess: "Lue kaikki parametrit onnistuneesti!",
    somethingWentWrong: "Jokin meni pieleen! Loki:",
    writeSuccess: {
      levels: "Tasot",
      general: "Yleistä",
      pedalAssist: "Poljinavustin",
      throttleHandle: "Kaasukahva",
      first: "Kirjoita",
      second: "parametrit onnistuneesti!",
    },
    writeAllSuccess: "Kirjoita kaikki parametrit onnistuneesti!",
  },
  buttons: {
    cancel: "Peruuta",
  },
  errors: {
    writeBasErrors: {
      "0": "Alhainen akku Suojaus alueen ulkopuolella, nollaa!",
      "1": "Virran raja-arvo ei ole sallittu, nollaa se!",
      "2": "PAS0:n virtaraja on alueen ulkopuolella, nollaa se!",
      "3": "PAS0:n nopeusrajoitus ei ole alueella, nollaa se!",
      "4": "PAS1:n virtaraja on alueen ulkopuolella, nollaa se!",
      "5": "PAS1:n nopeusrajoitus ei ole alueella, nollaa se!",
      "6": "PAS2:n virtaraja on alueen ulkopuolella, nollaa se!",
      "7": "PAS2:n nopeusrajoitus ei ole alueella, nollaa se!",
      "8": "PAS3:n virtaraja on alueen ulkopuolella, nollaa se!",
      "9": "PAS3:n nopeusrajoitus ei ole voimassa, nollaa se!",
      "10": "PAS4:n virtaraja on alueen ulkopuolella, nollaa se!",
      "11": "PAS4:n nopeusrajoitus ei ole voimassa, nollaa se!",
      "12": "PAS5:n virtaraja on alueen ulkopuolella, nollaa se!",
      "13": "PAS5:n nopeusrajoitus ei ole alueella, nollaa se!",
      "14": "PAS6:n virtaraja on alueen ulkopuolella, nollaa se!",
      "15": "PAS6:n nopeusrajoitus ei ole alueella, nollaa se!",
      "16": "PAS7:n virtaraja on alueen ulkopuolella, nollaa se!",
      "17": "PAS7:n nopeusrajoitus ei ole alueella, nollaa se!",
      "18": "PAS8:n virtaraja on alueen ulkopuolella, nollaa se!",
      "19": "PAS8:n nopeusrajoitus ei ole alueella, nollaa se!",
      "20": "PAS9:n virtaraja on alueen ulkopuolella, nollaa se!",
      "21": "PAS9:n nopeusrajoitus ei ole voimassa, nollaa se!",
      "22": "Pyörän halkaisija ei ole alueella, nollaa!",
      "23": "Nopeusmittarin signaalit ovat alueen ulkopuolella, nollaa ne!",
      default: "Viestintäongelma, nollaa!",
    },
    writePasErrors: {
      "0": "Poljinanturin tyyppivirhe, nollaa se!",
      "1": "Määritetyn avustustason virhe, nollaa se!",
      "2": "Nopeusrajoitusvirhe, nollaa!",
      "3": "Start Current out of range, please reset!",
      "4": "Hidas käynnistystilan virhe, nollaa se!",
      "5": "Start Degree ei ole kantaman ulkopuolella, nollaa!",
      "6": "Työtilan virhe, nollaa!",
      "7": "Pysäytä viive pois alueelta, nollaa!",
      "8": "Nykyinen hajoaminen ei ole sallittua, nollaa!",
      "9": "Pysäytä hajoaminen kantaman ulkopuolella, nollaa!",
      "10": "Pidä Current kantaman ulkopuolella, nollaa!",
      default: "Tuntematon virhe, nollaa!",
    },
    writeThrErrors: {
      "0": "Start Voltage out of range, please reset!",
      "1": "End Voltage out of range, please reset!",
      "2": "Tilavirhe, nollaa!",
      "3": "Määritelty avustusvirhe, nollaa!",
      "4": "Nopeusrajoitusvirhe, nollaa!",
      "5": "Start Current out of range, please reset!",
      default: "Tuntematon virhe, nollaa!",
    },
  },
  mainRouter: {
    home: "Etusivu",
    settings: "Asetukset",
    help: "Apua",
  },
  main: {
    label_language: "Kieli",
    object_Profile: {
      header: "Profiili",
      open: "Avaa",
      save_as: "Tallenna nimellä",
      save: "Tallenna",
      default_configuration_string: "Oletuskonfiguraatio (tiedostoa ei ole määritetty)",
      popup_header: "Tallenna kokoonpano nimellä",
      popup_placeholder: "Kirjoita tiedoston nimi tähän",
      popup_button_label: "Tallenna",
    },
    object_Motor: {
      header: "Moottori",
      read_all: "Lue",
      write_all: "Kirjoita",
      connect: "Yhdistä",
      disconnect: "Katkaise yhteys",
      status: {
        disconnected: "katkaistu",
        connecting: "liitäntä",
        connected: "kytketty",
        error: "virhe",
      },
      motor_info: {
        status: "Tila",
        manufacturer: "Valmistaja",
        model: "Malli",
        hardware_version: "Laitteistoversio",
        firmware_version: "Laiteohjelmiston versio",
        nominal_voltage: "Nimellisjännite",
        max_current: "Maksimivirta",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Yleistä",
      levels: "Tasot",
      pedal: "Poljin",
      throttle: "Kaasukahva",
    },
    header: {
      readButtonText: "Lue",
      writeButtonText: "Tallenna",
    },
    tabs: {
      general: {
        header: "Yleistä",
        lowBatteryProtection: "Pariston alhaisen varaustason suojaus",
        currentLimit: "Virran raja",
        speedMeterType: {
          text: "Nopeusmittarin tyyppi",
          types: ["Ulkoinen, pyörämittari", "Sisäinen, moottorimittari", "Moottorin vaiheen mukaan"],
        },
        speedMeterSignals: "Nopeusmittarin signaalit",
        wheelDiameter: {
          text: "Pyörän halkaisija",
          types: [
            "16 tuumaa",
            "17 tuumaa",
            "18 tuumaa",
            "19 tuumaa",
            "20 tuumaa",
            "21 tuumaa",
            "22 tuumaa",
            "23 tuumaa",
            "24 tuumaa",
            "25 tuumaa",
            "26 tuumaa",
            "27 tuumaa",
            "700C",
            "28 tuumaa",
            "29 tuumaa",
            "30 tuumaa",
          ],
        },
      },
      levels: {
        header: "Avustustasot",
        level: "Taso",
        current: "Nykyinen",
        speed: "Nopeus",
        popoverCurrentLimitHeader: "Virran raja-arvo tasolle",
        popoverSpeedLimitHeader: "Nopeusrajoitus tasolle",
      },
      pedal: {
        header: "Poljinavustin",
        pedalSensorType: {
          text: "Poljinanturin tyyppi",
          types: ["Ei ole", "DH-anturi-12", "BB-anturi-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Nimetty avustustaso",
          types: ["Näytön käskystä", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Nopeusrajoitus",
          types: [
            "Näytön käskystä",
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
        startCurrent: "Käynnistä Virta",
        slowStartMode: "Hidas käynnistystila",
        startDegree: "Aloita tutkinto",
        workMode: {
          text: "Työtila",
          types: ["Määrittelemätön"],
        },
        stopDelay: "Pysäytysviive",
        currentDecay: "Nykyinen hajoaminen",
        stopDecay: "Pysäytä rappeutuminen",
        keepCurrent: "Pidä nykyinen",
      },
      throttle: {
        header: "Kaasuavustin",
        startVoltage: "Alkujännite",
        endVoltage: "Loppujännite",
        mode: {
          text: "Tila",
          types: ["Nopeus", "Nykyinen"],
        },
        designatedAssistLevel: {
          text: "Nimetty avustustaso",
          types: ["Näytön käskystä", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Nopeusrajoitus",
          types: [
            "Näytön käskystä",
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
        startCurrent: "Käynnistä Virta",
      },
    },
  },
  help: {
    about: {
      header: "Tietoja hakemuksesta",
      p1: "Konfigurointityökalu Bafang BBS -moottorisarjalle.",
      author: "Kirjoittaja",
    },
    connection: {
      header: "Yhteys",
      p1:
        "Bafang BBS -sarjan sähköpolkupyörän ohjaimeen liittämistä varten tarvitset USB-OTG-sovittimen, USB-sarjasovittimen, jonka päässä on Julet-tyyppiset naarasliittimet.",
      p2:
        'Voit myös ostaa "alkuperäisen" USB-ohjelmointikaapelin, mutta se on vain ylihinnoiteltu USB-sarjasovitin, jossa on BBS-ohjaimen kaapeliin sopiva liitin.',
    },
    general: {
      header: "Yleistä",
      lowBatteryProtection:
        "Tämä on jännite, jolla ohjain pysäyttää moottorin, jotta akku ei pääse ylipurkautumaan. Valmistajan pitäisi asettaa se oikein, eikä sitä tarvitse muuttaa. 13S-akkupaketeille 41V on oletusarvo.",
      currentLimit:
        "Tämä on suurin sallittu virta moottorin läpi. Jos moottorisi on esimerkiksi 25A, voit halutessasi asettaa sen arvoksi 20A, jotta se pysyy turvallisena. Ei ole suositeltavaa asettaa nimellisvirtaa suurempaa virtaa. Jopa 25A:n virran huippuvirta on suurempi, joten sinun ei kannata asettaa sitä suurempaa virtaa.",
      speedMeterType:
        "Tällä valitaan polkupyörässä käytettävä nopeusmittari. BBS-sarjoissa se on ulkoinen. Valmistaja asettaa tämän parametrin, ja jos asetuksesi ei ole mukautettu, sinun ei tarvitse muuttaa sitä.",
      speedMeterSignals:
        "Tässä voit määrittää, kuinka monta signaalia anturi tuottaa kierrosta kohti. Jos käytät ulkoista anturia, jossa on magneetti, se tuottaa yhden signaalin pyörän kierrosta kohti. Tämän parametrin asettaa valmistaja, ja jos asetuksesi ei ole mukautettu, sinun ei tarvitse muuttaa sitä.",
      wheelDiameter:
        "Pyörän halkaisijan on vastattava vetopyörän kokoa (polkupyörässäsi voi siis olla kaksi erikokoista pyörää). Halkaisijan asettaminen todellista pienemmäksi lisää nopeutta, mutta voi myös helposti johtaa moottorivaurioon.",
      endText:
        "Kun olet saanut yleiset asetukset valmiiksi, voit käyttää ohjelman tämän välilehden WRITE-painiketta kirjoittaaksesi ne ohjaimeen. Voit myös käyttää READ-painiketta milloin tahansa lukeaksesi ne (tämä korvaa kaikki arvot kohdassa General. Tämä ei korvaa muita asetuksia.",
    },
    levels: {
      header: "Avustustasot",
      p1:
        "Nuo ovat kaikki mahdollisia avustinasetuksia (sekä poljinavustin että kaasukahva, kun käytät jotakin näistä).",
      p2:
        "On tärkeää mainita, että Assist 0 -virta- ja nopeusrajoitukset on asetettava arvoon 1, jos haluat käyttää kaasukahvaa, kun Pedal Assist 0 on valittu LCD-näytössä.",
      p3: "Yleensä Assist 0 on asetettu arvoon 0, jotta voit halutessasi käyttää polkupyörääsi ilman apua.",
      p4:
        "Ole varovainen näiden tasojen asettamisessa. Jos asetat virran liian pieneksi, moottori ei pysty liikuttamaan polkupyörää ja se voi vaurioitua. Jos asetat ensimmäisen avustustason virran liian suureksi, kiihtyvyys käynnistettäessä on merkittävä. Tämä saattaa vahingoittaa sisäisiä vaihteita tai saada sinut putoamaan polkupyörästä.",
      p5:
        "Nopeusrajoitus määrittää, millä nopeudella (% LCD-näytössä asetetusta enimmäisnopeudesta) moottori vähentää tehoaan ja pitää vain tämän nopeuden sen sijaan, että kiihdyttäisi enemmän.",
      p6:
        "Sovelluksen yläosassa olevien kytkimien avulla voit näyttää automaattisesti muunnetut arvot (nykyinen ja nopeus tai prosentit).",
      endText:
        "Kun olet valmis virittämään Assist Levels -asetukset, voit käyttää ohjelman tämän välilehden WRITE-painiketta kirjoittaaksesi ne ohjaimeen. Voit myös käyttää READ-painiketta milloin tahansa lukeaksesi ne (tämä korvaa kaikki Assist Levels -asetusten arvot. Tämä ei korvaa muita asetuksia.",
    },
    pedal: {
      header: "Poljinavustin",
      p1:
        "Pedal Assist -järjestelmä auttaa sinua polkemisen aikana. Tällä välilehdellä voit säätää sen suorituskykyä. Joitakin niistä ei kannata muuttaa, koska ne ovat varustekohtaisia. Ne ovat valmistajan asettamia.",
      pedalSensorType:
        "Tällä parametrilla valitaan polkimen kiertoanturin tyyppi. Valmistaja on asettanut sen, eikä sitä saa muuttaa.",
      designatedAssistLevel:
        'Tällä parametrilla voidaan valita kaksi toimintatyyppiä. Ensimmäinen on "Näytön käskystä". Tämä tarkoittaa, että avustustaso (se, joka on valittu Perusasetukset-välilehdeltä) valitaan nestekidenäytöltä. Toinen vaihtoehto on valita tietty avustustaso, joka on kiinteä, etkä voi muuttaa sitä LCD-näytöltä. Tätä varten voit valita minkä tahansa avustustason välillä 0-9.',
      speedLimit:
        'Tämä on suurin nopeus, jolla moottori antaa lisäkiihtyvyyttä. Kun nopeus on saavutettu, se vain pitää sen, mutta ei kiihdytä enempää. Jos asetat tämän parametrin arvoksi "Näytön käskystä", voit asettaa nopeuden LCD-näytöltä. Pidä mielessä, että joillakin nestekidenäytöillä voit asettaa 99km/h nopeuden, mikä ei ole mahdollista ainakaan nykyisillä BBS-sarjoilla. Sikäli kuin olen testannut, maksiminopeus ilman polkemista on 40km/h (kun pyörän koko on asetettu oikein). Tätä asetusta käytetään kaikille Basic-välilehdellä näkyville avustustasoille. Jos asetat tämän arvoksi 40km/h (tässä ohjelmassa tai LCD-näytöltä) ja Assist 5 -tasosi on asetettu 50 %:n nopeuteen, voit saavuttaa 20km/h tällä avustustasolla.',
      startCurrent:
        "Tämä on käynnistysvirta, kun aloitat polkimien pyörittämisen. Tämä on hyvä asettaa vähintään 10 prosenttiin, jotta polkupyörä lähtee liikkeelle eikä moottori pysähdy. Jos tämä asetetaan erittäin suureksi, polkupyörä kiihtyy hyvin nopeasti käynnistyksen yhteydessä, mikä saattaa vahingoittaa sen sisäisiä vaihteita ja myös moottoria. Suositeltava arvo on 10-30 %. Varmista myös, ettet aloita polkemista liian suurella vaihteella, joka kuormittaa moottoria liikaa.",
      slowStartMode:
        "Tällä asetuksella säädetään, kuinka nopeasti käynnistysvirta saavutetaan. Voit saada polkupyörän kiihtymään tasaisesti ja saada sen reagoimaan nopeasti. Arvo noin 4 toimii yleensä hyvin normaalissa pyöräilyssä. Jos olet maastopyöräilijä, alhaisen arvon asettaminen tekee kiihtyvyydestä nopeamman, mikä voi olla hyödyllistä, mutta sinun on varottava, ettet kärvennä ohjainta ja moottoria.",
      startDegree:
        "Tällä parametrilla määritetään, kuinka monta pulssia poljinanturilta tarvitaan ennen kuin moottori käynnistyy. BBS-sarjojen täysi polkimen kierros tuottaa 24 pulssia. Tämän asetuksen asettaminen 0:ksi tai 1:ksi ei toimi. Arvo noin 4 toimii hyvin, koska se ei käynnisty vain pienestä liikkeestä eikä vaadi liian suurta kierrosta.",
      workMode:
        "Tämän parametrin tarkoitus ei ole kovin selvä. Sen on tarkoitus ohjata tehoa polkimen pyörimisnopeuden mukaan. Valmistajan asettama arvo näyttää toimivan hyvin, joten sitä ei tarvitse muuttaa.",
      stopDelay:
        "Tämä on viive sen jälkeen, kun lopetat polkemisen, ennen kuin moottori pysähtyy. Arvo 250 ms toimii hyvin.",
      currentDecay:
        "Tällä parametrilla määritetään, kuinka nopeasti virta laskee, kun poljet kovaa ja saavutat maksiminopeuden valitulla avustustasolla. Pienempi arvo tarkoittaa, että virta alkaa laskea pienemmällä nopeudella.",
      stopDecay: "Aika, jonka moottori pysähtyy.",
      keepCurrent:
        "Tämä asetus ohjaa prosenttiosuutta valitulla avustustasolla maksimivirrasta, joka virtaa moottorin läpi, kun saavutat maksiminopeuden ja jatkat polkemista. Jos maksimivirta on siis 25 A ja käytät Pedal Assist 5 -asetusta 50 %:n virralla, maksimivirta on 12,5 A tällä avustustasolla. Jos sitten Keep Current (Pidä virta) on asetettu 50 %:iin, kun maksiminopeus on saavutettu ja jatkat polkemista, virta pysyy 6,25 A:ssa. Näin varmistetaan sujuva siirtyminen avustusvirtaan, kun vähennät poljinnopeutta ja liikenopeus laskee alle maksiminopeuden.",
      endText:
        "Kun olet valmis virittämään Pedal Assist -asetukset, voit käyttää ohjelman tämän välilehden WRITE-painiketta kirjoittaaksesi ne ohjaimeen. Voit myös käyttää READ-painiketta milloin tahansa lukeaksesi ne (tämä korvaa kaikki Pedal Assistin arvot. Tämä ei korvaa muita asetuksia.",
    },
    throttle: {
      header: "Kaasukahva",
      p1:
        "Jos sarjassasi on kaasukahva, voit määrittää sen toiminnan tällä välilehdellä. Varmista, että Assis 0 on asetettu arvoon 1 (sekä virta että nopeus), jos haluat käyttää sitä, kun Pedal Assist S0 on valittu LCD-näytössä.",
      startVoltage:
        "Tämä on kaasukahvan lähtöjännite, jolla moottori käynnistyy. Minimiarvo, jolla ohjain reagoi, on 1,1 V.",
      endVoltage:
        "Tämä on kaasukahvan lähtöjännite, jolla moottori saavuttaa maksimitehonsa (jota muut asetukset rajoittavat). Ohjaimesta hyväksyttävä maksimi on 4,2 V. Sinun on leikiteltävä hieman tämän parametrin kanssa, koska kaasukahvan maksimijännite voi olla erilainen mallista riippuen. Jos asetat tämän parametrin liian alhaiseksi, kaasukahva ei reagoi juuri lainkaan. Kun asetat sen maksimiin, jonka kaasukahva voi tuottaa, saat laajimman mahdollisen säätöalueen moottorin teholle.",
      mode:
        "Tämä on kaasukahvan toimintatila. Valittavana on kaksi vaihtoehtoa: nopeus ja virta. Kun se on asetettu nopeuteen, ohjain käyttää liikkumisnopeutta asettaakseen moottorin tehon kaasukahvan asennon mukaan. Valitettavasti nopeuden mittaustavan vuoksi on huomattava viive, ja vaste on melko huono tässä tilassa. Kun asetetaan virta-asetukseksi, kahva ohjaa moottorin virtaa sen asennon mukaan. Tämä tila toimii paremmin ja muistuttaa auton toimintaa.",
      designatedAssistLevel:
        'Voit asettaa tämän arvoksi "Näytön komennon mukaan" tai valita kiinteän tason. Ensimmäinen vaihtoehto käyttää LCD-näytön PAS-asetusta. Tämä tarkoittaa, että suurin teho ja nopeus riippuvat valitusta PAS-tasosta ja kaasukahvan asennosta. Jos siis on valittu matala PAS-arvo, myös maksimivirta ja -nopeus ovat matalia, vaikka painaisit kaasukahvan maksimiin. Jos tälle parametrille on valittu kiinteä avustustaso, kaasukahva käyttää maksimivirtaa ja -nopeutta. Ole varovainen, jos asetat tämän tasolle 9, ettet paina kaasukahvaa maksimiin pysähtyneenä, koska suuri virta ja teho voivat vahingoittaa ohjainta ja moottoria.',
      speedLimit:
        "Tällä parametrilla voit rajoittaa enimmäisnopeutta kaasukahvaa käytettäessä. Tämä korvaa määritetyn avustustason enimmäisnopeuden, jos se on suurempi.",
      startCurrent:
        "Tämä on prosenttiosuus moottoriin syötettävästä maksimivirrasta, kun kaasukahva tuottaa pienimmän hyväksytyn jännitteen. Yleensä arvo 10 tai 20 % toimii hyvin. Jos maksimivirran arvoksi General-välilehdellä on asetettu 25 A ja Start Current -arvoksi 10 %, saat 2,5 A:n käynnistysvirran. Tämä johtaa tasaiseen käynnistykseen eikä kuormita sisäisiä vaihteita liikaa. Jos asetat tämän parametrin hyvin suureksi, voit vaurioittaa sisäisiä hammaspyöriä ja moottoria.",
      endText:
        "Kun olet valmis virittämään kaasukahvan asetukset, voit käyttää ohjelman tämän välilehden WRITE-painiketta kirjoittaaksesi ne ohjaimeen. Voit myös käyttää READ-painiketta milloin tahansa lukeaksesi ne (tämä korvaa kaikki arvot kaasukahvassa. Tämä ei korvaa muita asetuksia.",
    },
  },
};

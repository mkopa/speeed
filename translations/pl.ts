import { Translation } from "./type";

export const pl: Translation = {
  messages: {
    processing: "Przetwarzanie...",
    deviceIsDisconnected: "Urządzenie jest rozłączone!",
    connectingInProgress: "Łączenie...",
    settingsHaveBeenSaved: "Twóje ustawienia zostały zapisane!",
    configLoadedSuccessful: "Załadowano konfigurację!",
    overrideFileWarning: {
      header: "Ostrzeżenie!",
      message: {
        theFileText: "Plik o nazwie",
        areYouSureToOverrideText: "istnieje! Czy na pewno chcesz go nadpisać?",
      },
      buttons: {
        yes: "Nadpisz",
        no: "Nie",
      },
    },
    unsupportedConfigurationFile: {
      header: "Błąd!",
      text: "Nieobsługiwany lub uszkodzony plik konfiguracyjny!",
    },
    pleaseWait: "Proszę czekać...",
    connectingToMotor: "Łączenie z silnikiem...",
    noDeviceFound: "Nie wykryto urządzenia!",
    cantEstablishingConnection: "Nie można nawiązać komunikacji z silnikiem! Sprawdź połączenie!",
    connectedTo: "Połączono z ",
    readBasSuccess: {
      basTypeLevel: "poziomów",
      basTypeGeneral: "głównych",
      first: "Odczyt parametrów",
      second: "zakończony sukcesem!",
    },
    readPedalAssistSuccess: "Odczyt parametrów Pedały zakończony sukcesem!",
    readThrottleHandleSuccess: "Odczyt parametrów przepustnicy zakończony sukcesem!",
    readAllSuccess: "Odczyt wszystkich parametrów zakończony sukcesem!",
    somethingWentWrong: "Coś poszło nie tak! Log:",
    writeSuccess: {
      levels: "Poziomy",
      general: "Główne",
      pedalAssist: "Pedały",
      throttleHandle: "Przepustnica",
      first: "Zapis parametrów",
      second: "zakończony sukcesem",
    },
    writeAllSuccess: "Zapis wszystkich parametrów zakończony sukcesem!",
  },
  buttons: {
    cancel: "Anuluj",
  },
  errors: {
    writeBasErrors: {
      default: "Problem z komunikacją, proszę zresetować!",
      "0": "Napięcie odcięcia poza zakresem, proszę zresetować!",
      "1": "Prąd odcięćia poza zakresem, proszę zresetować!",
      "2": "Prąd odcięcia dla poziomu 0 poza zakresem, proszę zresetować!",
      "4": "Prąd odcięcia dla poziomu 1 poza zakresem, proszę zresetować!",
      "6": "Prąd odcięcia dla poziomu 2 poza zakresem, proszę zresetować!",
      "8": "Prąd odcięcia dla poziomu 3 poza zakresem, proszę zresetować!",
      "10": "Prąd odcięcia dla poziomu 4 poza zakresem, proszę zresetować!",
      "12": "Prąd odcięcia dla poziomu 5 poza zakresem, proszę zresetować!",
      "14": "Prąd odcięcia dla poziomu 6 poza zakresem, proszę zresetować!",
      "16": "Prąd odcięcia dla poziomu 7 poza zakresem, proszę zresetować!",
      "18": "Prąd odcięcia dla poziomu 8 poza zakresem, proszę zresetować!",
      "20": "Prąd odcięcia dla poziomu 9 poza zakresem, proszę zresetować!",
      "3": "Prędkość dla poziomu 0 poza zakresem, proszę zresetować!",
      "5": "Prędkość dla poziomu 1 poza zakresem, proszę zresetować!",
      "7": "Prędkość dla poziomu 2 poza zakresem, proszę zresetować!",
      "9": "Prędkość dla poziomu 3 poza zakresem, proszę zresetować!",
      "11": "Prędkość dla poziomu 4 poza zakresem, proszę zresetować!",
      "13": "Prędkość dla poziomu 5 poza zakresem, proszę zresetować!",
      "15": "Prędkość dla poziomu 6 poza zakresem, proszę zresetować!",
      "17": "Prędkość dla poziomu 7 poza zakresem, proszę zresetować!",
      "19": "Prędkość dla poziomu 8 poza zakresem, proszę zresetować!",
      "21": "Prędkość dla poziomu 9 poza zakresem, proszę zresetować!",
      "22": "Rozmiar koła poza zakresem, proszę zresetować!",
      "23": "Ilość sygnałów z czujnika prędkości poza zakresem, proszę zresetować!",
    },
    writePasErrors: {
      default: "Unknown error, proszę zresetować!",
      "0": "Zły typ czujnika pedałów, proszę zresetować!",
      "1": "Niepraidłowy Dedykowany poziom wspomagania, proszę zresetować!",
      "2": "Nieprawidłowy limit prędkości, proszę zresetować!",
      "3": "Prąd startowy poza zakresem, proszę zresetować!",
      "4": "Tryb wolnego startu poza zakresem, proszę zresetować!",
      "5": "Ilość sygnałów do startu poza zakresem, proszę zresetować!",
      "6": "Zły tryb pracy, proszę zresetować!",
      "7": "Opóźnienie zatrzymania poza zakresem, proszę zresetować!",
      "8": "Stopień opóźnienia prądu poza zakresem, proszę zresetować!",
      "9": "Czas opóźnienia prądu poza zakresem, proszę zresetować!",
      "10": "Podptrzymanie poza zakresem, proszę zresetować!",
    },
    writeThrErrors: {
      default: "Unknown error, proszę zresetować!",
      "0": "Napięcie 0% poza zakresem, proszę zresetować!",
      "1": "Napięcie 100% poza zakresem, proszę zresetować!",
      "2": "Zły tryb pracy, proszę zresetować!",
      "3": "Zły poziom wspomagania, proszę zresetować!",
      "4": "Błąd limitu prędkości, proszę zresetować!",
      "5": "Prąd startowy poza zakresem, proszę zresetować!",
    },
  },
  mainRouter: {
    home: "Główny",
    settings: "Ustawienia",
    help: "Pomoc",
  },
  main: {
    label_language: "Język",
    object_Profile: {
      header: "Profil",
      open: "Otwórz",
      save_as: "Zapisz jako",
      save: "Zapisz",
      default_configuration_string: "Konfiguracja domyślna (nie wybrano pliku)",
      popup_header: "Zapisz konfigurację jako",
      popup_placeholder: "Tu wpisz nazwę pliku",
      popup_button_label: "Zapisz",
    },
    object_Motor: {
      header: "Silnik",
      read_all: "Odczytaj",
      write_all: "Zapisz",
      connect: "Połącz",
      disconnect: "Rozłącz",
      status: {
        disconnected: "rozłączony",
        connecting: "łączenie",
        connected: "połączony",
        error: "błąd",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Producent",
        model: "Model",
        hardware_version: "Wersja sprzętowa",
        firmware_version: "Wersja oprogramowania",
        nominal_voltage: "Nominalne napięcie",
        max_current: "Maksymalny prąd",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Główne",
      levels: "Poziomy",
      pedal: "Pedały",
      throttle: "Przepustnica",
    },
    header: {
      readButtonText: "Odczytaj",
      writeButtonText: "Zapisz",
    },
    tabs: {
      general: {
        header: "Główne",
        lowBatteryProtection: "Napięcie odcięcia",
        currentLimit: "Prąd odcięcia",
        speedMeterType: {
          text: "Typ czujnika prędkości",
          types: ["Zewnętrzny, Czujnik koła", "Wewnętrzny, Czujnik silnika", "Faza rotora"],
        },
        speedMeterSignals: "Ilość sygnałów z czujnika prędkości",
        wheelDiameter: {
          text: "Rozmiar koła",
          types: [
            "16 cali",
            "17 cali",
            "18 cali",
            "19 cali",
            "20 cali",
            "21 cali",
            "22 cali",
            "23 cali",
            "24 cali",
            "25 cali",
            "26 cali",
            "27 cali",
            "700C",
            "28 cali",
            "29 cali",
            "30 cali",
          ],
        },
      },
      levels: {
        header: "Poziomy Wspomagania",
        level: "Poziom",
        current: "Prąd",
        speed: "Prędkość",
        popoverCurrentLimitHeader: "Limit prądu dla poziomu",
        popoverSpeedLimitHeader: "Limit prędkości dla poziomu",
      },
      pedal: {
        header: "Wspomaganie Pedałowania",
        pedalSensorType: {
          text: "Typ czujnika pedałowania",
          types: ["Brak", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Dedykowany poziom wspomagania",
          types: ["Ustawiany zdalnie", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limit prędkości",
          types: [
            "Ustawiany zdalnie",
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
            "40km/h",
          ],
        },
        startCurrent: "Prąd startowy",
        slowStartMode: "Tryb wolnego startu",
        startDegree: "Ilość sygnałów do startu",
        workMode: {
          text: "Tryb pracy (prędkość kątkowa pedałowania/rozmiar koła * 10",
          types: ["Nieokreślony"],
        },
        stopDelay: "Opóźnienie zatrzymania",
        currentDecay: "Stopień opóźnienie prądu",
        stopDecay: "Czas opóźnienia prądu",
        keepCurrent: "Podtrzymanie prądu",
      },
      throttle: {
        header: "Przepustnica",
        startVoltage: "Napięcie 0%",
        endVoltage: "Napięcie 100%",
        mode: {
          text: "Tryb",
          types: ["Prędkość", "Prąd"],
        },
        designatedAssistLevel: {
          text: "Dedykowany poziom wspomagania",
          types: ["Ustawiany zdalnie", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limit prędkości",
          types: [
            "Ustawiany zdalnie",
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
            "40km/h",
          ],
        },
        startCurrent: "Prąd startowy",
      },
    },
  },
  help: {
    about: {
      header: "O programie",
      p1: "Narzędzie konfiguracyjne dla silników Bafang serii BBS",
      author: "Autor",
    },
    connection: {
      header: "Połączenie",
      p1:
        "Aby połączyć się z silnikiem potrzebujesz adaptera microUSB/USB-C <-> OTG oraz adaptera USB-SERIAL zakończonego wtykiem żeńskim typu Julet 5-pin",
      p2: "Adapter możesz zrobić sam niskim kosztem, lub zamówić gotowy w internecie",
    },
    general: {
      header: "Ogólne",
      lowBatteryProtection:
        "Jest to napięcie, przy którym kontroler zatrzyma silnik, aby uchronić Twój akumulator przed nadmiernym rozładowaniem. Powinno być ono prawidłowo ustawione przez producenta i nie musisz go zmieniać. Dla pakietów baterii 13S domyślnie jest to 41V.",
      currentLimit:
        "Jest to maksymalny prąd, jaki może przepływać przez silnik. Jeśli na przykład Twój silnik ma 25A, możesz ustawić go na 20A, aby zapewnić mu bezpieczeństwo. Nie zaleca się ustawiania wyższego prądu niż nominalny. Nawet ustawiony na 25A prąd szczytowy będzie wyższy, więc lepiej nie ustawiać więcej niż to.",
      speedMeterType:
        "Ten wybiera prędkościomierz używany w rowerze. W przypadku zestawów BBS jest on zewnętrzny. Parametr ten jest ustawiany przez producenta i jeśli Twoja konfiguracja nie jest niestandardowa, nie musisz go zmieniać.",
      speedMeterSignals:
        "Tutaj możesz ustawić ile sygnałów na obrót generuje Twój czujnik. Jeśli używasz zewnętrznego czujnika z magnesem, generuje on jeden sygnał na jeden obrót koła. Ten parametr jest ustawiany przez producenta i jeśli twoja konfiguracja nie jest niestandardowa, nie musisz go zmieniać.",
      wheelDiameter:
        "Średnica koła powinna odpowiadać wielkości koła napędowego (dlatego rower może mieć dwa koła o różnej wielkości). Ustawienie mniejszej średnicy niż jest w rzeczywistości zwiększy prędkość, ale może też łatwo doprowadzić do uszkodzenia silnika.",
      endText:
        "Po zakończeniu dostrajania ustawień ogólnych możesz użyć przycisku WRITE w tej zakładce programu, aby zapisać je do sterownika. Możesz również użyć przycisku READ w dowolnym momencie, aby je odczytać (spowoduje to zastąpienie wszystkich wartości w General. Nie spowoduje to nadpisania żadnych innych ustawień.",
    },
    levels: {
      header: "Poziomy Wspomagania",
      p1:
        "Są to wszystkie możliwe ustawienia wspomagania (zarówno dla wspomagania pedałowania, jak i uchwytu przepustnicy przy użyciu jednego z nich).",
      p2:
        "Ważne jest, aby wspomnieć, że prąd Assist 0 i ograniczenia prędkości muszą być ustawione na 1, jeśli chcesz móc używać uchwytu przepustnicy z Pedal Assist 0 wybranym na ekranie LCD.",
      p3: "Zazwyczaj Assist 0 jest ustawiony na 0, abyś mógł używać roweru bez wspomagania, jeśli chcesz.",
      p4:
        "Należy uważać przy ustawianiu tych poziomów. Jeśli ustawimy zbyt niski prąd, silnik nie będzie w stanie poruszać rowerem i może ulec uszkodzeniu. Jeśli ustawimy zbyt wysoki prąd pierwszego poziomu wspomagania, przyspieszenie przy ruszaniu będzie znaczne. Może to spowodować uszkodzenie wewnętrznych przekładni lub upadek z roweru.",
      p5:
        "Ograniczenie prędkości określa, przy jakiej prędkości (% maksymalnej prędkości ustawionej na wyświetlaczu LCD) silnik zmniejszy swoją moc i utrzyma tę prędkość, zamiast przyspieszać bardziej.",
      p6:
        "Przełączniki w górnej części aplikacji pozwalają na wyświetlanie automatycznie przeliczanych wartości (procenty prądu i prędkości lub prędkości)",
      endText:
        "Po zakończeniu dostrajania ustawień Poziomów Wspomagania możesz użyć przycisku ZAPISZ w tej zakładce programu, aby zapisać je do kontrolera. Możesz również użyć przycisku ODCZYTAJ w dowolnym momencie, aby je odczytać (spowoduje to zastąpienie wszystkich wartości na poziomach Poziomy Wspomagania. Nie spowoduje to nadpisania żadnych innych ustawień.",
    },
    pedal: {
      header: "Wspomaganie pedałowania",
      p1:
        "System Pedal Assist wspomaga użytkownika podczas pedałowania. W tej zakładce możesz dostroić jego działanie. Niektórych z nich nie powinieneś zmieniać, ponieważ są one specyficzne dla Twojego zestawu. Te są ustawiane przez producenta.",
      pedalSensorType:
        "Parametr określa typ czujnika obrotów pedału. Jest on ustawiany przez producenta i nie powinien być zmieniany.",
      designatedAssistLevel:
        'Za pomocą tego parametru można wybrać dwa rodzaje operacji. Pierwszy z nich to "Na polecenie wyświetlacza". Oznacza to, że poziom wspomagania (ten z zakładki Ustawienia podstawowe) będzie wybierany z ekranu LCD. Drugą opcją jest wybór konkretnego poziomu wspomagania, który będzie stały i nie będzie można go zmienić z poziomu wyświetlacza LCD. W tym przypadku można wybrać dowolny poziom wspomagania z zakresu od 0 do 9.',
      speedLimit:
        'Jest to maksymalna prędkość, przy której silnik będzie zapewniał dodatkowe przyspieszenie. Po osiągnięciu tej prędkości silnik będzie ją tylko utrzymywał, ale nie będzie przyspieszał bardziej. Jeśli ustawisz ten parametr na "By Display\'s Command" będziesz mógł ustawić prędkość z wyświetlacza LCD. Należy pamiętać, że niektóre wyświetlacze LCD pozwalają na ustawienie prędkości 99km/h, co nie jest możliwe przynajmniej w obecnych zestawach BBS. Z tego co testowałem, maksymalna prędkość bez pedałowania wynosi 40km/h (gdy rozmiar koła jest ustawiony prawidłowo). To ustawienie jest używane dla wszystkich poziomów wspomagania, które widzisz w zakładce Basic. Jeśli ustawisz to na 40km/h (w tym programie lub na ekranie LCD) i poziom Assist 5 jest ustawiony na 50% prędkości, będziesz w stanie osiągnąć 20km/h na tym poziomie wspomagania.',
      startCurrent:
        "Jest to prąd rozruchowy, gdy zaczniesz obracać pedałami. Dobrze jest ustawić go na co najmniej 10%, aby mieć pewność, że rower zacznie się poruszać, a silnik nie zostanie zatrzymany. Ustawienie tej wartości na bardzo wysoką spowoduje, że rower będzie przyspieszał bardzo szybko przy starcie, co może uszkodzić jego wewnętrzne przekładnie, a także silnik. Zalecaną wartością jest ta pomiędzy 10% a 30%. Powinieneś również upewnić się, że nie zaczniesz pedałować na zbyt wysokim biegu, co spowoduje nadmierne obciążenie silnika.",
      slowStartMode:
        "To ustawienie kontroluje, jak szybko osiągany jest prąd startowy. Możesz sprawić, że rower będzie przyspieszał płynnie i szybko reagował. Wartość około 4 zazwyczaj działa dobrze dla normalnej jazdy rowerem. Jeśli jesteś rowerzystą górskim to ustawienie niskiej wartości spowoduje szybsze przyspieszenie, co może być przydatne, ale powinieneś uważać aby nie usmażyć kontrolera i silnika.",
      startDegree:
        "Parametr ten określa ile impulsów z czujnika pedału jest potrzebnych do uruchomienia silnika. Pełny obrót pedału w zestawach BBS generuje 24 impulsy. Ustawienie tego parametru na 0 lub 1 nie będzie działać. Wartość około 4 działa dobrze, ponieważ nie uruchamia się przy małym ruchu i nie wymaga zbyt dużego obrotu.",
      workMode:
        "Przeznaczenie tego parametru nie jest zbyt jasne. Ma on sterować mocą w zależności od prędkości obrotowej pedału. Wartość ustawiona przez producenta wydaje się działać dobrze, więc nie ma potrzeby jej zmieniać.",
      stopDelay:
        "Jest to opóźnienie po zatrzymaniu pedałowania zanim silnik się zatrzyma. Wartość 250ms działa dobrze.",
      currentDecay:
        "Ten parametr określa, jak szybko spada natężenie prądu podczas szybkiego pedałowania i osiągania maksymalnej prędkości przy wybranym poziomie wspomagania. Niższa wartość oznacza, że prąd zacznie spadać przy niższej prędkości.",
      stopDecay: "Czas potrzebny do zatrzymania silnika.",
      keepCurrent:
        "To ustawienie kontroluje procent maksymalnego prądu na wybranym poziomie wspomagania, który będzie płynął przez silnik, gdy użytkownik osiągnie maksymalną prędkość i będzie pedałował dalej. Jeśli więc maksymalne natężenie prądu wynosi 25A i używasz funkcji Pedal Assist 5 ustawionej na 50% natężenia prądu, wówczas maksymalne natężenie prądu dla tego poziomu wspomagania wyniesie 12,5A. Następnie, jeśli opcja Keep Current jest ustawiona na 50%, po osiągnięciu maksymalnej prędkości i kontynuowaniu pedałowania, prąd będzie utrzymywany na poziomie 6,25A. Zapewnia to płynne przejście do wspomagania, gdy użytkownik zmniejszy prędkość pedałowania, a prędkość jazdy spadnie poniżej maksymalnej.",
      endText:
        "Kiedy skończysz dostrajać ustawienia Wspomaganie Pedalowania możesz użyć przycisku Zapisz w tej zakładce programu aby zapisać je do twojego kontrolera. Możesz również w każdej chwili użyć przycisku Odczytaj aby je odczytać (spowoduje to zastąpienie wszystkich wartości w Wspomaganie PEdałowania. Nie spowoduje to nadpisania żadnych innych ustawień.",
    },
    throttle: {
      header: "Dźwignia przepustnicy",
      p1:
        "Jeśli twój zestaw jest wyposażony w uchwyt przepustnicy to ta zakładka pozwala skonfigurować jego działanie. Upewnij się, że Assis 0 jest ustawiony na 1 (zarówno prąd jak i prędkość) jeśli chcesz go używać gdy na wyświetlaczu LCD wybrany jest Pedal Assist S0.",
      startVoltage:
        "Jest to napięcie na wyjściu przepustnicy, przy którym silnik będzie startował. Minimum, przy którym sterownik reaguje to 1.1V.",
      endVoltage:
        "Jest to napięcie na wyjściu przepustnicy, przy którym silnik osiągnie maksymalną moc (ograniczoną innymi ustawieniami). Maksymalne akceptowane z kontrolera to 4,2V. Należy trochę pobawić się tym parametrem, ponieważ maksymalne napięcie na uchwycie przepustnicy może być różne w zależności od modelu. Jeśli ustawimy ten parametr na zbyt niskim poziomie nie uzyskamy prawie żadnej reakcji dźwigni przepustnicy. Jeśli ustawisz go na maksimum, które uchwyt może wytworzyć, uzyskasz najszerszy możliwy zakres kontroli nad mocą silnika.",
      mode:
        "Jest to tryb pracy uchwytu przepustnicy. Dostępne są dwie opcje: prędkość i prąd. Po ustawieniu prędkości sterownik wykorzystuje prędkość ruchu do ustawienia mocy silnika w zależności od położenia uchwytu przepustnicy. Niestety, ze względu na sposób pomiaru prędkości występuje znaczne opóźnienie, a reakcja w tym trybie jest dość kiepska. Po ustawieniu na prąd, uchwyt steruje prądem silnika zgodnie z jego pozycją. Ten tryb działa lepiej i podobnie do działania samochodu.",
      designatedAssistLevel:
        'Można to ustawić na "Na polecenie wyświetlacza" lub wybrać stały poziom. Pierwsza opcja wykorzystuje ustawienia PAS z wyświetlacza LCD. Oznacza to, że maksymalna moc wyjściowa i prędkość zależą od wybranego poziomu PAS i pozycji uchwytu przepustnicy. Jeśli więc wybrano niski PAS, maksymalny prąd i prędkość będą również niskie, nawet jeśli przesuniesz przepustnicę na maksimum. Jeśli dla tego parametru wybrano stały poziom wspomagania, uchwyt przepustnicy będzie wykorzystywał swój maksymalny prąd i prędkość. Uważaj jeśli ustawisz ten parametr na poziom 9, aby nie wciskać przepustnicy na maksa podczas postoju, ponieważ wysoki prąd i moc mogą uszkodzić kontroler i silnik.',
      speedLimit:
        "Za pomocą tego parametru można ograniczyć maksymalną prędkość podczas korzystania z uchwytu przepustnicy. Nadpisuje to maksymalną prędkość wyznaczonego poziomu wspomagania, jeżeli jest ona wyższa.",
      startCurrent:
        "Jest to procent maksymalnego prądu podawanego do silnika, gdy uchwyt przepustnicy generuje minimalne akceptowane napięcie. Zazwyczaj wartość 10% lub 20% działa dobrze. Jeśli Twój maksymalny prąd w zakładce General jest ustawiony na 25A i Start Current jest ustawiony na 10%, otrzymasz 2.5A prądu startowego. Doprowadzi to do łagodnego startu i nie obciąży zbytnio wewnętrznych przekładni. Jeśli ustawisz ten parametr na bardzo wysoką wartość, możesz uszkodzić wewnętrzne przekładnie i silnik.",
      endText:
        "Kiedy skończysz dostrajać ustawienia przepustnicy, możesz użyć przycisku ZAPISZ w tej zakładce programu, aby zapisać je do sterownika. Możesz też w każdej chwili użyć przycisku ODCZYTAJ aby je odczytać (spowoduje to zastąpienie wszystkich wartości na przepustnicy). Nie spowoduje to nadpisania żadnych innych ustawień.",
    },
  },
};

import { Translation } from "./type";

export const de: Translation = {
  messages: {
    processing: "Verarbeitung...",
    deviceIsDisconnected: "Gerät ist nicht angeschlossen!",
    connectingInProgress: "Verbinden in Arbeit...",
    settingsHaveBeenSaved: "Ihre Einstellungen wurden gespeichert!",
    configLoadedSuccessful: "Config erfolgreich geladen!",
    overrideFileWarning: {
      header: "Warnung!",
      message: {
        theFileText: "Die Datei",
        areYouSureToOverrideText: "existieren! Sind Sie sicher, dass Sie diese Datei außer Kraft setzen wollen?",
      },
      buttons: {
        yes: "Überschreiben Sie",
        no: "Nein",
      },
    },
    unsupportedConfigurationFile: {
      header: "Fehler!",
      text: "Nicht unterstützte oder defekte Konfigurationsdatei!",
    },
    pleaseWait: "Bitte warten...",
    connectingToMotor: "Anschluss an den Motor...",
    noDeviceFound: "Kein Gerät gefunden!",
    cantEstablishingConnection: "Kann keine Verbindung zum Motor herstellen! Verbindung prüfen Ende neu starten!",
    connectedTo: "Verbunden mit",
    readBasSuccess: {
      basTypeLevel: "Levels",
      basTypeGeneral: "Allgemein",
      first: "Lesen Sie",
      second: "Parameter erfolgreich!",
    },
    readPedalAssistSuccess: "Pedal Assist Parameter erfolgreich lesen!",
    readThrottleHandleSuccess: "Parameter des Gasgriffs erfolgreich lesen",
    readAllSuccess: "Alle Parameter erfolgreich gelesen!",
    somethingWentWrong: "Etwas ist schief gelaufen! Log:",
    writeSuccess: {
      levels: "Levels",
      general: "Allgemein",
      pedalAssist: "Pedal-Unterstützung",
      throttleHandle: "Throttle Handle",
      first: "Schreiben Sie",
      second: "Parameter erfolgreich!",
    },
    writeAllSuccess: "Alle Parameter erfolgreich schreiben!",
  },
  buttons: {
    cancel: "Abbrechen",
  },
  errors: {
    writeBasErrors: {
      "0": "Low Battery Protection außerhalb der Reichweite, bitte zurücksetzen!",
      "1": "Stromgrenze außerhalb des Bereichs, bitte zurücksetzen!",
      "2": "Stromgrenze für PAS0 außerhalb des Bereichs, bitte zurücksetzen!",
      "3": "Geschwindigkeitsgrenze für PAS0 außerhalb des Bereichs, bitte zurücksetzen!",
      "4": "Stromgrenze für PAS1 außerhalb des Bereichs, bitte zurücksetzen!",
      "5": "Geschwindigkeitslimit für PAS1 außerhalb des Bereichs, bitte zurücksetzen!",
      "6": "Stromgrenze für PAS2 außerhalb des Bereichs, bitte zurücksetzen!",
      "7": "Geschwindigkeitslimit für PAS2 außerhalb des Bereichs, bitte zurücksetzen!",
      "8": "Stromgrenze für PAS3 außerhalb des Bereichs, bitte zurücksetzen!",
      "9": "Geschwindigkeitslimit für PAS3 außerhalb des Bereichs, bitte zurücksetzen!",
      "10": "Stromgrenze für PAS4 außerhalb des Bereichs, bitte zurücksetzen!",
      "11": "Speed Limit für PAS4 außerhalb des Bereichs, bitte zurücksetzen!",
      "12": "Stromgrenze für PAS5 außerhalb des Bereichs, bitte zurücksetzen!",
      "13": "Geschwindigkeitslimit für PAS5 außerhalb des Bereichs, bitte zurücksetzen!",
      "14": "Stromgrenze für PAS6 außerhalb des Bereichs, bitte zurücksetzen!",
      "15": "Speed Limit für PAS6 außerhalb des Bereichs, bitte zurücksetzen!",
      "16": "Stromgrenze für PAS7 außerhalb des Bereichs, bitte zurücksetzen!",
      "17": "Geschwindigkeitslimit für PAS7 außerhalb des Bereichs, bitte zurücksetzen!",
      "18": "Stromgrenze für PAS8 außerhalb des Bereichs, bitte zurücksetzen!",
      "19": "Geschwindigkeitslimit für PAS8 außerhalb des Bereichs, bitte zurücksetzen!",
      "20": "Stromgrenze für PAS9 außerhalb des Bereichs, bitte zurücksetzen!",
      "21": "Geschwindigkeitslimit für PAS9 außerhalb des Bereichs, bitte zurücksetzen!",
      "22": "Raddurchmesser außerhalb des Bereichs, bitte zurücksetzen!",
      "23": "Geschwindigkeitsmesser signalisiert außerhalb des Bereichs, bitte zurücksetzen!",
      default: "Kommunikationsproblem, bitte zurücksetzen!",
    },
    writePasErrors: {
      "0": "Pedalsensor-Typ-Fehler, bitte zurücksetzen!",
      "1": "Designated Assist Level Fehler, bitte zurücksetzen!",
      "2": "Speed Limit Fehler, bitte zurücksetzen!",
      "3": "Start Strom außerhalb des Bereichs, bitte zurücksetzen!",
      "4": "Fehler im Slow-Start-Modus, bitte zurücksetzen!",
      "5": "Startgrad außerhalb des Bereichs, bitte zurücksetzen!",
      "6": "Fehler im Arbeitsmodus, bitte zurücksetzen!",
      "7": "Stop Delay außerhalb der Reichweite, bitte zurücksetzen!",
      "8": "Stromabfall außerhalb des Bereichs, bitte zurücksetzen!",
      "9": "Stop Decay außerhalb der Reichweite, bitte zurücksetzen!",
      "10": "Strom außer Reichweite halten, bitte zurücksetzen!",
      default: "Unbekannter Fehler, bitte zurücksetzen!",
    },
    writeThrErrors: {
      "0": "Start Voltage out of range, please reset!",
      "1": "End Voltage out of range, please reset!",
      "2": "Modusfehler, bitte zurücksetzen!",
      "3": "Designated Assist Fehler, bitte zurücksetzen!",
      "4": "Speed Limit Fehler, bitte zurücksetzen!",
      "5": "Start Strom außerhalb des Bereichs, bitte zurücksetzen!",
      default: "Unbekannter Fehler, bitte zurücksetzen!",
    },
  },
  mainRouter: {
    home: "Startseite",
    settings: "Einstellungen",
    help: "Hilfe",
  },
  main: {
    label_language: "Sprache",
    object_Profile: {
      header: "Profil",
      open: "Öffnen Sie",
      save_as: "Speichern unter",
      save: "Speichern",
      default_configuration_string: "Standardkonfiguration (keine Datei angegeben)",
      popup_header: "Konfiguration speichern als",
      popup_placeholder: "Geben Sie hier den Dateinamen ein",
      popup_button_label: "Speichern",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Lesen Sie",
      write_all: "Schreiben Sie",
      connect: "Verbinden",
      disconnect: "Trennen Sie die Verbindung",
      status: {
        disconnected: "Getrennt",
        connecting: "verbinden",
        connected: "angeschlossen",
        error: "Fehler",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Hersteller",
        model: "Modell",
        hardware_version: "Hardware Version",
        firmware_version: "Firmware Version",
        nominal_voltage: "Nennspannung",
        max_current: "Max. Strom",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Allgemein",
      levels: "Levels",
      pedal: "Pedal",
      throttle: "Drosselklappe",
    },
    header: {
      readButtonText: "Lesen Sie",
      writeButtonText: "Speichern",
    },
    tabs: {
      general: {
        header: "Allgemein",
        lowBatteryProtection: "Schutz bei niedrigem Batteriestand",
        currentLimit: "Stromgrenze",
        speedMeterType: {
          text: "Speed Meter Type",
          types: ["Extern, Radzähler", "Internal, Motor Meter", "By Motor Phase"],
        },
        speedMeterSignals: "Speed Meter Signals",
        wheelDiameter: {
          text: "Raddurchmesser",
          types: [
            "16 Zoll",
            "17 Zoll",
            "18 Zoll",
            "19 Zoll",
            "20 Zoll",
            "21 Zoll",
            "22 Zoll",
            "23 Zoll",
            "24 Zoll",
            "25 Zoll",
            "26 Zoll",
            "27 Zoll",
            "700C",
            "28 Zoll",
            "29 Zoll",
            "30 Zoll",
          ],
        },
      },
      levels: {
        header: "Assist-Stufen",
        level: "Ebene",
        current: "Aktuell",
        speed: "Geschwindigkeit",
        popoverCurrentLimitHeader: "Stromgrenze für Pegel",
        popoverSpeedLimitHeader: "Geschwindigkeitsgrenze für Ebene",
      },
      pedal: {
        header: "Pedal-Unterstützung",
        pedalSensorType: {
          text: "Typ des Pedalsensors",
          types: ["Keine", "DH-Sensor-12", "BB-Sensor-32", "DoppelSignal-24"],
        },
        designatedAssistLevel: {
          text: "Vorgesehene Assist-Stufe",
          types: ["Durch den Befehl des Displays", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Geschwindigkeitsbegrenzung",
          types: [
            "Durch den Befehl des Displays",
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
        startCurrent: "Start Strom",
        slowStartMode: "Langsamer Startmodus",
        startDegree: "Start-Grad",
        workMode: {
          text: "Arbeitsmodus",
          types: ["Unbestimmt"],
        },
        stopDelay: "Stoppverzögerung",
        currentDecay: "Stromabfall",
        stopDecay: "Verfall stoppen",
        keepCurrent: "Strom halten",
      },
      throttle: {
        header: "Drosselklappen-Assistent",
        startVoltage: "Start Voltage",
        endVoltage: "End Voltage",
        mode: {
          text: "Modus",
          types: ["Geschwindigkeit", "Aktuell"],
        },
        designatedAssistLevel: {
          text: "Vorgesehene Assist-Stufe",
          types: ["Durch den Befehl des Displays", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Geschwindigkeitsbegrenzung",
          types: [
            "Durch den Befehl des Displays",
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
        startCurrent: "Start Strom",
      },
    },
  },
  help: {
    about: {
      header: "Über die Anwendung",
      p1: "Konfigurationstool für die Bafang BBS-Motorserie.",
      author: "Autor",
    },
    connection: {
      header: "Verbindung",
      p1:
        "Zum Anschluss an den Controller Ihres Elektrofahrrads aus der Bafang BBS-Serie benötigen Sie einen USB-OTG-Adapter, einen USB-zu-Seriell-Adapter mit Julet-Typ-Stiftbuchsen am Ende.",
      p2:
        'Sie können auch ein "originales" USB-Programmierkabel kaufen, aber das ist nur ein überteuerter USB-auf-Seriell-Adapter mit dem richtigen Stecker für das Kabel an Ihrem BBS-Controller.',
    },
    general: {
      header: "Allgemein",
      lowBatteryProtection:
        "Dies ist die Spannung, bei der der Controller den Motor stoppt, um Ihre Batterie vor einer Überentladung zu schützen. Sie sollte vom Hersteller richtig eingestellt sein und Sie müssen sie nicht ändern. Für 13S-Akkupacks ist 41V der Standard.",
      currentLimit:
        "Dies ist der maximale Strom, der durch den Motor fließen darf. Wenn Ihr Motor z. B. 25 A hat, können Sie ihn auf 20 A einstellen, um ihn sicher zu halten, wenn Sie möchten. Es wird nicht empfohlen, einen höheren Strom als den Nennstrom einzustellen. Selbst bei einer Einstellung von 25 A ist der Spitzenstrom höher, so dass Sie besser nicht mehr als diesen Wert einstellen.",
      speedMeterType:
        "Hiermit wird der an Ihrem Fahrrad verwendete Geschwindigkeitsmesser ausgewählt. Bei BBS-Kits ist er extern. Dieser Parameter wird vom Hersteller eingestellt. Wenn Ihr Setup nicht kundenspezifisch ist, brauchen Sie ihn nicht zu ändern.",
      speedMeterSignals:
        "Hier können Sie einstellen, wie viele Signale pro Umdrehung Ihr Sensor erzeugt. Wenn Sie den externen Sensor mit Magnet verwenden, erzeugt er ein Signal pro Radumdrehung. Dieser Parameter wird vom Hersteller eingestellt und muss nicht geändert werden, wenn Ihr Setup nicht kundenspezifisch ist.",
      wheelDiameter:
        "Der Raddurchmesser sollte mit der Größe Ihres Antriebsrades übereinstimmen (daher könnte Ihr Fahrrad zwei unterschiedlich große Räder haben). Wenn Sie den Durchmesser kleiner einstellen, als er tatsächlich ist, erhöht sich zwar Ihre Geschwindigkeit, aber es kann auch leicht zu Motorschäden kommen.",
      endText:
        "Wenn Sie mit dem Einstellen Ihrer allgemeinen Einstellungen fertig sind, können Sie die Schaltfläche WRITE in dieser Registerkarte des Programms verwenden, um sie in Ihren Controller zu schreiben. Sie können auch jederzeit die Schaltfläche READ verwenden, um diese zu lesen (dadurch werden alle Werte im General ersetzt. Dabei werden keine anderen Einstellungen überschrieben.",
    },
    levels: {
      header: "Assist-Stufen",
      p1:
        "Dies sind alle möglichen Unterstützungseinstellungen (sowohl für die Tretunterstützung als auch für den Gasgriff bei Verwendung einer dieser Einstellungen).",
      p2:
        "Es ist wichtig zu erwähnen, dass die Strom- und Geschwindigkeitsbegrenzungen von Assist 0 auf 1 gesetzt werden müssen, wenn Sie Ihren Gasgriff mit ausgewähltem Pedal Assist 0 auf Ihrem LCD benutzen wollen.",
      p3:
        "Normalerweise ist Assist 0 auf 0 eingestellt, damit Sie Ihr Fahrrad ohne Unterstützung benutzen können, wenn Sie möchten.",
      p4:
        "Seien Sie bei der Einstellung dieser Werte vorsichtig. Wenn Sie den Strom zu niedrig einstellen, ist der Motor nicht in der Lage, das Fahrrad zu bewegen, und es kann zu Schäden kommen. Wenn Sie den Strom in der ersten Unterstützungsstufe zu hoch einstellen, wird die Beschleunigung beim Start sehr stark sein. Dadurch kann die interne Schaltung beschädigt werden oder Sie können vom Fahrrad fallen.",
      p5:
        "Die Geschwindigkeitsbegrenzung legt fest, bei welcher Geschwindigkeit (% der von Ihrem LCD eingestellten Höchstgeschwindigkeit) der Motor seine Leistung reduziert und nur diese Geschwindigkeit beibehält, anstatt weiter zu beschleunigen.",
      p6:
        "Mit Schaltern am oberen Rand der Anwendung können Sie automatisch umgerechnete Werte (Strom und Drehzahl oder Prozentwerte) anzeigen lassen",
      endText:
        "Wenn Sie mit der Einstellung Ihrer Assist Levels fertig sind, können Sie die Schaltfläche WRITE in dieser Registerkarte des Programms verwenden, um sie in Ihren Controller zu schreiben. Sie können auch jederzeit die Schaltfläche READ (Lesen) verwenden, um diese zu lesen (dadurch werden alle Werte an den Assist Levels ersetzt. Andere Einstellungen werden dadurch nicht überschrieben.",
    },
    pedal: {
      header: "Pedal-Unterstützung",
      p1:
        "Das Pedal Assist-System unterstützt Sie, während Sie in die Pedale treten. Auf dieser Registerkarte können Sie seine Leistung einstellen. Einige dieser Einstellungen sollten Sie nicht ändern, da sie spezifisch für Ihr Kit sind. Diese werden vom Hersteller eingestellt.",
      pedalSensorType:
        "Dieser Parameter wählt den Typ des Pedaldrehsensors aus. Er wird vom Hersteller eingestellt und sollte nicht geändert werden.",
      designatedAssistLevel:
        'Mit diesem Parameter können Sie zwei Betriebsarten auswählen. Die erste ist "By Display\'s Command". Das bedeutet, dass die Unterstützungsstufe (diejenige aus der Registerkarte "Grundeinstellungen") von Ihrem LCD ausgewählt wird. Die zweite Möglichkeit besteht darin, eine bestimmte Unterstützungsstufe zu wählen, die fest eingestellt ist und die Sie nicht über die LCD-Anzeige ändern können. Hierfür können Sie eine beliebige Unterstützungsstufe von 0 bis 9 auswählen.',
      speedLimit:
        'Dies ist die maximale Geschwindigkeit, bei der der Motor eine zusätzliche Beschleunigung liefert. Wenn die Geschwindigkeit erreicht ist, wird sie nur beibehalten, aber nicht weiter beschleunigt. Wenn Sie diesen Parameter auf "By Display\'s Command" setzen, können Sie die Geschwindigkeit von Ihrem LCD einstellen. Beachten Sie, dass einige LCDs die Einstellung einer Geschwindigkeit von 99km/h erlauben, was zumindest mit den aktuellen BBS-Kits nicht möglich ist. Soweit ich getestet habe, liegt die maximale Geschwindigkeit ohne Treten bei 40km/h (wenn die Radgröße richtig eingestellt ist). Diese Einstellung wird für alle Unterstützungsstufen verwendet, die Sie in der Registerkarte Basic sehen. Wenn Sie dies auf 40km/h einstellen (in diesem Programm oder von Ihrem LCD) und Ihre Unterstützungsstufe 5 auf 50% Geschwindigkeit eingestellt ist, dann können Sie mit dieser Unterstützungsstufe 20km/h erreichen.',
      startCurrent:
        "Dies ist der Einschaltstrom, wenn Sie die Pedale zu drehen beginnen. Es ist gut, diesen Wert auf mindestens 10 % einzustellen, um sicherzustellen, dass sich das Fahrrad in Bewegung setzt und der Motor nicht abgewürgt wird. Ein sehr hoher Wert führt dazu, dass das Fahrrad beim Start sehr schnell beschleunigt, was die interne Schaltung und auch den Motor beschädigen kann. Der empfohlene Wert liegt zwischen 10% und 30%. Sie sollten auch darauf achten, dass Sie nicht mit einem zu hohen Gang in die Pedale treten, da dies den Motor zu stark belastet.",
      slowStartMode:
        "Diese Einstellung steuert, wie schnell der Startstrom erreicht wird. Sie können dafür sorgen, dass Ihr Fahrrad sanft beschleunigt und schnell anspricht. Ein Wert um 4 funktioniert normalerweise gut für normales Radfahren. Wenn Sie Mountainbiker sind, dann wird die Einstellung auf einen niedrigen Wert die Beschleunigung schneller machen, was nützlich sein könnte, aber Sie sollten vorsichtig sein, um Ihren Controller und Motor nicht zu braten.",
      startDegree:
        "Dieser Parameter stellt ein, wie viele Impulse vom Pedalsensor benötigt werden, bevor der Motor startet. Eine volle Pedalumdrehung bei BBS-Kits erzeugt 24 Impulse. Die Einstellung auf 0 oder 1 funktioniert nicht. Ein Wert um 4 funktioniert gut, da er nicht schon bei einer kleinen Bewegung startet und auch nicht zu viel Umdrehung benötigt.",
      workMode:
        "Der Zweck dieses Parameters ist nicht ganz klar. Er soll die Leistung in Abhängigkeit von der Pedaldrehzahl steuern. Der vom Hersteller eingestellte Wert scheint gut zu funktionieren, so dass Sie ihn nicht ändern müssen.",
      stopDelay:
        "Dies ist die Verzögerung, nachdem Sie aufhören zu treten, bevor der Motor stoppt. Ein Wert von 250ms funktioniert gut.",
      currentDecay:
        "Dieser Parameter legt fest, wie schnell der Strom abfällt, wenn Sie schnell in die Pedale treten und die maximale Geschwindigkeit bei der gewählten Unterstützungsstufe erreichen. Ein niedrigerer Wert bedeutet, dass der Strom bei niedrigerer Geschwindigkeit abfällt.",
      stopDecay: "Die Zeit, die der Motor braucht, um zu stoppen.",
      keepCurrent:
        "Diese Einstellung steuert den Prozentsatz des maximalen Stroms bei der gewählten Unterstützungsstufe, der durch den Motor fließt, wenn Sie die maximale Geschwindigkeit erreichen und weiter in die Pedale treten. Wenn also Ihr maximaler Strom 25A beträgt und Sie Pedal Assist 5 auf 50% Strom eingestellt haben, dann haben Sie einen maximalen Strom von 12,5A für diese Unterstützungsstufe. Wenn dann Keep Current auf 50% eingestellt ist, wenn die maximale Geschwindigkeit erreicht ist und Sie weiter in die Pedale treten, wird der Strom bei 6,25A gehalten. Dies gewährleistet einen sanften Übergang zur Unterstützungsleistung, wenn Sie die Tretgeschwindigkeit reduzieren und die Fahrgeschwindigkeit unter das Maximum fällt.",
      endText:
        "Wenn Sie mit dem Einstellen Ihrer Pedal Assist-Einstellungen fertig sind, können Sie die Schaltfläche WRITE in dieser Registerkarte des Programms verwenden, um sie in Ihren Controller zu schreiben. Sie können auch jederzeit die Schaltfläche READ verwenden, um diese zu lesen (dadurch werden alle Werte am Pedal Assist ersetzt. Andere Einstellungen werden dadurch nicht überschrieben.",
    },
    throttle: {
      header: "Throttle Handle",
      p1:
        "Wenn Ihr Kit mit einem Gasgriff ausgestattet ist, können Sie auf dieser Registerkarte dessen Betrieb konfigurieren. Vergewissern Sie sich, dass Assis 0 auf 1 gesetzt ist (sowohl Strom als auch Geschwindigkeit), wenn Sie es verwenden möchten, wenn Pedal Assist S0 auf Ihrem LCD ausgewählt ist.",
      startVoltage:
        "Dies ist die Ausgangsspannung des Gashebels, bei der der Motor startet. Das Minimum, bei dem der Regler anspricht, ist 1,1 V",
      endVoltage:
        "Dies ist die Ausgangsspannung des Gashebels, bei der der Motor seine maximale Leistung erreicht (begrenzt durch andere Einstellungen). Das vom Regler akzeptierte Maximum beträgt 4,2 V. Sie müssen ein wenig mit diesem Parameter spielen, da das Maximum des Gashebels je nach Modell unterschiedlich sein kann. Wenn Sie diesen Parameter zu niedrig einstellen, erhalten Sie fast keine Reaktion des Gashebels. Wenn Sie ihn auf das Maximum einstellen, das der Griff erzeugen kann, erhalten Sie den größtmöglichen Regelbereich für die Motorleistung.",
      mode:
        "Dies ist der Betriebsmodus des Gashebels. Sie haben zwei Optionen: Geschwindigkeit und Strom. Wenn er auf Geschwindigkeit eingestellt ist, verwendet der Controller die Bewegungsgeschwindigkeit, um die Motorleistung entsprechend der Position des Gasgriffs einzustellen. Leider gibt es aufgrund der Art und Weise, wie die Geschwindigkeit gemessen wird, eine erhebliche Verzögerung und das Ansprechverhalten ist in diesem Modus ziemlich schlecht. Wenn er auf Strom eingestellt ist, steuert der Griff den Motorstrom entsprechend seiner Position. Dieser Modus funktioniert besser und ähnelt dem Betrieb eines Autos.",
      designatedAssistLevel:
        'Sie können dies auf "By Display\'s Command" einstellen oder einen festen Pegel wählen. Die erste Option verwendet die PAS-Einstellung von Ihrem LCD. Das bedeutet, dass die maximale Stromabgabe und Geschwindigkeit von der gewählten PAS-Stufe und der Position des Gasgriffs abhängen. Wenn also eine niedrige PAS-Stufe ausgewählt ist, werden die maximale Stromstärke und Geschwindigkeit ebenfalls niedrig sein, selbst wenn Sie den Gashebel auf Maximum stellen. Wenn für diesen Parameter eine feste Unterstützungsstufe ausgewählt ist, verwendet der Gasgriff seinen maximalen Strom und seine maximale Geschwindigkeit. Seien Sie vorsichtig, wenn Sie diesen Parameter auf Stufe 9 einstellen, dass Sie den Gashebel im Stillstand nicht auf Maximum stellen, da der hohe Strom und die Leistung den Regler und den Motor beschädigen könnten.',
      speedLimit:
        "Mit diesem Parameter können Sie die maximale Geschwindigkeit bei Verwendung des Gashebels begrenzen. Dies überschreibt die vorgesehene maximale Geschwindigkeit der Unterstützungsstufe, falls diese höher ist.",
      startCurrent:
        'Dies ist der Prozentsatz des maximalen Stroms, der an den Motor angelegt wird, wenn der Gasgriff die minimal akzeptierte Spannung erzeugt. Normalerweise funktioniert ein Wert von 10 % oder 20 % gut. Wenn Ihr Maximalstrom auf der Registerkarte "General" auf 25 A und der Startstrom auf 10 % eingestellt ist, erhalten Sie einen Startstrom von 2,5 A. Dies führt zu einem sanften Start und belastet die internen Zahnräder nicht zu sehr. Wenn Sie diesen Parameter auf einen sehr hohen Wert einstellen, können Sie das interne Getriebe und den Motor beschädigen.',
      endText:
        "Wenn Sie mit der Einstellung des Gasgriffs fertig sind, können Sie die Schaltfläche WRITE in dieser Registerkarte des Programms verwenden, um sie in Ihren Controller zu schreiben. Sie können auch jederzeit die Schaltfläche READ verwenden, um diese zu lesen (dadurch werden alle Werte am Gasgriff ersetzt. Andere Einstellungen werden dadurch nicht überschrieben.",
    },
  },
};

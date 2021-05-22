import { Translation } from "./type";

export const es: Translation = {
  messages: {
    processing: "Procesando...",
    deviceIsDisconnected: "El dispositivo está desconectado.",
    connectingInProgress: "Conexión en curso...",
    settingsHaveBeenSaved: "Tu configuración se ha guardado.",
    configLoadedSuccessful: "¡Configuración cargada con éxito!",
    overrideFileWarning: {
      header: "¡Atención!",
      message: {
        theFileText: "El archivo",
        areYouSureToOverrideText: "¡existe! ¿Está seguro de que quiere anular este archivo?",
      },
      buttons: {
        yes: "Anular",
        no: "No",
      },
    },
    unsupportedConfigurationFile: {
      header: "¡Error!",
      text: "¡Archivo de configuración no soportado o roto!",
    },
    pleaseWait: "Por favor, espere...",
    connectingToMotor: "Conexión al motor...",
    noDeviceFound: "No se ha encontrado ningún dispositivo.",
    cantEstablishingConnection:
      "No se puede establecer la conexión con el motor. Compruebe la conexión al final del reinicio.",
    connectedTo: "Conectado a",
    readBasSuccess: {
      basTypeLevel: "Niveles",
      basTypeGeneral: "General",
      first: "Leer",
      second: "¡parámetros con éxito!",
    },
    readPedalAssistSuccess: "Lea los parámetros de la asistencia al pedaleo con éxito.",
    readThrottleHandleSuccess: "Lectura de los parámetros del mando del acelerador con éxito",
    readAllSuccess: "¡Leer todos los parámetros con éxito!",
    somethingWentWrong: "¡Algo salió mal! Registro:",
    writeSuccess: {
      levels: "Niveles",
      general: "General",
      pedalAssist: "Asistencia al pedaleo",
      throttleHandle: "Mango del acelerador",
      first: "Escriba",
      second: "¡parámetros con éxito!",
    },
    writeAllSuccess: "¡Escribir todos los parámetros con éxito!",
  },
  buttons: {
    cancel: "Cancelar",
  },
  errors: {
    writeBasErrors: {
      "0": "Protección de Batería Baja fuera de rango, por favor reinicie.",
      "1": "Límite de corriente fuera de rango, por favor reinicie.",
      "2": "Límite de corriente para PAS0 fuera de rango, por favor reinicie.",
      "3": "Límite de velocidad para PAS0 fuera de rango, por favor reinicie.",
      "4": "Límite de corriente para PAS1 fuera de rango, por favor reinicie.",
      "5": "Límite de velocidad para PAS1 fuera de rango, por favor reajuste.",
      "6": "Límite de corriente para PAS2 fuera de rango, por favor reinicie.",
      "7": "Límite de velocidad para PAS2 fuera de rango, por favor, reajuste.",
      "8": "Límite de corriente para PAS3 fuera de rango, por favor reinicie.",
      "9": "Límite de velocidad para PAS3 fuera de rango, por favor reajuste.",
      "10": "Límite de corriente para PAS4 fuera de rango, por favor reinicie.",
      "11": "Límite de velocidad para PAS4 fuera de rango, por favor reajuste.",
      "12": "Límite de corriente para PAS5 fuera de rango, por favor reajuste.",
      "13": "Límite de velocidad para PAS5 fuera de rango, por favor, reajuste.",
      "14": "Límite de corriente para PAS6 fuera de rango, por favor reinicie.",
      "15": "Límite de velocidad para PAS6 fuera de rango, por favor reajuste.",
      "16": "Límite de corriente para PAS7 fuera de rango, por favor reinicie.",
      "17": "Límite de velocidad para PAS7 fuera de rango, por favor reajuste.",
      "18": "Límite de corriente para PAS8 fuera de rango, por favor reinicie.",
      "19": "Límite de velocidad para PAS8 fuera de rango, por favor reajuste.",
      "20": "Límite de corriente para PAS9 fuera de rango, por favor reinicie.",
      "21": "Límite de velocidad para PAS9 fuera de rango, por favor reajuste.",
      "22": "Diámetro de la rueda fuera de rango, por favor reinicie.",
      "23": "Señales del medidor de velocidad fuera de rango, por favor reinicie.",
      default: "Problema de comunicación, por favor reinicie.",
    },
    writePasErrors: {
      "0": "Error en el tipo de sensor del pedal, por favor reinicie.",
      "1": "Error en el nivel de asistencia designado, por favor reinicie.",
      "2": "Error de límite de velocidad, por favor, reinicie.",
      "3": "Corriente de inicio fuera de rango, por favor, reinicie.",
      "4": "Error en el modo de arranque lento, por favor, reinicie.",
      "5": "¡Grado de inicio fuera de rango, por favor reinicie!",
      "6": "Error en el modo de trabajo, por favor, reinicie.",
      "7": "Stop Delay fuera de rango, por favor reinicie.",
      "8": "Decaimiento actual fuera de rango, ¡por favor, reinicie!",
      "9": "¡Detener la descomposición fuera de rango, por favor, reiniciar!",
      "10": "Mantenga la corriente fuera del alcance, por favor reinicie.",
      default: "Error desconocido, por favor reinicie.",
    },
    writeThrErrors: {
      "0": "Tensión de arranque fuera de rango, por favor, reinicie.",
      "1": "Tensión final fuera de rango, por favor reinicie.",
      "2": "Error de modo, por favor, reinicie.",
      "3": "Error de asistencia designada, por favor, reinicie.",
      "4": "Error de límite de velocidad, por favor, reinicie.",
      "5": "Corriente de inicio fuera de rango, por favor, reinicie.",
      default: "Error desconocido, por favor reinicie.",
    },
  },
  mainRouter: {
    home: "Inicio",
    settings: "Ajustes",
    help: "Ayuda",
  },
  main: {
    label_language: "Idioma",
    object_Profile: {
      header: "Perfil",
      open: "Abrir",
      save_as: "Guardar como",
      save: "Guardar",
      default_configuration_string: "Configuración por defecto (no se especifica ningún archivo)",
      popup_header: "Guardar la configuración como",
      popup_placeholder: "Introduzca aquí el nombre del archivo",
      popup_button_label: "Guardar",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Leer",
      write_all: "Escriba",
      connect: "Conectar",
      disconnect: "Desconectar",
      status: {
        disconnected: "desconectado",
        connecting: "conectando",
        connected: "conectado",
        error: "error",
      },
      motor_info: {
        status: "Estado",
        manufacturer: "Fabricante",
        model: "Modelo",
        hardware_version: "Versión de hardware",
        firmware_version: "Versión del firmware",
        nominal_voltage: "Tensión nominal",
        max_current: "Corriente máxima",
      },
    },
  },
  settings: {
    toolbar: {
      general: "General",
      levels: "Niveles",
      pedal: "Pedal",
      throttle: "Acelerador",
    },
    header: {
      readButtonText: "Leer",
      writeButtonText: "Guardar",
    },
    tabs: {
      general: {
        header: "General",
        lowBatteryProtection: "Protección de batería baja",
        currentLimit: "Límite de corriente",
        speedMeterType: {
          text: "Tipo de medidor de velocidad",
          types: ["Externo, medidor de ruedas", "Interno, medidor de motor", "Por fase del motor"],
        },
        speedMeterSignals: "Señales del velocímetro",
        wheelDiameter: {
          text: "Diámetro de la rueda",
          types: [
            "16 pulgadas",
            "17 pulgadas",
            "18 pulgadas",
            "19 pulgadas",
            "20 pulgadas",
            "21 pulgadas",
            "22 pulgadas",
            "23 pulgadas",
            "24 pulgadas",
            "25 pulgadas",
            "26 pulgadas",
            "27 pulgadas",
            "700C",
            "28 pulgadas",
            "29 pulgadas",
            "30 pulgadas",
          ],
        },
      },
      levels: {
        header: "Niveles de asistencia",
        level: "Nivel",
        current: "Actual",
        speed: "Velocidad",
        popoverCurrentLimitHeader: "Límite de corriente para el nivel",
        popoverSpeedLimitHeader: "Límite de velocidad por nivel",
      },
      pedal: {
        header: "Asistencia al pedaleo",
        pedalSensorType: {
          text: "Tipo de sensor de pedal",
          types: ["Ninguno", "Sensor DH-12", "BB-Sensor-32", "Doble Señal-24"],
        },
        designatedAssistLevel: {
          text: "Nivel de asistencia designado",
          types: ["Por orden de la pantalla", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Límite de velocidad",
          types: [
            "Por orden de la pantalla",
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
        startCurrent: "Inicio Corriente",
        slowStartMode: "Modo de arranque lento",
        startDegree: "Inicio Grado",
        workMode: {
          text: "Modo de trabajo",
          types: ["Indeterminado"],
        },
        stopDelay: "Retraso en la parada",
        currentDecay: "Decaimiento de la corriente",
        stopDecay: "Detener el deterioro",
        keepCurrent: "Manténgase al día",
      },
      throttle: {
        header: "Asistencia al Acelerador",
        startVoltage: "Tensión inicial",
        endVoltage: "Tensión final",
        mode: {
          text: "Modo",
          types: ["Velocidad", "Actual"],
        },
        designatedAssistLevel: {
          text: "Nivel de asistencia designado",
          types: ["Por orden de la pantalla", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Límite de velocidad",
          types: [
            "Por orden de la pantalla",
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
        startCurrent: "Inicio Corriente",
      },
    },
  },
  help: {
    about: {
      header: "Sobre la aplicación",
      p1: "Herramienta de configuración para la serie de motores Bafang BBS.",
      author: "Autor",
    },
    connection: {
      header: "Conexión",
      p1:
        "Para conectar al controlador de su bicicleta eléctrica de la serie Bafang BBS necesita un adaptador USB-OTG, adaptador USB a Serial con conectores de pines hembra tipo Julet en el extremo.",
      p2:
        'También puede comprar un cable de programación USB "original", pero no es más que un adaptador de USB a serie demasiado caro con el conector adecuado para el cable de su controlador BBS.',
    },
    general: {
      header: "General",
      lowBatteryProtection:
        "Este es el voltaje al que el controlador detendrá el motor para mantener su batería a salvo de la sobredescarga. Debe ser ajustado por el fabricante correctamente y no es necesario cambiarlo. Para los paquetes de baterías 13S 41V es el valor por defecto.",
      currentLimit:
        "Esta es la corriente máxima permitida para el flujo a través del motor. Si su motor es de 25A, por ejemplo, puede ajustarlo a 20A para mantenerlo seguro si lo desea. No se recomienda ajustar una corriente superior a la nominal. Incluso si se ajusta a 25A, la corriente máxima será mayor, por lo que es mejor no ajustar más que eso.",
      speedMeterType:
        "Este selecciona el medidor de velocidad utilizado en su bicicleta. Para los kits BBS es externo. Este parámetro es establecido por el fabricante y si su configuración no es personalizada entonces no necesita cambiarlo.",
      speedMeterSignals:
        "Aquí puedes establecer cuántas señales por revolución genera tu sensor. Si usas el sensor externo con imán genera una señal por revolución de la rueda. Este parámetro lo establece el fabricante y si tu configuración no es personalizada no necesitas cambiarlo.",
      wheelDiameter:
        "El diámetro de la rueda debe coincidir con el tamaño de la rueda motriz (de ahí que su bicicleta pueda tener dos tamaños de rueda diferentes). Ajustar el diámetro a un tamaño inferior al que realmente tiene aumentará su velocidad pero también puede provocar fácilmente daños en el motor.",
      endText:
        "Cuando hayas terminado de ajustar tus parámetros generales, puedes utilizar el botón ESCRIBIR en esta pestaña del programa para escribirlos en tu controlador. También puede usar el botón LEER en cualquier momento para leerlos (esto reemplazará todos los valores en el General. Esto no sobrescribirá ningún otro ajuste.",
    },
    levels: {
      header: "Niveles de asistencia",
      p1:
        "Esas son todas las configuraciones de asistencia posibles (tanto para la asistencia al pedaleo como para la manija del acelerador usando una de ellas).",
      p2:
        "Es importante mencionar que la corriente y los límites de velocidad del Pedal Assist 0 deben estar configurados en 1 si quieres poder utilizar el puño de gas con el Pedal Assist 0 seleccionado en tu LCD.",
      p3:
        "Por lo general, la asistencia 0 se ajusta a 0 para que pueda utilizar la bicicleta sin asistencia si lo desea.",
      p4:
        "Tenga cuidado al ajustar estos niveles. Si ajusta la corriente demasiado baja, el motor no será capaz de mover la bicicleta y podría sufrir algún daño. Si ajusta la corriente del primer nivel de asistencia demasiado alta, la aceleración en el arranque será considerable. Esto podría dañar los engranajes internos o hacerle caer de la bicicleta.",
      p5:
        "El límite de velocidad establece a qué velocidad (% de la velocidad máxima establecida desde su LCD) el motor reducirá su potencia y sólo mantendrá esa velocidad en lugar de acelerar más.",
      p6:
        "Los interruptores situados en la parte superior de la aplicación permiten mostrar los valores convertidos automáticamente (corriente y velocidad o porcentajes)",
      endText:
        "Cuando hayas terminado de ajustar tus niveles de asistencia, puedes utilizar el botón ESCRIBIR en esta pestaña del programa para escribirlos en tu controlador. También puede usar el botón LEER en cualquier momento para leerlos (esto reemplazará todos los valores en los Niveles de Asistencia. Esto no sobrescribirá ningún otro ajuste.",
    },
    pedal: {
      header: "Asistencia al pedaleo",
      p1:
        "El sistema de asistencia al pedaleo te asiste mientras pedaleas. En esta pestaña puedes ajustar su rendimiento. Algunas de ellas no deberías cambiarlas ya que son específicas de tu kit. Esos los establece el fabricante.",
      pedalSensorType:
        "Este parámetro selecciona el tipo de sensor de rotación del pedal. Lo establece el fabricante y no debe modificarse.",
      designatedAssistLevel:
        'Con este parámetro se pueden seleccionar dos tipos de operación. El primero es "Por orden de la pantalla". Esto significa que el nivel de asistencia (el de la pestaña de ajustes básicos) se seleccionará desde su LCD. La segunda opción es elegir un nivel de asistencia específico que será fijo y no podrá cambiarlo desde la pantalla LCD. Para ello puede seleccionar cualquier nivel de asistencia de 0 a 9.',
      speedLimit:
        'Esta es la velocidad máxima a la que el motor proporcionará una aceleración adicional. Cuando se alcanza la velocidad sólo la mantendrá pero no acelerará más. Si ajusta este parámetro a "Por orden de la pantalla" podrá ajustar la velocidad desde su LCD. Ten en cuenta que algunos LCDs permiten establecer una velocidad de 99km/h lo cual no es posible al menos con los actuales kits de BBS. Por lo que he probado, la velocidad máxima sin pedalear es de 40km/h (cuando el tamaño de la rueda está ajustado correctamente). Este ajuste se utiliza para todos los niveles de asistencia que se ven en la pestaña Básica. Si usted ajusta esto a 40km/h (en este programa o desde su LCD) y su nivel de asistencia 5 está ajustado a un 50% de velocidad, entonces usted podrá alcanzar 20km/h en ese nivel de asistencia.',
      startCurrent:
        "Esta es la corriente de arranque cuando empiezas a girar los pedales. Es bueno ajustar este valor al menos al 10% para asegurarse de que la bicicleta comenzará a moverse y el motor no se calará. Un valor muy alto hará que la bicicleta acelere muy rápido en el arranque, lo que podría dañar sus engranajes internos y también el motor. El valor recomendado es uno entre el 10% y el 30%. También debes asegurarte de no empezar a pedalear con una marcha demasiado alta que cargue demasiado el motor.",
      slowStartMode:
        "Este ajuste controla la rapidez con la que se alcanza la corriente de arranque. Puede hacer que su bicicleta acelere suavemente y que responda rápidamente. Un valor alrededor de 4 suele funcionar bien para el ciclismo normal. Si usted es un ciclista de montaña, el ajuste a un valor bajo hará que la aceleración sea más rápida, lo que podría ser útil, pero debe tener cuidado de no freír su controlador y el motor.",
      startDegree:
        "Este parámetro establece cuántos impulsos del sensor del pedal se necesitan antes de que el motor se ponga en marcha. Una revolución completa del pedal en los kits BBS genera 24 pulsos. Ajustar esto a 0 o 1 no funcionará. Un valor alrededor de 4 funciona bien ya que no se inicia con un pequeño movimiento y tampoco requiere demasiada rotación.",
      workMode:
        "El propósito de este parámetro no está muy claro. Se supone que controla la potencia según la velocidad de rotación del pedal. El valor establecido por el fabricante parece funcionar bien, por lo que no es necesario cambiarlo.",
      stopDelay:
        "Este es el retraso después de dejar de pedalear antes de que el motor se detenga. El valor de 250ms funciona bien.",
      currentDecay:
        "Este parámetro establece la rapidez con la que baja la corriente cuando se pedalea rápido y se alcanza la velocidad máxima con el nivel de asistencia seleccionado. Un valor más bajo significa que la corriente comenzará a caer a una velocidad más baja.",
      stopDecay: "El tiempo que tarda el motor en pararse.",
      keepCurrent:
        "Este ajuste controla el porcentaje de la corriente máxima en el nivel de asistencia seleccionado que fluirá a través del motor cuando usted alcance la velocidad máxima y siga pedaleando. Así, si tu corriente máxima es de 25A y utilizas la asistencia al pedaleo 5 ajustada al 50% de corriente, entonces tendrás una corriente máxima de 12,5A para este nivel de asistencia. Entonces, si la corriente de mantenimiento se ajusta al 50%, cuando se alcanza la velocidad máxima y se sigue pedaleando, la corriente se mantendrá en 6,25 A. Esto asegura una transición suave a la potencia de asistencia cuando se reduce la velocidad de pedaleo y la velocidad de desplazamiento cae por debajo del máximo.",
      endText:
        "Cuando hayas terminado de afinar los ajustes del Pedal Assist puedes utilizar el botón WRITE en esta pestaña del programa para escribirlos en tu controlador. También puedes usar el botón READ en cualquier momento para leerlos (esto reemplazará todos los valores en el Pedal Assist. Esto no sobrescribirá ningún otro ajuste.",
    },
    throttle: {
      header: "Mango del acelerador",
      p1:
        "Si su kit está equipado con maneta de aceleración, esta pestaña le permite configurar su funcionamiento. Asegúrese de que Assis 0 está ajustado a 1 (tanto en corriente como en velocidad) si quiere utilizarlo cuando Pedal Assist S0 está seleccionado en su LCD.",
      startVoltage:
        "Este es el voltaje de salida del mando del acelerador al que el motor arrancará. El mínimo al que responde el controlador es de 1,1V",
      endVoltage:
        "Esta es la tensión de salida del mando del acelerador a la que el motor alcanzará su máxima potencia (limitada por otros ajustes). El máximo aceptado por el controlador es de 4,2V. Tienes que jugar un poco con este parámetro ya que el máximo del puño de gas puede ser diferente dependiendo del modelo. Si ajustas este parámetro demasiado bajo no obtendrás casi ninguna respuesta del puño de gas. Si lo ajustas al máximo que puede producir el mando obtendrás el mayor rango posible de control sobre la potencia del motor.",
      mode:
        "Este es el modo de funcionamiento del puño de gas. Tiene dos opciones: velocidad y corriente. Cuando se ajusta a la velocidad, el controlador utiliza la velocidad en movimiento para ajustar la potencia del motor de acuerdo con la posición de la manija del acelerador. Desafortunadamente hay un retraso significativo debido a la forma en que se mide la velocidad y la respuesta es bastante mala en este modo. Cuando se ajusta a la corriente, la manivela controla la corriente del motor según su posición. Este modo funciona mejor y es similar al funcionamiento de un coche.",
      designatedAssistLevel:
        'Puede ajustarlo a "Por orden de la pantalla" o seleccionar un nivel fijo. La primera opción utiliza el ajuste de PAS de su LCD. Esto significa que la potencia máxima y la velocidad dependen del nivel de PAS seleccionado y de la posición del puño de gas. Por lo tanto, si se selecciona un PAS bajo, la corriente y la velocidad máximas también serán bajas, incluso si se acciona el acelerador al máximo. Si se selecciona un nivel de asistencia fijo para este parámetro, el puño de gas utilizará su máxima corriente y velocidad. Ten cuidado si ajustas esto al nivel 9 para no empujar el acelerador al máximo cuando estés parado porque la alta corriente y la potencia podrían dañar el controlador y el motor.',
      speedLimit:
        "Con este parámetro se puede limitar la velocidad máxima cuando se utiliza el mango del acelerador. Esto sobrescribe la velocidad máxima del nivel de asistencia designado si es mayor.",
      startCurrent:
        "Es el porcentaje de la corriente máxima aplicada al motor cuando la manivela del acelerador genera la tensión mínima aceptada. Normalmente un valor de 10% o 20% funciona bien. Si tu corriente máxima en la pestaña General está ajustada a 25A y la Corriente de Arranque está ajustada al 10% obtendrás una corriente de arranque de 2,5A. Esto conducirá a un arranque suave y no cargará demasiado los engranajes internos. Si ajusta este parámetro a un valor muy alto puede dañar los engranajes internos y el motor.",
      endText:
        "Cuando hayas terminado de ajustar los valores del mando del acelerador, puedes utilizar el botón ESCRIBIR en esta pestaña del programa para escribirlos en tu controlador. También puedes usar el botón LEER en cualquier momento para leerlos (esto reemplazará todos los valores en el mando del acelerador. Esto no sobrescribirá ninguna otra configuración.",
    },
  },
};

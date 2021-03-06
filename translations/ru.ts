import { Translation } from "./type";

export const ru: Translation = {
  messages: {
    processing: "Обработка...",
    deviceIsDisconnected: "Устройство отключено!",
    connectingInProgress: "Подключение в процессе...",
    settingsHaveBeenSaved: "Ваши настройки были сохранены!",
    configLoadedSuccessful: "Конфигурация загружена успешно!",
    overrideFileWarning: {
      header: "Внимание!",
      message: {
        theFileText: "Файл",
        areYouSureToOverrideText: "существует! Вы уверены, что хотите переопределить этот файл?",
      },
      buttons: {
        yes: "Переопределение",
        no: "Нет",
      },
    },
    unsupportedConfigurationFile: {
      header: "Ошибка!",
      text: "Неподдерживаемый или поврежденный файл конфигурации!",
    },
    pleaseWait: "Пожалуйста, подождите...",
    connectingToMotor: "Подключение к двигателю...",
    noDeviceFound: "Устройство не найдено!",
    cantEstablishingConnection:
      "Не удается установить соединение с двигателем! Проверьте конец соединения и перезапустите!",
    connectedTo: "Подключен к",
    readBasSuccess: {
      basTypeLevel: "Уровни",
      basTypeGeneral: "Общий",
      first: "Читать",
      second: "параметры успешно!",
    },
    readPedalAssistSuccess: "Считывание параметров Pedal Assist успешно!",
    readThrottleHandleSuccess: "Успешное считывание параметров ручки дроссельной заслонки",
    readAllSuccess: "Успешное считывание всех параметров!",
    somethingWentWrong: "Что-то пошло не так! Журнал:",
    writeSuccess: {
      levels: "Уровни",
      general: "Общий",
      pedalAssist: "Педальный ассистент",
      throttleHandle: "Ручка дроссельной заслонки",
      first: "Пишите",
      second: "параметры успешно!",
    },
    writeAllSuccess: "Запись всех параметров прошла успешно!",
  },
  buttons: {
    cancel: "Отмена",
  },
  errors: {
    writeBasErrors: {
      "0": "Низкий заряд батареи Защита вне диапазона, пожалуйста, сбросьте!",
      "1": "Предел тока вне диапазона, пожалуйста, сбросьте!",
      "2": "Ограничение тока для PAS0 вне диапазона, пожалуйста, сбросьте!",
      "3": "Ограничение скорости для PAS0 вне диапазона, пожалуйста, сбросьте!",
      "4": "Ограничение тока для PAS1 вне диапазона, пожалуйста, сбросьте!",
      "5": "Ограничение скорости для PAS1 вне диапазона, пожалуйста, сбросьте!",
      "6": "Ограничение тока для PAS2 вне диапазона, пожалуйста, сбросьте!",
      "7": "Ограничение скорости для PAS2 вне диапазона, пожалуйста, сбросьте!",
      "8": "Ограничение тока для PAS3 вне диапазона, пожалуйста, сбросьте!",
      "9": "Ограничение скорости для PAS3 вне диапазона, пожалуйста, сбросьте!",
      "10": "Ограничение тока для PAS4 вне диапазона, пожалуйста, сбросьте!",
      "11": "Ограничение скорости для PAS4 вне диапазона, пожалуйста, сбросьте!",
      "12": "Ограничение тока для PAS5 вне диапазона, пожалуйста, сбросьте!",
      "13": "Ограничение скорости для PAS5 вне диапазона, пожалуйста, сбросьте!",
      "14": "Ограничение тока для PAS6 вне диапазона, пожалуйста, сбросьте!",
      "15": "Ограничение скорости для PAS6 вне диапазона, пожалуйста, сбросьте!",
      "16": "Ограничение тока для PAS7 вне диапазона, пожалуйста, сбросьте!",
      "17": "Ограничение скорости для PAS7 вне диапазона, пожалуйста, сбросьте!",
      "18": "Ограничение тока для PAS8 вне диапазона, пожалуйста, сбросьте!",
      "19": "Ограничение скорости для PAS8 вне диапазона, пожалуйста, сбросьте!",
      "20": "Предел тока для PAS9 вне диапазона, пожалуйста, сбросьте!",
      "21": "Ограничение скорости для PAS9 вне диапазона, пожалуйста, сбросьте!",
      "22": "Диаметр колеса вне диапазона, пожалуйста, сбросьте!",
      "23": "Сигналы измерителя скорости вне диапазона, пожалуйста, сбросьте!",
      default: "Проблема со связью, пожалуйста, перезагрузитесь!",
    },
    writePasErrors: {
      "0": "Ошибка типа датчика педали, пожалуйста, сбросьте!",
      "1": "Ошибка Designated Assist Level, пожалуйста, сбросьте!",
      "2": "Ошибка ограничения скорости, пожалуйста, сбросьте!",
      "3": "Start Current вне диапазона, пожалуйста, сбросьте!",
      "4": "Ошибка режима медленного запуска, пожалуйста, сбросьте!",
      "5": "Start Degree вне зоны доступа, пожалуйста, сбросьте!",
      "6": "Ошибка рабочего режима, пожалуйста, перезагрузитесь!",
      "7": "Stop Delay вне зоны доступа, пожалуйста, сбросьте!",
      "8": "Current Decay вне диапазона, пожалуйста, перезагрузите!",
      "9": "Stop Decay вне зоны доступа, пожалуйста, сбросьте!",
      "10": "Держите ток вне зоны действия, пожалуйста, сбросьте!",
      default: "Неизвестная ошибка, пожалуйста, перезагрузитесь!",
    },
    writeThrErrors: {
      "0": "Стартовое напряжение вне диапазона, пожалуйста, сбросьте!",
      "1": "Конечное напряжение вне диапазона, пожалуйста, сбросьте!",
      "2": "Ошибка режима, пожалуйста, перезагрузите!",
      "3": "Ошибка Designated Assist, пожалуйста, сбросьте!",
      "4": "Ошибка ограничения скорости, пожалуйста, сбросьте!",
      "5": "Start Current вне диапазона, пожалуйста, сбросьте!",
      default: "Неизвестная ошибка, пожалуйста, перезагрузитесь!",
    },
  },
  mainRouter: {
    home: "Главная",
    settings: "Настройки",
    help: "Помощь",
  },
  main: {
    label_language: "Язык",
    object_Profile: {
      header: "Профиль",
      open: "Открыть",
      save_as: "Сохранить как",
      save: "Сохранить",
      default_configuration_string: "Конфигурация по умолчанию (файл не указан)",
      popup_header: "Сохранить конфигурацию как",
      popup_placeholder: "Введите имя файла здесь",
      popup_button_label: "Сохранить",
    },
    object_Motor: {
      header: "Двигатель",
      read_all: "Читать",
      write_all: "Пишите",
      connect: "Подключайтесь",
      disconnect: "Отключить",
      status: {
        disconnected: "отключено",
        connecting: "подключение",
        connected: "подключен",
        error: "ошибка",
      },
      motor_info: {
        status: "Статус",
        manufacturer: "Производитель",
        model: "Модель",
        hardware_version: "Версия оборудования",
        firmware_version: "Версия микропрограммы",
        nominal_voltage: "Номинальное напряжение",
        max_current: "Максимальный ток",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Общий",
      levels: "Уровни",
      pedal: "Педаль",
      throttle: "Дроссельная заслонка",
    },
    header: {
      readButtonText: "Читать",
      writeButtonText: "Сохранить",
    },
    tabs: {
      general: {
        header: "Общий",
        lowBatteryProtection: "Защита от низкого заряда батареи",
        currentLimit: "Ограничение тока",
        speedMeterType: {
          text: "Тип измерителя скорости",
          types: ["Внешний, колесный измеритель", "Внутренний, моторный измеритель", "По фазам двигателя"],
        },
        speedMeterSignals: "Сигналы измерителя скорости",
        wheelDiameter: {
          text: "Диаметр колеса",
          types: [
            "16 дюймов",
            "17 дюймов",
            "18 дюймов",
            "19 дюймов",
            "20 дюймов",
            "21 дюйм",
            "22 дюйма",
            "23 дюйма",
            "24 дюйма",
            "25 дюймов",
            "26 дюймов",
            "27 дюймов",
            "700C",
            "28 дюймов",
            "29 дюймов",
            "30 дюймов",
          ],
        },
      },
      levels: {
        header: "Уровни помощи",
        level: "Уровень",
        current: "Текущий",
        speed: "Скорость",
        popoverCurrentLimitHeader: "Ограничение тока для уровня",
        popoverSpeedLimitHeader: "Ограничение скорости для уровня",
      },
      pedal: {
        header: "Педальный ассистент",
        pedalSensorType: {
          text: "Тип датчика педали",
          types: ["Нет", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Назначенный уровень помощи",
          types: ["По велению дисплея", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Ограничение скорости",
          types: [
            "По велению дисплея",
            "15 км/ч",
            "16 км/ч",
            "17 км/ч",
            "18 км/ч",
            "19 км/ч",
            "20 км/ч",
            "21 км/ч",
            "22 км/ч",
            "23 км/ч",
            "24 км/ч",
            "25 км/ч",
            "26 км/ч",
            "27 км/ч",
            "28 км/ч",
            "29 км/ч",
            "30 км/ч",
            "31 км/ч",
            "32 км/ч",
            "33 км/ч",
            "34 км/ч",
            "35 км/ч",
            "36 км/ч",
            "37 км/ч",
            "38 км/ч",
            "39 км/ч",
            "40 км/ч",
          ],
        },
        startCurrent: "Начальный ток",
        slowStartMode: "Режим медленного запуска",
        startDegree: "Начальная степень",
        workMode: {
          text: "Режим работы",
          types: ["Не определено"],
        },
        stopDelay: "Задержка остановки",
        currentDecay: "Текущий распад",
        stopDecay: "Остановить распад",
        keepCurrent: "Поддерживать актуальность",
      },
      throttle: {
        header: "Дроссельная заслонка",
        startVoltage: "Стартовое напряжение",
        endVoltage: "Конечное напряжение",
        mode: {
          text: "Режим",
          types: ["Скорость", "Текущий"],
        },
        designatedAssistLevel: {
          text: "Назначенный уровень помощи",
          types: ["По велению дисплея", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Ограничение скорости",
          types: [
            "По велению дисплея",
            "15 км/ч",
            "16 км/ч",
            "17 км/ч",
            "18 км/ч",
            "19 км/ч",
            "20 км/ч",
            "21 км/ч",
            "22 км/ч",
            "23 км/ч",
            "24 км/ч",
            "25 км/ч",
            "26 км/ч",
            "27 км/ч",
            "28 км/ч",
            "29 км/ч",
            "30 км/ч",
            "31 км/ч",
            "32 км/ч",
            "33 км/ч",
            "34 км/ч",
            "35 км/ч",
            "36 км/ч",
            "37 км/ч",
            "38 км/ч",
            "39 км/ч",
            "40 км/ч",
          ],
        },
        startCurrent: "Начальный ток",
      },
    },
  },
  help: {
    about: {
      header: "О применении",
      p1: "Инструмент конфигурирования для двигателей Bafang серии BBS.",
      author: "Автор",
    },
    connection: {
      header: "Подключение",
      p1:
        "Для подключения к контроллеру вашего электровелосипеда серии Bafang BBS вам понадобится адаптер USB-OTG, переходник с USB на Serial с разъемами типа Julet с женским штырьком на конце.",
      p2:
        'Вы также можете купить "оригинальный" USB-кабель для программирования, но это просто завышенная цена на переходник с USB на последовательный порт с соответствующим разъемом для кабеля на контроллере BBS.',
    },
    general: {
      header: "Общий",
      lowBatteryProtection:
        "Это напряжение, при котором контроллер остановит двигатель, чтобы обезопасить аккумулятор от переразряда. Оно должно быть правильно установлено производителем, и вам не нужно его менять. Для батарей 13S по умолчанию используется напряжение 41 В.",
      currentLimit:
        "Это максимальный ток, который может протекать через двигатель. Например, если ваш двигатель рассчитан на ток 25 А, вы можете установить значение 20 А для обеспечения безопасности. Не рекомендуется устанавливать ток выше номинального. Даже при 25 А пиковый ток будет выше, поэтому лучше не устанавливать больше этого значения.",
      speedMeterType:
        "Этот параметр выбирает измеритель скорости, используемый на велосипеде. Для комплектов BBS он является внешним. Этот параметр устанавливается производителем, и если ваша настройка не является пользовательской, то вам не нужно его менять.",
      speedMeterSignals:
        "Здесь вы можете установить, сколько сигналов на оборот генерирует ваш датчик. Если вы используете внешний датчик с магнитом, он генерирует один сигнал на оборот колеса. Этот параметр устанавливается производителем, и если ваша настройка не является пользовательской, то вам не нужно его изменять.",
      wheelDiameter:
        "Диаметр колеса должен соответствовать размеру ведущего колеса (поэтому у вашего велосипеда может быть два колеса разного размера). Установка меньшего диаметра, чем есть на самом деле, увеличит вашу скорость, но также может легко привести к повреждению двигателя.",
      endText:
        "Когда вы закончите настройку общих параметров, вы можете использовать кнопку WRITE на этой вкладке программы, чтобы записать их в контроллер. Вы также можете использовать кнопку READ в любое время, чтобы прочитать их (при этом все значения в General будут заменены. При этом не будут перезаписаны никакие другие настройки.",
    },
    levels: {
      header: "Уровни помощи",
      p1:
        "Это все возможные настройки помощи (как для педальной помощи, так и для ручки газа при использовании одной из них).",
      p2:
        "Важно отметить, что ток Assist 0 и ограничения скорости должны быть установлены на 1, если вы хотите иметь возможность использовать ручку газа при выбранном на ЖК-дисплее Pedal Assist 0.",
      p3:
        "Обычно значение Assist 0 устанавливается на 0, чтобы вы могли использовать велосипед без посторонней помощи, если хотите.",
      p4:
        "Будьте осторожны, устанавливая эти уровни. Если вы установите слишком низкий ток, двигатель не сможет двигать велосипед, и он может получить некоторые повреждения. Если вы установите слишком высокий ток первого уровня помощи, то ускорение при старте будет значительным. Это может повредить внутренние шестерни или привести к падению велосипеда.",
      p5:
        "Ограничение скорости устанавливает, при какой скорости (% от максимальной скорости, установленной на вашем ЖК-дисплее) двигатель будет снижать свою мощность и просто поддерживать эту скорость вместо того, чтобы ускоряться больше.",
      p6:
        "Переключатели в верхней части приложения позволяют отображать автоматически преобразованные значения (ток и проценты спидора)",
      endText:
        "Когда вы закончите настройку параметров Assist Levels, вы можете использовать кнопку WRITE на этой вкладке программы, чтобы записать их в контроллер. Вы также можете в любое время воспользоваться кнопкой READ, чтобы считать эти настройки (при этом все значения в Assist Levels будут заменены. При этом не будут перезаписаны никакие другие настройки.",
    },
    pedal: {
      header: "Педальный ассистент",
      p1:
        "Система Pedal Assist помогает вам во время педалирования. На этой вкладке вы можете настроить ее работу. Некоторые из них вы не должны изменять, так как они специфичны для вашего комплекта. Эти параметры устанавливаются производителем.",
      pedalSensorType:
        "Этот параметр выбирает тип датчика вращения педали. Он устанавливается производителем и не подлежит изменению.",
      designatedAssistLevel:
        'С помощью этого параметра можно выбрать два типа работы. Первый - "По команде дисплея". Это означает, что уровень помощи (тот, который указан на вкладке "Основные настройки") будет выбран с вашего ЖК-дисплея. Второй вариант - выбрать определенный уровень помощи, который будет фиксированным, и вы не сможете изменить его с ЖК-дисплея. Для этого вы можете выбрать любой уровень помощи от 0 до 9.',
      speedLimit:
        'Это максимальная скорость, при которой двигатель обеспечит дополнительное ускорение. При достижении этой скорости он будет только поддерживать ее, но не будет ускоряться больше. Если вы установите для этого параметра значение "По команде дисплея", вы сможете задавать скорость с вашего ЖК-дисплея. Имейте в виду, что некоторые ЖК-дисплеи позволяют установить скорость 99 км/ч, что невозможно, по крайней мере, с текущими комплектами BBS. Насколько мне удалось проверить, максимальная скорость без педалирования составляет 40 км/ч (при правильной установке размера колеса). Эта настройка используется для всех уровней помощи, которые вы видите на вкладке Basic. Если вы установите значение 40 км/ч (в этой программе или на ЖК-дисплее), а уровень Assist 5 будет установлен на 50% скорости, то вы сможете достичь 20 км/ч на этом уровне помощи.',
      startCurrent:
        "Это ток запуска, когда вы начинаете вращать педали. Хорошо, если этот параметр составляет не менее 10%, чтобы убедиться, что велосипед начнет движение и двигатель не заглохнет. Если установить очень высокое значение, велосипед будет очень быстро разгоняться при старте, что может привести к повреждению внутренних шестеренок и двигателя. Рекомендуемое значение - от 10% до 30%. Также следует убедиться, что вы не начинаете крутить педали на слишком высокой передаче, что приведет к чрезмерной нагрузке на двигатель.",
      slowStartMode:
        "Эта настройка управляет тем, как быстро достигается стартовый ток. Вы можете придать велосипеду плавный разгон и заставить его быстро реагировать. Значение около 4 обычно хорошо подходит для обычной езды на велосипеде. Если вы катаетесь на горном велосипеде, то при установке низкого значения ускорение будет более быстрым, что может быть полезно, но вы должны быть осторожны, чтобы не поджарить контроллер и двигатель.",
      startDegree:
        "Этот параметр устанавливает, сколько импульсов от датчика педали необходимо для запуска двигателя. Полный оборот педали на комплектах BBS генерирует 24 импульса. Установка этого параметра в 0 или 1 не будет работать. Значение около 4 работает хорошо, так как не запускается при небольшом движении, а также не требует слишком большого вращения.",
      workMode:
        "Назначение этого параметра не совсем понятно. Предполагается, что он регулирует мощность в зависимости от скорости вращения педали. Значение, установленное производителем, кажется, работает отлично, поэтому вам не нужно его менять.",
      stopDelay:
        "Это задержка после прекращения вращения педалей перед остановкой двигателя. Значение 250 мс работает хорошо.",
      currentDecay:
        "Этот параметр задает скорость падения тока при ускоренном педалировании и достижении максимальной скорости при выбранном уровне помощи. Меньшее значение означает, что ток начнет падать при более низкой скорости.",
      stopDecay: "Количество времени, которое требуется двигателю для остановки.",
      keepCurrent:
        "Эта настройка контролирует процент от максимального тока на выбранном уровне помощи, который будет протекать через двигатель, когда вы достигнете максимальной скорости и продолжите крутить педали. Так, если ваш максимальный ток составляет 25 А, а вы используете Pedal Assist 5, установленный на 50%, то для этого уровня помощи максимальный ток составит 12,5 А. Затем, если параметр Keep Current установлен на 50%, когда достигнута максимальная скорость и вы продолжаете крутить педали, ток будет поддерживаться на уровне 6,25А. Это обеспечивает плавный переход на мощность ассистирования, когда вы снижаете скорость педалирования и скорость движения падает ниже максимальной.",
      endText:
        "Когда вы закончите настройку параметров Pedal Assist, вы можете использовать кнопку WRITE на этой вкладке программы, чтобы записать их в контроллер. Вы также можете в любое время воспользоваться кнопкой READ, чтобы считать их (при этом все значения на педали помощника будут заменены. При этом не будут перезаписаны никакие другие настройки.",
    },
    throttle: {
      header: "Ручка дроссельной заслонки",
      p1:
        "Если ваш комплект оснащен ручкой газа, эта вкладка позволяет настроить ее работу. Убедитесь, что Assis 0 установлен на 1 (и ток, и скорость), если вы хотите использовать его, когда на ЖК-дисплее выбран Pedal Assist S0.",
      startVoltage:
        "Это выходное напряжение ручки дросселя, при котором двигатель запустится. Минимальное напряжение, при котором контроллер реагирует, составляет 1,1 В.",
      endVoltage:
        "Это выходное напряжение ручки дросселя, при котором двигатель достигнет максимальной мощности (ограничено другими настройками). Максимальное напряжение, принимаемое от контроллера, составляет 4,2 В. Вам нужно немного поиграть с этим параметром, так как максимальное значение ручки дросселя может отличаться в зависимости от модели. Если вы установите этот параметр слишком низко, вы не получите почти никакого отклика от ручки газа. При установке максимального значения, которое может выдать ручка, вы получите максимально возможный диапазон контроля над мощностью двигателя.",
      mode:
        "Это режим работы ручки дросселя. У вас есть два варианта: скорость и ток. При выборе скоростного режима контроллер использует скорость движения для установки мощности двигателя в соответствии с положением ручки дросселя. К сожалению, существует значительная задержка из-за способа измерения скорости, и реакция в этом режиме довольно плохая. Если установлен режим тока, ручка управляет током двигателя в соответствии со своим положением. Этот режим работает лучше и похож на работу автомобиля.",
      designatedAssistLevel:
        'Вы можете установить значение "По команде дисплея" или выбрать фиксированный уровень. Первый вариант использует настройки PAS с вашего ЖК-дисплея. Это означает, что максимальная выходная мощность и скорость зависят от выбранного уровня PAS и положения ручки газа. Таким образом, если выбран низкий уровень PAS, максимальная мощность и скорость будут низкими, даже если вы нажмете дроссель на максимум. Если для этого параметра выбран фиксированный уровень помощи, ручка дросселя будет использовать максимальный ток и скорость. Будьте осторожны, если вы установили этот параметр на уровень 9, не нажимайте дроссельную заслонку до максимума во время остановки, так как высокий ток и мощность могут повредить контроллер и двигатель.',
      speedLimit:
        "С помощью этого параметра можно ограничить максимальную скорость при использовании ручки газа. При этом максимальная скорость переписывается с максимальной скоростью назначенного уровня помощи, если она выше.",
      startCurrent:
        "Это процент от максимального тока, подаваемого на двигатель, когда ручка дроссельной заслонки генерирует минимально допустимое напряжение. Обычно хорошо работает значение 10% или 20%. Если максимальный ток на вкладке General установлен на 25A, а Start Current установлен на 10%, вы получите ток запуска 2,5A. Это приведет к плавному запуску и не будет слишком сильно нагружать внутренние шестерни. Если вы установите этот параметр на очень высокое значение, вы можете повредить внутренние шестерни и двигатель.",
      endText:
        "Когда вы закончите настройку параметров ручки дросселя, вы можете использовать кнопку WRITE на этой вкладке программы, чтобы записать их в контроллер. Вы также можете в любое время воспользоваться кнопкой READ, чтобы считать их (при этом все значения на ручке дросселя будут заменены. При этом не будут перезаписаны никакие другие настройки.",
    },
  },
};

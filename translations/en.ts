import { Translation } from "./type";

export const en: Translation = {
  messages: {
    processing: "Processing...",
    deviceIsDisconnected: "Device is disconnected!",
    connectingInProgress: "Connecting in progress...",
    settingsHaveBeenSaved: "Your settings have been saved!",
    configLoadedSuccessful: "Config loaded successful!",
    overrideFileWarning: {
      header: "Warning!",
      message: {
        theFileText: "The file",
        areYouSureToOverrideText: "exist! Are you sure you want to override this file?",
      },
      buttons: {
        yes: "Override",
        no: "No",
      },
    },
    unsupportedConfigurationFile: {
      header: "Error!",
      text: "Unsupported or broken configuration file!",
    },
    pleaseWait: "Please wait...",
    connectingToMotor: "Connecting to motor...",
    noDeviceFound: "No device found!",
    cantEstablishingConnection: "Can not establishing connection with engine! Check connection end restart!",
    connectedTo: "Connected to",
    readBasSuccess: {
      basTypeLevel: "Levels",
      basTypeGeneral: "General",
      first: "Read",
      second: "parameters successfully!",
    },
    readPedalAssistSuccess: "Read Pedal Assist parameters successfully!",
    readThrottleHandleSuccess: "Reading Throttle Handle parameters successfully",
    readAllSuccess: "Read all parameters successfully!",
    somethingWentWrong: "Something went wrong! Log:",
    writeSuccess: {
      levels: "Levels",
      general: "General",
      pedalAssist: "Pedal Assist",
      throttleHandle: "Throttle Handle",
      first: "Write",
      second: "parameters successfully!",
    },
    writeAllSuccess: "Write All parameters successfully!",
  },
  buttons: {
    cancel: "Cancel",
  },
  errors: {
    writeBasErrors: {
      default: "Communication problem, please reset!",
      "0": "Low Battery Protection out of range, please reset!",
      "1": "Current Limit out of range, please reset!",
      "2": "Current Limit for PAS0 out of range, please reset!",
      "4": "Current Limit for PAS1 out of range, please reset!",
      "6": "Current Limit for PAS2 out of range, please reset!",
      "8": "Current Limit for PAS3 out of range, please reset!",
      "10": "Current Limit for PAS4 out of range, please reset!",
      "12": "Current Limit for PAS5 out of range, please reset!",
      "14": "Current Limit for PAS6 out of range, please reset!",
      "16": "Current Limit for PAS7 out of range, please reset!",
      "18": "Current Limit for PAS8 out of range, please reset!",
      "20": "Current Limit for PAS9 out of range, please reset!",
      "3": "Speed Limit for PAS0 out of range, please reset!",
      "5": "Speed Limit for PAS1 out of range, please reset!",
      "7": "Speed Limit for PAS2 out of range, please reset!",
      "9": "Speed Limit for PAS3 out of range, please reset!",
      "11": "Speed Limit for PAS4 out of range, please reset!",
      "13": "Speed Limit for PAS5 out of range, please reset!",
      "15": "Speed Limit for PAS6 out of range, please reset!",
      "17": "Speed Limit for PAS7 out of range, please reset!",
      "19": "Speed Limit for PAS8 out of range, please reset!",
      "21": "Speed Limit for PAS9 out of range, please reset!",
      "22": "Wheel Diameter out of range, please reset!",
      "23": "Speed Meter Signals out of range, please reset!",
    },
    writePasErrors: {
      default: "Unknown error, please reset!",
      "0": "Pedal Sensor Type error, please reset!",
      "1": "Designated Assist Level error, please reset!",
      "2": "Speed Limit error, please reset!",
      "3": "Start Current out of range, please reset!",
      "4": "Slow-start Mode error, please reset!",
      "5": "Start Degree out of range, please reset!",
      "6": "Work Mode error, please reset!",
      "7": "Stop Delay out of range, please reset!",
      "8": "Current Decay out of range, please reset!",
      "9": "Stop Decay out of range, please reset!",
      "10": "Keep Current out of range, please reset!",
    },
    writeThrErrors: {
      default: "Unknown error, please reset!",
      "0": "Start Voltage out of range, please reset!",
      "1": "End Voltage out of range, please reset!",
      "2": "Mode error, please reset!",
      "3": "Designated Assist error, please reset!",
      "4": "Speed Limit error, please reset!",
      "5": "Start Current out of range, please reset!",
    },
  },
  mainRouter: {
    home: "Home",
    settings: "Settings",
    help: "Help",
  },
  main: {
    label_language: "Language",
    object_Profile: {
      header: "Profile",
      open: "Open",
      save_as: "Save as",
      save: "Save",
      default_configuration_string: "Default configuration (no file specified)",
      popup_header: "Save configuration as",
      popup_placeholder: "Enter the file name here",
      popup_button_label: "Save",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Read All",
      write_all: "Write All",
      connect: "Connect",
      disconnect: "Disconnect",
      status: {
        disconnected: "disconnected",
        connecting: "connecting",
        connected: "connected",
        error: "error",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Manufacturer",
        model: "Model",
        hardware_version: "Hardware Version",
        firmware_version: "Firmware Version",
        nominal_voltage: "Nominal Voltage",
        max_current: "Max Current",
      },
    },
  },
  settings: {
    toolbar: {
      general: "General",
      levels: "Levels",
      pedal: "Pedal",
      throttle: "Throttle",
    },
    header: {
      readButtonText: "Read",
      writeButtonText: "Write",
    },
    tabs: {
      general: {
        header: "General",
        lowBatteryProtection: "Low Battery Protection",
        currentLimit: "Current Limit",
        speedMeterType: {
          text: "Speed Meter Type",
          types: ["External, Wheel Meter", "Internal, Motor Meter", "By Motor Phase"],
        },
        speedMeterSignals: "Speed Meter Signals",
        wheelDiameter: {
          text: "Wheel Diameter",
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
        header: "Assist Levels",
        level: "Level",
        current: "Current",
        speed: "Speed",
        popoverCurrentLimitHeader: "Current Limit for level",
        popoverSpeedLimitHeader: "Speed Limit for level",
      },
      pedal: {
        header: "Pedal Assist",
        pedalSensorType: {
          text: "Pedal Sensor Type",
          types: ["None", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Designated Assist Level",
          types: ["By Display's Command", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Speed Limit",
          types: [
            "By Display's Command",
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
        startCurrent: "Start Current",
        slowStartMode: "Slow Start Mode",
        startDegree: "Start Degree",
        workMode: {
          text: "Work Mode",
          types: ["Undetermined"],
        },
        stopDelay: "Stop Delay",
        currentDecay: "Current Decay",
        stopDecay: "Stop Decay",
        keepCurrent: "Keep Current",
      },
      throttle: {
        header: "Throttle Assist",
        startVoltage: "Start Voltage",
        endVoltage: "End Voltage",
        mode: {
          text: "Mode",
          types: ["Speed", "Current"],
        },
        designatedAssistLevel: {
          text: "Designated Assist Level",
          types: ["By Display's Command", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Speed Limit",
          types: [
            "By Display's Command",
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
        startCurrent: "Start Current",
      },
    },
  },
  help: {
    about: {
      header: "About",
      p1: "Configuration Tool for Bafang BBS motor series.",
      author: "Author",
    },
    connection: {
      header: "Connection",
      p1:
        "To connect to the controller of your electric bicycle from Bafang BBS series you need a USB-OTG adapter, USB to Serial adapter with Julet type female pin connectors at the end.",
      p2:
        "You can also buy an “original” USB programming cable but it is just overpriced USB to Serial adapter with the proper connector for the cable on your BBS controller.",
    },
    general: {
      header: "General",
      lowBatteryProtection:
        "This is the voltage at which the controller will stop the motor to keep your battery safe from over-discharge. It should be set by the manufacturer properly and you don’t need to change it. For 13S battery packs 41V is the default.",
      currentLimit:
        "This is the maximum current allowed the flow through the motor. It your motor is 25A for example you can set it to 20A to keep it safe if you want. It is not recommended to set higher current than the nominal. Even set at 25A the peak current will be higher so you better not set more than that.",
      speedMeterType:
        "This one selects the speed meter used on your bicycle. For BBS kits it is external. This parameter is set by the manufacturer and if your setup is not custom then you don’t need to change it.",
      speedMeterSignals:
        "Here you can set how many signal per revolution your sensor generates. If you use the external sensor with magnet it generates one signal per wheel revolution. This parameter is set by the manufacturer and if your setup is not custom then you don’t need to change it.",
      wheelDiameter:
        "The wheel diameter should match the size of your drive wheel (hence your bicycle could have two different sized wheels). Setting the diameter to a smaller size than it really is will increase your speed but also can easily lead to motor damage.",
      endText:
        "When you are finished with tuning your General settings you can use the WRITE button in this tab of the program to write them to your controller. You can also use the READ button at any time to read those (this will replace all values at the General. This will not overwrite any other settings.",
    },
    levels: {
      header: "Assist Levels",
      p1: "Those are all possible assist settings (both for pedal assist and throttle handle using one of those).",
      p2:
        "It is important to mention the Assist 0 current and speed limits must be set to 1 if you want to be able to use your throttle handle with Pedal Assist 0 selected on your LCD.",
      p3: "Usually Assist 0 is set to 0 so you can use your bicycle without assistance if you want.",
      p4:
        "Be careful setting these levels. If you set the current too low the motor won’t be able to move the bicycle and it might suffer some damage. If you set the first assist level current too high then the acceleration at start will be significant. This might damage the internal gears or make you fall of your bicycle.",
      p5:
        "The speed limit sets at what speed (% of the maximum speed set from your LCD) the motor will reduce its power and just keep that speed instead of accelerating more.",
      p6:
        "Switches at the top of the application allow you to show automatically converted values (current and speedor percentages)",
      endText:
        "When you are finished with tuning your Assist Levels settings you can use the WRITE button in this tab of the program to write them to your controller. You can also use the READ button at any time to read those (this will replace all values at the Assist Levels. This will not overwrite any other settings.",
    },
    pedal: {
      header: "Pedal Assist",
      p1:
        "Pedal Assist system assists you while you are pedaling. At this tab you can tune its performance. Some of those you shouldn’t change as they are specific to your kit. Those are set by the manufacturer.",
      pedalSensorType:
        "This parameter selects the pedal rotation sensor type. It is set by the manufacturer and should not be changed.",
      designatedAssistLevel:
        "You have two type of operation selected with this parameter. First is “By Display’s Command”. This means that the assist level (the one from the Basic settings tab) will be selected from your LCD. The second option is to choose a specific assist level which will be fixed and you will not be able to change that from the LCD. For this you can select any assist level from 0 to 9.",
      speedLimit:
        "This is the maximum speed at which the motor will provide additional acceleration. When the speed is reached it will only keep it but won’t accelerate more. If you set this parameter to “By Display’s Command” you will be able to set the speed from your LCD. Keep in mind that some LCDs allow you to set speed of 99km/h which is not possible at least with the current BBS kits. As far as I have tested the maximum speed without pedaling is 40km/h (when the wheel size is set correctly). This setting is used for all assist levels you see in the Basic tab. If you set this to 40km/h (in this program or from your LCD) and your Assist 5 level is set to 50% speed then you will be able to reach 20km/h at that assist level.",
      startCurrent:
        "This is the startup current when you start rotating the pedals. It is good to set this to at least 10% to make sure the bicycle will start moving and the motor won’t be stalled. Setting this to very high value will make the bicycle accelerate very fast at start which might damage its internal gears and also the motor. Recommended value is one between 10% and 30%. You should also make sure you don’t start pedaling at a too high gear which will load the motor too much.",
      slowStartMode:
        "This setting controls how quickly the start current is reached. You can make your bicycle accelerate smoothly and make it respond quickly. A value around 4 usually works well for normal cycling. If you are mountain-biker then setting to a low value will make the acceleration faster which might be useful but you should be careful not to fry your controller and motor.",
      startDegree:
        "This parameter sets how many pulses from the pedal sensor are needed before the motor starts. Full pedal revolution on BBS kits generates 24 pulses. Setting this to 0 or 1 will not work. A value around 4 works well as it doesn’t start with just a small move and also doesn’t require too much rotation.",
      workMode:
        "This parameter’s purpose is not very clear. It is supposed to control the power according to pedal rotation speed. The value set by manufacturer seems to work just fine so you don’t need to change it.",
      stopDelay: "This is the delay after you stop pedaling before the motor stops. Value of 250ms works well.",
      currentDecay:
        "This parameter sets how fast the current drops when you are pedaling fasted and are reaching the maximum speed at the selected assist level. Lower value means the current will start to drop at lower speed.",
      stopDecay: "The amount of time it takes the motor to stop.",
      keepCurrent:
        "This setting controls the percentage of the maximum current at the selected assist level which will be flowing through the motor when you reach the maximum speed and keep pedaling. So if your maximum current is 25A and you use Pedal Assist 5 set to 50% current then you will have maximum current of 12.5A for this assist level. Then if Keep Current is set to 50% when the maximum speed is reached and you continue pedaling the current will be kept at 6.25A. This ensures smooth transition to assist power when you reduce the pedaling speed and the moving speed drops below the maximum.",
      endText:
        "When you are finished with tuning your Pedal Assist settings you can use the WRITE button in this tab of the program to write them to your controller. You can also use the READ button at any time to read those (this will replace all values at the Pedal Assist. This will not overwrite any other settings.",
    },
    throttle: {
      header: "Throttle Handle",
      p1:
        "If your kit is equipped with throttle handle than this tab allows you to configure its operation. Make sure that Assis 0 is set to 1 (both current and speed) if you want to use it when Pedal Assist S0 is selected on your LCD.",
      startVoltage:
        "This is the throttle handle output voltage at which the motor will start. The minimum at which the controller responds is 1.1V",
      endVoltage:
        "This is the throttle handle output voltage at which the motor will reach its maximum power (limited by other settings). The maximum accepted from the controller is 4.2V. You need to play a little with this parameter as the throttle handle maximum can be different depending on model. If you set this parameter too low you will get almost no response from the throttle handle. When you set it to the maximum that the handle can produce you will get the widest possible range of control over motor power.",
      mode:
        "This is the operation mode of the throttle handle. You have two options: speed and current. When set to speed it the controller uses the moving speed to set the motor power according to the position of the throttle handle. Unfortunately there is significant delay because of the way the speed is measured and the response is pretty bad in this mode. When set to current, the handle controls the motor current according to its position. This mode works better and similar to a car operation.",
      designatedAssistLevel:
        "You can set this to “By Display’s Command” or select a fixed level. The first option uses the PAS setting from your LCD. This means that the maximum power output and speed depend on the PAS level selected and the position of the throttle handle. So if a low PAS is selected the maximum current and speed will be low too even if you push the throttle to maximum. If a fixed assist level is selected for this parameter the throttle handle will use its maximum current and speed. Be careful if you set this to level 9 not to push the throttle to max when stopped because the high current and the power could damage you controller and motor.",
      speedLimit:
        "With this parameter you can limit the maximum speed when using the throttle handle. This overwrites the designated assist level maximum speed if it is higher.",
      startCurrent:
        "This is the percentage of maximum current applied to the motor when the throttle handle generates the minimum accepted voltage. Usually value of 10% or 20% works well. If your maximum current at the General tab is set to 25A and Start Current is set to 10% you will get 2.5A start current. This will lead to smooth start and will not load the internal gears too much. If you set this parameter to very high value you can damage the internal gears and the motor.",
      endText:
        "When you are finished with tuning your Throttle Handle settings you can use the WRITE button in this tab of the program to write them to your controller. You can also use the READ button at any time to read those (this will replace all values at the Throttle Handle. This will not overwrite any other settings.",
    },
  },
};

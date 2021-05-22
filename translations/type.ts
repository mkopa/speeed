export interface Translation {
  messages: {
    processing: string;
    deviceIsDisconnected: string;
    connectingInProgress: string;
    settingsHaveBeenSaved: string;
    configLoadedSuccessful: string;
    overrideFileWarning: {
      header: string;
      message: {
        theFileText: string;
        areYouSureToOverrideText: string;
      };
      buttons: {
        yes: string;
        no: string;
      };
    };
    // Unsupported or broken configuration file.
    unsupportedConfigurationFile: {
      header: string;
      text: string;
    };
    pleaseWait: string;
    connectingToMotor: string;
    noDeviceFound: string;
    cantEstablishingConnection: string;
    connectedTo: string;
    readBasSuccess: {
      basTypeLevel: string;
      basTypeGeneral: string;
      first: string;
      second: string;
    };
    readPedalAssistSuccess: string;
    readThrottleHandleSuccess: string;
    readAllSuccess: string;
    somethingWentWrong: string;
    writeSuccess: {
      levels: string;
      general: string;
      pedalAssist: string;
      throttleHandle: string;
      first: string;
      second: string;
    };
    writeAllSuccess: string;
  };
  errors: {
    writeBasErrors: {
      default: string;
      "0": string;
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
      "6": string;
      "7": string;
      "8": string;
      "9": string;
      "10": string;
      "11": string;
      "12": string;
      "13": string;
      "14": string;
      "15": string;
      "16": string;
      "17": string;
      "18": string;
      "19": string;
      "20": string;
      "21": string;
      "22": string;
      "23": string;
    };
    writePasErrors: {
      default: string;
      "0": string;
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
      "6": string;
      "7": string;
      "8": string;
      "9": string;
      "10": string;
    };
    writeThrErrors: {
      default: string;
      "0": string;
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
    };
  };
  mainRouter: {
    home: string;
    settings: string;
    help: string;
  };
  buttons: {
    cancel: string;
  };
  main: {
    label_language: string;
    object_Profile: {
      header: string;
      open: string;
      save_as: string;
      save: string;
      default_configuration_string: string;
      popup_header: string;
      popup_placeholder: string;
      popup_button_label: string;
    };
    object_Motor: {
      header: string;
      read_all: string;
      write_all: string;
      connect: string;
      disconnect: string;
      status: {
        disconnected: string;
        connecting: string;
        connected: string;
        error: string;
      };
      motor_info: {
        status: string;
        manufacturer: string;
        model: string;
        hardware_version: string;
        firmware_version: string;
        nominal_voltage: string;
        max_current: string;
      };
    };
  };
  settings: {
    toolbar: {
      general: string;
      levels: string;
      pedal: string;
      throttle: string;
    };
    header: {
      readButtonText: string;
      writeButtonText: string;
    };
    tabs: {
      general: {
        header: string;
        lowBatteryProtection: string;
        currentLimit: string;
        speedMeterType: {
          text: string;
          types: string[];
        };
        speedMeterSignals: string;
        wheelDiameter: {
          text: string;
          types: string[];
        };
      };
      levels: {
        header: string;
        level: string;
        current: string;
        speed: string;
        popoverCurrentLimitHeader: string;
        popoverSpeedLimitHeader: string;
      };
      pedal: {
        header: string;
        pedalSensorType: {
          text: string;
          types: string[];
        };
        designatedAssistLevel: {
          text: string;
          types: string[];
        };
        speedLimit: {
          text: string;
          types: string[];
        };
        startCurrent: string;
        slowStartMode: string;
        startDegree: string;
        workMode: {
          text: string;
          types: string[];
        };
        stopDelay: string;
        currentDecay: string;
        stopDecay: string;
        keepCurrent: string;
      };
      throttle: {
        header: string;
        startVoltage: string;
        endVoltage: string;
        mode: {
          text: string;
          types: string[];
        };
        designatedAssistLevel: {
          text: string;
          types: string[];
        };
        speedLimit: {
          text: string;
          types: string[];
        };
        startCurrent: string;
      };
    };
  };
  help: {
    about: {
      header: string;
      p1: string;
      author: string;
    };
    connection: {
      header: string;
      p1: string;
      p2: string;
    };
    general: {
      header: string;
      lowBatteryProtection: string;
      currentLimit: string;
      speedMeterType: string;
      speedMeterSignals: string;
      wheelDiameter: string;
      endText: string;
    };
    levels: {
      header: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      p5: string;
      p6: string;
      endText: string;
    };
    pedal: {
      header: string;
      p1: string;
      pedalSensorType: string;
      designatedAssistLevel: string;
      speedLimit: string;
      startCurrent: string;
      slowStartMode: string;
      startDegree: string;
      workMode: string;
      stopDelay: string;
      currentDecay: string;
      stopDecay: string;
      keepCurrent: string;
      endText: string;
    };
    throttle: {
      header: string;
      p1: string;
      startVoltage: string;
      endVoltage: string;
      mode: string;
      designatedAssistLevel: string;
      speedLimit: string;
      startCurrent: string;
      endText: string;
    };
  };
}

import { Translation } from "./type";

export const pt: Translation = {
  messages: {
    processing: "Processamento...",
    deviceIsDisconnected: "O dispositivo está desligado!",
    connectingInProgress: "A ligação em curso...",
    settingsHaveBeenSaved: "As suas definições foram guardadas!",
    configLoadedSuccessful: "Configuração carregada com sucesso!",
    overrideFileWarning: {
      header: "Advertência!",
      message: {
        theFileText: "O ficheiro",
        areYouSureToOverrideText: "existem! Tem a certeza de que quer anular este ficheiro?",
      },
      buttons: {
        yes: "Anular",
        no: "Não",
      },
    },
    unsupportedConfigurationFile: {
      header: "Erro!",
      text: "Ficheiro de configuração sem suporte ou quebrado!",
    },
    pleaseWait: "Por favor aguarde...",
    connectingToMotor: "Ligação ao motor...",
    noDeviceFound: "Nenhum dispositivo encontrado!",
    cantEstablishingConnection: "Não pode estabelecer ligação com o motor! Verifique o reinício da ligação!",
    connectedTo: "Ligado a",
    readBasSuccess: {
      basTypeLevel: "Níveis",
      basTypeGeneral: "Geral",
      first: "Leia",
      second: "parâmetros com sucesso!",
    },
    readPedalAssistSuccess: "Leia os parâmetros do Pedal Assist com sucesso!",
    readThrottleHandleSuccess: "Leitura com sucesso dos parâmetros do cabo de aceleração",
    readAllSuccess: "Leia todos os parâmetros com sucesso!",
    somethingWentWrong: "Algo correu mal! Registo:",
    writeSuccess: {
      levels: "Níveis",
      general: "Geral",
      pedalAssist: "Assistência a pedal",
      throttleHandle: "Manípulo do acelerador",
      first: "Escreva",
      second: "parâmetros com sucesso!",
    },
    writeAllSuccess: "Escrever todos os parâmetros com sucesso!",
  },
  buttons: {
    cancel: "Cancel",
  },
  errors: {
    writeBasErrors: {
      "0": "Protecção de bateria fraca fora de alcance, por favor reinicie!",
      "1": "Limite actual fora de alcance, por favor reinicie!",
      "2": "Limite actual para PAS0 fora de alcance, por favor reinicie!",
      "3": "Limite de velocidade para PAS0 fora de alcance, por favor reinicie!",
      "4": "Limite actual para PAS1 fora de alcance, por favor reinicie!",
      "5": "Limite de velocidade para PAS1 fora de alcance, por favor reinicie!",
      "6": "Limite actual para PAS2 fora de alcance, por favor reinicie!",
      "7": "Limite de velocidade para PAS2 fora de alcance, por favor reinicie!",
      "8": "Limite actual para PAS3 fora de alcance, por favor reinicie!",
      "9": "Limite de velocidade para PAS3 fora de alcance, por favor reinicie!",
      "10": "Limite actual para PAS4 fora de alcance, por favor reinicie!",
      "11": "Limite de velocidade para PAS4 fora de alcance, por favor reinicie!",
      "12": "Limite actual para PAS5 fora de alcance, por favor reinicie!",
      "13": "Limite de velocidade para PAS5 fora de alcance, por favor reinicie!",
      "14": "Limite actual para PAS6 fora de alcance, por favor reinicie!",
      "15": "Limite de velocidade para PAS6 fora de alcance, por favor reinicie!",
      "16": "Limite actual para PAS7 fora de alcance, por favor reinicie!",
      "17": "Limite de velocidade para PAS7 fora de alcance, por favor reinicie!",
      "18": "Limite actual para PAS8 fora de alcance, por favor reinicie!",
      "19": "Limite de velocidade para PAS8 fora de alcance, por favor reinicie!",
      "20": "Limite actual para PAS9 fora de alcance, por favor reinicie!",
      "21": "Limite de velocidade para PAS9 fora de alcance, por favor reinicie!",
      "22": "Diâmetro da roda fora de alcance, por favor reinicie!",
      "23": "Sinais do medidor de velocidade fora de alcance, por favor reinicialize!",
      default: "Problema de comunicação, por favor reiniciar!",
    },
    writePasErrors: {
      "0": "Erro de tipo de sensor de pedal, por favor reiniciar!",
      "1": "Erro de nível de assistência designado, por favor reinicie!",
      "2": "Erro de limite de velocidade, por favor reiniciar!",
      "3": "Iniciar Corrente fora de alcance, por favor reiniciar!",
      "4": "Erro no modo de arranque lento, por favor reinicie!",
      "5": "Grau de início fora de alcance, por favor reinicie!",
      "6": "Erro no modo de trabalho, por favor reiniciar!",
      "7": "Parar Atraso fora de alcance, por favor reiniciar!",
      "8": "Decadência actual fora de alcance, por favor reinicie!",
      "9": "Pare a decomposição fora de alcance, por favor reinicie!",
      "10": "Mantenha a corrente fora de alcance, por favor reinicie!",
      default: "Erro desconhecido, por favor reiniciar!",
    },
    writeThrErrors: {
      "0": "Iniciar Voltagem fora de alcance, por favor reiniciar!",
      "1": "Fim de tensão fora de alcance, por favor reinicie!",
      "2": "Erro de modo, por favor reiniciar!",
      "3": "Erro de assistência designado, por favor reinicie!",
      "4": "Erro de limite de velocidade, por favor reiniciar!",
      "5": "Iniciar Corrente fora de alcance, por favor reiniciar!",
      default: "Erro desconhecido, por favor reiniciar!",
    },
  },
  mainRouter: {
    home: "Início",
    settings: "Definições",
    help: "Ajuda",
  },
  main: {
    label_language: "Idioma",
    object_Profile: {
      header: "Perfil",
      open: "Aberto",
      save_as: "Salvar como",
      save: "Guardar",
      default_configuration_string: "Configuração predefinida (nenhum ficheiro especificado)",
      popup_header: "Guardar configuração como",
      popup_placeholder: "Introduza aqui o nome do ficheiro",
      popup_button_label: "Guardar",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Leia",
      write_all: "Escreva",
      connect: "Ligar",
      disconnect: "Desligar",
      status: {
        disconnected: "desconectado",
        connecting: "conectando",
        connected: "ligado",
        error: "erro",
      },
      motor_info: {
        status: "Estado",
        manufacturer: "Fabricante",
        model: "Modelo",
        hardware_version: "Versão do hardware",
        firmware_version: "Versão Firmware",
        nominal_voltage: "Tensão Nominal",
        max_current: "Corrente máxima",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Geral",
      levels: "Níveis",
      pedal: "Pedal",
      throttle: "Acelerador",
    },
    header: {
      readButtonText: "Leia",
      writeButtonText: "Guardar",
    },
    tabs: {
      general: {
        header: "Geral",
        lowBatteryProtection: "Protecção de Bateria Baixa",
        currentLimit: "Limite actual",
        speedMeterType: {
          text: "Tipo de medidor de velocidade",
          types: ["Externo, Medidor de Rodas", "Interno, Medidor de Motores", "Por fase motorizada"],
        },
        speedMeterSignals: "Sinais do Medidor de Velocidade",
        wheelDiameter: {
          text: "Diâmetro da roda",
          types: [
            "16 polegadas",
            "17 polegadas",
            "18 polegadas",
            "19 polegadas",
            "20 polegadas",
            "21 polegadas",
            "22 polegadas",
            "23 polegadas",
            "24 polegadas",
            "25 polegadas",
            "26 polegadas",
            "27 polegadas",
            "700C",
            "28 polegadas",
            "29 polegadas",
            "30 polegadas",
          ],
        },
      },
      levels: {
        header: "Níveis de assistência",
        level: "Nível",
        current: "Actual",
        speed: "Velocidade",
        popoverCurrentLimitHeader: "Limite actual para o nível",
        popoverSpeedLimitHeader: "Limite de velocidade para o nível",
      },
      pedal: {
        header: "Assistência a pedal",
        pedalSensorType: {
          text: "Tipo de sensor de pedal",
          types: ["Nenhum", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Nível Designado de Assistência",
          types: ["Por Comando do Display", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limite de velocidade",
          types: [
            "Por Comando do Display",
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
        startCurrent: "Corrente inicial",
        slowStartMode: "Modo de arranque lento",
        startDegree: "Grau inicial",
        workMode: {
          text: "Modo de trabalho",
          types: ["Indeterminado"],
        },
        stopDelay: "Atraso de paragem",
        currentDecay: "Decadência actual",
        stopDecay: "Parar a decomposição",
        keepCurrent: "Mantenha-se actualizado",
      },
      throttle: {
        header: "Assistência ao estrangulamento",
        startVoltage: "Tensão de arranque",
        endVoltage: "Tensão final",
        mode: {
          text: "Modo",
          types: ["Velocidade", "Actual"],
        },
        designatedAssistLevel: {
          text: "Nível Designado de Assistência",
          types: ["Por Comando do Display", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limite de velocidade",
          types: [
            "Por Comando do Display",
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
        startCurrent: "Corrente inicial",
      },
    },
  },
  help: {
    about: {
      header: "Sobre a aplicação",
      p1: "Ferramenta de configuração para a série de motores Bafang BBS.",
      author: "Autor",
    },
    connection: {
      header: "Ligação",
      p1:
        "Para ligar ao controlador da sua bicicleta eléctrica da série Bafang BBS precisa de um adaptador USB-OTG, adaptador USB para Serial com conectores de pinos fêmea tipo Julet no final.",
      p2:
        'Também pode comprar um cabo de programação USB "original", mas é apenas um adaptador USB para Serial com o conector adequado para o cabo no seu controlador BBS.',
    },
    general: {
      header: "Geral",
      lowBatteryProtection:
        "Esta é a voltagem à qual o controlador irá parar o motor para manter a sua bateria a salvo de sobredescarga. Deve ser regulada correctamente pelo fabricante e não precisa de a mudar. Para conjuntos de baterias 13S 41V é o padrão.",
      currentLimit:
        "Esta é a corrente máxima permitida para o fluxo através do motor. O seu motor tem 25A, por exemplo, pode regulá-lo para 20A para o manter seguro, se quiser. Não é recomendado definir uma corrente mais elevada do que a nominal. Mesmo regulada para 25A, a corrente de pico será mais elevada, por isso é melhor não regulá-la mais do que isso.",
      speedMeterType:
        "Este selecciona o medidor de velocidade utilizado na sua bicicleta. Para kits BBS, é externo. Este parâmetro é definido pelo fabricante e se a sua configuração não for personalizada, então não precisa de o alterar.",
      speedMeterSignals:
        "Aqui pode definir quantos sinais por revolução o seu sensor gera. Se utilizar o sensor externo com íman, gera um sinal por rotação da roda. Este parâmetro é definido pelo fabricante e se a sua configuração não for personalizada, então não precisa de o alterar.",
      wheelDiameter:
        "O diâmetro da roda deve corresponder ao tamanho da sua roda motriz (daí que a sua bicicleta possa ter duas rodas de tamanho diferente). Ajustar o diâmetro a um tamanho menor do que realmente é, aumentará a sua velocidade mas também pode facilmente levar a danos no motor.",
      endText:
        "Quando terminar de afinar as suas definições Gerais pode usar o botão WRITE neste separador do programa para as escrever no seu controlador. Também pode usar o botão READ em qualquer altura para ler as mesmas (isto irá substituir todos os valores no General. Isto não substituirá quaisquer outras definições.",
    },
    levels: {
      header: "Níveis de assistência",
      p1:
        "Todas estas são configurações de assistência possíveis (tanto para assistência a pedal como para manípulo do acelerador usando uma destas).",
      p2:
        "É importante mencionar que a corrente do Assist 0 e os limites de velocidade devem ser definidos para 1 se quiser poder usar o punho do acelerador com o Assist 0 seleccionado no seu LCD.",
      p3:
        "Normalmente o Assist 0 está definido a 0 para que possa usar a sua bicicleta sem assistência se assim o desejar.",
      p4:
        "Tenha cuidado ao fixar estes níveis. Se regular a corrente demasiado baixa, o motor não será capaz de mover a bicicleta e poderá sofrer alguns danos. Se definir a primeira corrente de nível de assistência demasiado alta, então a aceleração no início será significativa. Isto pode danificar as engrenagens internas ou fazer cair a sua bicicleta.",
      p5:
        "O limite de velocidade estabelece a que velocidade (% da velocidade máxima definida a partir do seu LCD) o motor irá reduzir a sua potência e apenas manter essa velocidade em vez de acelerar mais.",
      p6:
        "Os interruptores no topo da aplicação permitem-lhe mostrar automaticamente os valores convertidos (corrente e percentagens de velocidade ou de velocidade)",
      endText:
        "Quando terminar de afinar as suas definições dos níveis de assistência, pode usar o botão WRITE neste separador do programa para as escrever no seu controlador. Também pode usar o botão READ em qualquer altura para ler essas configurações (isto substituirá todos os valores nos Níveis Assistentes. Isto não substituirá quaisquer outras definições.",
    },
    pedal: {
      header: "Assistência a pedal",
      p1:
        "O sistema de Pedal Assist auxilia-o enquanto pedala. Neste separador, pode afinar o seu desempenho. Algumas delas não devem ser alteradas, pois são específicas para o seu kit. Estes são definidos pelo fabricante.",
      pedalSensorType:
        "Este parâmetro selecciona o tipo de sensor de rotação do pedal. É definido pelo fabricante e não deve ser alterado.",
      designatedAssistLevel:
        'Tem dois tipos de operação seleccionados com este parâmetro. O primeiro é "Por Comando de Exibição". Isto significa que o nível de assistência (o do separador Configurações básicas) será seleccionado a partir do seu LCD. A segunda opção é escolher um nível de assistência específico que será fixado e não poderá alterar isso a partir do LCD. Para isso, pode seleccionar qualquer nível de assistência de 0 a 9.',
      speedLimit:
        'Esta é a velocidade máxima a que o motor irá proporcionar uma aceleração adicional. Quando a velocidade for atingida, apenas a manterá, mas não acelerará mais. Se definir este parâmetro para "Por Comando do Visor", poderá definir a velocidade a partir do seu LCD. Tenha em mente que alguns LCDs permitem-lhe definir a velocidade de 99km/h, o que não é possível pelo menos com os kits BBS actuais. Tanto quanto testei, a velocidade máxima sem pedalar é de 40km/h (quando o tamanho da roda está correctamente definido). Esta definição é utilizada para todos os níveis de assistência que se vê no separador Basic. Se definir isto para 40km/h (neste programa ou a partir do seu LCD) e o seu nível de assistência 5 estiver definido para 50% de velocidade, então poderá atingir 20km/h nesse nível de assistência.',
      startCurrent:
        "Esta é a corrente de arranque quando se começa a rodar os pedais. É bom definir isto para pelo menos 10% para garantir que a bicicleta começará a andar e que o motor não será parado. Ajustar isto a um valor muito elevado fará com que a bicicleta acelere muito rapidamente no arranque, o que poderá danificar as suas engrenagens internas e também o motor. O valor recomendado é um entre 10% e 30%. Deve também certificar-se de que não começa a pedalar a uma velocidade demasiado alta, o que fará com que o motor seja carregado em demasia.",
      slowStartMode:
        "Esta configuração controla a rapidez com que a corrente de arranque é atingida. Pode fazer com que a sua bicicleta acelere suavemente e a faça reagir rapidamente. Um valor em torno de 4 funciona normalmente bem para ciclismo normal. Se for ciclista de montanha, a definição para um valor baixo fará com que a aceleração seja mais rápida, o que poderá ser útil, mas deve ter cuidado para não fritar o seu controlador e motor.",
      startDegree:
        "Este parâmetro define quantos impulsos do sensor de pedal são necessários antes de o motor arrancar. A rotação completa do pedal em kits BBS gera 24 impulsos. Ajustar isto a 0 ou 1 não funcionará. Um valor em torno de 4 funciona bem porque não começa apenas com um pequeno movimento e também não requer demasiada rotação.",
      workMode:
        "A finalidade deste parâmetro não é muito clara. É suposto controlar a potência de acordo com a velocidade de rotação do pedal. O valor definido pelo fabricante parece funcionar muito bem, pelo que não é necessário alterá-lo.",
      stopDelay: "Este é o atraso depois de se parar de pedalar antes de o motor parar. O valor de 250ms funciona bem.",
      currentDecay:
        "Este parâmetro define a rapidez com que a corrente cai quando se está a pedalar em jejum e se está a atingir a velocidade máxima ao nível da assistência seleccionada. Valor mais baixo significa que a corrente começará a descer a uma velocidade mais baixa.",
      stopDecay: "O tempo que leva o motor a parar.",
      keepCurrent:
        "Esta configuração controla a percentagem da corrente máxima no nível de assistência seleccionado que fluirá através do motor quando atingir a velocidade máxima e continuar a pedalar. Assim, se a sua corrente máxima for 25A e utilizar a assistência a pedal 5 definida para 50% de corrente, então terá uma corrente máxima de 12,5A para este nível de assistência. Então, se a corrente de manutenção estiver definida para 50% quando a velocidade máxima for atingida e continuar a pedalar, a corrente será mantida a 6,25A. Isto assegura uma transição suave para a corrente de assistência quando se reduz a velocidade de pedalagem e a velocidade de deslocação cai abaixo do máximo.",
      endText:
        "Quando terminar de afinar as definições do seu Pedal Assist pode usar o botão WRITE neste separador do programa para as escrever no seu controlador. Também pode usar o botão READ em qualquer altura para ler essas configurações (isto substituirá todos os valores no Assistente de Pedal. Isto não substituirá quaisquer outras definições.",
    },
    throttle: {
      header: "Manípulo do acelerador",
      p1:
        "Se o seu kit estiver equipado com punho de acelerador, este separador permite-lhe configurar o seu funcionamento. Certifique-se de que Assis 0 está definido para 1 (tanto corrente como velocidade) se quiser utilizá-lo quando o Pedal Assist S0 é seleccionado no seu LCD.",
      startVoltage:
        "Esta é a tensão de saída do punho do acelerador em que o motor irá arrancar. O mínimo a que o controlador responde é 1,1V",
      endVoltage:
        "Esta é a tensão de saída do punho do acelerador em que o motor atingirá a sua potência máxima (limitada por outros ajustes). O máximo aceite do controlador é de 4,2V. É necessário jogar um pouco com este parâmetro, uma vez que a manete do acelerador máximo pode ser diferente dependendo do modelo. Se definir este parâmetro demasiado baixo, não obterá quase nenhuma resposta do punho do acelerador. Quando se ajusta ao máximo que a manete pode produzir, obtém-se a maior gama possível de controlo sobre a potência do motor.",
      mode:
        "Este é o modo de funcionamento do punho do acelerador. Tem duas opções: velocidade e corrente. Quando definido para a velocidade, o controlador utiliza a velocidade móvel para definir a potência do motor de acordo com a posição da manete do acelerador. Infelizmente, há um atraso significativo devido à forma como a velocidade é medida e a resposta é bastante má neste modo. Quando ajustado para corrente, o punho controla a corrente do motor de acordo com a sua posição. Este modo funciona melhor e semelhante a uma operação de automóvel.",
      designatedAssistLevel:
        'Pode definir isto para "Por Comando de Exibição" ou seleccionar um nível fixo. A primeira opção utiliza a configuração PAS do seu LCD. Isto significa que a potência máxima e a velocidade dependem do nível PAS seleccionado e da posição do punho do acelerador. Assim, se for seleccionada uma PAS baixa, a corrente e velocidade máximas também serão baixas, mesmo que se empurre a borboleta para o máximo. Se for seleccionado um nível de assistência fixo para este parâmetro, o punho do acelerador utilizará a sua corrente e velocidade máximas. Tenha cuidado se definir este nível para o nível 9 para não empurrar o acelerador para o máximo quando parado porque a corrente elevada e a potência podem danificar o controlador e o motor.',
      speedLimit:
        "Com este parâmetro é possível limitar a velocidade máxima ao utilizar o punho do acelerador. Isto sobrescreve a velocidade máxima do nível de assistência designado, se for mais alta.",
      startCurrent:
        "Esta é a percentagem de corrente máxima aplicada ao motor quando o punho do acelerador gera a tensão mínima aceite. Normalmente, o valor de 10% ou 20% funciona bem. Se a sua corrente máxima no separador Geral estiver definida para 25A e a corrente de arranque estiver definida para 10%, obterá uma corrente de arranque de 2,5A. Isto levará a um arranque suave e não irá carregar demasiado as engrenagens internas. Se definir este parâmetro para um valor muito elevado pode danificar as engrenagens internas e o motor.",
      endText:
        "Quando terminar de afinar as suas definições de Throttle Handle pode usar o botão WRITE neste separador do programa para as escrever no seu controlador. Também pode usar o botão READ a qualquer altura para ler as mesmas (isto substituirá todos os valores no Throttle Handle. Isto não substituirá quaisquer outras definições.",
    },
  },
};

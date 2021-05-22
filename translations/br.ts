import { Translation } from "./type";

export const br: Translation = {
  messages: {
    processing: "Processamento...",
    deviceIsDisconnected: "O dispositivo está desconectado!",
    connectingInProgress: "Conectando em andamento...",
    settingsHaveBeenSaved: "Suas configurações foram salvas!",
    configLoadedSuccessful: "Configuração carregada com sucesso!",
    overrideFileWarning: {
      header: "Advertência!",
      message: {
        theFileText: "O arquivo",
        areYouSureToOverrideText: "existem! Você tem certeza de que quer anular este arquivo?",
      },
      buttons: {
        yes: "Anular",
        no: "Não",
      },
    },
    unsupportedConfigurationFile: {
      header: "Erro!",
      text: "Arquivo de configuração sem suporte ou quebrado!",
    },
    pleaseWait: "Por favor, aguarde...",
    connectingToMotor: "Conexão com motor...",
    noDeviceFound: "Nenhum dispositivo encontrado!",
    cantEstablishingConnection: "Não pode estabelecer conexão com o motor! Verifique o reinício final da conexão!",
    connectedTo: "Conectado a",
    readBasSuccess: {
      basTypeLevel: "Níveis",
      basTypeGeneral: "Geral",
      first: "Leia",
      second: "parâmetros com sucesso!",
    },
    readPedalAssistSuccess: "Leia os parâmetros do Pedal Assist com sucesso!",
    readThrottleHandleSuccess: "Leitura com sucesso dos parâmetros do punho do acelerador",
    readAllSuccess: "Leia todos os parâmetros com sucesso!",
    somethingWentWrong: "Algo deu errado! Diário de bordo:",
    writeSuccess: {
      levels: "Níveis",
      general: "Geral",
      pedalAssist: "Assistência com pedal",
      throttleHandle: "Cabo do acelerador",
      first: "Escreva para",
      second: "parâmetros com sucesso!",
    },
    writeAllSuccess: "Escreva todos os parâmetros com sucesso!",
  },
  buttons: {
    cancel: "Cancel",
  },
  errors: {
    writeBasErrors: {
      "0": "Proteção de bateria baixa fora de alcance, favor reiniciar!",
      "1": "Limite atual fora de alcance, favor reiniciar!",
      "2": "Limite atual para PAS0 fora de alcance, favor reiniciar!",
      "3": "Limite de velocidade para PAS0 fora de alcance, favor reiniciar!",
      "4": "Limite atual para PAS1 fora de alcance, favor reiniciar!",
      "5": "Limite de velocidade para PAS1 fora de alcance, favor reiniciar!",
      "6": "Limite atual para PAS2 fora de alcance, favor reiniciar!",
      "7": "Limite de velocidade para PAS2 fora de alcance, favor reiniciar!",
      "8": "Limite atual para PAS3 fora de alcance, favor reiniciar!",
      "9": "Limite de velocidade para PAS3 fora de alcance, favor reiniciar!",
      "10": "Limite atual para PAS4 fora de alcance, favor reiniciar!",
      "11": "Limite de velocidade para PAS4 fora de alcance, favor reiniciar!",
      "12": "Limite atual para PAS5 fora de alcance, favor reiniciar!",
      "13": "Limite de velocidade para PAS5 fora de alcance, favor reiniciar!",
      "14": "Limite atual para PAS6 fora de alcance, favor reiniciar!",
      "15": "Limite de velocidade para PAS6 fora de alcance, favor reiniciar!",
      "16": "Limite atual para PAS7 fora de alcance, favor reiniciar!",
      "17": "Limite de velocidade para PAS7 fora de alcance, favor reiniciar!",
      "18": "Limite atual para PAS8 fora de alcance, favor reiniciar!",
      "19": "Limite de velocidade para PAS8 fora de alcance, favor reiniciar!",
      "20": "Limite atual para PAS9 fora de alcance, favor reiniciar!",
      "21": "Limite de velocidade para PAS9 fora de alcance, favor reiniciar!",
      "22": "Diâmetro de roda fora de alcance, favor reiniciar!",
      "23": "Sinais do medidor de velocidade fora de alcance, favor reiniciar!",
      default: "Problema de comunicação, favor reiniciar!",
    },
    writePasErrors: {
      "0": "Erro no tipo de sensor de pedal, por favor, reinicie!",
      "1": "Erro no nível de assistência designado, favor reiniciar!",
      "2": "Erro de limite de velocidade, favor reiniciar!",
      "3": "Iniciar Corrente fora de alcance, favor reiniciar!",
      "4": "Erro no modo slow-start, favor reiniciar!",
      "5": "Grau inicial fora de alcance, favor reiniciar!",
      "6": "Erro no modo de trabalho, favor reiniciar!",
      "7": "Pare o atraso fora de alcance, por favor reinicie!",
      "8": "Decadência atual fora de alcance, favor reiniciar!",
      "9": "Pare a decomposição fora de alcance, por favor, reinicie!",
      "10": "Mantenha a corrente fora de alcance, por favor reinicialize!",
      default: "Erro desconhecido, favor reiniciar!",
    },
    writeThrErrors: {
      "0": "Iniciar Voltagem fora de alcance, por favor, reinicie!",
      "1": "Tensão final fora de alcance, por favor reinicialize!",
      "2": "Erro de modo, favor reiniciar!",
      "3": "Erro de assistência designado, favor reiniciar!",
      "4": "Erro de limite de velocidade, favor reiniciar!",
      "5": "Iniciar Corrente fora de alcance, favor reiniciar!",
      default: "Erro desconhecido, favor reiniciar!",
    },
  },
  mainRouter: {
    home: "Início",
    settings: "Configurações",
    help: "Ajuda",
  },
  main: {
    label_language: "Idioma",
    object_Profile: {
      header: "Perfil",
      open: "Aberto",
      save_as: "Salvar como",
      save: "Salvar",
      default_configuration_string: "Configuração padrão (nenhum arquivo especificado)",
      popup_header: "Salvar configuração como",
      popup_placeholder: "Digite aqui o nome do arquivo",
      popup_button_label: "Salvar",
    },
    object_Motor: {
      header: "Motor",
      read_all: "Leia",
      write_all: "Escreva para",
      connect: "Conecte",
      disconnect: "Desconectar",
      status: {
        disconnected: "desconectado",
        connecting: "conectando",
        connected: "conectado",
        error: "erro",
      },
      motor_info: {
        status: "Status",
        manufacturer: "Fabricante",
        model: "Modelo",
        hardware_version: "Versão do hardware",
        firmware_version: "Versão do Firmware",
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
      writeButtonText: "Salvar",
    },
    tabs: {
      general: {
        header: "Geral",
        lowBatteryProtection: "Proteção de bateria baixa",
        currentLimit: "Limite atual",
        speedMeterType: {
          text: "Tipo de medidor de velocidade",
          types: ["Externo, medidor de roda", "Interno, Medidor de motor", "Por fase do motor"],
        },
        speedMeterSignals: "Sinais do medidor de velocidade",
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
        current: "Atual",
        speed: "Velocidade",
        popoverCurrentLimitHeader: "Limite atual para o nível",
        popoverSpeedLimitHeader: "Limite de velocidade para o nível",
      },
      pedal: {
        header: "Assistência com pedal",
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
        startCurrent: "Corrente de partida",
        slowStartMode: "Modo de início lento",
        startDegree: "Grau inicial",
        workMode: {
          text: "Modo de trabalho",
          types: ["Indeterminado"],
        },
        stopDelay: "Atraso de parada",
        currentDecay: "Decadência atual",
        stopDecay: "Parar a decadência",
        keepCurrent: "Mantenha-se atualizado",
      },
      throttle: {
        header: "Assistência ao acelerador",
        startVoltage: "Tensão de partida",
        endVoltage: "Tensão final",
        mode: {
          text: "Modo",
          types: ["Velocidade", "Atual"],
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
        startCurrent: "Corrente de partida",
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
      header: "Conexão",
      p1:
        "Para conectar ao controlador de sua bicicleta elétrica da série Bafang BBS você precisa de um adaptador USB-OTG, adaptador USB para Serial com conectores de pino fêmea tipo Julet na extremidade.",
      p2:
        'Você também pode comprar um cabo de programação USB "original", mas é apenas um adaptador USB para Serial com o conector apropriado para o cabo em seu controlador BBS.',
    },
    general: {
      header: "Geral",
      lowBatteryProtection:
        "Esta é a voltagem na qual o controlador irá parar o motor para manter sua bateria a salvo de sobrecarga. Ela deve ser ajustada pelo fabricante adequadamente e você não precisa trocá-la. Para conjuntos de baterias 13S 41V é o padrão.",
      currentLimit:
        "Esta é a corrente máxima permitida para o fluxo através do motor. Seu motor tem 25A, por exemplo, você pode configurá-lo para 20A para mantê-lo seguro, se quiser. Não é recomendado ajustar uma corrente maior do que a nominal. Mesmo ajustado em 25A, a corrente de pico será maior, portanto é melhor não ajustar mais do que isso.",
      speedMeterType:
        "Este aqui seleciona o medidor de velocidade usado em sua bicicleta. Para kits BBS, ele é externo. Este parâmetro é definido pelo fabricante e se sua configuração não for personalizada, então você não precisa modificá-la.",
      speedMeterSignals:
        "Aqui você pode definir quantos sinais por revolução seu sensor gera. Se você usar o sensor externo com ímã, ele gera um sinal por rotação da roda. Este parâmetro é definido pelo fabricante e se sua configuração não for personalizada, então você não precisa modificá-la.",
      wheelDiameter:
        "O diâmetro da roda deve corresponder ao tamanho de sua roda motriz (daí que sua bicicleta poderia ter duas rodas de tamanhos diferentes). Ajustar o diâmetro para um tamanho menor do que realmente é aumentará sua velocidade, mas também pode facilmente levar a danos ao motor.",
      endText:
        "Quando você terminar de sintonizar suas configurações gerais, poderá usar o botão WRITE nesta aba do programa para escrevê-las ao seu controlador. Você também pode usar o botão READ a qualquer momento para lê-los (isto substituirá todos os valores no General. Isto não sobregravará nenhuma outra configuração.",
    },
    levels: {
      header: "Níveis de assistência",
      p1:
        "Todas essas são configurações de assistência possíveis (tanto para assistência a pedal quanto para a alavanca do acelerador usando uma dessas).",
      p2:
        "É importante mencionar que os limites de corrente e velocidade do Assist 0 devem ser ajustados para 1 se você quiser ser capaz de usar a alavanca do acelerador com o Pedal Assist 0 selecionado em seu LCD.",
      p3: "Normalmente o Assist 0 está ajustado a 0 para que você possa usar sua bicicleta sem assistência, se quiser.",
      p4:
        "Seja cuidadoso ao estabelecer estes níveis. Se você ajustar a corrente muito baixa, o motor não será capaz de mover a bicicleta e ela poderá sofrer alguns danos. Se você definir a primeira corrente de nível de assistência muito alta, então a aceleração no início será significativa. Isto pode danificar as engrenagens internas ou fazer com que você caia de sua bicicleta.",
      p5:
        "O limite de velocidade se estabelece a que velocidade (% da velocidade máxima definida a partir de seu LCD) o motor reduzirá sua potência e apenas manterá essa velocidade em vez de acelerar mais.",
      p6:
        "Os interruptores na parte superior da aplicação permitem mostrar valores convertidos automaticamente (corrente e porcentagens de velocidade ou velocidade)",
      endText:
        "Quando você terminar de sintonizar suas configurações de níveis de assistência, poderá usar o botão WRITE nesta aba do programa para escrevê-las ao seu controlador. Você também pode usar o botão READ a qualquer momento para lê-los (isto substituirá todos os valores nos Níveis de assistência. Isto não sobregravará nenhuma outra configuração.",
    },
    pedal: {
      header: "Assistência com pedal",
      p1:
        "O sistema de Pedal Assist auxilia enquanto você está pedalando. Nesta aba, você pode afinar seu desempenho. Alguns deles você não deve mudar, pois são específicos para o seu kit. Estes são definidos pelo fabricante.",
      pedalSensorType:
        "Este parâmetro seleciona o tipo de sensor de rotação do pedal. Ele é definido pelo fabricante e não deve ser alterado.",
      designatedAssistLevel:
        'Você tem dois tipos de operação selecionados com este parâmetro. O primeiro é "Por Comando do Display". Isto significa que o nível de assistência (o da guia Configurações básicas) será selecionado a partir de seu LCD. A segunda opção é escolher um nível de assistência específico que será fixado e você não poderá alterar isso a partir do LCD. Para isto você pode selecionar qualquer nível de assistência de 0 a 9.',
      speedLimit:
        'Esta é a velocidade máxima na qual o motor proporcionará uma aceleração adicional. Quando a velocidade for atingida, ele só a manterá, mas não acelerará mais. Se você definir este parâmetro como "Por Comando do Display", você poderá ajustar a velocidade a partir de seu LCD. Tenha em mente que alguns LCDs permitem que você defina a velocidade de 99km/h, o que não é possível pelo menos com os atuais kits BBS. Até onde eu testei, a velocidade máxima sem pedalar é de 40km/h (quando o tamanho da roda é ajustado corretamente). Esta configuração é usada para todos os níveis de assistência que você vê na aba Basic. Se você ajustar isso para 40km/h (neste programa ou a partir de seu LCD) e seu nível de assistência 5 estiver ajustado para 50% de velocidade, então você será capaz de alcançar 20km/h nesse nível de assistência.',
      startCurrent:
        "Esta é a corrente de partida quando se começa a girar os pedais. É bom ajustar isto para pelo menos 10% para garantir que a bicicleta começará a rodar e o motor não ficará parado. Ajustar isto para um valor muito alto fará com que a bicicleta acelere muito rápido na partida, o que pode danificar suas engrenagens internas e também o motor. O valor recomendado é um entre 10% e 30%. Você também deve certificar-se de não começar a pedalar em uma marcha muito alta, o que fará com que o motor seja carregado em demasia.",
      slowStartMode:
        "Esta configuração controla a rapidez com que a corrente de partida é atingida. Você pode fazer com que sua bicicleta acelere suavemente e a faça reagir rapidamente. Um valor em torno de 4 normalmente funciona bem para ciclismo normal. Se você for ciclista de montanha, então o ajuste para um valor baixo fará com que a aceleração seja mais rápida, o que pode ser útil, mas você deve ter cuidado para não fritar seu controlador e motor.",
      startDegree:
        "Este parâmetro define quantos pulsos do sensor de pedal são necessários antes de o motor arrancar. A rotação completa do pedal nos kits BBS gera 24 pulsos. Ajustar este valor para 0 ou 1 não funcionará. Um valor em torno de 4 funciona bem porque não começa com apenas um pequeno movimento e também não requer muita rotação.",
      workMode:
        "A finalidade deste parâmetro não é muito clara. Ele deve controlar a potência de acordo com a velocidade de rotação do pedal. O valor definido pelo fabricante parece funcionar muito bem, portanto não é necessário alterá-lo.",
      stopDelay:
        "Este é o atraso depois que você pára de pedalar antes que o motor pare. O valor de 250ms funciona bem.",
      currentDecay:
        "Este parâmetro define a rapidez com que a corrente cai quando você está pedalando em jejum e está atingindo a velocidade máxima no nível de assistência selecionado. Valor mais baixo significa que a corrente começará a cair a uma velocidade mais baixa.",
      stopDecay: "A quantidade de tempo que o motor leva para parar.",
      keepCurrent:
        "Esta configuração controla a porcentagem da corrente máxima no nível de assistência selecionado que fluirá através do motor quando você atingir a velocidade máxima e continuar pedalando. Portanto, se sua corrente máxima for 25A e você usar o Pedal Assist 5 ajustado para 50% de corrente, então você terá corrente máxima de 12,5A para este nível de assistência. Então, se a corrente de manutenção estiver ajustada para 50% quando a velocidade máxima for atingida e você continuar pedalando, a corrente será mantida em 6,25A. Isto assegura uma transição suave para a energia auxiliar quando você reduz a velocidade de pedalagem e a velocidade de movimento cai abaixo do máximo.",
      endText:
        "Quando você terminar de afinar suas configurações do Pedal Assist, você pode usar o botão WRITE nesta aba do programa para escrevê-las ao seu controlador. Você também pode usar o botão READ a qualquer momento para lê-los (isto substituirá todos os valores no Assistente de Pedal. Isto não sobregravará nenhuma outra configuração.",
    },
    throttle: {
      header: "Cabo do acelerador",
      p1:
        "Se seu kit estiver equipado com punho de acelerador, esta aba permite que você configure seu funcionamento. Certifique-se de que Assis 0 esteja ajustado para 1 (tanto a corrente quanto a velocidade) se você quiser usá-lo quando o Pedal Assist S0 for selecionado em seu LCD.",
      startVoltage:
        "Esta é a tensão de saída da alavanca do acelerador na qual o motor irá arrancar. O mínimo a que o controlador responde é 1,1V",
      endVoltage:
        "Esta é a tensão de saída da alavanca de aceleração na qual o motor atingirá sua potência máxima (limitada por outros ajustes). O máximo aceito do controlador é de 4,2V. Você precisa brincar um pouco com este parâmetro, pois o máximo da alavanca do acelerador pode ser diferente, dependendo do modelo. Se você definir este parâmetro muito baixo, você quase não obterá resposta do punho do acelerador. Quando você ajusta ao máximo que a manopla pode produzir, você obterá a maior faixa de controle possível sobre a potência do motor.",
      mode:
        "Este é o modo de operação da alavanca do acelerador. Você tem duas opções: velocidade e corrente. Quando ajustado para a velocidade, o controlador usa a velocidade móvel para ajustar a potência do motor de acordo com a posição do punho do acelerador. Infelizmente, há um atraso significativo devido à maneira como a velocidade é medida e a resposta é muito ruim neste modo. Quando ajustado para a corrente, a alavanca controla a corrente do motor de acordo com sua posição. Este modo funciona melhor e semelhante à operação de um carro.",
      designatedAssistLevel:
        'Você pode definir isto para "Por Comando do Display" ou selecionar um nível fixo. A primeira opção utiliza a configuração PAS do seu LCD. Isto significa que a potência máxima de saída e a velocidade dependem do nível PAS selecionado e da posição do punho do acelerador. Portanto, se um PAS baixo for selecionado, a corrente e velocidade máximas também serão baixas, mesmo que você empurre o acelerador ao máximo. Se um nível de assistência fixo for selecionado para este parâmetro, a alavanca do acelerador usará sua máxima corrente e velocidade. Tenha cuidado se você ajustar este nível para o nível 9 para não empurrar o acelerador ao máximo quando parado, pois a corrente alta e a potência podem danificar o controlador e o motor.',
      speedLimit:
        "Com este parâmetro você pode limitar a velocidade máxima ao usar a alavanca do acelerador. Isto sobrescreve a velocidade máxima do nível de assistência designado, se for maior.",
      startCurrent:
        "Esta é a porcentagem de corrente máxima aplicada ao motor quando o punho do acelerador gera a tensão mínima aceita. Normalmente, o valor de 10% ou 20% funciona bem. Se sua corrente máxima na guia Geral estiver definida para 25A e a Corrente de partida estiver definida para 10%, você obterá uma corrente de partida de 2,5A. Isto levará a uma partida suave e não irá carregar muito as engrenagens internas. Se você definir este parâmetro para um valor muito alto, poderá danificar as engrenagens internas e o motor.",
      endText:
        "Quando você terminar de afinar suas configurações do Throttle Handle você pode usar o botão WRITE nesta aba do programa para escrevê-las ao seu controlador. Você também pode usar o botão READ a qualquer momento para lê-los (isto substituirá todos os valores no Throttle Handle. Isto não sobregravará nenhuma outra configuração.",
    },
  },
};

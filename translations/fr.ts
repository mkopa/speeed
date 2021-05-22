import { Translation } from "./type";

export const fr: Translation = {
  messages: {
    processing: "Traitement...",
    deviceIsDisconnected: "L'appareil est déconnecté !",
    connectingInProgress: "Connexion en cours...",
    settingsHaveBeenSaved: "Vos paramètres ont été sauvegardés !",
    configLoadedSuccessful: "Configuration chargée avec succès !",
    overrideFileWarning: {
      header: "Attention !",
      message: {
        theFileText: "Le dossier",
        areYouSureToOverrideText: "existe ! Êtes-vous sûr de vouloir remplacer ce fichier ?",
      },
      buttons: {
        yes: "Remplacer",
        no: "Non",
      },
    },
    unsupportedConfigurationFile: {
      header: "Erreur !",
      text: "Unsupported ou broken configuration file !",
    },
    pleaseWait: "Veuillez patienter...",
    connectingToMotor: "Connexion au moteur...",
    noDeviceFound: "Aucun appareil trouvé !",
    cantEstablishingConnection:
      "Impossible d'établir la connexion avec le moteur ! Vérifier la fin de la connexion et redémarrer !",
    connectedTo: "Connecté à",
    readBasSuccess: {
      basTypeLevel: "Niveaux",
      basTypeGeneral: "Général",
      first: "Lire",
      second: "paramètres avec succès !",
    },
    readPedalAssistSuccess: "Lire les paramètres de l'assistance au pédalage avec succès !",
    readThrottleHandleSuccess: "Lecture réussie des paramètres de la poignée d'accélérateur",
    readAllSuccess: "Lire tous les paramètres avec succès !",
    somethingWentWrong: "Quelque chose a mal tourné ! Journal :",
    writeSuccess: {
      levels: "Niveaux",
      general: "Général",
      pedalAssist: "Aide à la pédale",
      throttleHandle: "Poignée de l'accélérateur",
      first: "Écrire à",
      second: "paramètres avec succès !",
    },
    writeAllSuccess: "Write All parameters successfully !",
  },
  buttons: {
    cancel: "Annuler",
  },
  errors: {
    writeBasErrors: {
      "0": "Protection contre les piles faibles hors de portée, veuillez réinitialiser !",
      "1": "Limite de courant hors de la plage, veuillez réinitialiser !",
      "2": "Limite de courant pour PAS0 hors de la plage, veuillez réinitialiser !",
      "3": "Limite de vitesse pour PAS0 hors de la plage, veuillez réinitialiser !",
      "4": "Limite de courant pour le PAS1 hors de la plage, veuillez réinitialiser !",
      "5": "Limite de vitesse pour le PAS1 hors de portée, veuillez réinitialiser !",
      "6": "Limite de courant pour le PAS2 hors de la plage, veuillez réinitialiser !",
      "7": "Limite de vitesse pour le PAS2 hors de portée, veuillez réinitialiser !",
      "8": "Limite de courant pour le PAS3 hors de la plage, veuillez réinitialiser !",
      "9": "Limite de vitesse pour le PAS3 hors de portée, veuillez réinitialiser !",
      "10": "Limite de courant pour le PAS4 hors de la plage, veuillez réinitialiser !",
      "11": "Limite de vitesse pour le PAS4 hors de portée, veuillez réinitialiser !",
      "12": "Limite de courant pour le PAS5 hors de la plage, veuillez réinitialiser !",
      "13": "Limite de vitesse pour le PAS5 hors de portée, veuillez réinitialiser !",
      "14": "Limite de courant pour le PAS6 hors de la plage, veuillez réinitialiser !",
      "15": "Limite de vitesse pour le PAS6 hors de portée, veuillez réinitialiser !",
      "16": "Limite de courant pour le PAS7 hors de la plage, veuillez réinitialiser !",
      "17": "Limite de vitesse pour PAS7 hors de portée, veuillez réinitialiser !",
      "18": "Limite de courant pour le PAS8 hors de la plage, veuillez réinitialiser !",
      "19": "Limite de vitesse pour le PAS8 hors de portée, veuillez réinitialiser !",
      "20": "Limite de courant pour le PAS9 hors de la plage, veuillez réinitialiser !",
      "21": "Limite de vitesse pour PAS9 hors de portée, veuillez réinitialiser !",
      "22": "Le diamètre de la roue est hors de portée, veuillez réinitialiser !",
      "23": "Les signaux du compteur de vitesse sont hors de portée, veuillez réinitialiser !",
      default: "Problème de communication, veuillez réinitialiser !",
    },
    writePasErrors: {
      "0": "Erreur de type de capteur de pédale, veuillez réinitialiser !",
      "1": "Erreur de niveau d'assistance désigné, veuillez réinitialiser !",
      "2": "Erreur de limite de vitesse, veuillez réinitialiser !",
      "3": "Début Courant hors de portée, veuillez réinitialiser !",
      "4": "Erreur de mode de démarrage lent, veuillez réinitialiser !",
      "5": "Start Degree hors de portée, veuillez réinitialiser !",
      "6": "Erreur de mode de travail, veuillez réinitialiser !",
      "7": "Stop Delay hors de portée, réinitialisation s'il vous plaît !",
      "8": "Décroissance actuelle hors de portée, veuillez réinitialiser !",
      "9": "Stop Decay hors de portée, réinitialisez s'il vous plaît !",
      "10": "Maintenez le courant hors de portée, réinitialisez s'il vous plaît !",
      default: "Erreur inconnue, veuillez réinitialiser !",
    },
    writeThrErrors: {
      "0": "Tension de démarrage hors de portée, veuillez réinitialiser !",
      "1": "Tension d'extrémité hors de portée, veuillez réinitialiser !",
      "2": "Erreur de mode, veuillez réinitialiser !",
      "3": "Erreur d'assistance désignée, veuillez réinitialiser !",
      "4": "Erreur de limite de vitesse, veuillez réinitialiser !",
      "5": "Début Courant hors de portée, veuillez réinitialiser !",
      default: "Erreur inconnue, veuillez réinitialiser !",
    },
  },
  mainRouter: {
    home: "Accueil",
    settings: "Paramètres",
    help: "Aide",
  },
  main: {
    label_language: "Langue",
    object_Profile: {
      header: "Profil",
      open: "Ouvrir",
      save_as: "Enregistrer sous",
      save: "Sauvez",
      default_configuration_string: "Configuration par défaut (aucun fichier spécifié)",
      popup_header: "Sauvegarder la configuration en tant que",
      popup_placeholder: "Entrez le nom du fichier ici",
      popup_button_label: "Sauvez",
    },
    object_Motor: {
      header: "Moteur",
      read_all: "Lire",
      write_all: "Écrire à",
      connect: "Connectez-vous à",
      disconnect: "Déconnexion",
      status: {
        disconnected: "déconnecté",
        connecting: "en connectant",
        connected: "connecté",
        error: "erreur",
      },
      motor_info: {
        status: "Statut",
        manufacturer: "Fabricant",
        model: "Modèle",
        hardware_version: "Version du matériel",
        firmware_version: "Version du micrologiciel",
        nominal_voltage: "Tension nominale",
        max_current: "Courant maximum",
      },
    },
  },
  settings: {
    toolbar: {
      general: "Général",
      levels: "Niveaux",
      pedal: "Pédale",
      throttle: "Papillon des gaz",
    },
    header: {
      readButtonText: "Lire",
      writeButtonText: "Sauvez",
    },
    tabs: {
      general: {
        header: "Général",
        lowBatteryProtection: "Protection contre les piles faibles",
        currentLimit: "Limite de courant",
        speedMeterType: {
          text: "Type de compteur de vitesse",
          types: ["Externe, compteur de roues", "Interne, compteur du moteur", "Par phase du moteur"],
        },
        speedMeterSignals: "Signaux de compteurs de vitesse",
        wheelDiameter: {
          text: "Diamètre de la roue",
          types: [
            "16 pouces",
            "17 pouces",
            "18 pouces",
            "19 pouces",
            "20 pouces",
            "21 pouces",
            "22 pouces",
            "23 pouces",
            "24 pouces",
            "25 pouces",
            "26 pouces",
            "27 pouces",
            "700C",
            "28 pouces",
            "29 pouces",
            "30 pouces",
          ],
        },
      },
      levels: {
        header: "Niveaux d'assistance",
        level: "Niveau",
        current: "Actuel",
        speed: "Vitesse",
        popoverCurrentLimitHeader: "Limite de courant pour le niveau",
        popoverSpeedLimitHeader: "Limite de vitesse pour le niveau",
      },
      pedal: {
        header: "Aide à la pédale",
        pedalSensorType: {
          text: "Type de capteur de pédale",
          types: ["Aucun", "DH-Sensor-12", "BB-Sensor-32", "DoubleSignal-24"],
        },
        designatedAssistLevel: {
          text: "Niveau d'assistance désigné",
          types: ["Sur ordre de Display", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limite de vitesse",
          types: [
            "Sur ordre de Display",
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
        startCurrent: "Début Courant",
        slowStartMode: "Mode de démarrage lent",
        startDegree: "Début du diplôme",
        workMode: {
          text: "Mode de travail",
          types: ["Indéterminé"],
        },
        stopDelay: "Délai d'arrêt",
        currentDecay: "Décroissance actuelle",
        stopDecay: "Arrêter la dégradation",
        keepCurrent: "Garder le courant",
      },
      throttle: {
        header: "Assistance à l'accélération",
        startVoltage: "Tension de départ",
        endVoltage: "Tension d'extrémité",
        mode: {
          text: "Mode",
          types: ["Vitesse", "Actuel"],
        },
        designatedAssistLevel: {
          text: "Niveau d'assistance désigné",
          types: ["Sur ordre de Display", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        speedLimit: {
          text: "Limite de vitesse",
          types: [
            "Sur ordre de Display",
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
        startCurrent: "Début Courant",
      },
    },
  },
  help: {
    about: {
      header: "A propos de l'application",
      p1: "Outil de configuration pour la série de moteurs Bafang BBS.",
      author: "Auteur",
    },
    connection: {
      header: "Connexion",
      p1:
        "Pour vous connecter au contrôleur de votre vélo électrique de la série Bafang BBS, vous avez besoin d'un adaptateur USB-OTG, un adaptateur USB vers série avec des connecteurs à broches femelles de type Julet à l'extrémité.",
      p2:
        "Vous pouvez également acheter un câble de programmation USB \"original\", mais il s'agit simplement d'un adaptateur USB-série hors de prix avec le connecteur approprié pour le câble de votre contrôleur BBS.",
    },
    general: {
      header: "Général",
      lowBatteryProtection:
        "Il s'agit de la tension à laquelle le contrôleur arrête le moteur pour protéger votre batterie contre la surdécharge. Elle doit être réglée correctement par le fabricant et vous n'avez pas besoin de la modifier. Pour les packs de batteries 13S, 41V est la valeur par défaut.",
      currentLimit:
        "Il s'agit du courant maximum autorisé à circuler dans le moteur. Si votre moteur est de 25A par exemple, vous pouvez le régler à 20A pour le protéger si vous le souhaitez. Il n'est pas recommandé de régler un courant plus élevé que le courant nominal. Même réglé à 25A, le courant de pointe sera plus élevé, il est donc préférable de ne pas le régler plus que cela.",
      speedMeterType:
        "Celui-ci sélectionne le compteur de vitesse utilisé sur votre vélo. Pour les kits BBS, il est externe. Ce paramètre est défini par le fabricant et si votre configuration n'est pas personnalisée, vous n'avez pas besoin de le modifier.",
      speedMeterSignals:
        "Ici, vous pouvez définir combien de signaux par révolution votre capteur génère. Si vous utilisez le capteur externe avec aimant, il génère un signal par tour de roue. Ce paramètre est défini par le fabricant et si votre configuration n'est pas personnalisée, vous n'avez pas besoin de le modifier.",
      wheelDiameter:
        "Le diamètre de la roue doit correspondre à la taille de votre roue motrice (votre vélo peut donc avoir deux roues de tailles différentes). Si vous réglez le diamètre sur une taille inférieure à la réalité, vous augmenterez votre vitesse, mais vous risquez aussi d'endommager le moteur.",
      endText:
        "Lorsque vous avez terminé de régler vos paramètres généraux, vous pouvez utiliser le bouton WRITE dans cet onglet du programme pour les écrire dans votre contrôleur. Vous pouvez également utiliser le bouton READ à tout moment pour les lire (cela remplacera toutes les valeurs du General. Cela n'écrasera pas les autres réglages.",
    },
    levels: {
      header: "Niveaux d'assistance",
      p1:
        "Ce sont tous les réglages d'assistance possibles (à la fois pour l'assistance à la pédale et pour la poignée des gaz en utilisant l'un de ces réglages).",
      p2:
        "Il est important de mentionner que le courant et les limites de vitesse de l'assistance 0 doivent être réglés sur 1 si vous voulez pouvoir utiliser votre poignée d'accélérateur avec l'assistance pédale 0 sélectionnée sur votre LCD.",
      p3:
        "En général, l'assistance 0 est réglée sur 0 pour que vous puissiez utiliser votre vélo sans assistance si vous le souhaitez.",
      p4:
        "Faites attention en fixant ces niveaux. Si vous réglez un courant trop faible, le moteur ne sera pas en mesure de déplacer la bicyclette et celle-ci pourrait être endommagée. Si vous réglez le courant du premier niveau d'assistance trop élevé, l'accélération au démarrage sera importante. Cela pourrait endommager les engrenages internes ou vous faire tomber de votre vélo.",
      p5:
        "La limite de vitesse détermine à quelle vitesse (% de la vitesse maximale définie sur votre écran LCD) le moteur réduira sa puissance et maintiendra cette vitesse au lieu d'accélérer davantage.",
      p6:
        "Les commutateurs situés en haut de l'application vous permettent d'afficher les valeurs converties automatiquement (pourcentage du courant et du speedor).",
      endText:
        "Lorsque vous avez terminé de régler les paramètres des niveaux d'assistance, vous pouvez utiliser le bouton WRITE dans cet onglet du programme pour les écrire sur votre contrôleur. Vous pouvez également utiliser le bouton READ à tout moment pour les lire (cela remplacera toutes les valeurs des niveaux d'assistance. Cela n'écrasera pas les autres réglages.",
    },
    pedal: {
      header: "Aide à la pédale",
      p1:
        "Le système Pedal Assist vous assiste lorsque vous pédalez. Dans cet onglet, vous pouvez régler ses performances. Vous ne devez pas modifier certaines d'entre elles car elles sont spécifiques à votre kit. Celles-ci sont définies par le fabricant.",
      pedalSensorType:
        "Ce paramètre sélectionne le type de capteur de rotation de la pédale. Il est défini par le fabricant et ne doit pas être modifié.",
      designatedAssistLevel:
        "Ce paramètre permet de sélectionner deux types d'opération. Le premier est \"By Display's Command\". Cela signifie que le niveau d'assistance (celui de l'onglet Paramètres de base) sera sélectionné à partir de votre écran LCD. La deuxième option consiste à choisir un niveau d'assistance spécifique qui sera fixe et que vous ne pourrez pas modifier à partir de l'écran LCD. Pour cela, vous pouvez sélectionner n'importe quel niveau d'assistance de 0 à 9.",
      speedLimit:
        "Il s'agit de la vitesse maximale à laquelle le moteur fournira une accélération supplémentaire. Lorsque la vitesse est atteinte, il la maintient mais n'accélère pas davantage. Si vous réglez ce paramètre sur \"By Display's Command\", vous pourrez régler la vitesse à partir de votre écran LCD. Gardez à l'esprit que certains LCD vous permettent de régler la vitesse de 99km/h, ce qui n'est pas possible, du moins avec les kits BBS actuels. Pour autant que j'ai testé, la vitesse maximale sans pédaler est de 40km/h (lorsque la taille de la roue est correctement réglée). Ce paramètre est utilisé pour tous les niveaux d'assistance que vous voyez dans l'onglet Basic. Si vous réglez ce paramètre sur 40km/h (dans ce programme ou sur votre écran LCD) et que votre niveau d'assistance 5 est réglé sur 50% de vitesse, vous pourrez atteindre 20km/h à ce niveau d'assistance.",
      startCurrent:
        "Il s'agit du courant de démarrage lorsque vous commencez à tourner les pédales. Il est bon de le régler sur au moins 10 % pour être sûr que la bicyclette commencera à bouger et que le moteur ne sera pas bloqué. Si vous le réglez à une valeur très élevée, la bicyclette accélérera très rapidement au démarrage, ce qui pourrait endommager ses engrenages internes et le moteur. La valeur recommandée se situe entre 10% et 30%. Vous devez également vous assurer que vous ne commencez pas à pédaler avec un rapport trop élevé, ce qui chargerait trop le moteur.",
      slowStartMode:
        "Ce paramètre contrôle la rapidité avec laquelle le courant de démarrage est atteint. Vous pouvez faire en sorte que votre vélo accélère en douceur et qu'il réagisse rapidement. Une valeur autour de 4 fonctionne généralement bien pour un cyclisme normal. Si vous êtes un vététiste, le réglage d'une valeur faible rendra l'accélération plus rapide, ce qui peut être utile mais vous devez faire attention à ne pas griller votre contrôleur et votre moteur.",
      startDegree:
        "Ce paramètre définit combien d'impulsions du capteur de la pédale sont nécessaires avant que le moteur ne démarre. Une révolution complète de la pédale sur les kits BBS génère 24 impulsions. Le réglage de ce paramètre sur 0 ou 1 ne fonctionnera pas. Une valeur autour de 4 fonctionne bien car elle ne démarre pas avec un petit mouvement et ne nécessite pas non plus une rotation trop importante.",
      workMode:
        "L'objectif de ce paramètre n'est pas très clair. Il est censé contrôler la puissance en fonction de la vitesse de rotation de la pédale. La valeur fixée par le fabricant semble fonctionner parfaitement, il n'est donc pas nécessaire de la modifier.",
      stopDelay:
        "C'est le délai après que vous ayez arrêté de pédaler avant que le moteur ne s'arrête. Une valeur de 250ms fonctionne bien.",
      currentDecay:
        "Ce paramètre définit la vitesse à laquelle le courant diminue lorsque vous pédalez à vive allure et que vous atteignez la vitesse maximale au niveau d'assistance sélectionné. Une valeur plus faible signifie que le courant commencera à baisser à une vitesse plus faible.",
      stopDecay: "Le temps qu'il faut au moteur pour s'arrêter.",
      keepCurrent:
        "Ce paramètre contrôle le pourcentage du courant maximal au niveau d'assistance sélectionné qui circulera dans le moteur lorsque vous atteindrez la vitesse maximale et continuerez à pédaler. Ainsi, si votre courant maximal est de 25 A et que vous utilisez l'assistance au pédalage 5 réglée sur 50 % du courant, vous aurez un courant maximal de 12,5 A pour ce niveau d'assistance. Ensuite, si la fonction de maintien du courant est réglée sur 50%, lorsque la vitesse maximale est atteinte et que vous continuez à pédaler, le courant sera maintenu à 6,25A. Cela garantit une transition en douceur vers la puissance d'assistance lorsque vous réduisez la vitesse de pédalage et que la vitesse de déplacement descend en dessous du maximum.",
      endText:
        "Lorsque vous avez terminé de régler vos paramètres d'assistance à la pédale, vous pouvez utiliser le bouton WRITE dans cet onglet du programme pour les écrire sur votre contrôleur. Vous pouvez également utiliser le bouton READ à tout moment pour les lire (cela remplacera toutes les valeurs de l'assistant de pédale. Cela n'écrasera pas les autres réglages.",
    },
    throttle: {
      header: "Poignée de l'accélérateur",
      p1:
        "Si votre kit est équipé d'une poignée des gaz, cet onglet vous permet de configurer son fonctionnement. Assurez-vous que Assis 0 est réglé sur 1 (à la fois courant et vitesse) si vous voulez l'utiliser lorsque Pedal Assist S0 est sélectionné sur votre LCD.",
      startVoltage:
        "C'est la tension de sortie de la poignée des gaz à laquelle le moteur démarrera. Le minimum auquel le contrôleur répond est de 1,1 V.",
      endVoltage:
        "Il s'agit de la tension de sortie de la poignée des gaz à laquelle le moteur atteindra sa puissance maximale (limitée par les autres réglages). Le maximum accepté par le contrôleur est de 4,2V. Vous devez jouer un peu avec ce paramètre car le maximum de la poignée des gaz peut être différent selon le modèle. Si vous réglez ce paramètre trop bas, vous n'obtiendrez pratiquement aucune réponse de la poignée des gaz. Si vous le réglez au maximum de ce que la poignée peut produire, vous obtiendrez la plus large gamme possible de contrôle de la puissance du moteur.",
      mode:
        "Il s'agit du mode de fonctionnement de la poignée des gaz. Vous avez deux options : vitesse et courant. Lorsqu'il est réglé sur vitesse, le contrôleur utilise la vitesse de déplacement pour régler la puissance du moteur en fonction de la position de la poignée des gaz. Malheureusement, il y a un retard important en raison de la façon dont la vitesse est mesurée et la réponse est assez mauvaise dans ce mode. Lorsqu'il est réglé sur le courant, la poignée contrôle le courant du moteur en fonction de sa position. Ce mode fonctionne mieux et ressemble au fonctionnement d'une voiture.",
      designatedAssistLevel:
        "Vous pouvez le régler sur \"By Display's Command\" ou sélectionner un niveau fixe. La première option utilise le réglage PAS de votre écran LCD. Cela signifie que la puissance maximale et la vitesse dépendent du niveau de PAS sélectionné et de la position de la poignée d'accélérateur. Ainsi, si une PAS faible est sélectionnée, le courant et la vitesse maximum seront également faibles, même si vous poussez la poignée des gaz au maximum. Si un niveau d'assistance fixe est sélectionné pour ce paramètre, la poignée des gaz utilisera son courant et sa vitesse maximum. Faites attention, si vous réglez ce paramètre au niveau 9, de ne pas pousser l'accélérateur au maximum lorsque vous êtes à l'arrêt, car le courant et la puissance élevés pourraient endommager votre contrôleur et votre moteur.",
      speedLimit:
        "Ce paramètre vous permet de limiter la vitesse maximale lorsque vous utilisez la poignée des gaz. Cette limitation remplace la vitesse maximale du niveau d'assistance désigné si elle est plus élevée.",
      startCurrent:
        "Il s'agit du pourcentage du courant maximal appliqué au moteur lorsque la poignée d'accélérateur génère la tension minimale acceptée. En général, une valeur de 10% ou 20% fonctionne bien. Si votre courant maximum dans l'onglet Général est réglé sur 25A et que le courant de démarrage est réglé sur 10%, vous obtiendrez un courant de démarrage de 2,5A. Cela permet un démarrage en douceur et ne charge pas trop les engrenages internes. Si vous réglez ce paramètre sur une valeur très élevée, vous risquez d'endommager les engrenages internes et le moteur.",
      endText:
        "Lorsque vous avez terminé de régler les paramètres de la poignée des gaz, vous pouvez utiliser le bouton WRITE dans cet onglet du programme pour les écrire dans votre contrôleur. Vous pouvez également utiliser le bouton READ à tout moment pour les lire (cela remplacera toutes les valeurs de la poignée des gaz. Cela n'écrasera pas les autres réglages.",
    },
  },
};

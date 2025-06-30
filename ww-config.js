export default {
  editor: {
    label: {
      en: 'Tooltip',
      fr: 'Info-bulle'
    },
    icon: 'tooltip',
    customStylePropertiesOrder: [
      'backgroundColor',
      'borderColor',
      'borderRadius',
      'borderWidth',
      'color',
      'fontSize'
    ],
    customSettingsPropertiesOrder: [
      'text',
      'triggerText',
      'placement',
      'trigger',
      'size',
      'delay',
      'hideDelay',
      'offset',
      'showArrow',
      'disabled'
    ]
  },
  properties: {
    text: {
      label: {
        en: 'Tooltip text',
        fr: 'Texte de l\'info-bulle'
      },
      type: 'Text',
      defaultValue: 'This is a tooltip',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    triggerText: {
      label: {
        en: 'Trigger text',
        fr: 'Texte du déclencheur'
      },
      type: 'Text',
      defaultValue: 'Hover me',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    placement: {
      label: {
        en: 'Placement',
        fr: 'Placement'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'top', label: { en: 'Top', fr: 'Haut' } },
          { value: 'bottom', label: { en: 'Bottom', fr: 'Bas' } },
          { value: 'left', label: { en: 'Left', fr: 'Gauche' } },
          { value: 'right', label: { en: 'Right', fr: 'Droite' } }
        ]
      },
      defaultValue: 'top',
      bindable: true,
      section: 'settings'
    },
    trigger: {
      label: {
        en: 'Trigger',
        fr: 'Déclencheur'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'hover', label: { en: 'Hover', fr: 'Survol' } },
          { value: 'focus', label: { en: 'Focus', fr: 'Focus' } }
        ]
      },
      defaultValue: 'hover',
      bindable: true,
      section: 'settings'
    },
    size: {
      label: {
        en: 'Size',
        fr: 'Taille'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'settings'
    },
    delay: {
      label: {
        en: 'Show delay (ms)',
        fr: 'Délai d\'affichage (ms)'
      },
      type: 'Number',
      defaultValue: 700,
      bindable: true,
      section: 'settings',
      options: {
        min: 0,
        step: 50
      }
    },
    hideDelay: {
      label: {
        en: 'Hide delay (ms)',
        fr: 'Délai de masquage (ms)'
      },
      type: 'Number',
      defaultValue: 300,
      bindable: true,
      section: 'settings',
      options: {
        min: 0,
        step: 50
      }
    },
    offset: {
      label: {
        en: 'Offset (px)',
        fr: 'Décalage (px)'
      },
      type: 'Number',
      defaultValue: 8,
      bindable: true,
      section: 'settings'
    },
    showArrow: {
      label: {
        en: 'Show arrow',
        fr: 'Afficher la flèche'
      },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    disabled: {
      label: {
        en: 'Disabled',
        fr: 'Désactivé'
      },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    customClass: {
      label: {
        en: 'Tooltip CSS class',
        fr: 'Classe CSS de l\'info-bulle'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    triggerClass: {
      label: {
        en: 'Trigger CSS class',
        fr: 'Classe CSS du déclencheur'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    }
  },
  actions: [
    {
      label: {
        en: 'Show tooltip',
        fr: 'Afficher l\'info-bulle'
      },
      action: 'show'
    },
    {
      label: {
        en: 'Hide tooltip',
        fr: 'Masquer l\'info-bulle'
      },
      action: 'hide'
    }
  ]
} 
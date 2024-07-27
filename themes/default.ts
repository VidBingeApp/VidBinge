const tokens = {
  black: "#000000",
  white: "#FFFFFF",
  semantic: {
    red: {
      c100: "#F46E6E",
      c200: "#E44F4F",
      c300: "#D74747",
      c400: "#B43434",
    },
    green: {
      c100: "#60D26A",
      c200: "#40B44B",
      c300: "#31A33C",
      c400: "#237A2B",
    },
    silver: {
      c100: "#DEDEDE",
      c200: "#B6CAD7",
      c300: "#8EA3B0",
      c400: "#617A8A",
    },
    yellow: {
      c100: "#FFF599",
      c200: "#FCEC61",
      c300: "#D8C947",
      c400: "#AFA349",
    },
    rose: {
      c100: "#DB3D61",
      c200: "#8A293B",
      c300: "#812435",
      c400: "#701B2B",
    },
  },
  purple: {
    c50: "#aac5ff",
    c100: "#82a9ff",
    c200: "#4681ff",
    c300: "#1a63ff",
    c400: "#054eec",
    c500: "#083aa7",
    c600: "#072c7c",
    c700: "#06215d",
    c800: "#041741",
    c900: "#03102a"
  },
  shade: {
    c50: "#756790",
    c100: "#60527a",
    c200: "#4a3f60",
    c300: "#3c324f",
    c400: "#302741",
    c500: "#251e32",
    c600: "#1d1728",
    c700: "#181322",
    c800: "#130f1b",
    c900: "#0d0a12"
  },
  ash: {
    c50: "#7f859b",
    c100: "#5b627b",
    c200: "#444b64",
    c300: "#2b344e",
    c400: "#202842",
    c500: "#1c243c",
    c600: "#171d32",
    c700: "#131829",
    c800: "#101420",
    c900: "#0c0f16"
  },
  blue: {
    c50: "#adb4f5",
    c100: "#7981cc",
    c200: "#5d65ae",
    c300: "#3b438c",
    c400: "#2a3171",
    c500: "#1f2450",
    c600: "#1b1f41",
    c700: "#171b36",
    c800: "#101120",
    c900: "#0b0c13"
  },
  orange: {
    c50: "#FFB380",
    c100: "#FFA366",
    c200: "#FF944D",
    c300: "#FF8533",
    c400: "#FF751A",
    c500: "#E66600",
    c600: "#CC5900",
    c700: "#B34D00",
    c800: "#993F00",
    c900: "#803200"
  },
  pink: {
    c50: "#FF99CC",
    c100: "#FF80BF",
    c200: "#FF66B3",
    c300: "#FF4DA6",
    c400: "#FF3399",
    c500: "#E6007A",
    c600: "#CC0066",
    c700: "#B30059",
    c800: "#99004D",
    c900: "#800040"
  },
  teal: {
    c50: "#80FFCC",
    c100: "#66FFBF",
    c200: "#4DFFB3",
    c300: "#33FFA6",
    c400: "#1AFF99",
    c500: "#00E67A",
    c600: "#00CC66",
    c700: "#00B359",
    c800: "#00994D",
    c900: "#008040"
  }
};

export const defaultTheme = {
  extend: {
    colors: {
      themePreview: {
        primary: tokens.blue.c200,
        secondary: tokens.shade.c50
      },

      pill: {
        background: tokens.shade.c300,
        backgroundHover: tokens.shade.c200,
        highlight: tokens.blue.c200,

        activeBackground: tokens.shade.c300,
      },

      global: {
        accentA: tokens.blue.c200,
        accentB: tokens.blue.c300
      },

      lightBar: {
        light: tokens.blue.c400
      },

      buttons: {
        toggle: tokens.purple.c300,
        toggleDisabled: tokens.ash.c500,
        primary: tokens.ash.c700,
        primaryText: tokens.white,
        secondary: tokens.ash.c700,
        secondaryHover: tokens.ash.c700,
        purple: tokens.purple.c500,
        purpleHover: tokens.purple.c400,
        cancel: tokens.ash.c500,
        cancelHover: tokens.ash.c300
      },

      background: {
        main: tokens.shade.c900,
        secondary: tokens.shade.c600,
        secondaryHover: tokens.shade.c400,
        accentA: tokens.purple.c500,
        accentB: tokens.blue.c500
      },

      modal: {
        background: tokens.shade.c800,
      },

      type: {
        logo: tokens.purple.c100,
        text: tokens.shade.c50,
        dimmed: tokens.shade.c50,
        divider: tokens.ash.c500,
        secondary: tokens.ash.c100,
        link: tokens.purple.c100,
        linkHover: tokens.purple.c50
      },

      search: {
        background: tokens.shade.c500,
        hoverBackground: tokens.shade.c600,
        focused: tokens.shade.c400,
        placeholder: tokens.shade.c100,
        icon: tokens.shade.c100
      },

      mediaCard: {
        hoverBackground: tokens.shade.c600,
        hoverAccent: tokens.shade.c50,
        hoverShadow: tokens.shade.c900,
        shadow: tokens.shade.c700,
        barColor: tokens.ash.c200,
        barFillColor: tokens.purple.c100,
        badge: tokens.shade.c700,
        badgeText: tokens.ash.c100
      },

      largeCard: {
        background: tokens.shade.c600,
        icon: tokens.purple.c400
      },

      dropdown: {
        background: tokens.shade.c600,
        altBackground: tokens.shade.c700,
        hoverBackground: tokens.shade.c500,
        highlight: tokens.semantic.yellow.c400,
        highlightHover: tokens.semantic.yellow.c200,
        text: tokens.shade.c50,
        secondary: tokens.shade.c100,
        border: tokens.shade.c400,
        contentBackground: tokens.shade.c500
      },

      authentication: {
        border: tokens.shade.c300,
        inputBg: tokens.shade.c600,
        inputBgHover: tokens.shade.c500,
        wordBackground: tokens.shade.c500,
        copyText: tokens.shade.c100,
        copyTextHover: tokens.ash.c50,
        errorText: tokens.semantic.rose.c100,
      },

      settings: {
        sidebar: {
          activeLink: tokens.shade.c600,
          badge: tokens.shade.c900,

          type: {
            secondary: tokens.shade.c200,
            inactive: tokens.shade.c50,
            icon: tokens.shade.c50,
            iconActivated: tokens.purple.c200,
            activated: tokens.purple.c50
          }
        },

        card: {
          border: tokens.shade.c400,
          background: tokens.shade.c400,
          altBackground: tokens.shade.c400
        },

        saveBar: {
          background: tokens.shade.c800
        }
      },

      utils: {
        divider: tokens.ash.c300
      },

      errors: {
        card: tokens.shade.c800,
        border: tokens.ash.c500,

        type: {
          secondary: tokens.ash.c100
        }
      },

      about: {
        circle: tokens.ash.c500,
        circleText: tokens.ash.c50
      },

      editBadge: {
        bg: tokens.ash.c500,
        bgHover: tokens.ash.c400,
        text: tokens.ash.c50
      },

      progress: {
        background: tokens.ash.c50,
        preloaded: tokens.ash.c50,
        filled: tokens.purple.c200
      },

      video: {
        buttonBackground: tokens.ash.c200,

        autoPlay: {
          background: tokens.ash.c700,
          hover: tokens.ash.c500
        },

        scraping: {
          card: tokens.shade.c700,
          error: tokens.semantic.red.c200,
          success: tokens.semantic.green.c200,
          loading: tokens.purple.c200,
          noresult: tokens.ash.c100
        },

        audio: {
          set: tokens.purple.c200
        },

        context: {
          background: tokens.ash.c900,
          light: tokens.shade.c50,
          border: tokens.ash.c600,
          hoverColor: tokens.ash.c600,
          buttonFocus: tokens.ash.c500,
          flagBg: tokens.ash.c500,
          inputBg: tokens.ash.c600,
          buttonOverInputHover: tokens.ash.c500,
          inputPlaceholder: tokens.ash.c200,
          cardBorder: tokens.ash.c700,
          slider: tokens.ash.c50,
          sliderFilled: tokens.purple.c200,
          error: tokens.semantic.red.c200,

          buttons: {
            list: tokens.ash.c700,
            active: tokens.ash.c900
          },

          closeHover: tokens.ash.c800,

          type: {
            main: tokens.semantic.silver.c400,
            secondary: tokens.ash.c200,
            accent: tokens.purple.c200
          }
        }
      }
    }
  }
};

module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme("colors.black", "currentColor"),
      }),
      divideColor: (theme) => ({
        DEFAULT: theme("colors.background", "currentColor"),
      }),
      lineHeight: {
        DEFAULT: 1.3,
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    zIndex: {
      "-1": -1,
      0: 0,
      1: 1,

      // z-index semanticos
      backdrop: 1000,
      dialog: 2000,
      "loader-inner": 3000,
      loader: 4000,
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      proxima: ["ProximaNova", "sans-serif"],
    },
    fontSize: {
      xss: ["0.625rem"], // 10px
      xs: ["0.75rem"], // 12px
      sm: ["0.875rem"], // 14px
      base: ["1rem"], // 16px
      lg: ["1.125rem"], // 18px
      xl: ["1.25rem"], // 20px
      "2xl": ["1.375rem"], // 22px
      "3xl": ["1.5rem"], // 24px
      "4xl": ["1.875rem"], // 30px
      "5xl": ["2rem"], // 32px
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        DEFAULT: "#053768",
        1: "#05376899",
        2: "#9BAFC3",
        3: "#CDD7E1",
        4: "#ECF0F3",
        5: '#347FC7'
      },
      yellow: {
        DEFAULT: "#FDC600",
        1: "#fedd66",
        2: "#fee899",
        3: "#fff4cc",
        4: "#F18700",
      },
      orange: {
        DEFAULT: "#F18700",
      },
      green: {
        DEFAULT: "#95C11F",
        1: "#7e9934",
        2: '#27AE60',
        3: '#40CD28'
      },
      red: {
        DEFAULT: "#C11F1F",
        1: "#EE5B4A",
        2: '#C0392B'
      },
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        '1': '#484848',
        '2': '#737373',
        '3': '#F6F6F6',
        '4': '#a7a7a7',
        '5': '#E4E4E4',
        '6': '#535353',
        '7': '#F1F2F8',
        '8': '#63656A',
        '9': '#D1D1D1',
        '10': '#9F9F9F',
        '11': '#C4C4C4',
        '12': '#878787',
        '13': '#F0F2F5',
        '14': '#585858',
        '15': '#C7C7C7',
        '16': '#DCDCDC',
        '17': '#3B3B3D'
      },
      orange: {
        DEFAULT: "#F18700",
      },
      background: "#FFFFFF",
    },
    fontWeight: {
      100: 100,
      200: 200,
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
      800: 800,
      900: 900,
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    boxShadow: {
      none: "none",
      DEFAULT: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
      base: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      bottom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      side: "4px 4px 16px 0px rgba(0, 0, 0, 0.1)",
      footer: "0px -4px 8px 0px rgba(170, 170, 170, 0.1)",
      inferior: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      'center': '0px 1px 4px rgba(0, 0, 0, 0.15)'
    },
    borderRadius: {
      none: "0",
      full: "9999px",

      DEFAULT: "3px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      30: "30px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      7: "7px",
    },
    container: {
      padding: "3.5rem",
    },
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    // require("./src/scss/plugins/color-variables")({
    //   className: "btn",
    //   variable: "btn-color",
    // }),
    // require("tailwind-css-variables")({
    //   colors: "color",
    // }),
  ],
};

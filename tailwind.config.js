const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        mono: ["'Manrope'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
        cta: withOpacity("--text-cta"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        cta: withOpacity("--bg-cta"),
        toggle: withOpacity("--bg-toggle"),
        "primary-900": withOpacity("--bg-primary-900"),
        "primary-700": withOpacity("--bg-primary-700"),
        "primary-200": withOpacity("--bg-primary-200"),
        discount: withOpacity("--bg-discount"),
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.05,1.05,1,-0.08)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
      });
    }),
  ],
};

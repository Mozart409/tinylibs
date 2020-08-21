module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/ui"),
  ],
};

const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [forms],
};

document.addEventListener('DOMContentLoaded', () => {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#1d2027',
          grey: '#57665f',
          darkgrey: '#1d2027',
          text-green-600: '#65757e',
        },
        fontFamily: {
          Gotham: ['"Gotham Bold"', "sans-serif"],
        },
        maxWidth: {
          '30': '30rem',
          '78': '78rem',
        },
        inset: {
          '45': '45%',
        },
      }
    }
  }
});
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1E',
        surface: '#131929',
        'surface-alt': '#1C2438',
        accent: '#E8A838',
        success: '#3ECFAA',
        danger: '#E85D4A',
        'text-primary': '#F5F0E8',
        'text-secondary': '#8A8680',
        'text-muted': '#4A4A52',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: '#1F2A3F',
        subtle: '#1F2A3F',
      },
    },
  },
  plugins: [],
}

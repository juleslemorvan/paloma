import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/order/**/*.{ts,tsx}',
    './src/Components/order/**/*.{ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        cream: '#F5F9E9',
        sand: '#EEF1DC',
        terracotta: '#B86754',
        plum: '#4B3B47',
        peach: '#E8A97F',
        whatsapp: '#25D366',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'secondary' : '#159EEC',
        'primary' : '#1F2B6C',
        'accent' : '#BFD2F8',
        'black' : '#212124',
        'white' : '#FCFEFE',
      },
      fontSize: {
        'display' : '48px',
        'display2' : '32px',
        'bd' : '16px',
        'bd2' : '18px',
        'custom-small' : '14px',
        'caption' : '18px',
        'title' : '26px',
      },
      height: {
        'fullh' : '550px',
      }
    },
  },
  plugins: [],
}
export default config

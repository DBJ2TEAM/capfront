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
      color: {
        'secondary' : '#159EEC',
        'primary' : '#1F2B6C',
        'accent' : '#BFD2F8',
        'black' : '#212124',
        'white' : '#FCFEFE',
      },
      fontSize: {
        'text-display' : '48px',
        'text-display2' : '32px',
        'text-bd' : '16px',
        'text-bd2' : '18px',
        'text-small' : '14px',
        'text-caption' : '18px',
        'text-title' : '26px',
      },
    },
  },
  plugins: [],
}
export default config

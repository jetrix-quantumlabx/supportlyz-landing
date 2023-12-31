import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        leap: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
          },
          '50%': {
            transform: 'translateY(5%)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'bounce-slow': 'leap 8s linear infinite',
      },
      colors: {
        geyser: {
          '100': '#EDF2F5',
          '200': '#d9e4ea',
          '300': '#a9c3d0',
          '400': '#7ba2b5',
          '500': '#5a879d',
          '600': '#466d83',
          '700': '#3a596a',
          '800': '#334c59',
          '900': '#2e414c',
        },
        emerald: {
          '100': '#ddfbe9',
          '200': '#bdf5d5',
          '300': '#8aebb4',
          '400': '#50d88b',
          '500': '#2ac870',
          '600': '#1b9e55',
          '700': '#197c45',
          '800': '#19623a',
          '900': '#096B5F',
        },
        firefly: {
          '100': '#dbf1f2',
          '200': '#bbe3e6',
          '300': '#8cced4',
          '400': '#55afbb',
          '500': '#3a93a0',
          '600': '#337987',
          '700': '#2f636f',
          '800': '#2d525d',
          '900': '#152930',
        },
        'elf-green': {
          '100': '#c8fff1',
          '200': '#91fee4',
          '300': '#52f6d6',
          '400': '#1ee3c2',
          '500': '#05c7a9',
          '600': '#01a08b',
          '700': '#068374',
          '800': '#0a655b',
          '900': '#003330',
        },
      },
      boxShadow: {
        'geyser-5': '0 10px 20px rgba(104, 134, 193, 0.05)',
        'geyser-10': '0 10px 20px rgba(104, 134, 193, 0.10)',
        'geyser-20': '0 10px 20px rgba(104, 134, 193, 0.20)',
        'emerald-40': '0 10px 20px rgba(42, 200, 112, 0.4)',
        'emerald-50': '0 10px 20px rgba(42, 200, 112, 0.5)',
      },
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1740px',
      },
    },
  },
  plugins: [],
}
// eslint-disable-next-line import/no-default-export
export default config

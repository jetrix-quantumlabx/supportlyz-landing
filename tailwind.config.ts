import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      },
      boxShadow: {
        'geyser-5': '0 10px 20px rgba(104, 134, 193, 0.05)',
        'geyser-10': '0 10px 20px rgba(104, 134, 193, 0.10)',
        'geyser-20': '0 10px 20px rgba(104, 134, 193, 0.20)',
        'emerald-40': '0 10px 20px rgba(42, 200, 112, 0.4)',
        'emerald-50': '0 10px 20px rgba(42, 200, 112, 0.5)',
      },
    },
  },
  plugins: [],
}
// eslint-disable-next-line import/no-default-export
export default config

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
          '50': '#f5f8fa',
          '100': '#ebf1f4',
          '200': '#d9e4ea',
          '300': '#a9c3d0',
          '400': '#7ba2b5',
          '500': '#5a879d',
          '600': '#466d83',
          '700': '#3a596a',
          '800': '#334c59',
          '900': '#2e414c',
          '950': '#1f2a32',
        },
        emerald: {
          '50': '#f0fdf5',
          '100': '#ddfbe9',
          '200': '#bdf5d5',
          '300': '#8aebb4',
          '400': '#50d88b',
          '500': '#2ac870',
          '600': '#1b9e55',
          '700': '#197c45',
          '800': '#19623a',
          '900': '#165131',
          '950': '#072c19',
        },
      },
      boxShadow: {
        'geyser-5': '0 10px 20px rgba(104, 134, 193, 0.05)',
        'geyser-10': '0 10px 20px rgba(104, 134, 193, 0.10)',
        'emerald-40': '0 10px 20px rgba(42, 200, 112, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config

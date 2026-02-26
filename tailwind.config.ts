import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        black: '#0a0a0a',
        charcoal: '#141414',
        zinc: '#1a1a1a',
        ash: '#2a2a2a',
        muted: '#6b6b6b',
        silver: '#a0a0a0',
        light: '#e8e8e8',
        white: '#f5f5f5',
        accent: '#c8a96e',
      },
    },
  },
  plugins: [],
}
export default config

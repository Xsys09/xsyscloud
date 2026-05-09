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
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg:      '#080c14',
        surface: '#0d1420',
        card:    '#111927',
        border:  '#1a2640',
        txt:     '#e2e8f0',
        muted:   '#64748b',
        dim:     '#94a3b8',
        cyan:    '#00c8ff',
        indigo:  '#818cf8',
      },
    },
  },
  plugins: [],
}

export default config

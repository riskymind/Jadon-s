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
        'brand-green': '#2E8B57',
        'brand-dark': '#24323D',
        'brand-secondary': '#5C6B73',
        'brand-cream': '#FBF8F3',
        'brand-gold': '#D6B86A',
        'brand-light-green': '#A8D5BA',
        'brand-pale-green': '#E4F2EA',
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

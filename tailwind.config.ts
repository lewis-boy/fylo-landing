import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "intro-email-blue": "hsl(217,28%,15%)",
      "main-blue": "hsl(218,28%,13%)",
      "footer-blue": "hsl(216,53%,9%)",
      "testimonial-blue": "hsl(219,30%,18%)",
      "cyan": "hsl(176,68%,64%)",
      "robin": "hsl(198,60%,50%)",
      "red": 'hsl(0, 100%, 63%)',
      "white": "hsl(0, 0%, 100%)",
    },
    screens: {
      'desktop': '1440px'
    },
    extend: {
      fontFamily: {
        'opensans': 'var(--font-opensans)',
        'raleway': 'var(--font-raleway)',
      }
    },
  },
  plugins: [],
} satisfies Config;

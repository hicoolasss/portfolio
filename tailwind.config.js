/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#666",
        color: "var(--color)",
        github: "var(--github)",
        githubHover: "var(--github-hover)",
        google: "var(--google)",
        googleHover: "var(--google-hover)",
        hover: "var(--hover)",
        gray: "var(--gray)",
        highlight: "var(--highlight)",
        success: "var(--success)",
        violet: "var(--violet)",
        accent1: "var(--accent-1)",
        cyan: "var(--cyan)",
        warning: "var(--warning)",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary_color: "var(--primary-color)",
        secondary_color: "var(--secondary-color)",
        accent_color: "var(--accent-color)",
        secondary_background_color: "var(--secondary-background-color)",
        background_color1: "var(--background-color1)",
        highlight_accent: "var(--highlight-accent)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient': "var(--gradient)",
        'gradient2': "var(--gradient2)",
        'fas': "url('/resources/images/7971.jpg')",
        'bg1': "url('/resources/images/bg1.svg')",
        'bg2': "url('/resources/images/bg2.svg')",
        
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      'animation': {
        'text': 'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          }
        },
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255, 255, 255, 0.5)",
          "0 0px 10px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
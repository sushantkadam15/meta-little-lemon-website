/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "primary": "#495E57",
      "secondary": "#F4CE14",
      "accent-one": "#EE9972",
      "accent-two": "#FBDABB",
      "neutral": "#333333",
      "base-100": "#EDEFEE",
      "info": "#00ceff",
      "success": "#00ce85",
      "warning": "#ffa300",
      "error": "#ff004d",
    },
    fontFamily: {
      "markazi": 'Markazi Text, serif',
      "Karla": 'Karla, sans-serif',
    },
  },
  plugins: [],
};

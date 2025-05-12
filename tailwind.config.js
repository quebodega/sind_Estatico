/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de tonos fríos (ejemplo)
        'primary': '#3B82F6', // Azul
        'secondary': '#64748B', // Gris azulado
        'accent': '#10B981', // Verde azulado
        'background': '#F9FAFB', // Gris muy claro
        'text-primary': '#111827', // Gris oscuro
        'text-secondary': '#6B7280', // Gris medio
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        default: "1rem",
      },
      center: true,
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        heroImage:
          "url('https://images.pexels.com/photos/10679176/pexels-photo-10679176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};

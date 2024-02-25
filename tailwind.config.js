/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        nunito:"'Nunito', sans-serif",
        ptSans:"'PT Sans',sans-serif"
      },
      colors: {
       
        //white //
        bg:"#F6F5F5",
        white:"#F0F0F0",
        // yellow
        darkYellow: "#F9C202",
        lightYellow:"#F9C718",
        //blue 
        blue:"#162DA5",
        // dark//
        dark: "#050505",
        bgDark:"#1B1919",
        primaryDark:"rgba(14, 14, 14, 0.85)",
        overlay:"rgba(5, 5, 5, 0.73)",
        overlayPrimary:"rgba(4,4,4,0.75)",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};

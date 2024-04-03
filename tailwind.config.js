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
        secondary:"#F6F5F5",
        primary:"#F0F0F0",
        primaryBase:"#FDFDFD",
      
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
     
    },
  },
  plugins: [],
};

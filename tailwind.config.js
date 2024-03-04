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
      
    // fontSize: {
    //   sm: "0.8rem",
    //   base: "1rem",
    //   xl: "1.25rem",
    //   // 12px
    //   100: [
    //     "0.75rem",
    //     {
    //       lineHeight: "20px",
    //       fontWeight: "400",
    //       letterSpacing: ".5px",
    //     },
    //   ],
    //   // 14px
    //   200: [
    //     "0.875rem",
    //     {
    //       lineHeight: "20px",
    //     },
    //   ],
    //   // 16px
    //   300: [
    //     "1rem",
    //     {
    //       lineHeight: "20px",
    //       fontWeight: "400",
    //     },
    //   ],
    //   // 18px
    //   400: [
    //     "1.125rem",
    //     {
    //       lineHeight: "28px",
    //       fontWeight: "400",
    //     },
    //   ],
    //   //  20px
    //   500: [
    //     "1.25rem",
    //     {
    //       lineHeight: "20px",
    //       // fontWeight: "700",
    //     },
    //   ],
    //   //  24px
    //   600: [
    //     "1.5rem",
    //     {
    //       lineHeight: "2rem",
    //       fontWeight: "500",
    //     },
    //   ],
    //   //  32px
    //   700: [
    //     "2rem",
    //     {
    //       lineHeight: "2rem",
    //       fontWeight: "500",
    //     },
    //   ],
    //   //  36px
    //   800: [
    //     "2rem",
    //     {
    //       lineHeight: "3rem",
    //       fontWeight: "900",
    //     },
    //   ],
    //   //  40px
    //   900: [
    //     "2.5rem",
    //     {
    //       lineHeight: "2.5rem",
    //       fontWeight: "900",
    //     },
    //   ],

    //   xsm: [
    //     "0.875rem",
    //     {
    //       lineHeight: "22.103px",
    //       fontWeight: "500",
    //     },
    //   ],
    //   "2xl": [
    //     "0.875rem",
    //     {
    //       lineHeight: "2rem",
    //       fontWeight: "500",
    //     },
    //   ],
    //   "3xl": [
    //     "1.875rem",
    //     {
    //       lineHeight: "2.25rem",
    //       fontWeight: "700",
    //     },
    //   ],
    // },
  
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

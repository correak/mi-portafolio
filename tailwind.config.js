/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      dark: "#241834",      
      sidebar: "#b494f0",  
      primary: "#D946EF",   
      secondary: "#9a00d6", 
      title: "#ff00ea",
    },
    backgroundImage: {
      //creamos el patron de lineas horizontales
     // 'scanlines': 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 50%)',
    }
  },
},
  plugins: [],
}







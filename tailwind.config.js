// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        margin1 :'10vw'
    },
    width:{
      width1:'200px',
      width2:'300px',
      width3:'550px',
      width4:'400px'
     },
     
     height:{
        height1:'400px',
        height2:'100vh'
     },
     backgroundImage: {
      'custom-gradient': 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
    },
    colors:{
      color1:'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
      color2:'#32323c',
      color3:'a0a0a0',
      color4:'#1f0016',
    },
  
    },
    fontFamily:{
        abc:["Kanit", 'sans-serif'],
        abc2:["Edu VIC WA NT Beginner", 'cursive'],
        abc3:['outfit']
      }
     
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '*': { boxSizing: 'border-box' },
      });
    },
  ],
}

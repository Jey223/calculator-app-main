/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'league-spartan' : ['"League Spartan"', 'sans-serif'],
    },
    colors: {
      
      transparent : 'transparent',
      current : 'currentColor',
      // Theme 1
      // Background
      'main-background-dark-blue': 'hsl(222, 26%, 31%)',
      'toggle-and-keypad-background-dark-blue': 'hsl(223, 31%, 20%)',
      'screen-background-dark-blue': 'hsl(224, 36%, 15%)',

      // keys
      'key-background-dark-blue': 'hsl(225, 21%, 49%)',
      'key-shadow-dark-blue': 'hsl(224, 28%, 35%)',

      'key-background-toggle-red': 'hsl(6, 63%, 50%)',
      'key-shadow-dark-red': 'hsl(6, 70%, 34%)',

      'key-background-light-grayish-orange': 'hsl(30, 25%, 89%)',
      'key-shadow-grayish-orange': 'hsl(28, 16%, 65%)',

      // text
      'dark-grayish-blue': 'hsl(221, 14%, 31%)',
      'white': 'hsl(0, 0%, 100%)',

    
      // Theme 2
      // Backgrounds
      'main-background-light-gray': 'hsl(0, 0%, 90%)',
      'toggle-keypad-background-grayish-red': 'hsl(0, 5%, 81%)',
      'screen-background-light-gray': 'hsl(0, 0%, 93%)',

      // Keys
      'key background-dark-moderate-cyan': 'hsl(185, 42%, 37%)',
      'key-shadow-very-dark-cyan': 'hsl(185, 58%, 25%)',

      'key-background-toggle-orange': 'hsl(25, 98%, 40%)',
      'key-shadow-dark-orange': 'hsl(25, 99%, 27%)',

      'key-background-light-grayish-yellow': 'hsl(45, 7%, 89%)',
      'key-shadow-dark-grayish-orange': 'hsl(35, 11%, 61%)',

      // Text
      'dark-grayish-yellow': 'hsl(60, 10%, 19%)',
      // 'white': 'hsl(0, 0%, 100%)'



      // Theme 3
      // Backgrounds
      'main-background-dark-violet': 'hsl(268, 75%, 9%)',
      'keypad-and-toggle-and-screen-background-dark-violet': 'hsl(268, 71%, 12%)',
      
      // #### Keys
      'key-background-dark-violet': 'hsl(281, 89%, 26%)',
      'key-shadow-vivid-magenta': 'hsl(285, 91%, 52%)',

      'toggle-key-background-pure-cyan': 'hsl(176, 100%, 44%)',
      'key-shadow-soft-cyan': 'hsl(177, 92%, 70%)',

      'key-background-very-dark-violet': 'hsl(268, 47%, 21%)',
      'key-shadow-dark-magenta': 'hsl(290, 70%, 36%)',
      
      // #### Text
      'light-yellow': 'hsl(52, 100%, 62%)',
      'very-dark-blue': 'hsl(198, 20%, 13%)',
      // 'white': 'hsl(0, 0%, 100%)'

    },
    extend: {
      
      

      screens: {
        'phone': '320px',
        //  => @media (min-width: 375px) { ... }

        'tablet':  '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

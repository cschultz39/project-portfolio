// tailwind.config.js
module.exports = {
  content: [
    './web_project/gradebuddy/login.html',
    './web_project/gradebuddy/home-page.html',
    './web_project/gradebuddy/create-account.html',
    './web_project/gradebuddy/class-page.html',
    './web_project/gradebuddy/category-page.html'
  ],
  theme: {
      extend: {
          colors: {
              cactus: '#6F927F',
              desertrose: '#A96255',
              champagne: '#F2E5D3',
              terracotta: '#B0522A',
              apricot: '#F6BC8C',
              marmalade: '#E07D45',
          },
          fontFamily: {
            sans: ['Freeman', 'sans-serif'],
          }
      },
  },
  plugins: [],
};

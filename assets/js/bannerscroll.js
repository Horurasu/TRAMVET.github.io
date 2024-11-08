window.addEventListener('scroll', function() {
   var banner = document.querySelector('.bannerizq');
   if (window.scrollY > 120) { // Ajusta el valor según sea necesario
      banner.classList.add('fade-out');
   } else {
      banner.classList.remove('fade-out');
   }
});

window.addEventListener('scroll', function() {
   var banner = document.querySelector('.botonesbaner');
   if (window.scrollY > 120) { // Ajusta el valor según sea necesario
      banner.classList.add('fade-out');
   } else {
      banner.classList.remove('fade-out');
   }
});


window.addEventListener('scroll', function() {
   var banner = document.querySelector('.bannerder');
   if (window.scrollY > 120) { // Ajusta el valor según sea necesario
      banner.classList.add('fade-out');
   } else {
      banner.classList.remove('fade-out');
   }
});
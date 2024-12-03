
let lastScrollTop = 0; // Para evitar que el scroll rápido cause efectos erráticos
let debounceTimer; // Timer for debouncing

window.addEventListener('scroll', function () {
   clearTimeout(debounceTimer); // Clear the previous timer
   debounceTimer = setTimeout(function () {
      const navbarTop = document.getElementById('navbar-top');
      const currentScroll = window.scrollY;

      if (currentScroll > 100 && lastScrollTop <= 100) {
         // Ocultar con transición
         navbarTop.style.transition = 'opacity 1s ease, height 1s ease';
         navbarTop.style.opacity = '0';
         navbarTop.style.height = '0'; 
         navbarTop.style.visibility = 'hidden'; 
      } else if (currentScroll <= 100 && lastScrollTop > 100) {
         // Mostrar con transición
         navbarTop.style.transition = 'opacity 1s ease, height 1s ease';
         navbarTop.style.opacity = '1';
         navbarTop.style.height = 'auto'; // Restablece su altura
         navbarTop.style.visibility = 'visible'; // Lo vuelve visible
      }

      lastScrollTop = currentScroll;
   }, 100); // Adjust the debounce delay as needed
});
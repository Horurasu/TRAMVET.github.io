function smoothScrollTo(target, duration) {
   const start = window.scrollY || document.documentElement.scrollTop;
   const startTime = performance.now();
   const targetPosition = target === 'top' ? 0 : document.querySelector(target).offsetTop;
   const distance = targetPosition - start;
   
   function scrollStep(currentTime) {
     const elapsedTime = currentTime - startTime;
     const progress = Math.min(elapsedTime / duration, 1); // Normaliza el progreso entre 0 y 1
     const easing = 0.5 - Math.cos(progress * Math.PI) / 2; // Easing de tipo "ease-in-out"
     window.scrollTo(0, start + distance * easing);
     if (elapsedTime < duration) {
       requestAnimationFrame(scrollStep);
     }
   }
   requestAnimationFrame(scrollStep);
 }

 document.getElementById('scrollTopButton').addEventListener('click', function(event) {
   event.preventDefault();
   smoothScrollTo('top', 1000); // Cambia 1000 a la duración en milisegundos que desees
 });

 
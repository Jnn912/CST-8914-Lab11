document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
     
      accordion.addEventListener('click', function() {
          this.classList.toggle('active');
          const content = this.nextElementSibling;
          
          if (content.style.display === 'block') {
              content.style.display = 'none';
              this.setAttribute('aria-expanded', 'false');
          } else {
              content.style.display = 'block';
              this.setAttribute('aria-expanded', 'true');
          }
      });

     
      accordion.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.click();
          }
      });
  });
});

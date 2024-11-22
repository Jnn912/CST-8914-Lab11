document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion, index) => {
        // 点击事件
        accordion.addEventListener('click', function() {
            this.classList.toggle('is-open');
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.setAttribute('aria-expanded', 'false');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                this.setAttribute('aria-expanded', 'true');
            }
        });

        
        accordion.addEventListener('keydown', function(e) {
            let currentIndex = index; 
            
            switch(e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.click();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    let nextIndex = (currentIndex + 1) % accordions.length;
                    accordions[nextIndex].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    let prevIndex = (currentIndex - 1 + accordions.length) % accordions.length;
                    accordions[prevIndex].focus();
                    break;
                case 'Home':
                    e.preventDefault();
                    accordions[0].focus();
                    break;
                case 'End':
                    e.preventDefault();
                    accordions[accordions.length - 1].focus();
                    break;
            }
        });
    });
});

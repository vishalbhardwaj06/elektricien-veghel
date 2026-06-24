document.addEventListener("DOMContentLoaded", function () {

  // ===== Mobile Menu =====
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // ===== Diensten Dropdown =====
  const dienstenBtn = document.getElementById("dienstenBtn");
  const dienstenMenu = document.getElementById("dienstenMenu");
  const dienstenIcon = document.getElementById("dienstenIcon");

  if (dienstenBtn && dienstenMenu) {
    dienstenBtn.addEventListener("click", () => {
      dienstenMenu.classList.toggle("hidden");
      if (dienstenIcon) dienstenIcon.classList.toggle("rotate-180");
    });
  }

  // ===== Tailwind Custom Colors =====
  if (typeof tailwind !== "undefined") {
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            blueColor: 'var(--primary-color)',
            greenColor: 'var(--secondary-color)',
            darkColor: 'var(--dark-color)',
            textColor: 'var(--text-color)',
          }
        }
      }
    };
  }

  // ===== Accordion (index.html) =====
  document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('i');

      content.classList.toggle('hidden');

      if (icon) {
        if (content.classList.contains('hidden')) {
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
        } else {
          icon.classList.remove('fa-plus');
          icon.classList.add('fa-minus');
        }
      }
    });
  });

  // ===== FAQ Toggle (aardlekschakelaar-vervangen.html) =====
  document.querySelectorAll('.txfaq-btn').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.txfaq-item');
      const content = item.querySelector('.txfaq-content');
      const icon = item.querySelector('.txfaq-icon');

      document.querySelectorAll('.txfaq-item').forEach(faq => {
        if (faq !== item) {
          faq.querySelector('.txfaq-content').classList.add('hidden');
          faq.querySelector('.txfaq-icon').textContent = '+';
        }
      });

      content.classList.toggle('hidden');
      icon.textContent = content.classList.contains('hidden') ? '+' : '−';
    });
  });

  // ===== Swiper Slider (index.html) =====
  // Swiper CDN ke baad load hota hai, isliye window load pe chalate hain
  window.addEventListener('load', function () {
    if (typeof Swiper !== "undefined" && document.querySelector(".servicesSlider")) {
      new Swiper(".servicesSlider", {
        loop: true,
        speed: 10000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        slidesPerView: 1.8,
        spaceBetween: 20,
        breakpoints: {
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        },
      });
    }
  });


  // ===== FAQ (faqs.html) =====

document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {

        const item = button.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        document.querySelectorAll('.faq-item').forEach(faq => {
            if (faq !== item) {
                faq.querySelector('.faq-content').classList.add('hidden');
                faq.querySelector('.faq-icon').textContent = '+';
            }
        });

        content.classList.toggle('hidden');
        icon.textContent = content.classList.contains('hidden') ? '+' : '−';
    });
});






});








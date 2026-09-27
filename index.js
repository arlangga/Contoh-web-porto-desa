// =========================
// MOBILE NAVBAR
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Tutup menu ketika link diklik

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

});


// =========================
// COUNTER STATISTIK
// =========================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const target = Number(counter.dataset.target);

      let current = 0;

      const updateCounter = () => {

        const increment = Math.ceil(target / 80);

        current += increment;

        if (current >= target) {
          counter.textContent = target;
          return;
        }

        counter.textContent = current;

        requestAnimationFrame(updateCounter);
      };

      updateCounter();

      observer.unobserve(counter);
    });

  },
  {
    threshold: 0.5
  }
);


counters.forEach((counter) => {
  observer.observe(counter);
});
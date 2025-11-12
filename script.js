const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        // Animate the section itself
        e.target.classList.add("visible");
        
        // --- Stagger animation for items inside ---
        const itemsToStagger = e.target.querySelectorAll('.stagger-item');
        if (itemsToStagger.length > 0) {
          itemsToStagger.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 100); // 100ms delay between items
          });
        }
        
        // Stop observing this element after it has been revealed
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 } // Start animation when 10% of the section is visible
);

reveals.forEach((r) => observer.observe(r));

// Smooth scroll for nav links
document.querySelectorAll('.navbar a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (ev) => {
    ev.preventDefault();
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
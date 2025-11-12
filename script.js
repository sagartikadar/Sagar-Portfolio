const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        
        const itemsToStagger = e.target.querySelectorAll('.stagger-item');
        if (itemsToStagger.length > 0) {
          itemsToStagger.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 100);
          });
        }
        
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((r) => observer.observe(r));

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

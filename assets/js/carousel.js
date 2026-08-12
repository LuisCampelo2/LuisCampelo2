(function () {
  const carousel = document.getElementById("projectsCarousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  const status = document.getElementById("carouselStatus");

  let index = 0;
  let igniteTimer = null;

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;

    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide) => slide.classList.remove("is-active"));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));

    if (status) {
      const name = slides[index].querySelector("h3").textContent;
      status.textContent = `${name}, projeto ${index + 1} de ${slides.length}`;
    }

    clearTimeout(igniteTimer);
    igniteTimer = setTimeout(() => {
      slides[index].classList.add("is-active");
    }, 380);
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));

  carousel.setAttribute("tabindex", "0");
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "ArrowRight") goTo(index + 1);
  });

  let touchStartX = null;
  track.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });
  track.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? index + 1 : index - 1);
    }
    touchStartX = null;
  });

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    slides.forEach((slide) => {
      slide.addEventListener("mousemove", (event) => {
        const rect = slide.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        slide.style.setProperty("--mx", x + "%");
        slide.style.setProperty("--my", y + "%");
      });
    });
  }

  goTo(0);
})();

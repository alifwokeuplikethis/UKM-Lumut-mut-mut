async function loadComponent(id, file) {
  const element = document.getElementById(id);
  const response = await fetch(file);
  const html = await response.text();
  element.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {});

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("header", "/components/header.html"),
    loadComponent("footer", "/components/footer.html"),
  ]);

  const hamburger = document.getElementById("hamburger");
  const navUl = document.querySelector("header nav ul");

  if (hamburger && navUl) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navUl.classList.toggle("active");

      if (hamburger.classList.contains("active")) {
        hamburger.src = "/assets/close.png";
      } else {
        hamburger.src = "/assets/more.png";
      }
    });
  }

  // Carousel Logic
  const carouselSlide = document.querySelector(".carousel-slide");
  const carouselImages = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  if (carouselSlide && carouselImages.length > 0 && prevBtn && nextBtn) {
    let counter = 0;
    const size = carouselImages[0].clientWidth;

    // Initial position
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    nextBtn.addEventListener("click", () => {
      if (counter >= carouselImages.length - 1) return;
      carouselSlide.style.transition = "transform 0.5s ease-in-out";
      counter++;
      carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
    });

    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.5s ease-in-out";
      counter--;
      carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
    });

    // Handle window resize to adjust slide width if needed (optional but good for responsive)
    window.addEventListener("resize", () => {
      carouselSlide.style.transition = "none";
      carouselSlide.style.transform = "translateX(" + -100 * counter + "%)";
    });
  }
});

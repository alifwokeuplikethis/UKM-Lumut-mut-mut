async function loadComponent(id, file) {
  const element = document.getElementById(id);
  const response = await fetch(file);
  const html = await response.text();
  element.innerHTML = html;
}

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
});

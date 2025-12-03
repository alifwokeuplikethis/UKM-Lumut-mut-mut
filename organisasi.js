const cards = document.querySelectorAll('.card');
const closeButtons = document.querySelectorAll('.modal-close');
const elements = document.querySelectorAll(".slide-up");

// Fungsi untuk buka modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('show');
}

// Fungsi untuk tutup modal
function closeModal(modal) {
  if (modal) modal.classList.remove('show');
}

// Loop setiap card
cards.forEach(card => {
  const arrow = card.querySelector('img');
  const detail = card.querySelector('.tengs');
  const modalId = card.dataset.modal;

  // Hover animasi arrow
  card.addEventListener('mouseenter', () => {
    if (detail) detail.classList.add('show');
    if (arrow) arrow.classList.add('arrow-animate');
  });

  card.addEventListener('mouseleave', () => {
    if (detail) detail.classList.remove('show');
    if (arrow) arrow.classList.remove('arrow-animate');
  });

  // Klik card buka modal
  card.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(modalId);
  });
});

// Tombol close ✕
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    closeModal(modal);
  });
});

// Klik overlay (luar content) untuk tutup modal
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal);
  });
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach((el) => observer.observe(el));






document.querySelectorAll(".tree-node").forEach(node => {
  const left = node.querySelector(".flower-left");
  const right = node.querySelector(".flower-right");

  node.addEventListener("mouseenter", () => {
    left.style.opacity = "1";
    right.style.opacity = "1";

    left.style.transform = "translateX(0)";
    right.style.transform = "translateX(0) scaleX(-1)";
  });

  node.addEventListener("mouseleave", () => {
    left.style.opacity = "0";
    right.style.opacity = "0";

    left.style.transform = "translateX(-20px)";
    right.style.transform = "translateX(20px) scaleX(-1)";
  });
});



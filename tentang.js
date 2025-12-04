/* ================================================================
   ELEMEN
   ================================================================ */
const divisiCards = document.querySelectorAll('.divisi-card'); 
const closeButtons = document.querySelectorAll('.close-btn');  

/* ================================================================
   PERINTAH: MEMBUKA SAAT DI KLIK
   ================================================================ */
divisiCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;        
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add('active');           
      document.body.style.overflow = 'hidden'; 
    }
  });
});

/* ================================================================
   PERINTAH: TOMBOL CLOSE (X) UNTUK MENUTUP
   ================================================================ */
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.close;         
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.remove('active');       
      document.body.style.overflow = 'auto';   
    }
  });
});

/* ================================================================
   PERINTAH: MENUTUP MODAL SAAT AREA LUAR KOTAK DIKLIK
   ================================================================ */
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');   
    document.body.style.overflow = 'auto';     
  }
});

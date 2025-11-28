const data = {
    lukis: {
        title: "Divisi Lukis",
        desc: "Kegiatan berupa menggambar, melukis cat air, acrylic, mural, serta eksplorasi warna dan komposisi."
    },
    musik: {
        title: "Divisi Musik",
        desc: "Fokus pada vokal, alat musik, band, aransemen, hingga pelatihan dasar teori musik."
    },
    tari: {
        title: "Divisi Tari",
        desc: "Melatih gerak, teknik dasar, koreografi, dan berbagai gaya tari tradisional maupun modern."
    }
};

const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-target');
        modalTitle.textContent = data[key].title;
        modalDesc.textContent = data[key].desc;

        modal.style.display = 'flex';
    });
});

closeBtn.onclick = () => modal.style.display = 'none';

window.onclick = e => {
    if(e.target === modal) modal.style.display = 'none';
};

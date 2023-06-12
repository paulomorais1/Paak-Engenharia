const cards = document.querySelectorAll('.slide-servico .card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        const link = card.querySelector('a');
        const url = link.getAttribute('href');
        window.location.href = url;
    });
});

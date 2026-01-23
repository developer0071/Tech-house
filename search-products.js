document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        filterBySearch();
    });
});

function filterBySearch() {
    const input = document.getElementById('product-search');
    if (!input) return;

    const term = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const titleEl = card.querySelector('.product-title');
        const title = titleEl ? titleEl.innerText.toLowerCase() : '';

        if (!term || title.includes(term)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

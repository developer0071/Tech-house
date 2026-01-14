document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');
    window.updateSearch = function() {
        const term = searchInput.value.toLowerCase().trim();
        document.querySelectorAll('.search-highlight').forEach(el => {
            el.replaceWith(document.createTextNode(el.textContent));
        });

        if (!term) return;

        const content = document.querySelectorAll('main, section');
        let firstMatch = null;

        content.forEach(area => {
            const walker = document.createTreeWalker(area, NodeFilter.SHOW_TEXT);
            let node;
            const matches = [];
            while (node = walker.nextNode()) {
                if (node.textContent.toLowerCase().includes(term)) matches.push(node);
            }

            matches.forEach(node => {
                const span = document.createElement('span');
                span.className = 'search-highlight';
                span.style.background = 'transparent';
                
                const regex = new RegExp(`(${term})`, 'gi');
                span.innerHTML = node.textContent.replace(regex, '$1');
                node.replaceWith(span);

                if (!firstMatch) firstMatch = span;
            });
        });

        if (firstMatch) firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    searchInput.addEventListener('input', window.updateSearch);
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');
    
    window.updateSearch = function() {
        const term = searchInput.value.toLowerCase().trim();
        
        document.querySelectorAll('.search-highlight').forEach(el => {
            el.replaceWith(document.createTextNode(el.textContent));
        });

        if (!term) return;

        const contentArea = document.querySelector('.products-container') || document.body;
        const walker = document.createTreeWalker(contentArea, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => {
                if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.closest('nav')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        let node;
        let firstMatch = null;
        const nodesToReplace = [];

        while (node = walker.nextNode()) {
            if (node.textContent.toLowerCase().includes(term)) {
                nodesToReplace.push(node);
            }
        }

        nodesToReplace.forEach(node => {
            const span = document.createElement('span');
            span.className = 'search-highlight';
            const regex = new RegExp(`(${term})`, 'gi');
            span.innerHTML = node.textContent.replace(regex, '$1');
            node.replaceWith(span);

            if (!firstMatch) firstMatch = span;
        });

        if (firstMatch) firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    searchInput.addEventListener('input', window.updateSearch);
});
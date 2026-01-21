
let cart = [];

window.addEventListener('DOMContentLoaded', function() {
    const saved = sessionStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
    showCartCount();
    
    if (window.location.href.includes('cart.html')) {
        showCartItems();
        updateEstimatedTime();
        
        document.querySelectorAll('input[name="delivery-type"]').forEach(radio => {
            radio.addEventListener('change', updateTotal);
        });
    }
});

function addToCart(id) {
    if (typeof PRODUCTS === 'undefined') {
        alert('Product data not loaded yet.');
        return;
    }
    const product = PRODUCTS[id];
    if (!product || !product.inStock) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ 
            id: id, 
            name: product.name, 
            price: product.price, 
            image: product.image, 
            category: product.category, 
            qty: 1 
        });
    }
    
    sessionStorage.setItem('cart', JSON.stringify(cart));
    showCartCount();
    
}

function showCartCount() {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.action-item.cart').forEach(el => {
        const old = el.querySelector('.cart-badge');
        if (old) old.remove();
        if (total > 0) {
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.textContent = total;
            el.appendChild(badge);
        }
    });
}

function showCartItems() {
    const section = document.querySelector('.cart-section');
    const checkoutForms = document.querySelectorAll('.checkout-form-container');
    const summaryCard = document.querySelector('.summary-card');
    
    if (!section) return;
    
    if (cart.length === 0) {
        section.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 100px 20px; background: white; border-radius: 12px; border: 1px solid #e5e7eb;">
                <div style="margin-bottom: 20px; color: #d1d5db;">
                    <i data-lucide="shopping-bag" style="width: 64px; height: 64px;"></i>
                </div>
                <h2 style="color: #111827; margin-bottom: 10px; font-size: 24px;">Your cart is empty</h2>
                <p style="color: #6b7280; margin-bottom: 30px;">Looks like you haven't added anything to your cart yet.</p>
                <a href="home page.html" style="display: inline-block; padding: 14px 32px; background: #111827; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: opacity 0.2s;">
                    Return to Shop
                </a>
            </div>`;
        
        if(summaryCard) summaryCard.style.display = 'none';
        checkoutForms.forEach(form => form.style.display = 'none');        
        lucide.createIcons(); 
        return;
    }
    
    checkoutForms.forEach(form => form.style.display = 'block');
    if (summaryCard) summaryCard.style.display = 'block';
    
    const summaryContainer = document.getElementById('cart-items-summary');
    if (summaryContainer) {
        summaryContainer.innerHTML = cart.map(item => `
            <div style="display: flex; gap: 12px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f3f4f6;">
                <img src="${item.image}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px; background: #f9fafb;">
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 4px 0; font-size: 15px; color: #111827;">${item.name}</h4>
                    <p style="margin: 0; font-size: 12px; color: #6b7280;">Art: JPH2020${item.id}</p>
                    <p style="margin: 2px 0; font-size: 12px; color: #6b7280;">Colour: ${item.category}</p>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: 700; color: #111827; margin-bottom: 8px;">£${(item.price * item.qty).toFixed(2)}</div>
                    <div style="display: inline-flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden; background: #f9fafb;">
                        <button onclick="changeQty('${item.id}', -1)" style="width: 28px; height: 28px; background: transparent; border: none; cursor: pointer; color: #111827;">−</button>
                        <input type="text" value="${item.qty}" readonly style="width: 35px; text-align: center; border: none; background: transparent; color: #111827; font-weight: 600;">
                        <button onclick="changeQty('${item.id}', 1)" style="width: 28px; height: 28px; background: transparent; border: none; cursor: pointer; color: #111827;">+</button>
                    </div>
                    <button onclick="removeItem('${item.id}')" style="display: block; margin-top: 8px; background: #1118279f; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; width: 100%;">Remove</button>
                </div>
            </div>
        `).join('');
    }
    
    updateTotal();
    lucide.createIcons();
}

function updateEstimatedTime() {
    const timeText = document.getElementById('est-time-text');
    if (!timeText) return;

    const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;
    const minDays = deliveryType === 'express' ? 1 : 5;
    const maxDays = deliveryType === 'express' ? 2 : 6;
    const randomDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;

    const arrivalDate = new Date();
    arrivalDate.setDate(arrivalDate.getDate() + randomDays);
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    timeText.innerText = `Estimated Arrival: ${arrivalDate.toLocaleDateString(undefined, options)} (${randomDays} days)`;
}

function changeQty(id, change) {
    const item = cart.find(i => i.id === id);
    item.qty += change;
    if (item.qty <= 0) { 
        removeItem(id); 
    } else {
        sessionStorage.setItem('cart', JSON.stringify(cart));
        showCartItems();
        showCartCount();
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    showCartItems();
    showCartCount();
}

function updateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryType = document.querySelector('input[name="delivery-type"]:checked');
    const shipping = deliveryType && deliveryType.value === 'express' ? 10 : 0;
    const discount = 3.00;
    const total = subtotal + shipping - discount;
    
    const subtotalEl = document.getElementById('subtotal-amount');
    const deliveryEl = document.getElementById('delivery-amount');
    const discountEl = document.getElementById('discount-amount');
    const totalEl = document.getElementById('total-amount');
    
    if (subtotalEl) subtotalEl.textContent = `£${subtotal.toFixed(2)}`;
    if (deliveryEl) {
        deliveryEl.textContent = shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`;
        deliveryEl.style.color = shipping === 0 ? '#10b981' : '#111827';
        deliveryEl.style.fontWeight = shipping === 0 ? '600' : 'normal';
    }
    if (discountEl) discountEl.textContent = `-£${discount.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `£${total.toFixed(2)}`;
}

function processCheckout() {
    const fname = document.getElementById('cust-fname')?.value.trim();
    const lname = document.getElementById('cust-lname')?.value.trim();
    const email = document.getElementById('cust-email')?.value.trim();
    const phone = document.getElementById('cust-phone')?.value.trim();
    const termsCheck = document.getElementById('terms-check')?.checked;

    if (!fname || !lname || !email || !phone || !termsCheck) {
        alert('Please fill in all details and accept Terms & Conditions.');
        return;
    }

    const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = deliveryType === 'express' ? 10 : 0;
    const discount = 3.00;
    const finalTotal = parseFloat((subtotal + shipping - discount).toFixed(2));

    const order = {
        id: Date.now().toString().slice(-6),
        date: new Date().toISOString(),
        status: 'Processing',
        items: [...cart],
        total: finalTotal,
        delivery: deliveryType
    };

    const userData = JSON.parse(localStorage.getItem('techHouseUser') || '{}');
    
    if (userData.email) {
        userData.stats = userData.stats || { totalOrders: 0, totalSpent: 0 };
        userData.orders = userData.orders || [];

        userData.stats.totalOrders = (userData.stats.totalOrders || 0) + 1;
        userData.stats.totalSpent = (parseFloat(userData.stats.totalSpent) || 0) + finalTotal;
        
        userData.orders.unshift(order);
        
        localStorage.setItem('techHouseUser', JSON.stringify(userData));
    }

    cart = [];
    sessionStorage.removeItem('cart');
    alert(`Order #${order.id} placed! Total: £${finalTotal}`);
    window.location.href = 'account.html';
}

window.addToCart = addToCart;

document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', processCheckout);
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
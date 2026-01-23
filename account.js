lucide.createIcons();

class AccountManager {
    constructor() {
        this.currentUser = this.loadUserData();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadUserProfile();
        this.setupProfileEdit();
        this.checkLoginStatus();
    }

    loadUserData() {
        const userData = JSON.parse(localStorage.getItem('techHouseUser') || '{}');
        if (!userData.email) {
            const urlParams = new URLSearchParams(window.location.search);
            const fullName = urlParams.get('fullName');
            const email = urlParams.get('email');
            
            if (fullName && email) {
                const newUser = {
                    fullName: fullName,
                    email: email,
                    phone: '',
                    memberSince: new Date().toISOString(),
                    membership: 'Bronze',
                    stats: {
                        totalOrders: 0,
                        totalSpent: 0,
                        savedItems: 0,
                        rewardPoints: 100
                    },
                    orders: []
                };
                this.saveUserData(newUser);
                return newUser;
            }
        }
        return userData;
    }

    saveUserData(data) {
        localStorage.setItem('techHouseUser', JSON.stringify(data));
        this.currentUser = data;
    }

    checkLoginStatus() {
        if (!this.currentUser.email) {
            window.location.href = 'index.html';
        }
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.showSection(section);
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    showSection(sectionName) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        if (sectionName === 'overview' || sectionName === 'orders') {
            this.currentUser = this.loadUserData();
            this.loadUserProfile();
        }
    }

    loadUserProfile() {
        if (!this.currentUser.email) return;

        const initials = this.getInitials(this.currentUser.fullName);
        const userAvatarEl = document.getElementById('userAvatar');
        const userNameEl = document.getElementById('userName');
        const userEmailEl = document.getElementById('userEmail');
        const welcomeNameEl = document.getElementById('welcomeName');
        const membershipTypeEl = document.getElementById('membershipType');
        
        if (userAvatarEl) userAvatarEl.textContent = initials;
        if (userNameEl) {
            userNameEl.textContent = this.currentUser.fullName;
            userNameEl.style.color = '#111827';
        }
        if (userEmailEl) {
            userEmailEl.textContent = this.currentUser.email;
            userEmailEl.style.color = '#6b7280';
        }
        if (welcomeNameEl) {
            welcomeNameEl.textContent = this.currentUser.fullName.split(' ')[0];
            welcomeNameEl.style.color = '#111827';
        }
        
        if (!this.currentUser.stats) {
            this.currentUser.stats = {
                totalOrders: 0,
                totalSpent: 0
            };
        }

        this.updateMembership();
        if (membershipTypeEl) {
            membershipTypeEl.textContent = `${this.currentUser.membership} Member`;
            membershipTypeEl.style.color = '#111827';
        }
        
        const stats = this.currentUser.stats;
        const totalOrdersEl = document.getElementById('totalOrders');
        const totalSpentEl = document.getElementById('totalSpent');
        
        if (totalOrdersEl) {
            totalOrdersEl.textContent = stats.totalOrders || 0;
            totalOrdersEl.style.color = '#111827';
            totalOrdersEl.style.fontWeight = '700';
            totalOrdersEl.style.fontSize = '32px';
        }
        if (totalSpentEl) {
            totalSpentEl.textContent = `£${(stats.totalSpent || 0).toFixed(2)}`;
            totalSpentEl.style.color = '#111827';
            totalSpentEl.style.fontWeight = '700';
            totalSpentEl.style.fontSize = '32px';
        }

        const profileNameEl = document.getElementById('profileName');
        const profileEmailEl = document.getElementById('profileEmail');
        const profilePhoneEl = document.getElementById('profilePhone');
        const memberSinceEl = document.getElementById('memberSince');
        
        if (profileNameEl) {
            profileNameEl.textContent = this.currentUser.fullName;
            profileNameEl.style.color = '#111827';
        }
        if (profileEmailEl) {
            profileEmailEl.textContent = this.currentUser.email;
            profileEmailEl.style.color = '#111827';
        }
        if (profilePhoneEl) {
            profilePhoneEl.textContent = this.currentUser.phone || 'Not provided';
            profilePhoneEl.style.color = '#111827';
        }
        
        if (memberSinceEl) {
            const memberDate = new Date(this.currentUser.memberSince);
            memberSinceEl.textContent = memberDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
            memberSinceEl.style.color = '#111827';
        }

        this.displayOrders();
        setTimeout(() => lucide.createIcons(), 100);
    }

    updateMembership() {
        const totalSpent = this.currentUser.stats?.totalSpent || 0;
        let newMembership = 'Bronze';
        if (totalSpent >= 1000) newMembership = 'Gold';
        else if (totalSpent >= 500) newMembership = 'Silver';
        
        if (this.currentUser.membership !== newMembership) {
            this.currentUser.membership = newMembership;
            this.saveUserData(this.currentUser);
        }
    }

    getInitials(name) {
        if (!name) return 'U';
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    displayOrders() {
        const ordersContainer = document.getElementById('ordersContainer');
        const recentOrdersContainer = document.getElementById('recentOrdersContainer');
        
        if (!this.currentUser.orders || this.currentUser.orders.length === 0) {
            if (ordersContainer && !ordersContainer.querySelector('.empty-state')) {
                ordersContainer.innerHTML = `
                    <div class="empty-state" style="text-align: center; padding: 60px 20px;">
                        <div style="margin-bottom: 20px; color: #9ca3af;">
                            <i data-lucide="package" size="48"></i>
                        </div>
                        <h3 style="color: #111827; font-size: 20px; font-weight: 600; margin: 0 0 8px 0;">No orders yet</h3>
                        <p style="color: #6b7280; font-size: 14px; margin: 0;">Your order history will appear here</p>
                    </div>
                `;
            }
            
            if (recentOrdersContainer && !recentOrdersContainer.querySelector('.empty-state')) {
                recentOrdersContainer.innerHTML = `
                    <div class="empty-state" style="text-align: center; padding: 40px 20px;">
                        <div style="margin-bottom: 16px; color: #9ca3af;">
                            <i data-lucide="package" size="40"></i>
                        </div>
                        <h3 style="color: #111827; font-size: 18px; font-weight: 600; margin: 0 0 8px 0;">No orders yet</h3>
                        <p style="color: #6b7280; font-size: 14px; margin: 0 0 20px 0;">Start shopping to see your orders here</p>
                        <button onclick="location.href='all products.html'" style="background: #111827; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-size: 14px;">
                            Browse Products
                            <i data-lucide="arrow-right" size="16"></i>
                        </button>
                    </div>
                `;
            }
            
            lucide.createIcons();
            return;
        }

        if (ordersContainer) {
            const ordersHTML = this.currentUser.orders.map(order => `
                <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                        <div>
                            <p style="font-weight: 700; font-size: 16px; color: #111827; margin: 0 0 6px 0;">Order #${order.id}</p>
                            <p style="font-size: 14px; color: #6b7280; margin: 0;">
                                ${new Date(order.date).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                        <span style="background: ${order.status.toLowerCase() === 'processing' ? '#fef3c7' : order.status.toLowerCase() === 'delivered' ? '#dcfce7' : '#dbeafe'}; 
                                     color: ${order.status.toLowerCase() === 'processing' ? '#92400e' : order.status.toLowerCase() === 'delivered' ? '#166534' : '#1e40af'}; 
                                     padding: 6px 14px; border-radius: 6px; font-size: 13px; font-weight: 600; white-space: nowrap;">
                            ${order.status}
                        </span>
                    </div>
                    <div style="border-top: 1px solid #f3f4f6; padding-top: 16px; margin-bottom: 16px;">
                        ${order.items.map(item => `
                            <div style="margin-bottom: 14px; padding-bottom: 14px; border-bottom: 1px solid #f9fafb;">
                                <p style="font-weight: 600; font-size: 15px; color: #111827; margin: 0 0 6px 0;">${item.name}</p>
                                <p style="font-size: 14px; color: #6b7280; margin: 0;">Qty: ${item.quantity} × £${item.price.toFixed(2)}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #e5e7eb; flex-wrap: wrap; gap: 12px;">
                        <p style="font-weight: 700; font-size: 20px; color: #111827; margin: 0;">
                            Total: £${parseFloat(order.total).toFixed(2)}
                        </p>
                        <span style="font-size: 13px; color: #6b7280; background: #f9fafb; padding: 6px 12px; border-radius: 6px;">
                            ${order.delivery === 'express' ? '🚀 Express (1-2 days)' : '📦 Standard (5-6 days)'}
                        </span>
                    </div>
                </div>
            `).join('');

            ordersContainer.innerHTML = ordersHTML;
        }
        
        if (recentOrdersContainer) {
            const recentOrders = this.currentUser.orders.slice(0, 3);
            if (recentOrders.length > 0) {
                recentOrdersContainer.innerHTML = recentOrders.map(order => `
                    <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: all 0.2s;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; gap: 10px;">
                            <div style="flex: 1;">
                                <p style="font-weight: 700; font-size: 15px; color: #111827; margin: 0 0 5px 0;">Order #${order.id}</p>
                                <p style="font-size: 13px; color: #6b7280; margin: 0;">
                                    ${new Date(order.date).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <span style="background: ${order.status.toLowerCase() === 'processing' ? '#fef3c7' : order.status.toLowerCase() === 'delivered' ? '#dcfce7' : '#dbeafe'}; 
                                         color: ${order.status.toLowerCase() === 'processing' ? '#92400e' : order.status.toLowerCase() === 'delivered' ? '#166534' : '#1e40af'}; 
                                         padding: 5px 11px; border-radius: 6px; font-size: 12px; font-weight: 600; white-space: nowrap;">
                                ${order.status}
                            </span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #f3f4f6;">
                            <p style="font-weight: 700; font-size: 18px; color: #111827; margin: 0;">
                                £${parseFloat(order.total).toFixed(2)}
                            </p>
                            <p style="font-size: 13px; color: #6b7280; margin: 0;">
                                ${order.items.length} item${order.items.length > 1 ? 's' : ''}
                            </p>
                        </div>
                    </div>
                `).join('');
            }
        }

        lucide.createIcons();
    }

    setupProfileEdit() {
        const editBtn = document.getElementById('editProfileBtn');
        const saveBtn = document.getElementById('saveProfileBtn');
        const cancelBtn = document.getElementById('cancelEditBtn');
        const profileView = document.getElementById('profileView');
        const profileEditForm = document.getElementById('profileEditForm');

        if (!editBtn || !saveBtn || !cancelBtn || !profileView || !profileEditForm) return;

        editBtn.addEventListener('click', () => {
            const editNameEl = document.getElementById('editName');
            const editEmailEl = document.getElementById('editEmail');
            const editPhoneEl = document.getElementById('editPhone');
            
            if (editNameEl) editNameEl.value = this.currentUser.fullName;
            if (editEmailEl) editEmailEl.value = this.currentUser.email;
            if (editPhoneEl) editPhoneEl.value = this.currentUser.phone || '';

            profileView.style.display = 'none';
            profileEditForm.style.display = 'block';
        });

        cancelBtn.addEventListener('click', () => {
            profileView.style.display = 'grid';
            profileEditForm.style.display = 'none';
        });

        saveBtn.addEventListener('click', () => {
            const editNameEl = document.getElementById('editName');
            const editEmailEl = document.getElementById('editEmail');
            const editPhoneEl = document.getElementById('editPhone');
            
            const updatedData = {
                ...this.currentUser,
                fullName: editNameEl?.value || this.currentUser.fullName,
                email: editEmailEl?.value || this.currentUser.email,
                phone: editPhoneEl?.value || this.currentUser.phone
            };

            this.saveUserData(updatedData);
            this.loadUserProfile();
            
            profileView.style.display = 'grid';
            profileEditForm.style.display = 'none';

            this.showNotification('Profile updated successfully!');
        });
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to sign out?')) {
        localStorage.removeItem('techHouseUser');
        window.location.href = 'index.html';
    }
}

const accountManager = new AccountManager();

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
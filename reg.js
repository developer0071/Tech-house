const title = document.getElementById("form-title");
const desc = document.getElementById("form-desc");
const nameGroup = document.getElementById("name-group");
const submitBtn = document.getElementById("submit-btn");
const loginBtn = document.getElementById("loginBtn");
const toggleText = document.getElementById("toggle-text");
const nameInput = document.getElementById("full-name");

loginBtn.addEventListener("click", function () {
    if (title.innerText === "Create Account") {
        title.innerText = "Login";
        desc.innerText = "Welcome back! Please enter your details.";
        submitBtn.innerText = "Login";
        loginBtn.innerText = "Sign Up";
        toggleText.innerText = "Don't have an account?";
        nameGroup.classList.add("hidden");
        nameInput.removeAttribute("required");
    } else {
        title.innerText = "Create Account";
        desc.innerText = "Join Tech House for exclusive member perks";
        submitBtn.innerText = "Sign Up";
        loginBtn.innerText = "Login";
        toggleText.innerText = "Already have an account?";
        nameGroup.classList.remove("hidden");
        nameInput.setAttribute("required", "");
    }
});

const form = document.querySelector('.registration-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (title.innerText === "Create Account") {
        const newUser = {
            fullName: fullName,
            email: email,
            password: password, 
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
        localStorage.setItem('techHouseUser', JSON.stringify(newUser));
        
        window.location.href = 'home page.html';
    } else {
        const savedUser = JSON.parse(localStorage.getItem('techHouseUser') || '{}');
        
        if (savedUser.email === email && savedUser.password === password) {
            window.location.href = 'home page.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('silver.html') || currentPage.includes('golden.html')) {
        const membershipForm = document.querySelector('.sub-card form, form');
        
        if (membershipForm) {
            membershipForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const fullName = document.getElementById('full-name').value;
                const email = document.getElementById('email').value;
                
                const userData = JSON.parse(localStorage.getItem('techHouseUser') || '{}');
                
                const newMembership = currentPage.includes('silver.html') ? 'Silver' : 'Gold';
                
                if (userData.email) {
                    userData.membership = newMembership;
                    localStorage.setItem('techHouseUser', JSON.stringify(userData));
                    
                    alert(`Congratulations! You are now a ${newMembership} member!`);
                    window.location.href = 'home page.html';
                } else {
                    // Create new user with premium membership
                    const newUser = {
                        fullName: fullName,
                        email: email,
                        phone: '',
                        memberSince: new Date().toISOString(),
                        membership: newMembership,
                        stats: {
                            totalOrders: 0,
                            totalSpent: 0,
                            savedItems: 0,
                            rewardPoints: newMembership === 'Silver' ? 500 : 1000
                        },
                        orders: []
                    };
                    
                    localStorage.setItem('techHouseUser', JSON.stringify(newUser));
                    alert(`Welcome! You are now a ${newMembership} member!`);
                    window.location.href = 'home page.html';
                }
            });
        }
    }
});
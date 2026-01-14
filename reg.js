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
    }
);
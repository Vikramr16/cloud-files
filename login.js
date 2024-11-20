function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; 
    }
    return true;
}

function toggleForm() {
    var loginForm = document.getElementById("login_form");
    var signupForm = document.getElementById("signup_form");

    if (loginForm.classList.contains("active")) {
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
    } else {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    }
}

let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinbtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disable");
    signinbtn.classList.remove("disable");
}
signupbtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Un";
    signupbtn.classList.remove("disable");
    signinbtn.classList.add("disable");
}


document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const signupBtn = document.getElementById('signupbtn');
    const signinBtn = document.getElementById('signinbtn');

    signupBtn.addEventListener('click', function () {
        if (validateForm()) {
            alert('Sign up successful!');
            window.open("../Home/home.html");
        }
    });

    signinBtn.addEventListener('click', function () {
        if (validateForm()) {
            alert('Sign in successful!');
            window.open("../Home/home.html");
        }
    });

    function validateForm() {
        const nameField = document.querySelector('#nameField input');
        const emailField = document.querySelector('input[type="email"]');
        const passwordField = document.querySelector('input[type="password"]');

        if (nameField.value.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        if (emailField.value.trim() === '') {
            alert('Please enter your email.');
            return false;
        }

        if (passwordField.value.trim() === '') {
            alert('Please enter your password.');
            return false;
        }

        return true;
    }
});

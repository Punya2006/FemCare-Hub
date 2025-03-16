document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login_form');
    const signupForm = document.querySelector('.signup_form');
    const loginLink = document.getElementById('login');
    const signupLink = document.getElementById('signup');

    // Show login form by default
    loginForm.classList.add('active');

    // Switch forms
    loginLink.addEventListener('click', function() {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    signupLink.addEventListener('click', function() {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    // Basic form validation
    const signupFormElement = signupForm.querySelector('form');
    signupFormElement.addEventListener('submit', function(event) {
        const password = signupFormElement.querySelector('input[type="password"]').value;
        const confirmPassword = signupFormElement.querySelector('input[type="password"]:nth-child(3)').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            event.preventDefault();
        }
    });
});

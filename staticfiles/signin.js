const signinForm = document.getElementById('signin-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signinBtn = document.getElementById('signin-btn');
const errorMsg = document.getElementById('error-msg');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMsg.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match.';
        return;
    }
    errorMsg.textContent = '';
    alert('Signin successful!');
});
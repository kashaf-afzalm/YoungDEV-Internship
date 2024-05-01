document.addEventListener('DOMContentLoaded', function() {
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm_password');
    let btn = document.getElementById('buttn');

    function checkPasswords() {
        if (password.value === confirmPassword.value) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }

    // Call the checkPasswords function when the input fields change
    password.addEventListener('input', checkPasswords);
    confirmPassword.addEventListener('input', checkPasswords);
});
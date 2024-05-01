document.addEventListener('DOMContentLoaded', function() {
    let email= document.getElementById('email');
    let fname= document.getElementById('fname');


    function checkField() {
        if (email.value === null ) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
    
    // Call the checkPasswords function when the input fields change
    
    password.addEventListener('input', checkField);
    confirmPassword.addEventListener('input', checkField);
});
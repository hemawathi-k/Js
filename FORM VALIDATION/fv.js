const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    validateInputs();
});

function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    
    if (nameValue === '') {
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }
    
    if (emailValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Email is not valid');
    } else {
        setSuccess(emailInput);
    }
    
    if (passwordValue === '') {
        setError(passwordInput, 'Password is required');
    } else {
        setSuccess(passwordInput);
    }
}

function setError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.style.borderColor = 'red';
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.style.visibility = 'hidden';
  input.style.borderColor = 'green';
}


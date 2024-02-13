document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get form inputs
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    // Get values from inputs
    var username = usernameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    // Check if any field is empty
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If all validations pass, display a success message
    alert('Form submitted successfully!');

    // Optionally, you can reset the form or clear input fields here
    // document.getElementById('myForm').reset();
});


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    
    if (!username || !email || !password || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) {
        alert('Please fill in all fields and enter a valid email address with a password of at least 6 characters.');
        return;
    }
    
    alert('Form submitted successfully!');
    // Optionally reset the form:
    // event.target.reset();
});

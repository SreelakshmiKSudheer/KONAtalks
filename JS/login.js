document.querySelector('.login-link a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.href = 'login.html'; // Redirect to login page
});

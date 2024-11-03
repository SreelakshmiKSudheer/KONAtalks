document.querySelector('.login-link a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.href = 'home.html'; // Redirect to home page
});

document.querySelector('.search-btn').addEventListener('click', () => {
    let characterName = document.querySelector('.search-bar input').value;
    alert(`Searching for ${characterName}`);
});

document.querySelector('.send-btn').addEventListener('click', () => {
    let message = document.querySelector('.chat-input input').value;
    if (message) {
        alert(`Sending message: ${message}`);
    }
});

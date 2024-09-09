function showMessage() {
    const name = document.getElementById('name').value;
    const messageDiv = document.getElementById('message');
    const messageText = document.getElementById('birthday-message');

    if (name) {
        messageText.innerHTML = `🎉 Happy Birthday, ${name}! 🎉 <br> Wishing you lots of joy, love, and fun on your special day!`;
        messageDiv.classList.remove('hidden');
    } else {
        messageText.innerHTML = `Please enter your name to receive birthday wishes!`;
        messageDiv.classList.remove('hidden');
    }
}

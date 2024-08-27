function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesContainer = document.getElementById('messages');

    // Append user message
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    messagesContainer.appendChild(userMessage);

    // Mock API response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.textContent = 'Bot: This is a mock response.';
        messagesContainer.appendChild(botMessage);

        // Scroll to the bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);

    // Clear input
    document.getElementById('user-input').value = '';
}
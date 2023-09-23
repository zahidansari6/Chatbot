// script.js
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

sendButton.addEventListener("click", function () {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        appendMessage("You", userMessage);
        // You can add logic here to process and respond to the user's message.
        // For simplicity, we'll just echo the user's message.
        setTimeout(() => {
            appendMessage("Chatbot", userMessage);
        }, 1000); // Simulate a chatbot response (1 second delay).
        userInput.value = "";
    }
});

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const messages = document.getElementById("messages");

  const responses = [
    "I have anxiety too.",
    "I feel depressed sometimes.",
    "I know what you mean, it's tough.",
    "You're not alone, I struggle with similar feelings.",
    "It's okay to feel this way, we're here for you.",
  ];

  chatForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const messageContent = chatInput.value;
    if (messageContent) {
      const newMessage = document.createElement("div");
      newMessage.classList.add("message", "user");
      newMessage.innerHTML = `
                <p>${messageContent}</p>
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
            `;
      messages.appendChild(newMessage);
      chatInput.value = "";

      // Simulate receiving a variable reply
      setTimeout(() => {
        const replyMessage = document.createElement("div");
        replyMessage.classList.add("message", "other");
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        replyMessage.innerHTML = `
                    <p>${randomResponse}</p>
                    <span class="timestamp">${new Date().toLocaleTimeString()}</span>
                `;
        messages.appendChild(replyMessage);
        messages.scrollTop = messages.scrollHeight;
      }, 1000);

      messages.scrollTop = messages.scrollHeight;
    }
  });
});

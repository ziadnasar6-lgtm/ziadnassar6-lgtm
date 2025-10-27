// ===== Contact Modal =====
const contactBtns = [document.getElementById("contactBtn"), document.getElementById("contactBtnTop")];
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtns.forEach(btn => btn.addEventListener("click", () => contactModal.style.display = "flex"));
closeModal.addEventListener("click", () => contactModal.style.display = "none");
window.addEventListener("click", e => { if (e.target === contactModal) contactModal.style.display = "none"; });

// ===== Chat Box =====
const chatBtns = [document.getElementById("chatBtn"), document.getElementById("chatBtnTop")];
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendMessage = document.getElementById("sendMessage");
const userMessage = document.getElementById("userMessage");
const chatMessages = document.getElementById("chatMessages");

chatBtns.forEach(btn => btn.addEventListener("click", () => chatBox.style.display = "flex"));
closeChat.addEventListener("click", () => chatBox.style.display = "none");

// ===== Smart Reply Logic =====
function getSmartReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "👋 Hey there! I'm Zoz — your supportive AI buddy!";
  }

  if (text.includes("english")) {
    return "🗣️ English is a key skill for developers. It helps you read documentation and communicate with the global tech community.";
  }

  if (text.includes("communication")) {
    return "💬 Communication is power! It helps you work in teams and explain your code clearly.";
  }

  if (text.includes("time")) {
    return "⏰ Time management is vital! Use techniques like Pomodoro or daily goals to stay productive.";
  }

  if (text.includes("ai") || text.includes("artificial intelligence")) {
    return "🤖 AI is the science of making computers think and learn like humans — from machine learning to neural networks!";
  }

  if (text.includes("programming") || text.includes("coding")) {
    return "💻 Programming is like magic — you turn ideas into reality. Keep practicing daily!";
  }

  if (text.includes("help") || text.includes("need")) {
    return "🧠 I'm here to help! Ask me anything about learning, skills, or AI.";
  }

  // Funny / fallback replies 😄
  const randomReplies = [
    "😎 That's deep! I need a cup of data to think about it.",
    "😂 You’re funny! But let’s stay on topic — skills and AI!",
    "🤔 Interesting... Tell me more!",
    "💪 Great question! Keep learning, you’re doing awesome!"
  ];
  return randomReplies[Math.floor(Math.random() * randomReplies.length)];
}

// ===== Sending Messages =====
sendMessage.addEventListener("click", () => {
  const msg = userMessage.value.trim();
  if (!msg) return;

  const userDiv = document.createElement("p");
  userDiv.textContent = `🧑‍💻 ${msg}`;
  chatMessages.appendChild(userDiv);

  setTimeout(() => {
    const botDiv = document.createElement("p");
    botDiv.className = "bot";
    botDiv.textContent = "🤖 Zoz: " + getSmartReply(msg);
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 600);

  userMessage.value = "";
});

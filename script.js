
const motivationalQuotes = [
    "You have the power to shape the future. Start today! 🌍",
    "Your ideas can change lives. Never stop learning! 💡",
    "Be curious about the world. Your curiosity is your superpower! 🧠",
    "Great leaders understand people before they lead them. 👑",
    "Your dreams are valid. Your effort will make them possible! 🚀",
    "Education is your passport to a better future. 🎓",
    "Don't just study society. Become the person who improves it! 🌱",
    "Think critically, act responsibly and lead boldly! 🔥",
    "The world needs your voice, your ideas and your courage! 🌟",
    "Small actions today can create a better society tomorrow! 🤝"
];

function showMotivation() {
    const display = document.getElementById("motivation");

    if (!display) return;

    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);

    display.textContent = motivationalQuotes[randomIndex];
}

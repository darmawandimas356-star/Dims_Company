const text = "Terima kasih telah mengunjungi website pribadi saya. Semoga anda nyaman dengan website yang saya buat.";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

window.onload = typeEffect;

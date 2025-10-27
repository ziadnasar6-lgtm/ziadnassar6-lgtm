
// تأثير النبض على الكارت
const chattoCard = document.querySelector('.chatto-card');
if (chattoCard) {
  chattoCard.addEventListener('click', () => {
    chattoCard.classList.add('active');
    setTimeout(() => chattoCard.classList.remove('active'), 400);
  });
}

// تأثير التمرير الناعم للزرار "ابدأ الآن"
const startButton = document.querySelector('.start-btn');
if (startButton) {
  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#section2');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}



// === Handle Rank Clicks ===
document.addEventListener('DOMContentLoaded', () => {
  const rankItems = document.querySelectorAll('.rank-item');
  const popup = document.getElementById('rankPopup');
  const rankTitle = document.getElementById('rankTitle');
  const rankDescription = document.getElementById('rankDescription');
  const closeBtn = document.querySelector('.close-btn');

  // --- Rank details ---
  const rankDetails = {
    'Beginner': '🔥 You are at the beginning of the journey — but you’ve got this!',
    'Intermediate': '⚙ You are close to the top, and your effort shows in every step ⚡',
    'Intermediate +': '💪 You are on your way to becoming a legend ⚡',
    'Advanced': '🚀 Thanks to your effort, you’ve already become a legend ⚡⚡',
    'Dragon': '🐉 Be proud of yourself — you have become a dragon ⚡⚡',
    'De Dragon': '⚡ Be proud of yourself — you are Elzero!'
  };

  // --- Show popup when clicking rank ---
  rankItems.forEach(item => {
    item.addEventListener('click', () => {
      const rankName = item.textContent.trim();
      rankTitle.textContent = rankName;
      rankDescription.textContent = rankDetails[rankName] || 'Details not found for this rank.';
      popup.classList.add('active');

      // --- Electric glow effect ---
      popup.style.boxShadow = '0 0 25px #00aaff, inset 0 0 15px #007bff';
      setTimeout(() => {
        popup.style.boxShadow = '0 0 15px #007bff, inset 0 0 10px #00aaff';
      }, 500);
    });
  });

  // --- Close popup ---
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});

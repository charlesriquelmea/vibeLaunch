// Simple confetti effect without external dependencies
export function triggerConfetti() {
  if (typeof window === 'undefined') return;
  
  const confettiCount = 50;
  const duration = 2000;
  
  for (let i = 0; i < confettiCount; i++) {
    createConfettiPiece();
  }
}

function createConfettiPiece() {
  const confetti = document.createElement('div');
  const colors = ['#ff6b35', '#ffa500', '#f59e0b', '#10b981', '#3b82f6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomX = Math.random() * window.innerWidth;
  const randomDelay = Math.random() * 0.5;
  const randomDuration = 2 + Math.random() * 1;
  const randomRotation = Math.random() * 360;
  
  confetti.style.position = 'fixed';
  confetti.style.left = randomX + 'px';
  confetti.style.top = '-10px';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.backgroundColor = randomColor;
  confetti.style.borderRadius = '50%';
  confetti.style.pointerEvents = 'none';
  confetti.style.zIndex = '9999';
  confetti.style.opacity = '1';
  
  document.body.appendChild(confetti);
  
  const keyframes = `
    @keyframes fall ${Math.random()} {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(${window.innerHeight + 10}px) rotate(${randomRotation}deg);
        opacity: 0;
      }
    }
  `;
  
  const style = document.createElement('style');
  style.innerHTML = keyframes;
  document.head.appendChild(style);
  
  const animationName = `fall ${Math.random()}`.replace('.', '');
  confetti.style.animation = `${animationName.split(' ').join('-')} ${randomDuration}s linear ${randomDelay}s forwards`;
  
  setTimeout(() => {
    confetti.remove();
    style.remove();
  }, (randomDelay + randomDuration) * 1000);
}

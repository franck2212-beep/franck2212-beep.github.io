// Contador regresivo
const countdownTimer = document.getElementById('countdown-timer');
const weddingDate = new Date('2025-01-18T13:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownTimer.textContent = "¡Es hoy!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownTimer.textContent = `${days} días ${hours}:${minutes}:${seconds}`;
}

setInterval(updateCountdown, 1000);

// Modo oscuro
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  toggleThemeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️ Cambiar a Claro' : '🌙 Cambiar Tema';
});

// Reproducir canción
const playMusicBtn = document.getElementById('play-music-btn');
const weddingSong = document.getElementById('wedding-song');

playMusicBtn.addEventListener('click', () => {
  if (weddingSong.paused) {
    weddingSong.play();
    playMusicBtn.textContent = '⏸️ Pausar Canción';
  } else {
    weddingSong.pause();
    playMusicBtn.textContent = '🎵 Reproducir Canción';
  }
});

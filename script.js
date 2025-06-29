let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000);

playBtn.addEventListener('click', () => {
  music.play();
  playBtn.style.display = 'none';
});
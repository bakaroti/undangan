const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

function countdown() {
  const weddingDate = new Date("2032-03-03T08:00:00Z"); // Tanggal pernikahan
  const now = new Date();

  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(countdown, 1000);

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 33.33}%)`; /* Move by 33.33% for each slide */
}

function goToNextSlide() {
  if (currentIndex < slides.length - 3) {
      currentIndex++;
      goToSlide(currentIndex);
  }
}

nextBtn.addEventListener('click', goToNextSlide);

function goToPrevSlide() {
  if (currentIndex > 0) {
      currentIndex--;
      goToSlide(currentIndex);
  }
}

prevBtn.addEventListener('click', goToPrevSlide);

const audio = new Audio('resource/music/music.mp3');
audio.loop = true; // Set to true for continuous playback

// Toggle Music Button
const musicToggleBtn = document.createElement('button');
musicToggleBtn.classList.add('music-toggle-btn');
musicToggleBtn.innerHTML = '<i class="fas fa-music"></i>';
document.body.appendChild(musicToggleBtn);

let isMusicPlaying = false; // Initial state

musicToggleBtn.addEventListener('click', () => {
  if (isMusicPlaying) {
    audio.pause();
    musicToggleBtn.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    audio.play();
    musicToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
  isMusicPlaying = !isMusicPlaying; // Toggle state
});

audio.addEventListener('ended', () => {
  audio.currentTime = 0;
  audio.play();
});

document.addEventListener('DOMContentLoaded', () => {
  audio.play();
  isMusicPlaying = true;
  musicToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
});

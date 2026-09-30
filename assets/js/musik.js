const songs = [
  {
    title: "Romansa Masa Depan",
    artist: "Gleen Fredly",
    src: "../../../assets/audio/lagu1.mp3",
    cover: "../../../assets/images/cover1.jpg",
    duration: "04:59"
  },
  {
    title: "Kisah Romantis",
    artist: "Gleen Fredly",
    src: "../../../assets/audio/lagu2.mp3",
    cover: "../../../assets/images/cover2.jpg",
    duration: "05.25"
  },
  {
    title: "Training Season",
    artist: "Dua Lipa",
    src: "../../../assets/audio/lagu3.mp3",
    cover: "../../../assets/images/cover3.jpg",
    duration: "04:29"
  },
  {
    title: "Rahasia Hati",
    artist: "Element",
    src: "../../../assets/audio/lagu4.mp3",
    cover: "../../../assets/images/cover4.jpg",
    duration: "03:12"
  },
  {
    title: "Laskar Cinta",
    artist: "Dewa 19",
    src: "../../../assets/audio/lagu5.mp3",
    cover: "../../../assets/images/cover5.jpg",
    duration: "05:17"
  }
];

// DOM Elements
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const coverEl = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');

// Current song index
let currentSongIndex = 0;
let isPlaying = false;

// Load song
function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
  coverEl.src = song.cover;
  durationEl.textContent = song.duration;
  
  // Highlight current song in playlist
  const items = playlistEl.querySelectorAll('li');
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Play song
function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// Pause song
function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Event listeners
playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener('click', () => {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong(currentSongIndex);
  playSong();
});

nextBtn.addEventListener('click', () => {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  loadSong(currentSongIndex);
  playSong();
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const { currentTime, duration } = audio;
  const progressPercent = (currentTime / duration) * 100;
  progress.value = progressPercent;
  
  // Update current time
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);
  if (seconds < 10) seconds = '0' + seconds;
  currentTimeEl.textContent = `${minutes}:${seconds}`;
});

// Set progress
progress.addEventListener('input', () => {
  const seekTime = (progress.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Song ends
audio.addEventListener('ended', () => {
  nextBtn.click();
});

// Playlist click
playlistEl.querySelectorAll('li').forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    playSong();
  });
});

// Initialize
loadSong(currentSongIndex);

// Navigation buttons
document.querySelector('.next-btn').addEventListener('click', () => {
  window.location.href = 'tetris.html';
});

document.querySelector('.back-btn').addEventListener('click', () => {
  window.location.href = 'index.html';
});
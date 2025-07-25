const home = document.getElementsByClassName("home")[0];
const browse = document.getElementsByClassName("browse")[0];
const playlist = document.getElementsByClassName("playlist")[0];

home.addEventListener("click",function(){
    home.style.backgroundColor = "rgba(226, 219, 219, 0.3)";
    browse.style.backgroundColor = "transparent";
    playlist.style.backgroundColor = "transparent";
})
browse.addEventListener("click",function(){
    home.style.backgroundColor = "transparent"
    browse.style.backgroundColor = "rgba(226, 219, 219, 0.3)"
    playlist.style.backgroundColor = "transparent"
})
playlist.addEventListener("click",function(){
    home.style.backgroundColor = "transparent"
    browse.style.backgroundColor = "transparent"
    playlist.style.backgroundColor = "rgba(226, 219, 219, 0.3)"
})

document.getElementsByClassName("like")[0].addEventListener("click",function(){
    if(this.style.color==="red"){
        this.style.color="white"
    }else{
        this.style.color="red"
    }
})

document.getElementsByClassName("current-like")[0].addEventListener("click",function(){
    if(this.style.color==="red"){
        this.style.color="white"
    }else{
        this.style.color="red"
    }
})

const music = document.getElementById("musicPlayer")
const playButton = document.getElementById("playButton");
const currentTimeDisplay = document.getElementById("currentTime");
const volumeSlider = document.getElementById("volumeSlider");

playButton.addEventListener("click",function(){
    if(music.paused){
        music.play();
        this.setAttribute("src","images/pause-button.png")
    }
    else{
        music.pause();
        this.classList.remove("fa-pause")
        this.setAttribute("src","images/play-button.jpg")
    }
})
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}
music.addEventListener("timeupdate", function () {
    currentTimeDisplay.textContent = formatTime(music.currentTime);
});

document.addEventListener("DOMContentLoaded", function () {
    
    volumeSlider.value = 0.5; 
    music.volume = 0.5;
  });
  function changeVolume(value) {
    document.getElementById("musicPlayer").volume = value;
}
document.addEventListener("DOMContentLoaded", function () {
    volumeSlider.value = 0.5; 
    music.volume = 0.5; 
  });
document.getElementsByClassName("volume")[0].addEventListener("click",toggleVolume);
function toggleVolume() {
    if (music.volume > 0) {
        music.volume = 0;
        volumeSlider.value = 0;
        this.classList.remove("fa-volume-low");
        this.classList.add("fa-volume-xmark")
        
    } else {
        music.volume = 1;
        volumeSlider.value = 1; 
        this.classList.remove("fa-volume-xmark");
        this.classList.add("fa-volume-low")
    }
}

volumeSlider.addEventListener("click",()=>{
    if(volumeSlider.value>0){
        document.getElementsByClassName("volume")[0].classList.remove("fa-volume-xmark");
        document.getElementsByClassName("volume")[0].classList.add("fa-volume-low")
    }
    if(volumeSlider.value == 0){
        document.getElementsByClassName("volume")[0].classList.remove("fa-volume-low");
        document.getElementsByClassName("volume")[0].classList.add("fa-volume-xmark")
    }
})

const progressContainer = document.getElementById("progressContainer");
const totalTimeDisplay = document.getElementById("totalTime");

music.addEventListener("loadedmetadata", () => {
    totalTimeDisplay.textContent = formatTime(music.duration);
});

music.addEventListener("timeupdate", () => {
    const progressFill = document.getElementById("progressFill")
    const progressPercentage = (music.currentTime / music.duration) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    currentTimeDisplay.textContent = fTime(music.currentTime);
});

progressContainer.addEventListener("click", (e) => {
    const clickX = e.offsetX;
    const totalWidth = progressContainer.clientWidth;
    const newTime = (clickX / totalWidth) * music.duration;
    music.currentTime = newTime;
});

function fTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

document.querySelectorAll('.song-hover').forEach(song => {
    song.addEventListener('click', function () {
        const songName = this.querySelector('.song-hover-song-name').textContent;
        const artistName = this.querySelector('.song-hover-artist-name').textContent;
        const songImage = this.querySelector('img').src;
        
        const nowPlayingSong = document.querySelector('.current-song');
        const nowPlayingImage = document.querySelector('.now-playing'); 
        const nowPlayingArtist = document.querySelector('.current-artist');
        const playBarImage = document.getElementById('play-bar-image');
        const audioPlayer = document.getElementById('musicPlayer');
        
        const currentSongName = nowPlayingSong.textContent;
        const currentSongImage = nowPlayingImage.src;
        const currentArtistName = nowPlayingArtist.textContent;

        nowPlayingImage.src = songImage;
        nowPlayingSong.textContent = songName;
        nowPlayingArtist.textContent = artistName;
        playBarImage.src = songImage; 
        
        const clickAudio = this.querySelector('.music'); 
        const tempSrc = audioPlayer.src; 
        audioPlayer.src = clickAudio.src; 
        audioPlayer.load(); 
        audioPlayer.play(); 

        clickAudio.src = tempSrc;
        const playButton = document.getElementById("playButton");
        playButton.setAttribute("src","images/pause-button.png");

        this.querySelector('.song-hover-song-name').textContent = currentSongName;
        this.querySelector('.song-hover-artist-name').textContent = currentArtistName;
        this.querySelector('img').src = currentSongImage;
        
    });
});

document.getElementById("dynamic-two").addEventListener("click",()=>{
        const upNextImage = document.querySelector('#next-song-image');
        const upNextSong = document.querySelector('#next-song-name');
        const upNextArtist = document.querySelector('#next-song-artist');
        const songTwoImage = document.getElementById("dynamic-two-image").src;
        const songTwoName = document.getElementById("dynamic-two-name").textContent;
        const songTwoArtist = document.getElementById("dynamic-two-artist").textContent;

        upNextImage.src = songTwoImage;
        upNextSong.textContent = songTwoName;
        upNextArtist.textContent = songTwoArtist;
})

document.getElementById("next").addEventListener("click",()=>{
    document.getElementById("dynamic-two").click();
})

document.getElementById("previous").addEventListener("click",()=>{
    document.getElementById("dynamic-three").click();
})
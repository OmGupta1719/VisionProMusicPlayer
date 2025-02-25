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




//Like
document.getElementsByClassName("like")[0].addEventListener("click",function(){
    if(this.style.color==="red"){
        this.style.color="white"
    }else{
        this.style.color="red"
    }
})
//Cuurent-like
document.getElementsByClassName("current-like")[0].addEventListener("click",function(){
    if(this.style.color==="red"){
        this.style.color="white"
    }else{
        this.style.color="red"
    }
})

//Pause Play and Time
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

//Volume
document.addEventListener("DOMContentLoaded", function () {
    
    volumeSlider.value = 0.5; // Set slider to middle
    music.volume = 0.5; // Set actual audio volume to 50%
  });
  function changeVolume(value) {
    document.getElementById("musicPlayer").volume = value;
}
document.addEventListener("DOMContentLoaded", function () {
    volumeSlider.value = 0.5; // Set slider to middle
    music.volume = 0.5; // Set actual audio volume to 50%
  });
document.getElementsByClassName("volume")[0].addEventListener("click",toggleVolume);
function toggleVolume() {
    if (music.volume > 0) {
        music.volume = 0; // Mute
        volumeSlider.value = 0; // Set slider to middle
        this.classList.remove("fa-volume-low");
        this.classList.add("fa-volume-xmark")
        
    } else {
        music.volume = 1; // Full volume
        volumeSlider.value = 1; // Set slider to middle
        this.classList.remove("fa-volume-xmark");
        this.classList.add("fa-volume-low")
    }
    volumeDisplay.textContent = music.volume.toFixed(1);
}




// 
// 
// 

const progressContainer = document.getElementById("progressContainer");
const totalTimeDisplay = document.getElementById("totalTime");


// Update total duration
music.addEventListener("loadedmetadata", () => {
    totalTimeDisplay.textContent = formatTime(music.duration);
});

// Update progress bar as song plays
music.addEventListener("timeupdate", () => {
    const progressPercentage = (music.currentTime / music.duration) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    currentTimeDisplay.textContent = fTime(music.currentTime);
});

// Seek functionality (Click on progress bar)
progressContainer.addEventListener("click", (e) => {
    const clickX = e.offsetX;
    const totalWidth = progressContainer.clientWidth;
    const newTime = (clickX / totalWidth) * music.duration;
    music.currentTime = newTime;
});

// Format time function
function fTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
}

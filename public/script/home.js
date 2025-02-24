//Like
document.getElementsByClassName("like")[0].addEventListener("click",function(){
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

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







document.querySelectorAll('.song-hover').forEach(song => {
    song.addEventListener('click', function () {
        const songName = this.querySelector('.song-hover-song-name').textContent.trim();
        const artistName = this.querySelector('.song-hover-artist-name').textContent.trim();
        const songImage = this.querySelector('img').src;

        // Get current now-playing elements
        const nowPlayingImage = document.querySelector('.now-playing');
        const nowPlayingSong = document.querySelector('.current-song');
        const nowPlayingArtist = document.querySelector('.current-artist');
        const playBarImage = document.getElementById('play-bar-image');
        const audioPlayer = document.getElementById('musicPlayer');

        // Get up next elements
        

        // Store current playing song details before replacement
        const currentSongName = nowPlayingSong.textContent;
        const currentArtistName = nowPlayingArtist.textContent;
        const currentSongImage = nowPlayingImage.src;

        // Update now-playing section
        nowPlayingImage.src = songImage;
        nowPlayingSong.textContent = songName;
        nowPlayingArtist.textContent = artistName;
        playBarImage.src = songImage; // Update play-bar image

        // Format audio filename
        let formattedSongName = songName.toLowerCase().replace(/ /g, '-');
        let audioSrc = `audio/${formattedSongName}.mp3`;

        // Update audio source
        audioPlayer.src = audioSrc;
        audioPlayer.play();
        const playButton = document.getElementById("playButton");
        playButton.setAttribute("src","images/pause-button.png");

        // Handle errors in case the audio file is missing
        audioPlayer.onerror = function () {
            console.error('Audio file not found:', audioSrc);
        };


        // Replace the selected song with the previously playing song
        this.querySelector('.song-hover-song-name').textContent = currentSongName;
        this.querySelector('.song-hover-artist-name').textContent = currentArtistName;
        this.querySelector('img').src = currentSongImage;


        // Update Up Next to always be songTwo
        

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
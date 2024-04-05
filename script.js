//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const audioPlayer = document.getElementById('audioPlayer');
    const switchSoundA = document.getElementById('switchSoundA');
    const switchSoundB = document.getElementById('switchSoundB');
    const smallerMins = document.getElementById('smaller-mins');
    const mediumMins = document.getElementById('medium-mins');
    const longMins = document.getElementById('long-mins');
    const timeDisplay = document.querySelector('.time-display');
    const playPause = document.getElementById('playPause');

    // Function to switch between sounds
    switchSoundA.addEventListener('click', function() {
        audioPlayer.src = "audio/beach.mp3";
        videoPlayer.src = "video/beach.mp4";
    });

    switchSoundB.addEventListener('click', function() {
        audioPlayer.src = "audio/rain.mp3";
        videoPlayer.src = "video/rain.mp4";
    });

    // Function to select meditation time
    smallerMins.addEventListener('click', function() {
        timeDisplay.textContent = '02:00';
    });

    mediumMins.addEventListener('click', function() {
        timeDisplay.textContent = '05:00';
    });

    longMins.addEventListener('click', function() {
        timeDisplay.textContent = '10:00';
    });

    // Function to play or pause
    playPause.addEventListener('click', function() {
        if (videoPlayer.paused) {
            videoPlayer.play();
            audioPlayer.play();
            playPause.textContent = 'Pause';
        } else {
            videoPlayer.pause();
            audioPlayer.pause();
            playPause.textContent = 'Play';
        }
    });
});

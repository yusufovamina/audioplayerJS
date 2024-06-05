document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop');
    const rewindButton = document.getElementById('rewind');
    const fastForwardButton = document.getElementById('fastforward');
    const muteButton = document.getElementById('mute');
    const shuffleButton = document.getElementById('shuffle');
    const volumeSlider = document.getElementById('volume');
    const progressBar = document.getElementById('progress');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');

    playPauseButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    stopButton.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
        playPauseButton.textContent = 'Play';
    });

    rewindButton.addEventListener('click', function() {
        audio.currentTime -= 10;
    });

    fastForwardButton.addEventListener('click', function() {
        audio.currentTime += 10;
    });

    muteButton.addEventListener('click', function() {
        audio.muted = !audio.muted;
        muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
    });


    volumeSlider.addEventListener('input', function() {
        audio.volume = volumeSlider.value;
    });

    audio.addEventListener('timeupdate', function() {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTimeSpan.textContent = formatTime(audio.currentTime);
        durationSpan.textContent = formatTime(audio.duration);
    });

    progressBar.addEventListener('input', function() {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = Math.floor(seconds % 60);
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    }
});

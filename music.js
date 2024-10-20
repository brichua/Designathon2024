document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-music');
    audio.src = "piano.mp3";

    if (localStorage.getItem('audioTime')) {
        audio.currentTime = localStorage.getItem('audioTime');
    }
    if (localStorage.getItem('audioVolume')) {
        audio.volume = localStorage.getItem('audioVolume');
    }

    window.onbeforeunload = function () {
        localStorage.setItem('audioTime', audio.currentTime);
        localStorage.setItem('audioVolume', audio.volume);
    };

    // Add an interaction to start playback
    document.addEventListener('click', function() {
        audio.play().catch(error => {
            console.error("Playback failed: ", error);
        });
    });
});
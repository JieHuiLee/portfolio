document.addEventListener("DOMContentLoaded", function () {
    const bgm = document.getElementById("bgm");
    const bgmToggle = document.getElementById("bgm-toggle");

    bgmToggle.addEventListener("click", function () {
        if (bgm.paused) {
            bgm.play();
            bgmToggle.textContent = "⏸ Pause Music";
        } else {
            bgm.pause();
            bgmToggle.textContent = "🎵 Play Music";
        }
    });
});

import MediaPlayer from "./MediaPlayer";

const playButton: HTMLElement = document.querySelector("#play-pause");
const muteButton: HTMLElement = document.querySelector("#muted-unmuted");
const video = document.querySelector('video');

const player = new MediaPlayer({
    el:video,
    plugins: []
})

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    }else {
        player.mute();
    }
};


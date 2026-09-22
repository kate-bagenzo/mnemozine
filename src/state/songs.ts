import { reactive } from "vue";
import { Howl } from "howler";

interface HowlIndex {
    [key: string]: Howl
}

const musics: HowlIndex = {
    'clickSnd': new Howl({src: ['/sound/click.ogg']}),
    'bell': new Howl({src: ['/sound/bell.wav']}),
    'beep': new Howl({src: ['/sound/button05.mp3']}),
    'startup': new Howl({src: ['/sound/startup.wav']}),
    'keypress': new Howl({src: ['/sound/keypress.mp3']}),
    'wizard': new Howl({src: ['/sound/wizard.ogg']}),
    'breakLock': new Howl({src: ['/sound/breakLock.ogg']}),
    'greenfog': new Howl({src: '/sound/greenfog.mp3', loop: true, volume: 0}),
    '1500g': new Howl({src: '/sound/1500g.mp3', loop: true, volume: 0}),
    'restore': new Howl({src: '/sound/restore.mp3', loop: true, volume: 0}),
    'investigation': new Howl({src: '/sound/investigation.mp3', loop: true, volume: 0}),
    'reading': new Howl({src: '/sound/reading.mp3', loop: true, volume: 0}),

}

export const songs = reactive({
    currentSong: musics['clickSnd'],
    nextSong: musics['greenfog'],
    volume: 1,
    setVolume(newVol: any) {
        Howler.volume(newVol);
        this.volume = newVol;
    },
    stopPlaying() {
        this.currentSong.fade(1, 0, 2500);
        this.currentSong.once('fade', () => {
            this.currentSong.pause();
        });
    },
    changePlaying(newSong: string) {
        this.nextSong = musics[newSong];
    if (!(this.currentSong == this.nextSong)) {
        this.currentSong.fade(1, 0, 2500);
        this.currentSong.once('fade', () => {
            this.currentSong.pause();
            this.currentSong = this.nextSong;
            this.currentSong.play();
            this.currentSong.fade(0, 1, 2500);
        });
    }
    },
    playClick() {
        musics['clickSnd'].play();
    },
    playSnd(sound: any) {
        musics[sound].play();
    }
});
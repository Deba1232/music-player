import { Howl, Howler } from "howler";



function loadMusic(musicSource){
    let sound = new Howl({
        src: [musicSource],
        autoplay: true,
        loop: true,
        volume: 0.5,
    });
}
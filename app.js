const btnPlay = document.querySelector(`.play`),
    btnBackward = document.querySelector(`.backward`),
    btnForward = document.querySelector(`.forward`);
const cover = document.querySelector(`.music-cover`);
const artistName = document.querySelector(`.artist-name`),
    musicName = document.querySelector(`.music-name`),
    time = document.querySelector(`.time`);
const progress = document.querySelector(`.progress-line`);
const faivorite = document.querySelector(`.faivorite`);
const audio = document.createElement(`audio`);
let isSongPlay = false;
let isFaivorite = false;
let index = 1;
const library = [{
        artist: `Rusowsky`,
        songName: `Dolores`,
        path: `./music/0.mp3`
    },
    {
        artist: `Mazzy Star`,
        songName: `That Way Again`,
        path: `./music/1.mp3`
    },
    {
        artist: `Jorge Villanueva`,
        songName: `Je Veux`,
        path: `./music/2.mp3`
    }
];

const formatTime = (time) => {
    let hr = Math.floor(time / 3600),
        min = Math.floor((time - (hr * 3600)) / 60),
        sec = Math.floor(time - (hr * 3600) - (min * 60));
    if (min < 10) min = `0${min}`;
    if (sec < 10) sec = `0${sec}`;
    return `${min}:${sec}`;
}

const audioPlay = (audio) => {
    audio.play();
    isSongPlay = true;
    btnPlay.querySelector(`i.fas`).classList.remove(`fa-play`);
    btnPlay.querySelector(`i.fas`).classList.add(`fa-pause`);
};
const audioPause = (audio) => {
    audio.pause();
    isSongPlay = false;
    btnPlay.querySelector(`i.fas`).classList.remove(`fa-pause`);
    btnPlay.querySelector(`i.fas`).classList.add(`fa-play`);
};

const songTime = (song) => {
    const {
        duration,
        currentTime
    } = song.srcElement;
    const precentProgress = (currentTime / duration) * 100;
    progress.style.width = `${precentProgress}%`;
    const currTime = Math.floor(audio.currentTime).toString();
    time.innerHTML = formatTime(currTime);
}

audio.addEventListener(`timeupdate`, songTime)

btnPlay.addEventListener(`click`, () => {
    audio.src = library[index].path;
    artistName.innerHTML = library[index].artist;
    musicName.innerHTML = library[index].songName;
    if (!isSongPlay) {
        audioPlay(audio);
    } else audioPause(audio);
});

btnForward.addEventListener(`click`, () => {
    if (index === 0 || index === 1) {
        index++;
        audio.src = library[index].path;
        cover.style = `background-image: url(./image/${index}.png);`
        artistName.innerHTML = library[index].artist;
        musicName.innerHTML = library[index].songName;
    } else {
        index = 0;
        audio.src = library[index].path;
        cover.style = `background-image: url(./image/${index}.png);`
        artistName.innerHTML = library[index].artist;
        musicName.innerHTML = library[index].songName;
    }
    if (!isSongPlay) {
        audioPlay(audio);
    } else audioPause(audio);
})

btnBackward.addEventListener(`click`, () => {
    if (index === 1 || index === 2) {
        index--;
        audio.src = library[index].path;
        cover.style = `background-image: url(./image/${index}.png);`
        artistName.innerHTML = library[index].artist;
        musicName.innerHTML = library[index].songName;
    } else {
        index = 2;
        audio.src = library[index].path;
        cover.style = `background-image: url(./image/${index}.png);`
        artistName.innerHTML = library[index].artist;
        musicName.innerHTML = library[index].songName;
    }
    if (!isSongPlay) {
        audioPlay(audio);
    } else audioPause(audio);
})
faivorite.addEventListener(`click`, () => {
    if (!isFaivorite) {
        faivorite.style = `background-image: url(./image/Icon2.png);`
        isFaivorite = true;
    } else {
        faivorite.style = `background-image: url(./image/Icon.svg);`
        isFaivorite = false;
    }
})

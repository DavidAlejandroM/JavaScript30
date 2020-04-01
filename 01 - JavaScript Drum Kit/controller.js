const KEY_CLASS_NAME = '.key';
const PLAYING_CLASS_NAME = 'playing';
let timeOutEvents = [];

let keyDownEventListener = (e) => {
    playAudio(e);
    setCssPlayingClass(e);
    //reset animation
    if(e.keyCode == 65){
        timeOutEvents.forEach(timeOut => clearTimeout(timeOut));
        setAnimation();
    }
};

let playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
};

let setCssPlayingClass = (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.add(PLAYING_CLASS_NAME);
};

let setAnimation = () => {
    let xPositions = [];
    let yPosition = getYPosition(document.querySelector(KEY_CLASS_NAME));
    let times = getTimes();
    let pinkPanther = document.getElementsByClassName('pink-panther')[0];

    document.querySelectorAll(KEY_CLASS_NAME).forEach(
        (key) => xPositions.push(getXPosition(key))
    )

    pinkPanther.style.display = 'block'
    pinkPanther.style.position = "absolute";
    pinkPanther.style.top = `${yPosition}px`;
    xPositions.forEach((x, i) => {
        timeOutEvents.push(
            setTimeout(() => {
                pinkPanther.style.left = `${x}px`;
            }, 1000 * times[i]));
    });
};

let getXPosition = key => {
    const rect = key.getBoundingClientRect();
    return rect.x;
}

let getYPosition = key => {
    const rect = key.getBoundingClientRect();
    return rect.y - rect.height;
}

let getTimes = () => {
    let times = [];
    let acumulativeTimers = []
    document.querySelectorAll(`audio`).forEach(
        audio => {
            times.push(audio.duration)
        }
    )
    times.forEach(
        (time, i) => {
            if (i == 0) {
                acumulativeTimers.push(0);
            } else {
                acumulativeTimers.push(acumulativeTimers[i - 1] + time)
            }
        });
    return acumulativeTimers;
}

let removeTransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove(PLAYING_CLASS_NAME);
}

window.addEventListener('keydown', keyDownEventListener);
const keys = document.querySelectorAll(KEY_CLASS_NAME);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
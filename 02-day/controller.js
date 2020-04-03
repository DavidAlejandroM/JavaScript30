let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
let hands = document.querySelectorAll('.hand');
const audio = document.querySelector('audio');
let clock = document.querySelector('.clock');

setInterval(() => {
    audio.play();

    let date = new Date();
    let seconds = date.getSeconds();
    let secondDegrees = getDegrees(seconds, 60);
    setTransformRotate(secondHand, secondDegrees);
    
    let mins = date.getMinutes();
    let minDegrees = getDegrees(mins, 60);
    setTransformRotate(minuteHand, minDegrees);

    let hour = date.getHours();
    let hourDegrees = getDegrees(((hour + 11) % 12 + 1), 12);
    setTransformRotate(hourHand, hourDegrees);

    hands.forEach((hand) => hand.style.display = 'block');
    clock.style.border = `20px solid ${getRandomColor()}`;

}, 1000);

let getDegrees = (time, totalUnit, offset) => {
    return ((time / totalUnit * 360) + 90);
};

let setTransformRotate = (element, degreesValue) => {
    element.style.transform = `rotate(${degreesValue}deg)`;
}

let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
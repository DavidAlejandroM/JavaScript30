const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 300; // 500px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 3));
  const yWalk = Math.round((y / height * walk) - (walk / 3));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,200,0.2),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.2),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.2),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.2)
  `;

}

hero.addEventListener('mousemove', shadow);
/**
 * The JavaScript code creates a simple bubble popping game where the player has to click on bubbles
 * matching a randomly generated number within a time limit to increase their score.
 */
var timer = 60;
var pbtm = document.querySelector("#pbottom");
var HitVal = document.querySelector("#HitVal");
var scoreVal = document.querySelector("#scoreVal");
var hitrn;
var score = 0;
function createBubble() {
  var clutter = "";
  for (let i = 1; i <= 130; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}   
        </div>`;
  }
  pbtm.innerHTML = clutter;
}
function runtimer() {
  var time_counter = setInterval(() => {
    if (timer > 0) {
      timer--;
      let Timer = document.querySelector("#Timer");
      Timer.textContent = timer;
    } else {
      clearInterval(time_counter);
      pbtm.innerHTML = `<h1 id='gameOver'>Game Over</h1>`;
    }
  }, 1000);
}

function hit() {
  hitrn = Math.floor(Math.random() * 10);
  HitVal.textContent = hitrn;
}
function Increasescore() {
  score += 10;
  scoreVal.textContent = score;
}
pbtm.addEventListener("click", (dets) => {
  var bubbleClicked = Number(dets.target.textContent);
  console.log(bubbleClicked);
  if (bubbleClicked === hitrn) {
    Increasescore();
    hit();
    createBubble();
  } else {
    if (timer > 0) {
      createBubble();
    }
  }
});

createBubble();
hit();
runtimer();

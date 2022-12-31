const $result = document.querySelector('.result');
const $computer = document.querySelector('#computer');
const $user = document.querySelector('#user');

const $handBtns = document.querySelectorAll('.hands button');
const $scissorsBtn = document.querySelector('#scissors');
const $rockBtn = document.querySelector('#rock');
const $paperBtn = document.querySelector('#paper');
const $resetBtn = document.querySelector('#reset');

const score = { scissors: 1, rock: 2, paper: 3 };
// score[scissors] - score[paper] === -2; lose
// score[scissors] - score[rock] === -1; win
// score[rock] - score[scissors] === 1; lose
// score[rock] - score[paper] === -1; win
// score[paper] - score[rock] === 1; lose
// score[paper] - score[scissors] === 2; win

let computerHand = 'scissors';

const changeHand = () => {
  if (computerHand === 'scissors') {
    computerHand = 'rock';
  } else if (computerHand === 'rock') {
    computerHand = 'paper';
  } else {
    computerHand = 'scissors';
  }
  $computer.src = `img/${computerHand}.png`;
  $user.src = `img/${computerHand}.png`;
};

let intervalId = setInterval(changeHand, 50);

const judgeGame = (myHand) => {
  const game = score[computerHand] - score[myHand];
  if (game === -2 || game === 1) {
    return '졌습니다';
  } else if (game === -1 || game === 2) {
    return '이겼습니다';
  } else {
    return '비겼습니다';
  }
};

const clickHandBtn = (e) => {
  clearInterval(intervalId);
  const myHand = e.target.dataset.hand;
  $user.src = `img/${myHand}.png`;
  $result.innerText = judgeGame(myHand);
  $handBtns.forEach(button => button.disabled = true);
  $resetBtn.disabled = false;
};

const clickReset = (e) => {
  $handBtns.forEach(button => button.disabled = false);
  intervalId = setInterval(changeHand, 50);
  e.target.disabled = true;
}

$handBtns.forEach(button => button.addEventListener('click', clickHandBtn));
// $scissorsBtn.addEventListener('click', clickBtn);
// $rockBtn.addEventListener('click', clickBtn);
// $paperBtn.addEventListener('click', clickBtn);
$resetBtn.addEventListener('click', clickReset)

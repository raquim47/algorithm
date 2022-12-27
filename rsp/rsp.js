const $result = document.querySelector('.result');
const $computer = document.querySelector('#computer');
const $user = document.querySelector('#user');
const $scissors = document.querySelector('#scissors');
const $rock = document.querySelector('#rock');
const $paper = document.querySelector('#paper');
const score = { scissors: 1, rock: 2, paper: 3 };

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
const intervalId = setInterval(changeHand, 50);

const judgeGame = (myHand) => {
  if (computerHand === myHand) {
    console.log('hi');
    return '비겼습니다';
  } else {
    console.log('hi');
    return 'ap';
  }
};

const clickBtn = (e) => {
  clearInterval(intervalId);
  const myHand = e.target.dataset.hand;
  $user.src = `img/${myHand}.png`;
  $result.innerText = judgeGame(myHand);
};

$scissors.addEventListener('click', clickBtn);

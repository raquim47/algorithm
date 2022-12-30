const container = document.querySelector('#container');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const conWidth = container.clientWidth;
const conHeight = container.clientHeight;
canvas.width = conWidth;
canvas.height = conHeight;
const hero = {
  x: (conWidth - 40) / 2 ,
  y: conHeight - 40 - 20,
  width:40,
  height:40,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
// class Hero {
//   constructor() {
//     this.width = 40;
//     this.height = 40;
//     this.x = (conWidth - this.width) / 2;
//     this.y = conHeight - this.height - 20;
//   }
//   draw() {
//     ctx.fillStyle = 'green';
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

const moveHero = () => {
  requestAnimationFrame(moveHero);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // const hero = new Hero();
  // hero.x--;
  hero.draw();
};

moveHero();
class Enemy {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
// Enemy.draw();
// const createEnemy = () => {
//   requestAnimationFrame(createEnemy);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // hero.x++;
//   hero.draw();

//   const enemy = new Enemy();
//   enemy.draw();
// };

// createEnemy();

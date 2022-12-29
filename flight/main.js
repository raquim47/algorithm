const container = document.querySelector('#container');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const conWidth = container.clientWidth;
const conHeight = container.clientHeight;
canvas.width = conWidth;
canvas.height = conHeight;

const hero = {
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(
      (conWidth - this.width) / 2,
      conHeight - this.height - 20,
      this.width,
      this.height
    );
  },
};

class Enemy {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

}
const enemy = new Enemy();
enemy.draw();
hero.draw();

class Ball{
  constructor(height, width, x, y, xv,yv, c){
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.c = c;
  }

  draw(){
    fill(this.c);
    ellipse(this.x, this.y, this.height, this.width, this.c);
    
    
    this.x = this.x + this.xv;
    this.y = this.y + this.yv;

    if(this.x <=0 || this.x >= 475){
      this.xv = this.xv * -1;
    }

    if(this.y <=0 || this.y >= 400){
      this.yv = this.yv * -1;
    }
  }
  
}


var ball1, ball2, ball3;

function setup(){
  createCanvas(500,400);

  ball1 = new Ball(50, 50, 20, 150, 5, 5, "red");
  ball2 = new Ball(50, 50, 10, 25, 2, 1, "pink");
  ball3 = new Ball(50, 50, 5, 15, 4, 4,"purple");
}

function draw(){
  background(225);

  ball1.draw();
  ball2.draw();
  ball3.draw();
}
var x, y, xv, yv;

function setup(){
  createCanvas(500, 400);

  x = 0;
  y = 1;
  xv = 9;
  yv = 8;
}

function draw(){
  background(225);

  ellipse(x, y, 50, 50);
  fill (255,182,193)

  x = x + xv;
  y = y + yv;

  if(x <=0 || x >= 500){
    xv = xv * -1;
  }

  if(y <=0 || y >= 400){
    yv = yv * -1;
  }

}
var hr, mn, sc;
var hra, mna, sca;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  

  translate(200,200);
  rotate(-90)
  
  hr=hour();
  mn=minute();
  sc=second();
  
  sca=map(sc,0,60,0,360);
  mna=map(mn,0,60,0,360);
  hra=map(hr%12,0,12,0,360);

  push();
  rotate(sca);
  stroke("#ab1232");
  strokeWeight(6);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mna);
  stroke("#ea99aa");
  strokeWeight(6);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hra);
  stroke("#dfbe38");
  strokeWeight(6);
  line(0,0,50,0);
  pop();
  
  stroke("#bedfed");
  point(0,0);
  
  strokeWeight(9);
  noFill();

  stroke("#ab1232");
  arc(0,0,300, 300,0,sca);

  stroke("#ea99aa");
  arc(0,0,280, 280,0,mna);
  
  stroke("#dfbe38");
  arc(0,0,260, 260,0,hra);
}





















































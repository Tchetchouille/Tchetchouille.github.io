// <*<*<* PARAMETERS *>*>*>
frame_rate = 30;
sh_size = 7
sh_n = 6

console.log("TEEEEEST")

function setup() {
  createCanvas(800, 800);
  frameRate(frame_rate);
  noStroke();
}

function draw() {
  setCenter(width/2, height/2);
  background(100);
  stroke(0);
  noFill();
  w_rad = 40 + sin(frameCount / 10) * 60;
  h_rad = 40 + cos(frameCount / 10) * 60;
  //h_rad = sin(frameCount / 20) * 50 + 50;
  push();
  rotate(sin(frameCount) / 10);
  polarEllipses(6, w_rad, h_rad, 50);
  pop();
  push();
  rotate(cos(frameCount) / 10);
  polarEllipses(6, h_rad, w_rad, 50);
  pop();
  //polarEllipses(abs(sin(frameCount / 120) * 10), h_rad / 4, w_rad * 2, 120);
}
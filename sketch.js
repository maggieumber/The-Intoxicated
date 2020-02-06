let vid;
let imagesX;

function preload() {
  // images by Maggie Umber http://maggieumber.com
  // SOUND CREDITS
  // Rain Drips by DJMistressM https: //freesound.org/people/DJMistressM/sounds/476202/ This work is licensed under the Creative Commons 0 License.
  // 05725 drunken party ambience by Robinhood76 (https://freesound.org/people/Robinhood76/sounds/271447/) MU edited this into a shorter version. This work is licensed under the Attribution Noncommercial License. https://creativecommons.org/licenses/by-nc/3.0/
  // Hallway_1(people chatting in another room, voices).wav by o_ciz https://freesound.org/people/o_ciz/sounds/475647/ This work is licensed under the Creative Commons 0 License.
  // Muffled breath by the hands.wav by fuchsrodolfo https://freesound.org/people/fuchsrodolfo/sounds/391174/ This work is licensed under the Attribution Noncommercial License. https://creativecommons.org/licenses/by-nc/3.0/
  // chainedcreature2.mp3 by johnaudiotech https://freesound.org/people/johnaudiotech/sounds/342117/ This work is licensed under the Creative Commons 0 License.

  // load video
  vid = createVideo('assets/Theintoxicated.mov');
  vid.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noCursor();
}

function draw() {
  background(0);
  imagesX = windowHeight * 2;
  //pass video frame as texture
  noStroke();
  texture(vid);
  rectMode(CENTER);
  // w, h, x, y
  rect(-width / windowWidth, -height / windowHeight, imagesX, windowHeight);
}

function mousePressed() {
  vid.loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
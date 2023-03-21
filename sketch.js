// thanks to https://www.openprocessing.org/sketch/674191
// https://github.com/FreddieRa/p5.3D
//https://diwi.github.io/p5.EasyCam/

let char1;
let distance = 100;
let x;
function setup() {
  createCanvas(800, 800, WEBGL);
  background(29, 30, 47);

  //   Ignore this, fix for easyCam in p5 version 0.7
  Dw.EasyCam.prototype.apply = function (n) {
    var o = this.cam;
    (n = n || o.renderer),
      n &&
        ((this.camEYE = this.getPosition(this.camEYE)),
        (this.camLAT = this.getCenter(this.camLAT)),
        (this.camRUP = this.getUpVector(this.camRUP)),
        n._curCamera.camera(
          this.camEYE[0],
          this.camEYE[1],
          this.camEYE[2],
          this.camLAT[0],
          this.camLAT[1],
          this.camLAT[2],
          this.camRUP[0],
          this.camRUP[1],
          this.camRUP[2]
        ));
  };

  cam = createEasyCam();
  //   cam.zoom(200)
  //   cam.rotate()
  // zoom = 100
  char1 = new Word3D("txnv", 1, 9, 100, false, "Fragment Mono");
  char2 = new Word3D("txnv", 1, 9, 100, true, "Fragment Mono");
  // char3 = new Word3D("n", 1, width / 200, 30, true, "Fragment Mono");
  // char4 = new Word3D("v", 1, width / 200, 30, true, "Fragment Mono");
}

function draw() {
	
  //   ambientLight(100);
  //   directionalLight(255, 255, 255, 1, 0, 0);
  normalMaterial();
  stroke(58, 66, 153);
  strokeWeight(5);
  
  fill(198, 196, 255);
  blur();
  char2.show();
  fill(29, 30, 47);
  

  for (let i = 0; i < 100; i += 50) {
    push();
    char1.show();
    cam.zoom(i);
    pop();
	
  }
}

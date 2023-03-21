// thanks to https://www.openprocessing.org/sketch/674191
// https://github.com/FreddieRa/p5.3D
//https://diwi.github.io/p5.EasyCam/

let word;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);

  // Ignore this, fix for easyCam in p5 version 0.7
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
  cam.zoom(400);

  word = new Word3D("txnv", 1, width / 200, 50, true, "Georgia", BOLD);
}

function draw() {
  background(0);

  normalMaterial()
  word.show()
 

  for (let i = 0; i < 1; i += 10) {
    
    push();
    word.show();
    pop();
  }
}

// 29, 30, 47 dark blue
// 58,66,153 lavender
// 198,196,255 lavender
// 232, 255, 232 barely green
// 255,255,255
// 0,0,0

function setup() {
  let darkBlue = color(29, 30, 47);
  let vert = 500;
  let horz = 1500;
  createCanvas(horz, vert, WEBGL);
  cam = createEasyCam();

  background(darkBlue);
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
}

function draw() {

  let dimension = 16;
  let lavender = color(198, 196, 255);
  let darkBlue = color(29, 30, 47);
  let purple = color(58, 66, 153);
  let white = color(232, 255, 232);
  let colorA = lerpColor(purple, white, frameCount / 100);
  let colorB = lerpColor(darkBlue, lavender, frameCount / 1000);
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      for (let k = 0; k < dimension; k++) {
        let x = map(i, 0, dimension, windowWidth, windowHeight);
        let y = map(j, 0, dimension, windowWidth, windowHeight);
        let z = map(k, 0, dimension, windowWidth, windowHeight);

        //   box(x,y, z);
        point(x, y, z);
        // cylinder(100, (z / frameCount) * y);

        // triangle(x,y,z)
        // fill(colorB);
        // smooth();
        let darkBlue = color(29, 30, 47);
        // fill(darkBlue);

        stroke(colorA);
        // strokeWeight(frameCount);
        // rotateX(180)
      }
    }
  }
    // cam.zoom(frameCount);
    // cam.rotateZ(frameCount/1000);
   //cam.rotateX(frameCount/100);
//   cam.rotateY(frameCount/1000);

//   if (frameCount > 100) {
//     frameCount = 0;
//   }

}

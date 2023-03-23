let char1;
const capturer = new CCapture({
	framerate: 30,
	format: 'webm',
	name: "txnv_gif",
	quality: 100,
	verbose: true
})
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

  char1 = new Word3D("txnv", 30, 9, 80, true, "Fragment Mono");
  char2 = new Word3D("txnv", 30, 9, 80, true, "Fragment Mono");
}

function draw() {
	let darkBlue = color(29, 30, 47);
	let lavender = color(198,196,255);
	let purple = color(58, 66, 153)
	let lerp1 = lerpColor(purple, lavender, frameCount/700)
  fill(lerp1);
  rotateX(frameCount/100);
  rotateY(frameCount/100)
  for (let i = 0; i < 100; i += 50) {
    push();
    char1.show();
    char2.show();
    cam.zoom((frameCount / 60));
    stroke(darkBlue)
    
    pop();
  }
  strokeWeight(frameCount/500);
  if(frameCount>650){
	frameCount=-650
  }
  
  smooth()
  
}

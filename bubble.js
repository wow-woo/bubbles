// constructor function
function Bubble() {
  this.div = document.createElement("div");
  this.x = 300;
  this.y = 200;
  this.display = function(diameter, color) {
    this.div.style.cssText = `width:${diameter}px;height:${diameter}px;
      border-radius:50%;border:5px solid ${color};
      position:absolute;top:${this.y}px;left:${this.x}px;cursor:pointer`;
  };
  this.show = function() {
    document.body.appendChild(this.div);
  };
  this.move = function(arrange) {
    if (Math.random() <= 0.5) {
      this.x += -Math.random() * arrange;
    } else {
      this.x += Math.random() * arrange;
    }
    if (Math.random() <= 0.5) {
      this.y += -Math.random() * arrange;
    } else {
      this.y += Math.random() * arrange;
    }
  };
}

let bubbles = [];
let div = [];

function setUp(quantity) {
  for (let i = 0; i < quantity; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(1);
    bubbles[i].display(30, "#098");
    bubbles[i].show();
  }
}
function shake(moving, size, color) {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(moving);
    bubbles[i].display(size, color);
  }
}

// how many bubles do you want
// interval of updating location
setUp(100);
draw();
setInterval(() => {
  shake(2, 24, "#076");
}, 10);

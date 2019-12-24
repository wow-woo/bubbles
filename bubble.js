let bubbles = [];
let div = [];

function setUp(quantity) {
  for (let i = 0; i < quantity; i++) {
    div[i] = document.createElement("div");
    document.body.appendChild(div[i]);

    bubbles[i] = {
      x: 300,
      y: 200,
      present() {},
      display: function(diameter, color) {
        div[i].style.cssText = `width:${diameter}px;height:${diameter}px;
      border-radius:50%;border:5px solid ${color};
      position:absolute;top:${this.y}px;left:${this.x}px;cursor:pointer`;
        console.log(div[i]);
      },
      move: function(arrange) {
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
      }
    };
  }
}

// enculation above
// arrange of bubble's moving
//size and color of bubbles
function draw() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(1.7);
    bubbles[i].display(24, "#000");
  }
}

// how many bubles do you want
// interval of updating location
setUp(30);
setInterval(() => {
  draw();
}, 0.2);

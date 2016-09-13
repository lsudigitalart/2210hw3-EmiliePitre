// Emilie Pitre ©2016 hw3

var s;

function setup() {
  createCanvas(600, 600);
  s = 10;
  println("myawesomevariable =", s, "width =", width, "height =", height)

  background(10); //dark grey



  for(var x = 0; x < 1000; x = x + 10){
    for(var y = 0; y < height; y = y + 1){
        noStroke()
        fill(0, 255, 255, 15) //cyan
        rotate(0.01)
        ellipse(x, y, s, s);
        fill(255, 255, 0, 15) //yellow
        rotate(0.001)
        ellipse(x/6, y, s/2, s/2);
        fill(255, 0, 255, 25) //magenta
        rotate(0.01)
        ellipse(2*x, 2*y, s, s);
        println("the value x:", x);
    }
    println("the value y:", y);
  }

// //sun version
  //   for(var x = 0; x < 1000; x = x + 10){
  //     for(var y = 0; y < height; y = y + 1){
  //         noStroke()
  //         fill(255, 0, 255, 10)
  //         rotate(0.008)
  //         ellipse(2*x, 2*y, s, s);
  //         fill(0, 255, 255, 10)
  //         rotate(0.006)
  //         ellipse(x, y, s, s);
  //         fill(255, 255, 0, 3)
  //         rotate(0.009)
  //         ellipse(x/6, y, s, s);
  //         println("the value x:", x);
  //     }
  //     println("the value y:", y);
  //   }

// // colorblock version
//   for(var x = 0; x < 1000; x = x + 10){
//     for(var y = 0; y < height; y = y + 1){
//         noStroke()
//         fill(255, 0, 255, 10)
//         rotate(0.008)
//         ellipse(2*x, 2*y, s, s);
//         fill(0, 255, 255, 10)
//         rotate(0.007)
//         ellipse(x, y, s, s);
//         fill(255, 255, 0, 3)
//         rotate(0.006)
//         ellipse(x/6, y, s, s);
//         println("the value x:", x);
//     }
//     println("the value y:", y);
//   }

}

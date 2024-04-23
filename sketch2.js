/************
DATASET TITLE: Worldwide Box Office
DATA SOURCE: The Numbers
Link to data: https://www.the-numbers.com/box-office-records/worldwide/all-movies/cumulative/all-time
Example based on: https://editor.p5js.org/piecesofuk/sketches/rJxOzAKvm
And also: https://www.youtube.com/watch?v=urR596FsU68
5.17: Introduction to Matter.js - The Nature of Code by @shiffman
TYPE OF VISUALISATION: Falling objects visualisation
************/

// Setup the space with falling popcorns 
let Engine = Matter.Engine,
// Render = Matter.Render;
World = Matter.World,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Bodies = Matter.Bodies,
engine,
world;

// The elements in our space
let canvas;
let grounds = [];
let boxes = []; // Popcorns
let totalBoxes = 30; // Final number of popcorns

function setup() {
// Setup the canvas
canvas = createCanvas(600, 400); // Width and height of the canvas
canvas.parent('thesketch');

engine = Engine.create();
world = engine.world;
// Engine.run(engine);
// Create some boundaries for objects to bounce against: x, y, w, h
grounds.push(new Boundary(x=50, height/2, 10, height));// Left wall
grounds.push(new Boundary(width-50, height/2, 10, height));// Right wall
grounds.push(new Boundary(200, 0, width, 10));// Ceiling
grounds.push(new Boundary(200, height-50, width, 10)); // Floor
// Add the boundaries to the world
World.add(world, grounds);
} 

// How many popcorns we start with
let count = 0; 
function draw () {
    background (255, 255, 255); // Background color - White

    // Create a new popcorn every 5 frames
    // Stop after we have created totalCircles
    if (frameCount % 5 === 0 && count <= totalBoxes) {
        let size = 20, // Size of a popcorn
        r = random(-4, 4),
        x = r+width/2,
        y = 80,
        w = 20,
        h = 20
        boxes.push(new Box(x, y, w, h));
        count ++;
    }
    Engine.update(engine);

    // Display the popcorns
    for (let box of boxes) {
        box.show();
    }

    // Display the barriers (code can be commented out)
  for (let ground of grounds) {
    ground.show();
  }
}

    // Generate the popcorn
    class Circle1 {
        constructor(x, y, w, h) {
            let options = {
                friction: 0.3, // Friction of the popcorn
                restitution: 0.6 // Restitution of the popcorn
            };
            this.body = Bodies.rectangle(x, y, w, h, options);
            this.w = w;
            this.h = h;
            World.add(world, this.body);
        }

    show() {
        let pos = this.body.position; // Position of the falling popcorn
        let angle = this.body.angle; // Angle of the falling popcorn
        push();
        translate(pos.x, pos.y);
        rotate(angle); // The popcorns are rotating
        rectMode(CENTER);
        strokeWeight(1); // Stroke of the popcorn is thin
        stroke(0, 0, 102); // Color of Stroke - Dark Blue
        fill (255, 255, 188); // Color of Popcorn - Yellow
        rect(0, 0, this.d);
        pop();

    }
}
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
let circles = []; // Popcorns
let totalCircles = 30; // Final number of popcorns

function setup() {
// Setup the canvas
canvas = createCanvas(600, 400); // Width and height of the canvas
engine = Engine.create();
world = engine.world;
} 

// How many popcorns we start with
let count = 0; 
function draw () {
    background (255, 255, 255); // Background color - White

    // Create a new popcorn every 5 frames
    // Stop after we have created totalCircles
    if (frameCount % 5 === 0 && count <= totalCircles) {
        let size = 20, // Size of a popcorn
        x = random(-4, 4),
        y = random(-4, 4),
        d = 20
        circles.push(new Circle(x, y, d));
        count ++;
    }
    Engine.update(engine);

    // Display the popcorns
    for (let circle of circles) {
        circle.show();
    }

    // Generate the popcorn
    class Circle {
        constructor(x, y, d) {
            let options = {
                friction = 0.3, // Friction of the popcorn
                restitution = 0.6 // Restitution of the popcorn
            };
            this.body = Bodies.circle(x, y, d, options);
            this.d = d;
            World.add(world, this.body);
        }
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

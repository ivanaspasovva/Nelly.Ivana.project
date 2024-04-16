class Circle {
    constructor(x, y, r) {
        let options = {
            friction: 0.3, // Friction of the falling popcorn
            restitution: 0,6 // Restitution of the falling popcorn
        };
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position; // Position of the falling popcorn
        let angle = this.body.angle; // Angle of falling
        push();
        translate(pos.x, pos.y);
        rotate(angle); // The popcorns are rotating
        rectMode(CENTER);
        strokeWeight(1); // Stroke of the popcorn is thin
        stroke(0, 0, 102); // Color of Stroke - Dark Blue
        fill(255, 255, 188); // Color of Popcorn - Yellow
        ellipse(0, 0, this.r * 2); // Making an ellipse
        pop();
    }
}
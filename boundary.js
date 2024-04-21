class Boundary {
    constructor(x, y, d) {
        let options = {
            friction: 0.3, // Friction of the popcorn
            restitution: 0.6, // Restitution
            isStatic: true,
// Angle is PI / 4
        };
        this.body = Bodies.circle(x, y, d, options);
        this.d = d;
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
        stroke(0, 0, 102); // Color of the stroke - Dark Blue
        fill(255, 255, 188); // Color of popcorn - Yellow
        rect(0, 0, this.d);
        pop();
    }
}

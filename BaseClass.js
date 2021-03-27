class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.07,
            'friction':0.04,
            'density':0.001
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0,0, this.width, this.height)
        pop();
      }
}
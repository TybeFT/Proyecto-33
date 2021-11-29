class Obstacle{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction': 1,
            'density': 0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
        
      }

      display(){
        var angle = this.body.angle;
         push();
         translate(this.body.position.x, this.body.position.y);
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         fill(40, 55, 71);
         rotate(angle);
         rectMode(CENTER);
         rect(0, 0, this.width, this.height);
         pop();
      }
}
class Mango{
    constructor(x, y, width, height){
        var options = {
            isStatic : false, restitution : 0, friction : 1
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("mango.png");
    World.add(world, this.body);    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}
class Pakage {
    constructor(x,y,width,height){
        var pakage_options ={
            restitution: 2.0,
            density: 1.0,
            friction: 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,pakage_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
     
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}
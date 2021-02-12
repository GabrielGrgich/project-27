

class Bob {

    constructor(x,y,r) {
        var ball_options={
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,ball_options);
    World.add(world, this.body);
    }
    display () {
    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill(20,100,20);
    ellipse(0,0,this.r,this.r);
    pop()
    }
}

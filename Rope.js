
class chain {

    constructor (body1,body2,offsetX,offsetY) {
    this.offsetY = offsetY;
    this.offsetX = offsetX;
    var options ={
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
    this.chain = Matter.Constraint.create(options);
    // add to the chain to  the world
    World.add(world, this.chain);
    }   
    display () {
    var pointA=this.chain.bodyA.position; 
    var pointB=this.chain.bodyB.position; 
    strokeWeight(2); 
    var Anchor1X=pointA.x 
    var Anchor1Y=pointA.y 
    var Anchor2X=pointB.x+this.offsetX 
    var Anchor2Y=pointB.y+this.offsetY 
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    
    }
    
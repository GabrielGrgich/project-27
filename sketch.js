
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

var roof1;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(400,300,280,25);

	bob1 = new Bob(300,500,20);
	bob2 = new Bob(350,500,20);
	bob3 = new Bob(400,500,20);
	bob4 = new Bob(450,500,20);
	bob5 = new Bob(500,500,20);

	rope1 = new chain(bob1.body,roof1.body, -95,0);
	rope2 = new chain(bob2.body,roof1.body, -45,0);
	rope3 = new chain(bob3.body,roof1.body, 5,0);
	rope4 = new chain(bob4.body,roof1.body, 50,0);
	rope5 = new chain(bob5.body,roof1.body, 100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
roof1.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:30})
	}
}


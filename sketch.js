
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject	
var world;
var engine;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	bola=new bolinha(200,570,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  bola.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(bola.body,bola.body.position,{x:130,y:-145});

	}
}


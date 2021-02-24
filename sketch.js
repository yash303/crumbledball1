
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, distbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(55, 400, 10);
	ground=new Ground(200, 490, 1000, 20);
	dustbin1=new Dustbin(430, 480, 100, 10);
	dustbin2=new Dustbin(380, 440, 10, 80);
	dustbin3=new Dustbin(480, 440, 10, 80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:3,y:-3});
	}

}


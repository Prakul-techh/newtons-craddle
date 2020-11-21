
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,ball1,ball2;
var chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,170,300,30);
	ball1=new Ball(400,200,100,100);
	ball2=new Ball(350,200,100,100)
	chain=new Chain(roof.body,Ball.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof.display();
 ball1.display();
 ball2.display();
 chain.display();
}




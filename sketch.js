const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 100, 10);
  paper1 = new Paper(200, 100, 10);
  paper2 = new Paper(300, 100, 10);
  paper3 = new Paper(400, 100, 10);
  paper4 = new Paper(500, 100, 10);
  paper5= new Paper(600, 100, 10);
  
  

  ground = new Ground(400, 680, 800, 20);
  parti = new Ground(150, 680, 20, 500);
  parti1 = new Ground(250, 680, 20, 500);
  parti2 = new Ground(350, 680, 20, 500);
  parti3 = new Ground(450, 680, 20, 500);
  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("blue");
  
  Engine.update(engine);

  paper.display();
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  parti.display();
  parti1.display();
  parti2.display();
  parti3.display();

    

  
 
  ground.display();
 
    

  drawSprites();
 
}


  
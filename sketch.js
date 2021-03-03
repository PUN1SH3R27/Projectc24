
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	HorizontalBox1 = new GarbageCan(890,435,150,15)
	VerticalBox1 = new GarbageCan(820,400,15,100)
	VerticalBox2 = new GarbageCan(960,400,15,100)
    Ground1= new Ground(width/2,450,width,15)
	//Create the Bodies Here.
	paperObject= Bodies.circle(200,100,20,{ restitution:0.3, friction:0.5, density: 0.5})
    World.add(world,paperObject)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 // Engine.update(engine)
  HorizontalBox1.display()
  VerticalBox1.display()
  VerticalBox2.display()
  Ground1.display()
  ellipseMode(RADIUS)
  ellipse(paperObject.position.x,paperObject.position.y,20,20)
  drawSprites();
  
}



function keyPressed() {
	if (keyDown(UP_ARROW)) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100});
	   
	 }
   }
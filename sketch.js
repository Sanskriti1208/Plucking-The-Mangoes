
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage, boy, bg, bgImg, base;
var mango1, mano2, mango3, mango4, mango5;
var tree, treeImg;
var stone, box1, box2, box3, box4, box5, chain;

function preload(){
	boyImage = loadImage("boy.png");
	bgImg = loadImage("background.jpg");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1360, 690);

	bg = createSprite(500, 500, 100, 100)
	bg.addImage(bgImg);
	bg.scale = 3;

	tree = createSprite(1000, 250, 100, 50);
	tree.addImage(treeImg);
	tree.scale = 0.4;

	boy = createSprite(150, 400, 100, 100)
	boy.addImage(boyImage);
	boy.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	base = new Ground(680, 710, 1400, 500);

	mango1 = new Mango(1000, 150, 50, 50);
	mango2 = new Mango(930, 100, 50, 50);
	mango3 = new Mango(1020, 25, 50, 50);
	mango4 = new Mango(850, 170, 50, 50);
	mango5 = new Mango(1130, 150, 50, 50);

	box1 = new Ground(1000, 155, 50, 10);
	box2 = new Ground(930, 105, 50, 10);
	box3 = new Ground(1020, 30, 50, 10);
	box4 = new Ground(850, 175, 50, 10);
	box5 = new Ground(1130, 155, 50, 10);

	stone = new Stone(70, 330, 50, 50);

	Engine.run(engine);
  
	chain = new slingshot(stone.body,{x:70, y:305});
}


function draw() {
  rectMode(CENTER);
  background(0);

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

  drawSprites();
	
  base.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  stone.display();
  chain.display();
  stroke(0);
  fill(200);
  textSize(18);
  text("Hold and drag the stone by the mangoes to pluck it 🥭🥭", 470, 500);
  text("Click refresh to play once more🥭", 470, 480);
  text("Double Click the stone once for smooth playing🥭", 470, 520);
}
//text("Hold and drag the stone by the mangoes to pluck it", 680, 600);
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(lstone.body.position.x, lstone.body.position.y, lmango.body.position.x, lmango.body.position.y)
	if(distance>=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}



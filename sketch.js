const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImg, options, bgCOLOR

function preload(){
  polygonImg = loadImage("polygon.png")
  getTime()
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(400, 390, width, 10)

  //stand
  stand1 = new Ground(600, 270, 160, 10)

  //1st stack Boxes
  b1 = new Box(540, 235, 30, 40)
  b2 = new Box(570, 235, 30, 40)
  b3 = new Box(600, 235, 30, 40)
  b4 = new Box(630, 235, 30, 40)
  b5 = new Box(660, 235, 30, 40)

  //2nd stack Boxes
  b6 = new Box(570, 195, 30, 40)
  b7 = new Box(600, 195, 30, 40)
  b8 = new Box(630, 195, 30, 40)

  //3rd stack Boxes
  b9 = new Box(600, 155, 30, 40)


  polygon= Bodies.circle(60, 200, 20)
  World.add(world, polygon)

  sling = new Slingshot(this.polygon, {x:200, y:200})
}


function draw() {
  if (bgCOLOR){
  background(bgCOLOR);  }

  Engine.update(engine);
  push()
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 90, 60)
  pop()
  ground.display()
  stand1.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  sling.display()

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
}


function mouseReleased(){
  sling.fly()
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(this.polygon);
  }
}

async function getTime(){
  var apiCall = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  var jsonData = await apiCall.json();
  var dayTime = jsonData.datetime;
  var hour = dayTime.slice(11, 13);
  if(hour >= 06 && hour<= 19){
      bg = "day.png";
  }else {
      bg = "night.jpg"
  }
  bgCOLOR = loadImage(bg)
}
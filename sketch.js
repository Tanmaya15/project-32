const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score;

var ground,ground2,ground3;

var polygon;
var launcher;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block16;
var b1,b2,b3,b4,b5,b6,b7,v8,b9;

function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(480,275);
  block2 = new Block(450,275);
  block3 = new Block(420,275);
  block4 = new Block(390,275);
  block5 = new Block(360,275);
  block6 = new Block(330,275);
  block7 = new Block(300,275);
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  block16 = new Block(390,155);

  b1 = new Block(900,275);
  b2 = new Block(900,315);
  b3 = new Block(870,315);
  b4 = new Block(930,315);
  b5 = new Block(900,355);
  b6 = new Block(870,355);
  b7 = new Block(840,355);
  b8 = new Block(930,355);
  b9 = new Block(960,355);
  
  score = 0;

}

function draw() {
  background("black");

fill("white")
textSize(20);
text("Drag the hexagonal stone and release it, to launch it towards the block",20,40);
text("score:"+score,700,20)



  ground.display();
  ground2.display();
  ground3.display();

  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("magenta")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("pink")
  block13.display();
  block14.display();
  block15.display();

  fill("whiteSmoke")
  block16.display(); 

  fill(rgb(135, 205, 236))
  b5.display();
  b8.display();
  b7.display();
  b6.display();
  b9.display();
  fill("pink")
  b4.display();
  b3.display();
  b2.display();
  fill("whiteSmoke")
  b1.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  polygon.display();
  launcher.display();

fill("white")
textSize(20)
text("press space to get a second chance" ,800,500);

  
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}
async function getbackgroundimg(){ 
  var response = await fetch("http://worldclockapi.com/api/json/est/now")
   var responseJSON = await response.json(); 
   var datetime = responseJSON.currentDateTime;
    //console.log(datetime);
     var hour =datetime.slice(11,13);
     if(hour>=06 && hour<=19){
      backgroundColor("blue")
     }
     else{
      backgroundColor("yellow")
        
     }
}
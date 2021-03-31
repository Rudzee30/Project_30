const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pol, b,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14;
var ground,g;
var c;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    pol= new Poly(200,250);
    ground = new Ground(600,390,1200,20);
    g= new Ground(820,225,200,10);
    b= new Box(760,205,30,40);
    b1= new Box(790,205,30,40);
    b2= new Box(820,205,30,40);
    b3= new Box(850,205,30,40);
    b4= new Box(880,205,30,40);
    b5= new Box(805,150,30,40);
    b6= new Box(775,150,30,40);
    b7= new Box(835,150,30,40);
    b8= new Box(865,150,30,40);
    b9 = new Box(820,120,30,40);
    b10 = new Box(790,120,30,40);
    b11 = new Box(850,120,30,40);
    b12 = new Box(805,90,30,40);
    b13 = new Box(835,90,30,40);
    b14 = new Box(820,60,30,40);
    c=new Chain(pol.body,{x:200,y:250});
    


    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    g.display();
    pol.display();
    fill(124,0,124);
    b.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    fill("Red");
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    fill(255,102,153);
    b9.display();
    b10.display();
    b11.display();
    fill(247,91,0);
    b12.display();
    b13.display();
    fill("Yellow");
    b14.display();
    c.display();
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(pol.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    c.fly();
}
function keyPressed(){
    if(keyCode===32){
      Matter.Body.setPosition(pol.body,{x:200,y:250});
      c.attach(pol.body);
    }
  }

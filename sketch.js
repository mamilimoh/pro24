const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var square;
var box;
var ball;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    square = new Square(10,100);
    box=new Box(810,260,300,PI/2);
    ball=new Ball(200,200,30);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    square.display();
    box.display();
    ball.display();
   // ellipse(200,200,10,10);

    
 
}
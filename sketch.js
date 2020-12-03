const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,bob1,bob2,bob3,bob4,bob5; 
var chain2,chain3,chain4,chain5,chain6;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(570,100,330,20);

    bob1 = new bob(450,320,30,30);
    bob2 = new bob(510,320,30,30);
    bob3 = new bob(570,320,30,30);
    bob4 = new bob(630,320,30,30);
    bob5 = new bob(690,320,30,30);

    chain2 = new chain(bob1.body,ground1.body,-120);
    chain3 = new chain(bob2.body,ground1.body,-60);
    chain4 = new chain(bob3.body,ground1.body,0);
    chain5 = new chain(bob4.body,ground1.body,60);
    chain6 = new chain(bob5.body,ground1.body,120);
}

function draw(){
    background(0);
    text(mouseX+","+mouseY,mouseX,mouseY);
    Engine.update(engine);

    ground1.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-50});

    }
}
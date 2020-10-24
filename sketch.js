//Namespace
const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;// own PE
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var ground_options={
  isStatic:true
}

//once
ground=Bodies.rectangle(200,390,40,10,ground_options);
  World.add(world,ground);


  console.log(ground);
  
  ;
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
//in each framecount
 // drawSprites();


}
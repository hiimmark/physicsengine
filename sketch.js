const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var gameengine, gameworld

function setup() {
  createCanvas(400,400);
  gameengine = Engine.create();
  gameworld = gameengine.world;
  var goptions={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,goptions)
  World.add(gameworld,ground)
  var boptions={
    restitution:1
  }
  ball = Bodies.circle(200,100,20,boptions);
  World.add(gameworld,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(gameengine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

}
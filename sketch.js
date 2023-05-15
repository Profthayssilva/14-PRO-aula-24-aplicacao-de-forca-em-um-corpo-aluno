
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

//  criar uma variável de ângulo e defini-la com um valor aleatório de 60.



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  //  Crie um botão na tela e anexe essas funções ao botão
  




  // e altere os valores do retângulo para 100,300,100,20

 
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  // Adicione o código para girar o objeto dentro da função draw()

  // Gire o solo adicionando as funções push() e pop() dentro da função draw():

  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
 
  
  // Aumente o ângulo da rotação em 0.1 graus dentro da função draw
 

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

// Crie uma função chamada vForce(), pois esta função aplicará força na direção
// vertical.
function vForce()
{
  // Use a função em Matter.js para aplicar força ao corpo.

  
}
  
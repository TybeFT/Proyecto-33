const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var gameState = "play";

var star1,star2,star3;
var bg 

//carga imagenes
function preload(){
  /*
  No se por qué no cargan estas imagenes :(

  star1 = loadImage("star.png");
  star2 = loadImage("star.png");
  star3 = loadImage("star.png");
  */

  //Pero esta si
  bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1800,900);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  //suelo y pared
  suelo = new Ground(900,85,1600,10);
  pared = new Ground(880,440,900,500);
  
  //pared derecha 1
  pared3 = new Ground(1690,170,250,10);

  //pared vertical 1 derecha
  pared5 = new Ground(1420,390,30,600);

  //Parte izquierda{

  //pared vertical 1 Izquierda
  pared4 = new Ground(350,190,30,200);

  //pared izquierda 1
  pared2 = new Ground(120,170,250,10);

  //suelo izquierda 2
  pared6 = new Ground(260,285,150,10);
  pared7 = new Ground(240,190,10,30); 
  pared8 = new Ground(130,360,100,10);
  pared9 = new Ground(250,335,10,90);
  pared10 = new Ground(160,565,10,400);
  pared11 = new Ground(40,430,90,10);
  pared12 = new Ground(110,510,90,10);
  pared13 = new Ground(40,590,90,10);
  pared14 = new Ground(110,670,90,10);


  ultimo_suelo = new Ground(900,900,1800,5);

  //obstaculos falsos:
  obs4 = new Ground(175,350,10,10);
  obs4_0 = new Ground(175,340,10,10);
  obs4_1 = new Ground(175,330,10,10);
  obs4_2 = new Ground(175,320,10,10);
  obs4_3 = new Ground(175,310,10,10);

  //}

  //divide las pelotas
  pared_division = new Ground(900,40,10,80);

  obs1 = new Obstacle(750,40,10,10,0);
  obs1_0 = new Obstacle(750,30,10,10,0);
  obs1_1 = new Obstacle(750,20,10,10,0);
  obs1_2 = new Obstacle(750,10,10,10,0);
  obs1_3 = new Obstacle(750,00,10,10,0);
  obs1_4 = new Obstacle(750,-10,10,10,0);
  obs1_5 = new Obstacle(750,-20,10,10,0);
  obs1_6 = new Obstacle(750,-30,10,10,0);

  obs2 = new Obstacle(1050,40,10,10,0);
  obs2_0 = new Obstacle(1050,30,10,10,0);
  obs2_1 = new Obstacle(1050,20,10,10,0);
  obs2_2 = new Obstacle(1050,10,10,10,0);
  obs2_3 = new Obstacle(1050,0,10,10,0);
  obs2_4 = new Obstacle(1050,-10,10,10,0);
  obs2_5 = new Obstacle(1050,-20,10,10,0);
  obs2_6 = new Obstacle(1050,-30,10,10,0);

  //obstaculos suelo flotante{

  //Izquierda:
  obs3 = new Obstacle(85,350,10,10,0);
  obs3_0 = new Obstacle(85,340,10,10,0);
  obs3_1 = new Obstacle(85,330,10,10,0);
  obs3_2 = new Obstacle(85,320,10,10,0);
  obs3_3 = new Obstacle(85,310,10,10,0);

  obsT1 = new Obstacle(80,380,10,40,0);
  obsT2 = new Obstacle(80,500,10,30,0);
  obsT3 = new Obstacle(80,600,10,30,0);

  //}

  //Parte derecha{

  pared15 = new Ground(1600,400,150,10);
  pared16 = new Ground(1500,490,50,10);
  pared17 = new Ground(1700,490,50,10);
  pared18 = new Ground(1600,590,100,10);
  pared19 = new Ground(1800,475,80,600);

  obsT4 = new Obstacle(1100,60,30,30,0);
  obsT4 = new Obstacle(1100,60,30,30,0);
  obsT5 = new Obstacle(1600,90,30,30,0);


  //Jugadores
  player = new Player(820,50,30);
  player2 = new Player(990,50,30);

  /*
  Quería agregar un arma para poder quitar los escombros pero 
  Por alguna razon cuando la muestro todo el juego se empieza a trabar
  Mucho y lo vuelve injugable
  */
  //arma = new Gun(0,0);
  
  stroke("white");
  //Crea las estrellas (decoracion)
  star1 = createSprite(800,150,30,30);
  star1.velocityX = -2;
  star2 = createSprite(900,150,30,30);
  star3 = createSprite(1000,150,30,30);
  star3.velocityX = 3;

  //Bloques invisibles para el rebote de las estrellas
  reboteL = createSprite(600,150,80,30);
  reboteR = createSprite(1200,150,80,30);

  Engine.run(engine);
}

function draw() {
  background(bg); 

  Engine.update(engine);

  /*
  Tampoco funciona esto :(
  Era para que cuando el jugador 2 pisara esa pared esta se cayera

  if(player2.y >= 400){
    Matter.Body.isStatic(pared15, false);
  }

  */

  //Los rebotes de las estrellas
  star1.bounceOff(reboteL);
  star1.bounceOff(reboteR);
  star1.bounce(star2);
  star1.bounce(star3);

  star2.bounceOff(reboteL);
  star2.bounceOff(reboteR);
  star2.bounce(star1);
  star2.bounce(star3);

  star3.bounceOff(reboteL);
  star3.bounceOff(reboteR);
  star3.bounce(star1);
  star3.bounce(star2);

  //Vuelve invisibles a las estrellas
  reboteL.visible = false;
  reboteR.visible = false;

  //Muestra todos los objetos del mundo fisico
  suelo.display();
  pared.display();
  pared2.display();
  pared3.display();
  pared4.display();
  pared5.display();
  pared6.display();
  pared7.display();
  pared8.display();
  pared9.display(),
  pared10.display();
  pared11.display();
  pared12.display();
  pared13.display();
  pared14.display();
  pared15.display();
  pared16.display();
  pared17.display();
  pared18.display();
  pared19.display();

  pared_division.display();

  obs1.display();

  obs1_0.display();

  obs1_1.display();

  obs1_2.display();

  obs1_3.display();

  obs1_4.display();

  obs1_5.display();

  obs1_6.display();

  

  obs2.display();
  obs2_0.display();
  obs2_1.display();
  obs2_2.display();
  obs2_3.display();
  obs2_4.display();
  obs2_5.display();
  obs2_6.display();

  obs3.display(),
  obs3_0.display();
  obs3_1.display();
  obs3_2.display();
  obs3_3.display();

  obs4.display();
  obs4_0.display();
  obs4_1.display();
  obs4_2.display();
  obs4_3.display();

  obsT1.display();
  obsT2.display();
  obsT3.display();
  obsT4.display();
  obsT5.display();

  //arma.display();
  player.display();
  player2.display();
  //Funcion que no funciona T-T
  player.win();
  //Controles jugadores
  player.controls();
  player2.controlsp2();
  //Funcion que no funciona :(
  player2.win();

  //Muestra el suelo de hasta abajo
  ultimo_suelo.display();

  //todos los textos con instrucciones
  textSize(25);
  stroke(0);
  fill("white");
  text("Tu Misión Es Juntar De Nuevo A Las Pelotas Rojas",620,300);
  stroke("white");
  fill("black");
  textSize(19);
  text("Soy Red y puedes contrarme con A-D",400,30);
  text("Soy Ball y puedes contrarme con las flechas izquierda y derecha",1150,30);

  //Para mostrar las estrellas 
  drawSprites();
}
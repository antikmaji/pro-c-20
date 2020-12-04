var car,wall;
var speed,weight;

function setup() {
 createCanvas(800,800);

 car=createSprite(100,400,50,50);
 wall=createSprite(750,400,60,350);

speed=random(55,90);
weight=random(400,1500);

car.velocityX=speed;

}

function draw() {

 background("black"); 

 if(wall.x-car.x <(car.width/2+wall.width/2)){

    car.velocityX=0;

    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
        car.shapeColor="red";
    }

    if(deformation<180 && deformation>100){
        car.shapeColor="yellow";
    }

    if(deformation<100){
        car.shapeColor="green";
    }


 }

 
 drawSprites();

}
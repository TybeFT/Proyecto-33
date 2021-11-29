class Player{
    constructor(x,y,r){
        var options = {
            'restitution': 0.2,
            'friction': 1.1,
            'density': 10,
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("ball.png");
        this.color=color(random(0, 255), random(0, 255), random(0, 255));

        World.add(world, this.body);
    }

    //Controles jugador 1s
    controls(){
        if(keyCode === 65){
            //A
            Matter.Body.translate(this.body,{x: - 10,y: 0});
        }else{
            Matter.Body.translate(this.body,{x: 0,y: 0});
        }
        
        if (keyCode === 68){
            //D
            Matter.Body.translate(this.body,{x: + 10,y: 0});
        }else{
            Matter.Body.translate(this.body,{x: 0,y: 0});
        }

        if(keyCode === 87){
            //W
            Matter.Body.translate(this.body,{x: 0,y: - 40});
        }else{
            Matter.Body.translate(this.body,{x: 0,y: 0});
        }
    }

    //Controles jugador 2
    controlsp2(){
        if(keyCode === 37){
            //Flecha Izquierda
            Matter.Body.translate(this.body,{x: - 10,y: 0});
        }else{
            Matter.Body.translate(this.body,{x: 0,y: 0});
        }
        
        if (keyCode === 39){
            //Flecha Izquierda
            Matter.Body.translate(this.body,{x: + 10,y: 0});
        }else{
            Matter.Body.translate(this.body,{x: 0,y: 0});
        }

        if(keyCode === 38){
            //Flecha Arriba
            Matter.Body.translate(this.body,{x: 0,y: - 40});
        }else{
            Matter.Body.translate(this.body,{x: 0,y: 0});
        }
    }

    //Esta funcion se supone que muestre un texto que ganas
    //No se por que no funciona :(
    win(){
        if(this.body.position.y < 800){
            text("Lo has logrado, estamos agradecidos",100.700);
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(this.color);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}
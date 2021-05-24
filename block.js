class Block  {
    constructor(x,y)  {
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.Visiblity = 255;

        World.add(world,this.body)

    }
    display()  {
        //console.log(this.body.speed);
        if(this.body.speed < 4){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

  }
   else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
}
score(){
    if(this.visibility<0&&this.visibility>=-105){
        score++
    }
}
}
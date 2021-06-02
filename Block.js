class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      this.Visiblity=225;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
     // image(this.image, this.body.position.x, this.body.position.y, 30, 0);
      console.log(this.body.speed)
      if(this.body.speed < 5){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 30, 0);
       }
       else{
        
       
        World.remove(world, this.body);
         push();
        this.Visiblity = this.Visiblity - 10;
        tint(255,this.Visiblity);
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 30, 0);     
        pop();
       }
       
    }
}
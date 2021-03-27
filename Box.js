class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
  }
  display(){
    fill("green")
    if(this.body.speed>3){
      World.remove(world, this.body)
      push()
      this.visibility=this.visibility-5;
      tint(255, this.visibility);
      pop()
    }else {
      super.display()
    }

  }
}

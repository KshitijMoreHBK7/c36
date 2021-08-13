class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.remove=false;
 
  }
display()
{
 
if((this.body.speed)<2.5)
{super.display();
}else
{
  if(this.remove===false){
World.remove(world,this.body) 

push()
    tint (255,this.visibility);
    this.visibility=this.visibility-5
    image(this.image,this.body.position.x,this.body.position.y,50,50)

    pop()
score=score+50;
this.remove=true;
  }
}}
};



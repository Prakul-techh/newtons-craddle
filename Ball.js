class Ball {
    constructor(x, y, radius) {
      var options = {
         isStatic:false
      }
      this.body = Bodies.circle(x, y,radius, options);
     // this.width = width;
      //this.height = height;
      this.radius=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
    push();

  
    ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.radius);
      pop();
    }
  };
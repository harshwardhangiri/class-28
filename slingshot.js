class Slingshot{
    constructor(bodyA,pointB){
        var options = {
             bodyA: bodyA, 
             //bodyB: bodyB, 
             pointB:pointB,
             stiffness: 0.04, 
             length: 10
            } 
            this.bodyA = bodyA;
            this.pointB = pointB;
        this.Slingshot = Constraint.create(options); 
            World.add(world, this.Slingshot);


    }

    fly() {
        this.Slingshot.bodyA = null; //means 000000000

    }

    display() {

        if (this.Slingshot.bodyA) {
        var pointA = this.Slingshot.bodyA.position; 
        var pointB = this.pointB;
         strokeWeight(4); 
         line(pointA.x, pointA.y, pointB.x, pointB.y);
        }



    }
}



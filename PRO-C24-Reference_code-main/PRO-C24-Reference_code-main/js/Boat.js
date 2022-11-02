class Boat {
    constructor(x,y,width,height,boatPOS) {
        var options = {
            restitution:0.5,
            friction:1,
            density:1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage('./assets/boat.png')
        this.boatPosition = boatPOS
        World.add(world,this.body)
    }
    display() {
        var POS = this.body.position
        push()
        translate(POS.x,POS.y)
        imageMode(CENTER)
        image(this.image,0,this.boatPosition,this.width,this.height)
        pop()
    }
}
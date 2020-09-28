class Wall{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display(){
        var wall = createSprite(this.x, this.y, this.width, this.height);
    }
}
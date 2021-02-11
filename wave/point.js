export class Point{
    constructor(index,x,y){
        this.x =x;
        this.y =y;
        this.fixedy =y;
        this.speed = 0.05;
        this.cur = index;
        this.max=Math.random()*100 +50;
    }

    update(){
        this.cur += this.speed;
        this.y = this.fixedy+(Math.sin(this.cur)*this.max);
    }
}
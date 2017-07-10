export class Point {

    constructor(public x:number, public y:number) {}

    public distance(other: Point = new Point(0,0))
    {            
        let dx = this.x - other.x;
        let dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

}

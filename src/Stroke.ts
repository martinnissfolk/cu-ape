import {Shape} from "./Shape"
import {Point} from "./Point"

export class Stroke extends Shape {
    protected _points: Array<Point> = [];

    constructor() { super();}

    public addPoint(p: Point){
        if(p !== null) {
            this._points.push(p);
        }
    }

    public draw(context: CanvasRenderingContext2D) {
        if(this._points !== null)
        {
            let previousPoint: Point = null;

            for (let p of this._points)
            {
                if(previousPoint != null)
                {
                    context.beginPath();
                    context.moveTo(previousPoint.x, previousPoint.y);
                    context.lineTo(p.x, p.y);
                    context.stroke();
                }
                previousPoint = p;
            }            
        }
    }

    public getPoints() {
        return this._points;
    }
    
}

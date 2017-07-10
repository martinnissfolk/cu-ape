import {TwoEndsShape} from "./TwoEndsShape"
import {Point} from "./Point"

export class LineShape extends TwoEndsShape {
    
    public draw(context: CanvasRenderingContext2D)
    {
        context.beginPath();
        context.moveTo(this._startPoint.x, this._startPoint.y);
        context.lineTo(this._endPoint.x, this._endPoint.y);
        context.stroke();
    }

    public drawOutline(context: CanvasRenderingContext2D, startPoint: Point, endPoint: Point)
    {
        context.beginPath();
        context.moveTo(startPoint.x, startPoint.y);
        context.lineTo(endPoint.x, endPoint.y);
        context.stroke();
    }

}

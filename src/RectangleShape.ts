import {TwoEndsShape} from "./TwoEndsShape"
import {Point} from "./Point"

export class RectangleShape extends TwoEndsShape {
    
    public draw(context: CanvasRenderingContext2D)
    {
        context.beginPath();
        context.moveTo(this._startPoint.x, this._startPoint.y);
        context.strokeRect(this._startPoint.x, this._startPoint.y, this._endPoint.x - this._startPoint.x , this._endPoint.y - this._startPoint.y);
    }

    public drawOutline(context: CanvasRenderingContext2D, startPoint: Point, endPoint: Point)
    {
        context.beginPath();
        context.moveTo(startPoint.x, startPoint.y);
        context.strokeRect(startPoint.x, startPoint.y, endPoint.x - startPoint.x , endPoint.y - startPoint.y);
    }

}

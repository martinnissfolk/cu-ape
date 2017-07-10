import {TwoEndsShape} from "./TwoEndsShape"
import {Point} from "./Point"

export class RectangleShape extends TwoEndsShape {
    
    public draw(context: CanvasRenderingContext2D)
    {
        var width = this._endPoint.x - this._startPoint.x;
        var height = this._endPoint.y - this._startPoint.y;

        context.beginPath();
        context.moveTo(this._startPoint.x, this._startPoint.y);
        context.strokeRect(this._startPoint.x, this._startPoint.y, width , height);
    }

    public drawOutline(context: CanvasRenderingContext2D, startPoint: Point, endPoint: Point)
    {
        var width = endPoint.x - startPoint.x;
        var height = endPoint.y - startPoint.y;

        context.beginPath();
        context.moveTo(startPoint.x, startPoint.y);
        context.strokeRect(startPoint.x, startPoint.y, width, height);
    }

}

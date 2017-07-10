import {TwoEndsShape} from "./TwoEndsShape"
import {Point} from "./Point"

export class OvalShape extends TwoEndsShape {
    
    public draw(context: CanvasRenderingContext2D)
    {            
        var radiusX = Math.abs(this._endPoint.x - this._startPoint.x)/2;
        var radiusY = Math.abs(this._endPoint.y - this._startPoint.y)/2;
        var radius = radiusX > radiusY ? radiusX : radiusY;
        var centerX =  this._startPoint.x + radius;
        var centerY = this._startPoint.y + radius;
        
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.stroke();
    }

    public drawOutline(context: CanvasRenderingContext2D, startPoint: Point, endPoint: Point)
    {
        var radiusX = Math.abs(endPoint.x - startPoint.x)/2;
        var radiusY = Math.abs(endPoint.y - startPoint.y)/2;
        var radius = radiusX > radiusY ? radiusX : radiusY;
        var centerX =  startPoint.x + radius;
        var centerY = startPoint.y + radius;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.stroke();
    }

}

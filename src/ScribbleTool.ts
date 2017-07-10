import {AbstractTool} from "./AbstractTool"
import {Point} from "./Point"
import {Stroke} from "./Stroke"
import {ScribbleCanvas} from "./ScribbleCanvas"


export class ScribbleTool extends AbstractTool {
    
    protected _currStroke: Stroke = null; 

    constructor(canvas: ScribbleCanvas, name: string)
    {
        super(canvas, name);
    }

    public startShape(p:Point)
    {
        this._currStroke = new Stroke();
        this._currStroke.addPoint(p);
        this.canvas._context.beginPath();
        this.canvas._context.moveTo(p.x, p.y);
    }

    public addPointToShape(p: Point)
    {
        if(this._currStroke !== null)
        {
            this._currStroke.addPoint(p);
            this.canvas._context.lineTo(p.x, p.y);
            this.canvas._context.stroke();
        }
    }

    public endShape(p: Point) 
    {
        if(this._currStroke !== null)
        {
            this._currStroke.addPoint(p);
            this.canvas.addShape(this._currStroke);
            this._currStroke = null;
        }
    }
}

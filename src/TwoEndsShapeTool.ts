
import {Point} from "./Point"
import {Stroke} from "./Stroke"
import {AbstractTool} from "./AbstractTool"
import {TwoEndsShape} from "./TwoEndsShape"
import {ScribbleCanvas} from "./ScribbleCanvas"
import * as _ from "lodash";

export class TwoEndsShapeTool extends AbstractTool {
    
    protected _currStroke: Stroke; 
    private startPoint: Point;
    protected shape: TwoEndsShape;

    constructor(canvas: ScribbleCanvas, name: string, shape: TwoEndsShape)
    {
        super(canvas, name);
        this.shape = shape;
    }

    public startShape(p:Point)
    {        
        if(this.shape !== null)
        {
            this.canvas.mouseButtonDown = true;
            this.startPoint = p;
            this.shape.drawOutline(this.canvas._contextTemp, this.startPoint, this.startPoint);
        }        
    }

    public addPointToShape(p: Point){
        if(this.shape !== null && this.canvas.mouseButtonDown)
        {            
            this.shape.drawOutline(this.canvas._contextTemp, this.startPoint, p);
        }       
    }

    public endShape(p: Point) {
        if(this.shape !== null)
        {
            let newShape = _.clone(this.shape); 
            newShape.setEnds(this.startPoint, p);
            this.canvas.addShape(newShape);
        }
        this.canvas.paint();        
    }
}

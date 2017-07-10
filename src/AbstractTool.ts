import {ITool} from "./ITool"
import {ScribbleCanvas} from "./ScribbleCanvas"
import {Point} from "./Point"

export abstract class AbstractTool implements ITool  {
    protected name: string;
    protected canvas: ScribbleCanvas;
    public getName()
    {   
        return this.name;
    }

    constructor(canvas: ScribbleCanvas, name: string)
    {
        this.canvas = canvas;
        this.name = name;
    }

    public abstract startShape(p: Point) : void;
    public abstract addPointToShape(p: Point) : void;
    public abstract endShape(p: Point) : void;

}

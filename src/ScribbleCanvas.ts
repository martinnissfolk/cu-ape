import {ITool} from "./ITool"
import {ToolKit} from "./ToolKit"
import {Point} from "./Point"
import {Shape} from "./Shape"
import {ScribbleTool} from "./ScribbleTool"
import {TwoEndsShape} from "./TwoEndsShape"
import {TwoEndsShapeTool} from "./TwoEndsShapeTool"
import {LineShape} from "./LineShape"
import {RectangleShape} from "./RectangleShape"
import {OvalShape} from "./OvalShape"

export class ScribbleCanvas {

    public canvas: HTMLCanvasElement;
    public canvasTemp: HTMLCanvasElement;
    public _context: CanvasRenderingContext2D;
    public _contextTemp: CanvasRenderingContext2D;
    public _btn1: HTMLButtonElement;
    private _selectTool: HTMLOptionElement;
    public mouseButtonDown = false;
    public tool: ITool;
    private scribbleTool: ScribbleTool;
    private twoEndsTool: TwoEndsShapeTool;
    private toolkit: ToolKit;

    private _mouseDownHandler: (e: MouseEvent) => void;
    private _mouseUpHandler: (e: MouseEvent) => void;
    private _mouseMoveHandler: (e: MouseEvent) => void;
    private _mouseOutHandler: (e: MouseEvent) => void;
    
    private _pointerPosition: Point;
    
    public point: Point

    private _btn1ClickHandler: (e: MouseEvent) => void;
    private _selectToolChangeHandler: (e: MouseEvent) => void;
    
    protected currentPosition: Point;
    protected shapes: Array<Shape> = [];
    

    constructor(document: HTMLDocument)
    {            
        this._btn1 = <HTMLButtonElement> document.getElementById("btn1");
        this._selectTool = <HTMLOptionElement> document.getElementById("selectTool");
        this.canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
        this.canvas.style.cursor = 'crosshair';
        this._context = this.canvas.getContext("2d");

        this._pointerPosition = new Point(0, 0);
       
        this.canvasTemp = <HTMLCanvasElement> document.getElementById("imageTemp");
        this._contextTemp = this.canvasTemp.getContext('2d');

        this._mouseDownHandler = (e: MouseEvent) => { this.mouseDown(e); };
        this._mouseUpHandler = (e: MouseEvent) => { this.mouseUp(e); };
        this._mouseMoveHandler = (e: MouseEvent) => { this.mouseMove(e); };
        this._mouseOutHandler = (e: MouseEvent) => { this.mouseOut(e); };          

        this.canvas.addEventListener("mousedown", this._mouseDownHandler, false);
        this.canvas.addEventListener("mouseup", this._mouseUpHandler, false);
        this.canvas.addEventListener("mousemove", this._mouseMoveHandler, false);
        this.canvas.addEventListener("mouseout", this._mouseOutHandler, false);

        this._btn1ClickHandler = (e: MouseEvent)=> {this.btn1Click(e); };
        this._selectToolChangeHandler = (e: MouseEvent)=> {this.selectToolChange(e); };
                    
        this.initTools();            

        this._btn1.addEventListener("click", this._btn1ClickHandler, false);
        this._selectTool.addEventListener("change", this._selectToolChangeHandler, false);
    }

    public dispose()
    {
        if (this.canvas !== null)
        {
            this.canvas.removeEventListener("mousedown", this._mouseDownHandler);
            this.canvas.removeEventListener("mouseup", this._mouseUpHandler);
            this.canvas.removeEventListener("mousemove", this._mouseMoveHandler);  
            this.canvas.removeEventListener("mouseout", this._mouseOutHandler);       
            this.canvas = null;
            this._context = null;
        }
    }

    private initTools(){
        this.toolkit = new ToolKit();
        this.toolkit.AddTool(new ScribbleTool(this, "ScribbleTool"))
        this.toolkit.AddTool(new TwoEndsShapeTool(this, "Line", new LineShape()));
        this.toolkit.AddTool(new TwoEndsShapeTool(this, "Rect", new RectangleShape()));
        this.toolkit.AddTool(new TwoEndsShapeTool(this, "Oval", new OvalShape()));
        this.setTool(this.toolkit.getTool(0));
    }

    private setTool(tool: ITool) {
        this.tool = tool;
        console.log("Tool was set to: " + this.tool.getName()); 
    }        

    public addShape(shape: Shape)
    {
        if(this.shapes != null)
        {
            this.shapes.push(shape);
        }
    }
    
    public paint()
    {            
        this._contextTemp.clearRect(0, 0, this.canvasTemp.width, this.canvasTemp.height);

        if(this.shapes !== null)
        {
            for (let shape of this.shapes)
            {
                shape.draw(this._context);
            }
        }
    }
    
    private mouseDown(e: MouseEvent)
    {
        e.preventDefault();
        this.updateMousePosition(e);
        this.tool.startShape(this._pointerPosition);
        this.mouseButtonDown = true;
        this.point = this._pointerPosition;
    }

    private mouseUp(e: MouseEvent)
    {
        e.preventDefault();
        this.updateMousePosition(e);
        
        if (this.mouseButtonDown) {
            this.tool.endShape(this._pointerPosition);
            this.mouseButtonDown = false;
            this.mouseMove(e);                                
        }
    }

    private mouseMove(e: MouseEvent)
    {   
        e.preventDefault(); 
        this.updateMousePosition(e);

        if (this.mouseButtonDown) {
            this._contextTemp.clearRect(0, 0, this.canvasTemp.width, this.canvasTemp.height);
            this.tool.addPointToShape(this._pointerPosition);  
            this.point = this._pointerPosition; 
        }     
    }

    private mouseOut(e: MouseEvent)
    {   
        e.preventDefault(); 
        this.mouseButtonDown = false;
    }

    private updateMousePosition(e: MouseEvent)
    {            
        this._pointerPosition = new Point(e.pageX, e.pageY);
        var node: HTMLElement = this.canvas;
        while (node !== null)
        {
            this._pointerPosition.x -= node.offsetLeft;
            this._pointerPosition.y -= node.offsetTop;
            node = <HTMLElement> node.offsetParent;
        }
    }

    private btn1Click(e: MouseEvent)
    {
        this.shapes.pop();
        this._context.clearRect(0, 0, this.canvasTemp.width, this.canvasTemp.height);
        this.paint();
    }

    private selectToolChange(event : any)
    {
        let selectedIndex = event.target.selectedIndex;
        this.tool = this.toolkit.getTool(selectedIndex)
        console.log("Tool was set to: " + this.tool.getName());
    }        
}


import {Shape} from "./Shape"
import {Point} from "./Point"

export abstract class TwoEndsShape extends Shape {
    protected _startPoint: Point;
    protected _endPoint: Point;
    
    constructor() { super();}

    public setEnds(startPoint: Point, endPoint: Point)
    {
        this._startPoint = startPoint;
        this._endPoint = endPoint;
    }

    public setEnd1(p: Point)
    {
        this._startPoint = p;
    }

    public setEnd2(p: Point)
    {
        this._endPoint = p;
    }
    
    public get getEnd1()
    {
        return this._startPoint;
    }

    public get getEnd2()
    {
        return this._endPoint;
    }

    public abstract draw(context: CanvasRenderingContext2D) : void;

    public abstract drawOutline(context: CanvasRenderingContext2D, p1: Point, p2: Point) : void;

}

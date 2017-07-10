import {ITool} from "./ITool"

export class ToolKit { 
    protected tools: Array<ITool> = [];
    protected selectedTool: ITool = null;

    constructor(){}

    public AddTool(tool: ITool){
        this.tools.push(tool);
    }     

    public get ToolCount()
    {
        return this.tools.length;
    }  

    public getTool(i: number)
    {
        if(i >= 0 && i < this.tools.length)
        {
            return this.tools[i];
        }
        return null;
    }

    public set SelectedTool(tool: ITool)
    {
        this.selectedTool = tool;
    }

    public get SelectedTool()
    {
        return this.selectedTool;
    }
} 

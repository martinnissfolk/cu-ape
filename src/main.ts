import {ScribbleCanvas} from "./ScribbleCanvas"

export class Startup {

    public static main() {
        var app = new ScribbleCanvas(document);
    }
    
}

window.onload = function(){
    Startup.main();
};

import {Point} from "./Point"

export interface ITool { 
    getName: () => string, 
    startShape: (p: Point) => void, 
    addPointToShape: (p: Point) => void,
    endShape: (p: Point) => void
} 

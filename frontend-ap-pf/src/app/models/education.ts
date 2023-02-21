export class Education {
    id? : number;
    edTitle : string;
    edContent : string;
    
    constructor(edTitle:string, edContent:string){
        this.edTitle = edTitle;
        this.edContent = edContent;
    }
}
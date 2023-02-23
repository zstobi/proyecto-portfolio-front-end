export class Projects {
    id?:number;
    prjsTitle:string;
    prjsContent:string;
    link?:string

    constructor(prjsTitle:string,prjsContent:string,link:string){
        this.prjsTitle = prjsTitle;
        this.prjsContent = prjsContent;
        this.link = link; 
    }
}
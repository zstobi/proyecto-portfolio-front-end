export class Techs {
    id?:number;
    tsTitle:string;
    percentage:number;

    constructor (tsTitle:string,percentage:number){
        this.tsTitle = tsTitle;
        this.percentage = percentage;
    }
}
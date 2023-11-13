export class Item 
{
    /* ATRIBUTES */
    private id:number;
    private icon:string;
    private name:string;
    private effect:string;

    /* BUILDER */

    constructor(id:number,icon:string,name:string,effect:string)
    {
        this.id=id;
        this.icon=icon;
        this.name=name;
        this.effect=effect;
    }

    /* METHODS */
    public getID():number
    {
        return this.id;
    }
    public getIcon():string
    {
        return this.icon;
    }

    public getName():string
    {
        return this.name;
    }
    public getEffect():string
    {
        return this.effect;
    }
}

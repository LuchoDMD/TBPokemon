export class Ability 
{
    private name:string;
    private effect:string;
    private hidden:boolean;

    constructor(name:string,effect:string,hidden:boolean)
    {
        this.name=name;
        this.effect=effect;
        this.hidden=hidden;
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



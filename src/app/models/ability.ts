export class Ability 
{

    /* ATRIBUTES */

    private name:string;
    private effect:string;
    private hidden:boolean;

    /* BUILDERS */

    constructor(name:string,effect:string,hidden:boolean)
    {
        this.name=name;
        this.effect=effect;
        this.hidden=hidden;
    }

    /* GETTERS */

    public getName():string
    {
        return this.name;
    }
    public getEffect():string
    {
        return this.effect;
    }
}



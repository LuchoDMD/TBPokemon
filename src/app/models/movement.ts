export class Movement 
{

    /** ATRIBUTES **/
    private id:number;
    private name:string;   /* nombre del movimiento */
    private eType:string;  /* typo elemental: fuego, agua, planta, etc*/
    private cType:string;  /* categoria: fisico, special y */
    private power:number;  /* ataqueBase */
    private accur:number;  /* Precision */
    private pp:number;     /* cantidad de usos */
    private effect:string; /* descripcion o effecto del movimiento*/

    /** BUILDER **/

    constructor(id:number,name:string,eType:string,cType:string,power:number,accur:number,pp:number,effect:string)
    {
        this.id=id;
        this.name=name;
        this.eType=eType;
        this.cType=cType;
        this.power=power;
        this.accur=accur;
        this.pp=pp;
        this.effect=effect;
    }

    /** GETTERS **/
    public getID():number
    {
        return this.id;
    }
    public getName():string
    {
        return this.name;
    }
    public getEtype():string
    {
        return this.eType;
    }
    public getPower():number
    {
        return this.power;
    }
    public getAccur():number
    {
        return this.accur;
    }
    public getPP():number
    {
        return this.pp;
    }
    public getEffect():string
    {
        return this.effect;
    }
}

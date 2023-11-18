import { Ability } from "./ability";

export class Pokemon 
{

    /* ATRIBUTES */

    id:number;
    specie:string;
    nick:string;
    level:number;
    genre:string;     /* m:macho, f:hembra, n:none */
    ability:Ability;
    private stats:Stats;

    /* BUILDER */

    constructor()
    {
        this.id=0;
        this.specie="";
        this.nick="";
        this.level=0;
        this.genre="";
        this.ability=new Ability();
        this.stats= new Stats();
    }

    public setStats(atk:number,def:number,satk:number,sdef:number,spd:number):void
    {
        this.stats.atk=atk;
        this.stats.def=def;
        this.stats.satk=satk;
        this.stats.sdef=sdef;
        this.stats.spd=spd;
    }
}

/* 
    Posiblemente tener una clase DATA que almacene los datos  
    basicos del pokemon, las estadisticas y ultimo la informacion 
    como imagenes si las hay. 
*/

export class Stats
{
    /** ATRIBUTES **/

    atk:number;  /* ATAQUE*/
    def:number;  /* DEFENSA*/
    satk:number; /* ATAQUE ESPECIAL */
    sdef:number; /* DEFENSA ESPECIAL*/
    spd:number;  /* VELOCIDAD*/

    /** BUILDER **/

    constructor()
    {
        this.atk=0;
        this.def=0;
        this.satk=0;
        this.sdef=0;
        this.spd=0;
    }
}


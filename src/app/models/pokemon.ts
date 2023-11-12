import { Ability } from "./ability";

export class Pokemon 
{

    /* ATRIBUTES */

    private specie:string;
    private nick:string;
    private level:number;
    private genre:string;     /* m:macho, f:hembra, n:none */
    private ability:Ability;
    private stats:Stats;

    /* BUILDER */

    constructor(specie:string,nick:string,level:number,genre:string,ability:Ability)
    {
        this.specie=specie;
        this.nick=nick;
        this.level=level;
        this.genre=genre;
        this.ability=ability;
        this.stats= new Stats();
    }

    /* SETTERS */

    public setNick(nick:string):void
    {
        this.nick=nick;
    }

    public setStats(atk:number,def:number,satk:number,sdef:number,spd:number):void
    {
        this.stats.setAtk(atk);
        this.stats.setDef(def);
        this.stats.setSatk(satk);
        this.stats.setSdef(sdef);
        this.stats.setSpd(spd);
    }
    
    /* GETTERS */

    public getSpecie():string
    {
        return this.specie
    }

    public getNick():string
    {
        return this.nick;
    }

    public getLevel():number
    {
        return this.level;
    }

    public getAbility():string
    {
        return this.ability.getName();
    }
}

export class Stats
{
    /** ATRIBUTES **/

    private atk:number;  /* ATAQUE*/
    private def:number;  /* DEFENSA*/
    private satk:number; /* ATAQUE ESPECIAL */
    private sdef:number; /* DEFENSA ESPECIAL*/
    private spd:number;  /* VELOCIDAD*/

    /** BUILDER **/

    constructor()
    {
        this.atk=0;
        this.def=0;
        this.satk=0;
        this.sdef=0;
        this.spd=0;
    }

    public setAtk(atk:number)
    {
        this.atk=atk;
    }
    public setDef(def:number)
    {
        this.def=def;
        
    }
    public setSatk(satk:number)
    {
        this.satk=satk;
    }
    public setSdef(sdef:number)
    {
        this.sdef=sdef;
        
    }
    public setSpd(spd:number)
    {
        this.spd=spd;
    }
    
}


import { Pokemon } from "./pokemon";

export class Team 
{
    private name:string;
    private pokemons:Array<Pokemon>;
    limit:number=6;
    constructor()
    {
        this.name=" ";
        this.pokemons=new Array<Pokemon>();
    }

    /* SETTERS */

    public setName(name:string):void
    {
        this.name=name;
    }

    public setPokemon(poke:Pokemon):void
    {
        if((poke)&&this.pokemons.length<6)
        {
            this.pokemons.push(poke);
        }
    }

    /** GETTERS **/

    public getName():string
    {
        return this.name;
    }

    public getAllTeam(): Array<Pokemon>
    {
        return this.pokemons;
    }
}

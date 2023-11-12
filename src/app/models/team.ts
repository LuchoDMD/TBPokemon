import { Pokemon } from "./pokemon";


export class Team 
{
    private pokemons:Array<Pokemon>;
    limit:number=6;
    constructor()
    {
        this.pokemons=new Array();
    }

    public setPokemon(poke:Pokemon):void
    {
        if((poke)&&this.pokemons.length<6)
        {
            this.pokemons.push(poke);
        }
    }
}

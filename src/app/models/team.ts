import { Pokemon } from "./pokemon";

export class Team 
{
    name:string;
    pokemons:Array<Pokemon>;
    limit:number=6;

    constructor()
    {
        this.name=" ";
        this.pokemons=new Array<Pokemon>();
    }
}

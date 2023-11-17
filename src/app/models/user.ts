import { Team } from "./team";

export class User 
{
    /** ATRIBUTES **/

    lName:string;
    fName:string;
    nName:string;
    email:string;
    passw:string;
    equipos:Array<Team>;

    /** BUILDER **/

    constructor()
    {
        this.lName=" ";
        this.fName=" ";
        this.nName=" ";
        this.email=" ";
        this.passw=" ";
        this.equipos=new Array<Team>();
    }

}

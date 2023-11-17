import { Team } from "./team";

export class User 
{
    /** ATRIBUTES **/

    private lName:string;
    private fName:string;
    private nName:string;
    private email:string;
    private passw:string;
    private equipos:Array<Team>;

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

    /** SETTERS **/

    public setLName(lName:string):void
    {
        this.lName=lName;
    }
    public setFName(fName:string):void
    {
        this.fName=fName;
    }
    public setNName(nName:string):void
    {
        this.nName=nName;
    }
    public setEmail(email:string):void
    {
        this.email=email;
    }
    public setPassw(passw:string):void
    {
        this.passw=passw;
    }
    public setTeam(equipo:Team)
    {
        if(this.equipos.length<6)
        {
            this.equipos.push(equipo);
        }
    }

    /** GETTERS **/

    public getLName():string
    {
        return this.lName;
    }
    public getFName():string
    {
        return this.fName;
    }
    public getNname():string
    {
        return this.nName;
    }
    public getEmail():string
    {
        return this.email;
    }
    public getPassw():string
    {
        return this.passw;
    }

}

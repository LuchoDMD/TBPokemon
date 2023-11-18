import { Team } from "./team";

export class User 
{
    /** ATRIBUTES **/

    private lName:string;
    private fName:string;
    private nName:string;
    private email:string;
    private passw:string;
    private teams:Array<Team>;

    /** BUILDER **/

    constructor()
    {
        this.lName=" ";
        this.fName=" ";
        this.nName=" ";
        this.email=" ";
        this.passw=" ";
        this.teams=new Array<Team>();
    }

    /* SETTERS */
    public set_lName(lname:string)
    {
        this.lName=lname;
    }
    public set_fName(fname:string)
    {
        this.fName=fname;
    }
    public set_nName(nname:string)
    {
        this.nName=nname;
    }
    public set_email(email:string)
    {
        this.email=email;
    }
    public set_passw(passw:string)
    {
        this.passw=passw;
    }

    /* GETTERS */
    public get_lName()
    {
        return this.lName;
    }
    public get_fName():string
    {
        return this.fName;
    }
    public get_nName():string
    {
        return this.nName;
    }
    public get_email():string
    {
        return this.email;
    }
    public get_pass():string
    {
        return this.passw;
    }
}

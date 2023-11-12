export class User 
{
    /** ATRIBUTES **/

    private lName:string;
    private fName:string;
    private nName:string;
    private email:string;
    private passw:string;
    ///private equipos:string; arreglo de 6 equipos.

    /** BUILDER **/

    constructor(lName:string,fName:string,nName:string,email:string,passw:string)
    {
        this.lName=lName;
        this.fName=fName;
        this.nName=nName;
        this.email=email;
        this.passw=passw;
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

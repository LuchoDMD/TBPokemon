export class Movement 
{

    /** ATRIBUTES **/
    id:number;
    name:string;   /* nombre del movimiento */
    eType:string;  /* typo elemental: fuego, agua, planta, etc*/
    cType:string;  /* categoria: fisico, special y */
    power:number;  /* ataqueBase */
    accur:number;  /* Precision */
    pp:number;     /* cantidad de usos */
    effect:string; /* descripcion o effecto del movimiento*/

    /** BUILDER **/

    constructor()
    {
        this.id=-1;
        this.name="";
        this.eType="";
        this.cType="";
        this.power=0;
        this.accur=0;
        this.pp=0;
        this.effect="";
    }
}

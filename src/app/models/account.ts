export class Account
{
    id:string;
    name:string;
    lvl:number;
    exp:number;
    constructor
    (
        id:string,
        name:string,
        lvl:number,
        exp:number
    )
    {
        this.id=id;
        this.name=name;
        this.lvl=lvl;
        this.exp=exp;
    }
}
export class Genre
{
    id:string;
    name:string;
    color:string;
    isColorDark:boolean;
    effectiveAgainst:string[];
    ineffectiveAgainst:string[];

    constructor
    (
        id:string,
        name:string,
        color:string,
        isColorDark:boolean,
        effectiveAgainst:string[],
        ineffectiveAgainst:string[],
    )
    {
        this.id=id;
        this.name=name;
        this.color=color;
        this.isColorDark=isColorDark;
        this.effectiveAgainst=effectiveAgainst;
        this.ineffectiveAgainst=ineffectiveAgainst;
    }
}
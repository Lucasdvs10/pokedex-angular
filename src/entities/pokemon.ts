export class Pokemon {
    constructor(private name: string, private id : number, private typesList : string[], private spritePath : string, private height:number, private weight:number) {
    }

    public GetNome() : string{
        return this.name
    }

    public GetId() : number{
        return this.id
    }

    public GetTypesList() : string[]{
        return this.typesList
    }

    public GetSpritePath() : string{
        return this.spritePath
    }

    public GetHeight() :number{
        return this.height
    }


    public GetWeight() :number{
        return this.weight
    }

}
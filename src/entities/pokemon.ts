export class Pokemon {
    constructor(private name: string, private id : number, private typesList : string[], private spritePath : string) {
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

}
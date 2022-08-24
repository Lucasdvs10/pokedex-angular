class Pokemon {
    constructor(private name: string, private id : number, private typesList : string[]) {
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

}
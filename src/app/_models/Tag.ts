export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
    static readonly REACT = new Tag('Raect', 'blue');
    static readonly UNITY = new Tag('Unity', 'black');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}

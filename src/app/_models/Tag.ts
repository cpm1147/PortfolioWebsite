export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'pink');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly CSHARP = new Tag('C#', 'purple');
    static readonly JAVA = new Tag('Java', 'lightblue');
    static readonly NODEJS = new Tag('Node.JS', 'lightgreen');
    static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly UNITY = new Tag('Unity', 'black');  
    static readonly EXPRESS = new Tag('Express', 'rgb(176, 179, 0)');
    static readonly MONGODB = new Tag('MongoDB', 'green');
    static readonly FIREBASE = new Tag('Firebase', 'red');
    static readonly NESTJS = new Tag('Nest.JS', 'lightred');
    static readonly HTML = new Tag('HTML', 'lightorange');
    static readonly CSS = new Tag('CSS', 'blue');
    

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}

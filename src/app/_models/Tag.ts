export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'rgb(179, 0, 84)');
    static readonly TYPESCRIPT = new Tag('Typescript', '#3178C6');
    static readonly CSHARP = new Tag('C#', 'rgb(134, 23, 209)');
    static readonly JAVA = new Tag('Java', 'rgb(226, 173, 15)');
    static readonly NODEJS = new Tag('Node.JS', 'rgb(1, 108, 17)');
    static readonly JAVASCRIPT = new Tag('Javascript', 'rgb(201, 215, 5)');
    static readonly REACT = new Tag('React', 'rgb(8, 165, 232)');
    static readonly UNITY = new Tag('Unity', 'black');  
    static readonly EXPRESS = new Tag('Express', 'rgb(176, 179, 0)');
    static readonly MONGODB = new Tag('MongoDB', 'rgb(7, 216, 83)');
    static readonly FIREBASE = new Tag('Firebase', 'rgb(207, 49, 1)');
    static readonly NESTJS = new Tag('Nest.JS', 'rgb(196, 5, 81)');
    static readonly HTML = new Tag('HTML', 'rgb(215, 86, 0)');
    static readonly CSS = new Tag('CSS', 'rgb(25, 113, 244)');
    static readonly NEXTJS = new Tag('Next.js', 'rgb(0, 0, 0)');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#6f42c1 ');
    static readonly TAILWIND = new Tag('Tailwind CSS', '#06b6d4');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}

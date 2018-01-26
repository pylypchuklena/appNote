export class NoteModel{
    id: number;
    name:string;
    content:string;
    date:Date;
    comments:Array<NoteComment>;
}
export class NoteComment{
    author:string;
    content:string;
    createData:Date;
}

export class TestState
{
    index:number;
}
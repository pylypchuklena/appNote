export enum SourceTypes{
    LOCALSTORAGE=0,
    FIREBASE=1
}

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

export class AppState{
    storageType:SourceTypes;
    selectedNote:NoteModel;
    noteList:Array<NoteModel>;
}
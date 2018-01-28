export enum SourceTypes{
    LOCALSTORAGE=0,
    FIREBASE=1
}

export class NoteModel{
    id: number;
    name:string;
    content:string;
    date:Date;
    isSelected:boolean;
    comments:Array<NoteComment>;
}
export class NoteComment{
    author:string;
    content:string;
    createData:Date;
}

export class AppState{
    storageType:SourceTypes;
    noteList:Array<NoteModel>;
}
export enum SourceTypes{
    LOCALSTORAGE=0,
    FIREBASE=1
}

export class NoteModel{
    id: string;
    name:string;
    content:string;
    date:Date;
    isSelected:boolean;
}
export class NoteComment{
    id:string;
    noteId:string;
    author:string;
    content:string;
    createDate:Date;
}

export class AppState{
    storageType:SourceTypes;
    notes:Array<NoteModel>;
    comments: Array<NoteComment>;
}

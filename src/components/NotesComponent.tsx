import * as React from "react";
import  NoteContent  from '../components/NoteContent'; 
import NoteCommentsPanel from './NoteCommentsPanel';
import {NoteModel  } from "../types/NoteModel";

export interface INoteContainer {
    note: NoteModel;
    updateNote: (item:NoteModel)=>void;
}

export function NotesComponent({note,updateNote}:INoteContainer){
    return(
        <div className="note--container">
            <NoteContent selectedItem={note} updateNote={updateNote}/>
            <div className="note__comments comments">
                <NoteCommentsPanel/>
            </div>
        </div>
    )
}
export default NotesComponent;
import * as React from "react";
// import * from "./node_modules/bootstrap-css";
import  ListNotes  from './ListNotes';
import  NoteContent  from './NoteContent'; 
import NoteCommentsPanel from './NoteCommentsPanel';
import {NoteModel  } from "../types/NoteModel";
import NoteNewComment from "./NoteNewComment";

export interface INoteContainer {
    list: Array<NoteModel>;
}

function NotesContainer(){
    return(
        <div className="note--container">
            <NoteContent/>
            <div className="note__comments comments">
                <NoteCommentsPanel/>
                <NoteNewComment />
            </div>
        </div>
    )
}
export default NotesContainer;
import * as React from "react";
import  NoteContent  from './NoteContent'; 
import NoteCommentsPanel from './NoteCommentsPanel';
import {NoteModel  } from "../types/NoteModel";
import NoteNewComment from "./NoteNewComment";

export interface INoteContainer {
    list: Array<NoteModel>;
}

export function NotesContainer(){
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
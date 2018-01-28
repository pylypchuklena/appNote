import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';
import NoteCommentsItem from "./NoteCommentsItem";

export function NoteCommentsPanel(){
    return(
        <div className="comments__panel">
            <div className="comments__header">Comments : </div>
            <ul className="comment__list">
                <NoteCommentsItem />
            </ul>
            <NotesNew>
        </div>
    )
}
export default NoteCommentsPanel;
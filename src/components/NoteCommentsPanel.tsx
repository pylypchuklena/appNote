import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';
import NoteCommentsItem from "./NoteCommentsItem";
import NoteNewComment from "./NoteNewComment";

export function NoteCommentsPanel(){
    return(
        <div className="comments__panel">
            <div className="comments__header">Comments : </div>
            <ul className="comment__list">
                <NoteCommentsItem />
            </ul>
            <NoteNewComment/>
        </div>
    )
}
export default NoteCommentsPanel;
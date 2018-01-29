import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';
import NoteCommentsItem from "./NoteCommentsItem";
import NoteNewComment from "./NoteNewComment";

export interface IListCommentProps{
    commentList: NoteComment[];
    onAddComment?: (comment:NoteComment) => void
}

export function NoteCommentsPanel({commentList,onAddComment}:IListCommentProps){
    const  commentItems = commentList.map((item)=>
    <NoteCommentsItem key={item.id} item={item}/> ) 
console.log("comments",commentItems);
    return(
        <div className="comments__panel">
            <div className="comments__header">Comments : </div>
            <ul className="comment__list">
                {commentItems}
            </ul>
            <NoteNewComment onAddComment={onAddComment}/>
        </div>
    )
}
export default NoteCommentsPanel;
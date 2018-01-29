import * as React from "react";
import  NoteContent  from '../components/NoteContent'; 
import NoteCommentsPanel from './NoteCommentsPanel';
import {NoteModel, NoteComment  } from "../types/NoteModel";

export interface INewComment{
    noteId:number;
    comment:NoteComment;
}

export interface INoteContainer {
    note: NoteModel;
    updateNote: (item:NoteModel)=>void;
    addComment:(value:INewComment)=>void;
    onAddNote:()=>void;
}

export function NotesComponent({note,updateNote,addComment, onAddNote}:INoteContainer){
    console.log("note",note);

    if(note)
            {
        return(
        
        <div className="note--container">
        
            <NoteContent selectedItem={note} updateNote={updateNote}/>
            <div className="note__comments comments">
                <NoteCommentsPanel commentList={note.comments}  onAddComment={(e)=>{  addComment({noteId:note.id,comment:e})}}/>
            </div>
        </div>
        )
    }
        else
        return (
            <div className="note--container"> <div>Create Your Notes</div> 
                 <div  className="nav-link btn btn-link" onClick={()=>{onAddNote()}}>Add Note</div>
            </div>
        )
    
}
export default NotesComponent;
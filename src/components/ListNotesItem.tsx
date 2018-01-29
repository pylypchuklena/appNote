import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';

interface itemProps{
    item:NoteModel;
    onSelectionChanged:(id:number)=>void;
    deleteNote:(id:number)=>void;
}

export function ListNotesItem({item,onSelectionChanged,deleteNote}:itemProps){
    return(
        <li className={"notes-list__item flex-column " + (item.isSelected ? 'active' : '')} onClick={()=>{onSelectionChanged(item.id)}}>
            <div className="notes-list__item__header">
                <span className="comment__author">{item.name}-{item.id}</span>
                <button className="nav-link btn btn-link" onClick={(e)=>{deleteNote(item.id); e.preventDefault();e.stopPropagation();}}>X</button>
            </div>
            <div className="notes-list__item__footer flex-row">
                <span className="comment__date comment__date--list">{item.date.toUTCString()}</span>
                <span className="comment__content comment__content--list ">{item.content}</span>
            </div>
        </li>    
    )
}
export default ListNotesItem;
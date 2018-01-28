import * as React from "react";
import  ListNotesItem  from './ListNotesItem';
import {INoteContainer} from './NotesContainer';
import { NoteModel } from "../types/NoteModel";

export interface IListProps{
    notesList:NoteModel[];
    onSelectionChanged: (id:number)=>void;
    deleteNote:(id:number)=>void;
}

export function ListNotes({notesList,onSelectionChanged,deleteNote}:IListProps){
    const listItems = notesList.map((item) =>
    <ListNotesItem key={item.id.toString()} item={item} onSelectionChanged={onSelectionChanged} deleteNote={deleteNote}/>);
    return(
        <ul className="notes-list">
           {listItems}
        </ul>
      
    );
}
export default ListNotes;
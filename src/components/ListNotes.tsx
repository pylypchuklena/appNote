import * as React from "react";
import  ListNotesItem  from './ListNotesItem';
import {INoteContainer} from './NotesContainer';
import { NoteModel } from "../types/NoteModel";

export interface IListProps{
    notesList:NoteModel[];
    selectedNote:NoteModel;
    onSelectionChanged: (id:number)=>void;
}

export function ListNotes({notesList,selectedNote,onSelectionChanged}:IListProps){
console.log(notesList);
console.log("ksdjnfa");
    const listItems = notesList.map((item) =>
    <ListNotesItem key={item.id.toString()} />);
    return(
        <ul className="notes-list">
           {listItems}
        </ul>
    );
}
export default ListNotes;
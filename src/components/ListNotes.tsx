import * as React from "react";
import  ListNotesItem  from './ListNotesItem';
import {INoteContainer} from './NotesContainer';

//add interface here for props. it whould have list of items. See ListNotesContainer.
//Then each ListNotesItem should call a method wher it was clicked like a button

export function ListNotes(){
    return(
        <ul className="notes-list">
            <ListNotesItem/>
        </ul>
    );
}
export default ListNotes;
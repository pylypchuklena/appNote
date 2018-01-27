import * as React from "react";
import  ListNotesItem  from './ListNotesItem';
import {INoteContainer} from './NotesContainer';



export function ListNotes(){
    return(
        <ul className="notes-list">
            <ListNotesItem/>
        </ul>
    );
}
export default ListNotes;
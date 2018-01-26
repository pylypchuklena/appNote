import * as React from "react";
// import * from "./node_modules/bootstrap-css";
import { ListNotes } from './ListNotes';
import { NoteContent } from './NoteContent'; 
import {NoteModel  } from "../models/NoteModel";

export interface INoteContainer {
    list: Array<NoteModel>;
}

export class NotesContainer extends React.Component<INoteContainer,{}>{
    /**
     *
     */
    constructor(props:INoteContainer) {
        super(props);
        console.log(props);
    }
    
    render(){
        var list = this.props.list;
        return(
            <div className="notesContainer">
                <ListNotes list ={list}/>
                <NoteContent selectedItem={list[0]} />
            </div>
        )
    }
}
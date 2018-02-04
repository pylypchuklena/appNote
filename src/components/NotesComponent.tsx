import * as React from "react";
import NoteContent from '../components/NoteContent';
import NoteCommentsPanel from './NoteCommentsPanel';
import { NoteModel, NoteComment } from "../types/NoteModel";


export interface INoteContainer {
    note: NoteModel;
    updateNote: (item: NoteModel) => void;
    onAddNote: () => void;
}

export class NotesComponent extends React.Component<INoteContainer>{
    /**
     *
     */
    constructor(props: INoteContainer) {
        super(props);

    }
    render() {
        if (this.props.note) {
            return (
                <div className="note--container">
                    <NoteContent selectedItem={this.props.note} 
                    updateNote={this.props.updateNote} />
                </div>
            )
        }
        else
            return (
                <div className="note--EmptyContainer"
                 onClick={() => { this.props.onAddNote() }}>
                    <span className="fa fa-pencil"></span>
                </div>
            )
    }
}
export default NotesComponent;
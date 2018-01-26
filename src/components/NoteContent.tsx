import * as React from 'react'
import { NoteModel } from '../types/NoteModel';

export class NoteContent extends React.Component<{selectedItem:NoteModel},{}>{
    constructor(props:{selectedItem:NoteModel}){
        super(props)
    }
    render(){
        var selectedItem = this.props.selectedItem;
        return (
            <div>
                <h2>Note content</h2>
                <div>
                    <label htmlFor="noteTitle">Title</label>
                    <input type="text" id="noteTitle" value={selectedItem.name}/>
                </div>
                <div>
                    <label htmlFor="noteContent">Content</label>
                    <input type="text" id="noteContent"  value={selectedItem.content}/>
                </div>
                <div>
                    <label htmlFor="noteTitle">File</label>
                    <input type="file" id="noteFile"/>
                </div>
            </div>
        )
    }
}


 
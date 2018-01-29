import * as React from 'react'
import { NoteModel } from '../types/NoteModel';

export interface itemProps{
    selectedItem:NoteModel;
    updateNote: (item:NoteModel)=>void;
}

export function NoteContent({selectedItem,updateNote}:itemProps){
    if(selectedItem===undefined){
        selectedItem = {content:'',id:0, name:'', date: new Date(), isSelected:false, comments:[]};
    }

    function onNameChange(){

    }

    return(
        <div className="note">
            <div className="note__header">
            <div className="note__title">
                <textarea placeholder="Title">{selectedItem.name}</textarea>
            </div>
            

                {/* <div  suppressContentEditableWarning={true} contentEditable={true} className="note__title"></div> */}
                <span className="note__date" >{selectedItem.date.toUTCString()}</span>
                <p>{selectedItem.id}</p>
            </div>
            <div suppressContentEditableWarning={true} contentEditable={true}  className="note__content">
                {selectedItem.content}
            </div>
            <div className="form-group note__addFile">
                <label htmlFor="noteFile">
                    <span className="btn btn-primary">Add file </span> 
                </label>
                <input type="file" id="noteFile" />
            </div>
            <button onClick={()=>{updateNote(selectedItem)}}>Save</button>
        </div>
    )
}
 
export default NoteContent;
import * as React from 'react'
import { NoteModel } from '../types/NoteModel';

export interface itemProps{
    selectedItem:NoteModel;
    updateNote: (item:NoteModel)=>void;
}

export function NoteContent({selectedItem,updateNote}:itemProps){

    function handleChange(e:any){
        selectedItem.content = e.currentTarget.innerText;
    }
    function handleChangeTitle(e:any){
        selectedItem.name = e.currentTarget.innerText;
    }

    if(selectedItem){
    return(
        <div className="note">
            <div className="note__header">
                <div  suppressContentEditableWarning={true} contentEditable={true} className="note__title" onKeyUp={(e)=>{handleChangeTitle(e)}}>{selectedItem.name}</div>
                <span className="note__date" >{selectedItem.date.toUTCString()}</span>
                <p>{selectedItem.id}</p>
            </div>
            <div suppressContentEditableWarning={true} contentEditable={true} onKeyUp={(e)=>{handleChange(e)}} className="note__content">
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
    )}
    else return (<div>as</div>)
}
 
export default NoteContent;
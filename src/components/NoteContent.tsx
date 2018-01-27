import * as React from 'react'
import { NoteModel } from '../types/NoteModel';

export function NoteContent(){
    return(
        <div className="note">
            <div className="note__header">
                <div  suppressContentEditableWarning={true} contentEditable={true} className="note__title">Note title</div>
                <span className="note__date" >21.01.2018</span>
            </div>
            <div suppressContentEditableWarning={true} contentEditable={true}  className="note__content">
                content Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut necessitatibus minima, harum nostrum odit numquam repudiandae ducimus ut dolorum consequatur sunt officia voluptates porro rerum amet ab? Pariatur, vitae unde?
            </div>
            <div className="form-group note__addFile">
                <label htmlFor="noteFile">
                    <span className="btn btn-primary">Add file </span> 
                </label>
                <input type="file" id="noteFile" />
            </div>
        </div>
    )
}
 
export default NoteContent;
import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';

function NoteNewComment(){
    return(
        <div className="newComment newComent-wrap">
            <h2 className="newComment__header">Add comment</h2>
            <form action="" className="newComment__form">
                <div className="newComment__inputs">
                    <div className="form-group">
                        <label htmlFor="newCommentName"  className="sr-only">Author:</label>
                        <input required id="newCommentName" type="text" placeholder="Helen Pylyp" className="form-control newComment__input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newCommentContent" className="sr-only">Content:</label>
                        <textarea required id="newCommentContent" placeholder="Your comment" className="form-control newComment__input"></textarea>
                    </div>
                
                </div>
                <button type="submit" className="btn btn-sm btn-primary  mr-sm-2">Add comment</button>
            </form>
        </div>
    )
}
export default NoteNewComment;
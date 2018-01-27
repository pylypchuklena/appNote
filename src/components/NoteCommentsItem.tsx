import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';

export function NoteCommentsItem(){
    return(
        <li className="comment flex-row">
            <div className="col-left flex-col">
                <span className="comment__author">Helen Pylyp</span>
                <span className="comment__date">11.01.2018</span>
            </div>
            <div className="col-rigth flex-grow">
                <span className="comment__content">Comment lorem   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsa in saepe nesciunt beatae aut, nemo adipisci dignissimos nam consequatur a aspernatur voluptate porro, mollitia quidem vitae harum dolorum rerum! content</span>
            </div>
        </li>
    )
}
export default NoteCommentsItem;
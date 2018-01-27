import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';

function ListNotesItem(){
    return(
        <li className="notes-list__item active flex-column">
            <div className="notes-list__item__header">
                <span className="comment__author">Helen Pylyp</span>
            </div>
            <div className="notes-list__item__footer flex-row">
                <span className="comment__date comment__date--list">11.01.2018</span>
                <span className="comment__content comment__content--list ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos asperiores perferendis doloribus, et cumque quisquam numquam earum officia quod? Quis id inventore iste molestiae quia sint odit nemo recusandae!</span>
            </div>
        </li>    
    )
}
export default ListNotesItem;
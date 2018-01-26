import * as React from "react";
import {NoteModel, NoteComment} from '../models/NoteModel';

export class ListItem extends React.Component<{item:NoteModel},{}>{
    /**
     *
     */
    constructor(props:{item:NoteModel}) {
        super(props);
        
    }
    
    render(){
        var item = this.props.item;
        return(
            <li>
                <span>{item.name}  </span>
                <span>{item.date.getFullYear()}</span>
            </li>
        )
    }
}
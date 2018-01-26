import * as React from "react";
import { ListItem } from './ListItem';
import {INoteContainer} from './NotesContainer';
export class ListNotes extends React.Component<INoteContainer,{}>{

    constructor(props: INoteContainer){
        super(props)
    }
    
    render(){
        const row = [];
        var list = this.props.list;
        for( var i = 0; i<list.length; i++){
            row.push(<ListItem item={list[i]} key={list[i].id}/>);
        }
        return(
            <div>
                <h2>ListNotes</h2>
                <ul> {row}
                </ul>
            </div>
        )
    }
}
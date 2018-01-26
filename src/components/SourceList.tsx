import * as React from "react"
import { NotesContainer } from './NotesContainer'; 
import { NoteModel } from '../types/NoteModel';

const Notes: Array<NoteModel> = [
    {
        id: 1,
        name: "note 1",
        content: "some content in this note",
        date: new Date(),
        comments: [
            {
                author: "Lena P",
                content: "my cool comment",
                createData: new Date()
            },
            {
                author: "Andriy P",
                content: "my comment is better",
                createData: new Date()
            }
        ]
    },
    {
        id: 2,
        name: "note 2",
        content: "some content in this note, this is my secont note in this app",
        date: new Date(),
        comments: [
            {
                author: "Lena P",
                content: "my cool comment in note 2",
                createData: new Date()
            },
            {
                author: "Andriy P",
                content: "my comment is better in this note 2",
                createData: new Date()
            }
        ]
    }
];

export class SourceList extends React.Component<{},{}>{
    render(){
        return(
            <div className="panel">
                <ul>
                    <li><a>localStorage</a></li>
                    <li><a>Firebase</a></li>
                </ul>
               <NotesContainer list={Notes}/>
            </div>
            
        )
    }
}
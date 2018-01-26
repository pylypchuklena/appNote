import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Hello } from "./components/Hello";

import { NoteModel } from './models/NoteModel';
import { OptionPanel } from './components/OptionPanel';
import { SourceList } from './components/SourceList';




var grid={
    "display": "flex",
    'flex-direction': "row",
    "justify-content": "space-between"
}

class App extends React.Component<{},{}>{
    render(){
        return (
            <div>
                <OptionPanel/>
                <SourceList/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);


 
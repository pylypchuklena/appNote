import * as React from 'react';
import * as ReactDom from 'react-dom';


import { NoteModel } from './models/NoteModel';
import { OptionPanel } from './components/OptionPanel';
import { SourceList } from './components/SourceList';




class App extends React.Component<{},{}>{
    render(){
        return (
            <div>
                {/* <OptionPanel/>
                <SourceList/> */}
            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);


 
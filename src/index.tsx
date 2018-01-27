import * as React from 'react';
import * as ReactDom from 'react-dom';


import  OptionPanel  from './components/OptionPanel';
import  SourceList  from './components/SourceList';
import ListNotes from './components/ListNotes';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NoteModel, TestState, AppState , SourceTypes} from './types/NoteModel';
import {StoreState} from './types/index';
import { noteReduser} from './reducers/index';
import Hello from './containers/Hello';
import NotesContainer from './components/NotesContainer';


// import '../index.css';

function defaultState():AppState {
    
    return {
        noteList:new Array<NoteModel>(),
        storageType:SourceTypes.LOCALSTORAGE,
        selectedNote:null
    };
}

const store = createStore<AppState>(noteReduser,defaultState())

ReactDom.render(
    <Provider store={store}>
    
        
        <div className="container">
            <Hello/>
            <OptionPanel/>
            <div className="row">
                <div className="col-2 no-pdng-r">
                    <SourceList/>
                </div>
                <div className="col-3 no-pdng">
                    <ListNotes/>
                </div>
                <div className="col-7 no-pdng-l">
                    <NotesContainer/>
                </div>
            </div>
        </div>
    </Provider>,
    document.getElementById("app") as HTMLElement
);


 
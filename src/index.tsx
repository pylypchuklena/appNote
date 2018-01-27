import * as React from 'react';
import * as ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NoteModel, AppState , SourceTypes} from './types/NoteModel';
import { noteReduser} from './reducers/index';
import AppContainer from './components/AppContainer';


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
        <AppContainer/>
    </Provider>,
    document.getElementById("app") as HTMLElement
);


 
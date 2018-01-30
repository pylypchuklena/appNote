import * as React from 'react';
import * as ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NoteModel, AppState , SourceTypes, NoteComment} from './types/NoteModel';
import { appReduser} from './reducers/index';
import AppContainer from './components/AppContainer';


// import '../index.css';

function defaultState():AppState {
    
    return {
        notes:new Array<NoteModel>(),
        comments:new Array<NoteComment>(),
        storageType:SourceTypes.LOCALSTORAGE
    };
}

const store = createStore<AppState>(appReduser,defaultState())

ReactDom.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("app") as HTMLElement
);


 
import * as React from 'react';
import * as ReactDom from 'react-dom';


import { OptionPanel } from './components/OptionPanel';
import { SourceList } from './components/SourceList';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NoteModel } from './types/NoteModel';
import {StoreState} from './types/index';
import {enthusiasm} from './reducers/index';
import Hello from './containers/Hello';

// import '../index.css';

const store = createStore<StoreState>(enthusiasm,{
    enthusiasmLevel: 2,
    languageName: 'TypeScript'
})


ReactDom.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById("app") as HTMLElement
);


 
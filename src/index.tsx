import * as React from 'react';
import * as ReactDom from 'react-dom';


import { OptionPanel } from './components/OptionPanel';
import { SourceList } from './components/SourceList';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NoteModel, TestState } from './types/NoteModel';
import {StoreState} from './types/index';
import { noteReduser} from './reducers/index';
import Hello from './containers/Hello';

// import '../index.css';

const store = createStore<TestState>(noteReduser,{
    index: 2
})


ReactDom.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById("app") as HTMLElement
);


 
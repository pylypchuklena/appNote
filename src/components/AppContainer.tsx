import * as React from 'react';
import Hello from '../containers/Hello';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import ListNotesContainer from '../containers/ListNotesContainer';
import NotesContainer from '../containers/NotesContainer';
import OptionPanelContainer from '../containers/OptionPanelContainer';

function AppContainer() {
 
    return (
        <div className="container">
            <OptionPanelContainer/>
            <div className="row">
                <div className="col-2 no-pdng-r">
                    <SourceList/>
                </div>
                <div className="col-3 no-pdng">
                    <ListNotesContainer/>
                </div>
                <div className="col-7 no-pdng-l">
                    <NotesContainer/>
                </div>
            </div>
        </div>
    );
  }
  
  export default AppContainer;
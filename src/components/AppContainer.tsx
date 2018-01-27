import * as React from 'react';
import Hello from '../containers/Hello';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import ListNotes from './ListNotes';
import NotesContainer from './NotesContainer';
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
                    <ListNotes/>
                </div>
                <div className="col-7 no-pdng-l">
                    <NotesContainer/>
                </div>
            </div>
        </div>
    );
  }
  
  export default AppContainer;
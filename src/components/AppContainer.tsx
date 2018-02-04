import * as React from 'react';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import NotesContainer from '../containers/NotesContainer';
import OptionPanelContainer from '../containers/OptionPanelContainer';
import ActiveNoteContainer from '../containers/ActiveNoteContainer';
import CommentsContainer from '../containers/CommentsContainer';
import SourceContainer from '../containers/SourceContainer';

function AppContainer() {
 
    return (
        <div className="container">
                <OptionPanelContainer/>
            <div className="row">
                <div className="col-md-4 col-sm-4 no-pdng-r">
                        <NotesContainer/>
                </div>
                <div className="col-md-8 col-sm-8 no-pdng-l ">
                    <div className="activeNoteSection">
                        <ActiveNoteContainer/>
                        <CommentsContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default AppContainer;
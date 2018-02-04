import * as React from 'react';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import NotesContainer from '../containers/NotesContainer';
import OptionPanelContainer from '../containers/OptionPanelContainer';
import ActiveNoteContainer from '../containers/ActiveNoteContainer';
import CommentsContainer from '../containers/CommentsContainer';
import SourceContainer from '../containers/SourceContainer';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { MainContainer } from './MainContainer';
import OptionContainer from './OptionContainer';
import NoteNewComment from './NoteNewComment';
import { NewNoteComponent } from './NewNoteComponent';
import AddNotesContainer from '../containers/AddNotesContainer';

function AppContainer() {
    return (
        <Router>
        <div className="container">
                <OptionPanelContainer />
                <div className="row">
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/options" component={OptionContainer} />
                    <Route path="/newNote" component={AddNotesContainer} />
                </div>
        </div>
        </Router>
    );
}

export default AppContainer;
import * as React from 'react';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import NotesContainer from '../containers/NotesContainer';
import OptionPanelContainer from '../containers/OptionPanelContainer';
import ActiveNoteContainer from '../containers/ActiveNoteContainer';
import CommentsContainer from '../containers/CommentsContainer';
import SourceContainer from '../containers/SourceContainer';

export class OptionContainer extends React.Component<any, any>{
    render() {
        return (
            <SourceContainer />
        );
    }
}

export default OptionContainer;
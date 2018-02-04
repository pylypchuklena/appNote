import * as React from 'react';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import NotesContainer from '../containers/NotesContainer';
import OptionPanelContainer from '../containers/OptionPanelContainer';
import ActiveNoteContainer from '../containers/ActiveNoteContainer';
import CommentsContainer from '../containers/CommentsContainer';
import SourceContainer from '../containers/SourceContainer';

export class MainContainer extends React.Component<any, any>{
    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-sm-4 no-pdng">
                        <NotesContainer/>
                </div>
                <div className="col-md-7 col-sm-5 no-pdng-l ">
                    <div className="activeNoteSection">
                        <ActiveNoteContainer/>
                        <CommentsContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
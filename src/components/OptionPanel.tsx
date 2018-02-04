import * as React from "react";
import SourceContainer from "../containers/SourceContainer";
import * as actions from '../actions/';

interface Props {
    onAddNote:() => void;
}


export class OptionPanel extends React.Component<Props>{
  
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <nav className="navbar  bg-gradient navbar-expand-md navbar-light justify-content-between">
                        <div className=" navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <button className="nav-link btn btn-link" onClick={this.props.onAddNote}>
                                        <span className="fa fa-pencil"></span>
                                        Add Note
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <SourceContainer />
                    </nav>
                </div>
            </div>
        )
    }
}
export default OptionPanel;
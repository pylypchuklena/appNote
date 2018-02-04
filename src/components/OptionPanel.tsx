import * as React from "react";
import {
    Link
} from 'react-router-dom';

interface Props {
    onAddNote?: () => void
}


export function OptionPanel({ onAddNote }: Props) {
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar  bg-gradient navbar-expand-md navbar-light bg-faded">
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <button className="nav-link btn btn-link" onClick={onAddNote}>Add Note</button>
                                <li><Link to="/">Main</Link></li>
                                <li><Link to="/options">Options</Link></li>
                                <li><Link to="/newNote"><button className="nav-link btn btn-link" onClick={onAddNote}>Add Note</button></Link></li>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default OptionPanel;
import * as React from "react";
import { Link } from 'react-router-dom';



export class OptionPanel extends React.Component<any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <nav className="navbar  bg-gradient navbar-expand-md navbar-light bg-faded">
                        <div className=" navbar-collapse">
                            <ul className="navbar-nav">
                                    <li><Link to="/">Main</Link></li>
                                    <li><Link to="/newNote"><button className="nav-link btn btn-link">Add Note</button></Link></li>
                                    <li><Link to="/options">Options</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default OptionPanel;
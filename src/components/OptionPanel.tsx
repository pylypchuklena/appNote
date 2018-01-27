import * as React from "react";
// import * from "./node_modules/bootstrap-css";

function OptionPanel(){
    return(
        <div className="row">
            <div className="col-12">
                <nav className="navbar  bg-gradient navbar-expand-md navbar-light bg-faded">
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Add Note <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Remove Note</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default OptionPanel;
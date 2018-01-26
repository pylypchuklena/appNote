import * as React from "react";
// import * from "./node_modules/bootstrap-css";


export class OptionPanel extends React.Component<{},{}>{
    render(){
        return(
            <div>
                <a>new note /</a>
                <a> delete</a>
            </div>
        )
    }
}
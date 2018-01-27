import * as React from "react"
import { NoteModel, SourceTypes } from '../types/NoteModel';

export interface Props {
    source: SourceTypes;
    onChange?: () => void;
  }

export function SourceList(){
    return(
        <div className="nav-wrap bg-gray">
            <ul className="nav flex-column ">
                <li className="nav-item nav-item--btn active"><a className="nav-link" href="#">LS</a></li>
                <li className="nav-item nav-item--btn"><a className="nav-link" href="#">FB</a></li>
            </ul>
        </div>
    );
}
export default SourceList; 
import * as React from "react"
import { NoteModel, SourceTypes } from '../types/NoteModel';

export interface Props {
    selectStorage: number;
    changeSource: (item: number) => void;
}

export class SourceList extends React.Component<Props>{
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <ul className="nav">
                <li className={"nav-item nav-item--btn " + (this.props.selectStorage == SourceTypes.LOCALSTORAGE ? "active" : "")}
                    onClick={() => { this.props.changeSource(SourceTypes.LOCALSTORAGE) }}>
                    < a className="nav-link" href="#">LocalStorage</a>
                </li>
                <li className={"nav-item nav-item--btn " + (this.props.selectStorage == SourceTypes.FIREBASE ? "active" : "")}
                    onClick={() => { this.props.changeSource(SourceTypes.FIREBASE) }}>
                    <a className="nav-link" href="#">FireBase</a>
                </li>
            </ul>
        );
    }
}
export default SourceList; 
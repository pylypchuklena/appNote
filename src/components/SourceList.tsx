import * as React from "react"
import { NoteModel, SourceTypes } from '../types/NoteModel';
import { Redirect } from 'react-router';

export interface Props {
    selectStorage: number;
    changeSource: (item: number) => void;
}

export interface State {
    isRedirect: boolean;
}

export class SourceList extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { isRedirect: false };

        
        this.navigateBack = this.navigateBack.bind(this);
    }

    onSelect(type: number): void {
        this.props.changeSource(type);
    }

    navigateBack(e: any) {
        this.setState({ isRedirect: true });
    }

    render() {
        if (this.state.isRedirect)
            return (
                <Redirect to={'/'} />
            )

        return (
            <div>
                <ul className="nav">
                    <li className={"nav-item nav-item--btn " + (this.props.selectStorage == SourceTypes.LOCALSTORAGE ? "active" : "")}
                        onClick={() => { this.onSelect(SourceTypes.LOCALSTORAGE) }}>
                        < a className="nav-link" href="#">LocalStorage</a>
                    </li>
                    <li className={"nav-item nav-item--btn " + (this.props.selectStorage == SourceTypes.FIREBASE ? "active" : "")}
                        onClick={() => { this.onSelect(SourceTypes.FIREBASE) }}>
                        <a className="nav-link" href="#">FireBase</a>
                    </li>
                </ul>
                <button onClick={this.navigateBack} />
            </div>
        );
    }
}
export default SourceList; 
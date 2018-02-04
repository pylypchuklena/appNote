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
            <div className="flex-col option">
                <h2 className="option__title ">Select store provider :</h2>
                <div className="form-check option__input">
                    <label htmlFor="radios1"  className=" flex-center " 
                        onClick={() => { this.onSelect(SourceTypes.LOCALSTORAGE) }}>
                        <input type="radio" id="radios1" checked={this.props.selectStorage == SourceTypes.LOCALSTORAGE }/>
                        < a className="nav-link" href="#">LocalStorage</a>
                    </label>
                </div>
                <div className="form-check option__input">  
                    <label htmlFor="radios2" className=" flex-center " 
                        onClick={() => { this.onSelect(SourceTypes.FIREBASE) }}>
                        <input type="radio" id="radios2" checked={this.props.selectStorage == SourceTypes.FIREBASE }/>  
                        <a className="nav-link" href="#">FireBase</a>
                    </label>
                </div>
                <div className="wrapButton">
                    <button onClick={this.navigateBack} className="btn btn-md btn-secondary ">Apply</button>
                </div>
            </div>
        );
    }
}
export default SourceList; 
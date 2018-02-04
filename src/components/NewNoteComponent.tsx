import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';
import { Redirect } from "react-router";

interface IProps {
    label:string;
    onAddNote: (note: NoteModel) => void
}

interface State {
    authorValid: boolean,
    comment: NoteComment,
    redirectToReferrer: boolean
}

export class NewNoteComponent extends React.Component<IProps, State>{
    regexString = "/[A-Z]{1}[a-z]+\s{1}[A-Z]{1}[a-z]+/gm";

    submit(e: any) {
        console.log("submit");
        e.preventDefault();
        debugger;
        this.props.onAddNote(null);
        this.setState({ ...this.state, redirectToReferrer: true })
    }
    constructor(props: IProps) {
        super(props);
        this.state = { authorValid: false, comment: new NoteComment(), redirectToReferrer: false };
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.submit = this.submit.bind(this);
    }

    validateAuthor(str: string): boolean {
        var arr = str.split(" ");
        if (arr.length == 2) {
            var first = arr[0].charAt(0) == arr[0].charAt(0).toLocaleUpperCase();
            var second = arr[1].charAt(0) == arr[1].charAt(0).toLocaleUpperCase() && arr[1].length > 0;
            return first && second;
        }
    }

    handleAuthor(e: any) {
        //var regext = new RegExp("[A-Z]{1}[a-z]+\s{1}[a-z]+");
        //console.log(regext.test(e.currentTarget.value));
        this.setState(
            {
                authorValid: this.validateAuthor(e.currentTarget.value),
                comment: { ...this.state.comment, author: e.currentTarget.value }
            });
    }
    handleContent(e: any) {
        this.setState({ comment: { ...this.state.comment, content: e.currentTarget.value } });
    }


    render() {
        if (this.state.redirectToReferrer) {
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <div className="newComment newComent-wrap">
                <h2 className="newComment__header">Add Note</h2>
                <form action="" className="newComment__form"
                    onSubmit={this.submit}>
                    <div className="newComment__inputs">
                        <div className="form-group">
                            <label htmlFor="newCommentName"  >Author:</label>
                            <input id="newCommentName" placeholder="Author"
                                onChange={this.handleAuthor}
                                type="text" className={"form-control newComment__input " + (this.state.authorValid ? 'isValid' : 'inValid')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newCommentContent" >Content:</label>
                            <textarea required id="newCommentContent"
                                onChange={this.handleContent}
                                className="form-control newComment__input"></textarea>
                        </div>

                    </div>
                    <button type="submit"
                        className="btn btn-sm btn-primary  mr-sm-2">Add note</button>
                </form>
            </div>
        );
    }
}
export default NewNoteComponent;
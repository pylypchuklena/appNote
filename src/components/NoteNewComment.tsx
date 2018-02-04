import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';

interface Props {
    onAddComment?: (comment: NoteComment) => void
}

interface State {
    authorValid: boolean,
    valueAuthor: string,
    valueComment: string
}

export class NoteNewComment extends React.Component<Props, State>{
    // regexString = "/[A-Z]{1}[a-z]+\s{1}[A-Z]{1}[a-z]+/gm";

    constructor(props: Props) {
        super(props);
        this.state = { authorValid: false, valueAuthor: '', valueComment: '' };
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.clearTextInput = this.clearTextInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
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
                valueAuthor: e.currentTarget.value

            });
    }
    handleContent(e: any) {
        this.setState({
            valueComment: e.currentTarget.value
        });
    }
    clearTextInput() {
        this.setState({ ...this.state, valueComment: '', valueAuthor: '' });
    }
    submitForm(e: any) {
        e.preventDefault();
        if (this.state.authorValid) {
            var newComment = new NoteComment();
            newComment.author = this.state.valueAuthor;
            newComment.content = this.state.valueComment;
            this.props.onAddComment(newComment);
            this.clearTextInput()
        }
    }

    render() {
        return (
            <div className="newComment newComent-wrap">
                <h2 className="newComment__header">Add comment</h2>
                <form action="" className="newComment__form"
                    onSubmit={this.submitForm}>
                    <div className="newComment__inputs">
                        <div className="form-group">
                            <label htmlFor="newCommentName"  >Author:</label>
                            <input id="newCommentName" placeholder="Author"
                                onChange={this.handleAuthor}
                                value={this.state.valueAuthor}
                                type="text"
                                className={"form-control newComment__input " +
                                    (this.state.authorValid ? 'isValid' : 'inValid')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newCommentContent" >Content:</label>
                            <textarea required id="newCommentContent"
                                value={this.state.valueComment}
                                onChange={this.handleContent}
                                className="form-control newComment__input"></textarea>
                        </div>

                    </div>
                    <button type="submit"
                        className="btn btn-sm btn-primary  mr-sm-2">Add comment</button>
                </form>
            </div>
        );
    }
}
export default NoteNewComment;
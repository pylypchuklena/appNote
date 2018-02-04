import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';
import { Redirect } from "react-router";

interface IProps {
    onAddNote: (note: NoteModel) => void
}

interface State {
    titleValid: boolean,
    content: string,
    title:string,
    isRedirect: boolean
}

export class NewNoteComponent extends React.Component<IProps, State>{

    constructor(props: IProps) {
        super(props);

        this.state = { titleValid: false, content: '', title: '' ,isRedirect : false};

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    validateTitle(str: string): boolean {
            return !!str;
    }

    handleTitle(e: any) {
        this.setState(
            {
                titleValid: this.validateTitle(e.currentTarget.value),
                title: e.currentTarget.value
            });
    }

    handleContent(e: any) {
        this.setState({
            content: e.currentTarget.value
        });
    }

    submitForm(e: any) {
        e.preventDefault();
        if (this.state.titleValid) {
            var newNote = new NoteModel();
            newNote.name = this.state.title;
            newNote.content = this.state.content;
            this.props.onAddNote(newNote);
            this.setState({ ...this.state, isRedirect:true});
        }
    }

    render() {
        if (this.state.isRedirect)
        return (
            <Redirect to={'/'} />
        )

        return (
            <div className="newComment newComent-wrap">
                <h2 className="newComment__header">Add note</h2>
                <form action="" className="newComment__form"
                    onSubmit={this.submitForm}>
                    <div className="newComment__inputs">
                        <div className="form-group">
                            <label htmlFor="newCommentName"  >Title:</label>
                            <input id="newCommentName" placeholder="Title"
                                onChange={this.handleTitle}
                                value={this.state.title}
                                type="text"
                                className={"form-control newComment__input " +
                                    (this.state.titleValid ? 'isValid' : 'inValid')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newCommentContent" >Content:</label>
                            <textarea required id="newCommentContent"
                                value={this.state.content}
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
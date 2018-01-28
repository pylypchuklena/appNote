import * as actions from '../actions/';
import { AppState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import { ListNotes } from '../components/ListNotes';


export function mapStateToProps(state:AppState){
    return{
      notesList:state.noteList
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    onSelectionChanged: (id:number) => dispatch(actions.selectNote(id)),
    deleteNote:(id:number) => dispatch(actions.deleteNote(id)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ListNotes);
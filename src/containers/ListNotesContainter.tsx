import * as actions from '../actions/';
import { AppState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import { ListNotes } from '../components/ListNotes';


export function mapStateToProps(state:AppState){
    return{
        notes:state.noteList,
        selectedNote:state.selectedNote
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NoteAction>) {
  return {
    onSelectionChanged: (id:number) => dispatch({type:constants.ADD_NOTE,value:id}),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ListNotes);
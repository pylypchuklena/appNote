import * as actions from '../actions/';
import { AppState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import OptionPanel from '../components/OptionPanel';


export function mapDispatchToProps(dispatch: Dispatch<actions.NoteAction>) {
  return {
    onAddNote: () => dispatch({type:constants.ADD_NOTE}),
    onDeleteNote:() => dispatch({type:constants.DELETE_NOTE})
  };
}

export default connect((()=>{}),mapDispatchToProps)(OptionPanel);
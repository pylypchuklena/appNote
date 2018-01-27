import Hello from '../components/Hello';
import * as actions from '../actions/';
import { AppState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';


export function mapStateToProps(state:AppState){
  return {
    source:state.storageType
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NoteAction>) {
  return {
    onChange: () => dispatch({type:constants.CHANGE_SOURCE})
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);
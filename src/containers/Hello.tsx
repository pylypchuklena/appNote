import Hello from '../components/Hello';
import * as actions from '../actions/';
import { AppState, SourceTypes } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';


export function mapStateToProps(state:AppState){
  return {
    source:state.storageType
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    onChange: (type:SourceTypes) => dispatch(actions.changeStore(type))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);
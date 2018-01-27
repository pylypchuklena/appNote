import Hello from '../components/Hello';
import * as actions from '../actions/';
import { TestState, AppState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';

// export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
//   return {
//     enthusiasmLevel,
//     name: languageName,
//   };
// }

// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//   };
// }




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
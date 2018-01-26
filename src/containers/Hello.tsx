import Hello from '../components/Hello';
import * as actions from '../actions/';
import { TestState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';

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




export function mapStateToProps(state:TestState){
  return {
    index:state.index
  };
}

var defValue = 10;
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onChange: () => dispatch({type:"CHANGE",value:++defValue})
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);
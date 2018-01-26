import { EnthusiasmAction } from '../actions';
import { TestState } from '../types/NoteModel';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

// export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
//   switch (action.type) {
//     case INCREMENT_ENTHUSIASM:
//       return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//     case DECREMENT_ENTHUSIASM:
//       return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//     default:
//       return state;
//   }
// }



export function noteReduser(state:TestState,action:{type:string,value:number}):TestState{
switch(action.type)
{
    case "CHANGE":
    return {...state, index:action.value};
    default:
    return state;
}
}



    
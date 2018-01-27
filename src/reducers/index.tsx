import { EnthusiasmAction, NoteAction } from '../actions';
import { AppState, SourceTypes } from '../types/NoteModel';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import * as constants from '../constants';

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

function changeSource(state:AppState):AppState
{
    var storageValue = localStorage.getItem("storage");
    console.log("from storage", storageValue);

    switch (storageValue) {
        case SourceTypes.FIREBASE.toString():
            {
                localStorage.setItem("storage", SourceTypes.LOCALSTORAGE.toString())
                return { ...state, storageType: SourceTypes.LOCALSTORAGE };
            }
        case SourceTypes.LOCALSTORAGE.toString():
            {
                localStorage.setItem("storage", SourceTypes.FIREBASE.toString())
                return { ...state, storageType: SourceTypes.FIREBASE };
            }
        default:
            localStorage.setItem("storage", SourceTypes.LOCALSTORAGE.toString())
            return { ...state, storageType: SourceTypes.LOCALSTORAGE };
    }
}

export function noteReduser(state: AppState, action: NoteAction): AppState {
    switch (action.type) {

        // case "CHANGE":
        //     return {...state, index:action.value};
        case constants.CHANGE_SOURCE:
            {
                return changeSource(state);
            }

        default:
            return state;
    }
}




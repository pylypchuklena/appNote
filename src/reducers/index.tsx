import { NoteAction } from '../actions';
import { AppState, SourceTypes } from '../types/NoteModel';
import * as constants from '../constants';


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

        
        case constants.CHANGE_SOURCE:
            {
                return changeSource(state);
            }

        default:
            return state;
    }
}




import { NoteAction } from '../actions';
import { AppState, SourceTypes, NoteModel } from '../types/NoteModel';
import * as constants from '../constants';


function changeSource(state:AppState):AppState
{
    var storageValue = localStorage.getItem("storage");

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

function addNote(state:AppState):AppState{
    var note = newNote();
    return {...state, 
        noteList: state.noteList.concat([note]),
        selectedNote : note
    };
}

function deleteNote(state:AppState):AppState{
    var note = state.selectedNote;
    var index = state.noteList.indexOf(note);
    var list = state.noteList.slice(0,index).concat(state.noteList.slice(index+1));
    return {...state, 
        noteList: list,
        selectedNote : state.noteList.length>0?state.noteList[0]:undefined
    };
}

function newNote():NoteModel{
    var note = new NoteModel();
    note.id = 0;
    note.comments = [];
    note.content='';
    note.date = new Date();
    note.name="";
    return note;
}

export function noteReduser(state: AppState, action: NoteAction): AppState {
    console.log(action.type);
    switch (action.type) {
        case constants.CHANGE_SOURCE:
            return changeSource(state);
        case constants.ADD_NOTE:
        {
            var newState = addNote(state);
            console.log(newState);
            return newState;
        }
        case constants.DELETE_NOTE:
            var newState = deleteNote(state);
            console.log(newState);
        default:
            return state;
    }
}




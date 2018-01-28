import { INoteAction } from '../actions';
import { AppState, SourceTypes, NoteModel } from '../types/NoteModel';
import * as constants from '../constants';


function changeSource(state:AppState):AppState{
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
    note.isSelected=true;

    var unselectedNoteList = state.noteList.map(item=>{return {...item, isSelected:false} as NoteModel;})

    //replace with guid 
    var id = state.noteList.length>0 ? state.noteList[state.noteList.length-1].id : 0;
    note.id = id+1;

    return {...state, 
        noteList: unselectedNoteList.concat([note]),
    };
}

function deleteNote(state:AppState,id:number):AppState{
    return {...state, 
        noteList: state.noteList.filter(item=>{return item.id!=id}),
    };
}

function newNote():NoteModel{
    var note = new NoteModel();
    note.id = 0;
    note.comments = [];
    note.content='';
    note.date = new Date();
    note.name="";
    note.isSelected=false;
    return note;
}

function changeSelectedNote(state:AppState, id:number):AppState{
    return {...state, noteList: state.noteList.map(note=>{
        if(note.id != id)
        {
            if (note.isSelected)
                return {...note, isSelected:false} as NoteModel;
            return note;
        }
        return {...note, isSelected:true} as  NoteModel;
    })}
}

export function noteReduser(state: AppState, action: INoteAction): AppState {
    console.log(action);
    switch (action.type) {
        case constants.CHANGE_SOURCE:
            return changeSource(state);
        case constants.ADD_NOTE:
            return addNote(state);
        case constants.DELETE_NOTE:
            return deleteNote(state,action.value as number);
        case constants.CHANGE_SELECTED_NOTE:
            return changeSelectedNote(state,action.value as number );
        
        default:
            return state;
    }
}




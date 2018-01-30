import { INoteAction } from '../actions';
import { AppState, SourceTypes, NoteModel, NoteComment } from '../types/NoteModel';
import * as constants from '../constants';


function changeSource(state:AppState,value:SourceTypes):AppState{
return {...state, storageType:value};
}

function addNote(state:NoteModel[], item:NoteModel):NoteModel[]{
    var unselectedNoteList = state.map(item=>{return {...item, isSelected:false} as NoteModel;})
    return [...unselectedNoteList, item];
}

function deleteNote(state:NoteModel[],id:string):NoteModel[]{
    return  state.filter(item=>{return item.id!=id});
}

function changeSelectedNote(state:NoteModel[], id:string):NoteModel[]{
    return state.map(note=>{
        if(note.id != id)
        {
            if (note.isSelected)
                return {...note, isSelected:false} as NoteModel;
            return note;
        }
        return {...note, isSelected:true} as  NoteModel;
    })
}

function updateNote (state:NoteModel[],item: NoteModel):NoteModel[]{

    return state.map(note=>{
            if(note.id == item.id)
            {
                return item;
            }
            return note;   
        }  
    )
}

function addNewComment(state:NoteComment[], item:NoteComment):NoteComment[]{
 
    return[...state, item]
}
export function appReduser(state: AppState, action: INoteAction): AppState {
    console.log(action);
    switch (action.type) {
        case constants.CHANGE_SOURCE:
            return changeSource(state,action.value as SourceTypes);      
        case constants.ADD_COMMENT:
            return {...state, comments: commentReduser(state.comments, action)};
        case constants.ADD_NOTE:
        case constants.DELETE_NOTE:
        case constants.CHANGE_SELECTED_NOTE:          
        case constants.UPDATE_NOTE:
            return{...state, notes: noteReduser(state.notes, action)};
        default:
            return state;
    }
    
}

export function commentReduser(state:NoteComment[]=[], action:INoteAction): NoteComment[]{
    switch (action.type) {
        case constants.ADD_COMMENT:
            return addNewComment(state, action.value as NoteComment);
        default:
            return state;
    }
}

export function noteReduser(state:NoteModel[]=[], action:INoteAction): NoteModel[]{
    switch (action.type) {
        case constants.ADD_NOTE:
            return addNote(state, action.value as NoteModel);
        case constants.DELETE_NOTE:
            return deleteNote(state,action.value as string);
        case constants.CHANGE_SELECTED_NOTE:
            return changeSelectedNote(state,action.value as string );
        case constants.UPDATE_NOTE:
            return updateNote(state,action.value as NoteModel);
        default:
            return state;
    }
}
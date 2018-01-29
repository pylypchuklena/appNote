import { INoteAction } from '../actions';
import { AppState, SourceTypes, NoteModel, NoteComment } from '../types/NoteModel';
import * as constants from '../constants';
import { INewComment } from '../components/NotesComponent';


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
// function addNewComment(state:AppState):AppState{
//     var comment = newComment();
// }

function deleteNote(state:AppState,id:number):AppState{
    return {...state, 
        noteList: state.noteList.filter(item=>{return item.id!=id}),
    };
}

function newNote():NoteModel{
    var note = new NoteModel();
    note.id = 0;
    note.comments = [{author:'lena', content:'lasdlfha sdf asd fa sdf   asdf  asd fa sdf a sdf a sdf a sdf as df as df as df as dg segt he tyh ry jr 6uj t7ik 68ik ', createData:new Date(), id:1},{author:'aaa', content:'learn', createData:new Date(), id:2}];
    note.content='';
    note.date = new Date();
    note.name="";
    note.isSelected=false;
    return note;
}

function newComment():NoteComment{
    var comment = new NoteComment();
    comment.author = '';
    comment.content = 'f';
    comment.createData = new Date();
    return comment;
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

function updateNote (state:AppState,item: NoteModel):AppState{

    return {...state, noteList:state.noteList.map(note=>{
            if(note.id == item.id)
            {
                return item;
            }
            return note;     
    })}
}
// function changeNote(state:AppState, item:NoteModel):AppState{
//     return{...state }
// }
var commentId:number =3;
function addNewComment(state:AppState, item:INewComment):AppState{
    item.comment.id=++commentId;
    item.comment.createData=new Date();
    console.log('id', item.comment.id)
    console.log('data', item.comment.createData)
    return{...state, noteList:state.noteList.map(note=>{
        if(note.id == item.noteId)
        {
            return {...note, comments:note.comments.concat([item.comment])};
        }
            return note;
        })
    }
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
        case constants.UPDATE_NOTE:
            return updateNote(state,action.value as NoteModel);
        // case constants.CHANGE_NOTE_NAME:
        //     return changeNote(state,action.value as NoteModel)
        case constants.ADD_COMMENT:
            return addNewComment(state, action.value as INewComment);
        default:
            return state;
    }
}

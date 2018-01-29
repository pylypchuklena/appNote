import * as constants from '../constants';
import { SourceTypes, NoteModel } from '../types/NoteModel';
import { INoteAction } from './index';

//source

export interface INoteAction{
    type:string;
    value:any
}

export function changeStore(sourceType:SourceTypes):INoteAction{
    return {
        type:constants.CHANGE_SOURCE,
        value:sourceType
    }
}

export function addNote():INoteAction{
    return {
        type:constants.ADD_NOTE,
        value:null
    }
}

export function selectNote(id:number):INoteAction{
    return {
        type:constants.CHANGE_SELECTED_NOTE,
        value:id
    }
}

export function deleteNote(id:number):INoteAction{
    return {
        type:constants.DELETE_NOTE,
        value:id
    }
}
export function addComment():INoteAction{
    return{
        type:constants.ADD_COMMENT,
        value:null
    }
}

export function updateNote(item:NoteModel):INoteAction{
    return{
        type:constants.UPDATE_NOTE,
        value:item
    }
}
import * as constants from '../constants';
import { SourceTypes, NoteModel, NoteComment } from '../types/NoteModel';
import { INoteAction } from './index';
import{ v4 } from 'node-uuid';

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
        var item = new NoteModel();
        item = {id:v4(), name:'', content: '', date: new Date(), isSelected: true};
    return {
        type:constants.ADD_NOTE,
        value: item
    }
}

export function selectNote(id:string):INoteAction{
    return {
        type:constants.CHANGE_SELECTED_NOTE,
        value:id
    }
}

export function deleteNote(id:string):INoteAction{
    return {
        type:constants.DELETE_NOTE,
        value:id
    }
}
export function addComment(comment:NoteComment):INoteAction{
    comment.id= v4();
    comment.createDate = new Date();
    
    return{
        type:constants.ADD_COMMENT,
        value:comment
    }
}

export function updateNote(item:NoteModel):INoteAction{
    return{
        type:constants.UPDATE_NOTE,
        value:item
    }
}
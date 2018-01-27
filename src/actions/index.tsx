import * as constants from '../constants';
import { SourceTypes } from '../types/NoteModel';

//source

export type NoteAction = INoteAction;

export interface INoteAction{
    type:string;
    value:any
}

export class ChangeSource {
    type:string;
    value:SourceTypes;
}

export function changeStore(sourceType:SourceTypes):ChangeSource{
    return {
        type:constants.CHANGE_SOURCE,
        value:sourceType
    }
}

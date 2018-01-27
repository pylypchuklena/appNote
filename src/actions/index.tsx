import * as constants from '../constants';
import { SourceTypes } from '../types/NoteModel';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

//source

export type NoteAction = INoteAction;

export interface INoteAction{
    type:string;
    value:object
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

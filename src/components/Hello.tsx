import * as React from 'react';
import { SourceTypes } from '../types/NoteModel';

export interface Props {
  source: SourceTypes;
  onChange?: () => void;
}

 
function Hello({ source, onChange }: Props) {
 
  return (
    <div className="hello">
      <div className="greeting">
        Hello {source}
      </div>
      <div>
        <button onClick={onChange}>Change</button>
       
      </div>
    </div>
  );
}

export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
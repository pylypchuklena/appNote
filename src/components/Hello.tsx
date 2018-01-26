import * as React from 'react';

export interface Props {
  index: number;
  onChange?: () => void;
}

 
function Hello({ index, onChange }: Props) {
 
  return (
    <div className="hello">
      <div className="greeting">
        Hello {index}
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
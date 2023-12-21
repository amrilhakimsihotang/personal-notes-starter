import React from 'react';

function NotesItemBody({ body }) {
  return (
    <div className='notes-item__content'>
      <p className='notes-item__body'>{body}</p>
      <br/>
    </div>
  );
}

export default NotesItemBody;

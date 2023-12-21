import React from 'react';

function NotesItemHeader({ title, createdAt }) {
  return (
    <div className='note-item__content'>
      <h1 className='note-item__title' >{title}</h1>
      <h4 className='note-item__date'>{createdAt}</h4>
    </div>
  );
}

export default NotesItemHeader;

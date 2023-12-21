import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemHeader from './NotesItemHeader';

function NotesItem({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  
  const onDeleteHandler =() =>{
      onDelete(id)
  }
  
  const onArchiveHandler = () => {
    onArchive(id);
  }
  return (
    
    <div className='note-item'>
      
      <NotesItemHeader title={title} createdAt={createdAt} />
      <NotesItemBody body={body} />
      <div className='note-item__action'>
        <button onClick={onDeleteHandler} className='note-item__delete-button'>
          Delete
        </button>
        {!archived && (
          <button onClick={onArchiveHandler} className='note-item__archive-button'>
            Archive
          </button>
        )}
      </div>
    </div>
  );
}

export default NotesItem;

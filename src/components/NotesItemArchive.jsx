import React from 'react';
import NotesItemBody from './NotesItemBody';
import NotesItemHeader from './NotesItemHeader';

function NotesItemArchive({ id, title, createdAt, body, archived, onDeleteArch, onMoveToNotesList }) {
  
  const onDeleteHandlerArchived =() =>{
    onDeleteArch(id)
  }
  
  const onMovedHandler =() =>{
    onMoveToNotesList(id)
  }
  return (
    
    <div className='note-item'>
      
      <NotesItemHeader title={title} createdAt={createdAt} />
      <NotesItemBody body={body} />
      <div className='note-item__action'>
        <button 
          onClick={onDeleteHandlerArchived} 
          className='note-item__delete-button'>
          Delete
        </button>
        {archived && (
        <button onClick={onMovedHandler} 
          className='note-item__archive-button'>
            Moved
          </button>
        )}
      </div>
    </div>
  );
}

export default NotesItemArchive;

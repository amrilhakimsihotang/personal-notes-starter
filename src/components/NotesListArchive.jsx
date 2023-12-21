import React from 'react';
import NotesItemArchive from './NotesItemArchive';


function NotesListArchive({ archivedNotes, onDeleteArch, onMoveToNotesList }) {
  
  
  return (
    <div>
      <h2>Arsip Catatan</h2>
      {archivedNotes.length === 0 ? (
        <span>Tidak ada catatan di dalam arsip.</span>
      ) : (
        <div className='notes-list'>
          {archivedNotes.map((note) => (
            <NotesItemArchive
              key={note.id}
              {...note}
              onDeleteArch={() => onDeleteArch(note.id)}
              onMoveToNotesList={() => onMoveToNotesList(note.id)}  
              
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesListArchive;

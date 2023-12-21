import React from 'react';
import NotesItem from './NotesItem';


function NotesList({ notes, showArchived, onDelete, onArchive })  {
  const filteredNotes = showArchived ? notes.filter(note => note.archived) : notes;

  return (
    <div>
      <h2>Daftar Catatan</h2>
        {filteredNotes.length === 0 ?(
          <span>Tidak ada catatan di dalam daftar catatan.</span>
      ):(
      <div className='notes-list'>
        {filteredNotes.map((note) => (
          <NotesItem key={note.id} {...note} 
          onDelete={()=>onDelete(note.id)} 
          onArchive={()=>onArchive(note.id)}
          />
        ))}
      </div>
      )}
      
    </div>
  );
}


export default NotesList;

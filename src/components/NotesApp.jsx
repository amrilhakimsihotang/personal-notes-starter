import React, { Component } from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import NotesListArchive  from './NotesListArchive';
import NotesSearch from './NotesSearch';
import { getInitialData } from '../utils/index';

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchKeyword: '',
    };
    this.addNote = this.addNote.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this); 
  }

    handleSearchChange(keyword) {
      this.setState({
        searchKeyword: keyword,
      });
    }
    
    addNote(newNote) {
      this.setState((prevState) => ({
        notes: [...prevState.notes, newNote],
      }));
    }



    deleteNote = (noteId, fromArchive = false) => {
    if (fromArchive) {
      const updatedArchivedNotes = this.state.archivedNotes.filter((note) => note.id !== noteId);
      this.setState({
        archivedNotes: updatedArchivedNotes,
      });
    } else {
  
      const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
        this.setState({
        notes:updatedNotes,
      })
  
    }
  }

 

    archiveNote = (noteId) => {
      /*mencari catatan yang akan 
      diarsipkan berdasarkan ID */
      const archivedNote = this.state.notes.find((note) => note.id === noteId);
      
      /* mengupdate daftar catatan dengan 
      menghapus catatan yang diarsipkan */
      const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
      
      /* object archived akan di set manjadi true 
      ketika di arsipkan */
      archivedNote.archived = true; 
      
      /* Mengupdate state dengan mengganti 
      catatan yang diarsipkan ke dalam archivedNotes */
      this.setState((prevState) => ({
        notes: updatedNotes,
        archivedNotes: [...prevState.archivedNotes, archivedNote],
      }));
      
    };



  moveNoteToNotesList = (noteId) => {
    /* Mencari catatan yang akan dipindahkan kembali 
    ke daftar utama berdasarkan ID */
    const movedNote = this.state.archivedNotes.find((note) => note.id === noteId);

     /* mengupdate daftar catatan dengan 
      menghapus catatan yang dipindahkan */
    const updatedArchivedNotes = this.state.archivedNotes.filter((note) => note.id !== noteId);
    
    /* object archived akan di set manjadi false 
    ketika di pindahkan ke Note list*/
    
    movedNote.archived=false 


    this.setState((prevState) => ({
      archivedNotes: updatedArchivedNotes,
      notes: [...prevState.notes, movedNote],
    }));
  };
  

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
    );
   

    return (
      <div>
        <div>
             <NotesSearch 
              searchKeyword={this.state.searchKeyword} 
              onSearchChange={this.handleSearchChange} />
        </div>
        <div className='note-app__header'>
          <NotesInput addNote={this.addNote} />
         
        </div>
        
        <div className='note-app__body'>       
          <NotesList 
          notes={filteredNotes}  
          onDelete={(noteId) => this.deleteNote(noteId)} 
          onArchive={this.archiveNote} />
        </div>

        <div className='note-app__body'>       
          <NotesListArchive archivedNotes={this.state.archivedNotes} 
          onDeleteArch={(noteId) => this.deleteNote(noteId, true)} 
          onMoveToNotesList={this.moveNoteToNotesList} />
        </div>
      </div>
    );
  }
}

export default NotesApp;

import React, { Component } from 'react';
import Swal from 'sweetalert2'

class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      maxTitleLength:50,
      remainingCharactersDisplay:50
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    const { maxTitleLength } = this.state;

    if (name === 'title') {
      const titleValue = value.slice(0, maxTitleLength);
      const remainingCharacters = maxTitleLength - titleValue.length;
      this.setState({
        title: titleValue, 
        remainingCharactersDisplay: remainingCharacters, 
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (title.trim() === '' || body.trim()==='') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Kolom Judul atau Catatan tidak boleh kosong!",  
        
      })
      return;
    }
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    this.props.addNote(newNote);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const { title, body } = this.state;
     

    return (
      <div> 
        <h1>Buat catatan</h1>
        <br/><br/>
        
        <form className='note-input' onSubmit={this.handleSubmit}>
        <label>
          Judul: <span>{this.state.remainingCharactersDisplay} Karakter yang tersisa</span>
          <input
            className='note-input__title'
            placeholder='Judul note'
            type="text"
            name="title"
            value={title}
            onChange={this.handleInputChange}
            maxLength={this.state.maxTitleLength}
          />
          
        </label>
        <label>
          Isi Catatan:
          <textarea
            className='note-input__body'
            placeholder='Catatan disini'
            name="body"
            value={body}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Buat Catatan Baru</button>
      </form>
      </div>
    );
  }
}

export default NotesInput;

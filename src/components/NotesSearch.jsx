import React, { Component } from 'react';

class NotesSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {

    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div className="note-search input note-app__header">
        <input
        className='note-search input'
          type="text"
          placeholder="Search notes..."
          value={this.props.searchKeyword}
          onChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default NotesSearch;

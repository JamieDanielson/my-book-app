import React, { Component } from 'react';
import axios from 'axios';

export default class NewBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeIsbn = this.onChangeIsbn.bind(this);
    this.onChangeAverageRating = this.onChangeAverageRating.bind(this);
    this.onChangeNumberPages = this.onChangeNumberPages.bind(this);
    this.onChangeYearPublished = this.onChangeYearPublished.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      author: '',
      isbn: '',
      averageRating: '',
      numberPages: '',
      yearPublished: '',
      genre: '',
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onChangeIsbn(e) {
    this.setState({
      isbn: e.target.value,
    });
  }

  onChangeAverageRating(e) {
    this.setState({
      averageRating: e.target.value,
    });
  }

  onChangeNumberPages(e) {
    this.setState({
      numberPages: e.target.value,
    });
  }

  onChangeYearPublished(e) {
    this.setState({
      yearPublished: e.target.value,
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      isbn: this.state.isbn,
      averageRating: this.state.averageRating,
      numberPages: this.state.numberPages,
      yearPublished: this.state.yearPublished,
      genre: this.state.genre,
    };

    console.log(book);

    axios
      .post('http://localhost:5000/books/new', book)
      .then((res) => console.log(res.data));

    this.setState({
      title: '',
      author: '',
      isbn: '',
      averageRating: '',
      numberPages: '',
      yearPublished: '',
      genre: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Add New Book</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <input
              type="text"
              className="form-control"
              value={this.state.isbn}
              onChange={this.onChangeIsbn}
            />
          </div>
          <div className="form-group">
            <label>Average Rating</label>
            <input
              type="number"
              className="form-control"
              value={this.state.averageRating}
              onChange={this.onChangeAverageRating}
            />
          </div>
          <div className="form-group">
            <label>Number of Pages </label>
            <input
              type="number"
              className="form-control"
              value={this.state.numberPages}
              onChange={this.onChangeNumberPages}
            />
          </div>
          <div className="form-group">
            <label>Year Published </label>
            <input
              type="number"
              className="form-control"
              value={this.state.yearPublished}
              onChange={this.onChangeYearPublished}
            />
          </div>
          <div className="form-group">
            <label>Genre </label>
            <input
              type="text"
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add New Book"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

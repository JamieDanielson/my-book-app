import React, { Component } from 'react';
import axios from 'axios';

export default class NewBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      title: this.state.title,
    };

    console.log(book);

    axios
      .post('http://localhost:5000/books/new', book)
      .then((res) => console.log(res.data));

    this.setState({
      title: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Add New Book</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
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

import React, { Component } from 'react';
import axios from 'axios';

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/books/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
      .post(
        'http://localhost:5000/books/update/' + this.props.match.params.id,
        book
      )
      .then((res) => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Books</h3>
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
              value="Edit Books"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

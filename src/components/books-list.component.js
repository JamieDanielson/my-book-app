import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => (
  <tr>
    <td>{props.book.title}</td>
    <td>
      <Link to={'/edit/' + props.book._id}>edit</Link> |{' '}
      <a
        href="#"
        onClick={() => {
          props.deleteBook(props.book._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.deleteBook = this.deleteBook.bind(this);
    this.state = { books: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/books/')
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBook(id) {
    axios
      .delete('http://localhost:5000/books/' + id)
      .then((res) => console.log(res.data));
    this.setState({
      books: this.state.books.filter((el) => el._id !== id),
    });
  }

  booksList() {
    return this.state.books.map((currentbook) => {
      return (
        <Book
          book={currentbook}
          deleteBook={this.deleteBook}
          key={currentbook._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Books</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Book</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.booksList()}</tbody>
        </table>
      </div>
    );
  }
}

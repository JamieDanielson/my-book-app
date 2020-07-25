import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Author = (props) => (
  <tr>
    <td>{props.author.firstName}</td>
    <td>{props.author.lastName}</td>
    <td>
      <Link to={'/edit/' + props.author._id}>edit</Link> |{' '}
      <button
        onClick={() => {
          props.deleteAuthor(props.author._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class AuthorsList extends Component {
  constructor(props) {
    super(props);
    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.state = { authors: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/authors/')
      .then((response) => {
        this.setState({ authors: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteAuthor(id) {
    axios
      .delete('http://localhost:5000/authors/' + id)
      .then((res) => console.log(res.data));
    this.setState({
      authors: this.state.authors.filter((el) => el._id !== id),
    });
  }

  authorsList() {
    return this.state.authors.map((currentauthor) => {
      return (
        <Author
          author={currentauthor}
          deleteAuthor={this.deleteAuthor}
          key={currentauthor._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Authors</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.authorsList()}</tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';

export default class NewAuthor extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const author = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    console.log(author);

    axios
      .post('http://localhost:5000/authors/new', author)
      .then((res) => console.log(res.data));

    this.setState({
      firstName: '',
      lastName: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Add New Author</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangelastName}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add New Author"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

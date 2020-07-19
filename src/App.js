import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import BooksList from './components/books-list.component';
import EditBook from './components/edit-book.component';
import NewBook from './components/new-book.component';
import AuthorsList from './components/authors-list.component';
import NewAuthor from './components/new-author.component';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <br />
          <Route path="/books" exact component={BooksList} />
          <Route path="/books/new" exact component={NewBook} />
          <Route path="/books/edit/:id" exact component={EditBook} />
          <Route path="/authors" exact component={AuthorsList} />
          <Route path="/authors/new" exact component={NewAuthor} />
        </div>
      </div>
    </Router>
  );
}

export default App;

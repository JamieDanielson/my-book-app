import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import BooksList from './components/books-list.component';
import EditBook from './components/edit-book.component';
import NewBook from './components/new-book.component';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={BooksList} />
          <Route path="/books/new" exact component={NewBook} />
          <Route path="/books/edit/:id" exact component={EditBook} />
        </div>
      </div>
    </Router>
  );
}

export default App;

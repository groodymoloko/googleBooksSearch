import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import BookCard from '../components/BookCard';

class Saved extends Component {
  state = {books: []};

  // GET all the books in the Mongo database.
  loadBookshelf = () => {
    API.getBookshelf()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // DELETE a specific book from the Mongo database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBookshelf())
      .catch(err => console.log(err))
  };

  // Display all books when this Bookshelf page is loaded
  componentDidMount() {
    this.loadBookshelf()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="Saved Books"
          lead="The current books in your library"
        />
        <BookCard
          books={this.state.books}
          buttonAction={this.deleteBook}
          buttonType="btn btn-danger mt-2"
          buttonText="Remove Book"
        />
      </div>
    )
  }
}

export default Saved;
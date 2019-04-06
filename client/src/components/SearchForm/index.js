import React from 'react';
import './searchform.css';

function SearchForm(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="search-body">
            <form>
              <div className="form-group">
                <input type="text"
                  value={props.search}
                  onChange={props.handleInputChange}
                  className="form-control"
                  id="book-search"
                  placeholder="Search by title keywords . . ." />
              </div>
              <button type="submit"
                className="btn btn-primary"
                onClick={props.handleFormSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
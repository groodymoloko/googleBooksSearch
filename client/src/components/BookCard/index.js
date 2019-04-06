import React from 'react';
import './style.css';

function BookCard(props) {
  return (
    <div className="row mb-5">

          <div className="col-lg-12">
            {props.books.map(book => (
              
              <div className="row mb-4 mt-4 card-row">

                <div className="col-lg-4 image-col"
                  key={
                    book._id
                      ? book._id
                      : book.googleBookId
                  }>
                      <h5 className="card-title">{book.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{book.subtitle}</h6>
                      <h6 className="mt-0 author-line">{book.authors.join(', ')}</h6>
                      <div>
                        <img src={book.thumbnail}
                          className="align-self-center mr-3" alt="testing" />
                      </div>
                      <small className="text-muted">{book.pageCount} pages.</small>
                      <small className="text-muted"> Published: {book.publishedDate}</small>

                    <div className="row justify-content-center">
                      <a className="btn btn-primary mr-1 mt-2" href={book.link} target="_blank"
                        rel="noopener noreferrer">View Book</a>
                      
                      <button className={props.buttonType}
                        onClick={props.buttonAction}
                        id={
                          book._id
                            ? book._id
                            : book.googleBookId
                        }
                      >
                        {props.buttonText}
                      </button>
                    </div>
                  
                </div>

                <div className="col-lg-8">
                    <div className="media-body">
                          <p className="mb-0">{book.description}</p>
                    </div>
                </div>
      
              </div>

            ))}
          </div>

    </div>
  )
}

export default BookCard;
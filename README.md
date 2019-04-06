# Google Book Search

### Overview

A React-based Google Books Search app that uses React components, helper/util functions, and lifecycle methods to query and display books based on user searches. It uses Node, Express and MongoDB and allows users to save books to a bookshelf to review or purchase later.

### Structure

1. This application uses 3 main "pages" (though still a single page app utilizing component changes), 

  * [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

2. Code automatically create a MongoDB database named `googlebooks` using the mongoose npm package.

3. Using mongoose, creates a Book schema with the following:

* `title` - Title of the book from the Google Books API

* `subtitle` - Subtitle of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `pagecount` - Number of pages from the Google Books API

* `publishedDate` - Publication date from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `thumbnail` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

### Deployment

1. This app is deployed to Heroku at: 
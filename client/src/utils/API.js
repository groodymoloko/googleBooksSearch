import axios from 'axios';

const DEFAULT_HPP = '5';

const PATH_BASE = 'https://www.googleapis.com/books/v1';
const PATH_SEARCH = '/volumes';
const PARAM_SEARCH = 'q=';
const PARAM_HPP = 'maxResults=';

export default {
  getGoogleBooks: function (search) {
    return axios.get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search}&${PARAM_HPP}${DEFAULT_HPP}`)
  },

  saveBook: function (bookData) {
    return axios.post('/api/saved', bookData);
  },

  getBookshelf: function () {
    return axios.get('/api/saved')
  },

  deleteBook: function (id) {
    return axios.delete(`/api/saved/${id}`)
  }
};
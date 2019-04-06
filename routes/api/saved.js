const router = require('express').Router();
const bookshelfController = require('../../controllers/bookshelfController');

// Matches with '/api/saved'
router.route('/')
  .get(bookshelfController.findAll)
  .post(bookshelfController.create);

// Matches with '/api/saved/:id'
router.route('/:id')
  .delete(bookshelfController.delete);

module.exports = router;
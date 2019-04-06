const router = require('express').Router();
const bookshelfRoutes = require('./saved');

router.use('/saved', bookshelfRoutes);

module.exports = router;
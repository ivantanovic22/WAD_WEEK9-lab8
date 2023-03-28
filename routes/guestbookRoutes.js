const express = require('express');
const controller = require('../controller/guestbookController.js');
const router = express.Router();
router.get('/guestbook', controller.entries_list);
router.get('/', controller.landing_page);

router.get('/about', function (req, res) {
    res.redirect('/about.html');
})
router.get('/peter', controller.peters_entries);
router.get('/new', controller.new_entries);
router.post('/new', controller.post_new_entry);
router.get('/posts/:author', controller.show_user_entries);


router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})
router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})
module.exports = router;
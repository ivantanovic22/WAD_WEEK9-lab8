const guestbookDAO = require('../models/guestbookModel');
const db = new guestbookDAO();
db.init();
// exports.entries_list = function (req, res) {
//     res.send('<h1>Guestbook Messages</h1><p>Not yet implemented: will show a list of guest book entries.</p>');
// }
exports.entries_list = function (req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    db.getAllEntries();
}
// exports.landing_page = function (req, res) {
//     res.send('<h1>Welcome to the guestbook application.</h1>');
//}
exports.landing_page = function (req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('entries', {
                'title': 'Guest Book',
                'entries': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}
// exports.landing_page = function (req, res) {
//     res.render("entries", {
//         'title': 'Guest Book',
//         'messages': [{
//             'subject': 'Good day out',
//             'contents': 'We had a really good time visiting the museum.'
//         },
//         {
//             'subject': 'Good place to be on a rainy day.',
//             'contents': 'Nice paintings too.'

//         },
//         {
//             'subject': 'Yummy',
//             'contents': 'Good food :-).'
//         }
//         ]
//     });
//  }

// exports.new_entry = function (req, res) {
//     res.send('<h1>Not yet implemented: show a new entry page.</h1>');
// }

exports.peters_entries = function (req, res) {
    res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
    db.getPetersEntries();
}
exports.new_entries = function (req, res) {
    res.render('newEntry', {
        'title': 'Guest Book'
    })
}
exports.post_new_entry = function (req, res) {
    console.log('processing post-new_entry controller');
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
    db.addEntry(req.body.author, req.body.subject, req.body.contents);
    res.redirect('/');
}
exports.show_user_entries = function (req, res) {
    controller.get('/posts', function (request, response) {
        console.log("filtering for author ", request.query.author);
    })
    let user = req.params.author;
    db.getEntriesByUser(user).then(
        (entries) => {
            res.render('entries', {
                'title': 'Guest Book',
                'entries': entries
            });
        }).catch((err) => {
            console.log('error handling author posts', err);
        });
}


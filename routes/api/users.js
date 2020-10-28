let express = require('express');
let router = express.Router();

var User = require('../../models/User');







//GET req. 
router.get('/', (req, res) => {
    User.find().then(users => {
        res.json(users)
    });
});



//exports
module.exports = router;
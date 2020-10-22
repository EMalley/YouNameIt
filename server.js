let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();
//Body parser middleware
app.use(bodyParser.json());

let db = require('./config/keys').mongoURI

//connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
        console.log('connected to mongoDB')
    }).catch(function (err) {
        console.log(err);
    })

//ROUTES
//app.use('/api/users', users);

//run server
 let port = process.env.PORT || 5000;
app.listen(port, function (){
    console.log(`server started on port ${port}`);
});
let express = require('express');
let router = express.Router();

//import model object
var User = require('../../models/User');


module.exports = (app) => {
    //Sign Up
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const { password } = body;
        let { email } = body;
        /////////////////////////////////////////////////////////////////
        //if no email/password, send a message saying field cannot be blank
        ////////////////////////////////////////////////////////////////
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: ':Error: Password cannot be blank'
            });
        };

        email = toLowerCase();
        email = email.trim();

        //////////Verification///////////
        //1. check to see if email exists
        //2. save
        ////////////////////////////////
        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: This account already exists'
                });
            }

            //save user data
            const newUser = new User();

            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Sever Error'
                    });
                } return res.send({
                    success: true,
                    message: 'Account creation successful'
                });
            });
        });

    });
}
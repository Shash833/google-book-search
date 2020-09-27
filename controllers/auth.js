const passport = require("passport");
const User = require("../models/userSchema");

module.exports = {
    //To register new users:
    doRegister: function ({ body: { username, name, password } }, res) {
        try {
            User.register(new User({ username, name }), password)
            res.redirect('/login')
        }
        catch (error) { console.log(error) }
    },
    //To log in:
    doLogin: function (req, res) {
        try {
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            })
        }
        catch (error) { console.log(error) }
    },
    //To log out:
    logout: function (req, res) {
        req.logout();
    }

}

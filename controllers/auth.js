const passport = require("passport");
const User = require("../models/userSchema");

module.exports = {
    //To register new users:
    doRegister: function ({ body: { username, name, password } }, res) {
        try {
            User.register(new User({ username, name }), password)
            res.redirect('/login')
        }
        catch (error) { res.status(422).json(error) }
    },
    //To log in:
    doLogin: async function (req, res) {
        try {
            const db = await passport.authenticate('local')(req, res, function () {
                res.json(db)
            })
        }
        catch (error) { res.status(422).json(error) }
    },
    //To log out:
    logout: function (req, res) {
        req.logout();
    }

}

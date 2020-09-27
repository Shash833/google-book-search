const router = require("express").Router();
const books = require("../controllers/books.js");
const auth = require("../controllers/auth.js");
const User = require('../models/userSchema')

//API Routes for GET, POST and DELETE methods for Book Model:
router.route("/api/books/")
  .get(books.findAll)
  .post(books.create);

router.route("/api/books/:id")
  .delete(books.remove);


//LOGIN ROUTES: 

// Route to register users:
router.route("/register").post(auth.doRegister)

// Route to log user in:
router.route("/login").post(auth.doLogin)

// route for logout action
router.route("/logout").get(auth.logout)

//To retreive authenticated user id and username:
router.route("/api/user_data")
  .get(async function (req, res) {
    try {
      if (!req.user) {
        res.json({});
      } else {
        res.json({
          username: req.user.username,
          id: req.user.id
        });
      }
    }
    catch (error) { console.log(error) }
  })

module.exports = router;

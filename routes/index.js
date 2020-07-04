const router = require("express").Router();
const controller = require("../controllers");

//API Routes for GET, POST and DELETE methods:
router.route("/api/books/")
  .get(controller.findAll)
  .post(controller.create);

router.route("/api/books/:id")
  .delete(controller.remove);

module.exports = router;

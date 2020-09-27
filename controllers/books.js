const db = require("../models");

module.exports = {
  //Method to find all books saved in DB
  findAll: async function ({ query }, res) {
    try {
      const booksDB = await db.Books.find(query)
      res.json(booksDB)
    }
    catch (error) { res.status(422).json(error) }
  },

  //Method to post book details and create new DB entry
  create: async function ({ body: { title, author, description, image, link } }, res) {
    try {
      const booksDB = await db.Books.create({
        title: title,
        author: author,
        description: description,
        image: image,
        link: link
      })
      res.json(booksDB)
    }
    catch (error) { res.status(422).json(error) }
  },

  //Method to delete a book with unique ID
  remove: async function (req, res) {
    try {
      const _id = req.params.id
      let booksDB = await db.Books.findById(_id)
      let updatedBooksDB = await booksDB.remove()
      res.json(updatedBooksDB)
    }
    catch (error) { res.status(422).json(error) }
  }
};

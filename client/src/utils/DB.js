import axios from "axios";

export default {

    getBooks: function () {
        return axios.get("/api/books");
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    register: function ({ name, username, password }) {
        return axios.post("/register", {
            name: name,
            username: username,
            password: password
        })
    },

    login: function ({ username, password }) {
        return axios.post("/login", {
            username: username,
            password: password
        })
    }
};

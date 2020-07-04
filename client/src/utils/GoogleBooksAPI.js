import axios from "axios";

export default {
    search: async function (query) {
        try {
            const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDsEBzXC2jJhYffYxQdO2Ka7s8t3SEjfog`
            const bookData = await axios.get(URL)
            return bookData;
        }
        catch (error) { console.log(error) }

    }
};

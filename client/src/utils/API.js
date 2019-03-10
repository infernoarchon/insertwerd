import axios from "axios";
require('dotenv').config()

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  searchBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query+ "&key=" + process.env.REACT_APP_API_KEY);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  sendText: function(text) {
    return axios.post("https://language.googleapis.com/v1/documents:annotateText?key=" + process.env.REACT_APP_GOOGLE_API_KEY, {
      document: text.document,
      features: { extractSyntax: true, extractEntities: true },
      encodingType: "UTF8"
    })
  }

};
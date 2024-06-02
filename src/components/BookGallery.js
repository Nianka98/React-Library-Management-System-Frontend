// BookGallery.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const BookGallery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch book data from your Node.js API
    axios
      .get("http://localhost:4500/api/book/")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  async function checkIn(bookId, bookDetails) {
    try {
      const userId = localStorage.getItem("id");
      const username = localStorage.getItem("username");

      // Get the username from localStorage or your authentication state

      const response = await axios.post(
        `http://localhost:4500/api/purchase/${userId}/${bookId}/${username}`
      );
      console.log(response);

      // Assuming your backend sends back the username in the response
      const responseData = response.data;

      alert(`Book check-in Successful for ${responseData.username}`);
    } catch (err) {
      alert("Book check-in Failed");
    }
  }
  return (
    <div className="book-gallery">
      <h1 class="animate-charcter">Book Gallery</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={`http://localhost:4500/images/${book.icon}`}
              alt={book.booktitle}
            />
            <h2>{book.booktitle}</h2>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            {/* <p>Quantity: {book.quantity}</p> */}
            <td>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => checkIn(book.id, book)}
              >
                Check-In
              </button>
            </td>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;

import axios from "axios";
import { useEffect, useState } from "react";

function UserHome() {
  const [_id, setId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [quantity, setQuantity] = useState("");
  const [book, setState] = useState([]);
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const userId = localStorage.getItem("id");
    const result = await axios.get(`http://localhost:4000/api/user/${userId}`);
    setBookIds(result.data.books);
    //console.log(result.data.books);
    await Load2(result.data.books);
  }

  async function Load2(ids) {
    const length = ids.length;

    const bookDetailArray = [];
    for (let i = 0; i < length; i++) {
      const id = ids[i];

      const bookDetail = await axios.get(
        `http://localhost:4000/api/book/${id}`
      );
      bookDetailArray.push(bookDetail.data);
    }
    setState(bookDetailArray);
    console.log(bookDetailArray);
  }

  async function CheckOut(bookId) {
    try {
      const userId = localStorage.getItem("id");
      console.log(userId);
      console.log(bookId);

      //await axios.post(`http://localhost:4000/api/user/`);
      // alert("Book Registation Successfully");
    } catch (err) {
      alert("Book check-out Failed");
    }
  }

  // async function checkIn(bookId) {
  //   try {
  //     const userId = localStorage.getItem("id");

  //     await axios.post(
  //       `http://localhost:4000/api/BookCheckIn/${userId}/${bookId}`
  //     );
  //     alert("Book check-out Successfully");
  //   } catch (err) {
  //     alert("Book check-out Failed");
  //   }
  // }
  async function checkIn(bookId, bookDetails) {
    try {
      const userId = localStorage.getItem("id");
      const username = localStorage.getItem("username"); // Get the username from localStorage or your authentication state

      const response = await axios.post(
        `http://localhost:4500/api/purchase/${userId}/${bookId}`,
        {
          username: username,
          bookDetails: bookDetails,
        }
      );
      console.log(bookId);
      // Assuming your backend sends back the username in the response
      const responseData = response.data;

      alert(`Book check-in Successful for ${responseData.username}`);
    } catch (err) {
      alert("Book check-in Failed");
    }
  }

  async function editBook(book) {
    setBookTitle(book.bookTitle);
    setAuthor(book.author);
    setPublisher(book.publisher);
    setQuantity(book.quantity);

    setId(book._id);
  }

  async function DeleteBook(_id) {
    await axios.delete("http://localhost:4000/api/book/" + _id);
    alert("Book deleted Successfully");
    Load();
  }

  return (
    <div>
      <table class="table table-bordered  table-striped" align="center">
        <thead>
          <tr>
            <th scope="col">Book Id</th>
            <th scope="col">Book bookTitle</th>
            <th scope="col">Book author</th>
            <th scope="col">Book publisher</th>
            <th scope="col">Book quantity</th>

            {/* <th scope="col">Date</th> */}

            <th scope="col">Option</th>
          </tr>
        </thead>

        <tbody>
          {book.map((item) => (
            <tr>
              <th scope="row">{item._id} </th>
              <td>{item.bookTitle}</td>
              <td>{item.author}</td>
              <td>{item.publisher}</td>
              <td>{item.quantity}</td>

              {/* <td>{item.updatedAt}</td> */}
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => checkIn(item._id)}
                >
                  Check-In
                </button>
                {/* <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => DeleteBook(item._id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserHome;

import axios from "axios";
import { useEffect, useState } from "react";

function UserHome() {
  const [book, setState] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:4500/api/book/");
    setState(result.data);
    console.log(result.data);
  }

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
    <div>
      <h1>Books List</h1>
      <table class="table table-bordered  table-striped" align="center">
        <thead>
          <tr>
            {/* <th scope="col">Book Id</th> */}
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
              {/* <th scope="row">{item._id} </th> */}
              <td>{item.booktitle}</td>
              <td>{item.author}</td>
              <td>{item.publisher}</td>
              <td>{item.quantity}</td>
              {/* <td>{item.updatedAt}</td> */}
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => checkIn(item.id)}
                >
                  Check-in
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

      {/* <div class="container mt-4">
        <form> */}
      {/* <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>BookTitle</label>
            <input
              type="text"
              class="form-control"
              id="bookTitle"
              value={bookTitle}
              onChange={(event) => {
                setBookTitle(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Author</label>
            <input
              type="text"
              class="form-control"
              id="author"
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Publisher</label>
            <input
              type="text"
              class="form-control"
              id="publisher"
              value={publisher}
              onChange={(event) => {
                setPublisher(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Quantity</label>
            <input
              type="text"
              class="form-control"
              id="quantity"
              value={quantity}
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Submit
            </button>
            {/* <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button> */}
    </div>
    //     </form>
    //   </div>
    // </div> */}
  );
}
export default UserHome;

import axios from "axios";
import { useEffect, useState } from "react";

function BookRegister() {
  const [book, setState] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:4500/api/book/");
    setState(result.data);
    console.log(result.data);
  }

  return (
    <div>
      <table class="table table-bordered  table-striped" align="center">
        <thead>
          <tr>
            {/* <th scope="col">Book Id</th> */}
            <th scope="col">Book bookTitle</th>
            <th scope="col">Book author</th>
            <th scope="col">Book publisher</th>
            <th scope="col">Book quantity</th>
            <th scope="col">Date</th>
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
              <td>{item.updatedAt}</td>
              {/* <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => editBook(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => DeleteBook(item._id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BookRegister;

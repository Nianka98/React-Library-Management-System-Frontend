import axios from "axios";
import { useEffect, useState } from "react";

function CheckedBook() {
  const [_id, setId] = useState("");
  const [book, setState] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:4500/api/purchase/");
    setState(result.data);
    console.log(result.data);
  }

  async function DeleteBook(_id) {
    await axios.delete("http://localhost:4500/api/book/" + _id);
    alert("Book deleted Successfully");
    Load();
  }

  return (
    <div>
      <h1>Checked book List</h1>
      <table class="table table-bordered  table-striped" align="center">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">username</th>
            <th scope="col">Date</th>
          </tr>
        </thead>

        <tbody>
          {book.map((item) => (
            <tr>
              {/* <th scope="row">{item._id} </th> */}
              {/* <td>{item.id}</td> */}
              {/* <td>{item.user_id}</td> */}
              <td>{item.book_id}</td>
              <td>{item.username}</td>
              <td>{item.checkin_date}</td>
              {/* <td>{item.publisher}</td>
              <td>{item.quantity}</td>
              <td>{item.updatedAt}</td> */}
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => DeleteBook(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    //     </form>
    //   </div>
    // </div> */}
  );
}
export default CheckedBook;

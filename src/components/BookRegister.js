import axios from "axios";
import { useEffect, useState } from "react";
import ImageUpload from "../../src/components/shared/ImageUpload";

// function BookRegister() {
//   const [_id, setId] = useState("");
//   const [bookTitle, setBookTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [book, setState] = useState([]);
function BookRegister() {
  const [_id, setId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [quantity, setQuantity] = useState("");
  const [icon, setIcon] = useState(null);
  const [book, setState] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  const inputHandler = (event) => {
    const selectedImage = event.target.files[0];
    setIcon(selectedImage);
  };

  // async function Load() {
  //   const result = await axios.get("http://localhost:4000/api/book/");
  //   setState(result.data);
  //   console.log(result.data);
  // }
  async function Load() {
    try {
      const result = await axios.get("http://localhost:4500/api/book");
      setState(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }
  // async function save(event) {
  //   event.preventDefault();
  //   try {
  //     await axios.post("http://localhost:4000/api/book/", {
  //       bookTitle: bookTitle,
  //       author: author,
  //       publisher: publisher,
  //       quantity: quantity,
  //       image: image,
  //     });
  //     alert("Book Registation Successfully");
  //     setId("");
  //     setBookTitle("");
  //     setAuthor("");
  //     setPublisher("");
  //     setQuantity("");
  //     setImage("");
  //     Load();
  //   } catch (err) {
  //     alert("Book Registation Failed");
  //   }
  // }
  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData(); // Create a FormData object to send the image
      formData.append("bookTitle", bookTitle);
      formData.append("author", author);
      formData.append("publisher", publisher);
      formData.append("quantity", quantity);
      formData.append("icon", icon); // Append the image to the form data

      await axios.post("http://localhost:4500/api/book", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to handle file upload
        },
      });

      alert("Book Registration Successfully");
      setId("");
      setBookTitle("");
      setAuthor("");
      setPublisher("");
      setQuantity("");
      setIcon(null); // Clear the selected image
      Load();
    } catch (err) {
      alert("Book Registration Failed");
    }
  }

  async function editBook(book) {
    setBookTitle(book.booktitle);
    setAuthor(book.author);
    setPublisher(book.publisher);
    setQuantity(book.quantity);

    setId(book._id);
  }

  async function DeleteBook(_id) {
    await axios.delete("http://localhost:4500/api/book/" + _id);
    alert("Book deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:4500/api/book/" + _id, {
        bookTitle: bookTitle,
        author: author,
        publisher: publisher,
        quantity: quantity,
      });
      alert("Book Updateddddd");
      setId("");
      setBookTitle("");
      setAuthor("");
      setPublisher("");
      setQuantity("");
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-30">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Book Registation</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form>
                  {/* <div className="card-body"> */}
                  <div class="form-group">
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

                    <div className="form-group">
                      <label htmlFor="exampleInputBookName">Book Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="bookTitle"
                        placeholder="Enter Book Name"
                        value={bookTitle}
                        onChange={(event) => {
                          setBookTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputAuthor">Author</label>
                      <input
                        type="text"
                        className="form-control"
                        id="author"
                        placeholder="Enter author"
                        value={author}
                        onChange={(event) => {
                          setAuthor(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Publisher</label>
                      <input
                        type="text"
                        className="form-control"
                        id="publisher"
                        placeholder="Enter publisher"
                        value={publisher}
                        onChange={(event) => {
                          setPublisher(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Available Copies
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(event) => {
                          setQuantity(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputImage">Upload Image</label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="icon"
                        accept="icon/*"
                        onInput={(e) => setIcon(e.target.files[0])} // Handle image change
                      />
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={save}
                    >
                      Save
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={update}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>

      <table className="table table-bordered table-striped" align="center">
        <thead>
          <tr>
            <th scope="col">Book Id</th>
            <th scope="col">Book Title</th>
            <th scope="col">Book Author</th>
            <th scope="col">Book Publisher</th>
            <th scope="col">Book Quantity</th>
            {/* <th scope="col">Date</th>
            <th scope="col">Image</th> */}
          </tr>
        </thead>

        <tbody>
          {book.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.booktitle}</td>
              <td>{item.author}</td>
              <td>{item.publisher}</td>
              <td>{item.quantity}</td>
              {/* <td>{item.updatedAt}</td> */}
              {/* <td>
                <img
                  src={item.image} // Assuming the image URL is available in your book data
                  alt="Book Cover"
                  width="100"
                />
              </td> */}
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editBook(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
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
  );
}
export default BookRegister;

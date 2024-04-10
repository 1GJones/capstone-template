import { useState } from "react";
import "./upload.scss";
import { Button, Form } from "react-bootstrap";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import axios from "axios";

const initialState = {
  title: "",
  authors: "",
  description: "",
  image_url: "",
  copies: 1,
};

const BookUpload = () => {
  const [book, setBook] = useState(initialState);

  const handleUserInput = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const restForm = () => setBook(initialState);

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/api/books", book);
    } catch (error) {
      console.log(error);
      return error;
    }
    /**
     * Instead of just clearing state, either:
     * 1. Navigate to the dashboard where all the books are
     * 2. Create a toast notification indicating a successful operation
     */
    Toastify({
      text: "Upload Successful",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", 
      position: "center", 
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #77BB7A, #7ED9DC)",
        color: "black"
      },
    }).showToast();
    
    restForm;
  };

  return (
    <Form onSubmit={handleUpload}>
      <Form.Group className="mb-2">
        <h1>Upload Your Book Here</h1>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={book.title}
          onChange={handleUserInput}
          autoComplete="on"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Author:</Form.Label>
        <Form.Control
          type="text"
          name="authors"
          value={book.authors}
          onChange={handleUserInput}
          autoComplete="on"
        />
      </Form.Group>
      <Form.Label>Description:</Form.Label>
      <Form.Control
        type="textarea"
        name="description"
        value={book.description}
        onChange={handleUserInput}
      />
      <Form.Label>Book Image:</Form.Label>
      <Form.Control
        type="file"
        name="image_url"
        value={book.image_url}
        id="image"
        onChange={handleUserInput}
      />
      <Button className="btn" type="submit">
        Add Your Book
      </Button>
    </Form>
  );
};
export default BookUpload;

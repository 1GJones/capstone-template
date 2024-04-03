import { Card } from "@material-ui/core";
import api from "../utils/api.utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookInfo = () => {
  const [book, setBooks] = useState();

  const { id } = useParams();

  useEffect(() => {
    try {
      api.get(`/books/${id}`).then((res) => {
        console.log(res.data);
        setBooks(res.data);
        console.log(book);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return( 
  <>
  <Card>
  {book &&
  <>
  <img src={book.image_url} alt="" />
  <h1>{book.title}</h1>
  <h2>{book.authors}</h2>
  <h5 className="m">{book.description}</h5>
  <p>{book.useReview}</p>
  </>
  }
  </Card>
  </>
  );
};
export default BookInfo;

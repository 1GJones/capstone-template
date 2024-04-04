import { Card } from "@material-ui/core";
import api from "../utils/api.utils";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const BookInfo = () => {
  const [book, setBooks] = useState();
  const navigate = useNavigate()

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

  const handleBackBtn = () => {
    navigate('/communitypage')
  }

  return( 
  <>
  <Card>
  {book &&
  <>
  <img className="bookInfoImg" src={book.image_url} alt="" />
  <h1>{book.title}</h1>
  <h2>Author: {book.authors}</h2>
  <h5 className="m">{book.description}</h5>
  <p>{book.useReview}</p>
  </>
  }
  <Button  variant="warning" onClick={handleBackBtn}>Back</Button>
  </Card>
  </>
  );
};
export default BookInfo;

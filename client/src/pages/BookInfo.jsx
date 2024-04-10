import { Card } from "@material-ui/core";
import api from "../utils/api.utils";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { UserReview } from "../components";




const BookInfo = () => {
  const [book, setBooks] = useState();
  

  const { id } = useParams();

  useEffect(() => {
    try {
      api.get(`/books/${id}`).then((res) => {
        setBooks(res.data);
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
  <img className="bookInfoImg" src={book.image_url} alt="" />
  <h1 className="bookTitle">{book.title}</h1>
  <h2>Author: {book.authors}</h2>
  <h5 className="m">{book.description}</h5>
  
  </>
  }
  <UserReview bookId={id}/>
  
  </Card>
  </>
  );
};
export default BookInfo;

import api from "../utils/api.utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookInfo = () => {
  const [book, setBooks] = useState();

  const { _id }= useParams();

  useEffect(() => {
    try {
      api.get(`/books/${_id}`)      
    } catch (error) {
      console.log(error)
    }
  },[]);
  return( 
    <>
      {book}
    </>
  );
};
export default BookInfo;

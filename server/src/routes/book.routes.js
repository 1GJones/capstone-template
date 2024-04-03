import { Router } from "express";
import {
  handleCreateBook,
  handleFindingBook,
  handleFindingById,
} from "../controllers/book.controllers";

const bookRoutes = Router();

bookRoutes
  // /api/books
  .route("/")
  //Get /api/books - Gets all books
  .get(handleFindingBook)
  // Post /api/books - Creates new book
  .post(handleCreateBook)

bookRoutes
  // /api/books/author/:author
  .route("/books/:id")
  // Get /api/books/:id - find books by :id
  .get(handleFindingById);
export default bookRoutes;

import Book from "../models/book.model";
import { createBook, findByAuthor } from "../services/book.service";

export async function handleCreateBook(req, res) {
  try {
    const { image_url, title, authors, description, copies } = req.body;

    const newBook = await createBook(
      image_url,
      title,
      authors,
      description,
      copies
    );

    res.status(201).send(newBook);
  } catch (err) {
    console.log(err);
    return res.status(422).send(err.err);
  }
}

export async function handleFindingBook(req, res) {
  const allBooks = await Book.find({});
  return res.status(200).json(allBooks);
}

export async function handleFindingByAuthor(req, res) {
  const { authors } = req.params;
  const authorsBooks = await findByAuthor(authors);
  res.status(200).json(authorsBooks);
}

import Book from "../models/book.model";
import { createBook, findBookById, findBookById } from "../services/book.service";

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

export async function handleFindingById(req, res) {
  const { _id } = req.params;
  const book = await findBookById(_id);
  res.status(200).json(book);
}

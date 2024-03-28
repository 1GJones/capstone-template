import Book from "../models/book.model";

export async function createBook(
  image_url,
  title,
  authors,
  description,
  copies
) {
  const newBook = await Book.create({
    image_url,
    title,
    authors,
    description,
    copies,
  });
  return newBook;
}

export async function findByAuthor(authors) {
  const booksByAuthor = await Book.find({ authors: authors });
  return booksByAuthor;
}

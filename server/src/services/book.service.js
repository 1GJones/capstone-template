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

export async function findBookById(_id) {
  const booksById = await Book.findById(_id);
  return booksById;
}

import Book from "../models/book.model";
import { createBook, findBookById } from "../services/book.service";

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
  const { id } = req.params;
  const book = await findBookById({ _id: id });
  // console.log("Book from controller:", book)
  res.status(200).json(book);
}

export async function handleReviewOfBook(req, res) {
  try {
    const { id } = req.params;
    const { text, userId, stars } = req.body;
    console.log("UserId:", userId)

    const book = await findBookById(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" })
    }
    // book.userReview.push({ text, user: userId });
    
    const reviewDate = new Date();
    console.log("Review Date:", reviewDate)
    const review = { text, user: userId, stars,  createdAt: reviewDate}
    book.userReview.push(review)
    await book.save();
   
    
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
export async function handleFetchReviews(req, res) {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate({
      path: 'userReview.user',
      select: 'userName',
    }).select('userReview.text userReview.stars userReview.createdAt');

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book.userReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

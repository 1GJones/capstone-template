import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const bookSchema = new Schema({
  image_url: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  copies: Number,
  userReview: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date,
      },
      stars: {
        type: Number,
        
      }
    },
  ],
});

const Book = model("Book", bookSchema);
export default Book;

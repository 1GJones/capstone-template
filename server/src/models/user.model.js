import { Schema, model } from "mongoose";


const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "To create an account you must include your first name."],
    },
    lastName: {
      type: String,
      required: [true, "To create an account you must include your last name."],
    },

    email: {
      type: String,
      required: [true, "Email Required"],
      match: EMAIL_REGEX,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    streetNum: {
      type: String,
      required: [true, "Street Number Required"],
    },
    streetName: {
      type: String,
      required: [true, "Street Name Required"],
    },
    city: {
      type: String,
      required: [true, "City Required"],
    },
    state: {
      type: String,
      required: [true, "State Required"],
    },
    zipCode: {
      type: String,
      required: [true, "Zip code Required"],
    },
    profileImg: {
      type: String,
    },
    favGenres: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;

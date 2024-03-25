import { Schema, model } from "mongoose";
 

// Create Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },


  // Optional  But Useful

  role: {
   type:Number,
   min:1,
   max:3,
   default:3,
  },
});

// Create model
const User = model("User",userSchema);

// Export model as default
export default User;

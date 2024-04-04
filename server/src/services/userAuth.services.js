import User from "../models/user.model";

export async function handleGetUserByUserName(userName) {
  return await User.findOne({ userName });
}

export async function createUser(
  firstName,
  lastName,
  email,
  userName,
  passwordHash,
  address,
  city,
  state,
  zipCode,
  favGenres,
  selectedAvatar,

) {
  let user = await User.create({
    firstName,
    lastName,
    email,
    userName,
    passwordHash,
    address,
    city,
    state,
    zipCode,
    favGenres,
    selectedAvatar,
  });
  return user
}

export function sanitizeUser(user) {
  user = user.toJSON();
  delete user.passwordHash;
  return user
};
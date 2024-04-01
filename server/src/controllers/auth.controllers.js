import { hash, signJwt } from "../utils/auth.utils";
import {
  handleGetUserByUserName,
  createUser,
  sanitizeUser,
} from "../services/userAuth.services";
import { comparPassword } from "../utils/auth.utils";

export async function handleSignUp(req, res) {
  const {
    firstName,
    lastName,
    email,
    userName,
    password,
    confirmPassword,
    address,
    city,
    state,
    zipCode,
    profileImg,
    favGenres,
  } = req.body;
  try {
    let user = await handleGetUserByUserName(userName);
    if (user) {
      return res.status(422).json({ userName: "Username taken" });
    }
    const passwordHash = hash(password);
    user = await createUser(
      firstName,
      lastName,
      email,
      userName,
      passwordHash,
      address,
      city,
      state,
      zipCode,
      profileImg,
      favGenres,
    );
    user = sanitizeUser(user);
    console.log(user);
    res.status(201).json(user);
    return user;
  } catch (err) {
    console.log(err);
  }
}

export async function handleSignIn(req, res) {
  const { userName, password } = req.body;

  let user = await handleGetUserByUserName(userName);

  if (!user || !comparPassword(password, user.passwordHash)) {
    return res.status(422).json({ error: "Invalid Username/password" });
  }
  
  const accessToken = signJwt(user)
  user = sanitizeUser(user);
  
  res.status(200).json({ user, accessToken });
}

import { createUser, getUserByUsername, getUserByEmail } from "../services/auth.services";
import { hashPassword } from "../utils/auth.utils";

export async function handleSignUp(req, res) {
  const { username, password, email } = req.body;

    let user = await getUserByUsername(username);
    if (user) {
      return res.status(422).json({ username: "Username taken." });
    }

    user = await getUserByEmail(email);
    if (user) {
      return res.status(409).json({ email: "Email is taken" });
    }

    const passwordHash = hashPassword(password);
    user = await createUser(username, passwordHash, email);

    // Ensure user.toJSON() returns a plain JavaScript object
    user = user.toJSON();
    delete user.passwordHash;

    res.status(201).json(user);
  } 

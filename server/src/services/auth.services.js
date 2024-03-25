import { User } from "../models";



export async function getUserByUsername(username) {
    return await User.findOne({ username });
  }

export async function getUserByEmail(email) {
    return await User.findOne({ email });
}

export async function createUser(username, passwordHash, email, role = 3) {
    return await User.create({ username, passwordHash, email, role });
}
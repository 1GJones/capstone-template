import api from "../utils/api.utils";


export const signIn = async (userName, password) => {
  return await api.post("/auth/signin", { userName, password })
}

export const signUp = (userName,
  password,
  confirmPassword,
  firstName,
  lastName,
  email,
  address,
  city,
  state,
  zipCode,
  favGenres,
  selectedAvatar) =>
  api.post("/auth/signup", {
    userName,
    password,
    confirmPassword,
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zipCode,
    favGenres,
    selectedAvatar,
  })
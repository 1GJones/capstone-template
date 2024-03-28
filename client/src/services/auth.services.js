import api from "../utils/api.utils";


export const  signIn= async  (userName, password) =>  {
 return await api.post("/auth/signin", { userName, password}) 
}

export const signUp = (userName, password, confirmPassword,
  firstName, lastName, email,
  streetName, streetNum, city, state, zipCode, favGenres  ) => 
  api.post("/auth/signup", {userName, password, confirmPassword, firstName, lastName, email,
  streetName, streetNum, city, state, zipCode, favGenres })
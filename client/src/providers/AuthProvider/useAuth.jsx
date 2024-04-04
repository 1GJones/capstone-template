import { useContext } from "react"
import authContext from "./authContext"
import { SIGNIN, SIGNOUT } from "./useAuthProvider";
import { signIn, signUp } from "../../services/auth.services";
import { setAccessToken } from "../../utils/api.utils";



const useAuth = () => {
  const { state, dispatch } = useContext(authContext);

  const handleSignUp = async (
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
  ) => {
    await signUp(userName,
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
    );
    
    await handleSignIn(userName, password)
  };

  const handleSignIn = async (userName, password) => {
   signIn(userName, password).then((response) => {
    dispatch({ type: SIGNIN, payload: response.data.user})
    setAccessToken(response.data.accessToken)
    const localAuth = { ...response.data};
    localStorage.setItem('test-auth', JSON.stringify(localAuth))
   })
  }
    
  const handleSignOut = () => {
    dispatch({ type: SIGNOUT})
    localStorage.removeItem('test-auth')
  };

  return {
    ...state,
    handleSignIn,
    handleSignOut,
    handleSignUp,
  }
}

export default useAuth;
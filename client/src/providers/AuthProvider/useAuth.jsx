import { useContext } from "react";
import authContext from "./authContext";
import { SIGNIN, SIGNOUT } from ".";
import { signIn, signUp } from "../../services/auth.services";

const useAuth = () => {
  const { state, dispatch } = useContext(authContext);

  const handleSignUp = async (username, password, confirmpassword) => {
   const response = await signUp(username, password, confirmpassword);
 console.log(response) 
  await signIn(username, password);
  };

  const handleSignIn = async (username, password) => {
    return signIn(username, password).then((response) =>
      console.log(response.data)
    );
  };
  const handleSignOut = () => {
    dispatch({ type: SIGNOUT });
  };
  return{
    ...state,
    handleSignUp,
    handleSignIn,
    handleSignOut,
  }
};
export default useAuth
import React, { useState } from "react";
import { Container,  InputGroup, Form, Button } from "react-bootstrap";
import {Link,  } from "react-router-dom";
//  // // import { useProvideAuth } from "../../hooks/useAuth";
// // import { AvatarPicker, LandingHeader, LoadingSpinner } from "../../components";
// import { setAuthToken } from "../../utils/api.utils";


const useAuth=()=>{
  const handleSignUp = async (username, password, confirmPassword) => {
    console.log("Signing up...");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Add your signup logic here
  };

  return { handleSignUp };
};
  




const intialState = {
  username: "",
  // email:"",
  password: "",
  confirmPassword: "",
  isSubmitting: false,
  errorMessage: null,
};
const imgs = ["/"];

function LoginPage () {
  const [formData, setFormData] = useState(intialState);
  const [errors, setErrors] = useState(intialState);
  const {handleSignUp}=useAuth()

  const handleSubmit= async(e)=>{
e.preventDefault()

const {username,password,confirmPassword}=formData;

 await handleSignUp(username,password,confirmPassword)

  }


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // if (
  //     form.checkValidity()=== false ||
  //     data.password !== data.confirmPassword
  // )
  // setData({
  //     ...data,
  //     isSubmitting: false,
  //     errorMessage:"Passwords do not match",
  // });

  //     setData({
  //         ...data,
  //         isSubmitting:true,
  //         errorMessage: null,
  //     });
  //     try{
  //         const res = await auth.signup(
  //             formdata.username,
  //             formdata.email,
  //             formdata.password,
  //             formdata.confirmPassword,
  //             profileImage,
  //         );
  //         setData({
  //             ...data,
  //             isSubmitting: false,
  //             errorMessage: null,
  //           });
  //           setAuthToken(res.token);
  //           navigate("/");
  //         } catch (error) {
  //           setData({
  //             ...data,
  //             isSubmitting: false,
  //             errorMessage: error ? error.message || error.statusText : null,
  //           });
  //         }
  //       };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center h-100 border border rounded p-4">
    <h1 className="mb-4">Login</h1>
    <Form className="auth-form" onSubmit={handleSubmit} style={{ width: "350px" }}>
          <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
              value={formData.username}
              onChange={handleInputChange}
              style={{ borderColor: "red" }}
            />
          <Form.Control.Feedback type="invalid">
           {errors.username}
          </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            name="password"
            placeholder="password"
            autoComplete="off"
            required
            value={formData.password}
            onChange={handleInputChange}
            style={{ borderColor: "red" }}
          />
            <Form.Control.Feedback type="invalid">
             {errors.password}
            </Form.Control.Feedback>
        </Form.Group>
      


        <Button type="submit" className="mt-3 btn">Create Account</Button>
      </Form>

      <Form.Text>
        Want Account? <Link to="/register">Sign Up</Link>
      </Form.Text>
    </Container>
  );
};

export default LoginPage;
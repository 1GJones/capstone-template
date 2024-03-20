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

function RegisterPage () {
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
    <Container className="d-flex justify-content-center align-items-center h-100">
     <h1>Create an Account</h1>
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            name="username"
            autoComplete="off"
            required
            value={formData.username}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Username is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            name="password"
            autoComplete="off"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formData.confirmPassword.trim() === "" && (
            <Form.Control.Feedback type="invalid">
              Confirm Password is required
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Button type="submit">Create Account</Button>
      </Form>

      <Form.Text>
        Already have an account? <Link to="/login">Sign In</Link>
      </Form.Text>
    </Container>
  );
};

export default RegisterPage;
import React, { useState } from "react";
import { Container,  InputGroup, Form, Button } from "react-bootstrap";
import {Link,  } from "react-router-dom";
import useAuth from "../providers/AuthProvider/useAuth";
// // import { AvatarPicker, LandingHeader, LoadingSpinner } from "../../components";
// import { setAuthToken } from "../../utils/api.utils";


  


  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email:"",
    isSubmitting: false,
    errorMessage: null,
  };


function RegisterPage() {
  // Initialize state using useAuth hook
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
 const {handleSignUp}= useAuth ()

  const handleSubmit = async (e) => {
e.preventDefault();

    const { username, password, confirmPassword,email } = formData;
    await handleSignUp(username, password, confirmPassword,email);
  };

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
    <h1 className="mb-4">Create an Account</h1>
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

      <Form.Group>
          <Form.Label>Email</Form.Label>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            autoComplete="off"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            style={{ borderColor: "red" }}
          />
            <Form.Control.Feedback type="invalid">
             {errors.email}
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
      

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
            style={{ borderColor: "red" }}
          />
            <Form.Control.Feedback type="invalid">
             {errors.confirmPassword}
            </Form.Control.Feedback>
        </Form.Group>




        <Button type="submit" className="mt-3 btn">Create Account</Button>
      </Form>

      <Form.Text>
        Already have an account? <Link to="/login">Sign In</Link>
      </Form.Text>
    </Container>
  );
};

export default RegisterPage;
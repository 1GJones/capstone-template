import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../providers/AuthProvider/useAuth";

const initialState = {
  userName: "", 
  password: "",  
};

function WelcomePage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialState);
  const { isAuthenticated,  handleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {userName, password } = formData;

    await handleSignIn(userName, password);
    navigate("/communitypage")
  }

  const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

if (!isAuthenticated) {
  return (
   <Container>
    <h1>Log In</h1>
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
        type="text"
        autoComplete="off"
        name="userName"
        value={formData.userName}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.userName}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        autoComplete="off"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.password}
      </Form.Control.Feedback>
      </Form.Group>
    
      <Form.Group className="mb-3">
        <Button type="submit">Log In</Button>
      </Form.Group>
      <Form.Text>
        New User? <Link to="/signup">Sign Up</Link>
      </Form.Text>
    </Form>
  </Container>
  )
} else {
  return <h1>Already logged in </h1>
}
}

export default WelcomePage;
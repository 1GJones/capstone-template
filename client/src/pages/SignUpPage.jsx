import React, { useState } from "react";
import { Button, Col, Container, Form, FormLabel, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../providers/AuthProvider/useAuth";

const initialState = {
  userName: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  favGenres: "",
  selectedAvatar: "",
};

function SignUpPage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialState);
  const { handleSignUp } = useAuth();
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
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
    } = formData;

    try {
      await handleSignUp(
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
      )
      navigate('/communitypage')


    } catch (error) {
      console.error('Sign Up failed', error)
    }
  }

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleAvatarSelection = (avatar) => {
    setFormData({ ...formData, selectedAvatar: avatar })
  }

  const avatarsList = [
    "/animalAvatars/bear.png",
    "/animalAvatars/chicken.png",
    "/animalAvatars/dog.png",
    "/animalAvatars/donkey.png",
    "/animalAvatars/elephant.png",
    "/animalAvatars/fox.png",
    "/animalAvatars/giraffe.png",
    "/animalAvatars/hare.png",
    "/animalAvatars/lamb.png",
    "/animalAvatars/owl.png",
    "/animalAvatars/panda.png",
    "/animalAvatars/tiger.png"
  ]

  return (
  <div className="signUpImg">

    <Container >
      <h1>Create an Account</h1>
      <Form className="auth-form" onSubmit={handleSubmit}>
        <Row className="longInput">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.userName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="longInput">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="longInput">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="longInput">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="longInput">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Favorite Genre</Form.Label>
              <Form.Control
                type="text"
                name="favGenres"
                value={formData.favGenres}
                onChange={handleInputChange}
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                {errors.favGenres}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label>Select your Avatar:</Form.Label>
          <div className="avatarContainer">
            {avatarsList.map((avatar, index) => (
              <div className={`avatar-select ${formData.selectedAvatar === avatar ? 'avatar-selected' : ''}`}
                key={index}
                onClick={() => handleAvatarSelection(avatar)}>
                <img src={avatar} alt={`Avatar ${index}`} />
              </div>
            ))}
          </div>
        </Row>
        <Form.Group className="mb-3">
          <Button type="submit">Create Account</Button>
        </Form.Group>
        <Form.Text>
          Already Signed Up? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
  </div>
  )
}

export default SignUpPage;
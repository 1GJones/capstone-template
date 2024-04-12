import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../providers/AuthProvider/useAuth";
import ProfilePage from "../ProfilePage";
import "./welcomePage.css"

const initialState = {
  userName: "",
  password: "",
};

function WelcomePage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialState);
  const { isAuthenticated, handleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, password } = formData;

    await handleSignIn(userName, password);
    navigate("/communitypage")
  }

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })


  return (
    <div id="welcomePage" style={!isAuthenticated ? { backgroundImage: `url("/bookBackground.jpg")` } : { backgroundImage: `url("/bookBackground2.webp")`, opacity: 0.8}} >
      <Container>
        <div className="row">
          {!isAuthenticated && (
            <div className="col-md-6">
              <>
                <h1>Log In</h1>
                <Form className="auth-form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="welcome-label">Username</Form.Label>
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
                    <Form.Label className="welcome-label">Password</Form.Label>
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
                  <Form.Label className="welcome-label">
                    New User? <Link className="signUp" to="/signup">Sign Up</Link>
                  </Form.Label>
                </Form>
              </>
            </div>
          )}
          {!isAuthenticated && (
            <div className="col-md-6 text-right">
              <div className="welcomeText">
                <p>Your Virtual Book </p>
                <p>Exchange Community!</p>
              </div>
            </div>
          )}
          {isAuthenticated && <ProfilePage />}
        </div>
      </Container >
    </div >
  )

}

export default WelcomePage;
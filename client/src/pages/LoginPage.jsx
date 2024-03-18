import React,{useState} from "react";
import {Container,Row,Col,InputGroup, Form, Button} from "react-bootstrap";
import{useNavigate}from "react-router-dom";
// import{Header, LoadingSpinner} from "../components";
// import{setAuthToken} from "../utils/api.utils"

const intialState ={
    username: "",
    password: "",
    currentPassword:"",
    inSubmitting: false,
    errorMessage:null,
};

const LoginPage =()=>{
    const [data, setData]= useState(intialState);
    // const auth= useProvideAuth();

    let navigate = useNavigate();

    const handleInputChange = (event)=>{
        setData({
            ...data,
            [event.target.name]:e.target.value
        });
    };
      const handleSignin = async (e)=>{}
    

return(
    <div style ={{ overflow: "auto",height: "100vh"}}>
        <Container className="mb-5">
            <Row className="pt-5 justify-content-center">
                <Form 
                noValidate
                validated
                style={{width: "350px"}}
                onSubmit={handleSignin}
                >
                    <h4 className="mb=3"><b><i>Thats Another Story!</i></b></h4>
                    <h3>Login page</h3>
                    <Form.Group controlId="username-login">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                        type="text"
                        name="username"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        value={data.username}
                        onChange={handleInputChange}
                        />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor ="Login">Password</Form.Label>
                        <Form.Control
                        type="text"
                        name="password"
                        placeholder="Password"
                        required
                        id="Login"
                        value={data.password}
                        onChange={handleInputChange}
                        />
                    <Form.Label htmlFor="Registration"> ConfirmPassword</Form.Label>
                    <Form.Control
                    type="password"
                    name="confirmPassword"
                    required
                    id="inputConfirmPasswordRegister"
                    value={data.confirmPassword}
                    onChange={handleInputChange}
                    />
                    </Form.Group>
                    {data.errorMessage &&(
                        <span className ="form-error text-warning">
                            {data.errorMessage}
                        </span>
                    )}
                    <Row className="mr-0">
                        <Col>
                        Upload Profile 
                        <Button
                        as="a"
                        variant="link"
                        onClick={()=> navigate("/register")}
                        >
                           UploadPic
                            </Button> 
                        </Col>
                        <Button type="submit"disabled={data.isSubmitting}>
                            {data.isSubmitting ? <LoadingSpinner /> : "Login"}
                        </Button>
                    </Row>
                </Form>
                </Row>
        </Container>
    </div>
)}
export default LoginPage;
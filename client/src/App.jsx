import React,{ useState } from 'react'
import{Navigate,Route,Routes} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import{Container,Row,Col}from "react-bootstrap";

function App() {

  return (
      <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        {/* <Route path="/"element={<RegisterPage/>}/> */}
      </Routes></>
      // )}
  );
};

export default App;

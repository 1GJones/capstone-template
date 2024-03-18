import { Route,Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage"

function App() {

  return (
      <>
        <Header/>
        <Routes>
          <Route path ="/register" element={<RegisterPage/>}/>
          <Route path ="/login"element={<LoginPage/>}/>
        </Routes>
    </>
  );
};

export default App;

import './App.css'
import { Header } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CommunityPage } from './pages';
import { SignUpPage } from './pages';
import { WelcomePage } from './pages';
import useAuth from './providers/AuthProvider/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';




function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
   
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route element={<ProtectedRoute  />}>
              <Route path="/communitypage" element={<CommunityPage />} exact />
        </Route>
      </Routes>
   
    </div>
   
     
    </>
  );
}

export default App;

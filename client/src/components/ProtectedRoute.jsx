import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../providers/AuthProvider/useAuth";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

 return (
  isAuthenticated ? <Outlet/> : <Navigate to='/communitypage'/>
 )
 }
export default ProtectedRoute;


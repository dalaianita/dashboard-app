import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const isLoggedIn = true;
    if(!isLoggedIn){
        return <Navigate to="/"/>
    }else{
        return children;
    }
}

export default ProtectedRoute;
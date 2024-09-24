import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
 
const PrivateRoutes = ({route}) => {
    const { auth } = useContext(AuthContext);
    return auth ? route : <Navigate to="/Principal"/>;
};

export default PrivateRoutes
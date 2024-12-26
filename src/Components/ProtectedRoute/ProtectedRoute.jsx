import { Navigate } from "react-router-dom";


const ProtectedRoute = (props)=>{


    if(localStorage.getItem("tokenUser") !== null){
        return props.children;
    }else{
        return <Navigate to="/login" />
    }


}
export default ProtectedRoute;
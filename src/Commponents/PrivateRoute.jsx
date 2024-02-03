import { Navigate } from "react-router-dom";
import { getAcessToken } from "../utils/helper";
import Layout from "../page/Menu/Layout";
import Home from "../page/Home";

/* eslint-disable react/prop-types */
const PrivateRoute = ({ children }) => {


  
  return (
    <>
      {children} 
      
     
    </>
  );
};

export default PrivateRoute;

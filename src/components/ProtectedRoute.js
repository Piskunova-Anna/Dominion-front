import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ component: RouteComponent, ...props }) => {
 const location = useLocation();
  
  if (props.authUser) {
    return <RouteComponent {...props}/>
  }
  return <Navigate to="/signin" state={{from: location}}/>
}

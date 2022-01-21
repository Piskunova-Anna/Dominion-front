import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  
  return (
    <Route>
      {()=>
  props.loggedIn ? <Component {...props}/> : <Redirect to="/signin" />
  }
<<<<<<< HEAD
  return <Navigate to="/signin" state={{from: location}}/>
}
=======

  </ Route>
)};


export default ProtectedRoute;
>>>>>>> 9510170d1bcd6678851b60cd1bccd218e0c68bce

import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

export default function CurrentCards (arr) {
    const currentUser = React.useContext(CurrentUserContext);
    const NewArray = arr.filter((item) => {
     return item.owner === currentUser._id;
   })
 return NewArray
}
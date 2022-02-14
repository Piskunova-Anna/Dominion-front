import React from 'react';
import './Skeleton.css';
import Pattern from './Pattern'
function Skeleton(props) {
  
  return (
    <section className={`preloader ${props.isOpen ? ('preloader__open') : 'preloader__close'}`}>
           
       { [...Array(3)].map((item, index) =>   <Pattern key={index} /> ) }
        
        
     </section>
  ) 
}

export default Skeleton;
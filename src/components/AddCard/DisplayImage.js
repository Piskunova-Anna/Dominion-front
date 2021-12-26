import React from 'react';
import './AddNewCard.css';

function DisplayImage (props) {
  const arr = Object.values(props.selectedImage);
  
  return (
    <div >
      {props.selectedImage && (
      <div className="select__image">
        {arr.map((item) => (
          <img className="card_image" alt="not fount" width={"250px"} src={URL.createObjectURL(item)} />
        ))
        }
      </div>
      )}
      <input
        type="file"
        name="myImage"
        multiple="multiple"
        onChange={props.onChange}
      />
    </div>
  );
};

export default DisplayImage;
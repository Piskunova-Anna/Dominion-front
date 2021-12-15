import React from "react";

const UploadAndDisplayImage = (props) => {
   

  const arr = Object.values(props.selectedImage);

  return (
    <div>
      {props.selectedImage && (
        <div>
            {arr.map((item) => (
                <>
                <img className="card_image" alt="not fount" width={"250px"} src={URL.createObjectURL(item)} />
            
                </>
            ))
            }
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        multiple="multiple"
        onChange={props.onChange}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
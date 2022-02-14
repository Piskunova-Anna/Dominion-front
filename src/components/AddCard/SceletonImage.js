import React from 'react';
import './SceletonImage.css';
import SkeletonImg from '../../images/sceleton.jpg';

function SceletonImage (props) {
  const arr = Object.values(props.selectedImage);
  const img = (arr.length > 0) ? URL.createObjectURL(arr[0]) : SkeletonImg
  const img1 = (arr.length > 1) ? URL.createObjectURL(arr[1]) : SkeletonImg
  const img2 = (arr.length > 2) ? URL.createObjectURL(arr[2]) : SkeletonImg
  const img3 = (arr.length > 3) ? URL.createObjectURL(arr[3]) : SkeletonImg
  
  return (
    <>
    <div className="card__skeleton_cont">
      <div className="image__skeleton">
        <img className="image__item" alt="фото" src={img1} />
        <img className="image__item" alt="фото" src={img2} />
        <img className="image__item" alt="фото" src={img3} />
      </div>
      <img className="image__item image__item_type_one" alt="фото" src={img} />
    </div>
    <input
        type="file"
        name="myImage"
        multiple="multiple"
        onChange={props.onChange}
    />
    </>
  )
}

export default SceletonImage 
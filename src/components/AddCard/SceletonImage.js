import React from 'react';
import './SceletonImage.css';
import SkeletonImg from '../../images/sceleton.jpg';

function SceletonImage (props) {
  const imageArr = props.editCardData ? props.editCardData.image : false
  const arr = props.selectedImage ? Object.values(props.selectedImage) : [];
  const img = (arr.length > 0) ? URL.createObjectURL(arr[0]) : SkeletonImg
  const img1 = (arr.length > 1) ? URL.createObjectURL(arr[1]) : SkeletonImg
  const img2 = (arr.length > 2) ? URL.createObjectURL(arr[2]) : SkeletonImg
  const img3 = (arr.length > 3) ? URL.createObjectURL(arr[3]) : SkeletonImg
 
  return (
    <>
    
    <div className="card__skeleton_cont">
      <div className="image__skeleton">
        <img className="image__item" alt="фото" src={arr.length!==0 ? img1 : imageArr[1] ? imageArr[1]: SkeletonImg } />
        <img className="image__item" alt="фото" src={arr.length!==0 ? img2 : imageArr[2] ? imageArr[2]: SkeletonImg} />
        <img className="image__item" alt="фото" src={arr.length!==0 ? img3 : imageArr[3] ? imageArr[3]: SkeletonImg} />
      </div>
      <img className="image__item image__item_type_one" alt="фото" src={arr.length!==0 ? img : imageArr[0] ? imageArr[0]: SkeletonImg} />
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
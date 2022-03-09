import React from "react";
import "../Card/Card.css";
import {ImageItem} from './ImageItem'

function ImageBlocks(props) {
  const arr= props.image
  const [counter, setCounter] = React.useState(0)
  const [newimg, setNewimg] = React.useState(arr[counter]);
  const [imageShow, setImageShow] = React.useState([]);
  const [startIndex, setStartIndex] = React.useState(0);

const arrLength = arr.length-1 > counter

  React.useEffect(()=> {
    quantityMovies(arr, startIndex, startIndex+3)
  },[startIndex, arr])

  function handlerCounterUp() {
    arrLength ? setCounter(counter+1) : setCounter(0) 
    setNewimg(arr[counter])
  }
  function handlerCounterDown() {
    counter > 0 ? setCounter(counter-1) 
    : counter === 0 ? setCounter(arr.length)
    : setCounter(0)
    setNewimg(arr[counter])
   
  }
  function handleSelectImg(src) {
    setNewimg(src)
    setCounter(arr.indexOf(src)+1)
  }

  function quantityMovies(arr, start, finish) {
    setImageShow(arr.slice(start, finish))
  }

  function handleNextClick() {
    imageShow.length === 1 ? setStartIndex(0)
    : setStartIndex(startIndex+1)
  }

  function handleBeforeClick() {
    imageShow.length === 1 ? setStartIndex(0)
    : setStartIndex(startIndex-1)
  }

  function handleClick() {
    props.onCardClick(newimg);
  }

  return (
    <div className="desc__image_block">
      <div className="desc__photo">
        <div onClick={handlerCounterDown} className="object__arrow object__arrow_left"></div>
        <div onClick={handlerCounterUp} className="object__arrow object__arrow_right"></div>
        <img className="desc__photo_m" onClick={handleClick}  src={newimg} alt={props.address} />
      </div>  
      <div className="desc__photo_mini">
        <div onClick={handleBeforeClick} className="object__arrow object__arrow_left object__arrow_type_mini"></div>
        <div onClick={handleNextClick} className="object__arrow object__arrow_right object__arrow_type_mini"></div>
          {imageShow.map((item, index) => (
            <ImageItem key={index} src={item} alt="фото" onClick={handleSelectImg}/>
          ))
          }
      </div>
       
    </div>
  );
}




export default ImageBlocks;
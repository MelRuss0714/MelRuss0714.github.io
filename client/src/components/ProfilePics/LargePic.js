import React from 'react';
import ProPic from '../../assets/images/ProPicture.jpg';
import './Pic.css';

const LargePic = (props) => {
return (
  <div >
    <img className='LargePic' src={ProPic} alt='Melinda Russell'/>
  </div>
)
}



export default LargePic;
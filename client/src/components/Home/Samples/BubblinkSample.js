import React from 'react';
import BubblinkPic from '../../../assets/images/BubblinkPic.png';
import '../Home.css';

const BubblinkSample = (props) => {
return (
  <div >
    <a href="https://bubblink.herokuapp.com/"><img className='BubblinkSample' src={BubblinkPic} alt='Bubblink'/></a>
  </div>
)
}



export default BubblinkSample;
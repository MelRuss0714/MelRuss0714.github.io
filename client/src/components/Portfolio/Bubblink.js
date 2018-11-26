import React from 'react';
import BubblinkPic from '../../assets/images/BubblinkPic.png';

import './Portfolio.css';

const Bubblink = (props) => {
return (
  <div >
    <a href="https://bubblink.herokuapp.com/"><img className='Bubblink' src={BubblinkPic} alt='Bubblink'/></a>
  </div>
)
}



export default Bubblink;
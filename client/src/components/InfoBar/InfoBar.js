import React from 'react';

import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = () => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>Happy Chatting</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;
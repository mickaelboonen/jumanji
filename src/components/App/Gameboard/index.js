import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Gameboard = ({ currentDanger }) => {
const handleChange = () => {
  var element = document.querySelector(".gameboard__core-message");
  element.addEventListener("animationstart", listener, false);
  element.addEventListener("animationend", listener, false);
  element.addEventListener("animationiteration", listener, false);

  element.className = "apparate";}
  return (
    <div className='gameboard'>
      {/* <div className='gameboard__player gameboard__player--first' />
      <div className='gameboard__player gameboard__player--second' />
      <div className='gameboard__player gameboard__player--third' />
      <div className='gameboard__player gameboard__player--fourth' />
      <div className='gameboard__player gameboard__player--fifth' />
      <div className='gameboard__player gameboard__player--sixth' /> */}
      <div className='gameboard__core'>
        <p className='gameboard__core-message' onChange={handleChange}>{currentDanger}</p>
      </div>
    </div>
  );
}

Gameboard.propTypes = {

};

export default Gameboard;

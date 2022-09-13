import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Dice from 'src/containers/App/Dice';
import History from 'src/containers/App/History';
import Players from '../Players';
import Rules from '../Rules';


import './style.scss';

const RightMenu = () => {
  // State
  const {
    isDangerOn,
  } = useSelector((state) => state.app);

  // Dispatch to be used when we need to dispatch the actions
  const dispatch = useDispatch();
  
  return (
    <section className="menu">
      <Rules />
      <Players />
      <Dice />
      <History />
  </section>
  );
};

RightMenu.propTypes = {

};

export default RightMenu;

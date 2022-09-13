import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';
import Form from './Form';

const LeftMenu = () => {
  
  
  // State
  const {
    isDangerOn,
  } = useSelector((state) => state.app);

  // Dispatch to be used when we need to dispatch the actions
  const dispatch = useDispatch();
  
  return (
    <div>
      {isDangerOn && (<Form />)}
      {!isDangerOn && <p>Hey</p>}
    </div>
  );
};

LeftMenu.propTypes = {

};

export default LeftMenu;

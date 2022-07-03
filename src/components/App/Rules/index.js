import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Utils/Dropdown';

import './style.scss';

const Rules = () => {

  return (
    <div className='rules'>
      <Dropdown name="rules"/>
      <div className='rules__settings'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae fugiat ea molestiae modi doloribus quae, quaerat suscipit quisquam laborum amet illum temporibus at autem nihil rem, alias corrupti. Eius eaque sunt esse rem explicabo, ad fugit provident eligendi debitis alias dolorum blanditiis possimus, dolor doloribus maiores odit. Iste, suscipit!</p>
      </div>
    </div>
  );
};

Rules.propTypes = {

};

export default Rules;

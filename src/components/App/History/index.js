import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Utils/Dropdown'

import './style.scss';

const History = ({ history }) => {
  return (
    <section className='history'>
      <Dropdown name="history"/>
      <ul className='history__list'>
        {history.map((danger) => <li key={danger.id}>{danger.riddle}</li>)}
      </ul>
    </section>
  );
}

History.propTypes = {
  history: PropTypes.array.isRequired,
};

export default History;

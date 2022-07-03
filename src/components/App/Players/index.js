import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'react-feather';

import './style.scss';
import Dropdown from '../../Utils/Dropdown';

const Players = () => {
  const players = [
    {
      id: 1,
      name: 'Carlos',
    },
    {
      id: 2,
      name: 'Aloysia',
    },
    {
      id: 3,
      name: 'Gaël',
    },
    {
      id: 4,
      name: 'Keane',
    },
    {
      id: 5,
      name: 'Wendell',
    },
    {
      id: 6,
      name: 'Lucy',
    },
  ];
  
    return (
    <div className='players'>
      <Dropdown name="players" />
      <div className='players__list'>
        {players.map((player) => (
          <div key={player.id} className='player'>{player.name}</div>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {

};

export default Players;

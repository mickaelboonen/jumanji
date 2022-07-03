import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const JumanjiText = ({ diceResults, currentDanger}) => (
  <div>
    JumanjiText - {diceResults}
    <p>{currentDanger.riddle}</p>
  </div>
);

JumanjiText.propTypes = {

};

export default JumanjiText;

import React from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import PropTypes from 'prop-types';
import { toggleClass } from '../../../selectors/toggleClass';

import './style.scss';

const Dropdown = ({ name }) => {  
  const toggleChevrons = () => {
    const chevronElements = [];

    // Pushing all the chevron elements into the array
    chevronElements.push(document.getElementById(`first-chevron-down-${name}`));
    chevronElements.push(document.getElementById(`second-chevron-down-${name}`));
    chevronElements.push(document.getElementById(`first-chevron-up-${name}`));
    chevronElements.push(document.getElementById(`second-chevron-up-${name}`));

    // For each element, we toggle the class so the right element appears
    chevronElements.forEach((el) => {
      el.classList.toggle(`chevron--hidden`)
    })
  };

  const handleClick = (event) => {
    // Function to toggle the next element class
    toggleClass(event.target.parentNode.nextSibling.classList[0]);

    //Function to toggle the chevrons
    toggleChevrons(event);
  };
  
  return (
    <div className='dropdown' id={name}>
      <ChevronDown onClick={handleClick} className="chevron chevron--hidden" id={`first-chevron-down-${name}`}/>
      <ChevronUp onClick={handleClick}  className="chevron" id={`first-chevron-up-${name}`} />
      <div className='dropdown__title'>{name}</div>
      <ChevronDown onClick={handleClick} className="chevron chevron--hidden" id={`second-chevron-down-${name}`} />
      <ChevronUp onClick={handleClick}  className="chevron" id={`second-chevron-up-${name}`} />
    </div>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Dropdown;

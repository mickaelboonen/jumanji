import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';

import './style.scss';

const History = () => {
  const handleClick = () => {
    const el = document.querySelector('.history__content');
    el.classList.toggle('history__content--open');

    const elbis = document.querySelector('.history__button');
    elbis.classList.toggle('history__button--open');
  };
  const historique = ['h','i','s','t','o','r','i','q','u','e'];
  return (
    <section className='history'>
      <div className='history__button' onClick={handleClick}>
        <ChevronLeft className="chevron chevron" id={`first-chevron-down-`}/>
        <p>{historique.map((letter) => <span>{letter}</span>)}</p>
        <ChevronLeft className="chevron chevron" id={`first-chevron-down-`}/>
      </div>
      <div className='history__content'></div>
    </section>
  );
}

History.propTypes = {

};

export default History;

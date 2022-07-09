import { firstPlayer } from 'src/data/playersPositions';

export const toggleClass = (className) => {
  console.log(className);
  const listElement = document.querySelector(`.${className}`);
  listElement.classList.toggle(`${className}--closed`)
}

export const setNewPlayerPosition = (player) => {
  if (player.number === 1 ) {
    const playerElement = document.querySelector('.gameboard__player--first');
    const newPosition = firstPlayer.find((number) => number.position === player.progress);
    console.log(newPosition);
    playerElement.style.top = `${newPosition.top}px`;
    playerElement.style.right = `${newPosition.right}px`;
  }
}


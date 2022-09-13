import { firstPlayer } from 'src/data/playersPositions';

export const toggleClass = (className) => {
  console.log(className);
  const listElement = document.querySelector(`.${className}`);
  listElement.classList.toggle(`${className}--closed`)
}


const setPosition = (player, position) => {
  player.style.top = `${position.top}px`;
  player.style.right = `${position.right}px`;
}

const setFinalPosition = (player, position) => {
  player.style.top = position.top;
  player.style.right = position.right;
}

export const setNewPlayerPosition = (player) => {
  if (player.number === 1 ) {
    const playerElement = document.querySelector('.gameboard__player--first');
    const newPosition = firstPlayer.find((number) => number.position === player.progress);
    
    if (newPosition.position !== 27) {
      setPosition(playerElement, newPosition);
    }
    else {
      setFinalPosition(playerElement, newPosition);
    }
  }
}

export const setDiceMessageAndForm = () => {
  // const wavyBackgroundElement = document.querySelector('.gameboard__waves');
  // wavyBackgroundElement.classList.toggle('gameboard__waves--hidden')
  // const resultsElement = document.querySelector('.gameboard__post-dice');
  // resultsElement.classList.toggle('gameboard__post-dice--hidden')

}


const lodash = require('lodash');

export const setNewHistory = (array, newEntry) => {

  const newArray = array;
  const newDanger = newEntry;
  const arrayLength = newArray.length;
  newDanger.order = arrayLength;
  newArray.push(newEntry);
  const reversedArray = lodash.orderBy(newArray, ['order'], ['desc'] );

  return reversedArray;
  
}

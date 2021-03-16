export const removeFirstItem = (arrayToRemoveFrom = []) => {
  arrayToRemoveFrom.shift();
  const arrayToReturn = [...arrayToRemoveFrom];
  return arrayToReturn;
};

export const removeItemFromList = (arrayToRemoveFrom = [], videoToRemove) => {
  const indexToRemove = arrayToRemoveFrom.findIndex((item) => videoToRemove.videoId === item.videoId);
  if (indexToRemove > -1) {
    arrayToRemoveFrom.splice(indexToRemove, 1);
    const arrayToReturn = [...arrayToRemoveFrom];
    return arrayToReturn;
  }
  return arrayToRemoveFrom;
};
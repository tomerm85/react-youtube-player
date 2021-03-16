export const removeFirstItem = (arrayToRemoveFrom) => {
  arrayToRemoveFrom.shift();
  const arrayToReturn = [...arrayToRemoveFrom];
  return arrayToReturn;
};
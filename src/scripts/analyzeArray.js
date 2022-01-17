const analyzeArray = (array) => {
  if (!isValidArray(array)) {
    return 'not an array';
  } else {
    const sum = array.reduce((current, previous) => {
      return current + previous;
    });

    const average = sum / array.length;

    const min = array.reduce((current, previous) => {
      return Math.min(current, previous);
    });

    const max = array.reduce((current, previous) => {
      return Math.max(current, previous);
    });

    const length = array.length;

    const analyzedArray = {
      average: average,
      min: min,
      max: max,
      length: length,
    };

    return analyzedArray;
  }
};

const isValidArray = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== 'number') {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

export default analyzeArray;

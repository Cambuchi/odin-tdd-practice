// takes a string and returns it with the first character capitalized
const capitalize = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i])) {
      return string;
    } else if (isLowerCase(string[i])) {
      let newString =
        string.slice(0, i) +
        string[i].toUpperCase() +
        string.slice(i + 1, string.length + 1);

      return newString;
    }
  }
  return 'no valid characters';
};

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};

export default capitalize;

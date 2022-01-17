const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'bcdefghijklmnopqrstuvwxyza';

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

const singleLowerCipher = (char) => {
  const index = alphabet.indexOf(char);
  let cipherCharacter = cipher[index];
  return cipherCharacter;
};

const caeserCipher = (string) => {
  if (typeof string !== 'string') {
    return 'not a string';
  }

  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i]) || isLowerCase(string[i])) {
      if (isLowerCase(string[i])) {
        newString += singleLowerCipher(string[i]);
      } else if (isUpperCase(string[i])) {
        newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase();
      }
    } else {
      newString += string[i];
    }
  }
  return newString;
};

export default caeserCipher;

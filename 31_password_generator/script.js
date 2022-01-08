const display = document.getElementById('display');
const copyBtn = document.getElementById('copyBtn');
const passwordLength = document.getElementById('passwordLength');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

const submitBtn = document.getElementById('submit');

const lowers = 'abcdefghijklmnopqrstuvwxyz';
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '`~!@#$%^&*()-_+={}[]|/:;"\'<>,.?';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const len = passwordLength.value;
  const hasUpper = includeUppercase.checked;
  const hasLower = includeLowercase.checked;
  const hasNumber = includeNumbers.checked;
  const hasSymbol = includeSymbols.checked;
  const charsSet = prepareCharsSet(hasLower, hasUpper, hasNumber, hasSymbol);

  if (charsSet.length === 0) return;
  display.value = generatePassword(len, charsSet);
});

copyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const password = display.value;
  if (password.length > 0) {
    navigator.clipboard.writeText(display.value);
    alert('Password was copied to clipboard');
  }
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function prepareCharsSet(lower, upper, number, symbol) {
  const charsSet = [];
  if (lower) {
    charsSet.push(lowers);
  }
  if (upper) {
    charsSet.push(uppers);
  }
  if (number) {
    charsSet.push(numbers);
  }
  if (symbol) {
    charsSet.push(symbols);
  }
  return charsSet;
}

function generatePassword(len, charsSet) {
  let password = '';
  for (let i = 0; i < len; i++) {
    let selectedChars = charsSet[rand(0, charsSet.length - 1)];
    password += selectedChars[rand(0, selectedChars.length - 1)];
  }
  return password;
}

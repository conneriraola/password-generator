var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var hasLower = (confirm("Include lowercase letters?"));
var hasUpper = (confirm("Include uppercase letters?"));
var hasNumber = (confirm("Include numbers?"));
var hasCharacter = (confirm("Include special characters?"))

const resultEl = document.getElementById ('password');
const lengthEl = document.getElementById ('length');
const uppercaseEl = document.getElementById ('uppercase');
const lowercaseEl = document.getElementById ('lowercase');
const numbersEl = document.getElementById ('numbers');
const charactersEl = document.getElementById ('characters');
const generateEl = document.getElementById ('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    character: getRandomCharacter
};

generateEl.addEventListener('click', () => {
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasCharacter, length);
});

function generatePassword(lower, upper, number, character, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + character;

    const typesArr = [{lower}, {upper}, {number}, {character}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomCharacter() {
    const characters = " !%&'()*+,-./:;<=>?@[]^_`{|}~"
    return characters[Math.floor(Math.random() * characters.length)];
}




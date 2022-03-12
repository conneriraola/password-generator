// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Dom elements
const resultEl = document.getElementById ('password');
const lengthEl = document.getElementById ('length');
const uppercaseEl = document.getElementById ('uppercase');
const lowercaseEl = document.getElementById ('lowercase');
const numbersEl = document.getElementById ('numbers');
const charactersEl = document.getElementById ('characters');
const generateEl = document.getElementById ('generate');
const clipboardEl = document.getElementById ('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    character: getRandomCharacter
};

// Generate Event Listen
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasCharacter = charactersEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasCharacter, length);
});

// Generate password function
function generatePassword(lower, upper, number, character, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + character;

    // console.log('typesCount: ', typesCount)

    const typesArr = [{lower}, {upper}, {number}, {character}].filter(item => Object.values(item)[0]);

    // console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName: ', funcName);

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


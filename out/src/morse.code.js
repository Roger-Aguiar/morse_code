"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMorse = void 0;
function decodeMorse(morseCode) {
    var morse = morseCode.split(' ');
    var decodedMorse = '';
    for (var index = 0; index < morse.length; index++) {
        if (morse[index] != '') {
            decodedMorse += getCharacter(morse[index]);
        }
        else {
            decodedMorse += " ";
        }
    }
    var noExraSpaces = removeExtraSpaces(decodedMorse);
    return decodedMorse;
}
exports.decodeMorse = decodeMorse;
function getCharacter(morseCharacter) {
    switch (morseCharacter) {
        case '.-':
            return 'A';
        case '-...':
            return 'B';
        case '-.-.':
            return 'C';
        case '-..':
            return 'D';
        case '.':
            return 'E';
        case '..-.':
            return 'F';
        case '--.':
            return 'G';
        case '....':
            return 'H';
        case '..':
            return 'I';
        case '.---':
            return 'J';
        case '-.-':
            return 'K';
        case '.-..':
            return 'L';
        case '--':
            return 'M';
        case '-.':
            return 'N';
        case '---':
            return 'O';
        case '.--.':
            return 'P';
        case '--.-':
            return 'Q';
        case '.-.':
            return 'R';
        case '...':
            return 'S';
        case '-':
            return 'T';
        case '..-':
            return 'U';
        case '...-':
            return 'V';
        case '.--':
            return 'W';
        case '-..-':
            return 'X';
        case '-.--':
            return 'Y';
        case '--..':
            return 'Z';
        case '-----':
            return '0';
        case '.----':
            return '1';
        case '..---':
            return '2';
        case '...--':
            return '3';
        case '....-':
            return '4';
        case '.....':
            return '5';
        case '-....':
            return '6';
        case '--...':
            return '7';
        case '---..':
            return '8';
        case '----.':
            return '9';
    }
}
function removeExtraSpaces(sentence) {
    var sentenceSplit = [];
    for (var index = 0; index < sentence.split('').length; index++) {
        if (index > 0 && sentenceSplit[index - 1] == ' ' && sentence.split('')[index] == ' ')
            continue;
        else
            sentenceSplit[index] = sentence.split('')[index];
    }
    return sentenceSplit.toString();
}
//It should return HEY JUDE
var morseCode = decodeMorse('.... . -.--   .--- ..- -.. .');
console.log(morseCode);
//# sourceMappingURL=morse.code.js.map
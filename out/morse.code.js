"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMorse = void 0;
function decodeMorse(morseCode) {
    var morse = morseCode.split(' ');
    var decodedMorse = '';
    for (var index = 0; index < morse.length; index++) {
        if (morse[index] != '')
            decodedMorse += getCharacter(morse[index]);
        else
            decodedMorse += " ";
    }
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
    }
}
//It should return HEY JUDE
var morseCode = decodeMorse('.... . -.--   .--- ..- -.. .');
console.log(morseCode);
//# sourceMappingURL=morse.code.js.map
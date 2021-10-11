export class MorseCode 
{
    morseCode = ''
    constructor(morseCode) 
    {
        this.morseCode = morseCode;
    }

    decodeMorse() 
    {
        let decodedMorse = '';

        for (let index = 0; index < this.morseCode.split(' ').length; index++) 
        {
            if (this.morseCode == '···−−−···') 
            {
                decodedMorse = 'SOS';
                break;
            }
            else if (this.morseCode.split(' ')[index] != '')
                decodedMorse += this.getCharacter(this.morseCode.split(' ')[index]);
            else
                decodedMorse += " ";
        }
        return this.removeExtraSpaces(decodedMorse);
    }

    getCharacter(morseCharacter) 
    {
        let letter = '';
        switch (morseCharacter) 
        {
            case '.-':
                letter = 'A';
                break;
            case '-...':
                letter = 'B';
                break;
            case '-.-.':
                letter = 'C';
                break;
            case '-..':
                letter = 'D';
                break;
            case '.':
                letter = 'E';
                break;
            case '..-.':
                letter = 'F';
                break;
            case '--.':
                letter = 'G';
                break
            case '....':
                letter = 'H';
                break
            case '..':
                letter = 'I';
                break;
            case '.---':
                letter = 'J';
                break;
            case '-.-':
                letter = 'K';
                break;
            case '.-..':
                letter = 'L';
                break;
            case '--':
                letter = 'M';
                break;
            case '-.':
                letter = 'N';
            case '---':
                letter = 'O';
                break;
            case '.--.':
                letter = 'P';
                break
            case '--.-':
                letter = 'Q';
                break;
            case '.-.':
                letter = 'R';
                break;
            case '...':
                letter = 'S';
                break;
            case '-':
                letter = 'T';
                break;
            case '..-':
                letter = 'U';
                break;
            case '...-':
                letter = 'V';
                break;
            case '.--':
                letter = 'W';
                break
            case '-..-':
                letter = 'X';
                break;
            case '-.--':
                letter = 'Y';
                break;
            case '--..':
                letter = 'Z';
                break;
            case '-----':
                letter = '0';
                break;
            case '.----':
                letter = '1';
                break;
            case '..---':
                letter = '2';
                break;
            case '...--':
                letter = '3';
                break;
            case '....-':
                letter = '4';
                break;
            case '.....':
                letter = '5';
                break;
            case '-....':
                letter = '6';
                break;
            case '--...':
                letter = '7';
                break;
            case '---..':
                letter = '8';
                break;
            case '----.':
                letter = '9';
                break;
        }
        return letter;
    }

    removeExtraSpaces(sentence) 
    {
        let sentenceSplit = [];

        for (let index = 0; index < sentence.split(' ').length; index++) 
        {
            if (index > 0 && sentenceSplit[index - 1] == ' ' && sentence.split(' ')[index] == ' ')
                continue
            else if (sentence.split(' ')[index] == ' ' || sentence.split(' ')[index] != ' ')
                sentenceSplit[index] = sentence.split(' ')[index];
        }

        return this.convertToString(sentenceSplit);
    }

    convertToString(sentence) 
    {
        let newSentence = '';

        for (let index = 0; index < sentence.length; index++) 
        {
            if (sentence[index] == '')
                newSentence += ' ';
            else
                newSentence += sentence[index];
        }

        return newSentence;
    }

}

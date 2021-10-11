import { MorseCode } from "../src/morse.code";
let decode1 = new MorseCode('.... . -.--   .--- ..- -.. .');
let decode2 = new MorseCode('···−−−···');

describe('Tests for decodeMorse function', () => 
{
    test('It should return HEY JUDE', () => 
    {
        expect(decode1.decodeMorse()).toBe('HEY JUDE');       
    });

    test('It receives "···−−−···" and should return SOS', () => 
    {
        expect(decode2.decodeMorse()).toBe('SOS');       
    });
});
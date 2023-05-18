// Given a random set of letters, find the longest word that can be formed

let dictionary = require('an-array-of-english-words');

function mapWord(str){
    str = str.toLowerCase();
    const max_char = 26;
    const letters = new Array(max_char).fill(0);
    for(let i = 0; i< str.length;i++){
        let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(letters[index] == 0){
            letters[index]++;
        }
    }
    return letters

}

function findPossibleWords(chars, words){
    const charsMap =mapWord(chars);
    words = words.filter(w =>{
        wordMap = mapWord(w);
        for(let i =0; i< wordMap.length; i++){
            if(wordMap[i] != 0 && charsMap[i] == 0){
                return false
            }
        }
        return true
    })
    return words;
}
function findLongestWord(chars, words){
    const possibleWords = findPossibleWords(chars, words);
    return possibleWords.reduce((a, b) => a.length < b.length ? b : a, "");
}
const chars="fsleat";

console.log(findLongestWord(chars, dictionary))

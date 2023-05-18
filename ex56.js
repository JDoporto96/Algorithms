//Given an input stream, detect when the series of characters correspond to a word found in a word array.

const dictionary = require('an-array-of-english-words');

function* generateStream(str){
    for(let i = 0; i<str.length;i++){
        yield str[i];
    }
}

function detectWordStream(str, wordList){
    let word="";
    for(const val of generateStream(str)){
       word+=val;
       if(wordList.includes(word)){
        console.log(word)
       }
    }
}

detectWordStream("phosphorescent", dictionary)
detectWordStream("dictionary", dictionary)
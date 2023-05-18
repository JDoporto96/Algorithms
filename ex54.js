//Given a dictionary input, output a trie structure representing the dictionary.


const dictionary={
    watermelon: 'A plant of the species Citrullus lanatus, bearing a melon-like fruit.',
    apple: 'A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.',
    food: 'Any solid substance that can be consumed by living organisms, especially by eating, in order to sustain life.',    
    lime: 'Any inorganic material containing calcium, usually calcium oxide (quicklime) or calcium hydroxide (slaked lime).', 
    cat: 'An animal of the family Felidae:',
    tree: "Fast growing function based on Kruskal's tree theorem.",
    dog: 'A mammal, Canis familiaris or Canis lupus familiaris, that has been domesticated for thousands of years, of highly variable appearance due to human breeding.',
    plant: 'An organism that is not an animal, especially an organism capable of photosynthesis. Typically a small or herbaceous organism of this kind, rather than a tree.',
    giant: 'A mythical human of very great size.'
}

class Node {
    constructor() {
    this.isEndOfWord = false;
    this.map = new Map();
    this.definition = null;
    }
}
     
    
function insertWord(root, word, definition) {
    let temp = root;
    for (let i = 0; i < word.length; i++){
        if (!temp.map.has(word[i])){
            temp.map.set(word[i], new Node());
        }

        temp = temp.map.get(word[i]);
    }

    temp.isEndOfWord = true;
    temp.definition = definition;
    return root;
}

function search(root, word) {
    let temp = root; 
    for (let i = 0; i < word.length; i++) {
        if (!temp.map.has(word[i])) {
            return null;
        }
        temp = temp.map.get(word[i]);
    }
    if (temp.isEndOfWord){
        return temp.definition;
    }
    return null;
}

const trie = new Node();

for(const key in dictionary){
    insertWord(trie, key, dictionary[key])
}
console.log(search(trie, "apple"))
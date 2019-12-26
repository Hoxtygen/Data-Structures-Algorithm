class Dictionary    {
    constructor() {
        this.dataStore = {}
    }

    wordCounter(words) {
        words = words.split(' ');
        let wordsLen = words.length;
        for (let i = 0; i < wordsLen; i++) {
            words[i] = words[i].toLowerCase();
            if (this.dataStore[words[i]]) {
                this.dataStore[words[i]]++
            }
            else {

                this.dataStore[words[i]] = 1;
            }

        }
        return this.dataStore
    }
}

const dict = new Dictionary()

console.log(dict.wordCounter('The brown fox jumped over the blue fox'))


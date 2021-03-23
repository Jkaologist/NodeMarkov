/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let obj = {};
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] in obj) {
        obj[this.words[i]].push(this.words[i+1]);
      } else {
       obj[this.words[i]] = [this.words[i+1] || null];
      }    
    }
    return obj;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}

module.exports= {
  MarkovMachine
};
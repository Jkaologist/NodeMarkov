const { MarkovMachine } = require("./markov");
const fsP = require("fs/promises");
const axios = require("axios")
const argv = process.argv;

argv[2] === "file" ? markovFile(argv[3]) : markovURL(argv[3]);

async function markovFile(path) {
  try {
    let text = await fsP.readFile(path, "utf8");
    let mm = new MarkovMachine(text);
    console.log(mm.getText());
  } catch (err) {
    console.log(err.message)
  }
}

async function markovURL(path) {
  try {
    let text = await axios.get(path)
    let mm = new MarkovMachine(text.data);
    console.log(mm.getText());
  } catch (err) {
    console.log(err.message)
  }
}



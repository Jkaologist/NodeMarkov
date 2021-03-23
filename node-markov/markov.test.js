const { MarkovMachine } = require("./markov");
const fsP = require("fs/promises");
 
describe("should return valid output", () => {
  
  let test1;
  let test2;

  beforeAll( async () => {
    test1 = new MarkovMachine("the cat in the hat");
    let cummings = await fsP.readFile("./cummings.txt", "utf8");

    test2 = new MarkovMachine(cummings);
  })
  
  test("length of output", () => {
    expect(test1.getText().split(" ").length).toEqual(100);
    expect(test2.getText(150).split(" ").length).toEqual(150);
  })

  test("type of output", () => {
    expect(test1.getText()).toEqual(expect.any(String));
    expect(test2.getText(150)).toEqual(expect.any(String));
  })

  test("contains inputs", () => {
    expect(test1.getText()).toContain("cat");
    expect(test1.getText()).toContain("hat");
    expect(test1.getText()).toContain("the");
  })

})
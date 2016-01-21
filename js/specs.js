describe("pigLatin", function() {
  it("adds 'ay' to the end of a word that starts with an a", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
  it("adds 'ay' to the end of a word that starts with a vowel", function() {
    expect(pigLatin("english")).to.equal("englishay");
  });
  it("takes a single consonant at the beginning of the word and moves it to the end", function () {
    expect(pigLatin("cat")).to.equal("atcay");
  });
  it("takes two consonants at the beginning of a word and moves them to the end", function () {
      expect(pigLatin("cricket")).to.equal("icketcray");
  });
  it("if the first two letters are 'qu' it moves them to the end", function () {
      expect(pigLatin("quest")).to.equal("estquay");
  });
  it("if the first letter is 'y', y is moved to the end", function () {
      expect(pigLatin("you")).to.equal("ouyay");
  });
});

describe("manyWordFunction", function () {
  it("runs the function for more than one word", function () {
      expect(manyWordFunction("you there")).to.equal("ouyay erethay");
  });
});

// describe("hasConsonantAt", function() {
//   it("returns true if a word has a consonant in the specified spot", function() {
//     expect(hasConsonantAt("peanut", 0)).to.equal(true);
//   });
//   it("returns false if a word does not have a consonsant in the specified spot", function() {
//     expect(hasConsonantAt("peanut", 1)).to.equal(false);
//   });
// });

describe("indexOfFirstVowel", function() {
  it("returns 0 for a word that starts with a vowel", function() {
    expect(indexOfFirstVowel("apple")).to.equal(0);
  });

  it("returns 1 for a word that starts with a single consonsant", function() {
    expect(indexOfFirstVowel("cat")).to.equal(1);
  });
});

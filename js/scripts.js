var pigLatin = function(englishWord) {
  if (englishWord[0] === 'a' || englishWord[0] === 'e' || englishWord[0] === 'i' || englishWord[0] === 'o' || englishWord[0] === 'u') {
  var translatedWord = englishWord;
} else {
  var translatedWord = englishWord.slice(1) + englishWord[0];
}
  return translatedWord + "ay";
};

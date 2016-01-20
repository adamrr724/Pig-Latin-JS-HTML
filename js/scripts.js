var indexOfFirstVowel = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = word.split("");

  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (letters[i] === vowels[j]) {
        return i;
      }
    }
  }
}

  var pigLatin = function(englishWord) {
  var splitAt = indexOfFirstVowel(englishWord);
  return englishWord.slice(splitAt) + englishWord.slice(0, splitAt) + 'ay';
}


//   if (!hasConsonantAt(englishWord, 0)) {
//   var translatedWord = englishWord;
// }
//   else if (hasConsonantAt(englishWord, 1)) {
//   var translatedWord = englishWord.slice(2) + englishWord.slice(0, 2);
// }
//   else if (hasConsonantAt(englishWord, 0)) {
//   var translatedWord = englishWord.slice(1) + englishWord.slice(0, 1);
// }
//   return translatedWord + "ay";
// };


// var hasConsonantAt = function(word, position) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   for (var i = 0; i < vowels.length; i++) {
//     if (word[position] === vowels[i]) {
//       return false;
//     }
//   }
//   return true;
// };
$(document).ready(function(event) {
    $("form#pigLatin").submit(function(event){

      var word = $("input#message").val();
      var result = pigLatin(word);

  $(".result").text(result);
  $("#result").show();
  event.preventDefault();

});
});

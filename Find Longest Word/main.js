function longest_word_in(sentence){
  let longestword =sentence.split(" ").reduce((longest,current)=>longest.length>current.length? longest:current);
    return longestword };

// Testing Ouput
console.log(longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much"))// Tooooooooooo
function remove_duplicate_words_from(sentence){
 
    return [...new Set(sentence.split(" "))].join(" ")
}

// Testing Ouput
console.log(remove_duplicate_words_from("Hello Elzero Web Web Hello School"));
// Hello Elzero Web School
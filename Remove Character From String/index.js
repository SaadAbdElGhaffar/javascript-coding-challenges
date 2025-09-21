function remove_char_from(word, c){

    return word.replaceAll(new RegExp(c,"ig"),"");
};
//Anthor sluotion
// function remove_char_from(word, c){
  
//     return word.split("").filter((e) => e !== c.toUpperCase() && e !== c.toLowerCase()  ).join("")
// };

// Testing Ouput
console.log(remove_char_from("ElddzeroD WebDD ddSchool", "d")); // Elzero Web School
console.log(remove_char_from("ElxzeroX Web Sxchool", "x")); // Elzero Web School
console.log(remove_char_from("Elzero@ Web@@ @@School", "@")); // Elzero Web School
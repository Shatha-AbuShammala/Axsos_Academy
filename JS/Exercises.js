//1. Convert a Letter Grade to Feedback
function gradeFeedback(grade) {
  g
  switch (grade) {
    case 'A':
      return "Excellent";
    case 'B':
      return "Good job";
    case 'C':
      return "You passed";
    case 'D':
      return "Need improvement";
    case 'F':
      return "Failed";
    default:
      return "Invalid grade";
  }
}

console.log(gradeFeedback("A")); 
console.log(gradeFeedback("B")); 


//2. Count Character Types in a String 
var vowels = 0;
var digits = 0;
var space = 0;
var others = 0;
 
var input = "Hi 123!";
for (var i = 0; i < input.length; i++){
    switch(input[i]){
        case "A":
        case "a":
        case "O":
        case "o":
        case "E":
        case "e":
        case "I":
        case "i":  
        case "U":
        case "u":  
            vowels++;
            break;
        case " ":
            space++;
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            digits++;
            break;
        default:
            others++;
            break;
    }
}
console.log("vowles: "+vowels +", digits: "+digits+", spaces: "+space+", others: "+others);
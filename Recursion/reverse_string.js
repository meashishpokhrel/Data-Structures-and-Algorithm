//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("ashish pokhrel"));

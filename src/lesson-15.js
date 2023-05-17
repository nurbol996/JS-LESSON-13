function reverseString(str) {
    let arr = str.split("");
    arr.reverse();
     let reversedStr = arr.join("");
    return reversedStr;
  }
let str = "Hello, world!";
let reversed = reverseString(str);
console.log(reversed);
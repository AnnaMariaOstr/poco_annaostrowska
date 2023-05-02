// Write a function called *getLastValue*. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

// Example: <br>
// Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
// Output: Wednesday

// Estimated time: 15 minutes <br>
// Total points: 15 





const days =  ["Monday","Thursday","Saturday","Wednesday","Tuesday"];
days.sort();
console.log(days);


let lastElement = days.slice(-1);
console.log(lastElement);
 




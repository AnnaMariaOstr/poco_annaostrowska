// Write a function that reverses a number: given a number, reverse its digits. 

// Examples: <br>
// Input: 1234 <br>
// Output: 4321 <br> <br>
// Input: 100000000 <br>
// Output: 1 <br> <br>
// Input: -321 <br>
// Output: -123

// Estimated time: 15 minutes <br>
// Total points: 15







 function reverseNumber(num) {
 return (
 parseFloat(
         num
          .toString()
           .split('')
         .reverse()
           .join('')
       ) * Math.sign(num)
     )                 
   }
  
   console.log(reverseNumber(123456));
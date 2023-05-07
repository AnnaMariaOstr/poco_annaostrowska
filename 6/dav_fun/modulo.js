function oddeven(index) {
  if (index % 2 == 0) {
    //console.log(index + " is even number");
    let wynik = index + " is even number";
    return wynik;
  } else {
    //console.log(index + " is odd number");
    return index + " is odd number";
  }
}

let result = oddeven(5);
console.log(result);

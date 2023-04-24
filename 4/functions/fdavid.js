

function dodawanie ( num1, num2){
    let result = num1 + num2;
    return result;
    //console.log(num1+num2);
    //return num1+num2;
}


// let wynik = dodawanie( 2,3);
// console.log(wynik);

// wynik = dodawanie(10,13);
// console.log(wynik);

function check (num) {
    let result;
    if (num%2===0) {
        result = "parzyste";
    } else {
        result = "nieparzyste"
    }
    return result;
}


let wynik = check(5);
console.log(wynik);

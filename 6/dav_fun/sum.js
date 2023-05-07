function sum(par){
    let wynik=0;
    for (let i=0; i<par.length; i++) {
        wynik = wynik + par[i]; // to samo co: wynik += par[i]
    }
    return wynik;
}

//console.log(sum([45,50]));
const numbers = [2,3,4,5,9];
let result = sum(numbers);
console.log(result);
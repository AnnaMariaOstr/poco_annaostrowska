

const city = ["Como", "Milan", "Paris"];

city.forEach(element=>console.log (`my1stchoice is ${element}`));





//inny zapis funkcji na gorze
function wypisz(element) {
    console.log (`my1stchoice is ${element}`);
}

city.forEach(wypisz);
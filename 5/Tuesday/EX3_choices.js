const city = ["Como", "Milan", "Paris", "Zurich", "Basel"];

function choices(array) {
    for (i=0; i< array.length; i++ ){
        choicespriority  = i+1;
        console.log(`My # ${choicespriority} choice is ${array[i]}`);
        
    }
}
choices(city);


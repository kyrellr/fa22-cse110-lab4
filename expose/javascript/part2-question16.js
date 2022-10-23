// Part 2 - Question 16

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

/* 
Given the above Object, write a for...in loop 
that will iterate through it and print out 
the value of the property if the property 
starts with the letter r, or if the value
of that property is an odd number. 
*/

for (let property in statistics){ // for every property in the statistics object
    if ((`${property}`.charAt(0) == 'r') || (`${statistics[property]}` % 2 != 0) ) { // if property starts with letter r or if value of property is odd
        console.log(`${statistics[property]}`); // print value of property
    }
}


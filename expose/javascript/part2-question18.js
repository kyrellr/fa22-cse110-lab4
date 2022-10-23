// Part 2 - Question 18

/* 
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

The above program only prints out the time once when executed. 
Modify this code such that the program prints out the time every second. 
*/

function printTime(){ // function to print current time
    let d = new Date(); 
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printTime, 1000); //every 1000 ms, call printTime function


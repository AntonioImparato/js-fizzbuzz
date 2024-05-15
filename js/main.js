'use strict';
//inizio ciclo for 
for (let i = 1; i <= 100; i++) {

    // controllo numero se divisibile per 5 e 3 
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');

    }
    // controllo numero se divisibile per 5
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // controllo numero se divisibile per 3 
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // stampa il valore che non asseconda i requisiti 
    else {
        console.log(i);
    }
}
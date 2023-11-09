//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for (let name of names) {
        if (string.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched ${name}`);
        }
    }

    if (!names.some(name => string.toLowerCase().includes(name.toLowerCase()))) {
        console.log('No Matches');
    }
}

findWords(dog_string, dog_names);


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i +=2) {
        arr.splice(i, 1, "even index");
    }
}

replaceEvens(arr);

console.log(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Code war problems done in JavaScript

// Problem 1: Implement a function that accepts 3 integer values a, b, c. The function 
// should return true if a triangle can be built with the sides of given length and false in any other case.

/* Original Code: 

def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        return True
    else:
        return False
*/

// Solved via JavaScript:

function is_triangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        console.log('True');
    } else {
        console.log('False');
    }
}

is_triangle(2,5,2);

// Problem 2: Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

/* Original Code: 

def find_it(seq):
    for i in seq:
        if seq.count(i)%2 != 0:
            return i
    return None
*/

// Solved via JavaScript:

function find_it(seq) {
    let found = false;
  
    for (let i of seq) {
      if (seq.filter(item => item == i).length % 2 !== 0) {
        console.log(i);
        found = true;
      }
    }
  
    if (!found) {
      console.log('None');
    }
  }
  
  let seq = [2, 2, 3, 3, 3, 4, 4];
  find_it(seq);
  
// Problem 3: Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.

/* Original Code: 

def even_or_odd(number):
    if number%2 == 0:
        return "Even"
    else:
        return "Odd"
    pass
*/

// Solved via JavaScript:

function even_or_odd(number) {
    if (number % 2 == 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

even_or_odd(19)

// Problem 4: Your generator must take one parameter `a` then everytime the generator is called you must return a string in the format of: `'a x b = c'` where c is the answer. Also, the value of `b`, 
// which starts at 1, must increment by 1 each time!

/* Original Code: 

def generator(a):
    b = 1
    while True:
        yield f'{a} x {b} = {a*b}'
        b += 1
    pass
*/

// Solved via JavaScript:

function createGenerator(a) {
    let b = 1;
    return function () {
        const result = `${a} x ${b} = ${a * b}`;
        b++;
        return result;
    };
}

const generator = createGenerator(2);

console.log(generator(2)); 
console.log(generator(2)); 
console.log(generator(2)); 
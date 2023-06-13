"use strict";
// NOTHING TO DO WITH GENERICS
const addOne = (a) => {
    return a + 1;
};
const addTwo = (a) => {
    return a + 2;
};
const addThree = (a) => {
    return a + 3;
};
// these three functions can replace one
const add = (a, b) => {
    return a + b;
};
// NO LET'S TALK ABOUT GENERICS
class HoldNumber {
    constructor() {
        this.data = 0;
    }
}
class HoldString {
    constructor() {
        this.data = '';
    }
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data = 'Silvester';
// Now let's do this with one class instead using generics, like function arguments
class HoldAnything {
    constructor() {
        this.data = {}; // Initialize with a default value (an empty object in this case)
    }
}
const holdNumber2 = new HoldAnything();
holdNumber2.data = 2;
const holdString2 = new HoldAnything();
holdString2.data = 'Silvester';

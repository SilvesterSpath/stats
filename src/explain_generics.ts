// NOTHING TO DO WITH GENERICS
const addOne = (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
};

const addThree = (a: number): number => {
  return a + 3;
};

// these three functions can replace one
const add = (a: number, b: number): number => {
  return a + b;
};

// NO LET'S TALK ABOUT GENERICS
class HoldNumber {
  data: number = 0;
}

class HoldString {
  data: string = '';
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'Silvester';

// Now let's do this with one class instead using generics, like function arguments
class HoldAnything<TypeOfData> {
  data: TypeOfData;

  constructor() {
    this.data = {} as TypeOfData; // Initialize with a default value (an empty object in this case)
  }
}

const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 2;

const holdString2 = new HoldAnything<string>();
holdString2.data = 'Silvester';

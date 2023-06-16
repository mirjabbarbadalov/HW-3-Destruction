
/*

  Theoretical Question :

  Destruction is the way of using arrays and objects with simple way,
  working with destruction method can easier writing and using code in the
  procets. The way of using destruction is, we create new array or object,
  and give it elements after that write equal to our previous block(array or object).
  In this process elements which we gave in the creating process of new block,
  their values will be same with previous block's elements values, wuth the respect of the
  position of the elements. Also there are some methods in destruction, for example 
  we want to declare only first 2 elements, but block has much more than 2, we give name to
  these 2 elements, and others will be located in the rest, for this we write ...rest.
  We can also use destruction method for strings.



 */



//Task 1 : 

const clients1 = ["Gilbert", "Salvatore", "Pierce", "Summers", "Forbes", "Donovan", "Bennett"];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const allUsers = [...clients1, ...clients2]
const uniqueUsers = [...new Set(allUsers)];
console.log(uniqueUsers);



// Task 2 : 

const characters = [
  {
    name: "Elena",
    lastName: "Gilbert",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Caroline",
    lastName: "Forbes",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Alaric",
    lastName: "Saltzman",
    age: 31,
    gender: "man",
    status: "human"
  },
  {
    name: "Damon",
    lastName: "Salvatore",
    age: 156,
    gender: "man",
    status: "vampire"
  },
  {
    name: "Rebekah",
    lastName: "Mikaelson",
    age: 1089,
    gender: "woman",
    status: "vampire"
  },
  {
    name: "Klaus",
    lastName: "Mikaelson",
    age: 1093,
    gender: "man",
    status: "vampire"
  }
];

charactersShortInfo = [];

for (const { name, lastName, age } of characters) {

  const newObj = {
    name,
    lastName,
    age
  }

  charactersShortInfo.push(newObj);
}

console.log(charactersShortInfo);



// Task 3 : 

const user1 = {
  name: "John",
  years: 30
};

const  {name, years: age, isAdmin = false} = user1

console.log(name, age, isAdmin);



// Task 4 : 

const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422, 
    lng: 139.876632
  }
}

const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
}

const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto', 
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
}


const fullProfile = {
  ...satoshi2018,
  ...satoshi2019,
  ...satoshi2020
};

console.log(fullProfile);



// Task 5 : 

const books = [{
  name: 'Harry Potter',
  author: 'J.K. Rowling'
}, {
  name: 'Lord of the rings',
  author: 'J.R.R. Tolkien'
}, {
  name: 'The witcher',
  author: 'Andrzej Sapkowski'
}];


const bookToAdd = {
  name: 'Game of thrones',
  author: 'George R. R. Martin'
}

let newBooksArr = [...books];
console.log(newBooksArr);

newBooksArr.push(bookToAdd);
console.log(newBooksArr);



//  Task 6 : 

const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
}

let newEmployee = {
  ...employee
}

newEmployee.salary = 500;
newEmployee.age = 19;

console.log(newEmployee);



//  Task 7 : 

const array = ['value', () => 'showValue'];

const  [value, showValue] = array;

alert(value); // should output 'value'
alert(showValue()); // should output 'showValue'






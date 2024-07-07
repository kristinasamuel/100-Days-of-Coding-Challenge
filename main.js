// Day 1 :  challenge start
//Question 2: Personal Message: Store a person’s name in a variable and print a message
// to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let personName = "Tina";
console.log(`Hello ${personName}, would you like to learn some typescript today?`);
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
let person_Name = "Kristina";
console.log("toLowerCase:", person_Name.toLowerCase()); // name show in small letters
console.log("toLowerCase:", person_Name.toUpperCase()); // name show in big letters
console.log("titlecase:", person_Name.replace(/\bw/g, (c) => c.toUpperCase()) // first big
);
/* Day 2 : Challenge start
 QUESTION NO 4
 Famous quote: find a quote from a famous person you admire.print the quote and the name of its author
 Your output should look something like the following .
"Albert Einstein once said,"A person who never made a mistake never tried anything new."*/
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said,"${quote}"`);
/*Question 5:
 Famous Quote 2: Repeat exercise 1, but this time store the famous person name in a variable called famous_person.Then compose
 your message and store it in a new variable called message.Print your message.*/
let Quote = "A person who never made a mistake never tried anything new.";
let famouse_person = "Albert Einstein";
let message = `${famouse_person} once said,"${Quote}"`;
console.log(message);
/* Question no 6:
  Stripping Names: store a perosn name, and include some whitespace characters at the beginning and end of the name.
 use "\t"(tab) and "\n"(newline), at least once.Print the name once ,so the whitespace around
 the name is displayed.then print the name after stripping the white spaces.*/
let PersonName = "\n\t Victor John \t\n";
console.log(PersonName);
let stripped = PersonName.trim();
console.log(stripped);
/* Day 3 : start challenge
Question 7 :
  Number Eight: Write addition,subtraction,multiplication and division operations that each result in the number 8.
 enclose your operation in print statement.
 question 8 :
 you should create four lines that look like this console.log(5+3). your output should simply be four lines with the number 8 appearing
 once on each line.*/
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
/* Question 9 :
 Favourite Number: store your favorite number in a variable.Then, using that variable,creat a message
 that reveals your favorite number. Print that message.*/
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}`);
// Day 4: challenge start:
/* Question no 10
 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are
  straightforward at this point, just add your name and the current date at the top of each program file.
   Then, write one sentence describing what the program does.*/
// Name : Kristina
// Date : 23/5/2024
// learning typescript
let myName = "Victor";
let lastName = "john";
console.log(`My name is ${myName} ${lastName}`);
/* Question no 11:
Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing
each element in the list, one at a time.*/
let friends = ["ROOMA", "ROHAN", "SAWARA", "ASAD", "JOHN"];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
/* Question no 12:
Greeting: used the array from  Exercise 11 , instead of just printing each person's name.
 print a message to them. The text of each message should be the same,for each person ,but personalized with their name.*/
let myFriends = ["Rooma", "Rohan", "Sawara", "Asad", "shahnzay"];
let messages = `Best Of Luck `;
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i] + " " + messages);
}
// Day 5
/*Question 13:
 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
  and make a list that stores several examples. Use your list to print a series of statements about these items,
   such as “I would like to own a Honda motorcycle.”*/
let transport = ["Civic", "Honda", "Suzuki", "Bike"];
for (let i = 0; i < transport.length; i++) {
    console.log(`I would like to own a ` + transport[i]);
}
/*Question 14:
 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print
  a message to each person, inviting them to dinner.*/
// let guestList: string[] = ["Amair", "Ahsan", "Ali", "Junaid"];
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `Respected Sir: \n${guestList[i]} We invite you on dinner tommorrow.`
//   );
// }
/* Question 15:
 Changing Guest List: One of your guests can't make it to the dinner,so you need to send out
 a new set of invitations with a replacement guest.*/
//  let guest_List: string[] = ["Amair", "Ahsan", "Ali", "Junaid"];
//  let guestNotComing = "Ali"
//  console.log(`${guestNotComing} can't make it to the dinner`);
//  let newGuest = "Victor"
//  guest_List[2] = newGuest
//  for (let i = 0; i < guest_List.length; i++) {
//   console.log(
//     `Respected Sir: \n${guest_List[i]} We invite you on dinner tommorrow.`
//   );
// }
// Day 6
/* Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.*/
// let moreGuests: string[] = ["Amair", "Ahsan", "Victor", "Junaid"];
// console.log("\n Good news ,We found a big table");
// // invite more guests
// moreGuests.unshift("Rizwan", "Naseem");
// moreGuests.push("Shaheen")
// for (let i = 0; i < moreGuests.length; i++) {
//   console.log(
//     `Respected Sir: \n${moreGuests[i]} We invite you on dinner tommorrow.`
//   );
// }
/* Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite
 two guests.*/
let shrinkGuestList = [
    "Amair",
    "Ahsan",
    "Victor",
    "Junaid",
    "Rizwan",
    "Naseem",
    "Shaheen",
];
console.log("Unfortunately, I can only invite two people for dinner.");
while (shrinkGuestList.length > 2) {
    let remove_guest = shrinkGuestList.pop();
    console.log(`Sorry Sir:${remove_guest} you ae not invited for dinner.`);
}
for (let i = 0; i < shrinkGuestList.length; i++) {
    console.log(` Respected Sir ${shrinkGuestList[i]}  you are still invited on tomorrow dinner.`);
}
shrinkGuestList.splice(0, shrinkGuestList.length);
console.log(shrinkGuestList);
/*Question 18:
Seeing the World: Think of at least five places you’d like to visit.*/
let places = ["Ameriza", "France", "Bangladesh", "Dubai", "Canada"];
console.log(`original: ` + places);
console.log(`copy: ` + [...places].sort());
console.log(`original: ` + places);
console.log(`copy: ` + [...places].sort().reverse());
console.log(`copy: ` + [...places].sort().reverse());
console.log(`original: ` + places.sort());
console.log(`original: ` + places.sort().reverse());
// Day 7
/* Question no 19:
 Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people
 you are inviting to dinne.*/
let invitedGuestList = ["Amair", "Ahsan", "Ali", "Junaid"];
console.log(`We had finally invited ${invitedGuestList.length} guests.`);
/* Question 20:
 Think of something you could store in an array. For example, you could make a list of mountains,
  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing
  these items.*/
let countriesName = ["AMERICA", "CANADA", "ITLAY", "CHINA", "TURKEY"];
console.log("list of countries:");
for (let top of countriesName) {
    console.log(top);
}
/* Question 21:
  Think of something you could store in a TypeScript Object. Write a program that creates Objects containing
  these items.*/
let book = {
    name: "Harry Potter",
    publishIn: 2007,
    price: 2000,
};
console.log(`Book Info: Name: ${book.name} , PublishIn: ${book.publishIn} ,price ${book.price}`);
// Day 8
/*Question 22: Intentional Error: Try to produce an array index error in one of your programs.
Correct the error before finishing.*/
let array = ["AMAN", "SHAHEEN", 7, 4, 2, "JOHNSON"]; // check by net
console.log(array[5]);
/* Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.*/
let Car = "subaru";
// test 1 equalitiy camparison
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == "subaru");
// test 2 strict equality camparison
console.log("Is car === 'subaru'? I predict True.");
console.log(Car === "subaru");
// test 3 Inequality camparison
console.log("Is car != 'subaru'? I predict False.");
console.log(Car != "subaru");
// test 4 strict inequality camparison
console.log("Is car !== 'subaru'? I predict False.");
console.log(Car !== "subaru");
// test 5 less then comparison
console.log("Is car < 'subaru'? I predict False.");
console.log(Car < "subaru");
// test 6 Greater than camparison
console.log("Is car > 'subaru'? I predict False.");
console.log(Car > "subaru");
// test 7 less then or equal camparison
console.log("Is car <= 'subaru'? I predict true.");
console.log(Car <= "subaru");
// test 8 greater then or equal to
console.log("Is car >= 'subaru'? I predict False.");
console.log(Car >= "subaru");
// test 9 checking truthness
console.log("Is car? I predict True");
console.log(Car);
// test 10 checking falseness
console.log("Is car? I predict False");
console.log(!Car);
/* Question 24:
 More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.*/
// Equality with strings
let car = "subaru";
let age = 22;
let number = [1, 2, 3, 4];
// string test
//test 1 equality
console.log("Is car == 'subaru'? I predict true.");
console.log(car == "subaru"); //
// test 2 strict inequality
console.log("Is car === 'subaru'? I predict false.");
console.log(car === "subaru");
// test 3 inequality
console.log("Is car != 'toyota'? I predict true.");
console.log(car != "toyota");
// test 4 inequality
console.log("Is car != 'subaru'? I predict false.");
console.log(car != "subaru");
// lowercase function tests
// test 5 lower conversion
console.log(" Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == "subaru");
//test 6 lowercase conversion
console.log(" Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());
// numerical tests
// test 7 equallity
console.log("Is age == 22? I predict true.");
console.log(age == 22);
// test  8 in equality
console.log("Is age != 27? I predict true.");
console.log(age != 27);
// test 9 greatter than
console.log("Is age > 27? I predict false.");
console.log(age > 27);
//test 10 less than or equal
console.log("Is age <= 22? I predict true.");
console.log(age <= 22);
// logical operator
// test 11 AND
console.log("Is age > 20 && < 27 ? I predict true.");
console.log(age > 20 && age < 27);
// test 12 OR
console.log("Is age > 27 || < 18 ? I predict false.");
console.log(age > 27 && age < 18);
// array tests
// test 13 in array
console.log("Is 3 in numbers? I predict true.");
console.log(3 in number);
// test 14 not in a array
console.log("Is 5 in numbers? I predict false.");
console.log(5 in number);
// Day 9
/*Question 25:
 Alien Colors: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to
         a variable called alien_color.*/
let alienColour = "green";
if (alienColour === "green") {
    console.log("The player just earned 5 points.");
}
// the version that fails will have no output
alienColour = "red";
if (alienColour === "green") {
    console.log("The player just earned 5 points.");
}
/* Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.*/
let alien_Colour = "Yellow";
if (alien_Colour == "Yellow") {
    console.log("The player just earned 5 points for shot the alien.");
}
else {
    console.log("The player just earned 10 points");
}
// Secound version
if (alien_Colour == "blue") {
    console.log("Alien color is blue");
}
else {
    console.log("I am come from Else statement.");
}
/*uestion 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.*/
let AlienColor = "green";
//if alien is green print message that the player earned 5 points.
if (AlienColor == "green") {
    console.log("The player just earned 5 points.");
}
else if (AlienColor == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (AlienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour");
}
// version 2
// if alien is yellow print message that the player earned 10 points.
AlienColor = "yellow";
if (AlienColor == "green") {
    console.log("The player just earned 5 points.");
}
else if (AlienColor == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (AlienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour");
}
// version 3
// if alien is red print message that the player earned 15 points
AlienColor = "red";
if (AlienColor == "green") {
    console.log("The player just earned 5 points.");
}
else if (AlienColor == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (AlienColor == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select right colour");
}
// Day 10
/* Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.*/
let Age = 28;
if (age < 2) {
    console.log("The person is a baby.");
}
// if the person is at least 2 year old but less than 4, print a message the person is toddler
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// if the person at least 4 year old but less then 13,print a message a person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// if the person is at least 13 year old but less then 20, print a message the person is teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// if the person is at least 20 year old but less then 65, print a message the person is adult.
else if (age >= 20 && age < 65) {
    console.log("The person is a adult.");
}
// if the person age is 65 or older year print a message the person is an elder.
else {
    console.log("the person is an elder.");
}
/*Question 29:
Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.*/
let favoriteFruits = ["Mango", "Apple", "Banana"];
// write a  5 series of if statement
if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mango!");
}
if (favoriteFruits.includes("Apple")) {
    console.log("I really like Apple!");
}
if (favoriteFruits.includes("Banana")) {
    console.log("I really like Banana!");
}
if (favoriteFruits.includes("Orange")) {
    console.log("I really like Orange!");
}
if (favoriteFruits.includes("Cherry")) {
    console.log("I really like Cherry!");
}
/* Question 30: Hello Admin: Greet users differently, especially 'admin'.*/
let users = ["sana", "hina", "aman", "eric", "admin"];
// printing message
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
// Day 11 Challenge:
// Question 31: No Users: Ensure your user list isn’t empty.
let userNames = ["ameen", "ali", "sana", "waniya", "admin"];
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    userNames = [];
    console.log("all user names have been removed" + " " + userNames.length);
}
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
let currentUsers = ["AshWerya", "SanjAna", "Ruhi", "RaMan", "John"];
let newUsers = ["Bilal", "Raman", "william", "Jamas", "Ruhi"];
newUsers.forEach((newUsername) => {
    let lowerCase = newUsername.toLowerCase();
    if (currentUsers.map((c_user) => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. Please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is avaiable`);
    }
});
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// loop through the array
for (let num of numbers) {
    let ordinalEnding;
    if (num == 1) {
        ordinalEnding = "st";
    }
    else if (num == 2) {
        ordinalEnding = "nd";
    }
    else if (num == 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}
// Day 12 Challenge:
// Question 34:
//  Pizzas: Share your favorite pizzas and express your love for them.
let pizzas = ["Pepperoni", "Chessy", " Tika Pizza"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// add a line at end of your program,i really love pizza!
console.log(`I really love pizza!`);
// Question 35:
//   Animals: Highlight animals with a common trait.
let Animals = ["Cat", "Dog", "Rabbit"];
// print the for loop to print the name of each animal
for (let Animal of Animals) {
    console.log(`A ${Animal} would make a great pet.`);
}
// printing message
console.log(`Any of these animals would make a great pet!`);
//Question 36: T-Shirt: Create a function for customizing t-shirts.
function makeShirt(size, text) {
    console.log(`Creating a ${size} shirt with a message: ${text}`);
}
// call function
makeShirt("large", "learning Typescript");
makeShirt("small", "learning javascript");
makeShirt("medium", "Best of Luck");
// Day 13 Challenge:
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "large", text = "I love typescript.") {
    console.log(`Creating a ${size} shirt with a message: ${text}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love Javascript.");
// Question 38: Cities: Describing cities with a function.
function describeCity(city, country = "Default Country.") {
    // print message
    console.log(`${city} is in ${country}`);
}
// call function for three different cities
describeCity("Karachi");
describeCity("Lahore");
describeCity("Islamabad");
// Question 39: City Names: Formatting city-country pairs.
function city_country(city, country) {
    // use return
    return `${city} ,${country}`;
}
// call function with at least three city-country pair.
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Delhi", "India"));
console.log(city_country("Toranto", "Canada"));
// Day 14 Challenge:
// Question 40: Album: Create objects for music albums.
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum("Artist 1", "Album Title 1");
console.log(album1);
let album2 = makeAlbum("Artist 2", "Album Title 2");
console.log(album2);
let album3 = makeAlbum("Artist 3", "Album Title 3", 15);
console.log(album3);
// Question 41: Magicians: Display magician names from an array.
let magician = ["Domnic", "Thomas", "Herry", "Aleina"];
function showMagicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
showMagicians(magician);
// Question 42: Great Magicians: Add "the Great" to magician names.
let magicians = ["Domnic", "Thomas", "Herry", "Aleina"];
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magicians[i] = "The Great " + magiciansArray[i];
    }
}
function showMagician(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
make_great(magicians);
showMagicians(magicians);
// Day 15 Challenge:
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let Magicians = ["Domnic", "Thomas", "Herry", "Aleina"];
function copyArray(array) {
    return [...array];
}
function makeGreat(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = "The Great " + magiciansArray[i];
    }
}
function show_Magician(Magicians) {
    Magicians.forEach((element) => {
        console.log(element);
    });
}
const copyMagiciansArray = copyArray(Magicians);
makeGreat(copyMagiciansArray);
console.log("\n\nThis is a original array");
show_Magician(Magicians);
``;
console.log("\n\nThis is a modified copy of the array");
show_Magician(copyMagiciansArray);
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function makeSandwich(items) {
    console.log("\nMaking your sandwich with the ingredients:");
    items.forEach((element) => console.log("- " + element));
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["cucumber", "tomato", "cheese"]);
makeSandwich(["lettuce", "butter"]);
makeSandwich(["cucumber", "tomato", "lettuce"]);
// Question 45: Cars: Create detailed car objects with flexible properties.
function storeCarInfo(manufacturer, modelName, ...rest) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...rest),
    };
    return carInfo;
}
let Information = storeCarInfo("Toyota", "Civic", { color: "White" }, { features: ["Navigation", "Automatic Gear"] });
console.log(Information);
// Day 16 Challenge:
/* Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
 and a method describe() that logs a sentence about the laptop.*/
let laptop = {
    make: "HP",
    model: "hp 15",
    year: 2021,
    describe: function () {
        console.log(`the detail of my laptop is: ${laptop.year},${laptop.make},${laptop.model}`);
    },
};
laptop.describe();
/*Question 47:
 Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties
 make, model, and year, use array destructuring to assign the first and second laptops to variables. Then,
  log these variables.*/
let laptops = [
    { make: "Apple", model: "Macbook i7", year: 2022 },
    { make: "Hp", model: "x245", year: 2020 },
    { make: "Dell", model: "E7450", year: 2021 },
];
let [laptop_1, laptop_2] = laptops;
console.log(laptop_1);
console.log(laptop_2);
//   let laptops = [
//     { make: "Dell", model: "XPS 15", year: 2021 },
//     { make: "Apple", model: "MacBook Pro", year: 2020 },
//     { make: "HP", model: "Spectre x360", year: 2021 }
// ];
// let [laptop1, laptop2] = laptops;
// console.log(laptop1);
// console.log(laptop2);
//Question 48:
/* Combining Arrays with Spread Operator: Suppose you're comparing prices of two
 different sets of laptops. Use the spread operator to combine these arrays into a single array sorted
  in ascending order, then log the result.*/
let laptopPrices_1 = [1500, 1900, 1600];
let laptopPrices_2 = [2000, 2400, 2750];
let combinedPrices = [...laptopPrices_1, ...laptopPrices_2].sort((a, b) => a - b);
console.log(combinedPrices);
// Day 17 Challenge:
//Question 49:
/* Function with Rest Parameters: Write a function that takes a rest parameter
representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function myHobbies(...hobbies) {
    hobbies.forEach((Hobbies) => {
        console.log(`I really enjoy ${Hobbies}`);
    });
}
myHobbies("horse ridding", "reading books", "writting articals");
// Question 50:
/* Multiline Template Literals: Use template literals to create a multiline string that describes
  your ideal day. Include at least three different activities.*/
let myIdealDay = `My ideal day:
1. Wake up early in the morning and eat breakfast.
2. Complete my home work.
3. Playing games with my friends.`;
console.log(myIdealDay);
// Question 51:
/* Refactoring to Arrow Functions: Take a simple function that calculates the area
  of a rectangle and refactor it into an arrow function.*/
// simple function
function calculateArea(width, height) {
    return width * height;
}
// Refactoring to Arrow Function
let calculateAreaArrow = (width, height) => width * height;
// log to find area
console.log(calculateAreaArrow(4, 9));
//Day 18 Challenge:
// Question 52:
/* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
Include its brand, model, and other key features like how much storage it has, the size of its screen, and
how long its battery lasts.*/
// Make a Smartphone Object
let smartPhone = {
    make: "Infinix",
    model: "HOT 7 pro",
    Features: {
        storage: "64 GB",
        screenSize: "6.8 Inches",
        battery: "24 Hours",
    },
};
console.log(smartPhone);
//Question 53:
/* Pulling Apart a Nested Object: Imagine you have a list inside another list
 that shows what a computer programmer knows, like coding languages, tools, and software frameworks.
  Find a way to get three specific skills from this list and show them.*/
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Node js"],
    tools: ["Git", "Visual studio code", "Docker"],
};
let { languages, frameworks, tools } = developerSkills;
// log languages with their framework and tools
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
//Question 54:
/* Making Flexible Object Keys: Learn how to set up a list where you can change
 the name of each section based on what you need at that moment, like adjusting labels based on user choices.*/
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("Them", "Bright");
console.log(userPreference);
// Day 19 Challenge:
// Question 55:
/* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where
 each number is twice its original value.*/
let numbers_1 = [1, 2, 3, 4, 5];
let doubleNumbers = numbers_1.map((numbers_1) => numbers_1 * 5);
console.log(doubleNumbers); // log to view double number
// // Question 56:
/* Keep Only Strings: Given a mix of different types of items, make a new
 list that has only the words.*/
// mixed array
let mixedArrays = [true, 3, "Strawberry", false, "Grapes", 2, "Kiwi"];
// filter string items from the mixed array
let stringArray = mixedArrays.filter((item) => typeof item === "string");
console.log(stringArray); // log to view strings array
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
//  find average grade
let listOfGrades = [65, 74, 77, 61, 82];
let averageGrades = listOfGrades.reduce((total, listOfGrades) => total + listOfGrades, 0) /
    listOfGrades.length;
console.log(averageGrades); // log to view average
//Day 20 Challenge:
//Question 58:
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
//  finding the average of four scores
console.log(averageScore(76, 65, 68, 80)); // 
// Question 59: 
/* Add a Special Number: Make a program that creates custom adders. These adders can add a
specific number to any other number you give them later.*/
//  add special number 
function Add(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addTen = Add(10);
// add number 
console.log(addTen(35));
//Question 60:
/* Self-Running User Profile: Create a quick, self-setup profile for a user that can
 tell you the user's name and age.*/
// user profile
let userProfile = (function () {
    let name = "Victor";
    let age = 34;
    return {
        info: function () {
            console.log(`My name is ${name} , and my age is ${age}`);
        },
    };
})();
// call function to view user info 
userProfile.info();
export {};

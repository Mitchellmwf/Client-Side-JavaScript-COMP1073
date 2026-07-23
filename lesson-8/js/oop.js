const output = document.getElementById('output');

/* STEP 1a: Create a new object using a regular function */
function createNewCar(make, model, year) {
    let obj = {};
    obj.make = make;
    obj.model = model;
    obj.year = year;
}

/* STEP 1b: Use the console to create a new album object, and then invoke the function represented using .describe() */
let car1 = createNewCar('Toyota', 'Camry', 2020);

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - rewrite the above function, without returning anything. Capitalize the name of the function. */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.description = function() {
        return `This car is a ${this.year} ${this.make} ${this.model}.`;
    }
}

/* STEP 2b: Use the console to create a couple of different albums, using the 'new' keyword, and again invoking the .describe() method for each one */
let car2 = new Car('Honda', 'Civic', 2018);
output.textContent = car2.description();

/* STEP 3a: Build the complete constructor for the object Album (comment out the above functions first). Include album name, artist, year, number of tracks, and description (function). */



/* STEP 3b: Instantiate a new Album (or 2) based on the above constructor */


/* STEP 3c: Attempt to access the various properties of album2 or album3 using the console. */
// album2['name']
// album2['artist']
// album2.numTracks
// album2.year
/* STEP 3d: Invoke a method belonging to one of the album objects */
// album2.describe()
// album3.describe()

/* STEP 4a: Modify the describe method of the above Album constructor so that it returns a string. */
let car3 = new Object();

/* STEP 4b: Capture the description of one of the album objects and set it as the text for the paragraph on the page (see line 1 of this script). */
car.make = 'Ford';
car.model = 'Mustang';
car.year = 2021;

/* Step 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() method*/

/* Step 5a: Yet another approach is to use the create() method to create a new object, and then add properties and methods to it. Create a new object called 'person' using this approach, and add a name, age, and a function that outputs the name and age. */
let car4 = Object.create(car2);

car2.model = 'Accord'; //Changes car4 too
car4.year = 2022; //Does not change car2


/* Step 5b: Invoke the function that outputs the name and age of the person object in the console */

// That's it! Now on to the Lab...

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

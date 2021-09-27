class Vehicle
{
    // create constructor for make model and year
    constructor(make, model, year){
        // assign parameters to local variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // create info method to log to console
    Information(){
        // log info to console
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// create a new class that inherits from vehicle
class Cars extends Vehicle{
    // create another constructor and add doors
    constructor(make, model, year, doors){
        // use super to access parent class
        super(make, model, year);
        // set door to local variable
        this.doors = doors;
    }

    // create another info method
    Information(){
        // use super to access parent information method
        super.Information();
        // log doors to console
        console.log(`Doors: ${this.doors}`);
    }
}

// create a new car object
let myCar = new Cars('Honda', 'Civic', 2008, 5);
// send car object info to information method
myCar.Information();
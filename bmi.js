class BMI
{
    // constructor takes in two arguments and sets them to local variables
    constructor(height, weight){
        // local variable declaration
        this.height = height;
        this.weight = weight;
    }

    // create calculate bmi method
    calculateBMI() {
        // calculate bmi here
        let bmi = this.weight/(this.height**2); 
        // return answer
        return bmi;   
    }
}

// create a bmi object
let myBMI = new BMI(1.6, 60);
// invoke the calculate bmi method
let calc = myBMI.calculateBMI();
// log calc to console
console.log(calc);
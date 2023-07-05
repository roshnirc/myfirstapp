var height;
var weight;

function bmi(height,weight) {
    return (weight/(height**2));
}

var value=bmi(2,100);


(value<=18.5)?console.log("youre underweight")
: ((value<24.9)?console.log("youre okok")
: ((value<29.9)?console.log("youre overweight")
: console.log("youre obese")));

console.log('your BMI is-',value);



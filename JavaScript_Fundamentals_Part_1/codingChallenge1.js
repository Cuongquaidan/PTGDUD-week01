// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = markMass / (markHeight * markHeight)
let johnBMI = johnMass / (johnHeight * johnHeight)
let markHigherBMI = markBMI > johnBMI
console.log(markBMI)
console.log(johnBMI)
console.log(markHigherBMI)
//test with data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;
let markBMI2 = markMass2 / (markHeight2 * markHeight2)
console.log(markBMI2)
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2)
console.log(johnBMI2)
let markHigherBMI2 = markBMI2 > johnBMI2
console.log(markHigherBMI2)
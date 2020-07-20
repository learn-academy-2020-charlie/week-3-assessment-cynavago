// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


//a quick comment on the solution below. i found it online but to be honest, i had a hard time understanding the idea of recursion.
 
//declare a function that takes in a number 
const fibonacci = (num) => {
    //create a variable starting point
    let startPoint = [0, 1]
    //create a for loop with the index starting at 2
    for (i=2; i<num +1; i++){
        //push the index of 0-2 and add it to index 0-1? this is the part I don't understand. 
        startPoint.push(startPoint[i - 2] + startPoint[i -1])
    }
    //return the new array
    return startPoint
}

console.log(fibonacci(10));



//this is the equation I found online. recursive function.
//   function fibo(number) {
// 	var sequence = [1, 1];
// 	for (var i = 2; i < number; i++) {
// 		sequence[i] = sequence[i-1]+ sequence[i-2];
// 	}
// 	return sequence[number-1];
// }



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function that takes in an array
const onlyOdd = (array) => {
    //use map to go through each element in the array
   let onlyOddNums = array.map(value => {
        //check to see if the value typeof is a number
        if ((typeof value === "number") && (value % 2 != 0)){
            return value
        }
    })
    //get rid of undefined values in array
    let noUndefined = onlyOddNums.filter(value => value !== undefined)
    //sort in ascending order
    let numSort = noUndefined.sort((a, b) => a - b)
    return numSort
}

// console.log(onlyOdd(fullArr1));
// console.log(onlyOdd(fullArr2));



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//declare a function that takes in a string
const middLett = (string) => {
    //create a variable that divides the word by 2, round up, and minus 1. this will give us back the middle letter for odd lengths.
    let midIndex1 = ((Math.ceil(string.length / 2)) -1)
     //create a variable that divides the word by 2, round up. this will help us get one of the middle letters for even lengths.
    let midIndex2 = ((Math.ceil(string.length / 2)))
    //if the word length is odd, divide word length by 2 and round up to get charAt( that specific index)
    if ((string.length % 2) !== 0){
        return string.charAt(midIndex1)
    //else if the word length is even, divide word length by 2 and get charAt (that specific index) + 1 index
    } else if ((string.length % 2) === 0){
        return (string.charAt(midIndex1) + string.charAt(midIndex2))
    }
}


// console.log(middLett(middleLetters1));
// console.log(middLett(middleLetters2));



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//create a class called Sphere
class Sphere{
    constructor(){
        //create an area of 0 that will later be altered through a method
        this.area = 0
    }
    // create a method that finds the area of a sphere
    areaSphere(radius){
        this.area = 4 * Math.PI * (Math.pow(radius, 2))
    }

}

var sphere1 = new Sphere()
sphere1.areaSphere(1)

var sphere2 = new Sphere()
sphere2.areaSphere(35)

var sphere3 = new Sphere()
sphere3.areaSphere(505)

// console.log(sphere1);
// console.log(sphere2);
// console.log(sphere3);

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


//create a function that takes in an array
const accSum = (array) => {
    //if the array length is an empty array, return the empty array
    if(array.length === 0){
        return array
    }else{  
        //create a new variable with an empty array.
        let newArr = []
        //create a new variable that finds the value of the the accumulated sum of all the numbers.
        let lastSum = [array.reduce((a, b) => a + b)]
        array.reduce((a, b) => {
            //using reduce, push all the values of the array (a) into the new array
            newArr.push(a)
            // add all the numbers to the number in the following index (b)
            return (a + b)
        })
        // return the new array and add the last accumulated number at the end
        return newArr.concat(lastSum)
    }
}         

//quick note/question. I found this equation below which seems a lot faster and works to find the accumulating sum. however, I need help understanding it. why do we need three dots and an empty array at the end? those were the 2 parts I couldn't figure out.

// return array.reduce((a, b, i) => 
// [...a, b + (a[i-1] || 0)], [])

// console.log(accSum(numbersToAdd1));
// console.log(accSum(numbersToAdd2));
// console.log(accSum(numbersToAdd3));



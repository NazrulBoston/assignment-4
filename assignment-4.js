// // problem --> 1

// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "Please provide a number";
//     }
//     else if (number <= 0) {
//         return "Please provide a positive number";
//     }
//     else {
//         const cube = Math.pow(number, 3);
//         return cube;
//     }


// }
// console.log(cubeNumber(0))  // remove console before submit




// // problem --->2



// function matchFinder(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "Please provide a string"
//     }
//     else if (string1.includes(string2)) {
//         return true;

//     }
//     else {
//         return false;
//     }

// }

// // const str1 =(“John Doe”);
// // const str2 =( “ohn”);
// // const result = matchFinder(str1, str2);
// console.log(matchFinder("Peter Parker", "Pen"));




// // problem --->3

function sortMaker(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return "Invalid Input";
        } else if (arr[0] === arr[1]) {
            return "equal";
        } else {
            if (arr[1] > arr[0]) {
                newArray.unshift(arr[0]);
                newArray.unshift(arr[1]);
                return newArray;
            } else {
                return arr;
            }
        }
    }

}




const callSection = sortMaker([2, -2]);
console.log(callSection);




// problem --->4





// function findAddress(obj) {
// // let values = Object.values(obj)
// // return values;
// for(var i = 0; i < obj.length; i++){
    
// }


// }


// obj = {
//     street: 10,
//     house: '15A',
//     society: 'Earth Perfect'
// }

// findAddress(obj)
// console.log(findAddress(obj))


//problem --> 4
function findAddress(obj) {
const street = obj.street || "__"
const house = obj.house || "__"
const society = obj.society || "__"
return street + "," +house +","+society;
}




// problem --> 5


// function canPay(changeArray, totalDue) {
//  let sum = 0;
//  for ( let i = 0; i < changeArray.length; i++){
//     sum = sum + changeArray[i];
  
//  }
// if(changeArray.length === 0){
//     return "Please provide an array"
// }else if( sum >= totalDue){
//     return true;
// }else{
//     return false;
// }

// }


// console.log(canPay([1,2,7],10))
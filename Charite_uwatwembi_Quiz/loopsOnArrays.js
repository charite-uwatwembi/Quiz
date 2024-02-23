//Array Sum: Write a function that calculates the sum of all elements in an array.

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let result = sumArray([10, 20, 30])
console.log( `The sum of array is : ${result}`); 

console.log('----------Question 2------------');

//Even Numbers: Create a program that prints all even numbers from an array.
function printEvens(arr){
    let evens = [];
    for(let i=0 ; i< arr.length; i++){
       if(arr[i] % 2 === 0 ){
           evens.push(arr[i]);
       }
    }
   console.log(`The Even numbers are ${evens}`);
}
       
printEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log('----------Question 3------------');

//Array Reverse: Implement a function to reverse the elements of an array.
function reverseArr(arr){
    let start = 0;  
    let end = arr.length - 1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
     return arr;
}

console.log("Reversed Array is : ",reverseArr([1, 2, 3, 4]));

console.log('----------Question 4------------');

//Array Filter: Write a program that filters out all elements less than 10 from an array.
function filterArray(arr){
    let filteredArr = [];
    for(let i=0 ; i< arr.length; i++){
       if(arr[i] < 10 ){
           filteredArr.push(arr[i]);
       }
    }
   console.log(`All elements less than 10 are ${filteredArr}`);
}
       
filterArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log('----------Question 5------------');

//Array Average: Calculate and print the average of elements in an array.
function averageArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
    console.log(`The average of the given array is ${avg}`);
}
averageArray([ 2, 4, 6, 8, 10]);

console.log('----------Question 6------------');

//Array Search: Implement a function that searches for a specific element in an array and returns its index.
function searchArray(arr, element) {
    return arr.indexOf(element);
}

console.log(`Element '6' is at index ${searchArray([2, 4, 6, 8, 10], 6)}`);

console.log('----------Question 7------------');

//Duplicate Elements: Write a program to find and print duplicate elements in an array.
function findDuplicates(arr) {
    let duplicates = [];
    arr.forEach((element, index) => {
        if (arr.indexOf(element, index + 1) > -1 && duplicates.indexOf(element) === -1) {
            duplicates.push(element);
        }
    });
    console.log("Duplicate elements in the array are: ", duplicates);
}

findDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log('----------Question 8------------');


//Array Sorting: Sort an array of numbers in ascending order using any sorting algorithm.
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array in ascending order: ", sortedArray);

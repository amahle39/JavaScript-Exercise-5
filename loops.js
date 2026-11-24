// TODO: Create an array called numbers with values 1 through 5
let numbers = [1,2,3,4,5];

// TODO: Write a for loop that prints each number in the array
console.log("--- ALL numbers ---");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// TODO: Write a while loop that counts down from 5 to 1
console.log("--- Countdown 5 to 1 ---");
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

//TODO: Create a loop that prints only even numbers from the numbers array
console.log("--- Even numbers ---");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// TODO: Create a loop that calculates the sum of all numbers in the array
console.log("--- Sum ---");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log("Sum is:" + sum);
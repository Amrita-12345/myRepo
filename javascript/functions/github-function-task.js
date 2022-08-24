//square of a number
function square(a)
{
return a**2;
}
console.log("square of a numbeer is" + (square(2)));
//or you can write in 2nd way
function squareNum(num)
{
    return num**2;
}
let result=squareNum(4);
console.log("Square of a number is" +result);

//WAF to print your name, city, and hobby in a formatted manner
function info(name,city,hobby)
{
    console.log("Name :"+name+"\nCity :"+city+"\nHobby :"+hobby);
}
info("Amrita","Mumbai","Dancing");

//WAF to swap two numbers.

//INPUT: a = 10, b = 13
//OUTPUT: a = 13, b = 10

function swap(num1,num2)
{
    let temp=num1;
  num1=num2;
   num2=temp;
   console.log("Swapping num1=:"+num1+"\nnum2="+num2);
}
swap(10,13)

//WAF to print whether a number is even or odd.
function evenNum(a1)
{
    if(a1%2==0)
    {
        console.log(a1+" is even")
    }
    else
    {
        console.log(a1+".is odd")
    }
}
evenNum(5);
evenNum(4);

//Write a JavaScript function that reverses a number.
//Example x = 32245;
//Expected Output: 54223

 let newString="";
 function reverse(string)
 {
    for(let i=string.length-1;i>=0;i--)
    {
        newString=newString+string[i];
    }
    return newString;
}
 reverse("amrita");
 console.log(newString);

 //number is prime or not
 function prime(number){
    let isPrime = true;
    if(number == 1){
        console.log("1 is neither prime nor a composite number.");
    }else if(number>1){
        for(var i = 2; i<number; i++){
            if(number%i==0){
                isPrime = false;
                break;
            }
        }
    }

    if(isPrime){
        console.log(number+" is a prime number.");
    }else{
        console.log(number+" is not a prime number.");
    }
}
prime(9);

//number is armstrong or not
//153=1*1*1+5*5*5+3*3*3=1+125+27=153
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

//armstrong or not
let num = parseInt(prompt("Enter the number"));
function checkArmstrong(num){
    console.log(num)
   let Number = num;
    let digits = 0;
    // Finding the number of digits
    while(num > 0){
    digits = digits + 1;
    num = parseInt(num/10);
    }
    num = Number;
   let sum = 0;
    // calculating sum
    while(num > 0) {
    var digit = num%10;
    sum = sum + Math.pow(digit, digits);
    num = parseInt(num/10);
    }
    // checking sum with original number
    if(sum == Number){
    console.log(`${Number} number is armstrong number`)
 }
 else
 {
    console.log(`${Number} number is not armstrong number`)
     }
    }
checkArmstrong(num);

//passing the values
let person = {
    name: 'John',
    age: 25,
  };
  
  function increaseAge(obj) {
    obj.age += 1;
  
    // reference another object
    obj = { name: 'Jane', age: 22 };
  }
  
  increaseAge(person);
  
  console.log(person);
  
  
  
// Function to check if number

// is a krishnamurthy number
  
// Function to find Factorial 
// of any number
function factorial(n)
{
    let fact = 1;
      
    while (n != 0)
    {
        fact = fact * n;
        n--;
    }
      
    return fact;
}
// is krishnamurthy
function KrishnamurthyNumber(n)
{
    let sum = 0;
      
    // Storing the value in
    // other variable
    let temp = n;
    while (temp != 0)
    {
          
        // Calculate factorial of last digit
        // of temp and add it to sum
        sum = sum + factorial(temp % 10);
          
        // Integer Division
        // replace value of temp by temp/10
        temp = parseInt(temp / 10);
    }
      
    // Check if number is krishnamurthy
    return sum == n;
}
  
// Driver code
let n = parseInt(prompt("Enter the number"));
if (KrishnamurthyNumber(n))
    console.log("Given number is  a krishnamurthy number");
else
console.log("Given number is not a krishnamurthy number");
  
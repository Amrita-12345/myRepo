function Calculator()
{
   this.read=function()
   {
this.num1=+prompt("Enter the First number");
this.num2=+prompt("Enter the second number");
   };
   this.sum=function()
   {
    return this.num1 + this.num2;
   };
   this.mul=function()
   {
    return this.num1*this.num2;
   };
}
let calculate = new Calculator();
calculate.read();
alert( "Sum of given numbers" +" "+ calculate.sum() );
alert( "Multiplication of given numbers" +" "+ calculate.mul() );

//Accumilator
function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt("Enter the new number");
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);
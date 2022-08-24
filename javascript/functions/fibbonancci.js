//first n nos.
   let n=parseInt(prompt("Enter the no. for fibonnacci sequence"));
    let a=0;
    b=1;
    let output;
    console.log(a);
    console.log(b);
    for(let i=1;i<=n;i++)
    {
  output=a+b;
a=b;
b=output;
console.log(output);

    }
    
//adddition upto number 13
let num=13;
let n1=0;
let n2=1;
let result;

result=n1+n2;
console.log(n1)
console.log(n2);


while(result<num)
{
    console.log(result);
    n1=n2;
n2=result;
result=n1+n2;
}

//with functon fibo series upto the no.
function fiboSeries(num1)
{

    let a1=0;
    b1=1;
    let output1;
    console.log("Fibonacci Series:")
    console.log(a1);
    console.log(b1);
    for(let i=1;i<=num1;i++)
    {
  output1=a1+b1;
a1=b1;
b1=output1;
console.log(output1);

    }

}
    fiboSeries(6);
	
	//or
	let num = prompt("enter your range")
function fibbonacci(num)
{
    let a = 0;
    let b = 1;
    let c;
    console.log("the series are:");
    console.log(a);
    console.log(b);
    for(let i=1; i<=num; i++)
    {
        c = a + b;
        a = b;
        b = c;
        console.log(c)
    }
    
}
fibbonacci(num);

 //with function fibo series upto addtioton 13  

function fiboSeries(number)
{
    //let num=13;
let n1=0;
let n2=1;
let result;

result=n1+n2;
console.log(n1)
console.log(n2);


while(result<=number)
{
    console.log(result);
    n1=n2;
n2=result;
result=n1+n2;
}
}
fiboSeries(21)

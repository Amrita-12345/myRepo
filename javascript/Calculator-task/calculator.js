i=0;
while(i<=4)
{
alert(" Menu\n1. Addition\n2. Substraction\n3. Multiplication\n4. Division\n5. Quit");
let userChoice = parseInt(prompt("Choose an option [1-5]"));
let number1,number2;
switch (userChoice) 
{
    case 1:
        number1 = parseInt(prompt("Enter the first number"));
        number2 = parseInt(prompt("Enter the second number"));
        let sum=number1+number2;
        alert(`Additon of given two nos. ${sum}`);
        break;
    case 2:
        number1 = parseInt(prompt("Enter the first number"));
        number2 = parseInt(prompt("Enter the second number"));
        let sub=number1-number2;
        alert(`Substracion of given two nos. ${sub}`);
        break;
    case 3:
        number1 = parseInt(prompt("Enter the first number"));
        number2 = parseInt(prompt("Enter the second number"));
        let mul=number1*number2;
        alert(`Multiplication of given two nos. ${mul}`);
        break;
    case 4:
       number1 = parseInt(prompt("Enter the first number"));
       number2 = parseInt(prompt("Enter the second number"));
       let div=number1/number2;
       alert(`Addion of given two nos. ${div}`);
       break;
    case 5:
       alert("Goodbye");
       break;
       default:
        alert("Invalid option");
    }
       
    i++;
}



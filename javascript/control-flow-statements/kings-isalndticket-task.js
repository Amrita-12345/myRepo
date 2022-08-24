// King’s Island needs a program for its admission booths. When visitors to the park come up to the booth to
// purchase their tickets, the worker uses this program to figure out how much to charge them. You will write
// this program.
/*
In the first version of the program, there is one ticket price of $30.00. Senior citizens (age ≥ 65) are given a
50% discount. Write this program as follows. Import your Scanner. Declare the needed variables (the person’s
age, the base price of a ticket ($30) and the price you will charge). Input the user’s age, compute the price of
the ticket and output the result in a formatted way (that is, using a $). You do not need to use DecimalFormat
for this part of the program but you will as you enhance it so you might want to set this up now. Save, compile
and run your program a few times, asking the user for different ages such as 10, 50, 65, 80 and 0.
*/
/*let baseprice=2370;
let price;
for(i=1;i<=5;i++)
{
    let age=parseInt(prompt("Enter your age"));
if(age>=65)
{
    price=(2370*(50/100));
    alert(`Price of ticket is ${price}`);
    }
else
{
    alert(`Price of ticket is ${baseprice}`);
}
}*/

let baseprice=500;
let baseprice1=700;
let price;
let age;
for(i=1;i<=12;i++)
{
    
    age=parseInt(prompt("Enter your age"));
    var country=prompt("Enter your country");
    // if(age==null)
    // {alert("Age is not entered")}
    if(age>=65 && country.match(/Warren/i))
   {
         price=((baseprice)*50/100);
         alert(`Price of ticket is ${price}`);
   }
   else if(age>=65 && country.match(/Campbell/i))
   {
         let price1=((baseprice1)*92.5/100);
          price=baseprice1-price1;
         alert(`Price of ticket is ${price}`);
   }
   else if(age>=65)
{
    price=(baseprice1*(50/100));
    alert(`Price of ticket is ${price}`);
    }
    else if(age<=0)
    {
        alert("Invalid age");
    }
    else if(age<5)
    {
        alert("Ticket is free");
    }
    else if(country.match(/Warren/i))
    {
        price=baseprice;
        alert(`price is ${price}`);
    }
    else if(age<14 && country.match(/Clermont/i))
   {
         price=((baseprice1)*18/100);
         alert(`Price of ticket is ${price}`);
   }
   
else
{
    alert(`Price of ticket is ${baseprice1}`);
}
}
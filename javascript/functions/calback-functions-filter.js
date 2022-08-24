function filter(my_array,callback)
{
let num=[];
for(const number of my_array)
{
    if(num%2==0) 
    {
    return console.log("even no");
    } 
      else 
      {
        console.log("odd no");
      }
}
let evenNumbers=filter(my_array);
callback(num[])
}

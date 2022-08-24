function myfilter(my_array,callback)
{
    let array=my_array.filter(Even)
    
    console.log(array);


    
}
function Even(num)
{
    return num%2==0?true:false;
}
myfilter([4, 5, 6, 7, 8], Even);
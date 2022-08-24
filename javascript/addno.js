let no1 = parseInt (prompt("Enter your first number"));
let no2= parseInt (prompt("Enter your second number"));

if(Number(no1) && Number(no2))
    {
        let sum=no1+no2;
        console.log("the result is:"+sum);
    }
    else{
        alert("Can not add incompatible types")
    }
    /*let no1=23;
    let no2=23;
    let sum=no1+no2;
    console.log(sum);*/
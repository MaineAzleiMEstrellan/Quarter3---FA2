function inputs()
{
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
   return [num1,num2];
}

function addition (num1,num2)
{
    var sum=num1+num2;
    return sum;
}

function subtraction (num1,num2)
{
    var diff=num1-num2;
    return diff;
}

function division (num1,num2)
{
    var quot=num1/num2;
    return quot;
}

function multiplication (num1,num2)
{
    var prod=num1*num2;
    return prod;
}

function modulo (num1,num2)
{
    var rem=num1%num2;
    return rem;
}

function displayresult(operation)
{
    var result;
    var term;
    var [num1,num2]=inputs();

    if (operation=='+')
    {
        result=addition(num1,num2);
        term="sum";
    }
    else if(operation=='-')
    {
        result=subtraction(num1,num2);
        term="difference";
    }
    else if(operation=='*')
    {
        result=multiplication(num1,num2);
        term="product";
    }
    else if(operation=='/')
    {
        result=division(num1,num2);
        term="quotient";
    }
    else if(operation=='%')
    {
        result=modulo(num1,num2);
        term="remainder";
    }
    
    document.getElementById("results").innerHTML="The "+term+" of "+num1+" and "+num2+" is "+result+".";
}
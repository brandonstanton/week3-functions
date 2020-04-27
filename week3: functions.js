function sum(cars1, boats2){
    return cars1 + boats2
}
var result =  sum(12,15)
console.log(result)


function max(cars1, boats2, trains3){
    if(cars1 > boats2 && cars1 > trains3)
        return cars1;
    else if (boats2 > cars1 && boats2 > trains3)
        return boats2;
    else if (trains3 > cars1 && trains3 > boats2)
        return trains3;
}

var result = max(12,15,6)
console.log(result)

function num(n){
    if(n % 2 == 0)
        return true;
    else if (n % 2 == 1)
        return false;
}

var result = num(28)
console.log(result)

function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique_char("fatfoxjumps"));
    




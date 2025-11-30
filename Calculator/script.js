function Input(char)
{
    
    if(char === "=")
    {
      // const exp = document.getElementById("Input").value= "result";
      try{
        document.getElementById("Input").value = eval(
        document.getElementById("Input").value
        );
    }
    catch(error){
        alert("invalid expression ");
        document.getElementById("Input").value="";
    }
    }
    else if(char=== "C")
    {
        document.getElementById("Input").value="";
    }
    else
    {
       let exp =  document.getElementById("Input").value;
       exp = exp+char;
        document.getElementById("Input").value = exp;
    }
}
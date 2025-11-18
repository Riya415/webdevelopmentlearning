function login()
{
    console.log("login button clicked");
    const em  = document.getElementById("LoginEmail").value;
    const ps  = document.getElementById("LoginPassword").value;

    console.log(em,ps);
    alert("login done ")
    

   document.getElementById("LoginEmail").value=" ";
   document.getElementById("LoginPassword").value=" ";

}

function Registration()
{
        console.log("Registration button clicked");
        const name  = document.getElementById("RegistrationName").value;
        const email  = document.getElementById("RegistrationEmail").value;
        const pass = document.getElementById("RegistrationPassword").value;
        const conpass = document.getElementById("RegistrationConfirmPassword").value;
        console.log(name, email, pass ,conpass);
        


}
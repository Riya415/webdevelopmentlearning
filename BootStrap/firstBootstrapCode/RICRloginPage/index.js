function submit() {
  
  console.log("Submit Done");

  alert("Are You Sure");


  const name = document.getElementById("personName").value;
  const number = document.getElementById("contactNumber").value;
  const email = document.getElementById("email").value;
  const qualification = document.getElementById("qualification").value;
  const college = document.getElementById("collegeName").value;
 const year = document.getElementById("year").value;
  const branch = document.getElementById("branch").value;


  console.log("Student Name : " + name);
  console.log("Phone Number : " + number);
  console.log("Email : " + email);
  console.log("Qualification : " + qualification);
  console.log("College/School : " + college);
  console.log("Year : " + year);
  console.log("Branch : " + branch);


  alert("Submitted Successfully !");

  
  document.getElementById("personName").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("qualification").value = "";
  document.getElementById("collegeName").value = "";
  document.getElementById("year").value = "";
  document.getElementById("branch").value = "";
}
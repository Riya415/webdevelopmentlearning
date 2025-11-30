function submit() {

 
  let selectedBatchTiming = [];
  document.querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectedBatchTiming.push(element.value);
    });

  console.log("Selected Batches:", selectedBatchTiming);

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;

  const qualification = document.getElementById("qualification").value;
  const score = document.getElementById("score").value;

  const course = document.getElementById("course").value;

  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pinCode = document.getElementById("pinCode").value;

  const guardianName = document.getElementById("guardianName").value;
  const guardianNumber = document.getElementById("guardianNumber").value;

  const coachingInfo = document.getElementById("coachingInfo").value;

  console.log({
    fullName,
    email,
    mobile,
    dob,
    qualification,
    score,
    course,
    selectedBatchTiming,
    address,
    city,
    pinCode,
    guardianName,
    guardianNumber,
    coachingInfo
  });
}

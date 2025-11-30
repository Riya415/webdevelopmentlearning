function start() {
  console.log("Game started");
  document.getElementById("Roll1").disabled = false;
  document.getElementById("Restart").disabled = false;
  document.getElementById("Start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1Play() {
  console.log("Player1Playing");
  let Score = Number(document.getElementById("p1sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  if (DF == 6) {
    document.getElementById("Roll1").disabled = true;
    document.getElementById("Roll2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1sc").innerText = Score;
  }
}

function p2Play() {
  console.log("Player2Playing");
    let Score = Number(document.getElementById("p2sc").innerText);

    const DF = Math.floor(Math.random() * 6) + 1;

    if (DF == 6) {
      document.getElementById("Roll1").disabled = false;
      document.getElementById("Roll2").disabled = true;
    } else {
      Score = Score + DF;
      document.getElementById("p2Ssc").innerText = Score;
    }
  }
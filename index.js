let playerCount;

// Click for generate table
document
  .querySelector(".generateTablesClass")
  .addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector(".numberOfPlayersInputClass").value > 1) {
      playerCount =
        document.querySelector(".numberOfPlayersInputClass").value / 2;
      // Display Changes :
      document.querySelector(".mainHeading").style.color = "white";
      document.querySelector(".numberOfPlayersInputLabelClass").style.color =
        document.querySelector(".firstTableHeading").style.color = "white";
      document.querySelector(".secondTableHeading").style.color = "white";
      document.querySelector(".mainContainerOne").style.backgroundImage =
        "url(imgs/court2.jpg)";
      document.getElementById("teamForm").style.display = "block";
      generateTables();
    }
  });

// Table Generate Function :
function generateTables() {
  const playerRowsContainer = document.getElementById("playerRows");

  playerRowsContainer.innerHTML = "";

  for (let i = 0; i < playerCount; i++) {
    const row = document.createElement("tr");
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = `Team A - Player - ${i + 1}`;
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = `Team B - Player - ${i + 1}`;

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    cell1.appendChild(input1);
    cell2.appendChild(input2);

    row.appendChild(cell1);
    row.appendChild(cell2);

    playerRowsContainer.appendChild(row);
  }
}

// Team Generate Function :
function generateTeams() {
  document.querySelector(".mainContainerOne").style.animation = "none";
  document.querySelector(".teamsResultClass").style.minHeight = "99vh";
  document.querySelector(".teamsResultClass").style.minWidth = "98vw";
  document.querySelector(".teamOneFinal").style.padding = "15px";
  document.querySelector(".teamTwoFinal").style.padding = "15px";

  const team1 = [];
  const team2 = [];

  const inputs = document.querySelectorAll("#playerRows input");

  inputs.forEach((input, index) => {
    index % 2 === 0 ? team1.push(input.value) : team2.push(input.value);
  });

  // Execute the team generation code
  for (let i = 0; i < playerCount; i++) {
    let [player1, player2] = [team1[i], team2[i]];

    Math.random() < 0.5
      ? ((team1[i] = player1), (team2[i] = player2))
      : ((team2[i] = player1), (team1[i] = player2));
  }

  console.log("Team 1 : ", team1);
  console.log("Team 2 : ", team2);

  // Display the teams
  const teamsResultContainer = document.getElementById("teamsResult");

  document.querySelector(".teamOneFinal").innerHTML = "";
  document.querySelector(".teamTwoFinal").innerHTML = "";

  const teamOneHeading = document.createElement("h1");
  teamOneHeading.innerText = "Team A";
  document.querySelector(".teamOneFinal").appendChild(teamOneHeading);
  const teamTwoHeading = document.createElement("h1");
  teamTwoHeading.innerText = "Team B";
  document.querySelector(".teamTwoFinal").appendChild(teamTwoHeading);

  // teams
  team1.forEach((item) => {
    const person = document.createElement("h2");
    person.classList.add("person");
    person.innerText = item;
    document.querySelector(".teamOneFinal").appendChild(person);
  });
  team2.forEach((item) => {
    const person = document.createElement("h2");
    person.classList.add("person");
    person.innerText = item;
    document.querySelector(".teamTwoFinal").appendChild(person);
  });

  const teamOneCaptainBtn = document.createElement("button");
  teamOneCaptainBtn.classList.add("teamOneCaptainBtnClass");
  teamOneCaptainBtn.innerText = "Select A Team Captain";
  teamOneCaptainBtn.addEventListener("click", () => {
    let teamOneCaptainVar = generateCaptain(team1);
    teamOneCaptain.innerText = teamOneCaptainVar;
  });
  document.querySelector(".teamOneFinal").appendChild(teamOneCaptainBtn);
  const teamTwoCaptainBtn = document.createElement("button");
  teamTwoCaptainBtn.classList.add("teamTwoCaptainBtnClass");
  teamTwoCaptainBtn.innerText = "Select B Team Captain";
  teamTwoCaptainBtn.addEventListener("click", () => {
    let teamTwoCaptainVar = generateCaptain(team2);
    teamTwoCaptain.innerText = teamTwoCaptainVar;
  });
  document.querySelector(".teamTwoFinal").appendChild(teamTwoCaptainBtn);

  const teamOneCaptain = document.createElement("h1");
  teamOneCaptain.classList.add("teamOneCaptainClass");
  document.querySelector(".teamOneFinal").appendChild(teamOneCaptain);
  const teamTwoCaptain = document.createElement("h1");
  teamTwoCaptain.classList.add("teamTwoCaptainClass");
  document.querySelector(".teamTwoFinal").appendChild(teamTwoCaptain);
}

// Click for generate team :
document.querySelector(".generateTeamsClass").addEventListener("click", () => {
  waitForTenSec();
});

// Generate Captain Func :
function generateCaptain(playersArr) {
  let randNum = Math.floor(Math.random() * playersArr.length);

  return playersArr[randNum];
}

// Wait Function :
function waitForTenSec() {
  document.querySelector(".mainContainerOne").style.animation =
    "backgroundImgChanger 1s infinite ease-in-out";
  let timeOutToMakeTeam = setTimeout(generateTeams, 1000);
}

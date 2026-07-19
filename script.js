const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

const allButtons = document.querySelectorAll(".btn-score");

let homeScoreValue = 0;
let guestScoreValue = 0;

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const team = button.dataset.team;
    const points = parseInt(button.dataset.points);

    if (team === "home") {
      homeScoreValue += points;
      homeScore.textContent = homeScoreValue;
    } else if (team === "guest") {
      guestScoreValue += points;
      guestScore.textContent = guestScoreValue;
    }
  });
});

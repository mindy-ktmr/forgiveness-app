


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("preferences-form");
  const characterContainer = document.getElementById("character-container");
  const characterDiv = document.getElementById("character");
  const forgivenessSteps = document.getElementById("forgiveness-steps");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const preferences = document.getElementById("preferences").value;

  fetch("http://localhost:5000/generate-character", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ preferences: preferences }),
  })
    .then((response) => response.json())
    .then((generatedCharacter) => {
      characterDiv.innerHTML = `<p>${generatedCharacter.text}</p>`;
      characterContainer.style.display = "block


    displayForgivenessSteps();
  });
});

function generateCharacter(preferences) {
  const names = ["John Doe", "Jane Smith", "Sam Brown", "Olivia Johnson"];
  const selectedIndex = Math.floor(Math.random() * names.length);
  return {
    name: names[selectedIndex],
  };
}


function displayForgivenessSteps() {
  const steps = `
    <h3>Step 1: Rate your reaction</h3>
    <p>On a scale of 1 to 10, rate the intensity of your negative emotions towards the character.</p>
    <input type="number" id="reaction-rating" min="1" max="10" value="1">
    <h3>Step 2: Perspective shift</h3>
    <p>Take a moment to consider the character's situation and background. Try to understand why they might act the way they do.</p>
    <h3>Step 3: Visualize forgiveness</h3>
    <p>Imagine letting go of your negative emotions towards the character. Visualize yourself forgiving them and moving forward.</p>
    <button id="forgive-button">I forgive this character</button>
  `;

  forgivenessSteps.innerHTML = steps;

  const forgiveButton = document.getElementById("forgive-button");
  forgiveButton.addEventListener("click", function () {
    alert("You've forgiven the character!");
    characterContainer.style.display = "none";
    forgivenessSteps.innerHTML = "";
    document.getElementById("preferences").value = "";
  });
}

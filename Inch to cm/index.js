function convertToCm() {
  const feet = Number(document.getElementById("feet").value);
  const inches = Number(document.getElementById("inches").value);

  if (feet < 0 || inches < 0) {
    document.getElementById("cmResult").textContent =
      "Enter valid values";
    return;
  }

  const totalInches = feet * 12 + inches;
  const cm = totalInches * 2.54;

  document.getElementById("cmResult").textContent =
    cm.toFixed(2) + " cm";
}

function convertToFeet() {
  const cm = Number(document.getElementById("cm").value);

  if (cm <= 0) {
    document.getElementById("feetResult").textContent =
      "Enter a valid value";
    return;
  }

  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  document.getElementById("feetResult").textContent =
    `${feet} ft ${inches} in`;
}

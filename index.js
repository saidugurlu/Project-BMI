const calcBMI = () => {
  const letsWeight = document.getElementById("weight").value;
  const letsHeight = document.getElementById("height").value;
  const letsAge = document.getElementById("age").value;
  const letsBMI = (letsWeight / (letsHeight / 100) ** 2).toFixed(2);

  if (letsAge >= 18 && letsAge <= 34 && letsBMI <= 20) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Untergewicht`;
  } else if (letsAge >= 18 && letsAge <= 34 && letsBMI > 20 && letsBMI <= 26) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}Normalgewicht`;
  } else if (letsAge >= 18 && letsAge <= 34 && letsBMI > 26 && letsBMI <= 31) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Übergewicht`;
  } else if (letsAge >= 18 && letsAge <= 34 && letsBMI > 31) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Adipositas`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI <= 21) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}  Untergewicht`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI > 21 && letsBMI <= 28) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Normalgewicht`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI > 28 && letsBMI <= 32) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}  Übergewicht`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI > 32) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Adipositas`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI <= 21) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Untergewicht`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI > 21 && letsBMI <= 28) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Normalgewicht`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI > 28 && letsBMI <= 32) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Übergewicht`;
  } else if (letsAge >= 35 && letsAge <= 54 && letsBMI > 32) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}  Adipositas`;
  } else if (letsAge >= 55 && letsBMI <= 23) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}  Untergewicht`;
  } else if (letsAge >= 55 && letsBMI > 23 && letsBMI <= 30) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}  Normalgewicht`;
  } else if (letsAge >= 55 && letsBMI > 30 && letsBMI <= 35) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI}  Übergewicht`;
  } else if (letsAge >= 55 && letsBMI > 35) {
    document.getElementById(
      "resultBMI"
    ).innerHTML = `Dein BMI : ${letsBMI} Adipositas`;
  } else {
    document.getElementById("resultBMI").innerHTML = "Opppsss...";
  }
};

"use strict";

const calculateWeight = (planet, mass) => {
  const gValues = {
    mercury: 3.61,
    venus: 8.83,
    earth: 9.81,
    mars: 3.75,
    moon: 1.625,
    jupiter: 24.79,
    saturn: 11.2,
    uranus: 10.5,
    neptune: 13.3,
    pluto: 0.61,
  };

  if (!planet) {
    throw new Error("Planet name is required.");
  }

  if (!gValues.hasOwnProperty(planet)) {
    throw new Error(`Unknown planet name: ${planet}`);
  }

  if (!mass) {
    throw new Error("Mass is required.");
  }

  const g = gValues[planet];
  const weight = ((mass * g) / 9.81).toFixed(2);
  const imageUrl = `./assets/images/${planet}.png`.toLowerCase();

  return {
    planet,
    weight,
    imageUrl,
  };
};

const updateDisplay = ({ planet, weight, imageUrl }) => {
  const innerBox = document.querySelector(".inner_box");
  innerBox.style.display = "none";

  const innerBox1 = document.querySelector(".inner_box1");
  innerBox1.firstElementChild.src = imageUrl;

  document.querySelector(".inner_span").innerText = planet.toUpperCase();
  document.querySelector(".circle").innerText = `${weight} kg`;
};

const btnClick = document.querySelector(".calculate_BTN");
btnClick.addEventListener("click", () => {
  const { value: mass } = document.querySelector(".number_input");
  const { value: planet } = document.querySelector(".select_planet");

  try {
    const result = calculateWeight(planet, mass);
    updateDisplay(result);
  } catch (error) {
    console.error(error);
  }
});

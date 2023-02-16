const spaceFacts = [
    "The first living creature to go into space was a dog named Laika.",
    "The Great Red Spot on Jupiter is a storm that has been raging for at least 350 years.",
    "The Apollo 11 mission that landed humans on the moon was launched on July 16, 1969.",
    "The universe is estimated to be around 13.8 billion years old.",
    "The sun is actually a star, and it's about 4.6 billion years old.",
    "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
    "The temperature in the void of space is about minus 270.45 °C",
    "There are an estimated 100-400 billion stars in our galaxy, the Milky Way.",
    "In the observable universe there are an estimated 2 trillion (2,000,000,000,000) galaxies.",
    "The International Space Station is the largest ever crewed object in space.",
  ];
  
  function generateFact() {
    const factDiv = document.getElementById("fact");
    const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
    factDiv.innerHTML = randomFact;
  }
  
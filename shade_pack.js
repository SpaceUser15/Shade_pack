enabledMods.push("shade_pack.js");


elements.shade = {
  color: "#660000", // Soft spectral hue
  behavior: behaviors.GAS, // Gas behavior preset
  category: "Shade Pack", // Element tab
  state: "gas", // Physical state
  density: 0.1, // Very light
  temp: 25, // Spawn temperature in °C
  reactions: {
    "light": { elem1: "lighted_shade", elem2: null },
    "poison_gas": { elem1: "nitronium", elem2: null }
  },
  desc: ""
};

elements.lighted_shade = {
  color: "#FF073A", // Soft spectral hue
  behavior: behaviors.GAS, // Gas behavior preset
  category: "Shade Pack", // Element tab
  state: "gas", // Physical state
  density: 0.1, // Very light
  temp: 25, // Spawn temperature in °C
  reactions: {
    "light": { elem1: "plasma", elem2: null }
  },
  desc: ""
};

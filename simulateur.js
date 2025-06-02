const axios = require('axios');

function randomMeasure(type) {
  return type === "Température"
    ? (20 + Math.random() * 10).toFixed(2)
    : (40 + Math.random() * 30).toFixed(2);
}

setInterval(() => {
  const type = Math.random() > 0.5 ? "Température" : "Humidité";
  const valeur = randomMeasure(type);

  axios.post('http://localhost:3000/api/data', {
    capteur: "simulateur_http_01",
    type,
    valeur: parseFloat(valeur)
  }).then(() => {
    console.log(`[SIMULATION] ${type}: ${valeur}`);
  }).catch(console.error);
}, 5000);
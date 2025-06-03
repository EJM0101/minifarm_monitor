const socket = io();
const live = document.getElementById('live');
let historique = [];

function updateDisplay() {
  live.textContent = historique.map(d =>
    `[${new Date(d.timestamp).toLocaleTimeString()}] ${d.capteur} - ${d.type}: ${d.valeur}`
  ).join('\\n');
}

socket.on('new_data', (data) => {
  historique.push(data);
  if (historique.length > 10) historique.shift();
  updateDisplay();
});

socket.on('bulk_data', (data) => {
  historique = data || [];
  updateDisplay();
});
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 3000;

let latestData = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/data', (req, res) => {
  const { capteur, type, valeur } = req.body;

  if (!capteur || !type || typeof valeur === 'undefined') {
    return res.status(400).json({ error: 'Missing fields.' });
  }

  const data = {
    capteur,
    type,
    valeur: parseFloat(valeur),
    timestamp: new Date()
  };

  latestData.push(data);
  if (latestData.length > 10) latestData.shift();

  io.emit('new_data', data);
  res.json({ status: 'ok', message: 'Data received.', data });
});

app.get('/api/latest', (req, res) => {
  res.json(latestData);
});

io.on('connection', (socket) => {
  socket.emit('bulk_data', latestData);
});

http.listen(PORT, () => console.log(`🌱 MiniFarm Monitor en ligne sur http://localhost:${PORT}`));
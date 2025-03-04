const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

// Store latest data
let sensorData = { temperature: 0, acceleration: 0, fallDetected: false, heartRate: 0, spo2: 0 };
let gpsData = { latitude: 0, longitude: 0, gpsValid: false };

// Serve sensor data
app.get('/data', (req, res) => {
    res.json(sensorData);
});

// Serve GPS data
app.get('/gps', (req, res) => {
    res.json(gpsData);
});

// Receive sensor data
app.post('/data', (req, res) => {
    sensorData = req.body;
    console.log('Received sensor data:', sensorData);
    res.sendStatus(200);
});

// Receive GPS data
app.post('/gps', (req, res) => {
    gpsData = req.body;
    console.log('Received GPS data:', gpsData);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app; // для тестів

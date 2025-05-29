const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

let server = null;
if (require.main === module) {
    server = app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = { app, server };
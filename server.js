const express = require('express');
const enforce = require('express-sslify');

const app = express();

// Enforce HTTPS
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

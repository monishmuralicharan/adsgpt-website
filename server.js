import express from 'express';
import { HTTPS } from 'express-sslify';

const app = express();

// Enforce HTTPS
app.use(HTTPS({ trustProtoHeader: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

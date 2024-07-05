import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser';
import { createServer } from 'http';
import path from 'path';
import dotenv from 'dotenv';
import { getUserRole } from '../src/scripts/checkUserRole.js';
import { addAdvertiser } from '../src/scripts/addAdvertiser.js';
import { addCreator } from '../src/scripts/addCreator.js';

dotenv.config();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.use(express.json());

app.use(cors());

app.post('/api/signup', async (req, res) => {
  const { user, role } = req.body;
  try {
    if (role === 'creator') {
      const apiToken = await addCreator(user);
      res.status(200).json({ message: 'Creator added', apiToken });
    } else if (role === 'advertiser') {
      await addAdvertiser(user);
      res.status(200).json({ message: 'Advertiser added' });
    } else {
      res.status(400).json({ message: 'Invalid role' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { uid } = req.body;
  try {
    const user = await getUserRole(uid);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// Frontend routing - send all non-API requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// server creation
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


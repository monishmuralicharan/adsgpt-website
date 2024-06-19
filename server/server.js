import express from 'express';
import cors from "cors";
import { createServer } from 'http';
import dotenv from 'dotenv';
import { getUserRole } from '../src/scripts/checkUserRole.js';
import { addAdvertiser } from '../src/scripts/addAdvertiser.js';
import { addCreator } from '../src/scripts/addCreator.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Allow requests from specific origins
const corsOptions = {
  origin: 'https://your-heroku-app.herokuapp.com',
  // Additional options as needed
};

app.use(cors(corsOptions));

app.post('/signup', async (req, res) => {
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

app.post('/login', async (req, res) => {
  const { uid } = req.body;
  try {
    const user = await getUserRole(uid);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Serve static files
app.use(express.static('public'));

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
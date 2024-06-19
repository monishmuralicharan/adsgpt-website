const express = require('express');
const { addCreator } = require('../scripts/addCreator');
const { getUserRole } = require('../scripts/checkUserRole');

const router = express.Router();

router.post('/addCreator', async (req, res) => {
  try {
    const { uid, email } = req.body;
    const apiToken = await addCreator({ uid, email });
    res.json({ apiToken });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/checkUserRole/:uid', async (req, res) => {
  try {
    const role = await getUserRole(req.params.uid);
    res.json(role);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;

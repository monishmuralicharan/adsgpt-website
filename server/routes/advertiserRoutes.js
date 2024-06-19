const express = require('express');
const { addAdvertiser } = require('../scripts/addAdvertiser');

const router = express.Router();

router.post('/addAdvertiser', async (req, res) => {
  try {
    const { uid, email } = req.body;
    await addAdvertiser({ uid, email });
    res.status(200).send('Advertiser added successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

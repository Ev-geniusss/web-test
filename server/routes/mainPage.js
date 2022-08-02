const router = require('express').Router();
const { user } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allUser = await user.findAll();
    // console.log('==========>', allVacancies);
    res.json(allUser);
  } catch (err) {
    // console.log('ERROR:', err);
    res.sendStatus(404);
  }
});
module.exports = router; 

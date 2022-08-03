const router = require('express').Router();
const { Users } = require('../db/models/user');

router.get('/', async (req, res) => {
  try {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  } catch (err) {
    // console.log('ERROR:', err);
    res.sendStatus(404);
  }
});
module.exports = router; 

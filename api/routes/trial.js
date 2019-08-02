const express = require('express');
const router = express.Router();
const {getWinner, calculatePoints} = require('../utils');

const verifyPartyWinner = (req, res) => {
  const {body} = req;
  const parties = body.map(({name, signatures}) => ({
    name,
    points: calculatePoints(signatures)
  }));
  const winner = getWinner(parties);

  res.send(winner);
};

module.exports = router.post('/', verifyPartyWinner);

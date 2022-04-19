const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('/product GET route');
  console.log('is authenticated?', req.isAuthenticated());


  const queryText = `SELECT * FROM "product_list"`;

  pool.query(queryText).then((result) => {
    // console.log('results', result.rows)
    res.send(result.rows);
    // res.sendStatus(200)// For testing only, can be removed
}).catch((error) => {
    console.log(error);
    res.sendStatus(500);
});
  
});

/**
 * POST route template
 */
router.post('/addProduct', (req, res) => {
  // endpoint functionality

  //req.user.id is the currently logged in user's id: 
  //this is NOT sent on params, it is on the server
  const queryValues = [req.body.name, req.body.amount, req.body.amount_type, req.body.size,  req.body.type, req.body.par, req.body.image, req.body.expected_amount]

  const queryText = `
  INSERT INTO "product_list" 
  ("name", "amount", "amount_type", "size", "type", "par", "image", "expected_amount")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

pool
  .query(queryText, queryValues)
  .then(() => {res.sendStatus(201)})
  .catch((err) => {
    console.log('error posting item', err);
    res.sendStatus(500);
  });
});

module.exports = router;
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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
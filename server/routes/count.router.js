const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * GET route template
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('/count GET route');
    console.log('is authenticated?', req.isAuthenticated());
  
  
    const queryText = `SELECT * FROM "product_count"`;
  
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
    // endpoint functionality
    // const count = Number(req.body.current_count);
    console.log(req.body);
    //req.user.id is the currently logged in user's id: 
    //this is NOT sent on params, it is on the server
    const queryValues = [req.user.id, req.body.product_id, req.body.create_date, req.body.current_count];
    console.log('queryValues:', queryValues);
  
    const queryText = `
    INSERT INTO "product_count" 
    ("user_id", "product_id", "create_date", "current_count")
    VALUES ($1, $2, $3, $4)`;
  
  pool
    .query(queryText, queryValues)
    .then(() => {res.sendStatus(201)})
    .catch((err) => {
      console.log('error posting item', err);
      res.sendStatus(500);
    });
  });












module.exports = router;
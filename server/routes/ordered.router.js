const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

 // PUT request -> updates database with edited product data
 router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('/ORDERED ROUTER PUT route');
    console.log('is authenticated?', req.isAuthenticated());

    const id = req.body.product_id;
    const ordered = req.body;
    console.log('PUT route in /ordered: params.id and req.body:', id, ordered);
    
    const queryText = `UPDATE "product_list"
                   SET "product_ordered" = TRUE
                   WHERE "id" = $1;`;
  
    const values = [id];
  
    pool.query(queryText, values)
    .then( result => {
      res.sendStatus(201);
    })
    .catch( error => {
      console.log('server PUT', error)
      res.sendStatus(500);
    })
  }); 

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('/product GET route');
  console.log('is authenticated?', req.isAuthenticated());


  const queryText = `SELECT * FROM "product_list" ORDER BY "product_list".id ASC;`;

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
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality

  //req.user.id is the currently logged in user's id: 
  //this is NOT sent on params, it is on the server
  const queryValues = [req.body.name, req.body.amount, req.body.unit_type,  req.body.type, req.body.par, req.body.image, req.body.expected_amount]

  const queryText = `
  INSERT INTO "product_list" 
  ("name", "amount", "unit_type", "type", "par", "image", "expected_amount")
  VALUES ($1, $2, $3, $4, $5, $6, $7)`;

pool
  .query(queryText, queryValues)
  .then(() => {res.sendStatus(201)})
  .catch((err) => {
    console.log('error posting item', err);
    res.sendStatus(500);
  });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // endpoint functionality
    const id = [req.params.id]
    const queryText = (`DELETE FROM "product_list"
                      WHERE "product_list".id = $1;`)
    pool
      .query(queryText, id)
      .then((response) => {
        console.log('Deleted')
        res.sendStatus(200);
      })
      .catch ((error) => {
      console.log('Error in DELETE:', error);
      res.sendStatus(500);
    });
  });

 // PUT request -> updates database with edited product data
router.put('/:id', rejectUnauthenticated, (req, res) => {

  const id = req.params.id;
  const product = req.body;
  console.log('id & product:', id, product);
  
  const queryText = `UPDATE "product_list"
                 SET "name" = $1,
                     "amount" = $2,
                     "unit_type" = $3,
                     "type" = $4,
                     "par" = $5,
                     "image" = $6,
                     "expected_amount" = $7
                 WHERE "id" = $8;`;

  const values = [req.body.name, req.body.amount, req.body.unit_type,  req.body.type, req.body.par, req.body.image, req.body.expected_amount, req.body.id];

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
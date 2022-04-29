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
  
  
    const queryText = `SELECT "product_count".id, "product_count".product_id, "product_count".user_id, "product_count".create_date, "product_count".current_count, "product_list".name
    FROM "product_count"
    JOIN "product_list" ON "product_list".id = "product_count".product_id
    ORDER BY "product_count".product_id ASC;`;
  
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
  

  //PUT Route
// PUT request -> updates database with edited product data
router.put('/:id', (req, res) => {

  const productCount = req.body;
  console.log('req.body:', productCount);
  
  const queryText = `UPDATE "product_count"
                 SET "user_id" = $1,
                     "create_date" = $2,
                     "current_count" = $3
                 WHERE "product_id" = $4;
  `;
  
  const values = [req.user.id, req.body.create_date, req.body.current_count, req.body.product_id];
  console.log('query values from PUT Route:',values);
  
  pool.query(queryText, values)
  .then( result => {
    res.sendStatus(201);
  })
  .catch( error => {
    console.log('server PUT', error)
    res.sendStatus(500);
  })
});

//DELETE Route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const id = [req.params.id]
  const queryText = (`DELETE FROM "product_count"
                    WHERE "product_count".id = $1;`)
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










module.exports = router;
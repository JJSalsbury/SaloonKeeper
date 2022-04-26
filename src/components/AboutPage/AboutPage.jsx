import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>The Saloon Keeper is an application that provides a simple solution for product accountability.</p>
      </div>
      <div>
        <p>Add sales data for wine, beer and liquors, then sales to track cost of goods sold to better understand how your inventory impacts sales and profits. 
          With this application, a user can track product costs, set profit margins for beverages or cocktail recipes, and review inventory performance to help reduce costs and grow profits.
          It’s time to replace mountains and mountains of spreadsheets with a flexible platform that connects each step of inventory management. 
          From taking counts to costing drinks, The Saloon Keeper can help strengthen your bar program. Saloon Keeper makes weekly purchasing seamless by showing you what products you need to order and what you don’t.
          This application removes the guesswork when placing orders by suggesting smart par levels to lower liquor costs and save time.</p>
      </div>
      <div>
        <p>Saloon keeper calculates usage rates by pulling data from inventory counts and purchases and providing a complete view of your inventory performance, in turn, giving you more control. 
          Usage rates add transparency to any bar program. The Saloon Keeper provides that transparency.
          Purchasing is made simple by showing you products below par that you should order and a minimum required stock based on count data tracked in the application.</p>
      </div>
      <div>
        <p>See your usage rates and understand exactly how fast a product sells, so you know when it's time to order. Reduce excess inventory stock and lower costs for your bar. 
          You can increase profits without raising prices or sacrificing your establishment's standards! You can now put your inventory usage levels to work for you.
          Once usage is identified with this application, you will be given 3 different metrics that use inventory usage, which can help increase overall profitability; 
          variance, pour costs, and par levels. All this essential information is made available to the user with Saloon Keeper, making complex counts and outdated processes a thing of the past. 
          Start making more profit TODAY! With the Saloon Keeper app!</p>
      </div>
    </div>
  );
}

export default AboutPage;

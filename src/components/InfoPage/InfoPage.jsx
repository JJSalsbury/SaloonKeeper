import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h3>Technologies Used Include:</h3>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Redux-Sagas</li>
        <li>Node.js</li>
        <li>PostgresSql</li>
        <li>Material UI</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}

export default InfoPage;

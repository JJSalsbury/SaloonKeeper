import React from 'react';
import './InfoPage.css';



// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
      <div className="container">
        <h3>Contact Information</h3>
        <h1>JJ Salsbury</h1>
        <h3>joshuajsalsbury@gmail.com</h3>
        <h3>github.com/JJSalsbury/JJSalsbury.github.io</h3>
        <h3>www.linkedin.com/in/jj-salsbury-10532386/</h3>
      </div>
      <div >
        <h3 className="techContainer">Technologies Used Include:</h3>
        <ul className="techList">
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

    </>
  );
}

export default InfoPage;

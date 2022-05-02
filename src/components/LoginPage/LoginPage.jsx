import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <center>
      <img src="images/SaloonKeeperLogo1024_1.png" className="iconLogin" />
      <h1 className="title">SaloonKeeper</h1>
      <LoginForm />

      
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;

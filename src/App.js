import React from "react";
import Profile from './components/Profile';
import logo from './assets/Octocat.png';
import './index.css';


function App() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <img src={logo} height="100" alt="LogoGitHub"/> <br/>
      <Profile />
    </div>
  );
}

export default App;

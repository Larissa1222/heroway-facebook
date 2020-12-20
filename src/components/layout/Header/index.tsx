import React from 'react';
import '../_main.css';
import './_header.css';

import FacebookLogo from '../../img/facebook-logo.svg';
function Header(){
  return (
    <header className="header">
      <div className="logo">
      <img src={FacebookLogo} alt="Facebook Logo" />
      </div>
    </header>
  )
}

export default Header;

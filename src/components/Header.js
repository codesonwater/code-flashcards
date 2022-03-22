import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

function Header() { 
  const {isLightTheme} = useContext(ThemeContext)  
    return (
      <header className={isLightTheme ? 'header': 'darkHeader'}>
        <Link 
          to="/" 
          className={"headerLogo"} 
          style={{float:"inline-start"}}> {"{  codeCards  }"} </Link>
        <Link to="login"  className="NavItem"> Login </Link>
        <Link to="/questions/create" className="NavItem"> Add Card </Link>
        <ThemeToggle />
      </header>
    )   
}

export default Header 
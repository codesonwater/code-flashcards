import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {( context ) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
            // <nav style={{ background: theme.background, color: theme.textHeader }}>
              <header className='header'>
                <Link to="/" className="headerLogo" style={{float:"inline-start"}}> {"{  codeCards  }"} </Link>
                <Link to="login" className="NavItem"> Login </Link>
                <Link to="create" className="NavItem"> Add A Question </Link>
                <ThemeToggle />
              </header>
            // </nav>
          )   
      }}</ThemeContext.Consumer>
    );
  }
}

export default Header 
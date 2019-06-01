import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      /* 
      https://www.iconfinder.com/icons/1243689/call_phone_icon
      Creative Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk */
      <NavWrapper className="navbar px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="navbar-brand rounded float-left custom-logo"
          />
        </Link>
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link font-weight-bold">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  color: tomato;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: tomato;
    color: var(--black);
  }
  &:focus {
    outline: none;
  }
`

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: #ffffff;
    font-size: 1.3rem;
    text-transform: capitalized;
  }
`

export default Header;

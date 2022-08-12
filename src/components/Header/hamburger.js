import React from 'react'
import '../../assets/scss/hamburger.scss';
import { NavLink } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi';
import venia from '../../assets/images/venia.png';

function Hamburger(props) {
  return (
    <div className='hamburgerPhone'>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="hamberger__logo" >
            <NavLink className="" to="/"><img src={venia} width="80" /></NavLink>
          </div>
          <div className="header__icons">
            <ul>
              <NavLink to="/cart" className="">
                <FiShoppingBag />{' '}
                {props.countCartItems ? (
                  <button className="cartCount1">{props.countCartItems}</button>
                ) : (
                  ''
                )}
              </NavLink>{' '}
            </ul>
          </div>
          <div className="menu-items">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/women">Women</NavLink></li>
            <li><NavLink to="/men" >Men</NavLink></li>
            <li><NavLink to="/smartGear" >Smart Gear</NavLink></li>
            <li><NavLink to="/accessories" >Accessories</NavLink></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
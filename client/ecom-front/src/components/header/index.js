import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export default function index() {
  const openMenu = () => {
    document.querySelector('.side-bar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.side-bar').classList.remove('open');
  };
  return (
    <>
      <header className="header">
        <div className="amazona-logo">
          <button onClick={openMenu}>&#9776;</button>
          <Link to="/">amazona</Link>
        </div>
        <div className="amazona-links">
          <a>Sign in</a>
          <a>Cart</a>
        </div>
      </header>
      <aside className="side-bar">
        <div className="sideBar-title-button">
          <h3 className="shopping-categories">shopping categories</h3>
          <button onClick={closeMenu}>
            <span>x</span>
          </button>
        </div>
        <ul className="categories-list">
          <li>
            <a href="inde.html">pants</a>
          </li>
          <li>
            <a href="index.html">shirts</a>
          </li>
        </ul>
      </aside>
    </>
  );
}

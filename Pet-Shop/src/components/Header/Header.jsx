import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.css';
import mainLogo from '../../assets/icons/main-logo.svg';
import cartIcon from '../../assets/icons/cart.svg';

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.Header}>
      <div className="globalContainer">
        <div className={styles.headerContent}>
          <Link to="/">
            <img src={mainLogo} alt="Main Logo" />
          </Link>
          <nav className={styles.navBlock}>
            <ul>
              <li>
                <Link to="/">Main Page</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/discounted-products">All Sales</Link>
              </li>
            </ul>
          </nav>
          <Link to="/cart" className={styles.cartLink}>
            <img src={cartIcon} alt="Cart" />
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

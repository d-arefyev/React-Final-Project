import { Link } from "react-router-dom";
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className="globalContainer">

        <div className={styles.headerContent}>
          <Link to="/">
            <img src="src/assets/icons/main-logo.svg" alt="main-logo" />
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

          <Link to="/cart">
            <img src="src/assets/icons/cart.svg" alt="Cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}

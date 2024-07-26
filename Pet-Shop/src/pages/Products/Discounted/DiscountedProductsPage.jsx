import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';

import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from './DiscountedProductsPage.module.css';

const DiscountedProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products/all');
        const discountedProducts = response.data.filter(product => product.discont_price);
        setProducts(discountedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filterAndSortProducts = () => {
      const minPrice = parseFloat(searchParams.get("minPrice") || "0");
      const maxPrice = parseFloat(searchParams.get("maxPrice") || Infinity);
      const sortType = searchParams.get("sortType");

      // Filtering products by price range
      const filtered = products.filter(product => {
        const productPrice = product.discont_price;
        return productPrice >= minPrice && productPrice <= maxPrice;
      });

      // Sorting products based on the selected sort type
      const sorted = filtered.sort((a, b) => {
        if (sortType === "newest") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortType === "priceHighToLow") {
          return b.discont_price - a.discont_price;
        } else if (sortType === "priceLowToHigh") {
          return a.discont_price - b.discont_price;
        }
        return 0; // Default sort
      });

      setFilteredProducts(sorted);
    };

    filterAndSortProducts();
  }, [products, searchParams]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(name, type === "checkbox" ? checked : value);
    setSearchParams(newSearchParams);
  };

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <div className="globalContainer">
      <div className={styles.categoriesPage}>
        <Breadcrumbs
          items={[
            { path: '/', label: 'Main page' },
            { path: '/categories', label: 'All sales', isActive: true }
          ]}
        />
        <div className={styles.categoriesPageTitle}>
          <h2>Discounted items</h2>
        </div>

        <div className={styles.filtersContainer}>
          <label>
            Min price
            <input
              name="minPrice"
              type="number"
              value={searchParams.get("minPrice") || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Max price
            <input
              name="maxPrice"
              type="number"
              value={searchParams.get("maxPrice") || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Sort type
            <select
              name="sortType"
              value={searchParams.get("sortType") || "default"}
              onChange={handleChange}
            >
              <option value="default">by default</option>
              <option value="newest">newest</option>
              <option value="priceHighToLow">price: high-low</option>
              <option value="priceLowToHigh">price: low-high</option>
            </select>
          </label>
        </div>

        <ul className={styles.gridCategoriesContainer}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscountedProductsPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modalSlice';
import GetDiscountButton from '../Buttons/GetDiscountButton/GetDiscountButton';
import styles from './DiscountForm.module.css';
import discountImage from '../../assets/images/pets.png';

function DiscountForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/sale/send', {
        name,
        phone,
        email,
      });

      if (response.status === 200) {
        dispatch(openModal({
          title: 'Success',
          content: 'Your request has been submitted successfully!',
        }));
      }
    } catch (error) {
      dispatch(openModal({
        title: 'Error',
        content: 'There was an error submitting your request. Please try again later.',
      }));
    }
  };

  return (
    <div className="globalContainer">
      <div className={styles.discountFormContainer}>
        <div className={styles.imageContainer}>
          <img src={discountImage} alt="Discount" className={styles.discountImage} />
        </div>
        <div className={styles.formContainer}>
          <h2>5% off on the first order</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <GetDiscountButton onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DiscountForm;

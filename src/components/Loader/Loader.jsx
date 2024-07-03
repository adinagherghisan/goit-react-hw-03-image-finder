import React from 'react';
import styles from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => (
  <div className={styles.loader}>
    <BallTriangle
      height={100}
      width={100}
      color="#00BFFF"
      ariaLabel="loading"
    />
  </div>
);

export default Loader;

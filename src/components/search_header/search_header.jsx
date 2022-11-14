import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src='/images/logo.png' alt='logo' />
      <h1 className={styles.title}>React Youtube Project</h1>
      <input className={styles.input} type='search' placeholder='Search' />
      <button className={styles.button} type='submit'>
        <img src='/images/search.png' alt='search' />
      </button>
    </header>
  );
};
export default SearchHeader;
